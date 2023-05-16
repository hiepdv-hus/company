function createDropdown(containerId, selectedName) {
  const container = document.querySelector(`#${containerId}`);
  const selectedOption = container.querySelector(".selected-option");
  const options = container.querySelector(".options");
  //const optionsItem = container.querySelector(".options-item");
  const clearOptions = container.querySelector(".clear-options");
  const downOptions = container.querySelector(".down-options");
  const optionList = Array.from(options.querySelectorAll("div"));
  const searchInput = container.querySelector(".search-select");
  let selectedValues = [];

  // Toggle dropdown visibility when selectedOption is clicked
  selectedOption.addEventListener("click", function () {
    if (container.classList.contains("show")) {
      container.classList.remove("show");
    } else {
      container.classList.add("show");
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function (event) {
    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach((dropdown) => {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("show");
      }
    });
  });

  // Handle option selection
  optionList.forEach((option) => {
    option.addEventListener("click", () => {
      const value = option.dataset.value;

      // Update selectedValues
      if (selectedValues.includes(value)) {
        selectedValues = selectedValues.filter((val) => val !== value);
      } else {
        selectedValues.push(value);
      }

      // Toggle active class and update selectedOption text
      option.classList.toggle("active");
      updateSelectedOptionText();
    });
  });

  // Handle search input
  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();
    if(searchTerm.trim() == '') {
      console.log('ok');
    }

    optionList.forEach((option) => {
      const optionText = option.textContent.toLowerCase();
      if (optionText.includes(searchTerm)) {
        option.style.display = "block";
      } else {
        option.style.display = "none";
      }
    });
  });

  // Update selectedOption text
  function updateSelectedOptionText() {
    if (selectedValues.length === 0) {
      clearOptions.style.display = "none";
      downOptions.style.display = "block";
      selectedOption.textContent = selectedName;
    } else if (selectedValues.length === 1) {
      clearOptions.style.display = "block";
      downOptions.style.display = "none";
      selectedOption.innerHTML = `
      <span class="el-tag">
        <span class="el-select__tags-text">${selectedValues[0]}</span>
      </span>
      `;
    } else {
      clearOptions.style.display = "block";
      downOptions.style.display = "none";
      selectedOption.innerHTML = `
      <span class="el-tag">
        <span class="el-select__tags-text">${selectedValues[0]}</span>
      </span>
      <span class="el-tag">
        <span class="el-select__tags-text">+ ${selectedValues.length - 1}</span>
      </span>
      `;
    }
  }

  // Handle clearOptions click event
  clearOptions.addEventListener("click", function () {
    selectedValues = [];
    optionList.forEach((option) => {
      option.classList.remove("active");
    });
    updateSelectedOptionText();
  });

  // Return the necessary references and functions
  return {
    container,
    selectedOption,
    options,
    optionList,
    selectedValues,
    updateSelectedOptionText,
  };
}

// Create dropdowns
const dropdown1 = createDropdown("dropdown1", "All templates");
const dropdown2 = createDropdown("dropdown2", "Job type");
const dropdown3 = createDropdown("dropdown3", "Country");
// const dropdown4 = createDropdown("dropdown4", "Country");
// const dropdown5 = createDropdown("dropdown5", "Country");
// const dropdown6 = createDropdown("dropdown6", "Country");
// const dropdown7 = createDropdown("dropdown7", "Country");
// const dropdown8 = createDropdown("dropdown8", "Country");
// const dropdown9 = createDropdown("dropdown9", "Country");

// SlidingText
// function addSlide() {
//   // Lấy tất cả các phần tử .options-item
//   const optionsItems = document.querySelectorAll('.options-item');

//   // Lặp qua từng phần tử và kiểm tra độ dài của văn bản trong span
//   optionsItems.forEach((optionsItem) => {
//     const textSpan = optionsItem.querySelector('span');
//     if (textSpan.textContent.length > 18) {
//       optionsItem.classList.add('slide-animation');
//     }
//   });
// }
// addSlide()
