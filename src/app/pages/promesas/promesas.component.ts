import { Component, OnInit } from '@angular/core';
import { resolve } from 'chart.js/dist/helpers/helpers.options';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios().then( usuarios => {
      console.log(usuarios);
    });

    //! Promesas utilizadas en vanilla Javascript:
    /*
    const promesa = new Promise( ( resolve, reject ) => {

      if (false) {
        resolve('Hola mundo');
      } else {
        reject('Error !!!');
      }
    });

    // promesa.then( ( value ) => {
    //   console.log({value});
    // }, (err) =>{
    //   console.log('err1', {err});
    // });

    promesa.then( ( value ) => {
      console.log({value});
    }).catch( ( err ) => {
      console.log('err2', {err});
    });
  */
  }
  
  
  //! Método utilizado en Angular para obtener infor de una API:
  getUsuarios() {

    // const promesa = new Promise( resolve => {
    return new Promise( resolve => {
      
      //* Promise<Response> => retorna una promesa que resuelve algo de tipo <Response>
      fetch('https://reqres.in/api/users')
        // .then( resp => {
        //   console.log( resp );
        //   resp.json().then( body => console.log(body))
  
        // });
        .then( resp => resp.json() )
        .then( body => resolve( body.data ));
    });

    // return promesa;
  }

}
