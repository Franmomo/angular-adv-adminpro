import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

    private linkTheme = document.querySelector('#theme');
    
    constructor() {
      const url = localStorage.getItem('theme') || './assets/css/colors/purple-dark.css';
      this.linkTheme?.setAttribute('href', url);
    }

    changeTheme( theme: string, links: NodeListOf<Element> ) {
      const url = `./assets/css/colors/${ theme }.css`;
      this.linkTheme?.setAttribute('href', url);
      localStorage.setItem('theme', url );

      this.checkCurrentTheme( links );
    }

    checkCurrentTheme( links: NodeListOf<Element> ) {
      // const links = document.querySelectorAll('.selector');

      links.forEach( link => {
        //* borramos la clase working del elemento seleccionado: 
        link.classList.remove('working');
        //* seleccionamos el atributo del tema de ese link procesado: 
        const btnTheme = link.getAttribute('data-theme');
        //* creamos la url con el tema seleccionado del atributo anterior: 
        const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`;
        //* seleccionamos el atributo actual que tenemos cargado en el href: 
        const currentTheme = this.linkTheme?.getAttribute('href');

        if (btnThemeUrl === currentTheme) {
          link.classList.add('working');
        } 
      })
    }

}
