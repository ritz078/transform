import addAttributesToSVGElement from "svgo/plugins/addAttributesToSVGElement";
import addClassesToSVGElement from "svgo/plugins/addClassesToSVGElement";
import cleanupAttrs from "svgo/plugins/cleanupAttrs";
import cleanupEnableBackground from "svgo/plugins/cleanupEnableBackground";
import cleanupIDs from "svgo/plugins/cleanupIDs";
import cleanupListOfValues from "svgo/plugins/cleanupListOfValues";
import cleanupNumericValues from "svgo/plugins/cleanupNumericValues";
import collapseGroups from "svgo/plugins/collapseGroups";
import convertColors from "svgo/plugins/convertColors";
import convertEllipseToCircle from "svgo/plugins/convertEllipseToCircle";
import convertPathData from "svgo/plugins/convertPathData";
import convertShapeToPath from "svgo/plugins/convertShapeToPath";
import convertStyleToAttrs from "svgo/plugins/convertStyleToAttrs";
import convertTransform from "svgo/plugins/convertTransform";
import inlineStyles from "svgo/plugins/inlineStyles";
import mergePaths from "svgo/plugins/mergePaths";
import minifyStyles from "svgo/plugins/minifyStyles";
import moveElemsAttrsToGroup from "svgo/plugins/moveElemsAttrsToGroup";
import moveGroupAttrsToElems from "svgo/plugins/moveGroupAttrsToElems";
import prefixIds from "svgo/plugins/prefixIds";
import removeAttributesBySelector from "svgo/plugins/removeAttributesBySelector";
import removeAttrs from "svgo/plugins/removeAttrs";
import removeComments from "svgo/plugins/removeComments";
import removeDesc from "svgo/plugins/removeDesc";
import removeDimensions from "svgo/plugins/removeDimensions";
import removeDoctype from "svgo/plugins/removeDoctype";
import removeEditorsNSData from "svgo/plugins/removeEditorsNSData";
import removeElementsByAttr from "svgo/plugins/removeElementsByAttr";
import removeEmptyAttrs from "svgo/plugins/removeEmptyAttrs";
import removeEmptyContainers from "svgo/plugins/removeEmptyContainers";
import removeEmptyText from "svgo/plugins/removeEmptyText";
import removeHiddenElems from "svgo/plugins/removeHiddenElems";
import removeMetadata from "svgo/plugins/removeMetadata";
import removeNonInheritableGroupAttrs from "svgo/plugins/removeNonInheritableGroupAttrs";
import removeOffCanvasPaths from "svgo/plugins/removeOffCanvasPaths";
import removeRasterImages from "svgo/plugins/removeRasterImages";
import removeScriptElement from "svgo/plugins/removeScriptElement";
import removeStyleElement from "svgo/plugins/removeStyleElement";
import removeTitle from "svgo/plugins/removeTitle";
import removeUnknownsAndDefaults from "svgo/plugins/removeUnknownsAndDefaults";
import removeUnusedNS from "svgo/plugins/removeUnusedNS";
import removeUselessDefs from "svgo/plugins/removeUselessDefs";
import removeUselessStrokeAndFill from "svgo/plugins/removeUselessStrokeAndFill";
import removeViewBox from "svgo/plugins/removeViewBox";
import removeXMLNS from "svgo/plugins/removeXMLNS";
import removeXMLProcInst from "svgo/plugins/removeXMLProcInst";
import reusePaths from "svgo/plugins/reusePaths";
import sortAttrs from "svgo/plugins/sortAttrs";
import sortDefsChildren from "svgo/plugins/sortDefsChildren";

export const svgoPlugins = {
  addAttributesToSVGElement,
  addClassesToSVGElement,
  cleanupAttrs,
  cleanupEnableBackground,
  cleanupIDs,
  cleanupListOfValues,
  cleanupNumericValues,
  collapseGroups,
  convertColors,
  convertEllipseToCircle,
  convertPathData,
  convertShapeToPath,
  convertStyleToAttrs,
  convertTransform,
  inlineStyles,
  mergePaths,
  minifyStyles,
  moveElemsAttrsToGroup,
  moveGroupAttrsToElems,
  prefixIds,
  removeAttributesBySelector,
  removeAttrs,
  removeComments,
  removeDesc,
  removeDimensions,
  removeDoctype,
  removeEditorsNSData,
  removeElementsByAttr,
  removeEmptyAttrs,
  removeEmptyContainers,
  removeEmptyText,
  removeHiddenElems,
  removeMetadata,
  removeNonInheritableGroupAttrs,
  removeOffCanvasPaths,
  removeRasterImages,
  removeScriptElement,
  removeStyleElement,
  removeTitle,
  removeUnknownsAndDefaults,
  removeUnusedNS,
  removeUselessDefs,
  removeUselessStrokeAndFill,
  removeViewBox,
  removeXMLNS,
  removeXMLProcInst,
  reusePaths,
  sortAttrs,
  sortDefsChildren
};
