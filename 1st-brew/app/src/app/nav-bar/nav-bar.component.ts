import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  items: MenuItem[] = [];
  ngOnInit() {
    this.items = [
      {
        label: 'Tavern',
        icon: PrimeIcons.ETHEREUM,
      },
      {
        label: 'Project Brews',
        icon: PrimeIcons.BOOK,
        items: [
          {
            label: 'GateMate Brew',
            icon: PrimeIcons.PLUS,
          },
          {
            label: 'View',
            icon: PrimeIcons.EYE,
          },
        ],
      },
    ];
  }
}
