package com.telran.phonebookapi.dto.address;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
public class AddressToEditDto {
    public long id;
    public String country;
    public String city;
    public String address;
    public String index;
    public boolean isFavorite;
}
