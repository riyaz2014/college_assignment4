
    let price = {
        "Men’s Cotton Full Sleeve Classic Round Neck Black T Shirt": 300,
        "Tshirts for Men|Full Sleeve Cowl Neck Tshirts|Men's Stylish Regular Fit" : 400,
        "Men's Round Neck Half Sleeve Picture Printed T-Shirt": 500,
        "Cotton Men's Round Neck Full Sleeve T Shirt for Men":600,
        "Men's Regular Fit T-Shirt":450,
        "Band Collar Men's T-Shirt(EBT325 & EBT325HS)":550
    }


function printDiv() {
    let container = document.querySelector(".container")
    var a = window.open('', '', 'height=500, width=500');
    a.document.write('<html>');
    a.document.write('<body > <h1>Reciept </h1><br>');
    a.document.write(container.innerHTML);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
}

function createReciept(){
    let container = document.querySelector(".container")
    let print = document.querySelector(".print")
    let shirt = document.getElementById('Shirt').value
    let tagline = document.getElementById('tagline').value
    let color = document.getElementById('Color').value
    let quantity = document.getElementById('quantity').value
    let date = document.getElementById('date').value
    let delivery = document.querySelector('input[name ="delivery"]:checked')

    container.innerHTML = ""

    let shirtelement = document.createElement('div');
    shirtelement.id = 'reciept';
    shirtelement.innerHTML = `<span style="font-size:1.2rem; margin-bottom:1rem" class="shirt">Shirt </span>: ${shirt} `;
    container.appendChild(shirtelement);

    let taglineEle = document.createElement('div');
    taglineEle.id = 'reciept';
    taglineEle.innerHTML = `<span style="font-size:1.2rem; margin-bottom:1rem;" class="shirt">Tagline </span>: ${tagline}`;
    container.appendChild(taglineEle);

    let colorEle = document.createElement('div');
    colorEle.id = 'reciept';
    colorEle.innerHTML = `<span style="font-size:1.2rem; margin-bottom:1rem" class="shirt">Color </span>: ${color}`;
    container.appendChild(colorEle);

    let quantityEle = document.createElement('div');
    quantityEle.id = 'reciept';
    quantityEle.innerHTML = `<span style="font-size:1.2rem; margin-bottom:1rem" class="shirt">Quantity </span>: ${quantity}`;
    container.appendChild(quantityEle);

    let dateEle = document.createElement('div');
    dateEle.id = 'reciept';
    dateEle.innerHTML = `<span style="font-size:1.2rem; margin-bottom:1rem" class="shirt">Date </span>: ${date}`;
    container.appendChild(dateEle);

    let total = document.createElement('div');
    total.id = 'reciept';
    total.innerHTML = `<span style="font-size:1.2rem; margin-bottom:1rem" class="shirt"> Total</span>: ${price[shirt]*quantity}₹ `;
    container.appendChild(total);
    
    let button = document.createElement('button');
    button.onclick = printDiv;
    button.innerHTML = `Print Recipt`;
    print.appendChild(button);
}

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
        createReciept();
    }
    
}


