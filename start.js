const userText=document.getElementById('input-text');
const  character=document.getElementById('char');
const totalwords=document.getElementById('words');
userText.addEventListener('input',function (){
  character.innerHTML=userText.value.length + 'Characters';
  totalwords.innerHTML=userText.value.trim().split(' ').length + 'Words';
})