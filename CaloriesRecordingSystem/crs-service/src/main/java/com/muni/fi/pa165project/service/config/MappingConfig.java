package com.muni.fi.pa165project.service.config;

import com.muni.fi.pa165project.dto.RecordDTO;
import com.muni.fi.pa165project.dto.RecordDetailDTO;
import com.muni.fi.pa165project.dto.UserDTO;
import com.muni.fi.pa165project.entity.Record;
import com.muni.fi.pa165project.entity.User;
import java.util.Collections;
import org.dozer.DozerBeanMapper;
import org.dozer.loader.api.BeanMappingBuilder;
import org.dozer.loader.api.TypeMappingOptions;
import org.springframework.context.annotation.*;

/**
 *
 * @author Radoslav Karlik
 */
@Configuration
@ComponentScans(value = {@ComponentScan("com.muni.fi.pa165project.service") })
public class MappingConfig {

   @Bean
   public DozerBeanMapper dozerBeanMapper() {
	   DozerBeanMapper mapper = new DozerBeanMapper();
	   mapper.addMapping(mappingConfiguration());
	   //fix for Dozer issues with JDK8 Time
	   mapper.setMappingFiles(Collections.singletonList("dozerJdk8Converters.xml"));
	   return mapper;
   }

	private BeanMappingBuilder mappingConfiguration() {
		BeanMappingBuilder builder = new BeanMappingBuilder() {
			@Override
			protected void configure() {
				mapping(Record.class, RecordDTO.class,
                        TypeMappingOptions.oneWay())
                        .fields("activity.name", "activityName")
                        .fields("activity.id", "activityId")
                        .fields("user.id", "userId");
                mapping(Record.class, RecordDetailDTO.class,
                        TypeMappingOptions.oneWay())
                        .fields("activity.name", "activityName")
                        .fields("activity.id", "activityId")
                        .fields("user.id", "userId");
                mapping(User.class, UserDTO.class)
                    .fields("loginDetails.username", "username")
                    .fields("loginDetails.password", "password")
                    .fields("loginDetails.email", "email");
			}
		};

		return builder;
	}
}