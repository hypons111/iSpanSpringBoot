
<%@ page import="java.util.List"%>

<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>PRODUCT INDEX PAGE</title>

</head>
<body>
	<div style="margin-top: 20px">
		<table>
			<tbody>
				<tr>
					<th><a href="insertform"><button>Add New Product</button></a></th>
					<th><button id="showAll">Show All Product</button></th>
					<th>
						<form method="post" action="bacthform">
							<button id="batchButton">Batch</button>
							<input id="batchHiddenInput" type="text" name="idList" value="" />
						</form>
					</th>
				</tr>
			</tbody>
		</table>
		<table border="2" class="table table-bordered">
			<thead>
				<tr>
					<th><p id="totalNum"></p></th>
					<th><button class="product_Type" id="sort">Type</button> <input
						id="type" class="columnSearchInput" type="text" placeholder=""
						value=""></th>
					<th><button class="product_ID" id="sort">ID</button> <input
						id="id" class="columnSearchInput" type="text" placeholder=""
						value=""></th>
					<th><button class="product_Name" id="sort">Name</button> <input
						id="name" class="columnSearchInput" type="text" placeholder=""
						value=""></th>
					<th><button class="product_Stock" id="sort">Stock</button> <input
						id="stock" class="columnSearchInput" type="text" placeholder=""
						value=""></th>
					<th><button class="product_Cost" id="sort">Buy</button> <input
						id="cost" class="columnSearchInput" type="text" placeholder=""
						value=""></th>
					<th><button class="product_Price" id="sort">Sell</button> <input
						id="price" class="columnSearchInput" type="text" placeholder=""
						value=""></th>
					<th>Image</th>
				</tr>
			</thead>
			<tbody id="resultTable"></tbody>
		</table>
	</div>


	<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
	<script
		src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
	<script src="/product/js/product/productIndex.js"></script>


</body>
</html>