package org.sid.billingservice.fiegn;

import org.sid.billingservice.models.Costumer;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "CUSTUMER-SERVICE")
public interface CustomerRestClient {
    @GetMapping(path = "/costumers/{id}")
    Costumer getCostumerById(@PathVariable(name = "id") Long id);

}
