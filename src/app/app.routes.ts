import { Routes } from '@angular/router';
import { counterPageComponent } from './pages/counter/counter.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';

export const routes: Routes = [
    {
        path:'hero',
        component: HeroPageComponent
    }
];
