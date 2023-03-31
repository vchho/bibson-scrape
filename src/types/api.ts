export interface ApiResult {
  '@odata.context': string;
  value: Value[];
}

export interface Value {
  UniqueId: string;
  InventoryId: string;
  ProductTypeDesc: ProductTypeDesc;
  ProductTypeCode: number;
  SellingStyleNbr: SellingStyleNbr;
  SellingStyleName: SellingStyleName;
  SellingColorNbr: string;
  SellingColorName: string;
  ImageSellingColorNbr: string;
  ImageSellingStyleNbr: SellingStyleNbr;
  InventoryStyleNumber: InventoryStyleNumber;
  InventoryColorNumber: string;
  ShowOnCollectionCat: boolean;
  ShowOnBrowseCat: boolean;
  ShowOnFloorvana: boolean;
  ColorFamilyDesc: string;
  ProductCategoryCode: ProductCategoryCode;
  ResilientSubTypeDesc: ResilientSubTypeDesc;
  TTRCollection: TTRCollection;
  CollectionDesc: Desc;
  SellStyleMktgDesc: null;
  ColorMktgDesc: string;
  ProductCatDesc: ProductCatDesc;
  MSRPCodeDesc: null;
  MSRPRange: null;
  Shade: Shade;
  Finish: Finish;
  SizeWidth: string;
  SizeLength: string;
  Thickness: Thickness;
  SqFtPerCarton: number;
  WearLayer: WearLayer;
  PatternRepeatDrop: null;
  InstallationMethodDesc: InstallationMethodDesc;
  InstallGrade: InstallGrade;
  Look: Look;
  Warranty: Warranty;
  LightComWarranty: LightCOMWarranty;
  ComparisonGuide: null;
  SurfaceTexture: SurfaceTexture;
  GlossLevel: null;
  IsMadeInUsa: boolean;
  CartProductNbr: null;
  FreeCartProductNbr: null;
  ShowAddToCart: null;
  StyleSequence: number;
  ColorSequence: number;
  ProductColorSequence: number;
  Vignette: Vignette;
  VignetteId: number;
  DefaultSsColorNumber: string;
  IsDefaultStyleColor: boolean;
  StaticRoomFlag: boolean;
  ShowOnlyOnProductList: boolean;
  SellingCompany: SellingCompany;
  CountryOfOrigin: CountryOfOrigin;
  CreateDateTimeOffSet: Date;
  HasMainImage: boolean;
  HasRenderImage: boolean;
  HasSideImage: boolean;
  HasSwatchboxImage: boolean;
  HasSwatchImage: boolean;
  HasThumbnailImage: boolean;
  Widen_HasRoom: boolean;
  Widen_HasRoom2: boolean;
  Widen_HasRoom3: boolean;
  Widen_HasRoom4: boolean;
  Widen_HasRoom5: boolean;
  Widen_HasRoom6: boolean;
  Widen_HasRoom7: boolean;
  Widen_HasRoom8: boolean;
  Widen_HasRoom9: boolean;
  Widen_HasMain: boolean;
  Widen_HasSwatch: boolean;
  Widen_HasSide: boolean;
  Widen_HasAngled: boolean;
  Widen_HasTileable: boolean;
  Widen_HasPencil: boolean;
  Widen_HasPeelback: boolean;
  Widen_HasAngleseam: boolean;
  Widen_HasAngleside: boolean;
  Widen_HasAnglesideseam: boolean;
  Widen_HasBack: boolean;
  Widen_HasMonolithic: boolean;
  Widen_HasAshlar: boolean;
  Widen_HasHerringbone: boolean;
  Widen_HasBrick: boolean;
  Widen_HasBasketweave: boolean;
  Widen_HasFloorshot: boolean;
  Widen_HasStagger: boolean;
  Widen_HasTileableAshlar: boolean;
  Widen_HasTileableMonolithic: boolean;
  Widen_Has5thmRoom: boolean;
  Widen_HasPhilRoom: boolean;
  Widen_HasVRoom: boolean;
  Widen_HasHRoom: boolean;
  Widen_HasLabelRoom: boolean;
  Widen_Has1TO1: boolean;
  Widen_Has3PieceFan: boolean;
  Widen_Has5thmRoom2: boolean;
  Widen_HasBackCorner: boolean;
  Widen_HasCornerProfile: boolean;
  Widen_HasFeature1: boolean;
  Widen_HasFeature2: boolean;
  Widen_HasFeature3: boolean;
  Widen_HasFeature4: boolean;
  Widen_HasFeature5: boolean;
  Widen_HasFeature6: boolean;
  Widen_HasFeature7: boolean;
  Widen_HasFeature8: boolean;
  Widen_HasFeature9: boolean;
  Widen_HasInstall: boolean;
  Widen_HasMain1: boolean;
  Widen_HasMain10: boolean;
  Widen_HasMain2: boolean;
  Widen_HasMain3: boolean;
  Widen_HasMain4: boolean;
  Widen_HasMain5: boolean;
  Widen_HasMain6: boolean;
  Widen_HasMain7: boolean;
  Widen_HasMain8: boolean;
  Widen_HasMain9: boolean;
  Widen_HasSinglePiece: boolean;
  Widen_HasSinglePieceAngle: boolean;
  Widen_HasTileableBasketweave: boolean;
  Widen_HasTileableBoxedIn: boolean;
  Widen_HasTileableBrick: boolean;
  Widen_HasTileableHalfBasketWeave: boolean;
  Widen_HasTileableHerringbone: boolean;
  Widen_HasTileableOffset: boolean;
  Widen_HasTileableQuarterturn: boolean;
  Widen_HasTileableRandom: boolean;
  Widen_HasTileableStagger: boolean;
  WidenId_Room: string;
  WidenId_Room2: WidenIDRoom2;
  WidenId_Room3: string;
  WidenId_Room4: string;
  WidenId_Room5: string;
  WidenId_Room6: string;
  WidenId_Room7: string;
  WidenId_Room8: string;
  WidenId_Room9: string;
  WidenId_Main: string;
  WidenId_Swatch: string;
  WidenId_Side: string;
  WidenId_Angled: string;
  WidenId_Tileable: string;
  WidenId_Pencil: string;
  WidenId_Peelback: string;
  WidenId_Angleseam: string;
  WidenId_Angleside: string;
  WidenId_Anglesideseam: string;
  WidenId_Back: string;
  WidenId_Monolithic: string;
  WidenId_Ashlar: string;
  WidenId_Herringbone: string;
  WidenId_Brick: string;
  WidenId_Basketweave: string;
  WidenId_Floorshot: string;
  WidenId_Stagger: string;
  WidenId_TileableAshlar: string;
  WidenId_TileableMonolithic: string;
  WidenId_5thmRoom: string;
  WidenId_PhilRoom: string;
  WidenId_VRoom: string;
  WidenId_HRoom: string;
  WidenId_LabelRoom: string;
  WidenId_1TO1: string;
  WidenId_3PieceFan: string;
  WidenId_5thmRoom2: string;
  WidenId_BackCorner: string;
  WidenId_CornerProfile: string;
  WidenId_Feature1: string;
  WidenId_Feature2: string;
  WidenId_Feature3: string;
  WidenId_Feature4: string;
  WidenId_Feature5: string;
  WidenId_Feature6: string;
  WidenId_Feature7: string;
  WidenId_Feature8: string;
  WidenId_Feature9: string;
  WidenId_Install: string;
  WidenId_Main1: string;
  WidenId_Main10: string;
  WidenId_Main2: string;
  WidenId_Main3: string;
  WidenId_Main4: string;
  WidenId_Main5: string;
  WidenId_Main6: string;
  WidenId_Main7: string;
  WidenId_Main8: string;
  WidenId_Main9: string;
  WidenId_SinglePiece: string;
  WidenId_SinglePieceAngle: string;
  WidenId_TileableBasketweave: string;
  WidenId_TileableBoxedIn: string;
  WidenId_TileableBrick: string;
  WidenId_TileableHalfBasketWeave: string;
  WidenId_TileableHerringbone: string;
  WidenId_TileableOffset: string;
  WidenId_TileableQuarterturn: string;
  WidenId_TileableRandom: string;
  WidenId_TileableStagger: string;
  Durability: number;
  Softness: number;
  Cleanability: number;
  IsHideConfidenceRating: boolean;
  ColorCount: number;
  SampleCount: number;
  HasPrintedSamples: boolean;
  IsBaselineData: boolean;
  InstallOnFloors: boolean;
  InstallOnWalls: boolean;
  InstallOnExterior: boolean;
  InstallOnExteriorWalls: boolean;
  InstallOnCountertops: boolean;
  InstallInShowers: boolean;
  IsDropped: boolean;
  Price: number;
  ProductCode: string;
  InstallationPatterns: null;
  RestrictedCountryCodes: null;
  PrimaryMktgStyleCode: number;
  PrimaryMktgStyleDesc: Desc;
  ParentMktgStyleCode: null;
  ParentMktgStyleDesc: null;
  CategoryStory: CategoryStory;
  CommercialGrade: null;
  NoiseReduction: null;
  ScratchWarranty: null;
  HighTraffic: null;
  Sustainability: null;
  CategoryPrice: null;
  RoomTypes: null;
  InventoryLevelCTA: InventoryLevelCta;
  InventoryLevelCTAAnderson: InventoryLevelCta;
  InventoryLevelCTACoretec: InventoryLevelCta;
  InventoryLevelCTABuilder: InventoryLevelCta;
  InventoryLevelCTAPhilCommercial: InventoryLevelCta;
  InventoryLevelCTAFloorvana: InventoryLevelCta;
  InventoryLevelUOM: InventoryLevelUOM;
  InventoryLevelQty: number;
  ProductGroupId: number;
  ProductGroupPermanentName: ProductGroupPermanentName;
  ProductGroupShowOnSearch: boolean;
  ProductGroupShowOnBrowseCat: boolean;
  ProductGroupShowOnSpecialtyCat: boolean;
  ProductGroupShowOnVizTool: boolean;
  ProductGroupShowOnColorMatch: boolean;
  CustomFieldsStyle: any[];
  CustomFieldsColor: any[];
}

export enum CategoryStory {
  NewResilientCollection = 'New Resilient collection',
}

export enum Desc {
  Floorte = 'Floorte',
}

export enum CountryOfOrigin {
  CN = 'CN',
}

export enum Finish {
  PolyurethaneWGlas = 'POLYURETHANE W/ GLAS',
}

export enum SellingStyleNbr {
  The3302V = '3302V',
}

export enum InstallGrade {
  AboveOnBelow = 'ABOVE/ON/BELOW',
}

export enum InstallationMethodDesc {
  DirectGlueFloat = 'DIRECT GLUE/FLOAT',
}

export enum InventoryLevelCta {
  AvailableNow = 'Available Now',
}

export enum InventoryLevelUOM {
  Sqf = 'SQF',
}

export enum InventoryStyleNumber {
  V3322 = 'V3322',
}

export enum LightCOMWarranty {
  The20YearLightCommercial = '20 YEAR LIGHT COMMERCIAL',
}

export enum Look {
  Wpc = 'WPC',
}

export enum ProductCatDesc {
  EvpResidential = 'EVP - RESIDENTIAL',
}

export enum ProductCategoryCode {
  Ea = 'EA',
}

export enum ProductGroupPermanentName {
  Shawfloors = 'shawfloors',
}

export enum ProductTypeDesc {
  Resilient = 'Resilient',
}

export enum ResilientSubTypeDesc {
  TP = 'T & P',
}

export enum SellingCompany {
  ShawResilTP = 'Shaw Resil T&P',
}

export enum SellingStyleName {
  TitanHDPlusPlatinum = 'TITAN HD PLUS PLATINUM',
}

export enum Shade {
  Dark = 'Dark',
  Light = 'Light',
  Medium = 'Medium',
}

export enum SurfaceTexture {
  EmbossedSurfaceTexture = 'Embossed Surface Texture',
}

export enum TTRCollection {
  ResilientResidential = 'RESILIENT RESIDENTIAL',
}

export enum Thickness {
  The1532 = '15/32',
}

export enum Vignette {
  The20210209_VinylBathroomVSquare = '20210209_VINYL_BATHROOM_V_SQUARE',
}

export enum Warranty {
  Lifetime = 'LIFETIME',
}

export enum WearLayer {
  The30Mil = '30 MIL',
}

export enum WidenIDRoom2 {
  Empty = '',
  Rujwuxqav2 = 'rujwuxqav2',
}
