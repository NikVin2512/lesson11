
const text = document.getElementById('text');
const textSpan = document.getElementById('text-span');
const btn = document.getElementById('btn');
const square = document.getElementById('square');
const e_btn = document.getElementById('e_btn');
const range = document.getElementById('range');
const rangeSpan = document.getElementById('range-span');
const circle = document.getElementById('circle');

const bgrc = function (e) {
  console.log(e.target);
};

text.addEventListener('input', bgrc);

btn.addEventListener('click', function(){
  square.classList.add(text.value);
});

e_btn.style.display = 'none';


const size = function (e) {
  circle.style.height = range.value + '%';
  circle.style.width = range.value + '%';
};

range.addEventListener('input', size);
range.addEventListener('change', size);
