package com.goingto.back.place;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Place {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private String name;

    @Column
    private Boolean isDomestic;

    @Column
    private String season;

    @Column
    private String prefer;

    @Column
    private String scenery;

    @Column
    private Integer budget;

    @Column(columnDefinition = "TEXT")
    private String img;
}
