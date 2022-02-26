import { Component, OnInit, Input } from '@angular/core';


interface learIdeaDataInterface{
  title:string,
  content:string,
  logo:string
}

@Component({
  selector: 'app-learn-idea',
  templateUrl: './learn-idea.component.html',
  styleUrls: ['./learn-idea.component.scss']
})
export class LearnIdeaComponent implements OnInit {

  // @Input() title:input['title'] = ""
  // @Input() content:input['content']="";
  // @Input() logo:input['logo']=""
  @Input() learIdeaData:learIdeaDataInterface = {
    title:"string",
    content:"string",
    logo:"string"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
