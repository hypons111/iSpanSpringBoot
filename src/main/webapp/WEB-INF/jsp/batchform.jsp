<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>

<body>
	<table border="1">
		<thead>
			<tr>
				<th>Type</th>
				<th>Stock</th>
				<th>Buy</th>
				<th>Sell</th>
				<th>Image</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><select id='typeValue' class='產品種類 type' name='type'>
						<option value=''></option>
						<option value='Stake'>Stake</option>
						<option value='Pork'>Pork</option>
						<option value='Seafood'>Seafood</option>
						<option value='new'>ADD A NEW TYPE</option>
				</select></td>
				<td><select id='stockEdit' class='產品存量 stock' name='stock'>
						<option value=''></option>
						<option value='+'>+</option>
						<option value='='>=</option>
						<option value='-'>-</option>
				</select> <input id='stockValue' type='text' class='產品存量' name='stock'
					value=""></td>
				<td><select id='costEdit' class='產品買價 cost' name='cost'>
						<option value=''></option>
						<option value='+'>+</option>
						<option value='='>=</option>
						<option value='-'>-</option>
				</select> <input id='costValue' type='text' class='產品買價' name='cost' value="">
					<p id="costUnit"></p></td>
				<td><select id='priceEdit' class='產品售價 price' name='price'>
						<option value=''></option>
						<option value='+'>+</option>
						<option value='='>=</option>
						<option value='-'>-</option>
				</select> <input id='priceValue' type='text' class='產品售價' name='price'
					value="">
					<p id="priceUnit"></p></td>
				<td><input type='file' class='產品圖片' name='image' /></td>
				<td><button id='submit'>Submit</button></td>
				<td><button>Cancel</button></td>
			</tr>
		</tbody>
	</table>
	<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
	<script src="/product/js/product/batch.js"></script>
</body>

</html>