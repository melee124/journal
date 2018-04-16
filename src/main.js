import { Entry } from './journal';

$(document).ready(function() {
  $("#yourEntry").submit(function(event) {
    event.preventDefault();
    debugger;
    var diaryEntry = $("#diary").val();
    var newEntry = new Entry(diaryEntry);
    $("#teaser").text(diaryEntry);
  });
});
