import { Component, Inject, OnInit, ViewChild } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { StringFieldComponent, TotsFieldForm } from "@tots/form";
import { Validators } from "@angular/forms";

import { Client } from "src/app/entities/client";

@Component({
    selector: 'app-edit-modal',
    templateUrl: 'edit-modal.component.html',
    styleUrls: ['edit-modal.component.scss']
})
export class EditModalComponent implements OnInit {
    @ViewChild('form') form: any;

    fields = new Array<TotsFieldForm>();

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: { title: string; data: Client; }
    ) {}

    ngOnInit(): void {
        this.setFields();
    }

    private setFields() {
        this.fields = [
            { key: 'firstname', component: StringFieldComponent, label: 'Nombre', validators: [Validators.required], extra: null, errors: [{ name: 'required', message: 'You must enter a value' }] },
            { key: 'lastname', component: StringFieldComponent, label: 'Apellido', validators: [Validators.required], extra: null, errors: [{ name: 'required', message: 'You must enter a value' }] },
            { key: 'email', component: StringFieldComponent, label: 'Email', validators: [Validators.required], extra: null, errors: [{ name: 'required', message: 'You must enter a value' }] },
        ]
    }
}