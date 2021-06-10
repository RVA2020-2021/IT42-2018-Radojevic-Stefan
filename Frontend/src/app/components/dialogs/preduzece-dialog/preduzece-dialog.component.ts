import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Preduzece } from 'src/app/models/preduzece';
import { PreduzeceService } from 'src/app/services/preduzece.service';

@Component({
  selector: 'app-preduzece-dialog',
  templateUrl: './preduzece-dialog.component.html',
  styleUrls: ['./preduzece-dialog.component.css']
})
export class PreduzeceDialogComponent implements OnInit {

  public flag: number;

  constructor(
    public snackBar: MatSnackBar,
    public dialogRef : MatDialogRef<PreduzeceDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public dataDialog: Preduzece,
    public preduzeceService: PreduzeceService
  ) { }

  ngOnInit(): void {
  }

  public addPreduzece(): void {
    this.preduzeceService.addPreduzece(this.dataDialog).subscribe(() => {
      this.snackBar.open('Uspešno dodato preduzeće: ' + this.dataDialog.naziv, 'OK', {
        duration: 2500
      }),
      (error: Error) => {
        console.log(error.name + ' ' + error.message);
        this.snackBar.open('Došlo je do greške.', 'Zatvori', {
          duration: 2500
        })
      }
    });
  }


  public updatePreduzece(): void {
    this.preduzeceService.updatePreduzece(this.dataDialog).subscribe(() => {
      this.snackBar.open('Uspešno izmenjeno preduzeće: ' + this.dataDialog.naziv, 'OK', {
        duration: 2500
      }),
      (error: Error) => {
        console.log(error.name + ' ' + error.message);
        this.snackBar.open('Došlo je do greške prilikom ažuriranja preduzeća.', 'Zatvori', {
          duration: 2500
        })
      }
    })
  }

  public deletePreduzece(): void {
    this.preduzeceService.deletePreduzece(this.dataDialog.id).subscribe(() => {
      this.snackBar.open('Uspešno obrisano preduzeće: ' + this.dataDialog.naziv, 'OK', {
        duration: 2500
      }),
      (error: Error) => {
        console.log(error.name + ' ' + error.message);
        this.snackBar.open('Došlo je do greške prilikom brisanja preduzeća.', 'Zatvori', {
          duration: 2500
        })
      }
    })
  }


  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste.', 'Zatvori', {
      duration: 2500
    });
  }
}
