import { Component, Inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "dialog1",
  templateUrl: "./dialog.component.html"
})
export class DialogComponent implements OnInit {
  param1: string;
  dialogResult: string;

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _router: Router
  ) {}

  ngOnInit() {
    this.dialogRef.updatePosition({ top: "50px", left: "50px" });
  }

  onCloseConfirm() {
    this.dialogRef.close("Confirm");
    this._router.navigate(["/manageusers"]);
  }

  onCloseCancel() {
    this.dialogRef.close("Cancel");
    this._router.navigate(["/manageusers"]);
  }
}
