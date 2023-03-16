import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Principal',
      icono : 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Main', url: '/'},
        { titulo: 'ProgressBar', url: 'progress'},
        { titulo: 'Gráficas', url: 'grafica1'},
        // { titulo: 'ProgressBar', url: '/dashboard/progress'},
        // { titulo: 'Gráficas', url: '/dashboard/grafica1'},
      ]
    }
  ];

  constructor() { }
}
