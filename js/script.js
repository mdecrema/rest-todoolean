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

})

function inviaContenuto(value) {
  for (i=0  ; i<=value.length; i++) {

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

$(".todo").on("click", ".delete", function() {
  var element = $(this).parent();
  var id = element.attr("id");

  $.ajax({
  url: "http://157.230.17.132:3017/todos/"+id,
  method: "DELETE",
  success: function (data) {
    //console.log(data);
    element.remove();
  },
  error: function (richiesta, stato, errori) {
    alert("Errore");
  }
})

})

$(".addElement").click(function() {
  var testo = $(".textElement").val();

  $.ajax({
  url: "http://157.230.17.132:3017/todos/",
  method: "POST",
  data: {
    "text": testo
  },
  success: function(data) {
    //console.log(data);
    var arrayValore = [];
    arrayValore.push(data);
    inviaContenuto(arrayValore);
  },
  error: function (richiesta, stato, errori) {
    alert("Errore");
  }
})

})
