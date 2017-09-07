package org.Dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.models.Card;

public class UnBlockDao {
	 public Card findUserById(Card card) {
	        Session session = null;
	        
	            @SuppressWarnings("deprecation")
				SessionFactory sessionFactory = new Configuration().configure().buildSessionFactory();
	             session = sessionFactory.openSession();;
	             session.beginTransaction();

	             session.update(card);
	             session.getTransaction().commit();

	            session.close();
	            return card;
	       
	    }  
		    
		   
		  
		 
		   public static UnBlockDao getBlockDao()
		   {
			   return new UnBlockDao();
		   }

}
