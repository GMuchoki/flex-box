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
  container.style.justifyContent = 'flex-start'; // Reset alignment
  setActiveAlignButton('Start'); // Reset highlight
  setDescription("Flex direction is set to COLUMN.\nItems stack vertically with 150px width.\nContainer height: 500px.");
}

function rowDisp() {
  const container = document.querySelector('.container');
  clearFlexClasses(container);
  container.classList.add('flex-container-row');
  container.style.justifyContent = 'flex-start'; // Reset alignment
  setActiveAlignButton('Start'); // Reset highlight
  setDescription("Flex direction is set to ROW.\nItems align horizontally with 50px height.\nContainer height: 200px.");
}

function columnReverse() {
  const container = document.querySelector('.container');
  clearFlexClasses(container);
  container.classList.add('flex-container-column-reverse');
  container.style.justifyContent = 'flex-start'; // Reset alignment
  setActiveAlignButton('Start'); // Reset highlight
  setDescription("Flex direction is set to COLUMN-REVERSE.\nItems stack vertically in reverse order.\nNo specific width is applied to items.\nContainer height: 500px.");
}

function rowReverse() {
  const container = document.querySelector('.container');
  clearFlexClasses(container);
  container.classList.add('flex-container-row-reverse');
  container.style.justifyContent = 'flex-start'; // Reset alignment
  setActiveAlignButton('Start'); // Reset highlight
  setDescription("Flex direction is set to ROW-REVERSE.\nItems align horizontally in reverse order.\nNo specific height is applied to items.\nContainer has no fixed height.");
}

function alignStart() {
  const container = document.querySelector('.container');
  container.style.justifyContent = 'flex-start';
  setActiveAlignButton('Start');
  setDescription((prev => `${prev}\nAlignment set to: START (flex-start)`)(document.getElementById('description').textContent));
}

function alignCenter() {
  const container = document.querySelector('.container');
  container.style.justifyContent = 'center';
  setActiveAlignButton('Center');
  setDescription((prev => `${prev}\nAlignment set to: CENTER (center)`)(document.getElementById('description').textContent));
}

function alignEnd() {
  const container = document.querySelector('.container');
  container.style.justifyContent = 'flex-end';
  setActiveAlignButton('End');
  setDescription((prev => `${prev}\nAlignment set to: END (flex-end)`)(document.getElementById('description').textContent));
}

function alignSpaceAround() {
  const container = document.querySelector('.container');
  container.style.justifyContent = 'space-around';
  setActiveAlignButton('Space Around');
  setDescription((prev => `${prev}\nAlignment set to: SPACE-AROUND (space-around)`)(document.getElementById('description').textContent));
}

function alignSpaceBetween() {
  const container = document.querySelector('.container');
  container.style.justifyContent = 'space-between';
  setActiveAlignButton('Space Between');
  setDescription((prev => `${prev}\nAlignment set to: SPACE-BETWEEN (space-between)`)(document.getElementById('description').textContent));
}

function setActiveAlignButton(label) {
  const buttons = document.querySelectorAll('#alignment-buttons button');
  buttons.forEach(btn => {
    if (btn.textContent.trim().toLowerCase() === label.toLowerCase()) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}




