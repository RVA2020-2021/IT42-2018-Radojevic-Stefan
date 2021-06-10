import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Obrazovanje } from 'src/app/models/obrazovanje';
import { ObrazovanjeService } from 'src/app/services/obrazovanje.service';

@Component({
  selector: 'app-obrazovanje-dialog',
  templateUrl: './obrazovanje-dialog.component.html',
  styleUrls: ['./obrazovanje-dialog.component.css']
})
export class ObrazovanjeDialogComponent implements OnInit {

  public flag: number;

  constructor(
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ObrazovanjeDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public dataDialog: Obrazovanje,
    public obrazovanjeService: ObrazovanjeService
    ) { }

  ngOnInit(): void {
  }

  public addObrazovanje(): void {
    this.obrazovanjeService.addObrazovanje(this.dataDialog).subscribe(() => {
      this.snackBar.open('Uspešno dodato obrazovanje: ' + this.dataDialog.naziv, 'OK', {
        duration: 2500
      }),
      (error: Error) => {
        console.log(error.name + ' ' + error.message);
        this.snackBar.open('Došlo je do greške prilikom dodavanja novog artikla.', 'Zatvori', {
          duration: 2500
        })
      }
    })
  }

  public updateObrazovanje(): void {
    this.obrazovanjeService.updateObrazovanje(this.dataDialog).subscribe(() => {
      this.snackBar.open('Uspešno izmenjeno obrazovanje: ' + this.dataDialog.naziv, 'OK', {
        duration: 2500
      }),
      (error: Error) => {
        console.log(error.name + ' ' + error.message);
        this.snackBar.open('Došlo je do greške prilikom ažuriranja artikla.', 'Zatvori', {
          duration: 2500
        })
      }
    })
  }

  public deleteObrazovanje(): void {
    this.obrazovanjeService.deleteObrazovanje(this.dataDialog.id).subscribe(() => {
      this.snackBar.open('Uspešno obrisano obrazovanje: ' + this.dataDialog.naziv, 'OK', {
        duration: 2500
      }),
      (error: Error) => {
        console.log(error.name + ' ' + error.message);
        this.snackBar.open('Došlo je do greške prilikom brisanja artikla.', 'Zatvori', {
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
