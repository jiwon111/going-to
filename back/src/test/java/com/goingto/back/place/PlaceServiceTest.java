package com.goingto.back.place;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.junit.jupiter.api.Test;

public class PlaceServiceTest {
    @Autowired
	private PlaceRepository placeRepository;
	
	@Test
	void testJpa() {
		List<Place> p= this.placeRepository.findBySeason("봄");
		for (int i=0;i<p.size();i++){
			System.out.println(p.get(i).getName());
		}
		// Place p2 = this.placeRepository.findByNameAndBudget("베트남", 100);
	}
}
