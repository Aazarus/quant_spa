import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RepositoryService } from 'src/app/services/repository.service';
import { Symbol } from 'src/app/models/symbol';
import { StockDeleteDialogComponent } from './stock-delete-dialog/stock-delete-dialog.component';

@Component({
  selector: 'app-stock-delete',
  templateUrl: './stock-delete.component.html',
  styleUrls: ['./stock-delete.component.scss'],
})
export class StockDeleteComponent {

  public stockId: number;
  public isDeleted: boolean = false;

  constructor(private repoService: RepositoryService, private dialog: MatDialog) { }

  public get stock(): Symbol {
    return this.repoService.stock;
  }

  public getStock(): void {
    this.isDeleted = false;
    this.repoService.getStock(this.stockId);
  }

  public deleteStock(): void {
    this.repoService.deleteStockWithResult(this.stockId).subscribe(
      _ => this.isDeleted = true,
      (error: Error) => console.log("Received an error", error));
  }

  public openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      stock: this.stock
    };

    const dialogRef = this.dialog.open(StockDeleteDialogComponent, dialogConfig);

    if (dialogRef) {
      dialogRef.afterClosed().subscribe( 
        result => {
          if (result) {
            this.deleteStock();
          }
        }
      );
    }
  }
}
