import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DrawService} from '../draw.service';

@Component({
  selector: 'mele-draw-form',
  templateUrl: './draw-form.component.html',
  styleUrls: ['./draw-form.component.css']
})
export class DrawFormComponent implements OnInit {
  participants: string[] = [];
  typedDrawName: string;
  typedParticipantName: string;
  allowedAssignments: boolean[][];

  errors: { constraints: any }[];

  constructor(private router: Router, private drawService: DrawService) {
  }

  ngOnInit() {
    this.allowedAssignments = [];
  }

  addParticipant(value: string): void {
    this.allowedAssignments.push(Array(this.participants.length).fill(false));
    this.participants.push(value);
    this.typedParticipantName = '';
    this.allowedAssignments.forEach(row => row.push(false));
  }

  blend() {
    this.drawService.generateDraw(this.typedDrawName, this.participants, this.allowedAssignments).subscribe(draw => {
      console.log('success');
      this.router.navigate([`/draw/${draw.id}`]);
    }, (e) => {
      this.errors = e.error;
    });
  }

  allRowsChecked(): boolean {
    // FIXME: restore validation
    // return this.allowedAssignments
    //   .map(row => row.reduce((agg, value) => agg || value, false))
    //   .reduce((agg, value) => agg && value, true);
    return true;
  }

  allow(i: number, j: number) {
    this.allowedAssignments[j][i] = !this.allowedAssignments[j][i];
  }

  getErrorMessage() {
    return this.errors.map(err => Object.values(err.constraints).join('\n'));
  }
}
