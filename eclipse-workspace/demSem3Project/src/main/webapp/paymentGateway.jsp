<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1" %>

  <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql" %>
      <%@page import="menuItems.MenuDAO, menuItems.Menu, menuItems.*, java.util.* , menuItems.RealDao, menuItems.RealDB"
        %>

        <!DOCTYPE html>
        <html lang="en"> 

        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Home</title>

          <!-- CSS Bootstrap  -->
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT"
            crossorigin="anonymous" />
          <!-- <link rel="stylesheet" href="./scss/_navbar.scss"> -->
          <!-- <link rel="stylesheet" href="./scss/custom.scss"> -->
          <!-- <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.min.css"> -->
          <!-- <link rel="stylesheet" href="./css/index3.css" /> -->
          <!-- <link rel="stylesheet" href="./node_modules/bootstrap/scss/_navbar.scss"> -->
          <link rel="stylesheet" href="./scss/bootstrap.min.css" />
          
          <style type="text/css">
          	body {
          		background-color: #9e9e9e;
          	}
          	
          	img {
          		height: 80px;
    			width: 70px;
    			margin: 10px auto;
          	}
           
          	#paymentGateway{
          		display: flex;
    			justify-content: center;
    			height: 100vh;
    			flex-direction: column;
    			width: 200px;
    			margin: auto;
          	}
          </style>
          
        </head>

<body>
	<form action="./demo.jsp">
	<div id="paymentGateway">
		<img alt="" src="./images/cash.png">
		<button type="submit" class="btn btn-danger" style="height: 60px;">Payment Gateway</button>
	</div>
	</form>
</body>


        <script src="https://kit.fontawesome.com/2dc4a3b6e4.js" crossorigin="anonymous"></script>
        <script src="./js/demo.js"></script>
        <script src="./js/index.js"></script>
        <script src="./node_modules/@popperjs/core/dist/umd/popper.min.js"></script>
        <script src="./node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
        <script src="./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>

        </html>