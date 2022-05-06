import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title!: string;

  constructor(
    private appService: AppService,
  ){ }

  ngOnInit() {
    this.title = "my-app";
  }
  onClick() {
    this.getString();
  }

  getString(): void {
    this.appService.getString()
    .subscribe(response=>{
      this.title = response[0].title;
    });
  }
}
