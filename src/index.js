import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';


ReactDOM.render(
 <App />,document.getElementById('root')
);
for(var i=0;i<document.querySelectorAll(".btn").length;++i){

    document.querySelectorAll(".btn")[i].addEventListener("click",function (){
        var s= document.querySelector("p").innerHTML;
        var key=this.name;
        
        var arr=['+','-','*','/']
        
        switch (key) {
            case 'C':
                document.querySelector("p").innerHTML="";
                break;
            case 'X':
                if(s.length===1){
                    document.querySelector("p").innerHTML="";
                }
                var s1="";
                    for(var i=0;i<s.length-1;i++){
                        s1+=s[i];
                    }
                    document.querySelector("p").innerHTML=s1;
                break;
            case '=':
                
                document.querySelector("p").innerHTML=eval(s);
                break;
        
            default:
                if((key==='.')&& s.length===0){
  
                    document.querySelector("p").innerHTML="0"+key;
                }
                else if((key==='00')&& s.length===0){
  
                    document.querySelector("p").innerHTML="0";
                }
                else if(arr.includes(key)&& s.length===0){
                    document.querySelector("p").innerHTML="";
                }
                else if(arr.includes(s[s.length-1]) && arr.includes(key)){
                    
                    var s1="";
                    for(var i=0;i<s.length-1;i++){
                        s1+=s[i];
                    }
                    document.querySelector("p").innerHTML=s1+key;
                }
                else{
  
                    document.querySelector("p").innerHTML=s+key;
                }
                break;
        }
        
    });
  }


