import { NgModule } from '@angular/core';
import { TotsTableModule } from '@tots/table';
import { TotsFormModule } from '@tots/form';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { HomepageComponent } from './homepage.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { SuccessModalComponent } from './success-modal/success-modal.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';

@NgModule({
  declarations: [
    HomepageComponent,
    DeleteModalComponent,
    SuccessModalComponent,
    EditModalComponent
  ],
  imports: [
    CommonModule,
    TotsTableModule,
    MatDialogModule,
    MatButtonModule,
    TotsFormModule
  ]
})
export class HomepageModule {}
