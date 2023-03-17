import { Component, OnDestroy } from '@angular/core';
import { interval, Observable, retry, take, map, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs: Subscription;

  constructor() {
  
    //! Opción antigua ya depreciada!!
    // obs$.subscribe(
    //   valor => console.log('Subs:', valor),
    //   error => console.warn('Error:', error),
    //   () => console.info('Obs terminado'), 
    // );

    //! Pipe => nos permite encadenar operadores para transformar la información del observable:    
  /*
    this.retornaObservable().pipe(
      retry(2)
    ).subscribe({
      next: (valor)  => console.log('Subs:', valor),
      error: (error) => console.warn('Error:', error),
      complete: ()   => console.info('Obs terminado'), 
    }
    );
  */  

    this.intervalSubs = this.retornaIntervalo()
      .subscribe( console.log
        // (valor)  => console.log('Subs:', valor)
        // {next: (valor)  => console.log('Subs:', valor)}
      )

  }
  
  //! Cuando destruimos este componente tenemos que asegurar que hemos realizado los 'unsubscribe' de todos
  //! los posibles Observables implementados en este componente que no paran de emitir valores:  
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaIntervalo(): Observable<number> {
    // const interval$ = interval(1000)
    return interval(100)
            .pipe(
              // take(10),
              //! map => nos sirve para transformar la info que recibe el Observable y modificarla:
              map( valor => ++valor),
              filter( valor => valor % 2 === 0),
              //! se utiliza para indicar cuantas emisiones del Observable se necesitan y una vez 
              //! realizadas se completa el Observable:
              // {
                // console.log('valor', valor);
                // return ++valor;
                // return 'Hola Mundo ' + ++valor;
              // })
            );

    // return interval$;
  }


  retornaObservable(): Observable<number> {
    let i = -1;

    // const obs$ = new Observable<number>( observer => {
    return new Observable<number>( observer => {

      // let i = -1;

      const intervalo = setInterval( () => {

        // console.log('tick');
        i ++;
        observer.next(i);

        if (i === 4) {
          clearInterval( intervalo );
          observer.complete();
        }

        if (i === 2) {
          // i = 0;
          observer.error('i llegó al valor de 2');
        }
      }, 1000 )

    });
    // return obs$;
  }

}
