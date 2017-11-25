package com.muni.fi.pa165project.service.utils;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
import org.dozer.DozerBeanMapper;
import org.springframework.stereotype.Component;

/**
 *
 * @author Radoslav Karlik
 */
@Component
public class DozerHelper {
	
	private DozerBeanMapper mapper = new DozerBeanMapper();
	
	public DozerHelper(){
	  //fix for Dozer issues with JDK8 Time
	  mapper.setMappingFiles(Collections.singletonList("dozerJdk8Converters.xml"));	  
	}
	
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
