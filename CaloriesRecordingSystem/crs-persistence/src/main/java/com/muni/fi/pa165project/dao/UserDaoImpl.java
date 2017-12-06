package com.muni.fi.pa165project.dao;

import com.muni.fi.pa165project.entity.User;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.List;

/**
 * @author Peter Krasnan
 * @author Lukáš Císar
 */
@Repository
public class UserDaoImpl implements UserDao {

    @PersistenceContext
    private EntityManager em;

    @Override
    public User findById(long id) {
        return this.em.find(User.class, id);
    }

    @Override
    public User findByUserName(String username) {
        TypedQuery<User> query = em.createQuery("SELECT u FROM User u " +
                "WHERE u.loginDetails.username = :username", User.class);
        query.setParameter("username", username);

        return query.getSingleResult();
    }

    @Override
    public User findByEmail(String email) {
        TypedQuery<User> query = em.createQuery("SELECT u FROM User u " +
                "WHERE u.loginDetails.email = :email", User.class);
        query.setParameter("email", email);

        return query.getSingleResult();
    }

    @Override
    public void create(User user) {
        this.em.persist(user);
    }

    @Override
    public void update(User user) {
        this.em.merge(user);
    }

    @Override
    public void delete(User user) {
        boolean isManaged = this.em.contains(user);

        if (isManaged) {
            this.em.remove(user);
        } else {
            this.delete(user.getId());
        }
    }

    @Override
    public void delete(long id) {
        User user = this.findById(id);

        if (user != null) {
            this.em.remove(user);
        }
    }

    @Override
    public List<User> findAll() {
        return this.em.createQuery("SELECT u from User u", User.class).getResultList();
    }

}
