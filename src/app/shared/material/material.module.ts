import { NgModule } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  imports: [MatButtonToggleModule, MatSlideToggleModule],
  exports: [MatButtonToggleModule, MatSlideToggleModule],
})
export class MaterialModule {}
