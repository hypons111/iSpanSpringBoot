const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const targetID = urlParams.get('productid')
const PRODUCT_URL = "http://localhost:8080/product/productjson";
const PRODUCT_TYPE_URL = "http://localhost:8080/product/producttypejson";
const type = document.querySelector("#producttype")

let productRawData = []
let productTypeRawData = []
let oldProductName = ""

axios.get(PRODUCT_TYPE_URL)
	.then(response => {
		productTypeRawData = response.data
		showPullDownList()
	})
	.catch(error => { console.log(error) })

axios.get(PRODUCT_URL)
	.then(response => {
		//showData(getTargetProduct(response.data))
		setID()
		addEventListeners(response.data)
	})
	.catch(error => { console.log(error) })

function getTargetProduct(data) {
	return data.find(product => product.productid == targetID)
}


// 產品種類輸入變成 pull down menu
function showPullDownList() {
	let typeContent = "	<select id='producttype' class='type' name='type'>"
	for (let i = 0; i < productTypeRawData.length; i++) {
		typeContent += `<option value='${productTypeRawData[i].producttypename}'>${productTypeRawData[i].producttypename}</option>`
	}
	typeContent += "<option value='newProductType'>新增產品種類</option></select>"
	typeList.innerHTML = typeContent
}



function addEventListeners(data) {
	const inputs = document.querySelectorAll("table .input")
	const typeList = document.querySelector("#typeList")
	const submitButton = document.getElementById("submitButton")
	const inputChecking = document.getElementById("inputChecking")


	// 檢查重複產品名稱
	document.querySelector("#name input").addEventListener("change", (event) => {
		for (let i = 0; i < data.length; i++) {
			if (data[i].productname.toLowerCase() == event.target.value.trim().toLowerCase()) {
				alert("已有同名稱產品")
				event.target.value = oldProductName
				i = data.length
			}
		}
	})

	// 判斷是否需要新增產品種類
	typeList.addEventListener('click', event => {
		if (event.target.value === "newProductType") {
			event.target.parentElement.innerHTML = `<input id="producttype" class="input" type="text" name="type" placeholder="輸入產品種類">`
		}
	})

	// 檢查輸入資料
	submitButton.addEventListener("click", (event) => {
		event.preventDefault()
		inputChecking.innerHTML = ""
		let switcher = "on"

		for (let i = 0; i < inputs.length - 1; i++) {

			// 刪除前後空白
			inputs[i].value = inputs[i].value.trim()

			// 檢查空白輸入
			if (inputs[i].value === "" ) {
				switcher = "off"
				inputChecking.innerHTML += "請輸入" + inputs[i].classList[0] + "<br>"
			}

			// 檢查 stock 輸入小數
			if (i === 1 && inputs[i].value.match(/\./)) {
				switcher = "off"
				inputChecking.innerHTML += inputs[i].classList[0] + "只可輸入整數" + "<br>"
			}

			// 檢查 stock cost price 輸入非數字
			if (i >= 1 && i <= 3) {
				if (inputs[i].value.match(/[\`\~\!\@\#\$\%\^\&\*\(\)\_\+\-\=\{\}\[\]\;\:\'\"\<\>\?\,\\]/) ||
					inputs[i].value.match(/[\u4E00-\u9FFF]/) ||
					inputs[i].value.match(/[a-zA-Z]/)) {
					switcher = "off"
					inputChecking.innerHTML += inputs[i].classList[0] + "只可輸入數字" + "<br>"
				}
			}

			// 檢查 description 輸入數字超過上限
			if (i === 4 && inputs[i].value.length > 500) {
				inputChecking.innerHTML += inputs[i].classList[0] + "不可超過500個字" + "<br>"
			}
		}

		// 送出請求
		if (switcher === "on") {
			sendRequests()
		}
	})
}



function sendRequests() {
	document.addEventListener("click", (event) => {
		event.preventDefault()
		axios.all([insert(), uploadImage()])
			.then(axios.spread(function(acct, perms) {
			}))
	})
}

// 更新資料
function insert() {
	return axios.post('/product/save', {
		productid: document.getElementById("productid").value,
		producttype: document.getElementById("producttype").value,
		productname: document.getElementById("productname").value,
		productstock: document.getElementById("productstock").value,
		productcost: document.getElementById("productcost").value,
		productprice: document.getElementById("productprice").value,
		productdescription: document.getElementById("productdescription").value,
		productimage: document.getElementById("productid").value + ".jpg"
	})
		.then(function(response) {
			location.href = "/product/productindex"
		})
		.catch(function(error) {
			console.log(error)
		});
}

// 更新圖片
function uploadImage() {
	let formData = new FormData(insertForm)
	formData.append('file', document.getElementById("productimage").value)
	formData.append('imageName', document.getElementById("productid").value + ".jpg")
	return axios({
		url: "/product/uploadimage",
		method: "post",
		data: formData,
		headers: { 'Content-Type': 'multipart/form-data' }
	})
		.then(function(response) { })
		.catch(function(error) {
			console.log(error)
		});
}

function setID() {
	const idInput = document.getElementById("productid")
	idInput.value = idGenerator()
}

function idGenerator() {
	str = ""
	let d = new Date();
	const arr = [
		d.getFullYear().toString().substring(2, 4),
		d.getMonth() + 1,
		d.getDate(),
		d.getHours(),
		d.getMinutes(),
		d.getSeconds()]
	for (let i = 0; i < 6; i++) {
		if (arr[i].toString().length < 2) {
			str += "0" + arr[i].toString()
		} else {
			str += arr[i].toString()
		}
	}
	return str
}