import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoAngular';

  oddNumbers: Array<number> = []; //Numeros impares
  evenNumber: Array<number> = []; //Numeros pares


  onStartCounter(numer:number){
    if(numer % 2 === 0){
      this.evenNumber.push(numer);
    }
    else{
      this.oddNumbers.push(numer);
    }
  }
}
