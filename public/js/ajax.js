(function ($) {
  $(document).ready(function () {
    const tooltipTriggerList = document.querySelectorAll(
        '[data-bs-toggle="tooltip"]'
      );
      const tooltipList = [...tooltipTriggerList].map(
        (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
      );
    const cartButton = $("#recipeSearch");
    const tooltip = bootstrap.Tooltip.getInstance('#recipeSearch')
    cartButton.attr("hidden", true);
    let cart = new Set();
    for (let r = 0; r < $("#accordionExample").children().length; r++) {
      for (let c = 0; c < $(`#list-group${r}`).children().length; c++) {
        $(document).on("click", `#cartButton${r}-${c}`, () => {
          var currButton = $(`#cartButton${r}-${c}`).text().trim();
          cart.add(currButton);
          cartButton.attr("hidden", false);
          tooltip.setContent({ '.tooltip-inner': Array.from(cart).join(', ') })
        });
      }
    }
  });
})(window.jQuery);
