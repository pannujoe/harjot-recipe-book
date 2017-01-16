import { Injectable } from '@angular/core';

import { Recipe } from './recipe';
import { Ingredient } from "../shared/ingredient"

@Injectable()
export class RecipeService {
	private recipes: Recipe[] = [
    new Recipe('Ultimate Cheese Burger', 'Very tasty', 'http://www.tastyburger.com/wp-content/themes/tastyBurger/images/home/img-large-burger.jpg', [
			new Ingredient('Beef', 2),
			new Ingredient('Onions', 1),
			new Ingredient('Fries', 2),
			new Ingredient('Cheese', 1),
			new Ingredient('Soda', 2),
			new Ingredient('Bread', 1),
			new Ingredient('Pickels', 2),
			new Ingredient('Love', 1)
			]),

		new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [

			new Ingredient('Salad', 2),
			new Ingredient('Onions', 1),
			new Ingredient('Pickels', 2),
			new Ingredient('Cheese', 1),
			new Ingredient('Soda', 2),
			new Ingredient('Bread', 1),
			new Ingredient('Cheese Bread', 2),
			new Ingredient('Love', 1)

		]),

		new Recipe('Butter Chicken', 'The Best', 'http://www.evergreenrecipes.com/wp-content/uploads/2013/09/butter1.jpg', [

			new Ingredient('Salad', 2),
			new Ingredient('Onions', 1),
			new Ingredient('Pickels', 2),
			new Ingredient('Butter', 1),
			new Ingredient('Soda', 2),
			new Ingredient('Bread', 1),
			new Ingredient('Cheese Bread', 2),
			new Ingredient('Love', 1)

		]),

		new Recipe('Tandoori Chicken', 'Exc', 'http://www.zyka.com/wp-content/uploads/Krish_006-Tandoori-Chicken-web.jpg', [

			new Ingredient('Masala', 2),
			new Ingredient('Onions', 1),
			new Ingredient('Pickels', 2),
			new Ingredient('Cheese', 1),
			new Ingredient('Soda', 2),
			new Ingredient('Bread', 1),
			new Ingredient('Cheese Bread', 2),
			new Ingredient('Love', 1)

		]),
  ];

  constructor() { }

	getRecipes(){
		return this.recipes;
	}

	getRecipe(id: number) {
		return this.recipes[id];
	}

	deleteRecipe(recipe: Recipe){
		this.recipes.splice(this.recipes.indexOf(recipe), 1)
	}

}
