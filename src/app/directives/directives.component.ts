import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  showDetails:boolean
  firstClick:boolean
  clickNum:number = 0
  isBlue:boolean
  constructor() { }

  ngOnInit(): void {

  }
  displayDetail(): void {
    this.firstClick = true
    this.showDetails = !this.showDetails
    this.clickNum++
    if(this.clickNum > 5)
    this.isBlue = true
  }

}
