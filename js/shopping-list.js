// Shopping-list checkboxes: remembers what you've checked, per recipe, in this browser.
(function () {
  var KEY = "shopping-" + (document.body.dataset.recipe || location.pathname);
  var boxes = Array.prototype.slice.call(document.querySelectorAll('.shop input[type="checkbox"]'));
  var countEl = document.getElementById("count");
  var clearBtn = document.getElementById("clear");
  if (!boxes.length || !countEl) return;
  var saved = {};
  try { saved = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) { saved = {}; }
  function update() {
    var n = boxes.filter(function (b) { return b.checked; }).length;
    countEl.textContent = n + " of " + boxes.length + " checked";
    var state = {};
    boxes.forEach(function (b) { if (b.checked) state[b.id] = true; });
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
  }
  boxes.forEach(function (b) { if (saved[b.id]) b.checked = true; b.addEventListener("change", update); });
  if (clearBtn) clearBtn.addEventListener("click", function () { boxes.forEach(function (b) { b.checked = false; }); update(); });
  update();
})();
