var _navigator = {};
for (var i in navigator) _navigator[i] = navigator[i];
document.body.innerText=JSON.stringify(_navigator)
