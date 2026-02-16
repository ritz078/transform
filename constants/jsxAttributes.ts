export const JSX_BOOLEAN_ATTRIBUTES = [
  "async",
  "autoFocus",
  "autoPlay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formNoValidate",
  "hidden",
  "loop",
  "multiple",
  "muted",
  "noValidate",
  "open",
  "readOnly",
  "required",
  "reversed",
  "scoped",
  "selected"
] as const;

export type JsxBooleanAttribute = typeof JSX_BOOLEAN_ATTRIBUTES[number];

export const BOOLEAN_ATTRIBUTES_REGEX = new RegExp(
  `\\b(${JSX_BOOLEAN_ATTRIBUTES.join("|")})=""`,
  "g"
);
