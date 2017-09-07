package org.Dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.hibernate.criterion.Restrictions;
import org.models.*;

public class CardDao {

	 public List<Card> findUserById(long id) {
	        Session session = null;
	        
	            @SuppressWarnings("deprecation")
				SessionFactory sessionFactory = new Configuration().configure().buildSessionFactory();
	             session = sessionFactory.openSession();;
	             session.beginTransaction();
	             Criteria criteria=session.createCriteria(Card.class);
	             criteria.add(Restrictions.eq("cust_id", id));
	             List<Card> cards=criteria.list();
	             session.getTransaction().commit();

	            session.close();
	            return cards;

	}
	
	 public static CardDao getCardDao()
	 {
		 return new CardDao();
	 }
}
