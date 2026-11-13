(function () {
  "use strict";

  var publications = document.getElementById("research-publications");
  if (!publications) return;

  var controls = publications.querySelector(".publication-filters");
  var buttons = publications.querySelectorAll("[data-publication-filter]");
  var groups = publications.querySelectorAll("[data-publication-direction]");
  var status = publications.querySelector(".publication-filter-status");
  if (!controls || !buttons.length || !groups.length || !status) return;

  function filterPublications(selectedButton) {
    var direction = selectedButton.getAttribute("data-publication-filter");
    var count = 0;

    Array.prototype.forEach.call(groups, function (group) {
      var visible = direction === "all" ||
        group.getAttribute("data-publication-direction") === direction;
      group.hidden = !visible;
      if (visible) count += group.querySelectorAll("li").length;
    });

    Array.prototype.forEach.call(buttons, function (button) {
      button.setAttribute("aria-pressed", button === selectedButton ? "true" : "false");
    });

    status.textContent = "Showing " + count +
      (count === 1 ? " publication" : " publications") +
      (direction === "all" ? " across all research directions." :
        " in " + selectedButton.textContent.trim() + ".");
  }

  Array.prototype.forEach.call(buttons, function (button) {
    button.addEventListener("click", function () {
      filterPublications(button);
    });
  });

  filterPublications(buttons[0]);
  controls.hidden = false;
  status.hidden = false;
}());
