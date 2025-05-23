import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import { loadProducts,loadProductsFetch} from '../data/products.js';
//import '../data/cart-class.js';
//import '../data/backend-practise.js'; 



new Promise((resolve)=>{
    //console.log('start promise')
    loadProducts(()=>{
        //console.log('finished loading)
        resolve(value1);
    })
}).then((value)=>{
    console.log(value); 
    //console.log('next step');
    renderOrderSummary();
    renderPaymentSummary();

})
     


/*

Promise.all([
    new Promise((resolve)=>{
    
    loadProducts(()=>{
        resolve(value1);
    })


    }),


    new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
            

        });
    })



]).then((value)=>{
    console.log(value);
    renderOrderSummary();
    renderPaymentSummary(); 
})

o/p ==== [value1,undefined]







new Promise((resolve)=>{
    
    loadProducts(()=>{
        resolve();
    })


}).then(()=>{
    return new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
            

        });
    })
}).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
})
*/

//using callback
/*
loadProducts(()=>{
    renderOrderSummary();
    renderPaymentSummary();

});

*/



//using fetch

/*
Promise.all([
    loadProductsFetch(),  //can help us get promise directly


    new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
            

        });
    })



]).then((value)=>{
    console.log(value);
    renderOrderSummary();
    renderPaymentSummary(); 
})

*/




/*

async function loadPage(){ // async makes the function return promise
    try{

    //throw 'error1';// for synchronous use throw


        await loadProductsFetch(); //await lets us write asynchronous code like normal code
    //instead of using .then() wait to get the response and then complete the next line 
    //we can only use await when inside async function

    const value=await new Promise((resolve,reject)=>{
        //reject is a function which lets us generate error in the future
        //throw 'error2'
        loadCart(()=>{
            //throw does not works in the future
            reject('error3');
            resolve('value3');
        });
    })

    //return 'value2' // =this is equals tto resolve (value2)
    
    
    } catch(error){
        console.log('unexpected error');
    }

    renderOrderSummary();
    renderPaymentSummary(); 

}

loadPage().then((value)=>{
    console.log('next step');
    console.log(value);
})
    

*/