<%@ page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<form id="updateForm">
		<table border="1">
			<thead>
				<tr>
					<th>Type</th>
					<th>ID</th>
					<th>Name</th>
					<th>Stock</th>
					<th>Buy</th>
					<th>Sell</th>
					<th>Description</th>
					<th>Image</th>
				</tr>
			</thead>
			<tbody id="resultTable"></tbody>
		</table>
	</form>
	<p id="inputChecking"></p>
	</div>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.26.1/axios.min.js"></script>
	<script src="https://code.jquery.com/jquery-3.6.0.js"
		integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
		crossorigin="anonymous"></script>
	<script src="/product/js/product/update.js"></script>

</body>
</html>

