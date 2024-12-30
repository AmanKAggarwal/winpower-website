// Import all images
import aboutUsTitle from '../assets/aboutustitle.png';
import powerline1 from '../assets/powerline1.png';
import powerline2 from '../assets/powerline2.png';
import powerline3 from '../assets/powerline3.png';
import constructionWorker from '../assets/constructionworker.png';
import winpowerJpg from '../assets/winpower.jpg';
import projectsTitle from '../assets/projectstitle.png';
import designBuilding from '../assets/designbuilding.png';
import building from '../assets/building.png';
import compassDrawing from '../assets/compassdrawing.png';
import substationHq from '../assets/substationhq.png';
import crane from '../assets/crane.png';
import winpowerLogo from '../assets/winpowerlogo.png';
import surveyInspection from '../assets/surveyinspection.png';
import reactSvg from '../assets/react.svg';
import quotationMarks from '../assets/quotationmarks.png';
import genericConstruction from '../assets/genericconstruction.png';
import surveyInspectionHeader from '../assets/surveyinspectionheader.png';
import powerGridBannerHome from '../assets/powergridbannerhome.png';

// Export individual images
export {
  aboutUsTitle as AboutUsTitleImage,
  powerline1 as PowerlineImage,
  powerline2 as Powerline2Image,
  powerline3 as Powerline3Image,
  constructionWorker as ConstructionWorkerImage,
  winpowerJpg as WinpowerJpgImage,
  projectsTitle as ProjectsTitleImage,
  designBuilding as DesignBuildingImage,
  building as BuildingImage,
  compassDrawing as CompassDrawingImage,
  substationHq as SubstationHQImage,
  crane as CraneImage,
  winpowerLogo as WinpowerLogoImage,
  surveyInspection as SurveyInspectionImage,
  reactSvg as ReactSvgImage,
  quotationMarks as QuotationMarksImage,
  genericConstruction as GenericConstructionImage,
  surveyInspectionHeader as SurveyInspectionHeaderImage,
  powerGridBannerHome as PowerGridBannerHomeImage,
};

// Export as a single object
export const Images = {
  AboutUsTitleImage: aboutUsTitle,
  PowerlineImage: powerline1,
  Powerline2Image: powerline2,
  Powerline3Image: powerline3,
  ConstructionWorkerImage: constructionWorker,
  WinpowerJpgImage: winpowerJpg,
  ProjectsTitleImage: projectsTitle,
  DesignBuildingImage: designBuilding,
  BuildingImage: building,
  CompassDrawingImage: compassDrawing,
  SubstationHQImage: substationHq,
  CraneImage: crane,
  WinpowerLogoImage: winpowerLogo,
  SurveyInspectionImage: surveyInspection,
  ReactSvgImage: reactSvg,
  QuotationMarksImage: quotationMarks,
  GenericConstructionImage: genericConstruction,
  SurveyInspectionHeaderImage: surveyInspectionHeader,
  PowerGridBannerHomeImage: powerGridBannerHome,
} as const;

// Export type for type safety
export type ImageKeys = keyof typeof Images;
