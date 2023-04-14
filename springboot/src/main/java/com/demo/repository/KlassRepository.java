package com.demo.repository;

import com.demo.entity.Klass;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface KlassRepository extends CrudRepository<Klass, Long> {

    List<Klass> findAllByNameContains(String name);
}
