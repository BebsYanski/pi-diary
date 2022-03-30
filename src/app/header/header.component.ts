import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  opened: boolean = true

 @Output() openedState = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  emitState(){
    this.openedState.emit(this.opened)
    this.opened = !this.opened
  }

}
