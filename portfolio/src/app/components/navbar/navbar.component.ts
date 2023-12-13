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
    const langEl = document.querySelector('.langWrap');
    const link = document.querySelectorAll('.lang');
    const home = document.querySelector('.home');
    const skills = document.querySelector('.skills');

    link.forEach(el => {
      el.addEventListener('click', () => {
        langEl?.querySelector('.active')?.classList.remove('active');
        el.classList.add('active');

        const attr= el.getAttribute('language');
        if(attr === 'en') {
          home!.textContent = data['en'].home;
          skills!.textContent = data['en'].skills;
        }else {
          home!.textContent = data['pl'].home;
          skills!.textContent = data['pl'].skills;
        }
      });
    })


    var burger = document.getElementById('hamburger');
    var list = document.getElementById('list-mobile');

    const element = this.elementRef.nativeElement.querySelector('#nav');
    this.scrollDispatcher.scrolled().subscribe(() => {

          
    const window_width = window.outerWidth;
    console.log("Width window: "+window_width);


      // const scrollPositionStart = 700;
      const scrollPositionY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      let actualPosition = 0;
      
      if (burger?.classList.contains("clicked")) {
        actualPosition = scrollPositionY;
        if (actualPosition != 0) {
          burger?.classList.remove("clicked");
          list?.classList.remove("list-display-on")
        }
      }

      console.log(scrollPositionY)

      if(window_width > 1200 ) {
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
      }else if(window_width < 1200 && window_width > 700) {
        if(scrollPositionY <= 645) {
          element.style.backgroundColor = `#012E40`;
        }else if (scrollPositionY > 645 && scrollPositionY < 865) {
          element.style.backgroundColor = `transparent`;
        }else if (scrollPositionY >= 865 && scrollPositionY < 2400) {
          element.style.backgroundColor = `#131316`;
        }else if (scrollPositionY > 2400 && scrollPositionY < 2600 ) {
          element.style.backgroundColor = `transparent`;
        }else if (scrollPositionY >= 2400) {
          element.style.backgroundColor = `#025159`;
        }
      }else if(window_width < 700 && window_width > 491) {
        if(scrollPositionY <= 630) {
          element.style.backgroundColor = `#012E40`;
        }else if (scrollPositionY > 630 && scrollPositionY < 865) {
          element.style.backgroundColor = `transparent`;
        }else if (scrollPositionY >= 865 && scrollPositionY < 2276) {
          element.style.backgroundColor = `#131316`;
        }else if (scrollPositionY > 2276 && scrollPositionY < 2476 ) {
          element.style.backgroundColor = `transparent`;
        }else if (scrollPositionY >= 2476) {
          element.style.backgroundColor = `#025159`;
        }
      }else if(window_width < 491) {
        if(scrollPositionY <= 830) {
          element.style.backgroundColor = `#012E40`;
        }else if (scrollPositionY > 830 && scrollPositionY < 1030) {
          element.style.backgroundColor = `transparent`;
        }else if (scrollPositionY >= 1030 && scrollPositionY < 3017) {
          element.style.backgroundColor = `#131316`;
        }else if (scrollPositionY > 3017 && scrollPositionY < 3200 ) {
          element.style.backgroundColor = `transparent`;
        }else if (scrollPositionY >= 3200) {
          element.style.backgroundColor = `#025159`;
        }
      }

      
    });


    var data = {
      "en": {
          "home": "home",
          "skills": "skills"
      },
      "pl": {
          "home": "główna",
          "skills": "umiejętności"
      }
    };
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

  focusHamburger() {
    var burger = document.getElementById('hamburger');
    var list = document.getElementById('list-mobile');

    if (!burger?.classList.contains("clicked")) 
    {
      burger?.classList.add("clicked");
      list?.classList.add("list-display-on")
    }
    else if (burger?.classList.contains("clicked")) 
    {
      burger?.classList.remove("clicked");
      list?.classList.remove("list-display-on")
    }
  }
  

}

