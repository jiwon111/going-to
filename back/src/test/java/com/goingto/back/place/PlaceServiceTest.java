package com.goingto.back.place;

import org.springframework.beans.factory.annotation.Autowired;
import org.junit.jupiter.api.Test;

public class PlaceServiceTest {
    @Autowired
	private PlaceRepository placeRepository;
	
	@Test
	void testJpa() {
		Place p = new Place();
        p.setImg("Images/Canada.jpg");
		p.setBudget(300);
		p.setIsDomestic(false);
		p.setName("캐나다");
		p.setPrefer("문화탐방");
		p.setSeason("가을");
		this.placeRepository.save(p);
	}
}
