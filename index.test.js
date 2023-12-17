// index.test.js
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Read the HTML file content
const htmlPath = path.resolve(__dirname, 'index.html');
const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

// Set up a virtual DOM for testing
const { window } = new JSDOM(htmlContent);
global.document = window.document;

// Example Jest test
test('renders hello world', () => {
  const h1Element = document.querySelector('h1');
  expect(h1Element.textContent).toBe('Hello, World!');
});
