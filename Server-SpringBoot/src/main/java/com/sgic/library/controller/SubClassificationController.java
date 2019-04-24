package com.sgic.library.controller;

import javax.validation.Valid;

import com.sgic.library.entities.MainClassification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sgic.library.entities.SubClassification;
import com.sgic.library.services.SubClassificationService;

import java.util.List;

@RestController
public class SubClassificationController {

    @Autowired
    SubClassificationService sbclService;

    @PostMapping("/savesbcl")
    public HttpStatus createSBCL(@Valid @RequestBody SubClassification sbcl) {
        sbclService.saveSbcl(sbcl);
        return HttpStatus.CREATED;

    }

    @GetMapping("/findAllSub")
    public List<SubClassification> findAll() {
        return sbclService.getAllSub();
    }
}
