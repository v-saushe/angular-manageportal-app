import { Component, OnInit, ViewContainerRef, Input } from "@angular/core";
//To Import References for Angular Material
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material";

import {
  NgbModal,
  NgbModalConfig,
  NgbActiveModal,
  NgbModule
} from "@ng-bootstrap/ng-bootstrap";

import { CallApiService } from "../../../../app/services/callApiService.service";
import { CheckSessionAliveService } from "../../../../app/services/checkSession.service";
import { PagerService } from "../../../../app/services/pager.service";
import { DialogComponent } from "../../dialogs/dialog.component";

import { ModalComponent } from "../../modal/modal.component";
import { ModalAboutComponent } from "../../modal-about/modal-about.component";

const dialogs = [DialogComponent];
const dialogsMap = {
  dialog1: DialogComponent
};

@Component({
  selector: "app-manage-user",
  templateUrl: "./manage-user.component.html",
  styleUrls: ["./manage-user.component.css"],
  providers: [CallApiService, PagerService]
})
export class ManageUserComponent implements OnInit {
  dialogRef: MatDialogRef<any>;

  ServiceTypeArray: any[];
  userTypeArray: any[];

  jsonArray: any[];

  //Show paging

  // pager object
  pager: any = {};
  // paged items
  pagedUserItems: any[];
  pageCount: number;
  totalDataCount: number;
  startPoint: number;
  endPoint: number;

  //Sorting variables.
  isDesc: boolean = false;
  column: string = "";
  direction: number;

  constructor(
    private _callApiService: CallApiService,
    private _checkSessionAliveService: CheckSessionAliveService,
    private pagerService: PagerService,
    public dialog: MatDialog,
    public viewContainerRef: ViewContainerRef,
    private modalService: NgbModal, config: NgbModalConfig
  ) {
    this._checkSessionAliveService.IsCheckSessionAlive();
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    this.BindUsersGrid();
  }

  BindUsersGrid(): void {
    this.pager.pages = 0;

    let results = [
      {
        Data: [
          {
            Id: 1,
            OperatorName: "Airtel",
            ServiceTypeId: 1,
            OperatorCode: "AT",
            IsActive: true,
            CreatedBy: 2,
            CreatedDate: "2018-09-02T14:31:45.973",
            LastModifiedBy: 0,
            LastModifiedDate: "2018-09-02T14:31:45.973"
          },
          {
            Id: 2,
            OperatorName: "Vodafone",
            ServiceTypeId: 1,
            OperatorCode: "VF",
            IsActive: true,
            CreatedBy: 2,
            CreatedDate: "2018-09-02T14:31:45.973",
            LastModifiedBy: 0,
            LastModifiedDate: "2018-09-02T14:31:45.973"
          }
        ]
      }
    ];

    this.userTypeArray = results[0].Data;
    this.setOperatorPage(1);
    // this._callApiService
    //   .getCall("ManageOperator/GetOperators?serviceTypeId=1")
    //   .subscribe(
    //     results => {
    //       if (
    //         results.Data.length != undefined &&
    //         parseInt(results.Data.length) > 0
    //       ) {
    //         this.userTypeArray = results.Data;
    //         this.setOperatorPage(1);
    //       }
    //     },
    //     error => {}
    //   );
  }

  setOperatorPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    this.pageCount = page;

    // get pager object from service
    this.pager = this.pagerService.getPager(this.userTypeArray.length, page);
    // get current page of items
    this.pagedUserItems = this.userTypeArray.slice(
      this.pager.startIndex,
      this.pager.endIndex + 1
    );

    this.totalDataCount = this.pager.totalItems;
    this.startPoint = (page - 1) * this.pager.pageSize + 1;
    this.endPoint = this.startPoint + this.pager.pageSize - 1;

    if (this.endPoint > this.pager.totalItems) {
      this.endPoint = this.pager.totalItems;
    }
  }

  //Sorting On Operator Grid.
  sortOperatorGrid(property) {
    this.isDesc = !this.isDesc; //change the direction
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  }

  // changePosition() {
  //   // this.dialogRef.updatePosition({ top: "50px", left: "50px" });
  // }
  config = {
    animated: true,
    keyboard: false,
    backdrop: true,
    ignoreBackdropClick: true,
    disableClose: true,
    hasBackdrop: true
  };

  deleteUserClick(): void {
    const modalRef = this.modalService.open(ModalComponent);
    //const modalRef = this.modalService.open(ModalAboutComponent);
    modalRef.componentInstance.deleteUserTitle = "Delete User?";
    modalRef.componentInstance.deleteUser = true;
    modalRef.componentInstance.deleteUserContent =
      "Are you sure want to delete the user?";
  }

  deleteUserClick1(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    // dialogConfig.height = "400px";
    // dialogConfig.width = "600px";
    // dialogConfig.position.top = "400px";
    // dialogConfig.position.bottom = "50px";
    // dialogConfig.position.left = "50px";

    this.dialogRef = this.dialog.open(dialogsMap["dialog1"], {
      width: "40%",
      height: "300px",
      //width: "600px",

      position: { top: "0px", bottom: "50px", left: "90px" }
    });

    this.dialogRef.componentInstance.showRegistrationSuccessfull = true;

    this.dialogRef.afterClosed().subscribe(result => {
      this.dialogRef = null;
    });
  }
}
