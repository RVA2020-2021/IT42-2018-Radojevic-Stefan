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

import rva.jpa.Radnik;
import rva.jpa.Sektor;
import rva.repository.RadnikRepository;
import rva.repository.SektorRepository;

@RestController
public class RadnikRestController {
	
	@Autowired
	private RadnikRepository radnikRepository;
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Autowired
	private SektorRepository sektorRepository;
	
	
	@GetMapping("radnik")
	public Collection<Radnik> getRadnike() {
		return radnikRepository.findAll();
	}
	
	@GetMapping("radnik/{id}")
	public Radnik getRadnik(@PathVariable("id") Integer id) {
		return radnikRepository.getOne(id);
	}
	
	@GetMapping("radnikIme/{ime}")
	public Collection<Radnik> getRadnikByIme(@PathVariable("ime") String ime) {
		return radnikRepository.findByImeContainingIgnoreCase(ime);
	}
	
	@GetMapping("radniciSektora/{id}")
	public Collection<Radnik> getRadnikeSektora(@PathVariable("id") Integer id) {
		Sektor s = sektorRepository.getOne(id);
		return radnikRepository.findBySektor(s);
	}
	
	@PostMapping("radnik")
	public ResponseEntity<Radnik> insertRadnik(@RequestBody Radnik radnik) {
		if (!radnikRepository.existsById(radnik.getId())) {
			radnikRepository.save(radnik);
			return new ResponseEntity<Radnik>(HttpStatus.OK);
		}
		return new ResponseEntity<Radnik>(HttpStatus.CONFLICT);
	}

	@PutMapping("radnik")
	public ResponseEntity<Radnik> updateRadnik(@RequestBody Radnik radnik) {
		if (!radnikRepository.existsById(radnik.getId())) {
			return new ResponseEntity<Radnik>(HttpStatus.NO_CONTENT);
		}
		radnikRepository.save(radnik);
		return new ResponseEntity<Radnik>(HttpStatus.OK);
	}
	
	//@Transactional
	@DeleteMapping("radnik/{id}")
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
