import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Preduzece } from 'src/app/models/preduzece';
import { PreduzeceService } from 'src/app/services/preduzece.service';
import { PreduzeceDialogComponent } from '../dialogs/preduzece-dialog/preduzece-dialog.component';

@Component({
  selector: 'app-preduzece',
  templateUrl: './preduzece.component.html',
  styleUrls: ['./preduzece.component.css']
})
export class PreduzeceComponent implements OnInit, OnDestroy {

  displayedColumns = ['id', 'naziv', 'pib', 'sediste', 'opis', 'action'];
  dataSource: MatTableDataSource<Preduzece>
  subscription: Subscription;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(private preduzeceSevice: PreduzeceService,
              private dialog: MatDialog) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData() {
    this.subscription = this.preduzeceSevice.getAllPreduzece().subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    ),
    (error: Error) => {
      console.log(error.name + ' ' + error.message);
    };
  }

  public openDialog(flag: number, id?: number, naziv?: string, pib?: number, sediste?: string, opis?: string): void {
    const dialogRef = this.dialog.open(PreduzeceDialogComponent, {data: {id, naziv, pib, sediste, opis}});
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(res => {
      if (res === 1) {
        this.loadData();
      }
    })
  }

  applyFilter(filterValue: string) {
  
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  
  }

}
