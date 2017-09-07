package org.models;

import javax.persistence.Entity;

import javax.persistence.Table;
import javax.persistence.Column;
import javax.persistence.Id;


@Entity
@Table(name="login")
public class Login {
	@Id
	@Column(name="user_name")
	String username;
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
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
	@Column(name="pasword")
	String password;
	@Column(name="phone_number")
	String phonenumber;
	
	
	@Column(name="cust_id")
	long cust_id;
public	Login(){}
	
	public static Login getLogin()
	{
		return new Login();
	}
}
