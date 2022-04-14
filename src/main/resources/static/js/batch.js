    const date = new Date()
    const typeInput = document.querySelector("#typeValue")
    const stockInput = document.querySelector("#stockValue")
    const stockEdit = document.querySelector("#stockEdit")
    const costInput = document.querySelector("#costValue")
    const costEdit = document.querySelector("#costEdit")
    const costUnit = document.querySelector("#costUnit")
    const priceInput = document.querySelector("#priceValue")
    const priceEdit = document.querySelector("#priceEdit")
    const priceUnit = document.querySelector("#priceUnit")
    const submit = document.querySelector("#submit")

alert("this is batch result page")

    submit.addEventListener('click', event => {
        event.preventDefault()
        trimValues()
        checkValues()
        submitValues()
    })

    costEdit.addEventListener("change", (event) => {
        setUnitCharacter(event.target, costUnit)
    })

    priceEdit.addEventListener("change", (event) => {
        setUnitCharacter(event.target, priceUnit)
    })

    function setUnitCharacter(editTarget, unitTarget) {
        if (editTarget.value === "+" || editTarget.value === "-") {
            unitTarget.innerText = "%"
        } else if (editTarget.value === "=") {
            unitTarget.innerText = "$"
        } else {
            unitTarget.innerText = ""
        }
    }

    function trimValues() {
        console.log("parseValues")
        document.querySelectorAll("input").forEach(input => {
            input.value = input.value.trim()
        })
    }

    function checkValues() {
        console.log("checkValues")
        document.querySelectorAll("input").forEach(input => {
            input.value = input.value.trim()
        })
    }

    function submitValues() {
        console.log("submitValues")

        if (typeInput.value !== "") {
            console.log(typeInput.value)
        }
        if (stockInput.value !== "") {
            console.log(stockEdit.value)
            console.log(stockInput.value)
        }
        if (costInput.value !== "") {
            console.log(costEdit.value)
            console.log(costInput.value)
        }
        if (priceValue.value !== "") {
            console.log(priceEdit.value)
            console.log(priceInput.value)
        }
    }