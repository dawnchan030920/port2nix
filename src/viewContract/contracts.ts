import { ConfigLanguageType } from "../model";

type ConfigLangValues = "json" | "yaml" | "toml";

function flipRecord<K extends keyof any, V extends keyof any>(record: Record<K, V>): Record<V, K> {
  const flipped: Record<V, K> = {} as Record<V, K>;
  for (const key in record) {
    const value = record[key];
    flipped[value] = key as K;
  }
  return flipped;
}

const ConfigLangTypeValue: Record<ConfigLanguageType, ConfigLangValues> = {
  "Json": "json",
  "Toml": "toml",
  "Yaml": "yaml"
} as const;

const ConfigLangValueType: Record<ConfigLangValues, ConfigLanguageType> = flipRecord(ConfigLangTypeValue);

type ConfigLangSelectElement = {
  value: ConfigLangValues;
} & HTMLElement;

type ConfigLangSelectElementChangeEvent = {
  target: {
    value: ConfigLangValues;
  };
} & Event;

export { ConfigLangTypeValue, ConfigLangValueType, type ConfigLangSelectElement, type ConfigLangSelectElementChangeEvent }
