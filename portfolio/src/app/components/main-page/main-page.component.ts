import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ScrollDispatcher, CdkScrollable  } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit  {

  constructor(private scrollDispatcher: ScrollDispatcher, private elementRef: ElementRef) { }

  ngOnInit(): void {
    // const cubeElement = this.elementRef.nativeElement.querySelector('#cube');
    this.scrollDispatcher.scrolled().subscribe(() => {
      const scrollPositionStart = 700;
      const scrollPositionY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if(scrollPositionY >= scrollPositionStart && scrollPositionY-700 <= 1300) {
        // cubeElement.style.left = `${scrollPositionY-700 + 5}px`;
        // console.log("Y: " +scrollPositionY);
      }      // }else {
      //   cubeElement.style.rght = `${scrollPositionY + 5}px`;
      //   // console.log("right Y: " +scrollPositionY);
      // }
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      })
    })

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
  }
  

}
