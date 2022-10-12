package menuItems;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class RealDao {
	public static Connection getConnection() throws Exception {
		Connection conn1 = null;
        try {
            // Connect to database
        	 Class.forName("com.mysql.jdbc.Driver");  
            String url1 = "jdbc:mysql://uy5kgrldu5dh0tgk:mAIhnmwJbPBSceDwFA6m@buczcvzvex0art8lru3s-mysql.services.clever-cloud.com:3306/buczcvzvex0art8lru3s";
            String user = "uy5kgrldu5dh0tgk"; 
            String password = "mAIhnmwJbPBSceDwFA6m";
 
            conn1 = DriverManager.getConnection(url1, user, password);
            if (conn1 != null) {
                System.out.println("Connected to the database test1");
            }
            
        } catch (SQLException ex) {
            System.out.println("An error occurred. Maybe user/password is invalid");
            ex.printStackTrace();
        }
		return conn1; 
	}	// End of getConnection Method
	
	public static List<RealDB> getAllRecords() throws Exception {
		
		List<RealDB> list2 = new ArrayList<RealDB>();
		try {
			Connection conn1 = getConnection();
			String sql = "SELECT * FROM Menu";
	        
	        Statement statement = conn1.createStatement();
	        ResultSet result = statement.executeQuery(sql);
	         
	        int count = 0;
	         
	        while (result.next()){
	        	RealDB db = new RealDB();
	        	db.setItemId(result.getInt(1));
	        	db.setItemName(result.getString(2));
	        	db.setItemPrice(result.getInt(3));
	        	db.setItemDescription(result.getString(4));
	        	db.setFoodType(result.getString(5));
	        	db.setImgLoc(result.getString(6));
	        	
	        	/* int personId = result.getInt(1);
	        	String lastName = result.getString(2);
	            String firstName = result.getString(3);
	            String address = result.getString(4);
	            String city = result.getString(5);
	            */
	        	
	        	list2.add(db);
	        }
		} catch (Exception e) {
			System.out.println(e);
		}
		
		return list2;
	}
}
