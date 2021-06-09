package rva.ctrls;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import rva.jpa.Preduzece;
import rva.repository.PreduzeceRepository;

@CrossOrigin
@RestController
@Api(tags = {"Preduze�e CRUD operacije"})
public class PreduzeceRestController {
	
	@Autowired
	private PreduzeceRepository preduzeceRepository;
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@GetMapping("preduzece")
	@ApiOperation(value = "Vra�a kolekciju svih preduze�a iz baze podataka")
	public Collection<Preduzece> getPreduzeca() {
		return preduzeceRepository.findAll();
	}
	
	@GetMapping("preduzece/{id}")
	@ApiOperation(value = "Vra�a preduze�e iz baze podataka �ija vrednost ID-a odgovara prosle�enoj vrednosti ID-a")
	public Preduzece getPreduzece(@PathVariable("id") Integer id) {
		return preduzeceRepository.getOne(id);
	}
	
	@GetMapping("preduzeceNaziv/{naziv}")
	@ApiOperation(value = "Vra�a kolekciju svih artikala iz baze podataka koji u nazivu sadr�e string prosle�en kao Path Variabla")
	public Collection<Preduzece> getPreduzeceByNaziv(@PathVariable("naziv") String naziv) {
		return preduzeceRepository.findByNazivContainingIgnoreCase(naziv);
	}
	
	@PostMapping("preduzece")
	@ApiOperation(value = "Upisuje novo preduze�e u bazu podataka")
	public ResponseEntity<Preduzece> insertPreduzece(@RequestBody Preduzece preduzece) {
		if (!preduzeceRepository.existsById(preduzece.getId())) {
			preduzeceRepository.save(preduzece);
			return new ResponseEntity<Preduzece>(HttpStatus.OK);
		}
		return new ResponseEntity<Preduzece>(HttpStatus.CONFLICT);
	}
	
	@PutMapping("preduzece")
	@ApiOperation(value = "Modifikuje postoje�e preduze�e u bazi podataka")
	public ResponseEntity<Preduzece> updatePreduzeca(@RequestBody Preduzece preduzece) {
		if (!preduzeceRepository.existsById(preduzece.getId())) {
			return new ResponseEntity<Preduzece>(HttpStatus.NO_CONTENT);
		}
		preduzeceRepository.save(preduzece);
		return new ResponseEntity<Preduzece>(HttpStatus.OK);
	}
	
	@DeleteMapping("preduzece/{id}")
	@ApiOperation(value = "Bri�e preduze�e �iji se ID poklapa sa prosle�enim ID-em iz baze podataka")
	public ResponseEntity<Preduzece> deletePreduzece(@PathVariable Integer id) {
		if (!preduzeceRepository.existsById(id)) {
			return new ResponseEntity<Preduzece>(HttpStatus.NO_CONTENT);
		}
		
		jdbcTemplate.execute("delete from radnik sp "
                + "where sektor in (select id from sektor where preduzece="+id+")");
		jdbcTemplate.execute("DELETE FROM sektor where preduzece=" + id);
		
		
		preduzeceRepository.deleteById(id);
		// Used only in purpose of testing
		if (id == -100) {
			jdbcTemplate.execute(" INSERT INTO \"preduzece\"(\"id\", \"naziv\", \"pib\", \"sediste\", \"opis\") "
					+ "VALUES(-100, 'Faculty of Technical Sciences', 45645, 'Trg Dositeja Obradovica 4, Novi Sad', 'An educational facility')");
		}
		return new ResponseEntity<Preduzece>(HttpStatus.OK);
	}
}
