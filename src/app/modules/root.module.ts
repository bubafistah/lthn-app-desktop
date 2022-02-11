import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RootComponent} from './root.component';
import {MatButtonModule} from '@angular/material/button';
import {FlexModule} from '@angular/flex-layout';
import {ConsoleModule} from '@plugin/console/console.module';
import {MatTabsModule} from '@angular/material/tabs';
import {WalletModule} from '@plugin/lthn/wallet/wallet.module';
import {TranslateModule} from '@ngx-translate/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatListModule} from '@angular/material/list';
import {ReactiveComponentModule} from '@ngrx/component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {MatIconModule} from '@angular/material/icon';
import {PipesModule} from '@pipe/pipes.module';
import {MatCardModule} from '@angular/material/card';
import {BlockchainModule} from '@plugin/lthn/chain/blockchain.module';

@NgModule({
	declarations: [RootComponent],
	imports: [
		CommonModule,
		MatButtonModule,
		FlexModule,
		MatTabsModule,
		WalletModule,
		TranslateModule,
		MatDividerModule,
		ConsoleModule,
		MatProgressSpinnerModule,
		MatListModule,
		ReactiveComponentModule,
		PipesModule,
		NgxDatatableModule,
		MatIconModule,
		MatCardModule,
		BlockchainModule
	]
})
export class RootModule {
}
