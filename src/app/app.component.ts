import { Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet, Event } from '@angular/router';
import { NgxSonnerToaster } from 'ngx-sonner';

import { initFlowbite } from 'flowbite';
import { IStaticMethods } from 'preline/preline';

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxSonnerToaster],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private _router = inject(Router);

  ngOnInit() {
    this.initFlowbite();
    this.initPreline();
  }

  private initFlowbite() {
    initFlowbite();
  }

  private initPreline() {
    this._router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          if (window.HSStaticMethods && typeof window.HSStaticMethods.autoInit === 'function') {
            window.HSStaticMethods.autoInit();
          } else {
            console.error('HSStaticMethods o autoInit no están disponibles.');
          }
        }, 100);
      }
    });
  }
}
