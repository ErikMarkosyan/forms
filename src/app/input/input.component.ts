import { Component, OnInit, Input } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() control!: FormControl
  @Input() inputType!: string;
  @Input() label!: string;
  constructor() { }

  ngOnInit(): void {
  }
  showErrors() {
    const dirty = this.control.dirty;
    const touched = this.control.touched;
    const errors  = this.control.errors;
    return dirty && touched && errors;
  }

}