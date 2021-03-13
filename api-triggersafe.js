$(document).click(function(){
 idsafe = new Array();
    idsafe[0]='3435246800074833531';
    idsafe[1]='3435246800074833531';
    idsafe[2]='3435246800074833531';
    idsafe[3]='3435246800074833531';
var getrandomlink = Math.round(Math.random() * 3);
var geturl ="https://www.blogger.com/feeds/" + idsafe[getrandomlink] + "/posts/default/-/News?alt=json-in-script&max-results=150&callback=showurl" ;
});
