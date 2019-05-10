import { Component } from '@angular/core';
import { Empleado} from './modelos/empleado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  empleadoArray: Empleado[] = [
   {id: 1, nombre: 'Luis', pais: 'Peru'},
   {id: 2, nombre: 'Jose', pais: 'Chile'},
   {id: 3, nombre: 'Chicho', pais: 'Brasil'}
  ];

  seleccionarEmpleado: Empleado = new Empleado();
  OpenForEdit(empleado: Empleado){
    this.seleccionarEmpleado = empleado;
  }

  addOrEdit(){
    if(this.seleccionarEmpleado.id === 0){
    this.seleccionarEmpleado.id = this.empleadoArray.length + 1;
    this.empleadoArray.push(this.seleccionarEmpleado);
    }

    this.seleccionarEmpleado = new Empleado();
  }
  delete() {
    if(confirm('Estas seguro de eliminarlo')){
      this.empleadoArray = this.empleadoArray.filter(x => x !== this.seleccionarEmpleado);
      this.seleccionarEmpleado = new Empleado();
    }
  }

}
