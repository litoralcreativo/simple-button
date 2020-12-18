let btnEnable = false;
const ledShadOn = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073"
const ledShadOff = "inset 0 3px 3px rgba(255, 255, 255, 0.05), inset 0 -3px 3px rgba(0, 0, 0, 0.05)"
const butShadPress = "0 -5px 5px rgba(255, 255, 255, 0.05), inset 0 -5px 5px rgba(255, 255, 255, 0.05), 0 5px 5px rgba(0, 0, 0, 0.05), inset 0 5px 5px rgba(0, 0, 0, 0.05)"
const butShadUnpress = "inset 0 15px 15px rgba(255, 255, 255, 0.05), inset 0 -15px 15px rgba(0, 0, 0, 0.05);"
function toogleBtn(){
  const led = document.getElementById("led");
  if (btnEnable)
  {
      led.style.background = "#091921";
      led.style.boxShadow = ledShadOff;
  }
  else
  {
    led.style.background = "#fff";
    led.style.boxShadow = ledShadOn;
  }
  btnEnable = !btnEnable;
}
