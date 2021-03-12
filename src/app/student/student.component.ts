import { Component, OnInit,Input ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input() public parentdata: any;
  @Output() shiva = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  shivaMethod(){
    this.shiva.emit("hello")
  }
}
