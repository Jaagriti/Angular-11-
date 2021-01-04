import { Component, OnInit } from '@angular/core';
import {Recepie} from '../recepie.model';

@Component({
  selector: 'app-recepies-list',
  templateUrl: './recepies-list.component.html',
  styleUrls: ['./recepies-list.component.css']
})
export class RecepiesListComponent implements OnInit {
  recepies: Recepie[]=[
    new Recepie('Rajma Chawal','This is vey yummy dish',
    'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F1%2F15%2FRecipe_logo.jpeg&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ARecipe_logo.jpeg&tbnid=w9vNBHL5RFI5dM&vet=12ahUKEwiXvYbNqLjrAhWQ8jgGHcfmA0wQMygFegUIARDYAQ..i&docid=Lp43nimClDmluM&w=800&h=800&q=recipe%20logo&hl=en&ved=2ahUKEwiXvYbNqLjrAhWQ8jgGHcfmA0wQMygFegUIARDYAQ'),
    new Recepie('Rajma Chawal','This is vey yummy dish',
    'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F1%2F15%2FRecipe_logo.jpeg&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ARecipe_logo.jpeg&tbnid=w9vNBHL5RFI5dM&vet=12ahUKEwiXvYbNqLjrAhWQ8jgGHcfmA0wQMygFegUIARDYAQ..i&docid=Lp43nimClDmluM&w=800&h=800&q=recipe%20logo&hl=en&ved=2ahUKEwiXvYbNqLjrAhWQ8jgGHcfmA0wQMygFegUIARDYAQ' 
    )  ];





  constructor() { }

  ngOnInit(): void {
  }

}
