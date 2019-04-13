const count = 75;
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

let current = 0;
let numbers = Array.from(Array(count), (v, k) => k + 1);

$("#next").click(() => {
  if (numbers.length <= 0) {
    $("#now").text("Fin.");
    $("#next")
      .attr("disabled", true)
      .text("Reload to reset");

    return;
  }

  const rand = numbers[getRandomInt(0, numbers.length)];
  console.log(rand);

  $("#next").text("Next");
  $("#now").text(rand);
  $("#counter").text(++current + " of " + count);
  $("#histories")
    .append(
      $("<span>")
        .addClass("history")
        .text(rand)
    );

  const histories = $("#histories")[0];
  histories.scroll(0, histories.scrollHeight);

  numbers = numbers.filter(n => n !== rand);
});
