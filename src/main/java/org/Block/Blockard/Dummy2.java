package org.Block.Blockard;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.models.CardPassword;
@Path("dummy2")
public class Dummy2 {
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public CardPassword getCardPassword() {
		
		
		CardPassword cardPassword=new CardPassword();
		cardPassword.setActive_status(true);
		cardPassword.setBalance_outstanding(0);
		cardPassword.setCard_number("123");
		cardPassword.setCust_id(0);
		cardPassword.setPassword("dsdds");
		cardPassword.setType("credit");
		return cardPassword;
	}
}
