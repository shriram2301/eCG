package org.Dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.models.*;

public class UserDao {
	
    
 public User_Master findUserById(long id) {
        Session session = null;
        
            @SuppressWarnings("deprecation")
			SessionFactory sessionFactory = new Configuration().configure().buildSessionFactory();
             session = sessionFactory.openSession();;
             session.beginTransaction();

             User_Master l = (User_Master) session.get(User_Master.class,id);
             session.getTransaction().commit();

            session.close();
            return l;

}
 	public static UserDao getUserDao()
 	{
 		return new UserDao();
 	}
}