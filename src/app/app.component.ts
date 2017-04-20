import { Component } from '@angular/core';
import { grow } from '../shared/shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ grow ]
})
export class AppComponent {
  title = 'pwaAmp app works!';
  state: String = 'small';
  
  test(){
    //console.log("I've been clicked!");
    this.state = (this.state === 'small' ? 'large' : 'small');
  }
}
