function checkout(){

var modal = document.getElementById('receiptModal');
//get open modal button
var modalBtn = document.getElementById('btn1');
//get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//listen for open click
modalBtn.addEventListener('click',openModal);
//listen for close click
closeBtn.addEventListener('click',closeModal);
//listen for outside click
window.addEventListener('click',outsideClick);

//function to open modal
function openModal(){
  modal.style.display = 'flex';
}
//function to close modal
function closeModal(){
  modal.style.display = 'none';
}
// When the user clicks anywhere outside of the modal, close it
function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}

}