package org.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user_master")
public class User_Master {
	@Id
	@Column(name="cust_id")
	long custid;
	public long getCustid() {
		return custid;
	}
	public void setCustid(long custid) {
		this.custid = custid;
	}
	public String getFirst_name() {
		return first_name;
	}
	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}
	public String getMiddle_name() {
		return middle_name;
	}
	public void setMiddle_name(String middle_name) {
		this.middle_name = middle_name;
	}
	public String getLast_name() {
		return last_name;
	}
	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPhonenumber() {
		return phonenumber;
	}
	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
	}
	@Column(name="first_name")
	String first_name;
	@Column(name="middle_name")
	String middle_name;
	@Column(name="last_name")
	String last_name;
	@Column(name="address")
	String address;
	@Column(name="phone_number")
	String phonenumber;
	
	public static User_Master getUser_Master()
	{
		return new User_Master();
	}
	public User_Master()
	 {
		 
	 }
	
}
