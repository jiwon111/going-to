package com.goingto.back.place.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.goingto.back.place.Place;
import com.goingto.back.place.PlaceRepository;
import com.goingto.back.place.dto.PlaceResDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PlaceService {
    private final PlaceRepository placeRepository;
    
    public List<PlaceResDto> getPlaces() {
        List<Place> placeList = placeRepository.findAll();
        List<PlaceResDto> placeResDtos = placeList.stream()
                .map(o -> PlaceResDto.ofList(o))
                .collect(Collectors.toList());
        return placeResDtos;
    }
}
