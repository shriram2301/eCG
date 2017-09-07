package org.Block.Blockard;

import javax.ws.rs.Consumes;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.Dao.PhoneDao;
import org.Dao.UserDao;
import org.models.PhoneSMS;
import org.models.SMS;

import org.models.User_Master;

@Path("sms")
public class PhoneRetrieve {
	
	
	
	
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public User_Master getPhoneDetails(PhoneSMS phonenumber)
	{  
		
		
		PhoneDao phoneDao=PhoneDao.getLoginDao();
    SMS smslogin=phoneDao.findUserById(phonenumber.getPhonenumber());
	User_Master user_Master=User_Master.getUser_Master();
	UserDao userDao=UserDao.getUserDao();
	
	if(smslogin!=null)
	{
	 user_Master=userDao.findUserById(smslogin.getCust_id());
	 return user_Master;
	}
	else 
	{
		return null;
	}
		
	}
}