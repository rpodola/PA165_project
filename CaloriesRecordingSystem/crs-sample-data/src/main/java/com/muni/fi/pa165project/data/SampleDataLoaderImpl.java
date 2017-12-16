package com.muni.fi.pa165project.data;

import com.muni.fi.pa165project.dto.ActivityDTO;
import com.muni.fi.pa165project.enums.Category;
import com.muni.fi.pa165project.facade.ActivityFacade;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

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
    public void loadData() {
        log.debug("loadData() start");

        loadActivities();
    }

    private void loadActivities() {
        createActivity("ads", "ss", Category.EXERCISE);
    }

    private void createActivity(String name, String description, Category category){
        ActivityDTO a = new ActivityDTO();
        a.setName(name);
        a.setDescription(description);
        a.setCategory(category.getId());
        acFacade.createActivity(a);
    }
}
