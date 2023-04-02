import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MainDisplayComponent } from './components/main-display/main-display.component';
import { AiBodyComponent } from './components/ai-body/ai-body.component';
import { MessageAreaComponent } from './components/message-area/message-area.component';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';
import { FormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ErrorComponent } from './components/error/error.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { EmailsComponent } from './components/emails/emails.component';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderComponent } from './components/loader/loader.component';
import { RouterOutlet } from '@angular/router';
import { BackgroundCanvasComponent } from './components/background-canvas/background-canvas.component';
import { TextLoaderComponent } from './components/text-loader/text-loader.component';
import { SvgIaComponent } from './components/ai-body/svg-ia/svg-ia.component';
import { SvgTalkingComponent } from './components/ai-body/svg-talking/svg-talking.component';
import { AppService } from './app.service';
import { AudioWaveComponent } from './components/audio-wave/audio-wave.component';
import { SleeperScreenComponent } from './components/sleeper-screen/sleeper-screen.component';
import { InputMsgComponent } from './components/input-msg/input-msg.component';
import { WelcomeScreenComponent } from './components/welcome-screen/welcome-screen.component';
import { SvgSpacetravelComponent } from './components/toFix/svg-spacetravel/svg-spacetravel.component';
import { RealstateBackComponent } from './components/realstate-back/realstate-back.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainDisplayComponent,
    FooterBarComponent,
    MessageAreaComponent,
    AiBodyComponent,
    ErrorComponent,
    CalendarComponent,
    ContactsComponent,
    EmailsComponent,
    LoaderComponent,
    BackgroundCanvasComponent,
    TextLoaderComponent,
    SvgIaComponent,
    SvgTalkingComponent,
    AudioWaveComponent,
    SleeperScreenComponent,
    InputMsgComponent,
    WelcomeScreenComponent,
    SvgSpacetravelComponent,
    RealstateBackComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FullCalendarModule,
    SocialLoginModule,
    RouterOutlet,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          AppService,
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('clientId'),
          },
        ],
        onError: (err) => {
          console.error(err);
        },
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
