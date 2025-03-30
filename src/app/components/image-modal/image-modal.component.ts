import { Component, Inject, ViewChild, ElementRef  } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { fromEvent, Observable, Subscription } from "rxjs";

export interface DialogData {
  imgUrl: string;
}

@Component({
  selector: 'image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss']
})
export class ImageModalComponent {
  @ViewChild('image') image: ElementRef;
  resizeObservable$: Observable<Event>
  resizeSubscription$: Subscription;
  firstLoad = true;
  resized = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngAfterViewChecked(){
    if(!this.resized) {
      this.resizeImage();
    }
    if(this.firstLoad){
      this.resizeObservable$ = fromEvent(window, 'resize')
      this.resizeSubscription$ = this.resizeObservable$.subscribe((event) => {
        this.resizeImage();
      })
      this.firstLoad = false;
    }
  }

  resizeImage() {
    //after view checked fires once at the start, and then again every time requestanimation frame is called
    //the image element starts out with 0 width sometimes, especially with dev tools open. so we just keep 
    //trying every frame until it has a size, and then kill the loop once it does.
    requestAnimationFrame(() => {
      this.resized = this.image.nativeElement.width !== 0
      this.image.nativeElement.style.top = ((window.innerHeight - this.image.nativeElement.height) / 2) + 'px';
      this.image.nativeElement.style.left = ((window.innerWidth - this.image.nativeElement.width) / 2) + 'px';
    })
  }

  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe()
  }
}
