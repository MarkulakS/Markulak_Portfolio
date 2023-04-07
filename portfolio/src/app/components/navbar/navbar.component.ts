import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private elementRef: ElementRef, private scrollDispatcher: ScrollDispatcher) { }

  ngOnInit(): void {
    const element = this.elementRef.nativeElement.querySelector('#nav');
    this.scrollDispatcher.scrolled().subscribe(() => {
      const scrollPositionStart = 700;
      const scrollPositionY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if(scrollPositionY <= 700) {
        element.style.backgroundColor = `#012E40`;
      }else if (scrollPositionY > 700 && scrollPositionY < 915) {
        element.style.backgroundColor = `transparent`;
      }else if (scrollPositionY >= 915 && scrollPositionY < 2200) {
        element.style.backgroundColor = `#131316`;
      }else if (scrollPositionY > 2200 && scrollPositionY < 2400 ) {
        element.style.backgroundColor = `transparent`;
      }else if (scrollPositionY >= 2400) {
        element.style.backgroundColor = `#025159`;
      }
    });
  }

  addBounce(icon: string) {
    var element: any;
    if(icon === "fb") {
      element = document.getElementById('icon-fb');

    }else if( icon === "git") {
      element = document.getElementById('icon-git');

    } else if( icon === "msg") {
      element = document.getElementById('icon-msg');
    }
    element?.classList.add("fa-bounce");

    const firstTimeout = setTimeout(() => {
      element?.classList.remove("fa-bounce");
    }, 1000);

  }
  

}

