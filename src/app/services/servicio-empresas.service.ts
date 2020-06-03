import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";
import { of } from "rxjs";
import {EmpresaArticulos} from "../models/empresa"; 

@Injectable(
  {providedIn: "root"}
)
export class ServicioEmpresasService {
resourceUrl: string;
  constructor(private httpClient: HttpClient) {
    this.resourceUrl = "http://localhost:49681/api/ArticulosFamilias/";
   }

   get() {
    return this.httpClient.get(this.resourceUrl);
  }

}

