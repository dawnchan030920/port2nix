import { BehaviorSubject } from "rxjs";

type ConfigLanguageType = "Json" | "Yaml" | "Toml";

const ConfigLanguage = new BehaviorSubject<ConfigLanguageType>("Json");

export { ConfigLanguage, type ConfigLanguageType };
