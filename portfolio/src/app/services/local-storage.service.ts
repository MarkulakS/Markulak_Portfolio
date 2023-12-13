import { Injectable } from '@angular/core';
import { LocalStorageKey } from '../enums/local-storage.enum';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  set(type: Storage, data: any, key: string) {
    type.setItem(key, JSON.stringify(data));
  }

  get(type: Storage, key: string) {
    return type.getItem(key);
  }

  set Language(lang: string) {
    localStorage.setItem(LocalStorageKey.LANGUAGE, lang);
  }

  getLanguage(): string {
    const lang = localStorage.getItem(LocalStorageKey.LANGUAGE)
    if (lang !== null) {
      return lang;
    }
    this.Language = "PL";
    return "PL";
  }
}
