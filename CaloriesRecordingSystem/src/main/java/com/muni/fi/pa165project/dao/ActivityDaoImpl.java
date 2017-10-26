package com.muni.fi.pa165project.dao;

import com.muni.fi.pa165project.entity.Activity;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import org.springframework.stereotype.Repository;
import com.muni.fi.pa165project.enums.Difficulty;

/**
 *
 * @author Radim Podola
 */
@Repository
public class ActivityDaoImpl implements ActivityDao{

    @PersistenceContext
    private EntityManager em;
    
    @Override
    public Activity findById(long id) {
        return this.em.find(Activity.class, id);
    }

    @Override
    public void create(Activity activity) {
        this.em.persist(activity);
    }

    @Override
    public void update(Activity activity) {
        this.em.merge(activity);
    }

    @Override
    public void delete(Activity activity) {
        this.em.remove(activity);
    }

    @Override
    public List<Activity> findAll() {
        return this.em.createQuery("SELECT a from Activity a",
                Activity.class).getResultList();
    }

    @Override
    public List<Activity> findByName(String text) {
        TypedQuery<Activity> query = em.createQuery(
                "SELECT a FROM Activity a WHERE a.name LIKE %:text%",
                Activity.class);
        query.setParameter("text", text);
        
        return query.getResultList();
    }
    
    @Override
    List<Activity> findByDifficulty(Difficulty difficulty){
        return null;
    }
}
