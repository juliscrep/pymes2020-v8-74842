import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import{ServicioEmpresasService}from  "../../services/servicio-empresas.service";
import{EmpresaArticulos} from "../../models/empresa";

@Component({
  selector: 'app-empresa-tabla',
  templateUrl: './empresa-tabla.component.html',
  styleUrls: ['./empresa-tabla.component.css'] 
})
export class EmpresaTablaComponent implements OnInit {
  Titulo = "Articulos Empresa";
  Items: EmpresaArticulos[] = [];
  
  constructor(private empresaArt:  EmpresaArticulos)
  { }

  ngOnInit() {
    this.GetEmpresaArticulos()
  }
 GetEmpresaArticulos() {
    this.empresaArt.get()
    .subscribe((res:EmpresaArticulos[]) => {
      this.Items = res;
    });
  }
}