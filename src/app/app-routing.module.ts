import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {RecipeListComponent} from './recipes/recipe-list/recipe-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {TestingComponent} from './testing/testing.component';
const routes: Routes = [
  { path: 'shopping', component: ShoppingListComponent },
  { path: 'recipieslist', component: RecipeListComponent },
  { path: 'recipes',      component: RecipeDetailComponent },
  { path: 'testing',      component: TestingComponent },
  { path: '',
    redirectTo: '/recipieslist',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
