import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";
import { of } from "rxjs";
import {EmpresaArticulos} from "scr/app/models/Empresa"

@Injectable()
export class ServicioEmpresasService {

  constructor() { }

}


import { Articulo } from "../models/articulo";

@Injectable({
  providedIn: "root"
})
export class ArticulosFamiliasService {
  resourceUrl: string;
  constructor(private httpClient: HttpClient) {
    this.resourceUrl = "http://localhost:49681/api/ArticulosFamilias/";
  }

  get() {
    return this.httpClient.get(this.resourceUrl);
  }
}
