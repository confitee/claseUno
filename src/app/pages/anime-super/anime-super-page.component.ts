import { Component, inject, signal } from "@angular/core";
import { CharacterFormComponent } from "../../components/character-form/character-form.component";
import { CharacterListComponent } from "../../components/character-list/character-list.component";
import { VariosService } from "../../services/varios.service";
/*interface Character{
    id:number;
    name:string;
    power:number;
    
}*/
@Component({
    selector: 'app-anime-super',
    imports: [CharacterFormComponent, CharacterListComponent],
    templateUrl: './anime-super-page.component.html'
})
export class AnimeSuperComponent{
    //INYECTAR SERVICIO DE FORMA TRADICIONAL
    /*constructor(
        public variosService: VariosService 
    ){}*/
    //INYECTAR SERVICIO DE FORMA MAS FUNCIONAL Y MODERNA
    public variosService = inject(VariosService)
    /*name = signal('');
    power = signal(0);
    characters = signal<Character[]>([
        {id:1, name:'Goku', power:9001},
        {id:2, name:'Vegeta', power:8000},
        /*{id:3, name:'Piccolo', power:3000},
        {id:4, name:'Yamcha', power:500},
    ])*/
    /*addCharacter(character: Character){
        this.characters.update((list)=>[...list,character]);

        /*console.log(this.name(),this.power());
        if(!this.name() || !this.power() || this.power() <= 0){
            return;
        }
        const newCharacter: Character = {
            id: this.characters().length + 1,
            name: this.name(),
            power: this.power()
        }
        this.characters().push(newCharacter);
        this.resetFields();
    }
    resetFields(){
        this.name.set('');
        this.power.set(0);
    }*/
    }
