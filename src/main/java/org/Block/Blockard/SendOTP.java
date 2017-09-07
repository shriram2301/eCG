package org.Block.Blockard;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.models.Card;
import org.models.OtpTransaction;

@Path("sendOTP")
public class SendOTP {
		
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	
	public OtpTransaction sendOTP(Card card)
	{
		
		char[] otp=GenerateOTP.OTP(4);
		System.out.println(String.valueOf(otp));
		  Session session = null;
	        
          @SuppressWarnings("deprecation")
			SessionFactory sessionFactory = new Configuration().configure().buildSessionFactory();
           session = sessionFactory.openSession();;
           session.beginTransaction();
           OtpTransaction otpObj=(OtpTransaction)session.get(OtpTransaction.class,card.getCust_id());
           otpObj.setOtp(String.valueOf(otp));
           session.update(otpObj);
           session.getTransaction().commit();

          session.close();
          return  otpObj;
	}
}
