function SaveItem() {
var name = document.forms.ShoppingList.name.value; var data = document.forms.ShoppingList.data.value; localStorage.setItem(name, data);
doShowAll();} function ModifyItem() {
var name1 = document.forms.ShoppingList.name.value; var data1 = document.forms.ShoppingList.data.value;
if (localStorage.getItem(name1) !=null)
{
localStorage.setItem(name1,data1); document.forms.ShoppingList.data.value = localStorage.getItem(name1);
}
doShowAll();}

function RemoveItem() {
var name = document.forms.ShoppingList.name.value; document.forms.ShoppingList.data.value = localStorage.removeItem(name); doShowAll();}

function ClearAll() { localStorage.clear(); doShowAll();}

function doShowAll() { if (CheckBrowser()) {
var key = "";
var list = "<tr><th>Item</th><th>Value</th></tr>\n"; var i = 0;
for (i = 0; i <= localStorage.length-1; i++) { key = localStorage.key(i);
list += "<tr><td>" + key + "</td>\n<td>"
 
+ localStorage.getItem(key) + "</td></tr>\n";
}
if (list == "<tr><th>Item</th><th>Value</th></tr>\n") {
list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
}
document.getElementById('list').innerHTML = list;
} else {
alert('Cannot save shopping list as your browser does not support HTML 5');
}
}

function CheckBrowser() {
if ('localStorage' in window && window['localStorage'] !== null) {
// we can use localStorage object to store data return true;
} else {
return false;
}
}
var captcha;
function generate() { document.getElementById("submit").value = ""; captcha = document.getElementById("image"); var uniquechar = "";
const randomchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for (let i = 1; i < 5; i++) { uniquechar += randomchar.charAt(
Math.random() * randomchar.length)
}
captcha.innerHTML = uniquechar;
}

function printmsg() {
const usr_input = document
.getElementById("submit").value;
if (usr_input == captcha.innerHTML) { var s = document.getElementById("key")
.innerHTML = "Matched"; generate();
}
else {
var s = document.getElementById("key")
.innerHTML = "not Matched"; generate();
}
}
 
