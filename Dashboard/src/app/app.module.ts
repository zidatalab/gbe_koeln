import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule} from './../material/material.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StartComponent } from './pages/start/start.component';
import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule ,PlotlyService} from 'angular-plotly.js';
//import * as SVLocale from 'plotly.js/lib/locales/de.js';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MapComponent } from './components/leafletmap/map/map.component';
import { PlotComponent } from './components/plotly/plot/plot.component';
import { TableComponent } from './components/table/table/table.component';
import { BoxComponent } from './components/infobox/box/box.component';
import { registerLocaleData } from '@angular/common';
import locales from '@angular/common/locales/de';
import { LOCALE_ID } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { InterceptorService } from './services/interceptor-service.service';
import { PrivateComponent } from './pages/private/private.component';
import { AdminComponent } from './pages/admin/admin.component' 
import { ReplacePipe } from './services/replace_pipe';

PlotlyModule.plotlyjs = PlotlyJS;

registerLocaleData(locales, 'de');

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    MapComponent,
    PlotComponent,
    TableComponent,
    BoxComponent,
    LoginComponent,
    ProfileComponent,
    PrivateComponent,
    AdminComponent,
    ReplacePipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PlotlyModule,
    FlexLayoutModule  ,
    ReactiveFormsModule, 
    FormsModule, 
    HttpClientModule 

    
  ],
  providers: [{provide: LOCALE_ID, useValue: 'de-DE' },PlotlyService,

  // This needs to be uncommented to provide  auth
  { provide: HTTP_INTERCEPTORS, 
  useClass: InterceptorService, 
  multi: true } 
],
  bootstrap: [AppComponent]
})

export class AppModule { 
  constructor(private plotlyService: PlotlyService) {
    //this.plotlyService.getPlotly().register(SVLocale);
  }
}
