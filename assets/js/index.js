$("#add_user").submit(function (event) {
  alert("Data Inserted Successfully!");
});

$("#update_user").submit(function (event) {
  event.preventDefault();

  var unindexed_array = $(this).serializeArray();

  var dataAr = {};

  $.map(unindexed_array, function (n, i) {
    dataAr[n["name"]] = n["value"];
  });

  //ajax
  var request = {
    url: `http://localhost:4000/api/users/${dataAr.id}`,
    method: "PUT",
    data: dataAr,
  };

  $.ajax(request).done(function (response) {
    alert("Data Updated Successfully");
  });
});

//delete data
if (window.location.pathname == "/") {
  $ondelete = $(".table tbody td a.delete");
  $ondelete.click(function () {
    var id = $(this).attr("data-id");

    var request = {
      url: `http://localhost:4000/api/users/${id}`,
      method: "DELETE",
    };

    if (confirm("Do you really want to delete this record")) {
      $.ajax(request).done(function (res) {
        alert("Data has been deleted");
        location.reload();
      });
    }
  });
}
