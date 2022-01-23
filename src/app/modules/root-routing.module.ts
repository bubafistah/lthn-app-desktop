import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RootComponent} from '@module/root.component';
import {AuthGuard} from '@module/auth/route.guard';
import {RootModule} from '@module/root.module';

const routes: Routes = [
	{
		path: '',
		component: RootComponent,
		//canActivate: [AuthGuard],
		pathMatch: 'full',
		data: {
			title: 'view.dashboard.title',
			heading: 'view.dashboard.heading',
			description: 'view.dashboard.description',
			robots: true
		}
	}
];

@NgModule({
	declarations: [],
	imports: [CommonModule,
		RootModule,
		RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class RootRoutingModule {
}
