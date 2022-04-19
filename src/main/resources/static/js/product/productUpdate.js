const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const targetID = urlParams.get('productid')
const PRODUCT_URL = "http://localhost:8080/product/productjson";
const PRODUCT_TYPE_URL = "http://localhost:8080/product/producttypejson";

let productRawData = []
let productTypeRawData = []
let oldProductName = ""

axios.get(PRODUCT_TYPE_URL)
	.then(response => {
		productTypeRawData = response.data
	})
	.catch(error => { console.log(error) })

axios.get(PRODUCT_URL)
	.then(response => {
		showData(getTargetProduct(response.data))
		process()
	})
	.catch(error => { console.log(error) })


function process() {
	const submitButton = document.getElementById("submitButton")
	submitButton.addEventListener("click", (event) => {
		event.preventDefault()
		axios.all([update(), uploadImage()])
			.then(axios.spread(function(acct, perms) {
		}))
	})
}


function update() {
/*
	const type = document.getElementById("producttype")
	const id = document.getElementById("productid")
	const name = document.getElementById("productname")
	const stock = document.getElementById("productstock")
	const buy = document.getElementById("productcost")
	const sell = document.getElementById("productprice")
	const description = document.getElementById("productdescription")
*/
	
	return axios.post('/product/save', {
		producttype: document.getElementById("producttype").value,
		productid: document.getElementById("productid").value,
		productname: document.getElementById("productname").value,
		productstock: document.getElementById("productstock").value,
		productcost: document.getElementById("productcost").value,
		productprice: document.getElementById("productprice").value,
		productdescription: "description",				//document.getElementById("productdescription").value,
		productimage: document.getElementById("productid").value + ".jpg"
	})
	.then(function (response) {
		console.log(response);
	})
	.catch(function (error) {
		console.log(error);
	});
}

function uploadImage() {
	const image = document.getElementById("productimage")
	console.log(image.value)
	let formData = new FormData(updateForm)
	formData.append('file', image.value)
			
	return axios({
		url: "/product/uploadimage",
		method: "post",
		data: formData,
		headers: { 'Content-Type': 'multipart/form-data' }
	})
}
			



///////////////////////////////////////////////////////////////////////////////////////

function getTargetProduct(data) {
	return data.find(product => product.productid == targetID)
}

function showData(data) {
	let contents = "<tr>"
	contents += "<td id='typeList' width='155px'>	<input id='producttype'		type='text' class='產品種類 typeInput'	name='type'	 value='" + data.producttype + "'></td>"
	contents += "<td id='id'>						<input id='productid'		type='text' class='產品編號 input'		name='id'	 value='" + data.productid + "' disabled ></td>"
	contents += "<td id='name'>						<input id='productname'		type='text' class='產品名稱 input'		name='name'	 value='" + data.productname + "'></td>"
	contents += "<td>								<input id='productstock'	type='text' class='產品存量 input'		name='stock' value='" + data.productstock + "'></td>"
	contents += "<td>								<input id='productcost'		type='text' class='產品買價 input'		name='cost'	 value='" + data.productcost + "'></td>"
	contents += "<td>								<input id='productprice'	type='text' class='產品售價 input'		name='price' value='" + data.productprice + "'></td>"
	contents += "<td>								<input id='productdescription'	type='text' class='產品介紹 input'	name='description' value='" + data.productdescription + "'></td>"
	contents += "<td id='imageTD'>					<input id='productimage' 				type='file'	class='產品圖片 input'		name='imageFile'/></td>"
	contents += "<td><button id='submitButton'>Submit</button></td>"
	contents += "<td><button>Cancel</button></td>"
	resultTable.innerHTML = contents
	oldProductName = data.productname
}





