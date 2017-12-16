package com.muni.fi.pa165project.service.config;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import org.dozer.CustomConverter;

/**
 *
 * @author Radoslav Karlik
 */
public class LocalDateConverter implements CustomConverter {

    @Override
    public Object convert(Object o, Object o1, Class<?> type, Class<?> type1) {
        if (type.equals(LocalDate.class) && type1.equals(String.class)) {
            return LocalDate.parse((String)o1, DateTimeFormatter.ofPattern("dd-MM-yyyy"));
        }
        
        return null;
    }
    
}
