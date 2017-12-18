package com.muni.fi.pa165project.dao;

import com.muni.fi.pa165project.entity.BurnedCalories;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

/**
 * @author Lukáš Císar
 */
@Repository
public class BurnedCaloriesDaoImpl implements BurnedCaloriesDao {

    @PersistenceContext
    private EntityManager em;

    @Override
    public void create(BurnedCalories burnedCalories) {
        this.em.persist(burnedCalories);
    }

    @Override
    public BurnedCalories update(BurnedCalories burnedCalories) {
        return this.em.merge(burnedCalories);
    }

    @Override
    public void delete(BurnedCalories burnedCalories) {
        boolean isManaged = this.em.contains(burnedCalories);

        if (isManaged) {
            this.em.remove(burnedCalories);
        } else {
            this.delete(burnedCalories.getId());
        }
    }

    @Override
    public void delete(long id) {
        BurnedCalories burnedCalories = this.findById(id);

        if (burnedCalories != null) {
            this.em.remove(burnedCalories);
        }
    }

    @Override
    public BurnedCalories findById(long id) {
        return this.em.find(BurnedCalories.class, id);
    }

    @Override
    public List<BurnedCalories> findAll() {
        return this.em.createQuery("SELECT bc from BurnedCalories bc",
                BurnedCalories.class).getResultList();
    }

    @Override
    public BurnedCalories getWeightRange(long activityId, double bodyweight) {
        List<BurnedCalories> weightRanges = this.em.createQuery("SELECT bc FROM BurnedCalories bc " +
                "WHERE bc.activity.id=:activityId AND bc.upperWeightBoundary>=:bodyweight " +
                "ORDER BY bc.upperWeightBoundary ASC", BurnedCalories.class)
                .setParameter("activityId", activityId)
                .setParameter("bodyweight", (int) bodyweight)
                .getResultList();

        if (weightRanges.isEmpty()) {
            weightRanges = this.em.createQuery("SELECT bc FROM BurnedCalories bc " +
                    "WHERE bc.activity.id=:activityId " +
                    "ORDER BY bc.upperWeightBoundary DESC", BurnedCalories.class)
                    .setParameter("activityId", activityId).getResultList();
            if (weightRanges.isEmpty())
                return null;
        }

        return weightRanges.get(0);
    }

}
