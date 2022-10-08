document.getElementById("btn").onclick = action;

function action(){

    var count = 0;

    for(let i of user_input.value){
        if(isVowel(i))
            count++;
    }

    window.alert("There are "+count+" vowels!");
}

function isVowel(e){
    return ['a','e','i','o','u'].indexOf(e.toLowerCase())  != -1;
}