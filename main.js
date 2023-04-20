const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');
const radius = 30;
const hw= canvas.width / 2;
function line(){
    c.strokeStyle = 'black';
    c.lineWidth = 1;
    c.beginPath();
    c.moveTo(hw, 0);
    c.lineTo( halfWidth, canvas.height);
    c.stroke();
}
line();
canvas.addEventListener('mousemove', (event) => {
  const x = event.clientX - canvas.offsetLeft;
  const y = event.clientY - canvas.offsetTop;
  c.clearRect(0, 0, canvas.width, canvas.height);
  if (x < halfWidth) {
    const X = hw- x;
    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2);
    c.strokeStyle = 'black';
    c.stroke();
    c.beginPath();
    c.arc(x + 2 * X, y, radius, 0, Math.PI * 2);
    c.strokeStyle = 'black';
    c.stroke();
  } else {

    const X = x - halfWidth;

    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2);
    c.strokeStyle = 'black';
    c.stroke();

    c.beginPath();
    c.arc(x - 2 * X, y, radius, 0, Math.PI * 2);
    c.strokeStyle = 'black';
    c.stroke();
  }
  line();
});

canvas.addEventListener('mouseleave', () => {
  c.clearRect(0, 0, canvas.width, canvas.height);
  line();
});