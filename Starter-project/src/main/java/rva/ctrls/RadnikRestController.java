package rva.ctrls;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import rva.jpa.Radnik;
import rva.jpa.Sektor;
import rva.repository.RadnikRepository;
import rva.repository.SektorRepository;

@RestController
@Api(tags = {"Radnik CRUD operacije"})
public class RadnikRestController {
	
	@Autowired
	private RadnikRepository radnikRepository;
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Autowired
	private SektorRepository sektorRepository;
	
	
	@GetMapping("radnik")
	@ApiOperation(value = "Vraæa kolekciju svih radnika iz baze podataka")
	public Collection<Radnik> getRadnike() {
		return radnikRepository.findAll();
	}
	
	@GetMapping("radnik/{id}")
	@ApiOperation(value = "Vraæa radnika iz baze podataka èija se vrednost ID-a poklapa sa prosleðenom vrednošæu ID-a")
	public Radnik getRadnik(@PathVariable("id") Integer id) {
		return radnikRepository.getOne(id);
	}
	
	@GetMapping("radnikIme/{ime}")
	@ApiOperation(value = "Vraæa kolekciju svih radnika iz baze podataka koji u imenu sadrže prosleðeni string")
	public Collection<Radnik> getRadnikByIme(@PathVariable("ime") String ime) {
		return radnikRepository.findByImeContainingIgnoreCase(ime);
	}
	
	@GetMapping("radniciSektora/{id}")
	@ApiOperation(value = "Vraæa kolekciju svih radnika iz baze podataka èiji se ID sektora poklapa sa prosleðenim ID-em sektora")
	public Collection<Radnik> getRadnikeSektora(@PathVariable("id") Integer id) {
		Sektor s = sektorRepository.getOne(id);
		return radnikRepository.findBySektor(s);
	}
	
	@PostMapping("radnik")
	@ApiOperation(value = "Upisuje radnika u bazu podataka")
	public ResponseEntity<Radnik> insertRadnik(@RequestBody Radnik radnik) {
		if (!radnikRepository.existsById(radnik.getId())) {
			radnikRepository.save(radnik);
			return new ResponseEntity<Radnik>(HttpStatus.OK);
		}
		return new ResponseEntity<Radnik>(HttpStatus.CONFLICT);
	}

	@PutMapping("radnik")
	@ApiOperation(value = "Modifikuje podatke o radniku u bazi podataka")
	public ResponseEntity<Radnik> updateRadnik(@RequestBody Radnik radnik) {
		if (!radnikRepository.existsById(radnik.getId())) {
			return new ResponseEntity<Radnik>(HttpStatus.NO_CONTENT);
		}
		radnikRepository.save(radnik);
		return new ResponseEntity<Radnik>(HttpStatus.OK);
	}
	
	//@Transactional
	@DeleteMapping("radnik/{id}")
	@ApiOperation(value = "Briše radnika èija se vrednost ID-a poklapa sa prosleðenom vrednošæu ID-a iz baze podataka")
	public ResponseEntity<Radnik> deleteRadnik(@PathVariable Integer id) {
		if (!radnikRepository.existsById(id)) {
			return new ResponseEntity<Radnik>(HttpStatus.NO_CONTENT);
		}
		
		//jdbcTemplate.execute("DELETE FROM sektor where =" + id);
		radnikRepository.deleteById(id);
		
		// Used only in purpose of testing
		if (id == -100) {
			jdbcTemplate.execute("INSERT INTO \"radnik\"(\"id\", \"ime\", \"prezime\", \"broj_lk\", \"obrazovanje\", \"sektor\") "
					+ "VALUES(-100, 'Milan', 'Milanovic', 85225845, -100, -100);");
		}
		return new ResponseEntity<Radnik>(HttpStatus.OK);
	}
}
