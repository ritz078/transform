import * as data from "@constants/data";
import { useSessionStorage } from "@hooks/useSessionStorage";

export type Language = string;

export function useData(type: Language) {
  return type ? useSessionStorage(`data:${type}`, data[type]) : [,];
}
