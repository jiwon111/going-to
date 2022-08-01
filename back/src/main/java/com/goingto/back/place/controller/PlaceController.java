package com.goingto.back.place.controller;

import com.goingto.back.place.dto.PlaceResDto;
import com.goingto.back.place.service.PlaceService;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/place")
@Api(tags={"GoingTo API Test"})
public class PlaceController {
    
    private final PlaceService placeService;

    @GetMapping("")
    @ApiOperation(value="여행지 조회", notes="여행지 조회 API")
    public List<PlaceResDto> result() {
        return placeService.getPlaces();
    }
}
