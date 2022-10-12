<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql"%>
<%@page
	import="menuItems.MenuDAO, menuItems.Menu, menuItems.*, java.util.* , menuItems.RealDao, menuItems.RealDB"%>

<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Home</title>

<!-- CSS Bootstrap  -->
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT"
	crossorigin="anonymous" />
<!-- <link rel="stylesheet" href="./scss/_navbar.scss"> -->
<!-- <link rel="stylesheet" href="./scss/custom.scss"> -->
<!-- <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.min.css"> -->
<link rel="stylesheet" href="./css/index.css" />
<!-- <link rel="stylesheet" href="./node_modules/bootstrap/scss/_navbar.scss"> -->
<link rel="stylesheet" href="./scss/bootstrap.min.css" />

<style>
.nav-link2 {
	margin: 5px;
	color: black;
	text-decoration: none;
}

.active2 {
	background-color: red;
	color: white;
	text-decoration: none;
}
</style>
</head>

<body class="bg-light" id="body">
	<!-- <div class="container-fluid"> -->
	<nav class="navbar bg-light" id="navbar1">
		<div class="container-fluid" id="navbar2">
			<a class="navbar-brand" href="#" id="logoImg"> <img
				src="./images/demoLogo.jpg" width="30" height="24"
				class="d-inline-block align-text-top" />
			</a>

			<form class="d-flex" name="search" role="search"
				style="width: 250px;">
				<i class="fa-solid fa-magnifying-glass"></i> <input
					class="form-control me-2" name="searchItem" type="search"
					placeholder="Search" aria-label="Search" />
				<button type="button" class="btn btn-danger" onclick="searchFunc()">Search</button>
			</form>
		</div>
	</nav>

	<!-- ---------------------------------------------------------------------------------------------------------------------------------------------- -->


	<%
	List<RealDB> list2 = RealDao.getAllRecords();
	request.setAttribute("list2", list2);
	%>


	<!-- 
  <c:forEach items="${list2}" var="u1">  
<tr><td>${u1.getItemId()}</td><td>${u1.getItemPrice()}</td><td>${u1.getItemName()}</td>  
<td>${u1.getItemDescription()}</td><td>${u1.getImgLoc()}</td><td>${u1.getFoodType()}</td>  
</c:forEach> 
 -->


	<!-- Main Container  -->

	<div data-bs-spy="scroll" data-bs-target="#demo"
		data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true"
		tabindex="0">

		<ul class="list-group scrollspy-example" id="ul"
			style="margin-bottom: 180px;" data-bs-spy="scroll"
			data-bs-target="#demo" data-bs-root-margin="0px 0px -40%"
			data-bs-smooth-scroll="true" tabindex="0">
			<c:forEach items="${list2}" var="u1">
				<li
					class="dropdown list-group-item d-flex justify-content-between align-items-start"
					id="mainToggle${u1.getItemId()}">
					<div class="ms-2 me-auto" data-bs-toggle="dropdown"
						aria-expanded="false">
						<div class="fw-bold">${ u1.getFoodType() }</div>
						<br>
						<div class="myToggleAction container-fluid"
							id="myToggleAction${u1.getItemId()}">
							<br> <img
								src="https://img.icons8.com/fluency/48/000000/vegetarian-food-symbol.png"
								style="height: 24px" /> Vegeterian

							<div class="menuItemContainer" data-bs-spy="scroll">
								<div class="menuItems">
									<b>${u1.getItemName()}</b> <b style="color: gray;">${u1.getItemDescription()}</b>
									<b>Rs ${u1.getItemPrice()}</b>
									<!-- <i class="fa-regular fa-heart"></i> -->
									<button type="button"
										class="addToCart staticBackdrop${u1.getItemId()}"
										onclick="btnFun(this)" data-bs-toggle="modal"
										data-bs-target="#staticBackdrop${u1.getItemId()}" id="btnCart">Add</button>
								</div>

								<img src="${u1.getImgLoc()}" class="img-responsive"
									style="border-radius: 10px; border: 1px solid rgb(196, 193, 193);" />
							</div>
						</div>
					</div> <!-- Modal -->

					<div class="modal fade" id="staticBackdrop${u1.getItemId()}"
						data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
						aria-labelledby="staticBackdropLabel" aria-hidden="true">
						<div class="modal-dialog" style="position: relative;">
							<div class="modal-content" id="modal-content${u1.getItemId()}">

								<div class="modal-header">
									<h5 class="modal-title"
										id="staticBackdropLabel${u1.getItemId()}">
										<b id="ModelLabel${u1.getItemId()}">${u1.getItemName()}</b> <b
											id="price${u1.getItemId()}">Rs ${u1.getItemPrice()}</b>
									</h5>
									<button type="button" class="btn-close"
										id="btn-close${u1.getItemId()}" data-bs-dismiss="modal"
										name="Close" aria-label="Close"></button>
								</div>
								<div class="modal-body">
									<img src="${u1.getImgLoc()}"
										style="border-radius: 10px; width: 100%; height: 20rem;" /> <b
										style="color: gray;">${u1.getItemDescription()}</b>

								</div>
								<div class="modal-footer" id="modal-footer${u1.getItemId()}">
									<button type="button" class="incrementDecrementBtn">
										<i class="decrementBtn fa-solid fa-minus"
											onclick="decrementFunc(this)"
											id="decrementBtn${u1.getItemId()}" data-bs-dismiss="modal"></i>
										<span class="counter" id="counter${u1.getItemId()}"
											style="margin: 0px 10px;">1</span> <i
											class="incrementBtn fa-solid fa-plus"
											onclick="incrementFunc(this)"
											id="incrementBtn${u1.getItemId()}"></i>
									</button>
									<button type="button" class="totalItemPrice addToCartModal"
										id="totalItemPrice${u1.getItemId()}"
										onclick="btnMiniCart(this)">Add Item Rs
										${u1.getItemPrice()}</button>
								</div>
							</div>
						</div>
					</div> <span class="badge bg-red rounded-pill dropdown-toggle"
					onclick="myFnc(this)"> </span>
				</li>

			</c:forEach>


		</ul>

		<!-- ----------------------------------------------------------------------------------------------------------------------------------------------- -->
		<!-- 
            <div class="container" id="demo" style="
    position: absolute;
    bottom: -32rem;
    height: 11rem;">
              <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link" href="#mainToggle1">First</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#mainToggle2">Second</a>
    </li>
    </ul>
            </div>
			
			 -->


		<!-- Modal -->
		<div class="modal fade" id="exampleModal" tabindex="-1"
			aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog scroll">
				<div class="modal-content" id="exampleModalContent"
					style="top: inherit;">

					<div class="modal-body">
						<ul class="nav nav-pills" id="scrollsyLinks"
							style="display: flex; flex-direction: column">

						</ul>
					</div>

				</div>
			</div>
		</div>

		<!--  -->
		<div id="fixedBottomButtonContainer"
			style="position: fixed; margin-top: 10px; bottom: 0px; display: flex; flex-direction: column; width: 100%; z-index: 10000000;">
			<button type="button"
				class="btn btn-dark fixedBottomButton rounded-pill"
				id="fixedbottomButton"
				style="position: relative; width: 35%; margin: 15px auto; display: flex; flex-direction: unset; background-color: black;"
				data-bs-toggle="modal" data-bs-target="#exampleModal">
				<i class="fas fa-utensils" id="bottomButtonIcon1"
					style="margin: 5px 10px 5px 5px;"></i>Menu
			</button>

			<div class="directToCart" id="directToCart"
				style="background-color: white; width: 100%; height: 100%; border: 2px solid rgba(0, 0, 0, 0.125);">
				<a onclick="toBiltingPage()" href="./billing.jsp"
					style="margin: 13px; background-color: red; color: white; display: flex; justify-content: space-between; text-decoration: none;">
					<div style="margin: 10px;">
						<h1 id="noOfItems" style="font-size: inherit;">1 Item</h1>
						<h1 id="totalCostItems" style="font-size: inherit;">Rs 590</h1>
					</div>

					<div>
						<h1 style="padding-top: 25px; font-size: larger">
							Next <i class="fa-solid fa-caret-right"
								style="position: inherit; color: white; width: 40px; height: 40px;">
							</i>
						</h1>
					</div>
				</a>

			</div>
		</div>




		<!-- </div> -->

		<!-- Javascript (Bootstrap) -->
		<!-- Font Awesome -->
</body>

<script src="https://kit.fontawesome.com/2dc4a3b6e4.js"
	crossorigin="anonymous"></script>
<script src="./js/demo.js"></script>
<script src="./js/search.js"></script>
<script src="./js/index.js"></script>
<script src="./node_modules/@popperjs/core/dist/umd/popper.min.js"></script>
<script src="./node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
<script src="./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>

</html>