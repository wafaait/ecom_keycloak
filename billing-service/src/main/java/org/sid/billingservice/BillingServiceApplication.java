package org.sid.billingservice;

import org.sid.billingservice.entities.Bill;
import org.sid.billingservice.entities.ProductItem;
import org.sid.billingservice.fiegn.CustomerRestClient;
import org.sid.billingservice.fiegn.ProductItemRestClient;
import org.sid.billingservice.models.Costumer;
import org.sid.billingservice.models.Product;
import org.sid.billingservice.repositories.BillRepository;
import org.sid.billingservice.repositories.ProductItemRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;
import org.springframework.hateoas.PagedModel;

import java.util.Collection;
import java.util.Date;
import java.util.Random;

@SpringBootApplication
@EnableFeignClients
public class BillingServiceApplication {

    public static void main(String[] args) {

        SpringApplication.run(BillingServiceApplication.class, args);
    }

    @Bean
    CommandLineRunner start(BillRepository billRepository,
                            ProductItemRepository productItemRepository,
                            CustomerRestClient customererRestClient,
                            ProductItemRestClient productItemRestClient) {
        return args -> {

            Costumer costumer = customererRestClient.getCostumerById(1L);
            System.out.println("--------------------------");
            System.out.println(costumer.getId());
            System.out.println(costumer.getName());
            System.out.println(costumer.getEmail());

            Bill bill1 = billRepository.save(new Bill(null, new Date(), null, costumer.getId(), null));
            PagedModel<Product> productPagedModel = productItemRestClient.pageProducts();
            productPagedModel.forEach(p -> {
                ProductItem productItem = new ProductItem();
                productItem.setPrice(p.getPrice());
                productItem.setQuantity(1 + new Random().nextInt(100));
                productItem.setBill(bill1);
                productItem.setProductID(p.getId());
                productItemRepository.save(productItem);
            });
        };
    }


}
