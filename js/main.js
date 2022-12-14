'use strict'

const pendingHeader = document.querySelector('.pendingTaskHeader');
const completedHeader = document.querySelector('.completedTaskHeader');

const screenDateUpdate = () => {
  const myDateDay = new Date().toLocaleDateString('en-GB', { weekday: 'long' });
  const myDateDate = new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'numeric', day: 'numeric' });
  const dateDay = document.querySelector('.dateDay');
  const dateDate = document.querySelector('.dateDate');
  dateDay.innerHTML = myDateDay;
  dateDate.innerHTML = myDateDate;
};

let todoArr = [
  {
    id: 1,
    item: 'todo JS project',
    completed: false,
  },
  {
    id: 2,
    item: 'shock array',
    completed: false,
  },
  {
    id: 3,
    item: 'matching game JS project',
    completed: true,
  },
  {
    id: 4,
    item: 'slider JS project',
    completed: true,
  },
];
let pendingItems;
let completedItems;
let completedPercent;

const countItems = (array = [todoArr]) => {
  pendingItems = 0;
  completedItems = 0;
  array.forEach((element) => {
    if (element.completed) {
      completedItems += 1;
    } else {
      pendingItems += 1;
    }
  });
  completedPercent = Math.round((completedItems / (completedItems + pendingItems)) * 100);
};

const buildPendingBox = () => {
  const pendingItembox = document.querySelector('.pendingItemBox');
  for (let i = 0; i < todoArr.length; i += 1) {
    const elem = todoArr[i];
    if (elem.completed === false) {
      const actualItem = `<div class="pendingItem">
      <span class="checkbox"><input type="checkbox" /></span>
      <span class="Item">${elem.item}</span>
      <span class="delItem"><img class="delete" src="./css/icons/trash.svg" alt="delete"></span></div>`;
      pendingItembox.insertAdjacentHTML('beforeend', actualItem);
    }
  }
};

const buildCompletedBox = () => {
  const pendingItembox = document.querySelector('.completedItemBox');
  for (let i = 0; i < todoArr.length; i += 1) {
    const elem = todoArr[i];
    if (elem.completed) {
      const actualItem = `<div class="completedItem">
      <span class="checkbox"><input type="checkbox" checked/></span>
      <span class="Item">${elem.item}</span>
      <span class="delItem"><img class="delete" src="./css/icons/trash.svg" alt="delete"></span></div>`;
      pendingItembox.insertAdjacentHTML('beforeend', actualItem);
    }
  }
};

const screenUpdate = () => {
  screenDateUpdate();
  countItems(todoArr);
  pendingHeader.innerHTML = `You have ${pendingItems} pending items`;
  buildPendingBox();
  completedHeader.innerHTML = `Completed tasks : ${completedPercent}%`;
  buildCompletedBox();
};

screenUpdate();
