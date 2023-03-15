import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {
  
  ngOnInit() {
    //! Esto solo se ejecutará 1 vez cuando se emplementa este ciclo de vida: 
    this.btnClass = `btn ${ this.btnClass }`;
  }
  
  // @Input('valor') progreso: number = 25;
  @Input('valorInput')  progreso: number = 25;
  @Input() btnClass: string = 'btn-primary';

  @Output('valorOutput') valorSalida: EventEmitter<number> = new EventEmitter();

  //* Getter para regresar el valor de la propiedad actualizada:
  // public get getPorcentaje() : string {
  //   return `${this.progreso}%`;
  // }

  cambiarValor( valor: number ) {

    if (this.progreso >= 100 && valor >= 0) {
      this.valorSalida.emit(100);
      this.progreso = 100;
    }

    if (this.progreso <= 0 && valor < 0) {
      this.valorSalida.emit(0);
      this.progreso = 0;
    }

    this.progreso = this.progreso + valor;
    this.valorSalida.emit( this.progreso);
  }

  onChangeInput( nuevoValor: number ) {
    // console.log(valor);
    ( nuevoValor >= 100 ) 
    ? this.progreso = 100
    : ( nuevoValor <= 0 )
      ? this.progreso = 0
      : this.progreso = nuevoValor;
      
    this.valorSalida.emit(this.progreso); 

    // if ( nuevoValor >= 100 ) {
    //   this.progreso = 100;
    // }
    //   else if ( nuevoValor <= 0 ) {
    //     this.progreso = 0;
    // } else {
    //     this.progreso = nuevoValor;
    // }
    // this.valorSalida.emit(this.progreso); 
  }

}
