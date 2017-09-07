package org.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="sms")
public class SMS {
	@Id
	@Column(name="phone_number")
	String phonenumber;
	public String getPhonenumber() {
		return phonenumber;
	}
	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
	}
	
	public long getCust_id() {
		return cust_id;
	}
	public void setCust_id(long cust_id) {
		this.cust_id = cust_id;
	}
	
	@Column(name="cust_id")
	long cust_id;
	
	 public SMS() {}
	 public static SMS getSMS()
	 {
		 return new SMS();
	 }
	

}
