import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotificationSharedModule } from '../shared/modules/notification.module';
import { NotificationService } from '../shared/services/notification.service';
import { 
  KzCepPipe,
  KzCpfPipe,
  KzCnpjPipe,
  KzCpfCnpjPipe,
  KzCpfValidatorDirective,
  KzCnpjValidatorDirective, 
  KzCpfCnpjValidatorDirective,
  ModalUtilComponent,
  KzPaginacaoComponent,
  KzMaskDirective,
  KzMaskCurrencyDirective,
  KzPikadayDirective
} from './';

@NgModule({
  imports:      [ 
  	CommonModule,
    FormsModule,
    NotificationSharedModule 
  ],
  declarations: [ 
  	KzCepPipe,
  	KzCpfPipe,
  	KzCnpjPipe,
  	KzCpfCnpjPipe,
  	KzCpfValidatorDirective,
  	KzCnpjValidatorDirective, 
  	KzCpfCnpjValidatorDirective,
  	ModalUtilComponent,
  	KzPaginacaoComponent,
    KzMaskDirective,
    KzMaskCurrencyDirective,
    KzPikadayDirective
  ],
  exports: [ 
  	KzCepPipe,
  	KzCpfPipe,
  	KzCnpjPipe,
  	KzCpfCnpjPipe,
  	KzCpfValidatorDirective,
  	KzCnpjValidatorDirective, 
  	KzCpfCnpjValidatorDirective,
  	ModalUtilComponent,
  	KzPaginacaoComponent,
    KzMaskDirective,
    KzMaskCurrencyDirective,
    KzPikadayDirective,
    CommonModule, 
    FormsModule 
  ],
  providers: [
    NotificationService
  ]

})
export class SharedModule {}