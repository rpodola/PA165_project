package com.muni.fi.pa165project.data;

import com.muni.fi.pa165project.facade.ActivityFacade;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.io.File;
import java.io.IOException;

/**
 * Loads some sample data to populate the CRS database.
 *
 * @author Radim Podola
 */
@Component
@Transactional
public class SampleDataLoaderImpl implements SampleDataLoader {

    final static Logger log = LoggerFactory.getLogger(SampleDataLoaderImpl.class);

    @Autowired
    ActivityFacade acFacade;

    @Override
    @SuppressWarnings("unused")
    public void loadData(){
        log.debug("loadData() start");

        File projectDir = new File(System.getProperty("user.dir")).getParentFile().getParentFile();
        File dataFile = new File(projectDir,"data/activities");

        try{
            acFacade.importActivitiesData(dataFile);
        }catch (IOException e){
            log.error("Import data failed on file <{}>", dataFile.toString());
        }
    }
}
