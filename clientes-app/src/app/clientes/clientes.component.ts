import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent  implements OnInit {

    clientes!: Cliente[];

    constructor (private clienteService: ClienteService) { }

    ngOnInit() {
      this.clienteService.getClientes().subscribe(
        clientes => this.clientes = clientes);
    }

    public delete(cliente: Cliente): void{
      Swal.fire({
        title: 'Esta seguro?',
        text: `¿Seguro que desea eliminar este cliente ${cliente.nombre} ${cliente.apellido}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar!'
      }).then((result) => {
        if (result.isConfirmed) {

          this.clienteService.delete(cliente.id).subscribe( response => {
            this.clientes = this.clientes.filter(cli => cli !== cliente)
          })
          Swal.fire({
            title: "Eliminado!",
            text: `Cliente ${cliente.nombre} elimnado con exito`,
            icon: "success"
          });
        }
      });
    }
}
