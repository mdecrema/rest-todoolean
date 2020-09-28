$(document).ready(function() {


    $.ajax({
    url: "http://157.230.17.132:3017/todos",
    method: "GET",
    success: function (data) {
      console.log(data);
      var valore = data;
      inviaContenuto(valore);
    },
    error: function (richiesta, stato, errori) {
      alert("Errore");
    }
  })

function inviaContenuto(value) {
  for (i=1; i<=value.length; i++) {

  var list = {
    "num": value[i].id,
    "testo": value[i].text,
    "numero": "",
  }

  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);

  var contenuto = template(list);

  $(".todo").append(contenuto);
}

}

})
