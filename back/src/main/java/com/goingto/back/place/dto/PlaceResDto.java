package com.goingto.back.place.dto;

import com.goingto.back.place.Place;

import lombok.Builder;
import lombok.Getter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@Getter
@Builder
@ApiModel
public class PlaceResDto {
    @ApiModelProperty(name = "여행지 아이디")
    private Integer id;
    @ApiModelProperty(name = "여행지 이름")
    private String name;
    @ApiModelProperty(name = "1인당 예산")
    private Integer budget;
    @ApiModelProperty(name = "선호하는 활동")
    private String prefer;
    @ApiModelProperty(name = "좋아하는 풍경")
    private String scenery;
    @ApiModelProperty(name = "국내/해외")
    private boolean isDomestic;
    @ApiModelProperty(name = "추천하는 계절")
    private String season;
    @ApiModelProperty(name = "이미지 경로")
    private String img;

    public static PlaceResDto ofList(Place place){
        return PlaceResDto.builder()
        .id(place.getId())
        .name(place.getName())
        .budget(place.getBudget())
        .prefer(place.getPrefer())
        .scenery(place.getScenery())
        .isDomestic(place.getIsDomestic())
        .season(place.getSeason())
        .img(place.getImg())
        .build();
    }
}
