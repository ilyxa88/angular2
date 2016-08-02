import { Component, OnInit } from '@angular/core';
import {ElementRef} from "@angular/core";
import {FullMainDirective} from '../shared/directive/full-main.directive';
/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'quileo-main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css'],
  directives: [FullMainDirective]
})
export class MainComponent implements OnInit {

  public listData: any;
  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(private _elRef:ElementRef) {
    this.getListData()
  }

  /**
   * Get the names OnInit
   */
  ngOnInit() {

  }
  getListData(){
    // this.listData =
    //   [
    //     {brand: "IKEA", address: "Minsk, Test test test test test test test etst test test test test test test test "},
    //     {brand: "Nike", address: "Minsk, Pushka 7"},
    //     {brand: "adidas", address: "Minsk, Pushka 7 test test test test test"},
    //     {brand: "google", address: "Londan, Test 5 test test"},
    //     {brand: "IKEA", address: "Minsk, Test test test test test test test etst test test test test test test test "},
    //     {brand: "IKEA", address: "Minsk, Pushka 7"},
    //     {brand: "IKEA", address: "Minsk, Pushka 7"},
    //     {brand: "IKEA", address: "Minsk, Pushka 7"},
    //     {brand: "IKEA", address: "Minsk, Pushka 7"},
    //     {brand: "IKEA", address: "Minsk, Pushka 7"},
    //     {brand: "IKEA", address: "Minsk, Pushka 7"},
    //     {brand: "IKEA", address: "Minsk, Pushka 7"},
    //     {brand: "IKEA", address: "Minsk, Pushka 7"},
    //     {brand: "IKEA", address: "Minsk, Pushka 7"},
    //     {brand: "IKEA", address: "Minsk, Pushka 7"},
    //     {brand: "IKEA", address: "Minsk, Pushka 7"},
    //     {brand: "IKEA", address: "Minsk, Pushka 7"},
    //     {brand: "IKEA", address: "Minsk, Pushka 7"},
    //     {brand: "IKEA", address: "Minsk, Pushka 7"},
    //     {brand: "IKEA", address: "Minsk, Pushka 7"}
    //   ]
  }

}
