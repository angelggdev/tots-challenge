import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

import { Client } from "src/app/entities/client";

@Component({
    selector: 'app-delete-modal',
    templateUrl: 'delete-modal.component.html',
    styleUrls: ['delete-modal.component.scss']
})
export class DeleteModalComponent {

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: Client
    ) {}
}