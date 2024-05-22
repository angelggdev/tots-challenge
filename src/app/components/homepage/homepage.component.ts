import { Component, OnInit } from "@angular/core";
import { TotsListResponse } from "@tots/core";
import { TotsActionTable, TotsIconButtonColumn, TotsStringColumn, TotsTableConfig } from "@tots/table";
import { delay, of } from "rxjs";
import { ClientService } from "src/app/services/client.service";
import { MatDialog } from '@angular/material/dialog';
import { DeleteModalComponent } from "./delete-modal/delete-modal.component";
import { SuccessModalComponent } from "./success-modal/success-modal.component";
import { EditModalComponent } from "./edit-modal/edit-modal.component";
import { Client } from "src/app/entities/client";

@Component({
    selector: 'app-homepage',
    templateUrl: 'homepage.component.html',
    styleUrls: ['homepage.component.scss']
})
export class HomepageComponent implements OnInit {
    config: TotsTableConfig = {
        columns: [
            new TotsStringColumn("firstname", "firstname", "First Name"),
            new TotsStringColumn("lastname", "lastname", "Last Name"),
            new TotsStringColumn("email", "email", "Email"),
            new TotsIconButtonColumn("delete", "delete", "delete", "warn"),
            new TotsIconButtonColumn("edit", "edit", "edit", "warn"),
        ]
    };

    constructor(
        private clientService: ClientService,
        private dialog: MatDialog,
    ) {}

    ngOnInit(): void {
        this.getClientList();
    }

    getClientList() {
        this.clientService.list({}).subscribe((res: any) => {
            if (res.response) {
                const data = new TotsListResponse();
                data.data = res.response.data;
                data.total = res.response.total;
                
                this.config.obs = of(data).pipe(delay(2000));
            }
        });
    }

    onTableAction(action: TotsActionTable) {
        if (action.key === "delete") {
          this.removeItem(action.item);
        } else if (action.key === "edit") {
            this.editItem(action.item);
        }
    }

    addClient() {
        this.dialog.open(EditModalComponent, { data: { title: 'Add client' }}).afterClosed().subscribe((result: Client) => {
            if (result) {
                this.clientService.update({ ...result }).subscribe((result: any) => {
                    if (result.success) {
                        this.dialog.open(SuccessModalComponent, { data: 'Successfully created'});
                        this.reloadPage();
                    }
                })
            }
        });
    }

    private reloadPage() {
        this.config.obs = undefined;
        this.getClientList();
    }

    private removeItem(item: Client) {
        this.dialog.open(DeleteModalComponent, { data: item }).afterClosed().subscribe((result: boolean) => {
            if (result) {
                this.clientService.removeById(item.id).subscribe((result: any) => {
                    if (result.success) {
                        this.dialog.open(SuccessModalComponent, { data: 'Successfully deleted'});
                        this.reloadPage();
                    }
                });
            }
        });
    }

    private editItem(item: Client) {
        this.dialog.open(EditModalComponent, { data: { title: 'Edit client', data: item } }).afterClosed().subscribe((result: Client) => {
            if (result) {
                this.clientService.update({ ...result, id: item.id }).subscribe((result: any) => {
                    if (result.success) {
                        this.dialog.open(SuccessModalComponent, { data: 'Successfully updated'});
                        this.reloadPage();
                    }
                })
            }
        });
    }
}