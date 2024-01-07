import { fromEvent, map, startWith } from "rxjs";
import { configLangSelectElement } from "../viewContract/domUtil";
import { ConfigLangValueType, ConfigLangSelectElementChangeEvent } from "../viewContract/contracts";
import { ConfigLanguage } from "../model";

const configLangSelectChanges = fromEvent<ConfigLangSelectElementChangeEvent>(configLangSelectElement, "sl-change");

configLangSelectChanges
  .pipe(
    map(event => event.target.value),
    startWith(configLangSelectElement.value),
    map(value => ConfigLangValueType[value])
  )
  .subscribe(ConfigLanguage);
