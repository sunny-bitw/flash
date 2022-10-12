package menuItems;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class BillReceiptDAO {

	public static Connection getConnection() throws Exception {
		Connection conn1 = null;
		
		try {
			
			Class.forName("com.mysql.jdbc.Driver");
			String url = "jdbc:mysql://uy5kgrldu5dh0tgk:mAIhnmwJbPBSceDwFA6m@buczcvzvex0art8lru3s-mysql.services.clever-cloud.com:3306/buczcvzvex0art8lru3s";
			String user = "uy5kgrldu5dh0tgk";
			String password = "mAIhnmwJbPBSceDwFA6m";
			
			conn1 = DriverManager.getConnection(url, user, password);
			
			if(conn1 != null) {
				System.out.println("Connected to the database test2");
			}
			
		} catch (Exception ex) {
			System.out.println("An error occured");
			ex.printStackTrace();
		}	// End of try catch block
		
		return conn1;
	}	// End of getConnection method;

	public static List<BillReceipt> getAllRecords() throws Exception {
		List<BillReceipt> list = new ArrayList<BillReceipt>();
		
		try {
			
			Connection conn1 = getConnection();
			String sql = "Select * from ReceiptNo";
			
			Statement statement = conn1.createStatement();
			ResultSet result = statement.executeQuery(sql);
			
			while (result.next()) {
				BillReceipt br = new BillReceipt();
				br.setId(result.getInt(1));
				br.setBillReceiptNo(result.getInt(2));
				
				list.add(br);
			}
			
		}	catch (Exception ex) {
			System.out.println(ex);
		}
		
		return list;
	}	// End of getAllRecords method
	
	public static int incrementedValue() {
		BillReceipt br = new BillReceipt();
		
		
		int inc = br.getBillReceiptNo()+1;
		System.out.println("getBillReceiptNo " + br.getBillReceiptNo());
		++inc;
		System.out.println(" inc++ " + inc);
		System.out.println(" inc++ " + inc);
		inc = 5;
		System.out.println(" inc = 5 " + inc);
		return br.getBillReceiptNo()+1;
	}
	
	public static int updateAllRecords() throws Exception {
		List<BillReceipt> list2 = new ArrayList<BillReceipt>();
		BillReceiptDAO bdao = new BillReceiptDAO();
		list2 = bdao.getAllRecords();
		System.out.println("List " + list2.get(0).billReceiptNo);
		
		
		BillReceipt b = new BillReceipt();
		int result = 0;
		int count = 0;
		int inc = list2.get(0).billReceiptNo;
		System.out.println("ID " + b.getId());
		
		++inc;
		System.out.println(" inc++ " + inc);
		int status = 0;
		try {
			Connection conn1 = getConnection();
			String sql = "update ReceiptNo set receiptNo = " + inc + " where id = 1";
			System.out.println("1 " + sql);
			Statement statement = conn1.createStatement();
			System.out.println("2 " + sql);
			
			 result = statement.executeUpdate(sql);
			 System.out.println("3 " + sql); 
			 System.out.println("result " + result); 
			
					       
			
		} catch (Exception ex) {
			System.out.println(ex);
		}
		
		
		return result;
		
	}
}	// End of class
 