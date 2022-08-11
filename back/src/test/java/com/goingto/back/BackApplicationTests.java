package com.goingto.back;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

// import java.util.List;

// import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
// import org.springframework.beans.factory.annotation.Autowired;;

import com.goingto.back.place.Place;
import com.goingto.back.place.PlaceRepository;

@SpringBootTest
class BackApplicationTests {

	// @Autowired
	// private PlaceRepository placeRepository;
	
	// @Test
	// void testJpa() {
	// 	List<Place> p= this.placeRepository.findBySeason("봄");
	// 	for (int i=0;i<p.size();i++){
	// 		System.out.println(p.get(i).getName());
	// 	}
	// 	Place p2 = this.placeRepository.findByNameAndBudget("베트남", 100);
	// }
	@Autowired
	private PlaceRepository placeRepository;
	
	@Test
	void testJpa() {
	
	}
}
