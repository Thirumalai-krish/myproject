package com.mph.model;

import java.io.Serializable;

public class Employee implements Serializable{
	 private String ename;
	 private Salary salary;
	 private Department dname;
	
	 public Employee()
	 {		 
		 System.out.println("From Employee Constructor");
	 }
	 public Employee(int i, String string) {
		// TODO Auto-generated constructor stub
	}
	public void setEname(String ename)
	 {
		 this.ename=ename;
	 }
	 public String getEname()
	 {
		 return ename;
	 }	 
	 public Department getDname() {
			return dname;
		}
		public void setDname(Department dname) {
			this.dname = dname;
		}
	 
	 public Salary getSalary() {
		return salary;
	}
	public void setSalary(Salary salary) {
		this.salary = salary;
	}
	public String toString()
	 {
		 return "Employee  [ " + this.ename +"  " + this.salary+  " " +this.dname +" ]";
	 }
/*	public static Comparator<Employee> nameComparator = new Comparator<Employee>() {

		
		public int compare(Employee e1, Employee e2) {
			
			return e1.getEname().compareTo(e2.getEname());
		}
		
	};	*/
//	public char[] getEno() {
//		// TODO Auto-generated method stub
//		return null;
//	}
	
}
	