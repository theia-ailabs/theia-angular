import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import { AppComponent } from './app.component';
import { WelcomeScreenComponent } from './components/welcome-screen/welcome-screen.component';
import { BackgroundCanvasComponent } from './components/background-canvas/background-canvas.component';
import { TextLoaderComponent } from './components/text-loader/text-loader.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MainDisplayComponent } from './components/main-display/main-display.component';
import { MessageAreaComponent } from './components/message-area/message-area.component';
import { AudioWaveComponent } from './components/audio-wave/audio-wave.component';
import { AiBodyComponent } from './components/ai-body/ai-body.component';
import { SvgIaComponent } from './components/ai-body/svg-ia/svg-ia.component';
import { SvgTalkingComponent } from './components/ai-body/svg-talking/svg-talking.component';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';
import { FormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainDisplayComponent,
    FooterBarComponent,
    MessageAreaComponent,
    AiBodyComponent,
    BackgroundCanvasComponent,
    TextLoaderComponent,
    SvgIaComponent,
    SvgTalkingComponent,
    AudioWaveComponent,
    WelcomeScreenComponent,
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
