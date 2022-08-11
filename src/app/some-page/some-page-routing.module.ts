import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SomePageComponent } from './some-page.component';

const routes: Routes = [
  {
    path: '',
    component: SomePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SomePageRoutingModule {}
