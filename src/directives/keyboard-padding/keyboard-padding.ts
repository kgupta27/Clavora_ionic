import { Directive, ElementRef } from '@angular/core';

/**
 * Generated class for the KeyboardPaddingDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[keyboard-padding]' // Attribute selector
})
export class KeyboardPaddingDirective {
  documentHeight;
  // onShowSubscription;
  // onHideSubscription
  onShowKeyboard;
  onHideKeyboard;

  constructor(private el: ElementRef) {
    this.documentHeight = document.body.clientHeight;
    // Keyboard.show();

    this.onShowKeyboard = (e) => {
      console.log("1", e);
      console.log("2", document.body.clientHeight);
      this.el.nativeElement.style.paddingBottom = e.keyboardHeight + 'px';
    }

    this.onHideKeyboard = (e) => {
      console.log("3", e);
      console.log("4", document.body.clientHeight);
      this.el.nativeElement.style.paddingBottom = 0 + 'px';
    }

    window.addEventListener('keyboardWillShow', this.onShowKeyboard);
    window.addEventListener('keyboardWillHide', this.onHideKeyboard);

    /* this.onShowSubscription = keyboard.onKeyboardShow().subscribe((e) => {

    }); */


    /*  this.onHideSubscription = keyboard.onKeyboardHide().subscribe((e) => {
       
     });*/


    console.log("5", 'Hello BgResizerDirective Directive', document.body.clientHeight);
    el.nativeElement.style.backgroundPositionY = '100%';
  }




  ngOnDestroy() {
    console.log("6", "ngOnDestroy - Directive");
    if (this.onShowKeyboard) {
      // this.onShowSubscription.unsubscribe();
      window.removeEventListener('keyboardWillShow', this.onShowKeyboard)
    }
    if (this.onHideKeyboard) {
      window.removeEventListener('keyboardWillHide', this.onHideKeyboard)
      // this.onHideSubscription.unsubscribe();
    }
  }

}

