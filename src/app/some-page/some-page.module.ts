import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SomePageRoutingModule } from './some-page-routing.module';
import { SomePageComponent } from './some-page.component';

@NgModule({
  declarations: [SomePageComponent],
  imports: [CommonModule, SomePageRoutingModule],
})
export class SomePageModule {}
