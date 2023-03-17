import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo: string = '';
  public tituloSubs$: Subscription;

  constructor( private router: Router ) {
    this.tituloSubs$ = this.getArgumentosRuta()
                        .subscribe( ({ titulo }) => {
                          // this.titulo = data;
                          this.titulo = titulo;
                          console.log(this.titulo);
                          document.title = `AdminPro - ${titulo}`;
                        });
  }

  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  getArgumentosRuta() {
     return this.router.events
    .pipe(
      filter( (evento): evento is ActivationEnd => evento instanceof ActivationEnd ),
      filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null ),
      // map( (evento: ActivationEnd) => evento.snapshot.data['titulo'] ),
      map( (evento: ActivationEnd) => evento.snapshot.data ),
    )
    // .subscribe( data => {
/*
    .subscribe( ({ titulo }) => {
      // this.titulo = data;
      this.titulo = titulo;
      console.log(this.titulo);
      document.title = `AdminPro - ${titulo}`;
    });
*/    
  }

}
