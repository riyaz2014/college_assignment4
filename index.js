
    let price = {
        "Men’s Cotton Full Sleeve Classic Round Neck Black T Shirt": 300,
        "Tshirts for Men|Full Sleeve Cowl Neck Tshirts|Men's Stylish Regular Fit" : 400,
        "Men's Round Neck Half Sleeve Picture Printed T-Shirt": 500,
        "Cotton Men's Round Neck Full Sleeve T Shirt for Men":600,
        "Men's Regular Fit T-Shirt":450,
        "Band Collar Men's T-Shirt(EBT325 & EBT325HS)":550
    }



function ValidateForm(){
    let shirt = document.getElementById('Shirt').value
    let tagline = document.getElementById('tagline').value
    let color = document.getElementById('Color').value
    let quantity = document.getElementById('quantity').value
    let date = document.getElementById('date').value
    let delivery = document.querySelector('input[name ="delivery"]:checked')
    let phone = document.getElementById('phone').value
    let email = document.getElementById('email').value
    let address = document.getElementById('address').value
    let submit = document.getElementById('submit')
    let message = document.getElementById('message')


    let currentDate = new Date()
    let enterDate = new Date(date)
    // console.log(currentDate.getMonth()+1)
    // console.log(enterDate.getMonth()+1)
    // console.log(currentDate.getFullYear() > enterDate.getFullYear())

    // console.log(currentDate.getTime()==enterDate.getTime())

    function DateValidation(){
        if(currentDate.getFullYear() > enterDate.getFullYear()){
            return true;
        }
        else if(currentDate.getFullYear() == enterDate.getFullYear()){
            if(currentDate.getMonth() > enterDate.getMonth()){
                return true;
            }
            else if (currentDate.getMonth() == enterDate.getMonth()){
                if(currentDate.getDate() > enterDate.getDate()){
                    return true;
                }
                else{
                    return false;
                }
            }
            else{
                return false;
            }
        }
        else{
            return false;
        }
        
    }

    console.log(DateValidation())

    let regx = /^([a-zA-Z0-9\._]+)@([a-zA-z0-9])+.([a-z]+)(.[a-z]+)?$/
    // console.log(address=="")
    // date.slice(5,7)
    // date.slice(8,10)

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
    else if(DateValidation()){
        messageString= messageString+"date should be greater or equal to current date"
        message.innerHTML = messageString + ""
        return false
    }
    else if(date.slice(0,4)<currentDate.getFullYear()){
        messageString= messageString+"date field,"
        message.innerHTML = messageString + " is empty"
        return false
    }
    else if(delivery == null){
        messageString= messageString+"delivery field,"
        message.innerHTML = messageString + " is empty"
        return false
    }
    else if(phone.length != 10 ){
        messageString = messageString+"phone number field"
        message.innerHTML = messageString+"length should be 10"
        return false
    }
    else if(!regx.test(email)){
        messageString = messageString+"email "
        message.innerHTML = messageString+"is not valid"
        return false
    }
    else if(address ==""){
        messageString= messageString+"address field,"
        message.innerHTML = messageString + " is empty"
        return false
    }
    else{
        message.innerHTML = "form is verified"
        createReciept();
    }
    
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
    let phone = document.getElementById('phone').value
    let email = document.getElementById('email').value
    let address = document.getElementById('address').value
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


    let phoneEle = document.createElement('div');
    phoneEle.id = 'reciept';
    phoneEle.innerHTML = `<span style="font-size:1.2rem; margin-bottom:1rem" class="shirt">Phone Number </span>: ${phone}`;
    container.appendChild(phoneEle);

    let emailEle = document.createElement('div');
    emailEle.id = 'reciept';
    emailEle.innerHTML = `<span style="font-size:1.2rem; margin-bottom:1rem" class="shirt">Email ID </span>: ${email}`;
    container.appendChild(emailEle);

    let addressEle = document.createElement('div');
    addressEle.id = 'reciept';
    addressEle.innerHTML = `<span style="font-size:1.2rem; margin-bottom:1rem" class="shirt">add </span>: ${address}`;
    container.appendChild(addressEle);

    let total = document.createElement('div');
    total.id = 'reciept';
    total.innerHTML = `<span style="font-size:1.2rem; margin-bottom:1rem" class="shirt"> Total</span>: ${price[shirt]*quantity}₹ `;
    container.appendChild(total);
    
    let button = document.createElement('button');
    button.onclick = printDiv;
    button.innerHTML = `Print Recipt`;
    print.appendChild(button);
}
