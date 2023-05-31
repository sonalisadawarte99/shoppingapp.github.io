import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  showsidebar : boolean = false ;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goHome(): void {
    this.router.navigate(['']);
  }

  goToTrash(): void {
    this.router.navigate(['/trash']);
  }
}
