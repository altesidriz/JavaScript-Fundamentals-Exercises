function regexExp(){
    //~~~~~~~~~~~~~~~~~~~~~~~~~Matching Rules~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    //  \[0-9]+ maches non empty sequence of digits/catches al the numbers from 0-9; /g
    //  \[A-Z][a-z]* matches a capital + small letters; /g
    //  \w cathes all the words characters + _ ; /g
    //  \W catches all non-word characters; /g
    //  \s catches all the white spaces; /g ->>>> global check regex101.com
    //  \S catches all but white spaces;
    //  \d catches all digits;
    //  \D cathces all but digits;

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~Quantifiers~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // \[A-Z][a-z]+(greedy) <---> \[A-Z][a-z]+(lazy)  , [A-Z][a-z]*

    //~~~~~~~~~~~~~~~~~~~~~~~~~RegExp in JS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    /* two ways of declaration 
        1. let regex = /~~~~~ your regex goes here~~~~/theFlag;   example let rExp = /\d{4}-\d{2}/g;
        2. using constructor: let regex = new RexExp('~~~~your regex goes here', 'theFlag');  
    */
   // use  regex.test(someParam) : to check if regex=someParam is true or false;
   // use text.match(regex) : to return an array of matches between regex<===>someParam;
   //     regex.exec(text) -  i think same as match()

   let text = `Altes is trying replace all, Altes can do it?`;

   let pattern = /[A-Z][a-z]+/g;
   //let newText = text.replaceAll(/Altes/g,'Dimitar');
   let reggedText = text.replace(pattern,'Pesho')

   console.log(reggedText);
    
}
regexExp()
