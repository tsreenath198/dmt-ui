import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ConfirmationDialogComponent } from "./confirmation-dialog.component";

@NgModule({
    imports: [RouterModule, CommonModule,BrowserModule,FormsModule,NgModule],
    declarations: [ ConfirmationDialogComponent],
    exports: [ConfirmationDialogComponent]
})

export class ConfirmationDialogModule{}