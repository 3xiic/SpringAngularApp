package co.edu.unbosque.springboot.backend.apirest.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import co.edu.unbosque.springboot.backend.apirest.model.Cliente;


public interface ClienteRepository extends CrudRepository<Cliente, Long>{
	public List<Cliente> findAll();
	public Optional<Cliente> findById(Long id);
	public Cliente save (Cliente cliente);
	public void deleteById (Long id);
}
