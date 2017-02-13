import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { MoscowPage } from '../pages/moscow/moscow';
import { SamuiPage } from '../pages/samui/samui';
import { Storage } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    MoscowPage,
    SamuiPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    MoscowPage,
    SamuiPage
  ],
  providers: [ Storage, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
