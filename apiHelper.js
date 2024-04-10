/**
 * 
 * @param {"sends stuff to console"} consoleOut 
 * sends stuff to console
 */
function test(consoleOut){
    console.log(consoleOut)
}
function login(Username,Password){
    onLogin = fetch("http://127.0.0.1:5500/login",
    {
        method: "POST",
        Headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "username":Username,
            "password":Password
        }).
        then((request) => {
            // document.cookie= ""
            console.log(request)
        })
    
    })
   
}

function logout(){

}

function addService(){

}

function addPassword(){

}

function getUsernames(){

}

function getPassword(){

}



// storing jwt tokens Use an authentication
//  gateway on the same domain, create an httponly cookie and
//   set it to same-site. Then handle the JWTs in the 
//   authentication gateway.