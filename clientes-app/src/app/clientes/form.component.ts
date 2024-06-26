import { Component } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { Router, ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent {

  public cliente: Cliente = new Cliente();
  public titulo:String = 'Crear cliente';
  
  constructor(private clienteService: ClienteService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarCliente();
    
  }

  public cargarCliente(): void{
    this.activatedRoute.params.subscribe(params =>{
        let id = params['id']
        if(id){
          this.clienteService.getCliente(id).subscribe( (cliente) => this.cliente = cliente)
        }
      })
  }
  public create(): void{
    this.clienteService.create(this.cliente).subscribe(
      cliente => {
      this.router.navigate(['/cliente']),
      swal.fire('Nuevo cliente',`Cliente ${cliente.nombre} creado con exito`,'success')
      });
  }
  public update(): void{
    this.clienteService.update(this.cliente).subscribe(
      cliente => {
      this.router.navigate(['/cliente']),
      swal.fire('Cliente actualizado',`Cliente ${cliente.nombre} actualizado con exito`,'success')
      });
  }
}
