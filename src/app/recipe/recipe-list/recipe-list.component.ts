import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('wadapav', 'wada and pav and sauce', 'https://miro.medium.com/max/875/1*X5jrHl7hlD3QkqT6Cc5hjg.jpeg'),
    new Recipe('wadapav', 'wada and pav and sauce', 'https://miro.medium.com/max/875/1*X5jrHl7hlD3QkqT6Cc5hjg.jpeg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
