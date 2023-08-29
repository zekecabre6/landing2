import { Component, Input } from '@angular/core';
import { AvailableLanguages } from 'src/assets/types';
import traduc from 'src/assets/traduc.json'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  texts = traduc;
  @Input() lang:AvailableLanguages="en";
}
