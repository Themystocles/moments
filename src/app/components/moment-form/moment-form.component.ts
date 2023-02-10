import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.scss']
})
export class MomentFormComponent implements OnInit {
  @Input() btnText!: string

  constructor() { }

  ngOnInit(): void {
  }

}
