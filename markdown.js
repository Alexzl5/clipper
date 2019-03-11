var link = process.env.POPCLIP_TEXT;
// var link = "https://alexzl5.github.io/use-custom-domain-with-hexo/";

function getTitle() {
  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  var xhr = new XMLHttpRequest();
  var reg = /(?<=\<h1.*\>).*(?=\<\/h1\>)/g;
  var reg2 = /(?<=\<a.*\>).*(?=\<\/a\>)/g;
  var reg3 = /(?<=\<h2.*\>).*(?=\<\/h2\>)/g;
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var rst = this.responseText
      //console.log(this.responseText)
      if (rst.match(reg)) {
        var str = regMatch(rst,reg);
        if (str.match(reg2)) {
          var str2 = regMatch(str,reg2);
          str = str2;
        }
      } else if(rst.match(reg3)){
        var str3 = regMatch(rst,reg3);
        if (str3.match(reg2)) {
          var str4 = regMatch(str3,reg2);
          str = str4;
        }
      }else{
        str ="Error"
      }

      var reference = "[" + str + "](" + link + ")";
      console.log(reference);
    }
  };
  xhr.open("GET", link, true);
  xhr.send();
}
getTitle();

function regMatch(str,reg){
  return JSON.stringify(str.match(reg))
  .replace('["', "")
  .replace('"]', "")
}