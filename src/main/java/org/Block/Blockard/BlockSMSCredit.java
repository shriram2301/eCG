package org.Block.Blockard;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.models.Card;

@Path("smsBlockCredit")
public class BlockSMSCredit {
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Card blockSMSCredit(List<Card> cards)
	{ Card foundCard=Card.getNewCard();
		for(Card card:cards)
		{
			if(card.getType().equals("credit"))
			{
				foundCard=card;
			}
			
		}
		//System.out.println(foundCard.getCard_number());
		return foundCard;
	}

}
