export const Exercise = (function () {
  var steps = 0;

  function increaseSteps() {
    steps++;
  }

  return {
    walk: function () {
      increaseSteps();
    },
    getTotalSteps: function () {
      return steps;
    },
  };
})();
