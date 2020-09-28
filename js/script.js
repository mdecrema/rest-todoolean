$(document).ready(function() {


    $.ajax({
    url: "http://157.230.17.132:3017/todos",
    method: "GET",
    success: function (data) {
      console.log(data);
      //inviaContenuto(data)
    },
    error: function (richiesta, stato, errori) {
      alert("Errore");
    }
  })

  var list = {
    "num": "id",
    "testo": "text",
    "numero": "",
  }

  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);

  var contenuto = template(list);

  $(".todo").append(contenuto);




})
