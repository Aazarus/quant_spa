import { symbolTestData } from 'src/app/tests/test-data';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicModule } from '@ionic/angular';
import { StockDeleteDialogComponent } from './stock-delete-dialog.component';

describe('StockDeleteDialogComponent', () => {
  let component: StockDeleteDialogComponent;
  let fixture: ComponentFixture<StockDeleteDialogComponent>;
  let matDialogRefSpy: jasmine.SpyObj<MatDialogRef<any, any>>;

  beforeEach(waitForAsync(() => {
    const matDialogRefSpyObj = jasmine.createSpyObj(MatDialogRef, ['close']);
    TestBed.configureTestingModule({
      declarations: [StockDeleteDialogComponent],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule,
        MatDialogModule,
        BrowserAnimationsModule
      ],
      providers: [
        {provide: MatDialogRef, useValue: matDialogRefSpyObj},
        { provide: MAT_DIALOG_DATA, useValue: { stock: symbolTestData[0] } }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(StockDeleteDialogComponent);
    component = fixture.componentInstance;
    
    matDialogRefSpy = TestBed.inject(MatDialogRef) as jasmine.SpyObj<MatDialogRef<any, any>>;

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.stock).toEqual(symbolTestData[0]);
  });

  describe('close', () => {

    it('should call close on dialogRef passing false', () => {
      // Arrange
      // Act
      component.close();

      // Assert
      expect(matDialogRefSpy.close).toHaveBeenCalledWith(false);
    });
  });
  describe('deleteStock', () => {

    it('should call close on dialogRef passing true', () => {
      // Arrange
      // Act
      component.deleteStock();

      // Assert
      expect(matDialogRefSpy.close).toHaveBeenCalledWith(true);
    });
  });
});
