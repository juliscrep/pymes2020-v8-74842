import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";
import { of } from "rxjs";
import { EmpresaArticulos } from "../models/empresa";

@Injectable({
  providedIn: "root"}
)
export class EmpresaABMService {

  resourceUrl: string;
  constructor(private httpClient: HttpClient) {
    this.resourceUrl = "https://pavii.ddns.net/api/empresas";
  }
  
  getById(IdEmpresa: number) {

    return this.httpClient.get(this.resourceUrl + IdEmpresa);
  }

  post(obj:EmpresaArticulos) {
     obj.IdEmpresa = new Date().getTime();
    EmpresaArticulos.push(obj);
    return of(obj);
    
  }

  put(Id: number, obj:EmpresaArticulos) {
    return this.httpClient.put(this.resourceUrl + Id, obj);
  }

  delete(Id) {
    return this.httpClient.delete(this.resourceUrl + Id);
  }
}