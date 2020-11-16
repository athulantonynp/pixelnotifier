const notifier = require('node-notifier');
const axios=require("axios")
var open = require('open');


const BUY_NOW_STRING="BUY NOW"
const ADD_TO_CART="ADD TO CART"
const NOTIFY_ME="NOTIFY ME"

const URL='https://www.flipkart.com/google-pixel-4a-just-black-128-gb/p/itm023b9677aa45d'



async function getPage(){
    try{
        let result=await axios.get(URL)
        let stringHtml=result.data.toString()
        if(stringHtml.includes(BUY_NOW_STRING) || stringHtml.includes(ADD_TO_CART)){
            showSaleIsOnMessage()
        }
    }catch(e){

    }

    getPage()
}


function showSaleIsOnMessage(){
    notifier.notify({
        'remove': 'ALL' // to remove all group ID
      });
      notifier.notify({
        title: 'Hey',
        message: 'Pixel 4a Sale is on.Buy it',
        sound: true,
        wait: true
      });
      notifier.on('click', function (notifierObject, options, event) {
          console.log('click found')
        open(URL);
      })
    

}

getPage()