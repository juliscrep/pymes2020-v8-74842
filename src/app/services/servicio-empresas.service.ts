import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";
import { of, Observable } from "rxjs";
import {EmpresaArticulos} from "../models/empresa"; 

@Injectable(
  {providedIn: "root"}
)
export class ServicioEmpresasService {
resourceUrl: string;
  constructor(private httpClient: HttpClient) {
    this.resourceUrl = "https://pavii.ddns.net/api/empresas";
   }

   get():Observable<EmpresaArticulos> {
    return this.httpClient.get<EmpresaArticulos>(this.resourceUrl);
  }
  

}

