import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { Symbol } from 'src/app/models/symbol';

@Component({
  selector: 'app-stock-delete-dialog',
  templateUrl: './stock-delete-dialog.component.html',
  styleUrls: ['./stock-delete-dialog.component.scss'],
})
export class StockDeleteDialogComponent {

  public stock: Symbol;

  constructor(
    private dialogRef: MatDialogRef<StockDeleteDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) data) {
    this.stock = data.stock;
  }

  public close(): void {
    this.dialogRef.close(false);
  }

  public deleteStock(): void {
    this.dialogRef.close(true);
  }
}
