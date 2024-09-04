import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactComponent } from './contact/contact.component';
import { AboutMollendoComponent } from './about-mollendo/about-mollendo.component';
import { LugarComponent } from './lugares/lugar/lugar.component';
import { HotelsComponent } from './hotels/hotels.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    
    { path: 'places', component: LugaresComponent },
    { path: 'places/:place', component: LugarComponent },

    { path: 'hotels', component: HotelsComponent },
    { path: 'about-mollendo', component: AboutMollendoComponent },
    { path: 'contact', component: ContactComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }