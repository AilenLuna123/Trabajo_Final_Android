import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-consulta-multa',
  templateUrl: './consulta-multa.component.html',
  styleUrls: ['./consulta-multa.component.scss'],
})
export class ConsultaMultaComponent {
  multas: any[] = [];
  multaSeleccionada: any;

  constructor(private afDB: AngularFirestore) {
    // Obtiene la lista de multas al inicializar el componente
    this.afDB.list('multas').valueChanges().subscribe((multas: any[]) => {
      this.multas = multas;
    });
  }

  verDetalle(multa: any) {
    // Al hacer clic en una multa, muestra los detalles
    this.multaSeleccionada = multa;
  }
}