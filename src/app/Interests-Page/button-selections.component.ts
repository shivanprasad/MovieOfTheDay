import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'button-selections',
    templateUrl: 'button-selections.component.html',
    styleUrls: ['button-selections.component.css']
  })
export class ButtonSelectionsComponent {

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void{

  }

  public onSubmit(data: any){
    
  }

}