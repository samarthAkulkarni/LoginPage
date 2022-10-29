// responsive hamburger start
var ham = document.getElementById('ham')

ham.addEventListener('click', function(){
  var dropdown = document.getElementById('drop')
  var hid = dropdown.classList[2]
  if (hid == 'hidden'){
    dropdown.classList.remove('hidden')
    
  }
  else{
    dropdown.classList.add('hidden')
  }
})
// responsive hamburger end


sign_in = () => {
  var email = document.getElementById('email').value;
  var pass = document.getElementById('pass').value;
  if (email == '' || pass == ''){
    alert('You have not entered email or pass!')
  }
}
