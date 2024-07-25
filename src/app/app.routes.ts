import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',redirectTo:'gsaphome',pathMatch:'full'
    },
    {
        path:'gsaphome',loadComponent:()=>import("./Pages/gsap-home/gsap-home.component").then(m=>m.GsapHomeComponent)
    },
    {
        path:'gsapto',
        loadComponent:()=>import("./Pages/gsap-to/gsap-to.component").then(m=>m.GsapToComponent),
    },
    {
        path:'gsap-from',
        loadComponent:()=>import("./Pages/gsap-from/gsap-from.component").then(m=>m.GsapFromComponent),
    },
    {
        path:'gsap-to',
        loadComponent:()=>import("./Pages/gsap-to/gsap-to.component").then(m=>m.GsapToComponent),
    },
];
