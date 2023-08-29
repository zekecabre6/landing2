import { Component, Input} from '@angular/core';
import traduc from 'src/assets/traduc.json'
import { AvailableLanguages } from 'src/assets/types';

@Component({
  selector: 'app-work-lines',
  templateUrl: './work-lines.component.html',
  styleUrls: ['./work-lines.component.scss']
})
export class WorkLinesComponent {
  texts = traduc;
  @Input() lang:AvailableLanguages="en";

}
