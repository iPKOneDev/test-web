import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable({    // class is service
  providedIn: 'root'
})
export class TodoService {

  constructor( protected http: Http ) { }

  getTodoList() {




  }


}
