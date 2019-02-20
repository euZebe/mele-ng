import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DrawService} from '../../draw.service';
import {Draw} from '../../model/DrawModel';

@Component({
  selector: 'mele-draw-result',
  templateUrl: './draw-result.component.html',
  styleUrls: ['./draw-result.component.css']
})
export class DrawResultComponent implements OnInit {
  drawID: string;
  draw: Draw;
  loading: boolean;
  error: string;

  constructor(
    private route: ActivatedRoute,
    private drawService: DrawService
  ) {
  }

  ngOnInit() {
    this.loading = true;
    this.route.params.subscribe(params => {
      this.drawID = params.id;
      this.drawService.getDraw(params.id).subscribe(
        draw => {
          this.loading = false;
          this.draw = draw;
        },
        error => {
          this.loading = false;
          this.error = error;
        }
      );
    });
  }
}
