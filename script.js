function clearFlexClasses(element) {
  element.classList.remove(
    'flex-container-row',
    'flex-container-column',
    'flex-container-column-reverse',
    'flex-container-row-reverse'
  );
}

function setDescription(text) {
  const description = document.getElementById('description');
  description.textContent = text;
}

function columnDisp() {
  const container = document.querySelector('.container');
  clearFlexClasses(container);
  container.classList.add('flex-container-column');
  setDescription("Flex direction is set to COLUMN.\nItems stack vertically with 150px width.\nContainer height: 500px.");
}

function rowDisp() {
  const container = document.querySelector('.container');
  clearFlexClasses(container);
  container.classList.add('flex-container-row');
  setDescription("Flex direction is set to ROW.\nItems align horizontally with 50px height.\nContainer height: 200px.");
}

function columnReverse() {
  const container = document.querySelector('.container');
  clearFlexClasses(container);
  container.classList.add('flex-container-column-reverse');
  setDescription("Flex direction is set to COLUMN-REVERSE.\nItems stack vertically in reverse order.\nNo specific width is applied to items.\nContainer height: 500px.");
}

function rowReverse() {
  const container = document.querySelector('.container');
  clearFlexClasses(container);
  container.classList.add('flex-container-row-reverse');
  setDescription("Flex direction is set to ROW-REVERSE.\nItems align horizontally in reverse order.\nNo specific height is applied to items.\nContainer has no fixed height.");
}
