package org.sid.kafkafacturation;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor @NoArgsConstructor
public class Facture {
  private String code;
  private String clientName;
  private double amount;
}
