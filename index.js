function cre(tag,attn,attv,content){
    let fin=document.createElement(tag);
    fin.setAttribute(attn,attv);
    fin.innerHTML=content;
    return fin   
}
function linebreakers(tag){
    let bre=document.createElement(tag)
    return bre
}

function inputele(tag,attn,attv,attn1,attv1,attn2,attv2,attn3,attv3,attn4,attv4){
    let ele=document.createElement(tag);
        ele.setAttribute(attn,attv);
        ele.setAttribute(attn1,attv1);
        ele.setAttribute(attn2,attv2);
        ele.setAttribute(attn3,attv3);
        ele.setAttribute(attn4,attv4);
        return ele;
}


var firstname=cre("label","for","firstname","Firstname");
var linebreaker=linebreakers("br");
var inputfirstname=inputele("input","type","text","id","firstname");
var linebreaker1=linebreakers("br");

var Middlename=cre("label","for","middlename","Middlename");
var linebreaker2=linebreakers("br");
var inputmiddlename=inputele("input","type","text","id","middlename");
var linebreaker3=linebreakers("br");

var lastname=cre("label","for","mail","Mail");
var linebreaker4=linebreakers("br");
var inputlastname=inputele("input","type","text","id","mail");
var linebreake5=linebreakers("br");

var email=cre("label","for","lastname","lastname");
var linebreaker6=linebreakers("br");
var inputmail=inputele("input","type","text","id","lastname");
var linebreake7=linebreakers("br");

var state=cre("label","for","state","State");
var linebreaker8=linebreakers("br");
var inputstate=inputele("input","type","text","id","state");
var linebreake9=linebreakers("br");

document.body.append(firstname,linebreaker,inputfirstname,linebreaker1,
    Middlename,linebreaker2,inputmiddlename,linebreaker3,lastname,linebreaker4,inputlastname,
    linebreake5,email,linebreaker6,inputmail,linebreake7,state,linebreaker8,inputstate,linebreake9)