import { NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {DataModule} from '@data/data.module';
import {StatusModule} from '@module/status/status.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {FlexModule} from '@angular/flex-layout';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthModule} from '@module/auth/auth.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {ReactiveComponentModule} from '@ngrx/component';
import {IconModule, NgxUIModule} from '@swimlane/ngx-ui';
import {ConsoleModule} from '@module/console/console.module';
import {JwtModule} from '@auth0/angular-jwt';
import {AuthService} from '@module/auth/auth.service';
import {HeaderInterceptor} from '@module/auth/auth.interceptor';

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http);
}

export function tokenGetter() {
	return AuthService.token["access_token"];
}

@NgModule({
	declarations: [AppComponent],
	imports: [
		CommonModule,
		BrowserModule.withServerTransition({appId: 'lthn-data-sync'}),
		BrowserAnimationsModule,
		HttpClientModule,
		TranslateModule.forRoot({
			defaultLanguage: 'en',
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient]
			}
		}),
		JwtModule.forRoot({
			config: {
				tokenGetter: tokenGetter,
				allowedDomains: ["localhost:36911", "127.0.0.1:36911"],
			},
		}),
		AppRoutingModule,
		DataModule,
		StatusModule,
		MatSidenavModule,
		MatIconModule,
		MatDividerModule,
		MatListModule,
		MatToolbarModule,
		MatMenuModule,
		MatButtonModule,
		MatTooltipModule,
		FlexModule,
		AuthModule,
		ReactiveComponentModule,
		NgxUIModule,
		IconModule,
		ConsoleModule

	],
	bootstrap: [AppComponent],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }
	]
})
/**
 * Application shell/bootstrap
 */
export class AppModule {}
