import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegionService} from './services/region/region.service';
import { PaisService} from './services/pais/pais.service';
import { PersonaService} from './services/persona/persona.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  PersonaForm: FormGroup;
  region: any;
  pais: any;


  constructor(
   public fb: FormBuilder,
   public regionService: RegionService,
   public paisService:  PaisService,
   public personaService: PersonaService,

  ){

  }
  ngOnInit(): void {
    this.PersonaForm = this.fb.group({
      codigodesc : ['',Validators.required],
      descuento : ['',Validators.required],
      region : ['',Validators.required],
      pais : ['',Validators.required],

    });;

    this.regionService.getAllRegiones().subscribe(resp=>{
      this.region = resp;
      console.log(resp);
      
    },
    error=>{console.error(error)}
    )
    
  }

  consulta():void{

  }

    cargarPaisPorRegionId(event){
      this.paisService.getAllPaisesByRegion(event.target.value).subscribe(resp=>{
        this.pais = resp;
        },
        error=>{(console.error(error))}
      )
    }
}

