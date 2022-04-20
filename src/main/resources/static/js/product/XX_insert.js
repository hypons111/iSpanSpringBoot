const form = document.querySelector("#insert")
const id = document.querySelector("#id")
const name = document.querySelector("#name")
const supplier = document.querySelector("#supplier")
const typeList = document.querySelector("#typeList")
const submit = document.querySelector("#submit")
const inputs = document.querySelectorAll(".input")
const submitResult = document.querySelector("#submitResult")
const PRODUCT_URL = "http://localhost:8080/product/productjson"
const PRODUCT_TYPE_URL = "http://localhost:8080/product/producttypejson"
let productRawData = []
let productTypeRawData = []

axios.get(PRODUCT_TYPE_URL)
	.then(response => {
		productTypeRawData = response.data
		setTypePullDownMenu(productTypeRawData) // 顯示產品種類 pull down menu
	})
	.catch(error => { console.log(error) })

function setTypePullDownMenu(data) {
	let contents = ""
	data.forEach(type => {
		contents += `<option value='${type.producttypename}'>${type.producttypename}</option>`
	})
		contents += `<option value='newProductType'>新增產品種類</option>`
	typeList.innerHTML = contents
}

	typeInput.addEventListener("click", event => {
		let typeContent = "	<select id='typeList' class='type' name='type'>"
		for (let j = 0; j < productTypeRawData.length; j++) {
			typeContent += `<option value='${productTypeRawData[j].producttypename}'>${productTypeRawData[j].producttypename}</option>`
		}
		typeContent += "<option value='newProductType'>新增產品種類</option></select>"
		typeList.innerHTML = typeContent
	})

axios
	.get(PRODUCT_URL)
	.then((response) => {
		productRawData = response.data
		addEventListeners(response.data)
	})
	.catch((err) => console.log(err));











function addEventListeners(data) {
	const typeList = document.querySelector("#typeList")

	// 檢查重複產品名稱
	name.addEventListener("change", () => {
		for (let i = 0; i < productRawData.length; i++) {
			if (productRawData[i].productname.toLowerCase() === name.value.trim().toLowerCase()) {
				alert("已有同名稱產品")
				name.value = ""
				i = productRawData.length
			}
		}
	})
	
	// 判斷是否需要新增產品種類
	typeList.addEventListener('click', event => {
		if (event.target.value === "newProductType") {
			event.target.parentElement.innerHTML = `<input id="producttype" class="input" type="text" name="type" placeholder="輸入產品種類">`
		}
	})
	
	form.addEventListener("submit", (event) => {
		let switcher = "on"
		submitResult.innerText = ""
	
		inputs.forEach(input => {
			if (input.value.trim() == "") {
				switcher = "off"
				submitResult.innerHTML += "請輸入" + input.previousElementSibling.innerText + "<br>"
				event.preventDefault()
			}
		})
	
		for (let i = 2; i < inputs.length - 1; i++) {
			if (i === 2) {
				if (inputs[i].value.match(/\./)) {
					switcher = "off"
					event.preventDefault()
					submitResult.innerHTML += inputs[i].previousElementSibling.innerText + "只可輸入整數" + "<br>"
				}
			}
			if (inputs[i].value.match(/[\`\~\!\@\#\$\%\^\&\*\(\)\_\+\-\=\{\}\[\]\;\:\'\"\<\>\?\,\\]/) ||
				inputs[i].value.match(/[\u4E00-\u9FFF]/) ||
				inputs[i].value.match(/[a-zA-Z]/)) {
				switcher = "off"
				event.preventDefault()
				submitResult.innerHTML += inputs[i].previousElementSibling.innerText + "只可輸入數字" + "<br>"
			}
			if (inputs[i].value.match("..")) {
				inputs[i].value = inputs[i].value.replace("..", ".")
			}
		}
		if (switcher === "on") {
	
	
			inputs.forEach(input => {
				console.log(input.value)
			})
	
			event.currentTarget.submit()
		}
	})
}