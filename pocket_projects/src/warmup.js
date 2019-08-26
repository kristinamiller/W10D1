
const partyHeader = document.getElementById('party');

const htmlGenerator = (string, htmlElement) => {
  let newP = document.createElement("p");
  if (htmlElement.childElementCount > 0) {
    Array.from(htmlElement.children).forEach( (child) => {
      child.parentElement.removeChild(child);
    });
  }
  newP.append(string);
  htmlElement.append(newP);
};

htmlGenerator('Party Time.', partyHeader);

module.exports = htmlGenerator;