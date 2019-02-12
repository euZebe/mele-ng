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
  typedName: string;
  allowedAssignments: boolean[][];

  constructor(private router: Router, private drawService: DrawService) {
  }

  ngOnInit() {
    this.allowedAssignments = [];
  }

  addParticipant(value: string): void {
    this.allowedAssignments.push(Array(this.participants.length).fill(false));
    this.participants.push(value);
    this.typedName = '';
    this.allowedAssignments.forEach(row => row.push(false));
  }

  blend() {
    this.drawService.generateDraw(this.participants, this.allowedAssignments).subscribe(draw => {
      this.router.navigate([`/draw/${draw.id}`]);
    });
  }

  allRowsChecked() {
    return this.allowedAssignments
      .map(row => row.reduce((agg, value) => agg || value, false))
      .reduce((agg, value) => agg && value, true);
  }

  allow(i: number, j: number) {
    this.allowedAssignments[j][i] = !this.allowedAssignments[j][i];
  }
}
