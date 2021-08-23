import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterListComponent } from './character-list/character-list.component';

const appRoutes: Routes = [
    { 
        path: '',
        redirectTo: '/character-list',
        pathMatch: 'full'
    },
    { 
        path: 'character-list',
        component: CharacterListComponent
    },
    { 
        path: 'character-detail/:id',
        component: CharacterDetailComponent
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
