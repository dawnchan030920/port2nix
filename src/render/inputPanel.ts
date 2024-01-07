import { map } from "rxjs";
import { ConfigLanguage } from "../model";
import { configLangSelectElement } from "../viewContract/dom";
import { ConfigLangTypeValue } from "../viewContract/contracts";

ConfigLanguage
  .pipe(
    map(type => ConfigLangTypeValue[type]),
  )
  .subscribe(value => {
    configLangSelectElement.value = value;
  });

