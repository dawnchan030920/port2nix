import { fromEvent, map } from "rxjs";
import { configLangSelectElement } from "../viewContract/dom";
import { ConfigLangValueType, ConfigLangSelectElementChangeEvent } from "../viewContract/contracts";
import { ConfigLanguage } from "../model";

const configLangSelectChanges = fromEvent<ConfigLangSelectElementChangeEvent>(configLangSelectElement, "sl-change");

configLangSelectChanges
  .pipe(
    map(event => event.target.value),
    map(value => ConfigLangValueType[value])
  )
  .subscribe(ConfigLanguage);
