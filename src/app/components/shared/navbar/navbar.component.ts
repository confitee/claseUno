import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
    selector: 'app-navbar',
    standalone: true, // <--- Asegúrate de incluir esto
    templateUrl: './navbar.component.html',
    imports: [RouterLink, RouterLinkActive],
})
export class NavbarComponent {
}