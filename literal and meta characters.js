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

// Character Set Using Brackets []

re = /h[eai]llo/; // must be one of them inside brackets and only one at a time
re = /[HA]ello/; // start with upper case H and A
re = /[^ha]ello/; // Anything except those inside brackets 
re = /^[ha]ello/; // Must start with h or a 

re = /[A-Za-z]ello/; // range 
re = /[0-9]ello/; // number range
re = /[^0-9]ello/; // anything except digit at first
re = /^[0-9]ello/; //must need to start with digit from 0 to 9

re  = /[0-9][0-9][0-9]ello/;//must need to start with 3 digit from 0 to 9

//Braces {} - Quantifier
re = /el{1}lloo/; // l need to occur must at least 1 time after first e
re = /el{0,3}/; // Range can use
re = /el{2,}/; // at least 2 times

//Parentheses () - Grouping 
re = /[0-9]{3}/; ///[0-9][0-9][0-9]ello/

re = /^([0-9]xy){4}/;

//Bangladeshi phone number
// total 11 digits
re = /^01[0-9]{9}$/;
re = /^\+8801[0-9]{9}$/;
//str = "2xy1xy3xy3xy";
str = "+8801788888888";



reTest(re,str);
function reTest(re,str){
    if(re.test(str)){
        console.log(`{${str}} matches with  {${re.source}}`);
    }
    else {
        console.log(`{${str}} doesn't match with {${re.source}}`);
    }
}