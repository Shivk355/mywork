import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AdminComponent } from './admin.component';
import { HomeDataService } from 'app/home/home-data.service';
import { AuthGuardService } from 'app/admin/services/auth-guard.service';
const adminRoutes: Routes = [
	{
		path: 'admin',
		canActivate: [AuthGuardService],
		component: AdminComponent,
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		RouterModule.forChild(adminRoutes)
	],
	exports: [
		RouterModule
	],
	declarations: [
		AdminComponent,
	],
	providers: [
		HomeDataService,
		AuthGuardService
	]
})
export class AdminModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: AdminModule,
			providers: [HomeDataService]
		};
	}
}