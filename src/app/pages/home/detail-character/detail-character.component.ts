import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges,  } from '@angular/core';
import {BreakingBadService} from '../../../breaking-bad.service';


@Component({
  selector: 'app-detail-character',
  templateUrl: './detail-character.component.html',
  styleUrls: ['./detail-character.component.css']
})
export class DetailCharacterComponent implements OnInit{

  @Input() idCharacter: any;

  @Output() close: EventEmitter<any> = new EventEmitter();

  character = {}

  constructor(private _breakingBadService: BreakingBadService) { }

  ngOnInit(): void {
    console.log("ID", this.idCharacter)
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("CHANGES", changes)
    if(changes){
      this.detailCharacter(changes.idCharacter.currentValue);
    }
  }

  detailCharacter(id){
    this._breakingBadService.getDetailCharacter(id).subscribe(res=>{
      console.log("waaa", res);
      this.character = res[0];
    })
  }

  closeModal(){
    this.close.emit(false);
  }
}
