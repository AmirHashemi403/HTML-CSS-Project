var display = document.getElementById('display');
var buttons = document.querySelectorAll('button');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    var val = this.innerText;

    if (val == 'AC') {
      display.value = '';
    } else if (val == '=') {
      try {
        var result = display.value;
        result = result.replace(/×/g, '*');
        result = result.replace(/÷/g, '/');
        display.value = eval(result);
      } catch (e) {
        display.value = 'Error';
        setTimeout(function() {
          display.value = '';
        }, 1000);
      }
    } else {
      display.value += val;
    }
  });
}
