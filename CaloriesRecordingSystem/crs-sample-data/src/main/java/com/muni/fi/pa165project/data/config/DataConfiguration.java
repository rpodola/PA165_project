package com.muni.fi.pa165project.data.config;

import com.muni.fi.pa165project.data.SampleDataLoader;
import com.muni.fi.pa165project.service.config.ServiceConfiguration;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

import javax.annotation.PostConstruct;
import java.io.IOException;

/**
 * Takes ServiceConfiguration and adds the SampleDataLoader bean.
 *
 * @author Radim Podola
 */
@Configuration
@Import(ServiceConfiguration.class)
@ComponentScan(basePackageClasses = {SampleDataLoader.class})
public class DataConfiguration {

    final static Logger log = LoggerFactory.getLogger(DataConfiguration.class);

    @Autowired
    SampleDataLoader sampleDataLoader;

    @PostConstruct
    public void dataLoading() throws IOException {
        log.debug("dataLoading()");
        sampleDataLoader.loadData();
    }
}