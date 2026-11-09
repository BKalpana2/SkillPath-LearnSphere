
// ========================================
// GET HTML ELEMENTS
// ========================================

const courseSearch = document.getElementById("courseSearch");
const courseFilter = document.getElementById("courseFilter");
const noCoursesMessage = document.getElementById("noCoursesMessage");
const courseCount = document.getElementById("courseCount");
const clearFilters = document.getElementById("clearFilters");

// ========================================
// SELECT COURSE ITEMS
// ========================================

const courseCards = document.querySelectorAll(".course-item");

// Store total number of courses
const totalCourses = courseCards.length;


// ========================================
// COURSE FILTERING FUNCTION
// ========================================

function filterCourses() {

    const searchValue = courseSearch.value.trim().toLowerCase();
    const selectedCategory = courseFilter.value;

    let visibleCourses = 0;

    courseCards.forEach(card => {

        const courseName = card.querySelector("h4").textContent.toLowerCase();

        const category = card.dataset.category;

        // Check search condition
        const matchesSearch = courseName.includes(searchValue);

        // Check category condition
        const matchesCategory =
            selectedCategory === "all" ||
            category === selectedCategory;

        // Display matching courses
        if (matchesSearch && matchesCategory) {

            card.style.display = "";

            visibleCourses++;

        } else {

            card.style.display = "none";

        }

    });


    // ========================================
    // UPDATE COURSE COUNT
    // ========================================

    if (courseCount) {

        courseCount.textContent =
            `Showing ${visibleCourses} of ${totalCourses} courses`;

    }


    // ========================================
    // SHOW NO COURSES MESSAGE
    // ========================================

    if (noCoursesMessage) {

        noCoursesMessage.style.display =
            visibleCourses === 0 ? "block" : "none";

    }


    console.log("Courses found:", visibleCourses);

}


// ========================================
// SEARCH EVENT
// ========================================

if (courseSearch) {

    courseSearch.addEventListener("input", filterCourses);

}


// ========================================
// CATEGORY FILTER EVENT
// ========================================

if (courseFilter) {

    courseFilter.addEventListener("change", filterCourses);

}


// ========================================
// CLEAR FILTERS FUNCTION
// ========================================

if (clearFilters) {

    clearFilters.addEventListener("click", function () {

        courseSearch.value = "";

        courseFilter.value = "all";

        filterCourses();

    });

}


// ========================================
// INITIAL COURSE COUNT
// ========================================

filterCourses();
