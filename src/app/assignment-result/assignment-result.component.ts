import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-assignment-result',
  templateUrl: './assignment-result.component.html',
  styleUrls: ['./assignment-result.component.css']
})
export class AssignmentResultComponent implements OnInit {

  constructor(private location: Location) {
  }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }
}
