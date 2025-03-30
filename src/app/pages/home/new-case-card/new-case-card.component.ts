import { Component, Input, HostBinding, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'new-case-card',
  templateUrl: './new-case-card.component.html',
  styleUrls: ['./new-case-card.component.scss']
})
export class NewCaseCardComponent {
  @HostBinding('style.flex-basis') flexBasis = '32%';
  @Input() fullWidth: boolean = false;
  @Input() imgPath: string = '';
  @Input() caseUrl: string = '/about';
  @Input() name: string = 'name here';
  @Input() description: string = 'description';
  @Input() index: number = 0;

  styleList = [
    {backgroundColor: 'var(--olive)', color: 'var(--dark-contrast)'},
    {backgroundColor: 'var(--beige)', color: 'var(--dark-contrast)'},
    {backgroundColor: 'var(--rust)', color: 'var(--light-contrast)'}
  ]

  constructor(
    private router: Router,
  ){}

  ngOnChanges(changes) {
    if(this.fullWidth){
      this.flexBasis = '100%';
    }
  }

  goToCase(e): void {
    this.router.navigate([this.caseUrl]);
  }
}
