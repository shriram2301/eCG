package org.Block.Blockard;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.models.Card;
import org.models.CardPassword;
import org.models.OtpTransaction;

@Path("unblockPassword")
public class unBlockPassword {

	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Card blockPassword(CardPassword cardpassword)
	{	Card card=Card.getNewCard();
		  Session session = null;
	        
          @SuppressWarnings("deprecation")
			SessionFactory sessionFactory = new Configuration().configure().buildSessionFactory();
           session = sessionFactory.openSession();;
           session.beginTransaction();
           OtpTransaction otpObj=(OtpTransaction)session.get(OtpTransaction.class,cardpassword.getCust_id());
           
           
           session.getTransaction().commit();
           	session.close();
           	if(otpObj.getTpassword().equals(cardpassword.getPassword()))
           	{
           	  
           		session=null;
	            @SuppressWarnings("deprecation")
				SessionFactory sessionFactory1 = new Configuration().configure().buildSessionFactory();
	             session = sessionFactory1.openSession();;
	             session.beginTransaction();
	             card = (Card) session.get(Card.class,cardpassword.getCard_number());
	             card.setActive_status(true);
	             session.update(card);
	             session.getTransaction().commit();

	            session.close();
	            return card;
           	}
           	else
           	{
           		return null;
           	}
	}
	
}
