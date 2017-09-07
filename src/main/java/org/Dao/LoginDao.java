package org.Dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.models.*;

public class LoginDao {

	
		
		    
	 public Login findUserById(String login_id) {
	        Session session = null;
	        
	            @SuppressWarnings("deprecation")
				SessionFactory sessionFactory = new Configuration().configure().buildSessionFactory();
	             session = sessionFactory.openSession();;
	             session.beginTransaction();

	             Login login = (Login) session.get(Login.class,login_id);
	             session.getTransaction().commit();

	            session.close();
	            return login;
	       
	    }  
		    
		   
		  
		 
		   public static LoginDao getLoginDao()
		   {
			   return new LoginDao();
		   }
	
}
