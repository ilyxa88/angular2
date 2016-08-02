import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'quileo-detail',
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.css'],
  directives: [ROUTER_DIRECTIVES]
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
