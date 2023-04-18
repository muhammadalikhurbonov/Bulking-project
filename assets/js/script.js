const bttn_left = document.querySelector(
  ".section_five_carousel_item_btn_left"
);
const bttn_right = document.querySelector(
  ".section_five_carousel_item_btn_right"
);
const box = document.querySelector(".section_five_carousel_item");
const boxes = document.querySelectorAll(".section_five_carousel_item");
const Boxlegth = boxes.length - 1;
let position_carousel = 0;

function RemoveWholeClasses() {
  for (const box of boxes) {
    box.classList.remove("opacity");
  }
}
const leftMove_carousel = () => {
  RemoveWholeClasses();
  if (position_carousel === Boxlegth) {
    position_carousel = 0;
  } else {
    position_carousel++;
  }
  console.log(boxes[position_carousel]);
  boxes[position_carousel].classList.add("opacity");
};

const rightMove_carousel = () => {
  RemoveWholeClasses();
  if (position_carousel === 0) {
    position_carousel = Boxlegth;
  } else {
    position_carousel--;
  }
  console.log(boxes[position_carousel]);
  boxes[position_carousel].classList.add("opacity");
};

bttn_left.addEventListener("click", rightMove_carousel);
bttn_right.addEventListener("click", leftMove_carousel);
