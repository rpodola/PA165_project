package com.muni.fi.pa165project.service;

import java.util.Collection;
import java.util.List;

/**
 * @author Radim Podola
 */
public interface MappingService {

    <FROM, TO> List<TO> mapToList(Collection<FROM> fromList, final Class<TO> toClass);

    <T> T map(Object source, Class<T> destinationClass);
}