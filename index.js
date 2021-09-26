
function ValidateForm(){
    let shirt = document.getElementById('Shirt').value
    let tagline = document.getElementById('tagline').value
    let color = document.getElementById('Color').value
    let quantity = document.getElementById('quantity').value
    let date = document.getElementById('date').value
    let delivery = document.querySelector('input[name ="delivery"]:checked')
    let submit = document.getElementById('submit')
    let message = document.getElementById('message')

    // console.log(shirt)
    // console.log(tagline)
    // console.log(color)
    // console.log(quantity)
    // console.log(date)
    // console.log(submit)
    // console.log(delivery)
    message.innerHTML = ''

    let messageString = ''
    if(shirt == 'select'){
        messageString= messageString+"shirt field,"
        message.innerHTML = messageString + " is empty"
        return false
    }
    else if(tagline == 'select'){
        messageString= messageString+"tagline field,"
        message.innerHTML = messageString + " is empty"
        return false
    }
    else if(color == 'select'){
        messageString= messageString+"color field,"
        message.innerHTML = messageString + " is empty"
        return false
    }
    else if(quantity == ''){
        messageString= messageString+"quantity field,"
        message.innerHTML = messageString + " is empty"
        return false
    }
    else if(date == ''){
        messageString= messageString+"date field,"
        message.innerHTML = messageString + " is empty"
        return false
    }
    else if(date == ''){
        messageString= messageString+"date field,"
        message.innerHTML = messageString + " is empty"
        return false
    }
    else if(delivery == null){
        messageString= messageString+"delivery field,"
        message.innerHTML = messageString + " is empty"
        return false
    }
    else{
        message.innerHTML = "form is verified"
        return true
    }
    
}

