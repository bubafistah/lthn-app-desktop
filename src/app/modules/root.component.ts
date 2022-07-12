import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
@Component({
	selector: 'lthn-root',
	templateUrl: './root.component.html'
})
export class RootComponent implements OnInit{

	public loaded: boolean = false;
	public code: any;
	public apps: any = {};
	public market: any = {};
	public url: BehaviorSubject<string> ;

	constructor(public router: Router) {}

	public async ngOnInit() {

		await this.getAppConfig()
		await this.getAppMarket()

	}

	async getAppConfig() {
		try{
			const containers = await fetch('http://localhost:36911/apps/list', {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				}
			})
			this.apps = await containers.json()
		}catch (e) {
			return false
		}

	}

	async getAppMarket(dir :string = '') {
		try{
			if(dir.length > 0){
				dir = `?dir=${dir}`
			}
			const containers = await fetch(`http://localhost:36911/apps/marketplace${dir}`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				}
			})
			this.market = await containers.json()
		}catch (e) {
			return false
		}

	}

	async installApp(app: any) {
		if((app.pkg && app.code) && !this.apps[app.code] ) {
			console.log(app)
			const containers = await fetch('http://localhost:36911/apps/install', {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({code: app.code, pkg: app.pkg})
			})
			await containers.json()
		}

//		console.log(this.apps)
		return await this.getAppConfig()
	}
	async removeApp(app: any) {
		if(app.code && this.apps[app.code]) {
			const containers = await fetch('http://localhost:36911/apps/remove', {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({code: app.code})
			})
		   await containers.json()
		}

//		console.log(this.apps)
		return await this.getAppConfig()
	}

	public onPayloadReceived($event: any) {
		console.log($event)
	}
}
