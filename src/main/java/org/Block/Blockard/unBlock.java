package org.Block.Blockard;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

import org.Dao.UnBlockDao;
import org.models.Card;

@Path("unblock")
public class unBlock {


	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Card unblockCard(Card card)
	{
		UnBlockDao unblockDao=UnBlockDao.getBlockDao();
		if(!card.isActive_status())
		{
			card.setActive_status(true);
			unblockDao.findUserById(card);
			return card;
		}
		else
		{
			return card;
		}
	}
}
