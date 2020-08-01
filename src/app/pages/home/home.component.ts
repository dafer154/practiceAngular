import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {BreakingBadService} from '../../breaking-bad.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  characters = [];
  showDetail = false;
  idCharacter;

  constructor(private _breakingBadService: BreakingBadService) { }

  ngOnInit(): void {
    this.getAllCharacters();
  }

  closeModal($event){
    this.showDetail = $event
    //console.log("jajaja", $event);
  }

  getAllCharacters(){
    this._breakingBadService.getAllCharacters().subscribe(res=>{
      this.characters = res;
      console.log("waaa", res);
    })
  }

  selectCharacter(id: string){
    console.log("ID", id);
    this.showDetail = true;
    this.idCharacter = id;
  }
}
