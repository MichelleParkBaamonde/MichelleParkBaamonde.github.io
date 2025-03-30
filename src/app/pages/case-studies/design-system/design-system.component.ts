import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ImageModalComponent } from 'src/app/components/image-modal/image-modal.component';

@Component({
  selector: 'design-system',
  templateUrl: './design-system.component.html',
  styleUrls: ['./design-system.component.scss']
})
export class DesignSystemComponent {
  @ViewChild("topOfPage") topOfPage: ElementRef;

  constructor(
    public dialog: MatDialog,
    private router: Router
  ) {}

  openDialog(url) {
    this.dialog.open(ImageModalComponent, {
      data: {
        imgUrl: url
      }
    });
  }

  goTo(url: string, external: boolean = false) {
    if(external){
      window.location.href = url;
    }
    else {
      this.router.navigate([url]);
    }
  }

  scrollToTop() {
    this.topOfPage.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  goToNewTab(url: string) {
    window.open(url, '_blank')
  }
}
