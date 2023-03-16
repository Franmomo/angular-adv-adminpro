import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {
  
  //! Lo movemos al servicio
    // public linkTheme = document.querySelector('#theme');
    public links!: NodeListOf<Element>;
  
  constructor( private servicesettings: SettingsService ) {}
  
  ngOnInit(): void {
    //! Aquí ya tenemos cargado el componente y el HTML, por lo tanto podemos disponer del DOM: 
    //! Lo movemos al servicio
      // this.links   = document.querySelectorAll('.selector');
    this.links = document.querySelectorAll('.selector');
    this.servicesettings.checkCurrentTheme( this.links );
  }
  
  changeTheme( theme: string) {
    //! Lo movemos al servicio
      // const url = `./assets/css/colors/${ theme }.css`;
      // this.linkTheme?.setAttribute('href', url);
      // localStorage.setItem('theme', url );
    this.servicesettings.changeTheme( theme, this.links );
  }
  

  /* //! Lo movemos al servicio
  checkCurrentTheme() {
    // const links = document.querySelectorAll('.selector');
    // console.log(this.links);

    this.links.forEach( link => {
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
  */
}
