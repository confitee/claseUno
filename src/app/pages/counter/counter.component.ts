import { Component, signal } from "@angular/core";

@Component({
    templateUrl:'./counter.component.html',
    styleUrl:'./counter.component.css'
})
export class counterPageComponent{
    contador = 10;
    contadorSignal = signal(5);
    increaseBy(value:number){
        this.contador += value;
        this.contadorSignal.set(this.contadorSignal()+value);
    }
    reset(){
        this.contador = 10;
        this.contadorSignal.set(5)
    }
}