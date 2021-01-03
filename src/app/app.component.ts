import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'geometrix';
  // showContacts(ev): void {
  //   console.log(ev.target)
  //   console.log(ev.target.value) //в данном случае undefined
  //   console.log(ev.keyCode) //в данном случае undefined
  // }
}
