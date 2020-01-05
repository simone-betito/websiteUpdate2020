const timeLine = document.querySelectorAll(".year");

timeLine.forEach(year => {
  const yearID = year.dataset.year;

  year.addEventListener("mouseenter", () => {
    document
      .querySelectorAll(`.projects-container .y-${yearID}`)
      .forEach(proj => proj.classList.add("active"));
    document
      .querySelectorAll(`.projects-container > :not(.y-${yearID})`)
      .forEach(proj => proj.classList.add("dull"));
  });

  year.addEventListener("mouseout", () => {
    document
      .querySelectorAll(`.projects-container .y-${yearID}`)
      .forEach(proj => proj.classList.remove("active"));
    document
      .querySelectorAll(`.projects-container > :not(.y-${yearID})`)
      .forEach(proj => proj.classList.remove("dull"));
  });
});
