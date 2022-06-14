import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
const routes: Routes = [{
  path: 'sample',
  loadChildren: () =>
    loadRemoteModule({
      type: 'module',
      remoteEntry: 'https://localhost:8001/remoteEntry.js',
      exposedModule: './Module',
    }).then((m) => m.SampleModule),
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
