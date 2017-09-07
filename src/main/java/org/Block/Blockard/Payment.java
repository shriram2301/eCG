package org.Block.Blockard;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.models.Card;

@Path("payment")
public class Payment {
	

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.TEXT_PLAIN)
	public String performPayment(Card card)
	{   
		if(card.isActive_status()==true)
		{
	return "card found";
		}
	
		else 
			return "card blocked";
	}


}
