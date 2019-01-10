import { Component ,OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  cookieValue = 'UNKNOWN';
  constructor( private cookieService: CookieService ) { }

  ngOnInit(): void {
    this.cookieService.set( 'Test', 'Helllo',);
    this.cookieService.set('get','cookie');
    this.cookieValue = this.cookieService.get('get');
    
  }
}
