import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { BackgroundSvgComponent } from "./homepage/background-svg/background-svg.component";
import { SectionIntroComponent } from "./homepage/section-intro/section-intro.component";
import { MagmaTitleComponent } from "./homepage/section-intro/magma-title/magma-title.component";
import { SocialLinksComponent } from "./homepage/section-intro/social-links/social-links.component";
import { SectionAboutComponent } from "./homepage/section-about/section-about.component";
import { ArticleAboutComponent } from "./homepage/section-about/article-about/article-about.component";
import { ImageAboutComponent } from "./homepage/section-about/image-about/image-about.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { MusicPlayerComponent } from "./components/music-player/music-player.component";
import { MySvgsComponent } from "./components/my-svgs/my-svgs.component";
import { SectionNewsComponent } from './homepage/section-news/section-news.component';
import { ArticleNewsComponent } from './homepage/section-news/article-news/article-news.component';
import { VisualsNewsComponent } from './homepage/section-news/visuals-news/visuals-news.component';
import { MusicComponent } from './music/music.component';
import { MusicListComponent } from './music/music-list/music-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MagmaTitleComponent,
    SocialLinksComponent,
    BackgroundSvgComponent,
    ArticleAboutComponent,
    ImageAboutComponent,
    HomepageComponent,
    MusicPlayerComponent,
    SectionIntroComponent,
    SectionAboutComponent,
    MySvgsComponent,
    SectionNewsComponent,
    ArticleNewsComponent,
    VisualsNewsComponent,
    MusicComponent,
    MusicListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
