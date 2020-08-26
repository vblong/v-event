import { Component, OnInit } from '@angular/core';
import { Event } from '../../core/Event';
import { User } from '../../core/User';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  shadeEvent: Event;
  weekdays: any = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];
  constructor() {
    this.shadeEvent = new Event();
    this.shadeEvent.name = "Shaiya Shade Events";
    this.shadeEvent.description = "Weekly events on Shaiya Shade server";
    this.shadeEvent.baseEvents = [
      {
        id: "1",
        name: "",
        description: "PvP",
        status: "On",
        note: "Sitter arranged",
        date: new Date("2020-08-25"),
        location: "DD1",
        duration: 7200
      },
      {
        id: "2",
        name: "",
        description: "MM",
        status: "On",
        note: "Sitter arranged",
        date: new Date("2020-08-26"),
        location: "Jungle",
        duration: 7200
      },
      {
        id: "3",
        name: "CTI",
        description: "PvE",
        status: "On",
        note: "Sitter arranged",
        date: new Date("2020-08-27"),
        location: "CT",
        duration: 3600*4
      }
    ];
    this.shadeEvent.creator = new User();
    this.shadeEvent.creator = {
      id: "#",
      name: "vblong"
    }
  }

  ngOnInit(): void {
  }

}
