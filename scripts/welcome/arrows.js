export default function initializeArrows() {
  const arrows = document.querySelectorAll('.arrows');

  arrows.forEach((arrow) => {
    arrow.addEventListener('click', handleArrowClick)
  })
}

function handleArrowClick({ currentTarget: arrow }) {
  const dots = document.querySelectorAll('.dots');
  const activeId = Array.from(dots).findIndex((dot) => dot.classList.contains('active'));
  let newActiveId;

  if (arrow.classList.contains('slide_to_left')) {
    newActiveId = activeId - 1;
  } else {
    newActiveId = activeId + 1;
  }

  if(newActiveId === 5) newActiveId = 0;
  if(newActiveId === -1) newActiveId = 4;

  dots[newActiveId].dispatchEvent(new Event('click'));
}
