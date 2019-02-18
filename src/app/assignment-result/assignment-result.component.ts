import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Assignment} from '../model/DrawModel';
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
  loading: boolean;
  private error: string;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private drawService: DrawService
  ) {
  }

  ngOnInit() {
    this.loading = true;
    this.route.params.subscribe(params => {
      this.assignmentID = params.id;
      this.drawService.getAssignment(params.id).subscribe(assignment => {
          this.assignment = assignment;
          this.loading = false;
        },
        error => {
          this.loading = false;
          this.error = error;
        });
    });
  }

  goBack() {
    this.location.back();
  }
}
