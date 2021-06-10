import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { Obrazovanje } from 'src/app/models/obrazovanje';
import { Radnik } from 'src/app/models/radnik';
import { ObrazovanjeService } from 'src/app/services/obrazovanje.service';
import { RadnikService } from 'src/app/services/radnik.service';

@Component({
  selector: 'app-radnik-dialog',
  templateUrl: './radnik-dialog.component.html',
  styleUrls: ['./radnik-dialog.component.css']
})
export class RadnikDialogComponent implements OnInit, OnDestroy {

  flag: number;
  obrazovanja: Obrazovanje[];
  obrazovanjeSubscription: Subscription;

  constructor(
    public radnikService: RadnikService,
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<RadnikDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public dataDialog: Radnik,
    public obrazovanjeSevice: ObrazovanjeService
  ) { }

  ngOnDestroy(): void {
    this.obrazovanjeSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.obrazovanjeSubscription = this.obrazovanjeSevice.getAllObrazovanje()
                                  .subscribe(dataDialog => {
                                    this.obrazovanja = dataDialog;
                                  }),
                                  (error: Error) => {
                                    console.log(error.name + ' ' + error.message);
                                  }
  }

  compareTo(a, b) {
    return a.id == b.id;
  }

  public addRadnik(): void {
    this.radnikService.addRadnik(this.dataDialog).subscribe(() => {
      this.snackBar.open('Radnik uspešno dodat.', 'OK', {
        duration: 2500
      })
    }),
    (error: Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Došlo je do greške!', 'Završi', {
        duration: 2500
      })
    }
  }

  public updateRadnik(): void {
    this.radnikService.updateRadnik(this.dataDialog).subscribe(() => {
      this.snackBar.open('Radnik uspešno izmenjen: ' + this.dataDialog.id, 'OK', {
        duration: 2500
      })
    }),
    (error: Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Došlo je do greške!', 'Završi', {
        duration: 2500
      })
    }
  }

  public deleteRadnik(): void {
    this.radnikService.deleteRadnik(this.dataDialog.id).subscribe(() => {
      this.snackBar.open('Radnik uspešno obrisan: ' + this.dataDialog.id, 'OK', {
        duration: 2500
      })
    }),
    (error: Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Došlo je do greške!', 'Završi', {
        duration: 2500
      })
    }
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste.', 'OK', {
      duration: 1000
    });
  }

}
