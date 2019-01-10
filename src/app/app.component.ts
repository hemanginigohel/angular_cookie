import { Component ,OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  cookieValue = 'UNKNOWN';
constructor(private cookieService:CookieService ) { }

  ngOnInit(): void {}
  onclick(){
    this.cookieService.set( 'Test', 'Helllo',);
    this.cookieService.set('get','cookie');
    this.cookieValue = this.cookieService.get('get');
    const cookieExists: boolean = this.cookieService.check('Test');
    console.log(cookieExists);
    const value: string = this.cookieService.get('Test');
    console.log(value);
    const allCookies: {} = this.cookieService.getAll();
    console.log(allCookies);
    this.cookieService.set( 'name', 'hemangini',);
    const cookie: boolean = this.cookieService.check('Test');
    console.log(cookie);
    this.cookieService.delete('Test');
    const allCookie: {} = this.cookieService.getAll();
    console.log(allCookie);
  
  }
}
