import {
  Component,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput') ingredientName!: ElementRef;
  @ViewChild('amountInput') ingredientAmount!: ElementRef;

  @Output() newIngredient = new EventEmitter<Ingredient>();

  onAddIngredients() {
    event?.preventDefault();
    const ingName = this.ingredientName.nativeElement.value;
    const ingAmount = this.ingredientAmount.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.newIngredient.emit(newIngredient);
  }
}
