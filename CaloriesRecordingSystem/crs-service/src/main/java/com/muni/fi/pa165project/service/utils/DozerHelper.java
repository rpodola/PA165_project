package com.muni.fi.pa165project.service.utils;

import org.dozer.DozerBeanMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

/**
 *
 * @author Radoslav Karlik
 */
@Component
public class DozerHelper {
	
    @Autowired
	private DozerBeanMapper mapper;

	public <FROM, TO> List<TO> mapToList(Collection<FROM> fromList, final Class<TO> toClass) {
		return fromList
				.stream()
				.map(from -> this.mapper.map(from, toClass))
				.collect(Collectors.toList());
	}
	
	public <T> T map(Object source, Class<T> destinationClass) {
		return this.mapper.map(source, destinationClass);
	}
	
}
