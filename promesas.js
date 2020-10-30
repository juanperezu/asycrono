var request = new Request('https://dog.ceo/api/breeds/image/random', {
method: 'GET',
mode: 'cors',
cache : 'no-store',
headers: {
'Content-Type': 'application/x-www-form-urlencoded'
}
});

fetch(request)
.then(function(response) {
return response.json();
})
.then(function(data) {
console.log(data);
})
.catch(function(err) {
console.error(err);
});
var request = new Request('https://dog.ceo/api/breeds/image/random', {
method: 'GET',
mode: 'cors',
cache : 'no-store',
headers: {
'Content-Type': 'application/x-www-form-urlencoded'
}
});
fetch(request)
.then(function(response) {
return response.json();
})
.then(function(data) {
console.log(data);
})
.catch(function(err) {
console.error(err);
});