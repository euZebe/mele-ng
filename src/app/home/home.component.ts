import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'mele-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  drawID: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(value: any): void {
    this.router.navigate([`/assignment/${value.assignmentID}`]);
  }
}
