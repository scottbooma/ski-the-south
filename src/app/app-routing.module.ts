import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResortInfoComponent } from './resort-info/resort-info.component';
import { ResortListComponent } from './resort-list/resort-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/resort-list',
    pathMatch: 'full',
  },
  {
    path: 'resort-list',
    component: ResortListComponent,
  },
  {
    path: 'resort-info/:resort',
    component: ResortInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
