import { OnDestroy } from '@angular/core';
import { Component, ComponentFactoryResolver, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { Preduzece } from 'src/app/models/preduzece';
import { Sektor } from 'src/app/models/sektor';
import { PreduzeceService } from 'src/app/services/preduzece.service';
import { SektorService } from 'src/app/services/sektor.service';

@Component({
  selector: 'app-sektor-dialog',
  templateUrl: './sektor-dialog.component.html',
  styleUrls: ['./sektor-dialog.component.css']
})
export class SektorDialogComponent implements OnInit, OnDestroy {

  public flag: number;
  preduzeca: Preduzece[];
  public subscription: Subscription;

  constructor(
    public preduzeceService: PreduzeceService,
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<SektorDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public dataDialog: Sektor,
    public sektorService: SektorService
  ) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.preduzeceService.getAllPreduzece().subscribe(
      data => {
        this.preduzeca = data;
      }),
      (error: Error) => {
        console.log(error.name + ' ' + error.message);
        this.snackBar.open('Došlo je do greške.', 'Završi', {
          duration: 1000
        })
      };
  }

  compareTo(a, b) {
    return a.id == b.id;
  }

  public addSektor(): void {
    this.sektorService.addSektor(this.dataDialog).subscribe(() => {
      this.snackBar.open('Sektor uspešno dodat: ' + this.dataDialog.id, 'OK', {
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

  public updateSektor(): void {
    this.sektorService.updateSektor(this.dataDialog).subscribe(() => {
      this.snackBar.open('Sektor uspešno izmenjen: ' + this.dataDialog.id, 'OK', {
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

  public deleteSektor(): void {
    this.sektorService.deleteSektor(this.dataDialog.id).subscribe(() => {
      this.snackBar.open('Sektor uspešno obrisan: ' + this.dataDialog.id, 'OK', {
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
