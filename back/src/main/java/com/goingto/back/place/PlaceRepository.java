package com.goingto.back.place;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PlaceRepository extends JpaRepository<Place, Integer>{
    List<Place> findByBudget(Integer budget);
    Place findByImg(String img);
    List<Place> findByIsDomestic(Boolean isDomestic);
    Place findByName(String name);
    List<Place> findByPrefer(String prefer);
    List<Place> findByScenery(String scenery);
    List<Place> findBySeason(String season);

    Place findByNameAndBudget(String name, Integer budget);
}