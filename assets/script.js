document.addEventListener("DOMContentLoaded", function () {
  const pitchRows = document.querySelectorAll(".pitch-row");

  pitchRows.forEach((row, index) => {
    const delay = index * 300; 
    const delay2 = index * 2000; 

    setTimeout(() => {
      row.classList.replace("phase0", "phase1");
    }, 800 + delay);

    setTimeout(() => {
      row.classList.replace("phase1", "phase2");
    }, 3000 + delay2);

    setTimeout(() => {
      row.classList.replace("phase2", "phase3");
    }, 5000 + delay2);
  });
});


