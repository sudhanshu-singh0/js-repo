let temp1="34";
let temp2=null;
let temp3="kljk";
let temp4="3ee4";
let temp5="34";
let temp6=true;
let temp7=undefined;
let temp8="3.56";
let temp=[temp1,temp2,temp3,temp4,temp5,temp6,temp7,temp8]
for(let i=0;i<8;i++){
    console.log("after ",typeof(temp[i]),temp[i]);
    let x=Number(temp[i]);
    console.log("Before ",typeof(x), x)
}

// boolean coonversion
let t=[12,0,"sudha",0.121,1]
for(let i=0;i<5;i++){
    let x=Boolean(t[i]);
    console.log(x);
}

let s=[122,"123",false,true];
for(let i=0;i<s.length;i++){
    let x=String(s[i]);
    console.log(x,typeof x);
}

