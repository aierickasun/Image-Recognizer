import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserInputDisplayComponent } from './user-input-display/user-input-display.component';
import { ImageDisplayComponent } from './image-display/image-display.component';
import { UserFileInputComponent } from './user-file-input/user-file-input.component';
import { LabelOutputComponent } from './label-output/label-output.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInputDisplayComponent,
    ImageDisplayComponent,
    UserFileInputComponent,
    LabelOutputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
