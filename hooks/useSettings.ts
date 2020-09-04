import { useLocalStorage } from "@hooks/useLocalStorage";

export function useSettings(name: string, initialValue: object | string) {
  return useLocalStorage(`settings:${name}`, initialValue);
}
