<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1" %>

<%@ page session="true" %>

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
          <title>Billing Receipt</title>

          <!-- CSS Bootstrap  -->
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT"
            crossorigin="anonymous" />
          <!-- <link rel="stylesheet" href="./scss/_navbar.scss"> -->
          <!-- <link rel="stylesheet" href="./scss/custom.scss"> -->
          <!-- <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.min.css"> -->
          <link rel="stylesheet" href="./css/index3.css" />
          <!-- <link rel="stylesheet" href="./node_modules/bootstrap/scss/_navbar.scss"> -->
          <link rel="stylesheet" href="./scss/bootstrap.min.css" />
        </head>

        <body style="background-color:#a0a0a0" id="body">

          <!-- ---------------------------------------------------------------------------------------------------------------------------------------------- -->
		<%
		HttpSession s = request.getSession(true);

		int available = (int) s.getAttribute("flag");
		
		
		%>
		
		
		


  
          <form action="./paymentGateway.jsp">
          	
          
          <div class="container" id="cont" style="">
          	<h4 style=" font-size: 25px;
    			margin-bottom: 25px;
    			background-color: red;
    			color: white;">
    				<b>Billing Summary</b>
    		</h4>
 
			<div>
				<h1>Receipt Id : <%= available %></h1>
			</div>
          	
          	<div class="mainCotainer" id="mainCotainer">

          		<div class="billingContent" id="quantity" style="border-top: 1px dashed;">
          			<span><b class="column-head">Item Name</b></span>
          			<span><b class="column-head">Quantity</b></span>
          		</div>
          		
          		
          		<div class="billingContent" id="ppi" style="border-top: 1px dashed;">
          			<span><b class="column-head">Item Name</b></span>
          			<span><b class="column-head">Price Per Item</b></span>
          		</div>
          		
          		
          		<div class="billingContent" id="subTotal" style="border-top: 1px dashed;">
          			<span><b class="column-head">Item Name</b></span>
          			<span><b class="column-head">Sub-Total</b></span>
          		</div>
          		
          		<div class="billingContent" id="grandTotal" style="border-top: 1px dashed;">
          			<span><b></b></span>
          			<span><b class="column-head" id="gtp"></b></span>
          		</div>
          		
          	</div>
 
 
 
          </div>  
          
          <div id="addPayDiv">
          	<button type="submit" id="addPayBtn" class="btn btn-danger" style="height: 60px;">Order Again</button>
          </div>
          </form> 
		
            <!-- Javascript (Bootstrap) -->
            <!-- Font Awesome -->
        </body>

        <script src="https://kit.fontawesome.com/2dc4a3b6e4.js" crossorigin="anonymous"></script>
        <script src="./js/demo.js"></script>
        <script src="./js/indexRemastered.js"></script>
        <script src="./node_modules/@popperjs/core/dist/umd/popper.min.js"></script>
        <script src="./node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
        <script src="./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>

        </html>