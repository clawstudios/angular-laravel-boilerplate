// Dependencies
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { ExampleComponent } from './pages/example/example.component';

const routes: Routes = [
  { path: '', redirectTo: 'example', pathMatch: 'full' },
  { path: 'example', component: ExampleComponent},
  { path: 'api', redirectTo: 'api.php', pathMatch: 'prefix' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
