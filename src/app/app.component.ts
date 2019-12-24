import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  test(e:any):void{
    console.log((e.clientX - e.target.offsetLeft) + ' - ' + (e.clientY - e.target.offsetTop))
  }
}
