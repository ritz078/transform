import { useSessionStorage } from "@hooks/useSessionStorage";

export function useSettings(name: string, initialValue: object) {
  return useSessionStorage(`settings:${name}`, initialValue);
}
