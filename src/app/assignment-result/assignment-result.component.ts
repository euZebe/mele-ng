import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Assignment} from '../DrawModel';
import {DrawService} from '../draw.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'mele-assignment-result',
  templateUrl: './assignment-result.component.html',
  styleUrls: ['./assignment-result.component.css']
})
export class AssignmentResultComponent implements OnInit {
  assignment: Assignment;
  assignmentID: string;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private drawService: DrawService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.assignmentID = params.id;
      this.drawService
        .getAssignment(params.id)
        .subscribe(assignment => (this.assignment = assignment));
    });
  }

  goBack() {
    this.location.back();
  }
}
