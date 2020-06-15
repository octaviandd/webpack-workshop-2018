/** @format */

// take a str, the button label and return a element
/**
 *
 * @param {string} buttonName
 * @returns {Element}
 */
const makeButton = (buttonName) => {
  const buttonLabel = `Button ${buttonName}`;
  var button = document.createElement("button");
  button.innerHTML = buttonLabel;
  return button;
};

module.exports = makeButton;
