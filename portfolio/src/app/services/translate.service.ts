import { Injectable } from '@angular/core';
// import pl from '../languages/pl-PL.json';
// import en from '../languages/en-EN.json';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  constructor(private localStorageService: LocalStorageService) { }

  // private plLang = JSON.parse(JSON.stringify(pl));
  // private enLang = JSON.parse(JSON.stringify(en));

  // getTranslation(value: string): string | undefined {
  //   const lang = this.localStorageService.getLanguage();
  //     if (lang === 'PL') {
  //       return this.plLang[value];
  //     }
  //     return this.enLang[value];
  //   }
}