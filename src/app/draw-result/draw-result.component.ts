import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DrawService} from '../draw.service';
import {Draw} from '../DrawModel';

@Component({
  selector: 'mele-draw-result',
  templateUrl: './draw-result.component.html',
  styleUrls: ['./draw-result.component.css']
})
export class DrawResultComponent implements OnInit {
  drawID: string;
  draw: Draw;

  constructor(
    private route: ActivatedRoute,
    private drawService: DrawService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.drawID = params.id;
      this.drawService.getDraw(params.id).subscribe(draw => (this.draw = draw));
    });
  }
}
