
const text = document.getElementById('text');
const textSpan = document.getElementById('text-span');
const btn = document.getElementById('btn');
const square = document.getElementById('square');

const toggler = function (e) {
  console.dir(e.target);
};

text.addEventListener('input', toggler);

btn.addEventListener('click', function(){
  square.classList.add(text.value);
});



