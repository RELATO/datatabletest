import { Component, Renderer, ViewChild } from '@angular/core';
import { NotificationService } from '../shared/services/notification.service'


@Component({
  selector: 'inline-edit-demo',
  template: `
  <div class="container">
    <div>
      <h3>
        Inline Editing
        <small>
          <a href="https://github.com/swimlane/ngx-datatable/blob/master/demo/basic/inline.component.ts" autofocus target="_blank">
            Source
          </a>
        </small>
      </h3>

       <ngx-datatable
          #mydatatable
          id="mydatatable"
          style="width: 90%"
          class="material"
          [rows]="rows"
          [columnMode]="'force'"
          [headerHeight]="50"
          [footerHeight]="50"
          [rowHeight]="'auto'"
          [limit]="15"
          [selected]="selected"
          [selectionType]="'single'"
          (activate)="onActivate($event)"
          (select)='onSelect($event)'
          (keydown.arrowup)='onArrowUp($event)'
          (keydown.arrowdown)='onArrowDown($event)'
          (keyup.control.enter)='onCtrlEnter($event)'
          > 
       
        <ngx-datatable-column name="Name">
          <ng-template ngx-datatable-cell-template let-value="value" let-row="row">
            <span
              title="Double click to edit"
              (dblclick)="editing[row.$$index + '-name'] = true"
              *ngIf="!editing[row.$$index + '-name']">
              {{value}}
            </span>
            <input
              autofocus
              (blur)="updateValue($event, 'name', value, row)"
              (keyup.enter)="updateValue($event, 'name', value, row)"
              (keydown.arrowdown)="updateValue($event, 'name', value, row)"
              *ngIf="editing[row.$$index + '-name']"
              type="text"
              [value]="value"
            />
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Gender">
          <ng-template ngx-datatable-cell-template let-row="row" let-value="value">
             <span
              title="Double click to edit"
              (dblclick)="editing[row.$$index + '-gender'] = true"
              *ngIf="!editing[row.$$index + '-gender']">
              {{value}}
            </span>
            <select
              *ngIf="editing[row.$$index + '-gender']"
              (change)="updateValue($event, 'gender', value, row)"
              [value]="value">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Age">
          <ng-template ngx-datatable-cell-template let-value="value">
            {{value}}
          </ng-template>
        </ngx-datatable-column>
      
      </ngx-datatable>
    </div>
     <small>
          <a href="#" (click)="updateRowPosition()" id="ur" #ur>Update Rows</a>
        </small>
    <div class='selected-column'>
        <h4>Selections</h4>
        <ul>
          <li *ngFor='let sel of selected'>
            {{sel.name}}
          </li>
          <li *ngIf="!selected.length">No Selections</li>
        </ul>
      </div>
  </div>
  <button id="modalButton" (click)="foco()">FOcus</button>
  `
})
export class InlineEditComponent {

  editing = {};
  rows = [];
  selected: any[] = [];       
 
  constructor(private renderer: Renderer, private notificationService: NotificationService,) {
    this.fetch((data) => {
      this.selected = [data[0]];
      this.rows = data;
    });
  }
  @ViewChild('mydatatable') mydatatable: any;

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  foco() {
    this.renderer.invokeElementMethod(this.mydatatable.nativeElement, 'focus');
  }

  onKeydown(event) {
    if (event.key === "Enter") {
      this.editing[this.getSelectedIx() + '-' + 'name'] = true;
    }
  }
  onArrowUp(event) {
    console.log('Event: arrow-UP', event);
    this.gotoPrevious();
  }  

  onArrowDown(event) {
    console.log('Event: arrow-DOWN', event);
    this.gotoNext();
  }  
  onCtrlEnter(event) {
    console.log('CTRL ENTER ' + event);
    console.log('SELECTED -> ' , this.selected);
  }

  updateValue(event, cell, cellValue, row) {
    this.editing[row.$$index + '-' + cell] = false;
    this.rows[row.$$index][cell] = event.target.value;
    this.notificationService.success('Dados salvos!', 'O valor de cotação foi recebido.');
  }
  
  gotoNext(): void {
      let idx = this.getSelectedIx();
      this.selected[0] = this.rows[++idx];
  }

  gotoPrevious(): void {
      let idx = this.getSelectedIx();
      if (idx > 0) {
        this.selected[0] = this.rows[--idx];
      }
     
  }

  onSelect(event) {
    console.log('Event: select', event, this.selected);
  }

  onActivate(event) {
    console.log('Event: activate', event);
    //this.editing[event.row.$$index + '-' + event.column.prop] = true;
    if ( (event.key === "Enter")) {
      console.log('Event: activate COM ENTER', event);
    }
    
  }
  updateRowPosition() {
    const ix = this.getSelectedIx();
    const arr = [ ...this.rows ];
    arr[ix - 1] = this.rows[ix];
    arr[ix] = this.rows[ix - 1];
    this.rows = arr;
  }

  getSelectedIx() {
    if (this.selected.length >0) {
      return this.selected[0]['$$index'];
    } else {
      this.selectFirst();
      this.updateRowPosition();
    }
  }

  selectFirst() {
    if ( this.rows.length > 0 ) {
      this.selected.push(this.rows[1]);
    }
  }

  removeSelection() {
    this.selected = [];
  }
 
/*
  @HostListener('window:keyup', ['$event'])
  onKeyUp(e) {
    this.notificationService.success('Keyup!', JSON.stringify(e));
    console.log('keyup', e);
  }
  
  @HostListener('window:input', ['$event'])
  onInput(e) {
    console.log('input', e);
  }
*/  
}