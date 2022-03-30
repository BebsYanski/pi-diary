import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.css']
})
export class BacklogComponent implements OnInit {

  @Input()
  opened: boolean = true;


  constructor() { }

  ngOnInit(): void {
  }

}
