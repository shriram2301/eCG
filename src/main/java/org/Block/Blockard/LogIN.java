package org.Block.Blockard;


	
	import org.Dao.*;
import org.models.*;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
	import javax.ws.rs.Produces;
	import javax.ws.rs.core.MediaType;

	import org.models.User_Master;

	@Path("login")
	public class LogIN {
	
		@POST
		@Consumes(MediaType.APPLICATION_JSON)
		@Produces(MediaType.APPLICATION_JSON)
		public User_Master getCredentials(logon logon)
		{	
		
	        LoginDao loginDao=LoginDao.getLoginDao();
	    Login  login=loginDao.findUserById(logon.getUsername());
	        
	        UserDao userDao=UserDao.getUserDao();
	       User_Master user=userDao.findUserById(login.getCust_id()); 
		
			
	        if((logon.getPassword().equals(login.getPassword()))&&(logon.getUsername().equals(logon.getUsername())))
			{
			return user;
			}
			else
			{
				return null;
			}
		}

	}


