const tabs = document.getElementById('tabs');
const tab1 = document.getElementById('tab1');
const tab2 = document.getElementById('tab2');
const list = document.querySelector('.section-plan__list');

const activeTabs = {
  tab2: [
    "Как формируется ваша самооценка и почему она именно такая как есть.",
    "Как повысить уверенность в себе и быть уверенной постоянно.",
    "Какие неосознанные выгоды вы получаете от жизни без счастья."
  ],
  tab1: [
    "Как не позволить сесть себе на шею.",
    "Три способа гарантированно полюбить себя.",
    "Как перестать зависеть от других и жить в своё удовольствие."
  ],
  active: 'tab1'
};

const toggleClass = (element) => {
  element.classList.toggle("section-plan__button_active")
  element.classList.toggle("section-plan__button_passive")
};

tabs.addEventListener('click', e => {
  e.preventDefault();
  const idTab = e.target.id;
  list.style.minHeight = list.clientHeight + 'px';
  if(idTab !== activeTabs.active){
    toggleClass(tab1);
    toggleClass(tab2);
    list.querySelectorAll('li').forEach((li, index) => {
      li.textContent = activeTabs[activeTabs.active][index];
    });

    activeTabs.active = idTab;
  }
});