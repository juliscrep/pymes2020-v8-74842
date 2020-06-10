import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import{ServicioEmpresasService}from  "../../services/servicio-empresas.service";
import {EmpresaABMService} from "../../services/empresa-abm.service"
import{EmpresaArticulos} from "../../models/empresa";
import {ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-empresa-tabla',
  templateUrl: './empresa-tabla.component.html',
  styleUrls: ['./empresa-tabla.component.css'] ,
  providers: [ServicioEmpresasService]
})
export class EmpresaTablaComponent implements OnInit {
  Titulo = "Articulos Empresa";
  Items: EmpresaArticulos[] = [];
  verForm=false ; 
  FormFiltro: FormGroup;
  FormReg: FormGroup;
  submitted = false;

  constructor( public formBuilder: FormBuilder,
  private empresaArt: ServicioEmpresasService, 
  private abm:EmpresaABMService) { }

  ngOnInit():void {
    this.GetEmpresaArticulos()
    
    this.FormReg=this.formBuilder.group(" ");
  }

  mostrarForm(){
 this.verForm=!this.verForm;
  }
 GetEmpresaArticulos() {
    this.empresaArt.getEmpresa().subscribe(
      (res:EmpresaArticulos[]) => { this.Items = res});
  }

  Consultar(dto){
    this.abm.getById(dto)
  }

  
  Grabar(dto){
    this.abm.post(dto)
  }

  volver(){
    this.verForm=false;
  }

  Eliminar(dto){  
    
    this.abm.delete(dto)
  }

}