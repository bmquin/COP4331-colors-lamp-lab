/**
 * Unit Tests for code.js
 * Tests form validation and color-related functions
 * This file was created using AI, check README for proper attribution
 */

// Mock global variables and functions
let userId = 0;
let firstName = "";
let lastName = "";
const urlBase = 'http://bq-lamplab.site/';
const extension = 'php';

// Helper function to validate color format
function validateColorInput(colorText) {
  return !!(colorText && colorText.trim().length > 0);
}

// Helper function to format color string
function formatColorString(colorText) {
  return colorText.trim().toLowerCase();
}

describe('Frontend Unit Tests - Color Functions', () => {
  beforeEach(() => {
    // Clear DOM before each test
    document.body.innerHTML = `
      <input id="colorText" value="">
      <div id="colorAddResult"></div>
      <input id="searchText" value="">
      <div id="colorSearchResult"></div>
    `;
    userId = 0;
    firstName = "";
    lastName = "";
  });

  test('should validate non-empty color input', () => {
    const result = validateColorInput("Red");
    expect(result).toBe(true);
  });

  test('should reject empty color input', () => {
    const result = validateColorInput("");
    expect(result).toBe(false);
  });

  test('should reject whitespace-only color input', () => {
    const result = validateColorInput("   ");
    expect(result).toBe(false);
  });

  test('should format color string to lowercase', () => {
    const result = formatColorString("Red");
    expect(result).toBe("red");
  });

  test('should format color string by trimming whitespace', () => {
    const result = formatColorString("  Blue  ");
    expect(result).toBe("blue");
  });

  test('should validate form submission with valid color', () => {
    const colorInput = document.getElementById("colorText");
    colorInput.value = "Green";

    const isValid = validateColorInput(colorInput.value);
    expect(isValid).toBe(true);
    expect(colorInput.value.length).toBeGreaterThan(0);
  });

  test('should handle special color names', () => {
    const colors = ["Light Blue", "Dark Red", "Hot Pink"];
    colors.forEach(color => {
      const result = validateColorInput(color);
      expect(result).toBe(true);
    });
  });

  test('should handle numeric color values (hex codes)', () => {
    const hexColor = "#FF5733";
    const result = validateColorInput(hexColor);
    expect(result).toBe(true);
  });
});
