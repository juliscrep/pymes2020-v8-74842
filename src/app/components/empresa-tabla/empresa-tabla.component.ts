import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import{ServicioEmpresasService}from  '../services/servicio-empresas';


@Component({
  selector: 'app-empresa-tabla',
  templateUrl: './empresa-tabla.component.html',
  styleUrls: ['./empresa-tabla.component.css'] 
})
export class EmpresaTablaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}