import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ParamsService } from '../../service/params.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentRoute: string = '';

  headerItems = ['work']

  constructor(
    private router: Router,
    private paramsService: ParamsService,
  ){
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
        this.currentRoute = event.urlAfterRedirects.split('/')[1] || '';
      }
    });
  }

  goTo(url): void {
    this.paramsService.setWork();
    this.router.navigate([url]);
  }
}
