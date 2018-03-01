import { Component } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ trigger('listAnimation',
                [ transition('* => *',

                  [ query(':enter', style({ opacity: 0 }), {optional: true}),


                    query(':enter',
                      stagger('300ms', [ animate('1s ease-in', keyframes(
                       [ style({ opacity: 0, transform: 'translateY(-75px)', offset: 0 }),
                          style({ opacity: .5, transform: 'translateY(50px)', offset: 0.3 }),
                          style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
                      ]))
                      ]), { optional: true }
                    ),


                    query(':leave', stagger('1000ms', [
                      animate('1s ease-in', keyframes([
                        style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
                        style({ opacity: .5, transform: 'translateY(15px)', offset: 0.2 }),
                        style({ opacity: 1, transform: 'translateY(2px)', offset: 0.4 }),
                        style({ opacity: .5, transform: 'translateY(35px)', offset: 0.6 }),
                        style({ opacity: 1, transform: 'translateY(45px)', offset: 0.8 }),
                        style({ opacity: .5, transform: 'translateY(55px)', offset: .9 }),
                        style({ opacity: 0, transform: 'translateY(65px)', offset: 1 })
                      ]))
                    ]), { optional: true })
                ])

         ]
      ) // trigger
  ] // animations: []

}) // Component

export class AppComponent {
  lifeSavingArray: Array<string>;

  /**
   *Hard coding some valueto data array
   */
  constructor() {
    this.lifeSavingArray = ['Jesus is my God', 'He came to save me', 'And He will come again'];
  }

  pushItem() {
    this.lifeSavingArray.push('YOU ARE SAVED BY BLOOD');
  }

  popItem() {
    this.lifeSavingArray.pop();
  }
}
