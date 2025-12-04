import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import DonService from '../../services/don.service';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss'],
    standalone: false
})
export class AdminComponent {

  valeurDon = 0;

  // valeur experer des don en $
  valeurEsperer = 0


  constructor(private donService:DonService) {
  }


  ngOnInit(){
    this.valeurEsperer = parseInt(localStorage.getItem('totalExpected')??'0')
  }


  faireDon() {
    if(this.valeurDon>0){
      this.donService.fairDon(this.valeurDon);
      this.valeurDon = 0
    }
  }

  definirTarget(){
    if(this.valeurEsperer>0){
      this.donService.DefinirTotalEspererDon(this.valeurEsperer)
      this.valeurEsperer = 0
    }
  }

  reset(){
    this.donService.resetCurrentValue()
  }
}
