import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  miFormulario: FormGroup;

  constructor(private fb: FormBuilder, private afDB: AngularFirestore) {
    this.miFormulario = this.fb.group({
      cedula: ['', Validators.required],
      placa: ['', Validators.required],
      motivo: ['', Validators.required],
      comentario: [''],
      latitud: [''],
      longitud: [''],
      fechaHora: [''],
      codigo: [''],
    });
  }

  registrarMulta() {
    // Obtén la fecha y hora actual
    const fechaHoraActual = new Date().toISOString();

    // Genera un código único (puedes personalizar según tus necesidades)
    const codigoUnico = Math.random().toString(36).substring(7);

    this.miFormulario.patchValue({
      fechaHora: fechaHoraActual,
      codigo: codigoUnico,
    });

    for (let index = 0; index < length; index++) {
      const element = index;
      (this.miFormulario.value);
    }

    // Limpia el formulario después de registrar la multa
    this.miFormulario.reset();
  }
}