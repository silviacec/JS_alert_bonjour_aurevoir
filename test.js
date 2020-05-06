// function saluer(nom1, nom2) {
//   alert(`Bonjour ${nom1} et ${nom2}!`);   AVEC DES ACCENTS GRAVES A LA PLACE DES GUILLEMETS SINON $ NE MARCHE PAS
// }
// document.querySelector('button').addEventListener('click', function(){
//   saluer('lynda', 'Charlotte');
// })

function direBonjour(nom1, nom2, nom3) {
  alert(`Bonjour ${nom1} et ${nom2} et ${nom3} !`);
}
document.querySelector('.hello').addEventListener('click', function(){
  direBonjour('Silvia', 'Paloma', 'Alix');
})
function direAurevoir(nom1, nom2, nom3) {
  alert(`Au revoir ${nom1} et ${nom2} et ${nom3}!`);
}
document.querySelector('.goodbye').addEventListener('click', function(){
  direAurevoir('Silvia', 'Paloma', 'Alix');
})
