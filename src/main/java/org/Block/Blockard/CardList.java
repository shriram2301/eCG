package org.Block.Blockard;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.Dao.CardDao;
import org.models.*;

@Path("cards")
public class CardList {
	
	
	
	

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public List<Card> getCards(User_Master user)
	{   
		CardDao cardDao=CardDao.getCardDao();
		List<Card> cards=cardDao.findUserById(user.getCustid());
	
	return cards;	
	}

	
}
