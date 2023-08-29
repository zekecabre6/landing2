import { Input, Component } from '@angular/core';
import traduc from 'src/assets/traduc.json'
import { AvailableLanguages } from 'src/assets/types';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent  {
  texts = traduc;
  @Input() lang:AvailableLanguages="en";


}
