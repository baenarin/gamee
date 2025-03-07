function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6r2PIaDhpTC":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="musik.mp3";
audio.play();
}

