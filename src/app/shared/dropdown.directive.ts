import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostListener('click', ['$event']) toggle(event: Event) {
    const element = event.target as HTMLAnchorElement;
    const siblingElement = element.nextElementSibling;
    siblingElement?.classList.toggle('show');
  }
}
