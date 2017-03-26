import {Component} from "@angular/core";

@Component ({
    selector: "app-entry",
    templateUrl: "entry.component.html",
    styleUrls: ["entry.component.css"]
})

export class EntryComponent {
  title: string = "My First Photo";
  photo: string = "http://placehold.it/800x500?text=Angular-Basics";
  description: string = "A Descroption of My First Photo";
  comments: any[] = [
    {name: "Stephen", comment: "A Comment"},
    {name: "Lydia", comment: "A Comment"},
    {name: "Isaac", comment: "A Comment"},
    {name: "Reuben", comment: "A Comment"},
  ]
}
