package com.mph.model;

import java.io.Serializable;

public class Department implements Serializable{
	private String dname;
        System.out.println("hi");
	public Department() {
		super();
	}

	public Department(String dname) {
		super();
		this.dname = dname;
	}

	public String getDname() {
		return dname;
	}

	public void setDname(String dname) {
		this.dname = dname;
	}

	public String toString() {
		return "Department [" + dname + "]";
	}

}
