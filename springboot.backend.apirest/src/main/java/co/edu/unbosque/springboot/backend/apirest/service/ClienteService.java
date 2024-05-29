package co.edu.unbosque.springboot.backend.apirest.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.edu.unbosque.springboot.backend.apirest.model.Cliente;
import co.edu.unbosque.springboot.backend.apirest.repository.ClienteRepository;
import jakarta.transaction.Transactional;


@Service
public class ClienteService {

	@Autowired
	ClienteRepository clienteRepository;
	
	
	public List<Cliente> getAll(){
		return clienteRepository.findAll();
	}
	public Cliente findById(Long id) {
		return clienteRepository.findById(id).orElse(null);
	}
	@Transactional
	public Cliente crear(Cliente cliente) {
		return clienteRepository.save(cliente);
	}
	
	public void delete(Long id) {
		clienteRepository.deleteById(id);
	}
}
