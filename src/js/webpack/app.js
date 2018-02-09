import Marquee3k from 'marquee3000';

const initialize = () => {

  Marquee3k.init()
  document.getElementById("loader").style.display = "none"

};

document.addEventListener("DOMContentLoaded", initialize);