import {Component, Renderer, ViewChild} from '@angular/core';

@Component({
  selector: 'app-demo4',
  styleUrls: ['./demo4.component.css'],
  template: `
          <md-card>
            <form>
              <input autofocus>
              <input id="foconessebotao" #foconessebotao>
              <button id="modalButton" (click)="foco()">FOcus</button>
            </form>
          </md-card>
          `
})
export class Demo4Component {


  constructor(private renderer: Renderer) {}
  @ViewChild('foconessebotao') foconessebotao: any;


  foco() {
    this.renderer.invokeElementMethod(this.foconessebotao.nativeElement, 'focus');
  }
}
