package org.Dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.models.SMS;



public class PhoneDao {
	
	
    
public SMS findUserById(String phonenumber) {
    Session session = null;
    
        @SuppressWarnings("deprecation")
		SessionFactory sessionFactory = new Configuration().configure().buildSessionFactory();
         session = sessionFactory.openSession();;
         session.beginTransaction();

         SMS smslogin = (SMS) session.get(SMS.class,phonenumber);
         session.getTransaction().commit();
         
        session.close();
        return smslogin;
   
}  
    
   
  
 
   public static PhoneDao getLoginDao()
   {
	   return new PhoneDao();
   }

}
