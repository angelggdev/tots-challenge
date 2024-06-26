import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector: 'app-success-modal',
    templateUrl: 'success-modal.component.html',
    styleUrls: ['success-modal.component.scss']
})
export class SuccessModalComponent {

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: string
    ) {}
}