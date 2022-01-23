import { Component, OnInit } from '@angular/core';
import { Member } from './member';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent implements OnInit {

  memberList : Member[] =[
    new Member("Bikas","Shah",9814301921,50000),
    new Member("Bishal","Shah",9814301921,50000),
    new Member("Bal Kumari","Bhandari",9814301921,50000),
    new Member("Priya","Shah",9814301921,50000),    
    new Member("Bivuti","Shah",9814301921,50000)  

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
