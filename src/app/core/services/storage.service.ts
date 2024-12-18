import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async get(key: string){
    const ret = await localStorage.getItem(key);
    return JSON.parse(<string>ret);
  }
  set(storageKey: string, value: any){
    localStorage.setItem(storageKey, JSON.stringify(value));
  }

}
