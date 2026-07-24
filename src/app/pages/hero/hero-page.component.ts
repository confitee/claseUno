/**ort { Component, signal } from "@angular/core";

@Component({
    templateUrl: './hero-page.component.html',
    styleUrl: './hero-page.component.css'
})

export class HeroPageComponent {
    public name = signal('Iron Man');
    public age = signal(45);

    getHeroDescription(): string {
    return this.name() + ' - ' + this.age() + ' años';
}

cambiarHero(): void {

    if (this.name() === 'Iron Man') {
        this.name.set('Spider-Man');
        
    } 
    else if (this.name() === 'Spider-Man') {
        this.name.set('Dr. Strange');
    } 
    else {
        this.name.set('Iron Man');
    }
}
cambiarEdad(): void{
    if (this.age() === 45){
        this.age.set(20);
    }
    else if (this.age() === 20){
        this.age.set(40);
    }
    
    else {
        this.age.set(45);
    }

}
    

    resetForm(): void {
        this.name.set('Iron Man');
        this.age.set(45);
    }
}*/
import { Component, signal } from "@angular/core";

@Component({
    templateUrl: './hero-page.component.html',
    styleUrl: './hero-page.component.css'
})
export class HeroPageComponent {
    name = signal('Ironman');
    age = signal(45);

    getHeroDescription() {
        return `${this.name()} - ${this.age()}`;
    }

    changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
    }

    changeAge() {
    this.age.set(60);
    }

    ResetForm() {
    this.name.set('Ironman');
    this.age.set(45);
    }
}