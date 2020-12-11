import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ProdutoComponent } from './produto/produto.component';
import { HomeComponent } from './home/home.component';
import { ProdutoService} from './_services/produto.service';
import { TituloComponent } from './_shared/titulo/titulo.component';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ModalModule} from 'ngx-bootstrap/modal';
import { SepararPipe } from './separar.pipe';
import { CurrencyFormatPipe } from './currency-format.pipe';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {AppRoutingModule} from './app-routing.modules';
import {NgxCurrencyModule} from 'ngx-currency';


registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProdutoComponent,
    HomeComponent,
    TituloComponent,
    SepararPipe,
    CurrencyFormatPipe,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    ToastrModule.forRoot({progressBar: true, preventDuplicates: false, timeOut: 1000}),
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
    NgxCurrencyModule,

  ],
  providers: [
    ProdutoService,

    {
      provide: LOCALE_ID,
      useValue: 'pt'
    }

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
