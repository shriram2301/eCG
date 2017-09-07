package org.Block.Blockard;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

import org.Dao.BlockDao;
import org.models.*;

@Path("block")
public class Block {


	
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Card blockCard(Card card)
	{
		
		BlockDao blockDao=BlockDao.getBlockDao();
		Card blockedCard=Card.getNewCard();
		if(card.isActive_status())
		{
			
		
			blockedCard=blockDao.findUserById(card);
			return blockedCard;
		}
		else
		{
			return card;
		}
	}
}
