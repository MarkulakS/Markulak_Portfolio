import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit  {

  madimed = ['Madimed', 'Medical clinic application'];
  puchPortf = ['Puchrowicz Design', 'Weronica\'s Puchrowicz portfolio'];
  hardbeans = ['HardBeans', 'HardBeans Cosmetics'];

  constructor() { }

  ngOnInit(): void {
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
