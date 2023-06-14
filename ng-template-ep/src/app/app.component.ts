import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-template-ep';

  countries = [
    { name: "Sudan", continent: "Africa" },
    { name: "Angola", continent: "Africa" }]

}
