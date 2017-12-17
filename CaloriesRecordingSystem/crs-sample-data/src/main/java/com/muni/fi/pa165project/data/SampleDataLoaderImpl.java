package com.muni.fi.pa165project.data;

import com.muni.fi.pa165project.dto.ActivityDTO;
import com.muni.fi.pa165project.dto.BurnedCaloriesDTO;
import com.muni.fi.pa165project.dto.UserDetailDTO;
import com.muni.fi.pa165project.dto.UserRegisterDTO;
import com.muni.fi.pa165project.entity.User;
import com.muni.fi.pa165project.enums.Category;
import com.muni.fi.pa165project.facade.ActivityFacade;
import com.muni.fi.pa165project.facade.UserFacade;
import com.muni.fi.pa165project.service.UserService;
import com.muni.fi.pa165project.structures.LoginDetails;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.core.Local;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

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

    @Autowired
    UserFacade userFacade;

    @Autowired
    UserService userService;

    @Override
    @SuppressWarnings("unused")
    public void loadData() {
        log.debug("loadData() start");

        loadActivities();
        loadUsers();
    }

    private void loadUsers(){
        //lets create administrator
        createAdmin("Adam Mokrý", true, "17-12-1997", 172, 60, true,
                "admin", "admin", "admin@fi.muni.cz");
        //lets create some members
        createUser("Radim Novák", true,"25-06-1991", 171, 70, false,
                "rnovak", "12345", "rnovak@fi.muni.cz");
        createUser("Martina Tlustá", false, "11-02-2001", 189, 96, false,
                "mtlusta", "12345", "mtlusta@fi.muni.cz");
    }

    private void createUser(String name, boolean male, String date, int height, int weight, boolean admin,
                            String username, String password, String email){
        UserRegisterDTO user = new UserRegisterDTO();
        user.setName(name);
        user.setIsMale(male);
        user.setBirthDate(date);
        user.setHeight(height);
        user.setWeight(weight);
        user.setUsername(username);
        user.setPassword(password);
        user.setEmail(email);
        userFacade.createUser(user);
    }

    private void createAdmin(String name, boolean male, String date, int height, int weight, boolean admin,
                             String username, String password, String email){
        User user = new User();
        user.setName(name);
        user.setIsMale(male);
        user.setBirthDate(LocalDate.parse(date, DateTimeFormatter.ofPattern("dd-MM-yyyy")));
        user.setHeight(height);
        user.setWeight(weight);
        user.setIsAdmin(admin);
        LoginDetails ld = new LoginDetails();
        ld.setUsername(username);
        ld.setPassword(password);
        ld.setEmail(email);
        user.setLoginDetails(ld);
        userService.createUser(user);
    }

    private void loadActivities() {
        Long id;
        id = createActivity("Aerobics", "General aerobics exercise", Category.AEROBICS);
        addBurnedCalories(id, 384, 59);
        addBurnedCalories(id, 457, 70);
        addBurnedCalories(id, 531, 82);
        addBurnedCalories(id, 605, 93);
        id = createActivity("Basketball", "Playing competitive basketball game", Category.SPORT);
        addBurnedCalories(id, 472, 59);
        addBurnedCalories(id, 563, 70);
        addBurnedCalories(id, 654, 82);
        addBurnedCalories(id, 745, 93);
        id = createActivity("Cycling", "Leisure bicycling", Category.CYCLING);
        addBurnedCalories(id, 236, 59);
        addBurnedCalories(id, 281, 70);
        addBurnedCalories(id, 327, 82);
        addBurnedCalories(id, 372, 93);
        id = createActivity("Cycle racing", "Racing on bicycles", Category.CYCLING);
        addBurnedCalories(id, 944, 59);
        addBurnedCalories(id, 1126, 70);
        addBurnedCalories(id, 1308, 82);
        addBurnedCalories(id, 1489, 93);
        id = createActivity("Farming", "Baling hay, cleaning barn", Category.WORK);
        addBurnedCalories(id, 472, 59);
        addBurnedCalories(id, 563, 70);
        addBurnedCalories(id, 654, 82);
        addBurnedCalories(id, 745, 93);
        id = createActivity("Fishing", "Fishing from the boat", Category.HOBBY);
        addBurnedCalories(id, 148, 59);
        addBurnedCalories(id, 176, 70);
        addBurnedCalories(id, 204, 82);
        addBurnedCalories(id, 233, 93);
        id = createActivity("Golf", "General playing golf", Category.SPORT);
        addBurnedCalories(id, 266, 59);
        addBurnedCalories(id, 317, 70);
        addBurnedCalories(id, 368, 82);
        addBurnedCalories(id, 419, 93);
        id = createActivity("Ballroom dancing", "Fast ballroom dancing", Category.DANCE);
        addBurnedCalories(id, 325, 59);
        addBurnedCalories(id, 387, 70);
        addBurnedCalories(id, 449, 82);
        addBurnedCalories(id, 512, 93);
        id = createActivity("Boxing", "Punching bag", Category.SPORT);
        addBurnedCalories(id, 354, 59);
        addBurnedCalories(id, 422, 70);
        addBurnedCalories(id, 490, 82);
        addBurnedCalories(id, 558, 93);
        id = createActivity("Running", "Running around 6 mph (10 min mile)", Category.RUNNING);
        addBurnedCalories(id, 590, 59);
        addBurnedCalories(id, 704, 70);
        addBurnedCalories(id, 817, 82);
        addBurnedCalories(id, 931, 93);
    }

    private Long createActivity(String name, String description, Category category){
        ActivityDTO a = new ActivityDTO();
        a.setName(name);
        a.setDescription(description);
        a.setCategory(category.getId());
        return acFacade.createActivity(a);
    }

    private void addBurnedCalories(Long activityId, int amount, int edge){
        BurnedCaloriesDTO b = new BurnedCaloriesDTO();
        b.setActivityId(activityId);
        b.setAmount(amount);
        b.setUpperWeightBoundary(edge);
        acFacade.addBurnedCalorie(b);
    }
}
