var gpio = require('rpi-gpio');

gpio.setup(7, gpio.DIR_OUT, encender);
function encender() {
      gpio.write(7, true);
  
}