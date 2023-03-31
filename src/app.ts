import axios, { AxiosResponse } from 'axios';
import { ApiResult } from './types/api';
import ObjectsToCsv from 'objects-to-csv';

async function run() {
  const apiResult: AxiosResponse<ApiResult> = await axios.get(
    'https://shawfloors.com/api/odata/resilient?$filter=SellingStyleNbr%20eq%20%273302v%27%20and%20IsDropped%20eq%20false%20and%20ProductGroupPermanentName%20eq%20%27shawfloors%27&$orderby=ColorSequence&$expand=CustomFieldsStyle,CustomFieldsColor&_=1680250793814'
  );

  const formattedResult = apiResult.data.value.map((v) => {
    // Missing finish property
    return {
      style: `${v.ImageSellingColorNbr} ${v.SellingStyleName}`,
      color: `${v.SellingColorNbr}  ${v.SellingColorName}`,
      collection: v.TTRCollection,
      construction: v.Look,
      width: Math.round(Number(v.SizeWidth)),
      length: Math.round(Number(v.SizeLength)),
      plankThickness: v.Thickness,
      sqFtPerBox: v.SqFtPerCarton,
      installationMethod: v.InstallationMethodDesc,
      installationGrade: v.InstallGrade,
      wearLayer: v.WearLayer,
      uniqueId: v.UniqueId,
      inventoryId: v.InventoryId,
    };
  });

  const csv = new ObjectsToCsv(formattedResult);

  await csv.toDisk('./test.csv');

  // Return the CSV file as string:
  console.log(await csv.toString());
}

run();
