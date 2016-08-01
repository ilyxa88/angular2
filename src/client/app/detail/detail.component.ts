import { Component, OnInit } from '@angular/core';


/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'quileo-detail',
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.css']
})
export class DetailComponent implements OnInit {


  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor() {}

  /**
   * Get the names OnInit
   */
  ngOnInit() {

  }


}
