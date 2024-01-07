import { ConfigLanguageType } from "../model";
import { flipRecord } from "../util/flipRecord";

type ConfigLangValues = "json" | "yaml" | "toml";

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
