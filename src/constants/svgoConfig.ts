import { InputType } from "@components/Form";
import { lowerCase, omit } from "lodash";

export interface Settings {
  removeTitle: boolean;
  removeDesc: boolean;
  removeUselessDefs: boolean;
  removeEditorsNSData: boolean;
  removeEmptyAttrs: boolean;
  removeHiddenElems: boolean;
  removeEmptyText: boolean;
  removeEmptyContainers: boolean;
  removeViewBox: boolean;
  cleanupEnableBackground: boolean;
  convertColors: boolean;
  convertPathData: boolean;
  convertTransform: boolean;
  removeUnknownsAndDefaults: boolean;
  removeNonInheritableGroupAttrs: boolean;
  removeUselessStrokeAndFill: boolean;
  removeUnusedNS: boolean;
  cleanupIDs: boolean;
  cleanupNumericValues: boolean;
  moveElemsAttrsToGroup: boolean;
  moveGroupAttrsToElems: boolean;
  collapseGroups: boolean;
  removeRasterImages: boolean;
  mergePaths: boolean;
  convertShapeToPath: boolean;
  sortAttrs: boolean;
  optimizeSvg: boolean;
}

export const nativeRequiredSettings = {
  cleanupAttrs: true,
  inlineStyles: true,
  minifyStyles: true,
  convertStyleToAttrs: true,
  removeDoctype: true,
  removeXMLProcInst: false,
  removeComments: true,
  removeMetadata: true,
  removeDimensions: false
};

export const defaultSettings = {
  optimizeSvg: true,
  ...nativeRequiredSettings,
  removeComments: true,
  removeMetadata: true,
  removeTitle: true,
  removeDesc: true,
  removeUselessDefs: true,
  removeEditorsNSData: true,
  removeEmptyAttrs: true,
  removeHiddenElems: true,
  removeEmptyText: true,
  removeEmptyContainers: true,
  removeViewBox: false,
  cleanupEnableBackground: true,
  convertColors: true,
  convertPathData: true,
  convertTransform: true,
  removeUnknownsAndDefaults: true,
  removeNonInheritableGroupAttrs: true,
  removeUselessStrokeAndFill: true,
  removeUnusedNS: true,
  cleanupIDs: true,
  cleanupNumericValues: false,
  moveElemsAttrsToGroup: true,
  moveGroupAttrsToElems: true,
  collapseGroups: true,
  removeRasterImages: true,
  mergePaths: true,
  convertShapeToPath: true,
  sortAttrs: true
};

export const defaultNativeSettings = omit(
  defaultSettings,
  Object.keys(nativeRequiredSettings)
);

export const formFields = settings =>
  Object.keys(settings).map((property: keyof Settings) => ({
    label: lowerCase(property),
    type: InputType.SWITCH,
    key: property,
    ...(property !== "optimizeSvg"
      ? {
          isDisabled: values => !values.optimizeSvg,
          props: { paddingLeft: 20, borderLeft: "2px solid #FDF8F3" }
        }
      : {})
  }));
