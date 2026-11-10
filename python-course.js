/* =====================================================
   SKILLPATH - PYTHON COMPLETE LEARNING SYSTEM
   Design Reference: Java Programming Dashboard
===================================================== */


/* =====================================================
   1. PYTHON SYLLABUS
===================================================== */

const pythonModules = [

{
    name: "Python Fundamentals",
    desc: "Understand Python and its programming environment.",
    topics: [
        "Introduction to Python",
        "Features of Python",
        "Applications of Python",
        "Installing Python",
        "Python IDEs",
        "First Python Program",
        "Python Syntax",
        "Python Comments"
    ]
},

{
    name: "Variables and Data Types",
    desc: "Learn how Python stores and manages data.",
    topics: [
        "Variables",
        "Variable Naming Rules",
        "Python Keywords",
        "Numeric Data Types",
        "String Data Type",
        "Boolean Data Type",
        "Type Checking",
        "Type Casting",
        "Input and Output",
        "Multiple Variable Assignment"
    ]
},

{
    name: "Python Operators",
    desc: "Perform operations using Python operators.",
    topics: [
        "Arithmetic Operators",
        "Assignment Operators",
        "Comparison Operators",
        "Logical Operators",
        "Bitwise Operators",
        "Membership Operators",
        "Identity Operators",
        "Operator Precedence"
    ]
},

{
    name: "Conditional Statements",
    desc: "Control program execution using conditions.",
    topics: [
        "Introduction to Conditional Statements",
        "if Statement",
        "if-else Statement",
        "if-elif-else Statement",
        "Nested if Statement",
        "Short Hand if",
        "Ternary Operator",
        "Match Case Statement"
    ]
},

{
    name: "Loops and Control Statements",
    desc: "Execute statements repeatedly using loops.",
    topics: [
        "Introduction to Loops",
        "for Loop",
        "while Loop",
        "range() Function",
        "break Statement",
        "continue Statement",
        "pass Statement",
        "Nested Loops",
        "Loop Else Statement"
    ]
},

{
    name: "Python Data Structures",
    desc: "Store and manipulate collections of data.",
    topics: [
        "Introduction to Lists",
        "List Methods",
        "List Slicing",
        "List Comprehension",
        "Introduction to Tuples",
        "Tuple Methods",
        "Introduction to Sets",
        "Set Methods",
        "Introduction to Dictionaries",
        "Dictionary Methods",
        "Dictionary Comprehension"
    ]
},

{
    name: "Strings and Functions",
    desc: "Work with strings and create reusable functions.",
    topics: [
        "Introduction to Strings",
        "String Indexing",
        "String Slicing",
        "String Methods",
        "String Formatting",
        "Defining Functions",
        "Function Arguments",
        "Default Arguments",
        "Keyword Arguments",
        "Return Statement",
        "Lambda Functions",
        "Recursion",
        "Variable Scope"
    ]
},

{
    name: "Object-Oriented Programming",
    desc: "Understand object-oriented programming in Python.",
    topics: [
        "Introduction to OOP",
        "Classes and Objects",
        "Constructors",
        "self Keyword",
        "Instance Variables",
        "Class Variables",
        "Instance Methods",
        "Class Methods",
        "Static Methods",
        "Inheritance",
        "Multiple Inheritance",
        "Multilevel Inheritance",
        "Polymorphism",
        "Encapsulation",
        "Abstraction"
    ]
},

{
    name: "Exception Handling",
    desc: "Handle errors and exceptions in Python.",
    topics: [
        "Introduction to Exceptions",
        "Syntax Errors",
        "Runtime Errors",
        "try Statement",
        "except Statement",
        "else Block",
        "finally Block",
        "Multiple Exceptions",
        "raise Statement",
        "Custom Exceptions"
    ]
},

{
    name: "File Handling and Modules",
    desc: "Work with files, modules and packages.",
    topics: [
        "Introduction to File Handling",
        "Opening Files",
        "Reading Files",
        "Writing Files",
        "Appending Files",
        "Closing Files",
        "with Statement",
        "File Modes",
        "Introduction to Modules",
        "Import Statement",
        "Creating Modules",
        "Python Packages"
    ]
},

{
    name: "Advanced Python",
    desc: "Explore advanced Python programming concepts.",
    topics: [
        "Iterators",
        "Generators",
        "yield Keyword",
        "Decorators",
        "Closures",
        "Map Function",
        "Filter Function",
        "Reduce Function",
        "Zip Function",
        "Enumerate Function",
        "Regular Expressions",
        "Python Date and Time",
        "JSON Handling"
    ]
},

{
    name: "Python Projects and Interview Preparation",
    desc: "Build projects and prepare for Python interviews.",
    topics: [
        "Python Coding Challenges",
        "Number Programs",
        "String Programs",
        "List Programs",
        "Dictionary Programs",
        "Pattern Programs",
        "Student Management System",
        "Expense Tracker",
        "Library Management System",
        "Employee Management System",
        "Python Interview Questions"
    ]
}

];


/* =====================================================
   2. COURSE VARIABLES
===================================================== */

let activeModule = 0;
let activeTopic = 0;

let completedTopics = JSON.parse(
    localStorage.getItem("pythonCompletedTopics") || "[]"
);

const totalTopics = pythonModules.reduce(
    (total, module) => total + module.topics.length,
    0
);


/* =====================================================
   3. HTML ELEMENTS
===================================================== */

const moduleList = document.getElementById("moduleList");

const topicList = document.getElementById("topicList");

const moduleTitle = document.getElementById("moduleTitle");

const moduleDescription =
    document.getElementById("moduleDescription");

const moduleLabel = document.getElementById("moduleLabel");

const moduleTopicCount =
    document.getElementById("moduleTopicCount");

const progressPercent =
    document.getElementById("progressPercent");

const progressFill =
    document.getElementById("progressFill");

const progressCount =
    document.getElementById("progressCount");

const notesContent =
    document.getElementById("notesContent");


/* =====================================================
   4. PYTHON YOUTUBE DATABASE
===================================================== */

const pythonVideos = [

{
    title: "Python Complete Course",
    channel: "CodeWithHarry",
    description: "Learn Python programming from basics to advanced.",
    search: "CodeWithHarry Python full course",
    category: "Complete Course",
    duration: "Full Course"
},

{
    title: "Python for Beginners",
    channel: "Bro Code",
    description: "Understand Python fundamentals and programming syntax.",
    search: "Bro Code Python full course",
    category: "Fundamentals",
    duration: "Beginner"
},

{
    title: "Python Data Structures",
    channel: "Corey Schafer",
    description: "Learn lists, tuples, sets and dictionaries.",
    search: "Corey Schafer Python data structures",
    category: "Data Structures",
    duration: "Concept Tutorial"
},

{
    title: "Python OOP Concepts",
    channel: "Corey Schafer",
    description: "Learn classes, objects, inheritance and polymorphism.",
    search: "Corey Schafer Python OOP",
    category: "OOP",
    duration: "Concept Tutorial"
},

{
    title: "Python Functions",
    channel: "Programming with Mosh",
    description: "Understand functions, arguments and return values.",
    search: "Programming with Mosh Python functions",
    category: "Functions",
    duration: "Concept Tutorial"
},

{
    title: "Python Exception Handling",
    channel: "Corey Schafer",
    description: "Learn error handling and custom exceptions.",
    search: "Corey Schafer Python exception handling",
    category: "Exception Handling",
    duration: "Concept Tutorial"
},

{
    title: "Python File Handling",
    channel: "Corey Schafer",
    description: "Learn reading, writing and managing files.",
    search: "Corey Schafer Python file handling",
    category: "File Handling",
    duration: "Concept Tutorial"
},

{
    title: "Advanced Python",
    channel: "ArjanCodes",
    description: "Explore advanced Python programming techniques.",
    search: "ArjanCodes advanced Python tutorial",
    category: "Advanced Python",
    duration: "Advanced"
},

{
    title: "Python Projects",
    channel: "freeCodeCamp",
    description: "Build practical Python applications.",
    search: "freeCodeCamp Python projects",
    category: "Projects",
    duration: "Practice"
},

{
    title: "Python Interview Preparation",
    channel: "Naveen AutomationLabs",
    description: "Prepare for Python developer interviews.",
    search: "Naveen AutomationLabs Python interview questions",
    category: "Interview",
    duration: "Interview Preparation"
}

];


/* =====================================================
   5. PYTHON SHORT TRICKS
===================================================== */

const pythonTricks = [

{
    title: "Variable Assignment",
    trick: "a, b = 10, 20",
    description: "Assign multiple variables in one statement."
},

{
    title: "Swap Variables",
    trick: "a, b = b, a",
    description: "Swap two variables without a temporary variable."
},

{
    title: "List Length",
    trick: "len(my_list)",
    description: "Find the number of elements in a list."
},

{
    title: "Reverse a String",
    trick: "text[::-1]",
    description: "Reverse a string using slicing."
},

{
    title: "List Comprehension",
    trick: "[x*x for x in range(5)]",
    description: "Create a list using a compact expression."
},

{
    title: "Check Membership",
    trick: "value in my_list",
    description: "Check whether an element exists in a collection."
},

{
    title: "Remove Duplicates",
    trick: "list(set(numbers))",
    description: "Get unique values from a list. Note that set does not preserve the original order."
},

{
    title: "String Formatting",
    trick: 'f"Hello {name}"',
    description: "Insert variable values into strings using f-strings."
},

{
    title: "Dictionary Values",
    trick: "my_dict.values()",
    description: "Access all values stored in a dictionary."
},

{
    title: "Dictionary Keys",
    trick: "my_dict.keys()",
    description: "Access all keys stored in a dictionary."
},

{
    title: "Lambda Function",
    trick: "lambda x: x * x",
    description: "Create a small anonymous function."
},

{
    title: "Maximum Value",
    trick: "max(numbers)",
    description: "Find the largest value in an iterable."
},

{
    title: "Minimum Value",
    trick: "min(numbers)",
    description: "Find the smallest value in an iterable."
},

{
    title: "Sum of Elements",
    trick: "sum(numbers)",
    description: "Calculate the sum of numeric elements."
},

{
    title: "Enumerate",
    trick: "enumerate(my_list)",
    description: "Get indexes and values while iterating."
}

];


/* =====================================================
   6. QUICK REVISION
===================================================== */

const pythonRevision = [

    "Python is a high-level, interpreted programming language.",

    "Python uses indentation to define code blocks.",

    "Variables do not require explicit type declarations.",

    "Python supports int, float, complex, str and bool.",

    "Lists are ordered and mutable.",

    "Tuples are ordered and immutable.",

    "Sets store unique elements.",

    "Dictionaries store key-value pairs.",

    "Functions are defined using the def keyword.",

    "Lambda creates anonymous functions.",

    "Classes define objects and their behaviour.",

    "Inheritance supports code reusability.",

    "try-except handles exceptions.",

    "open() is used to work with files.",

    "Generators use the yield keyword."

];


/* =====================================================
   7. PYTHON INTERVIEW QUESTIONS
===================================================== */

const pythonQuestions = [

[
    "What is Python?",
    "Python is a high-level, general-purpose programming language known for its readable syntax."
],

[
    "Who developed Python?",
    "Guido van Rossum developed Python. Its first public release was in 1991."
],

[
    "What are the main features of Python?",
    "Python is readable, interpreted, dynamically typed, object-oriented and cross-platform."
],

[
    "Is Python compiled or interpreted?",
    "Python implementations commonly compile source code to bytecode and execute it using a virtual machine."
],

[
    "What is PEP 8?",
    "PEP 8 is the official style guide for Python code."
],

[
    "What is a variable?",
    "A variable is a name that refers to an object or value in Python."
],

[
    "What are Python data types?",
    "Examples include int, float, complex, str, bool, list, tuple, set and dict."
],

[
    "What is dynamic typing?",
    "Dynamic typing means variable names can refer to objects of different types during program execution."
],

[
    "What is type casting?",
    "Type casting converts a value from one data type to another."
],

[
    "What is indentation in Python?",
    "Indentation defines code blocks and is essential for Python syntax."
],

[
    "What is the difference between a list and tuple?",
    "Lists are mutable, whereas tuples are immutable."
],

[
    "What is a dictionary?",
    "A dictionary stores data as key-value pairs."
],

[
    "What is a set?",
    "A set is an unordered collection of unique elements."
],

[
    "What is a function?",
    "A function is a reusable block of code defined using def."
],

[
    "What is a lambda function?",
    "A lambda function is a small anonymous function created using the lambda keyword."
],

[
    "What is recursion?",
    "Recursion occurs when a function calls itself."
],

[
    "What is OOP?",
    "Object-oriented programming organizes code around classes and objects."
],

[
    "What is a class?",
    "A class is a blueprint used to create objects."
],

[
    "What is an object?",
    "An object is an instance of a class."
],

[
    "What is inheritance?",
    "Inheritance allows one class to acquire attributes and methods from another class."
],

[
    "What is polymorphism?",
    "Polymorphism allows different objects to respond to the same operation in different ways."
],

[
    "What is encapsulation?",
    "Encapsulation combines data and related methods within a class."
],

[
    "What is exception handling?",
    "Exception handling manages runtime errors using try, except and related statements."
],

[
    "What is the difference between break and continue?",
    "break terminates the loop, while continue skips the current iteration."
],

[
    "What is the difference between append() and extend()?",
    "append() adds one object, whereas extend() adds elements from an iterable."
],

[
    "What is list slicing?",
    "List slicing extracts a portion of a list using start, stop and step."
],

[
    "What is a module?",
    "A module is a Python file containing reusable code."
],

[
    "What is a package?",
    "A package organizes related Python modules."
],

[
    "What is file handling?",
    "File handling allows programs to create, read, write and manage files."
],

[
    "What is a generator?",
    "A generator produces values lazily, usually using yield."
]

];


/* =====================================================
   8. YOUTUBE URL
===================================================== */

function getYouTubeURL(search) {

    return "https://www.youtube.com/results?search_query=" +
        encodeURIComponent(search);

}


/* =====================================================
   9. RENDER MODULES
===================================================== */

function renderModules() {

    moduleList.innerHTML = "";

    pythonModules.forEach((module, index) => {

        const completed = module.topics.filter(
            (topic, topicIndex) =>
                completedTopics.includes(`${index}-${topicIndex}`)
        ).length;

        const button = document.createElement("button");

        button.className =
            `module-item ${index === activeModule ? "active" : ""}`;

        button.innerHTML = `

            <span class="module-number">${index + 1}</span>

            <span class="module-info">

                <strong>${module.name}</strong>

                <small>${completed}/${module.topics.length} Topics</small>

            </span>

            <span class="module-arrow">›</span>

        `;

        button.addEventListener("click", () => {

            activeModule = index;
            activeTopic = 0;

            renderModules();
            renderTopics();

        });

        moduleList.appendChild(button);

    });

}


/* =====================================================
   10. RENDER TOPICS
===================================================== */

function renderTopics() {

    const module = pythonModules[activeModule];

    moduleTitle.textContent = module.name;

    moduleDescription.textContent = module.desc;

    moduleLabel.textContent = `MODULE ${activeModule + 1}`;

    moduleTopicCount.textContent =
        `${module.topics.length} Topics`;

    topicList.innerHTML = "";

    module.topics.forEach((topic, index) => {

        const key = `${activeModule}-${index}`;

        const isCompleted = completedTopics.includes(key);

        const button = document.createElement("button");

        button.className = "topic-item";

        button.innerHTML = `

            <span>${isCompleted ? "✓" : "○"}</span>

            <span>${topic}</span>

            <small>${isCompleted ? "Completed" : "Learn"}</small>

        `;

        button.addEventListener("click", () => {

            activeTopic = index;

            renderTopics();

        });

        topicList.appendChild(button);

    });

    updateProgress();

    renderNotes();

    updateWatchVideo();

}


/* =====================================================
   11. PROGRESS TRACKER
===================================================== */

function updateProgress() {

    const completed = completedTopics.length;

    const percentage = Math.round(
        (completed / totalTopics) * 100
    );

    progressPercent.textContent = `${percentage}%`;

    progressFill.style.width = `${percentage}%`;

    progressCount.textContent =
        `${completed} / ${totalTopics} Topics`;

}


/* =====================================================
   12. COMPLETE MODULE
===================================================== */

document.getElementById("completeModule")
    .addEventListener("click", () => {

        pythonModules[activeModule].topics.forEach(
            (topic, index) => {

                const key = `${activeModule}-${index}`;

                if (!completedTopics.includes(key)) {
                    completedTopics.push(key);
                }

            }
        );

        localStorage.setItem(
            "pythonCompletedTopics",
            JSON.stringify(completedTopics)
        );

        renderModules();
        renderTopics();

        alert("Python module completed successfully!");

    });


/* =====================================================
   13. RESET PROGRESS
===================================================== */

document.getElementById("resetProgress")
    .addEventListener("click", () => {

        if (!confirm("Reset your Python learning progress?")) {
            return;
        }

        completedTopics = [];

        localStorage.removeItem("pythonCompletedTopics");

        renderModules();
        renderTopics();

    });


/* =====================================================
   14. PYTHON NOTES
===================================================== */

function renderNotes() {

    const topic = pythonModules[activeModule].topics[activeTopic];

    const noteDescriptions = {

        "Introduction to Python":
            "Python is a high-level, general-purpose programming language. It is widely used in web development, automation, data science and artificial intelligence.",

        "Variables":
            "Variables are names that refer to objects in Python. Python does not require explicit variable type declarations.",

        "Data Types":
            "Python provides numeric, sequence, mapping, set and boolean data types.",

        "if Statement":
            "The if statement executes a block of code when its condition evaluates to True.",

        "for Loop":
            "A for loop iterates over the elements of an iterable such as a list, tuple or string.",

        "while Loop":
            "A while loop repeatedly executes a block of code while its condition remains True.",

        "Introduction to Lists":
            "A list is an ordered, mutable collection that can contain different types of elements.",

        "Introduction to Tuples":
            "A tuple is an ordered, immutable collection of elements.",

        "Introduction to Dictionaries":
            "A dictionary stores data in key-value pairs.",

        "Defining Functions":
            "Functions are reusable blocks of code defined using the def keyword.",

        "Classes and Objects":
            "A class is a blueprint for creating objects. An object is an instance of a class.",

        "Inheritance":
            "Inheritance allows a child class to reuse and extend the functionality of a parent class.",

        "Exception Handling":
            "Python uses try and except blocks to handle exceptions and prevent unexpected program termination.",

        "File Handling":
            "File handling allows Python programs to read, write and append information to files.",

        "Generators":
            "Generators produce values one at a time using yield, which helps with memory-efficient iteration."

    };

    const description = noteDescriptions[topic] ||
        `Study ${topic} to understand its definition, syntax, working and practical applications.`;

    notesContent.innerHTML = `

        <div class="note-section">

            <span class="eyebrow purple-text">
                PYTHON PROGRAMMING NOTES
            </span>

            <h2>${topic}</h2>

            <p>${description}</p>

            <h3>Learning Objectives</h3>

            <ul>
                <li>Understand the concept of ${topic}.</li>
                <li>Learn its syntax and important features.</li>
                <li>Understand how it works in Python.</li>
                <li>Practice with real-world programming examples.</li>
            </ul>

            <h3>Practice Tip</h3>

            <p>
                Open your Python IDE, write a small program
                based on ${topic}, and execute it.
            </p>

        </div>

    `;

}


/* =====================================================
   15. WATCH VIDEO BUTTON
===================================================== */

function updateWatchVideo() {

    const watchButton = document.getElementById("watchVideo");

    const channelButton = document.getElementById("videoChannel");

    const moduleName = pythonModules[activeModule].name;

    const video = pythonVideos.find(item =>
        moduleName.toLowerCase().includes(
            item.category.toLowerCase()
        )
    ) || pythonVideos[0];

    watchButton.href = getYouTubeURL(video.search);

    watchButton.target = "_blank";

    watchButton.rel = "noopener noreferrer";

    channelButton.href = getYouTubeURL(video.channel + " Python");

    channelButton.target = "_blank";

    channelButton.textContent = video.channel + " ↗";

}


/* =====================================================
   16. RENDER YOUTUBE VIDEOS
===================================================== */

function renderVideos() {

    const videoList = document.getElementById("videoList");

    const allVideos = document.getElementById("allVideos");

    videoList.innerHTML = "";

    allVideos.innerHTML = "";

    pythonVideos.forEach((video, index) => {

        const url = getYouTubeURL(video.search);

        allVideos.innerHTML += `

            <article class="sp-video-card">

                <div class="sp-video-thumbnail">

                    <span class="sp-video-icon">▶</span>

                    <span class="sp-video-category">
                        ${video.category}
                    </span>

                </div>

                <div class="sp-video-content">

                    <span class="sp-video-duration">
                        ${video.duration}
                    </span>

                    <h3>${video.title}</h3>

                    <p>${video.description}</p>

                    <div class="sp-video-footer">

                        <span class="sp-channel-name">
                            Channel: ${video.channel}
                        </span>

                        <a href="${url}"
                           target="_blank"
                           rel="noopener noreferrer"
                           class="sp-watch-button">

                           Watch Video ↗

                        </a>

                    </div>

                </div>

            </article>

        `;

        if (index < 4) {

            videoList.innerHTML += `

                <div class="sp-video-row">

                    <div class="sp-video-small-icon">▶</div>

                    <div class="sp-video-row-content">

                        <strong>${video.title}</strong>

                        <span>${video.channel}</span>

                    </div>

                    <a href="${url}"
                       target="_blank"
                       rel="noopener noreferrer">

                       Watch ↗

                    </a>

                </div>

            `;

        }

    });

}


/* =====================================================
   17. RENDER SHORT TRICKS
===================================================== */

function renderTricks() {

    const trickPreview = document.getElementById("trickPreview");

    const allTricks = document.getElementById("allTricks");

    trickPreview.innerHTML = "";

    allTricks.innerHTML = "";

    pythonTricks.slice(0, 5).forEach(trick => {

        trickPreview.innerHTML += `

            <li>
                <strong>${trick.title}:</strong>
                ${trick.trick}
            </li>

        `;

    });

    pythonTricks.forEach(trick => {

        allTricks.innerHTML += `

            <article class="resource-card">

                <h3>💡 ${trick.title}</h3>

                <h2>${trick.trick}</h2>

                <p>${trick.description}</p>

            </article>

        `;

    });

}


/* =====================================================
   18. QUICK REVISION
===================================================== */

function renderRevision() {

    const revisionPreview =
        document.getElementById("revisionPreview");

    revisionPreview.innerHTML = "";

    pythonRevision.forEach(point => {

        revisionPreview.innerHTML += `<li>${point}</li>`;

    });

}


/* =====================================================
   19. INTERVIEW QUESTIONS
===================================================== */

function renderQuestions() {

    const preview =
        document.getElementById("questionPreview");

    const quizList =
        document.getElementById("quizList");

    preview.innerHTML = "";

    quizList.innerHTML = "";

    pythonQuestions.forEach((question, index) => {

        preview.innerHTML += `

            <p>
                ${index + 1}. ${question[0]}
            </p>

        `;

        const card = document.createElement("div");

        card.className = "quiz-card";

        card.innerHTML = `

            <h3>Question ${index + 1}</h3>

            <p>${question[0]}</p>

            <button class="outline-button">
                Show Answer
            </button>

            <div class="answer" hidden>

                <p>${question[1]}</p>

            </div>

        `;

        const button = card.querySelector("button");

        const answer = card.querySelector(".answer");

        button.addEventListener("click", () => {

            answer.hidden = !answer.hidden;

            button.textContent = answer.hidden
                ? "Show Answer"
                : "Hide Answer";

        });

        quizList.appendChild(card);

    });

}


/* =====================================================
   20. TAB NAVIGATION
===================================================== */

document.querySelectorAll(".tab").forEach(tab => {

    tab.addEventListener("click", () => {

        const selectedTab = tab.dataset.tab;

        document.querySelectorAll(".tab").forEach(item => {

            item.classList.remove("active");

        });

        document.querySelectorAll(".tab-panel").forEach(panel => {

            panel.classList.remove("active");

        });

        tab.classList.add("active");

        document.getElementById(
            `${selectedTab}Panel`
        ).classList.add("active");

    });

});


/* =====================================================
   21. QUICK TAB NAVIGATION
===================================================== */

document.querySelectorAll("[data-go-tab]").forEach(button => {

    button.addEventListener("click", () => {

        const tabName = button.dataset.goTab;

        const targetTab = document.querySelector(
            `[data-tab="${tabName}"]`
        );

        if (targetTab) {
            targetTab.click();
        }

    });

});


/* =====================================================
   22. OPEN NOTES
===================================================== */

document.getElementById("openNotes")
    .addEventListener("click", () => {

        document.querySelector('[data-tab="notes"]').click();

    });


/* =====================================================
   23. SEARCH PYTHON TOPICS
===================================================== */

document.getElementById("topicSearch")
    .addEventListener("input", function () {

        const searchValue = this.value.toLowerCase();

        document.querySelectorAll(".topic-item").forEach(item => {

            item.style.display =
                item.textContent.toLowerCase().includes(searchValue)
                    ? "flex"
                    : "none";

        });

    });


/* =====================================================
   24. DOWNLOAD PYTHON SYLLABUS
===================================================== */

document.getElementById("downloadSyllabus")
    .addEventListener("click", () => {

        let content =
            "SKILLPATH - PYTHON PROGRAMMING SYLLABUS\n\n";

        pythonModules.forEach((module, index) => {

            content += `MODULE ${index + 1}: ${module.name}\n`;

            module.topics.forEach(topic => {

                content += `   - ${topic}\n`;

            });

            content += "\n";

        });

        const blob = new Blob([content], {
            type: "text/plain"
        });

        const link = document.createElement("a");

        link.href = URL.createObjectURL(blob);

        link.download = "Python-Programming-Syllabus.txt";

        link.click();

        URL.revokeObjectURL(link.href);

    });


/* =====================================================
   25. INITIALIZE PYTHON DASHBOARD
===================================================== */

function initializePythonDashboard() {

    document.title = "SkillPath | Python Programming";

    document.querySelector(".java-symbol").textContent = "🐍";

    document.querySelector(".hero-copy h1").textContent =
        "Python Programming";

    document.querySelector(".hero-copy p").textContent =
        "Master Python from fundamentals to advanced programming!";

    document.getElementById("topicSearch").placeholder =
        "Search Python topics...";

    document.querySelector(".panel-heading span").textContent =
        `${pythonModules.length} Modules`;

    document.querySelector("#notesPanel h2").textContent =
        "Python Programming Notes";

    document.querySelector("#videosPanel h2").textContent =
        "Recommended Python Videos";

    document.querySelector("#tricksPanel h2").textContent =
        "Python Short Tricks & Quick Revision";

    document.querySelector("#practicePanel h2").textContent =
        "Python Practice & Interview Questions";

    document.querySelector("#practicePanel .muted").textContent =
        "Prepare for Python interviews with important questions and answers.";

    renderModules();

    renderTopics();

    renderVideos();

    renderTricks();

    renderRevision();

    renderQuestions();

}


/* =====================================================
   START APPLICATION
===================================================== */

initializePythonDashboard();