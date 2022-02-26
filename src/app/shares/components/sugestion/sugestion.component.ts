import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sugestion',
  templateUrl: './sugestion.component.html',
  styleUrls: ['./sugestion.component.scss']
})
export class SugestionComponent implements OnInit {

  @Input() suggestion:{title:string, image:string}={title:"", image:""}
  constructor() { }

  ngOnInit(): void {
  }

}
