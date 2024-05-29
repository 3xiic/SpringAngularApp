package co.edu.unbosque.springboot.backend.apirest.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import co.edu.unbosque.springboot.backend.apirest.model.Cliente;
import co.edu.unbosque.springboot.backend.apirest.service.ClienteService;


@RestController
@RequestMapping(value = "/cliente")
@Transactional
@CrossOrigin(origins = "*")
public class ClienteController {

	@Autowired
	ClienteService clienteService;

	@GetMapping("/getAll")
	public ResponseEntity<List<Cliente>> showAll(){
		List<Cliente> aux = clienteService.getAll();
		if(aux.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
		}
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(aux);
	}
	@GetMapping("/{id}")
	public Cliente show(@PathVariable Long id) {
		return clienteService.findById(id);
	}
	@PostMapping("/crear")
	@ResponseStatus(HttpStatus.CREATED)
	public Cliente crear(@RequestBody Cliente cliente) {
		return clienteService.crear(cliente);
	}
	@PutMapping("/actualizar/{id}")
	@ResponseStatus(HttpStatus.CREATED)
	public Cliente actualizar(@RequestBody Cliente cliente, @PathVariable Long id) {
		Cliente clienteActual = clienteService.findById(id);
		clienteActual.setApellido(cliente.getApellido());
		clienteActual.setNombre(cliente.getNombre());
		clienteActual.setEmail(cliente.getEmail());

		return clienteService.crear(clienteActual);
	}

	@DeleteMapping("/eliminarCliente/{id}")
	@ResponseStatus(HttpStatus.CREATED)
	public void eliminar(@PathVariable Long id) {
		clienteService.delete(id);
	}

}
