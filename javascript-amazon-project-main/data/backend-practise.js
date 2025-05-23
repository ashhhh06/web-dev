const xhr=new XMLHttpRequest();//the is a message to be sent

xhr.addEventListener('load',()=>{
    console.log(xhr.response)
});

xhr.open('GET', 'https://supersimplebackend.dev/products/first');
xhr.send();

xhr.response