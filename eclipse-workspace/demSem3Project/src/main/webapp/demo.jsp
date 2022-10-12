<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1" %>



    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql" %>
      <%@page import="menuItems.BillReceipt, menuItems.BillReceiptDAO, menuItems.*, java.util.*"%>


<jsp:useBean id="u1" class="menuItems.BillReceiptDAO"></jsp:useBean>
<jsp:setProperty property = "*" name = "u1"/>


        <!DOCTYPE html>
        <html lang="en"> 

        <head> 
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Home</title>

                   
        </head>

<body>

	<%
	//boolean paymentResult1 = (boolean)BillReceiptDAO.getAllRecords();
	boolean paymentResult2 = true;
			BillReceipt br = new BillReceipt();
			
			List<BillReceipt> list= BillReceiptDAO.getAllRecords();
			int inc = (int)br.getBillReceiptNo();
			int result= (int)BillReceiptDAO.updateAllRecords();
			
		
			
	
	if(paymentResult2 == true) {
		
		HttpSession s = request.getSession();
		s.setAttribute("flag", list.get(0).getBillReceiptNo());
		paymentResult2 = false;
		response.sendRedirect("billReceipt.jsp");
	}
	%>



	<div id="paymentGateway">
		<img alt="" src="./images/cash.png">
		<button type="submit" id="addPayBtn" class="btn btn-danger" style="height: 60px;">Payment Gateway</button>
	</div>
</body>


</html>