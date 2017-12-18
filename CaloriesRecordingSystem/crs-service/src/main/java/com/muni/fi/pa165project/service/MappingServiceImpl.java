package com.muni.fi.pa165project.service;

import org.dozer.DozerBeanMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

/**
 * @author Radoslav Karlik
 */
@Service
public class MappingServiceImpl implements MappingService {

    @Autowired
    private DozerBeanMapper mapper;

    public <FROM, TO> List<TO> mapToList(Collection<FROM> fromList, final Class<TO> toClass) {
        if (fromList == null)
            return null;
        return fromList
                .stream()
                .map(from -> this.mapper.map(from, toClass))
                .collect(Collectors.toList());
    }

    public <T> T map(Object source, Class<T> destinationClass) {
        return source == null ? null : this.mapper.map(source, destinationClass);
    }

    @Override
    public void map(Object source, Object destination) {
        this.mapper.map(source, destination);
    }
}
