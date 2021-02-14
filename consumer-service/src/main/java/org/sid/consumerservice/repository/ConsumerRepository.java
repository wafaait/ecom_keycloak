package org.sid.consumerservice.repository;

import org.sid.consumerservice.entities.Costumer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource
@CrossOrigin
public interface ConsumerRepository extends JpaRepository<Costumer, Long> {
}
