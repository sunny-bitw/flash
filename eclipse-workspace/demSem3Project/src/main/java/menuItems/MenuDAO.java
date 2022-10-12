package menuItems;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class MenuDAO {
	
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
	
	public static List<Menu> getAllRecords() throws Exception {
		
		List<Menu> list = new ArrayList<Menu>();
		try {
			Connection conn1 = getConnection();
			String sql = "SELECT * FROM Persons";
	        
	        Statement statement = conn1.createStatement();
	        ResultSet result = statement.executeQuery(sql);
	         
	        int count = 0;
	         
	        while (result.next()){
	        	Menu mu = new Menu();
	        	mu.setPersonId(result.getInt(1));
	        	mu.setLastName(result.getString(2));
	        	mu.setFirstName(result.getString(3));
	        	mu.setAddress(result.getString(4));
	        	mu.setCity(result.getString(5));
	        	
	        	/* int personId = result.getInt(1);
	        	String lastName = result.getString(2);
	            String firstName = result.getString(3);
	            String address = result.getString(4);
	            String city = result.getString(5);
	            */
	        	
	        	list.add(mu);
	        }
		} catch (Exception e) {
			System.out.println(e);
		}
		
		return list;
	}

}
