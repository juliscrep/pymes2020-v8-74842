import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import{ServicioEmpresasService}from  "../../services/servicio-empresas.service";
import {EmpresaABMService} from "../../services/empresa-abm.service"
import{EmpresaArticulos} from "../../models/empresa";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-empresa-tabla',
  templateUrl: './empresa-tabla.component.html',
  styleUrls: ['./empresa-tabla.component.css'] ,
  providers: [ServicioEmpresasService]
})
export class EmpresaTablaComponent implements OnInit {
  Titulo = "Articulos Empresa";
  Items: EmpresaArticulos[] = [];
    
  constructor(private empresaArt: ServicioEmpresasService, private abm:EmpresaABMService)
  { }

  ngOnInit():void {
    this.GetEmpresaArticulos()
  }
 GetEmpresaArticulos() {
    this.empresaArt.getEmpresa().subscribe(
      (res:EmpresaArticulos[]) => { this.Items = res});
  }

  Consultar(dto){

  }

  CrearNuevo(dto){ 

  }
  
  Eliminar(dto){  this.abm.delete(dto)
  }

}