const BASE_URL = "http://localhost:8080/product/productjson"
const batchButton = document.querySelector('#batchButton')
const batchHiddenInput = document.querySelector('#batchHiddenInput')
const resultTable = document.querySelector("#resultTable")
const id = document.querySelector('#id')
const columnSearchs = document.querySelectorAll('.columnSearch')
const columnSearchInputs = document.querySelectorAll('.columnSearchInput')
const sorts = document.querySelectorAll('#sort')
let currentData = []
let rawData = ""
let sortStates = "ASC"


// 取得 json
axios
	.get(BASE_URL)
	.then(response => {
		return new Promise(resolve => {
			resolve(response.data)
			rawData = response.data
		})
	})
	.then(rawData => {
		showData(rawData)
		addSortEventListeners()
		addSearchEventListeners()
		//addDeleteButtonEventListener()
	})
	.catch(error => console.log(error));


function addSortEventListeners() {
	// 安裝排序 listener
	sorts.forEach(sort => {
		sort.addEventListener('click', (event) => {
			event.preventDefault()
			let attribute = event.target.classList[0]
			if (sortStates === "ASC") {
				currentData.sort((a, b) => {
					if (a[attribute] < b[attribute]) { return -1 }
					if (a[attribute] > b[attribute]) { return 1 }
					return 0
				})
				sortStates = "DESC"
			} else {
				currentData.sort((a, b) => {
					if (a[attribute] < b[attribute]) { return 1 }
					if (a[attribute] > b[attribute]) { return -1 }
					return 0
				})
				sortStates = "ASC"
			}
			showData(currentData)
		})
	})
}

function addSearchEventListeners() {
	// 安裝搜尋 listener
	columnSearchInputs.forEach(columnSearchInput => {
		columnSearchInput.addEventListener("keyup", (event) => {
			showData(ultraFuckingSearch())
		})
	})
}

//show all data button listener
document.querySelector('#showAll').addEventListener('click', () => {
	showData(rawData)
	columnSearchInputs.forEach(columnSearchInput => {
		columnSearchInput.value = ""
	})
})

// show data
function showData(data) {
	currentData = []
	currentData.push(...data)
	document.querySelector("#totalNum").innerText = data.length
	contents = ""
	for (let i = 0; i < data.length; i++) {
		contents += "<tr><td>" + (i + 1) + "</td>"
		contents += "<td>" + data[i].producttype + "</td>"
		contents += "<td>" + data[i].productid + "</td>"
		contents += "<td>" + data[i].productname + "</td>"
		contents += "<td>" + data[i].productstock + "</td>"
		contents += "<td>" + data[i].productcost + "</td>"
		contents += "<td>" + data[i].productprice + "</td>"
		contents += "<td><img src='/product/images/product/" + data[i].productimage + "?" + Math.random() + "' width='50px'></td>"
		contents += "<td><a href=updateform?systemid=" + data[i].systemid + "><button>Edit</button></a></td>"
		contents += "<td><a href=delete?systemid=" + data[i].systemid + "><button id='deleteButton'data-productid='" + data[i].productid + "' >Delete</button></a></td></tr>"
	}
	resultTable.innerHTML = contents
}

function ultraFuckingSearch() {
	let tempData = rawData
	const KEY = ["", "productid", "", "productstock", "productcost", "productprice"]
	for (let k = 0; k < columnSearchInputs.length; k++) {

		if (columnSearchInputs[k].value !== "") {
			if (k === 0) {
				tempData = tempData.filter(product => product.producttype.toLowerCase().includes(columnSearchInputs[0].value))
			} else if (k === 2) {
				tempData = tempData.filter(product => product.productname.toLowerCase().includes(columnSearchInputs[2].value.toLowerCase()))
			} else {
				if (columnSearchInputs[k].value.includes("<")) {
					tempData = tempData.filter(product => product[KEY[k]] < Number(columnSearchInputs[k].value.slice(1)))
				} else if (columnSearchInputs[k].value.includes(">")) {
					tempData = tempData.filter(product => product[KEY[k]] > Number(columnSearchInputs[k].value.slice(1)))
				} else {
					tempData = tempData.filter(product => product[KEY[k]] == Number(columnSearchInputs[k].value))
				}
			}
		}
	}
	return tempData
}

batchButton.addEventListener("click", (event) => {
	batchHiddenInput.value = getSearchList()
})

function getSearchList() {
	const idList = []
	for (let i = 0; i < resultTable.children.length; i++) {
		idList.push(document.querySelector("#resultTable").children[i].children[2].innerText)
	}
	return idList
}




	function addDeleteButtonEventListener() {
		resultTable.addEventListener("click", (event) => {
			const rows = document.querySelectorAll("#deleteButton")	
			for(let i=0; i<rows.length; i++) {
				if(rows[i].dataset.productid === event.target.dataset.productid) {
					
				}
			}
		})
	}

