let re;
let str;

//Literal Character
re = /hello/i; //matches 
re = /hello/; // do not match 
re = /hell/i; // match 
re = /lo w/;//match 
re = /low/;// do not match

//Meta Characters
re  = /^hello/; // ^ means must start with
re = /hello$/; // $ Must end with
re = /World$/;

re = /^hello$/; //Must start and end with
re = /^h.llo$/; //Matches any one character including space
re = /h.llo/;//Matches any one character including space if space or any character not present does not match like {hllo} doesn't match with {h.llo}

re = /h*llo/;//Matches any one character including space if space or any character not present it match like {hllo} match with {h*llo}

re  = /he?ll?o/; // ? represent optional

re = /hello?/; // escape everithing after question mark so {hello world} matches with  {hello?}


str = "Hello world";
str = "Again hllo World";
str = "hllo";
str = "hello world";
reTest(re,str);
function reTest(re,str){
    if(re.test(str)){
        console.log(`{${str}} matches with  {${re.source}}`);
    }
    else {
        console.log(`{${str}} doesn't match with {${re.source}}`);
    }
}