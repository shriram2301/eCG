package org.Block.Blockard;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.models.CardPassword;

@Path("dummy")
public class Dummy {

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public CardPassword send()
	{
		CardPassword  cardPassword=CardPassword.getNewCard();
		cardPassword.setActive_status(true);
		cardPassword.setBalance_outstanding(0);
		cardPassword.setCard_number("12");
		cardPassword.setCust_id(0);
		cardPassword.setPassword("sd");
		cardPassword.setType("credit");
		return cardPassword;
	}
}
