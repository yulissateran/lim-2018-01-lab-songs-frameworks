import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalApiService {

  constructor() { }
  data(){
    return  [
      { id: 0, name: 'Rihana' },
      { id: 1, name: 'Shakira' },
      { id: 2, name: 'Thalía' },
      { id: 3, name: 'Cher' },
      { id: 4, name: 'Reik' },
      { id: 5, name: 'HaAsh' }
    ]
  }
}
