import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { INoticias } from './noticias';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class NoticiasService {

  private _url: string = "http://juliochilela.info/igrejas/api/getNoticias.php";
  
  
  constructor(private http: HttpClient) { }
  
    getNoticias(): Observable<INoticias[]>{
        return this.http.get<INoticias[]>(this._url);
  
  
  }
  

}
