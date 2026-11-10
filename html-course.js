/* =====================================================
   SKILLPATH - HTML5 COMPLETE LEARNING SYSTEM
   12 Modules | 100 Topics | Interview | Coding
===================================================== */


/* =====================================================
   1. HTML COURSE SYLLABUS
===================================================== */

const htmlModules = [

    {
        title: "Introduction to HTML5",
        description: "Understand HTML, its history and basic webpage structure.",
        topics: [
            "Introduction to HTML",
            "History of HTML",
            "HTML Versions",
            "Features of HTML5",
            "HTML vs HTML5",
            "How Browsers Work",
            "HTML Elements",
            "HTML Tags",
            "HTML Attributes"
        ]
    },

    {
        title: "HTML Document Structure",
        description: "Learn how to create a properly structured HTML document.",
        topics: [
            "DOCTYPE Declaration",
            "HTML Root Element",
            "Head Element",
            "Body Element",
            "Title Element",
            "Meta Charset",
            "Viewport Meta Tag",
            "HTML Comments",
            "Nested Elements"
        ]
    },

    {
        title: "HTML Text Formatting",
        description: "Learn headings, paragraphs and text formatting elements.",
        topics: [
            "Heading Tags",
            "Paragraph Tag",
            "Line Break",
            "Horizontal Rule",
            "Bold Text",
            "Italic Text",
            "Strong Element",
            "Emphasis Element",
            "Preformatted Text"
        ]
    },

    {
        title: "HTML Links and Images",
        description: "Create hyperlinks and display images on webpages.",
        topics: [
            "Anchor Tag",
            "Internal Links",
            "External Links",
            "Email Links",
            "Telephone Links",
            "Image Tag",
            "Image Attributes",
            "Image Paths",
            "Figure and Figcaption"
        ]
    },

    {
        title: "HTML Lists",
        description: "Organize information using different HTML lists.",
        topics: [
            "Ordered Lists",
            "Unordered Lists",
            "Description Lists",
            "List Items",
            "Nested Lists",
            "Start Attribute",
            "Reversed Attribute",
            "List Type Attribute"
        ]
    },

    {
        title: "HTML Tables",
        description: "Display structured information using HTML tables.",
        topics: [
            "Table Element",
            "Table Rows",
            "Table Headers",
            "Table Data",
            "Table Caption",
            "Thead Element",
            "Tbody Element",
            "Tfoot Element"
        ]
    },

    {
        title: "HTML Forms",
        description: "Build forms to collect user information.",
        topics: [
            "Form Element",
            "Input Element",
            "Text Input",
            "Password Input",
            "Email Input",
            "Number Input",
            "Radio Buttons",
            "Checkboxes"
        ]
    },

    {
        title: "Advanced HTML Forms",
        description: "Explore form controls and validation attributes.",
        topics: [
            "Textarea",
            "Select Element",
            "Option Element",
            "Button Element",
            "Label Element",
            "Fieldset",
            "Legend",
            "Required Attribute"
        ]
    },

    {
        title: "HTML5 Semantic Elements",
        description: "Structure webpages using meaningful HTML5 elements.",
        topics: [
            "Semantic HTML",
            "Header Element",
            "Footer Element",
            "Nav Element",
            "Main Element",
            "Section Element",
            "Article Element",
            "Aside Element"
        ]
    },

    {
        title: "HTML5 Multimedia",
        description: "Add audio, video and embedded content.",
        topics: [
            "Audio Element",
            "Video Element",
            "Source Element",
            "Track Element",
            "Controls Attribute",
            "Autoplay Attribute",
            "Iframe Element",
            "Embed Element"
        ]
    },

    {
        title: "HTML5 APIs and Graphics",
        description: "Explore HTML graphics and browser capabilities.",
        topics: [
            "Canvas Element",
            "SVG Introduction",
            "Canvas vs SVG",
            "Geolocation API",
            "Drag and Drop API",
            "Web Storage API",
            "Local Storage",
            "Session Storage"
        ]
    },

    {
        title: "HTML Best Practices",
        description: "Learn accessibility, SEO and professional HTML development.",
        topics: [
            "HTML Validation",
            "Accessibility",
            "Alt Attribute",
            "ARIA Basics",
            "SEO Friendly HTML",
            "HTML Entities",
            "Character Encoding",
            "Responsive HTML",
            "HTML Best Practices"
        ]
    }

];


/* =====================================================
   2. GLOBAL VARIABLES
===================================================== */

let currentModule = 0;

let currentTopic = 0;

let currentPracticeMode = "interview";

let completedTopics = JSON.parse(
    localStorage.getItem("htmlCompletedTopics") || "[]"
);

let completedModules = JSON.parse(
    localStorage.getItem("htmlCompletedModules") || "[]"
);


/* =====================================================
   3. HTML NOTES DATABASE
===================================================== */

const htmlNotes = {

    "Introduction to HTML": {
        definition: "HTML stands for HyperText Markup Language. It is the standard markup language used to structure webpages.",
        syntax: "<h1>Hello World</h1>",
        example: "<h1>Welcome to SkillPath</h1><p>Learn HTML easily.</p>",
        explanation: "HTML uses elements and tags to organize content such as headings, paragraphs, images and links."
    },

    "History of HTML": {
        definition: "HTML was created by Tim Berners-Lee in 1991.",
        syntax: "HTML5 is the modern standard for HTML.",
        example: "<!DOCTYPE html>",
        explanation: "HTML evolved through multiple versions, introducing improved structure, multimedia and semantic elements."
    },

    "Features of HTML5": {
        definition: "HTML5 introduced semantic elements, native multimedia and browser APIs.",
        syntax: "<header></header><main></main><footer></footer>",
        example: "<video controls src='video.mp4'></video>",
        explanation: "HTML5 makes webpages easier to structure and supports modern web functionality."
    },

    "HTML Elements": {
        definition: "An HTML element consists of a start tag, content and usually an end tag.",
        syntax: "<tagname>Content</tagname>",
        example: "<p>This is a paragraph.</p>",
        explanation: "Elements define different parts of a webpage."
    },

    "HTML Tags": {
        definition: "HTML tags are keywords enclosed in angle brackets.",
        syntax: "<tagname>Content</tagname>",
        example: "<h1>Heading</h1>",
        explanation: "Tags tell the browser how to interpret webpage content."
    },

    "HTML Attributes": {
        definition: "Attributes provide additional information about HTML elements.",
        syntax: "<tag attribute='value'>Content</tag>",
        example: "<a href='https://example.com'>Visit</a>",
        explanation: "Attributes are generally written inside the opening tag."
    },

    "Heading Tags": {
        definition: "HTML provides six heading levels, from h1 to h6.",
        syntax: "<h1>Main Heading</h1>",
        example: "<h1>HTML</h1><h2>Introduction</h2>",
        explanation: "Use headings in a logical hierarchy to organize content."
    },

    "Paragraph Tag": {
        definition: "The paragraph element defines a block of text.",
        syntax: "<p>Text</p>",
        example: "<p>Welcome to HTML learning.</p>",
        explanation: "Browsers normally display paragraphs as separate blocks."
    },

    "Anchor Tag": {
        definition: "The anchor element creates hyperlinks.",
        syntax: "<a href='URL'>Link Text</a>",
        example: "<a href='https://www.google.com'>Google</a>",
        explanation: "The href attribute specifies the link destination."
    },

    "Image Tag": {
        definition: "The img element embeds an image in a webpage.",
        syntax: "<img src='image.jpg' alt='Description'>",
        example: "<img src='flower.jpg' alt='Red flower'>",
        explanation: "The alt attribute provides alternative text for accessibility."
    },

    "Ordered Lists": {
        definition: "An ordered list displays items in a numbered sequence.",
        syntax: "<ol><li>Item</li></ol>",
        example: "<ol><li>HTML</li><li>CSS</li></ol>",
        explanation: "Use ol when the order of items is meaningful."
    },

    "Unordered Lists": {
        definition: "An unordered list displays items with bullets.",
        syntax: "<ul><li>Item</li></ul>",
        example: "<ul><li>Java</li><li>Python</li></ul>",
        explanation: "Use ul when item order is not important."
    },

    "Table Element": {
        definition: "The table element represents tabular data.",
        syntax: "<table><tr><td>Data</td></tr></table>",
        example: "<table><tr><th>Name</th></tr><tr><td>Kalpana</td></tr></table>",
        explanation: "Tables contain rows, headings and data cells."
    },

    "Form Element": {
        definition: "The form element creates a form for collecting user input.",
        syntax: "<form action='/submit' method='post'></form>",
        example: "<form><input type='text' name='username'><button>Submit</button></form>",
        explanation: "Forms commonly use input, label, select and button elements."
    },

    "Input Element": {
        definition: "The input element creates an interactive form control.",
        syntax: "<input type='text'>",
        example: "<input type='email' placeholder='Enter email'>",
        explanation: "Different input types provide different controls."
    },

    "Semantic HTML": {
        definition: "Semantic HTML uses elements that describe the meaning of their content.",
        syntax: "<header><main><footer>",
        example: "<article><h2>News</h2><p>Latest news.</p></article>",
        explanation: "Semantic elements improve document structure and accessibility."
    },

    "Header Element": {
        definition: "The header element represents introductory content.",
        syntax: "<header>Content</header>",
        example: "<header><h1>My Website</h1></header>",
        explanation: "A header can represent introductory content for a page or section."
    },

    "Footer Element": {
        definition: "The footer element represents footer information.",
        syntax: "<footer>Content</footer>",
        example: "<footer>Copyright 2026</footer>",
        explanation: "It commonly contains copyright information and related links."
    },

    "Audio Element": {
        definition: "The audio element embeds sound content.",
        syntax: "<audio controls src='audio.mp3'></audio>",
        example: "<audio controls><source src='song.mp3' type='audio/mpeg'></audio>",
        explanation: "The controls attribute displays playback controls."
    },

    "Video Element": {
        definition: "The video element embeds video content.",
        syntax: "<video controls src='video.mp4'></video>",
        example: "<video controls width='400'><source src='movie.mp4' type='video/mp4'></video>",
        explanation: "HTML supports native video playback without requiring an external plugin."
    },

    "Canvas Element": {
        definition: "The canvas element provides a drawable area controlled using JavaScript.",
        syntax: "<canvas id='myCanvas' width='300' height='150'></canvas>",
        example: "<canvas id='demo' width='300' height='150'></canvas>",
        explanation: "Canvas is useful for drawings, animations and graphics."
    },

    "Local Storage": {
        definition: "Local Storage stores key-value data in the browser without an automatic expiration time.",
        syntax: "localStorage.setItem('name', 'Kalpana');",
        example: "let name = localStorage.getItem('name');",
        explanation: "Data generally remains available across browser sessions for the same origin."
    },

    "Session Storage": {
        definition: "Session Storage stores key-value data for a browser tab session.",
        syntax: "sessionStorage.setItem('user', 'Kalpana');",
        example: "let user = sessionStorage.getItem('user');",
        explanation: "Session storage is normally cleared when the tab session ends."
    }

};


/* =====================================================
   4. YOUTUBE RESOURCES
===================================================== */

const htmlVideos = [

    {
        title: "HTML Full Course for Beginners",
        channel: "freeCodeCamp",
        url: "https://www.youtube.com/results?search_query=freecodecamp+html+full+course"
    },

    {
        title: "HTML Tutorial",
        channel: "CodeWithHarry",
        url: "https://www.youtube.com/results?search_query=CodeWithHarry+HTML+Tutorial"
    },

    {
        title: "HTML Full Course",
        channel: "Apna College",
        url: "https://www.youtube.com/results?search_query=Apna+College+HTML+Full+Course"
    },

    {
        title: "HTML Tutorial",
        channel: "Telusko",
        url: "https://www.youtube.com/results?search_query=Telusko+HTML+Tutorial"
    },

    {
        title: "HTML5 Complete Tutorial",
        channel: "Programming with Mosh",
        url: "https://www.youtube.com/results?search_query=Programming+with+Mosh+HTML+Tutorial"
    },

    {
        title: "HTML Complete Course",
        channel: "Bro Code",
        url: "https://www.youtube.com/results?search_query=Bro+Code+HTML+Full+Course"
    }

];


/* =====================================================
   5. SHORT TRICKS
===================================================== */

const htmlTricks = [

    {
        title: "HTML Boilerplate",
        description: "Type ! in supported editors such as VS Code and press Tab or Enter to generate an HTML template."
    },

    {
        title: "Emmet Multiple Elements",
        description: "Use ul>li*5 to generate an unordered list with five list items."
    },

    {
        title: "Quick Link",
        description: "Use a:link to quickly generate an anchor element."
    },

    {
        title: "Quick Image",
        description: "Use img to generate an image element in supported Emmet editors."
    },

    {
        title: "Comment Shortcut",
        description: "Use Ctrl + / in VS Code to toggle an HTML comment."
    },

    {
        title: "Multiple Divs",
        description: "Use div.box*3 to generate three div elements with class box."
    },

    {
        title: "Parent and Child",
        description: "Use div>h2+p to create a div containing a heading and paragraph."
    },

    {
        title: "Attribute Shortcut",
        description: "Use input:email to create an email input in supported Emmet editors."
    },

    {
        title: "Open New Tab",
        description: "Use target='_blank' on an anchor element to request opening a new browsing context."
    },

    {
        title: "Image Accessibility",
        description: "Always provide meaningful alt text for informative images."
    }

];


/* =====================================================
   6. QUICK REVISION
===================================================== */

const htmlRevision = [

    "HTML stands for HyperText Markup Language.",

    "HTML is a markup language, not a programming language.",

    "HTML5 is the modern HTML standard.",

    "The DOCTYPE declaration identifies the document as HTML.",

    "HTML headings range from h1 to h6.",

    "The p element defines a paragraph.",

    "The a element creates hyperlinks.",

    "The img element embeds images.",

    "The ul element creates unordered lists.",

    "The ol element creates ordered lists.",

    "The li element represents a list item.",

    "The table element creates tabular data.",

    "The tr element represents a table row.",

    "The th element represents a table header cell.",

    "The td element represents a table data cell.",

    "The form element creates forms.",

    "The input element creates input controls.",

    "The label element provides a label for form controls.",

    "The header element represents introductory content.",

    "The footer element represents footer content.",

    "The nav element represents navigation links.",

    "The main element represents the main content.",

    "The section element represents a thematic section.",

    "The article element represents self-contained content.",

    "The audio element embeds sound.",

    "The video element embeds video.",

    "The iframe element embeds another browsing context.",

    "The canvas element supports script-driven graphics.",

    "The alt attribute provides alternative image text.",

    "Local Storage persists data across browser sessions."

];


/* =====================================================
   7. INTERVIEW QUESTIONS - 100
===================================================== */

const interviewQuestions = [

    ["What is HTML?", "HTML stands for HyperText Markup Language. It structures content on webpages."],

    ["What is HTML5?", "HTML5 is the modern HTML standard with semantic elements, multimedia and APIs."],

    ["Is HTML a programming language?", "No. HTML is a markup language."],

    ["Who created HTML?", "Tim Berners-Lee created HTML."],

    ["What is a tag?", "A tag is markup enclosed in angle brackets."],

    ["What is an element?", "An element consists of a start tag, content and usually an end tag."],

    ["What is an attribute?", "An attribute provides additional information about an HTML element."],

    ["What is DOCTYPE?", "DOCTYPE declares the document type. HTML5 uses <!DOCTYPE html>."],

    ["What is the root element?", "The html element is the root element of an HTML document."],

    ["What is the head element?", "It contains metadata and references to resources."],

    ["What is the body element?", "It contains the visible page content."],

    ["What is a meta tag?", "It provides metadata about the HTML document."],

    ["What is charset UTF-8?", "UTF-8 is a character encoding that supports a wide range of characters."],

    ["What is the viewport meta tag?", "It helps control the viewport dimensions and scaling on mobile devices."],

    ["What are heading tags?", "HTML provides six heading levels, h1 through h6."],

    ["What is a paragraph tag?", "The p element defines a paragraph."],

    ["What is a br tag?", "The br element creates a line break."],

    ["What is an hr tag?", "The hr element represents a thematic break."],

    ["What is a comment in HTML?", "A comment is text ignored by the browser, written as <!-- comment -->."],

    ["What is a void element?", "A void element cannot have child content or an end tag, such as img or br."],

    ["What is the difference between div and span?", "Div is a generic block container; span is a generic inline container."],

    ["What is the anchor tag?", "The a element creates hyperlinks."],

    ["What is href?", "href specifies the destination of a hyperlink."],

    ["What is target blank?", "target='_blank' requests opening a link in a new browsing context."],

    ["What is an absolute URL?", "It contains the complete address of a resource."],

    ["What is a relative URL?", "It specifies a resource location relative to the current document or base URL."],

    ["What is the image tag?", "The img element embeds an image."],

    ["What is alt?", "Alt provides alternative text for an image."],

    ["What is a favicon?", "A favicon is a small icon associated with a website."],

    ["What is an ordered list?", "An ordered list displays items in a sequence."],

    ["What is an unordered list?", "An unordered list displays items with bullets."],

    ["What is a description list?", "It represents terms and their descriptions using dl, dt and dd."],

    ["What is a nested list?", "A list placed inside another list item is a nested list."],

    ["What is a table?", "A table represents data in rows and columns."],

    ["What is tr?", "The tr element represents a table row."],

    ["What is th?", "The th element represents a header cell."],

    ["What is td?", "The td element represents a data cell."],

    ["What is colspan?", "It allows a table cell to span multiple columns."],

    ["What is rowspan?", "It allows a table cell to span multiple rows."],

    ["What is caption?", "The caption element provides a title for a table."],

    ["What is a form?", "A form collects and submits user input."],

    ["What is the input tag?", "It creates interactive form controls."],

    ["What is the password input?", "It creates a field that masks entered characters."],

    ["What is an email input?", "It creates an input intended for email addresses with browser validation."],

    ["What is a radio button?", "It lets a user select one option from a group."],

    ["What is a checkbox?", "It lets a user select zero or more options."],

    ["What is a placeholder?", "It displays a short hint inside an input."],

    ["What is the required attribute?", "It indicates that a control must have a value before form submission."],

    ["What is the readonly attribute?", "It makes a form control's value uneditable by the user."],

    ["What is the disabled attribute?", "It disables a form control."],

    ["What is the label element?", "It provides an accessible label for a form control."],

    ["What is textarea?", "It creates a multiline text input."],

    ["What is select?", "It creates a dropdown selection control."],

    ["What is option?", "It defines an option inside a select or datalist element."],

    ["What is fieldset?", "It groups related form controls."],

    ["What is legend?", "It provides a caption for a fieldset."],

    ["What is GET method?", "GET requests a resource and commonly sends form data in the URL query string."],

    ["What is POST method?", "POST submits data in the request body."],

    ["What is semantic HTML?", "Semantic HTML uses elements that communicate the meaning of content."],

    ["What is header?", "It represents introductory content."],

    ["What is footer?", "It represents footer information for a page or section."],

    ["What is nav?", "It represents a section of navigation links."],

    ["What is main?", "It represents the dominant content of a document."],

    ["What is section?", "It represents a thematic grouping of content."],

    ["What is article?", "It represents self-contained content."],

    ["What is aside?", "It represents indirectly related content."],

    ["What is the audio element?", "It embeds audio content."],

    ["What is the video element?", "It embeds video content."],

    ["What is the source element?", "It specifies alternative media resources for audio, video or picture."],

    ["What is iframe?", "It embeds another HTML page or browsing context."],

    ["What is the controls attribute?", "It displays built-in media controls."],

    ["What is autoplay?", "It requests automatic media playback, subject to browser policies."],

    ["What is muted?", "It sets media to start without sound."],

    ["What is canvas?", "It provides a drawable area controlled using JavaScript."],

    ["What is SVG?", "SVG is a vector graphics format based on XML."],

    ["What is the difference between SVG and Canvas?", "SVG uses scalable vector elements; Canvas draws graphics into a bitmap surface."],

    ["What is Geolocation API?", "It allows websites to request the user's geographic location with permission."],

    ["What is Drag and Drop API?", "It enables draggable elements and drop targets."],

    ["What is Web Storage?", "It provides browser storage through Local Storage and Session Storage."],

    ["What is Local Storage?", "It stores key-value data without an automatic expiration time."],

    ["What is Session Storage?", "It stores key-value data for a browser tab session."],

    ["What is the difference between Local Storage and Session Storage?", "Local Storage persists across sessions; Session Storage is scoped to a tab session."],

    ["What is HTML entity?", "An HTML entity represents a reserved or special character."],

    ["What is &nbsp;?", "It represents a non-breaking space."],

    ["What is &lt;?", "It represents the less-than character."],

    ["What is &gt;?", "It represents the greater-than character."],

    ["What is accessibility?", "Accessibility makes websites usable by people with different abilities."],

    ["What is ARIA?", "ARIA provides attributes that improve accessibility semantics when native HTML is insufficient."],

    ["What is SEO?", "SEO means Search Engine Optimization."],

    ["How does HTML help SEO?", "Meaningful structure, headings, titles and descriptive content help search engines understand a page."],

    ["What is HTML validation?", "It checks HTML markup against applicable standards."],

    ["What is the difference between id and class?", "An id identifies one element within a document; a class can be shared by many elements."],

    ["Can multiple elements have the same class?", "Yes, multiple elements can share a class."],

    ["Should IDs be unique?", "Yes, IDs should be unique within a document."],

    ["What is data attribute?", "A data-* attribute stores custom data on an HTML element."],

    ["What is contenteditable?", "It makes an element's content editable by the user."],

    ["What is the download attribute?", "It suggests downloading a linked resource."],

    ["What is the picture element?", "It provides alternative image sources for different conditions."],

    ["What is the details element?", "It creates a disclosure widget that can show or hide content."],

    ["What is the summary element?", "It provides the visible label for a details element."],

    ["What is the progress element?", "It represents the completion progress of a task."],

    ["What is the meter element?", "It represents a scalar measurement within a known range."],

    ["What are best practices in HTML?", "Use semantic elements, accessible labels, valid markup, meaningful headings and descriptive alt text."]

];


/* =====================================================
   8. MCQ QUESTIONS
===================================================== */

const htmlMCQs = [

    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Markup Language",
            "Home Text Markup Language"
        ],
        answer: 0
    },

    {
        question: "Which tag creates the largest default heading?",
        options: ["h6", "h1", "head", "heading"],
        answer: 1
    },

    {
        question: "Which tag creates a hyperlink?",
        options: ["link", "href", "a", "url"],
        answer: 2
    },

    {
        question: "Which attribute specifies an image path?",
        options: ["href", "src", "alt", "path"],
        answer: 1
    },

    {
        question: "Which tag creates an ordered list?",
        options: ["ul", "li", "dl", "ol"],
        answer: 3
    },

    {
        question: "Which tag creates a paragraph?",
        options: ["p", "para", "text", "pg"],
        answer: 0
    },

    {
        question: "Which element contains visible page content?",
        options: ["head", "meta", "body", "title"],
        answer: 2
    },

    {
        question: "Which tag creates a table row?",
        options: ["td", "tr", "th", "table-row"],
        answer: 1
    },

    {
        question: "Which input type hides entered characters?",
        options: ["text", "email", "hidden", "password"],
        answer: 3
    },

    {
        question: "Which element is semantic?",
        options: ["div", "span", "article", "b"],
        answer: 2
    },

    {
        question: "Which element embeds video?",
        options: ["movie", "video", "media", "play"],
        answer: 1
    },

    {
        question: "Which attribute provides alternative image text?",
        options: ["alt", "src", "href", "title"],
        answer: 0
    },

    {
        question: "Which element creates a dropdown?",
        options: ["input", "textarea", "button", "select"],
        answer: 3
    },

    {
        question: "Which tag creates a line break?",
        options: ["hr", "br", "p", "break"],
        answer: 1
    },

    {
        question: "Which element represents navigation?",
        options: ["nav", "aside", "main", "footer"],
        answer: 0
    },

    {
        question: "Which attribute makes an input mandatory?",
        options: ["validate", "mandatory", "required", "must"],
        answer: 2
    },

    {
        question: "Which storage persists across browser sessions?",
        options: ["Session Storage", "Local Storage", "Temporary Storage", "Tab Storage"],
        answer: 1
    },

    {
        question: "Which tag represents the document title?",
        options: ["heading", "meta", "header", "title"],
        answer: 3
    },

    {
        question: "Which element groups form controls?",
        options: ["fieldset", "group", "formgroup", "control"],
        answer: 0
    },

    {
        question: "Which tag embeds audio?",
        options: ["sound", "music", "audio", "mp3"],
        answer: 2
    }

];


/* =====================================================
   9. CODING CHALLENGES - 100
===================================================== */

const codingProblems = [

    "Create a basic HTML webpage.",
    "Create a webpage with a title.",
    "Display Hello World using h1.",
    "Create all six heading levels.",
    "Create three paragraphs.",
    "Create bold and italic text.",
    "Create a horizontal line.",
    "Create a line break example.",
    "Write an HTML comment.",
    "Create a webpage with different text styles.",

    "Create an external hyperlink.",
    "Create an internal page link.",
    "Create an email link.",
    "Create a telephone link.",
    "Create an image with alt text.",
    "Display three images.",
    "Create an image with fixed dimensions.",
    "Create a clickable image link.",
    "Create a figure with caption.",
    "Create a webpage with text and images.",

    "Create an ordered list.",
    "Create an unordered list.",
    "Create a description list.",
    "Create a nested list.",
    "Create a list of programming languages.",
    "Create a numbered shopping list.",
    "Create a reversed ordered list.",
    "Create a list with a custom starting number.",
    "Create a nested navigation list.",
    "Create a webpage containing all list types.",

    "Create a basic table.",
    "Create a student marks table.",
    "Create an employee details table.",
    "Create a table with headings.",
    "Create a table with a caption.",
    "Create a table using colspan.",
    "Create a table using rowspan.",
    "Create a table with thead and tbody.",
    "Create a product price table.",
    "Create a timetable using HTML tables.",

    "Create a basic registration form.",
    "Create a login form.",
    "Create an email input form.",
    "Create a password input.",
    "Create radio buttons for gender selection.",
    "Create checkboxes for hobbies.",
    "Create a dropdown for countries.",
    "Create a textarea for feedback.",
    "Create a date input.",
    "Create a number input.",

    "Create a form with required fields.",
    "Create a form using labels.",
    "Create a form with fieldset and legend.",
    "Create a search form.",
    "Create a file upload form.",
    "Create a form with submit and reset buttons.",
    "Create a form with a range input.",
    "Create a form with a color picker.",
    "Create a form with a URL input.",
    "Create a complete contact form.",

    "Create a semantic webpage header.",
    "Create a navigation bar using nav.",
    "Create a webpage using main.",
    "Create a webpage using section.",
    "Create a news article using article.",
    "Create a sidebar using aside.",
    "Create a webpage footer.",
    "Create a semantic blog layout.",
    "Create a portfolio structure using semantic HTML.",
    "Create a complete semantic webpage.",

    "Embed an audio file.",
    "Embed a video file.",
    "Create video controls.",
    "Create an iframe for a webpage.",
    "Embed a YouTube video.",
    "Create a video with multiple sources.",
    "Create audio with multiple sources.",
    "Create a webpage with audio and video.",
    "Create a figure with multimedia.",
    "Create a multimedia webpage.",

    "Create a canvas element.",
    "Create an SVG circle.",
    "Create an SVG rectangle.",
    "Create a progress bar using HTML.",
    "Create a meter element.",
    "Create a details and summary element.",
    "Create a dialog element.",
    "Create a webpage using HTML entities.",
    "Create a webpage with data attributes.",
    "Create an editable content element.",

    "Build a personal portfolio structure.",
    "Build a restaurant menu webpage.",
    "Build an online resume webpage.",
    "Build a travel information webpage.",
    "Build a college information webpage.",
    "Build a product information page.",
    "Build a simple blog webpage.",
    "Build an event registration page.",
    "Build a photography gallery structure.",
    "Build a complete multipage website structure."

];


/* =====================================================
   10. PRACTICAL PROJECTS - 5
===================================================== */

const htmlProjects = [

    {
        title: "Personal Portfolio Website",
        level: "Beginner",
        description: "Create a portfolio containing your introduction, education, skills, projects and contact information.",
        skills: "HTML Structure, Links, Images, Lists"
    },

    {
        title: "Restaurant Menu Website",
        level: "Beginner",
        description: "Create a restaurant webpage with food categories, menu items, prices and restaurant information.",
        skills: "Headings, Tables, Lists, Images"
    },

    {
        title: "Online Resume Website",
        level: "Intermediate",
        description: "Build a professional resume webpage with personal details, education, experience and skills.",
        skills: "Semantic HTML, Lists, Tables"
    },

    {
        title: "Event Registration Website",
        level: "Intermediate",
        description: "Create an event registration webpage with user details, date selection and form validation.",
        skills: "Forms, Inputs, Labels, Validation"
    },

    {
        title: "Online Learning Website",
        level: "Advanced",
        description: "Build a learning platform structure with courses, navigation, video sections and contact forms.",
        skills: "Semantic HTML, Multimedia, Forms, Iframes"
    }

];


/* =====================================================
   11. SELECT MODULE
===================================================== */

function selectModule(index) {

    currentModule = index;

    currentTopic = 0;

    renderModules();

    renderTopics();

}


/* =====================================================
   12. RENDER MODULES
===================================================== */

function renderModules() {

    const moduleList = document.getElementById("moduleList");

    if (!moduleList) return;

    moduleList.innerHTML = "";

    htmlModules.forEach((module, index) => {

        const button = document.createElement("button");

        button.className = "module-item";

        if (index === currentModule) {
            button.classList.add("active");
        }

        if (completedModules.includes(index)) {
            button.classList.add("completed");
        }

        button.innerHTML = `
            <strong>Module ${index + 1}</strong>
            <br>
            <small>${module.title}</small>
            <br>
            <small>${module.topics.length} Topics</small>
        `;

        button.addEventListener("click", () => {
            selectModule(index);
        });

        moduleList.appendChild(button);

    });

}


/* =====================================================
   13. RENDER TOPICS
===================================================== */

function renderTopics() {

    const module = htmlModules[currentModule];

    document.getElementById("moduleLabel").textContent =
        `MODULE ${currentModule + 1}`;

    document.getElementById("moduleTitle").textContent =
        module.title;

    document.getElementById("moduleDescription").textContent =
        module.description;

    document.getElementById("moduleTopicCount").textContent =
        `${module.topics.length} Topics`;

    const topicList = document.getElementById("topicList");

    topicList.innerHTML = "";

    module.topics.forEach((topic, index) => {

        const topicKey = `${currentModule}-${index}`;

        const completed = completedTopics.includes(topicKey);

        const label = document.createElement("label");

        label.className = "topic-item";

        if (completed) {
            label.classList.add("completed");
        }

        label.innerHTML = `
            <input type="checkbox"
                ${completed ? "checked" : ""}
                data-topic="${topicKey}">

            <span>${topic}</span>
        `;

        const checkbox = label.querySelector("input");

        checkbox.addEventListener("change", function () {

            if (this.checked) {

                if (!completedTopics.includes(topicKey)) {
                    completedTopics.push(topicKey);
                }

            } else {

                completedTopics = completedTopics.filter(
                    item => item !== topicKey
                );

            }

            saveProgress();

            updateProgress();

            label.classList.toggle("completed", this.checked);

        });

        label.addEventListener("click", function (event) {

            if (event.target.tagName === "INPUT") return;

            const topicIndex = index;

            currentTopic = topicIndex;

            showTopicNotes(topic);

        });

        topicList.appendChild(label);

    });

    updateVideoLink();

}


/* =====================================================
   14. MARK MODULE COMPLETE
===================================================== */

function completeCurrentModule() {

    if (!completedModules.includes(currentModule)) {

        completedModules.push(currentModule);

    }

    htmlModules[currentModule].topics.forEach((topic, index) => {

        const key = `${currentModule}-${index}`;

        if (!completedTopics.includes(key)) {
            completedTopics.push(key);
        }

    });

    saveProgress();

    renderModules();

    renderTopics();

    updateProgress();

    alert("Congratulations! Module completed successfully! 🎉");

}


/* =====================================================
   15. PROGRESS TRACKING
===================================================== */

function saveProgress() {

    localStorage.setItem(
        "htmlCompletedTopics",
        JSON.stringify(completedTopics)
    );

    localStorage.setItem(
        "htmlCompletedModules",
        JSON.stringify(completedModules)
    );

}


function updateProgress() {

    const totalTopics = htmlModules.reduce(
        (total, module) => total + module.topics.length,
        0
    );

    const completed = completedTopics.length;

    const percentage = Math.round(
        (completed / totalTopics) * 100
    );

    document.getElementById("progressPercent").textContent =
        `${percentage}%`;

    document.getElementById("progressFill").style.width =
        `${percentage}%`;

    document.getElementById("progressCount").textContent =
        `${completed} / ${totalTopics} Topics`;

}


/* =====================================================
   16. RESET PROGRESS
===================================================== */

function resetProgress() {

    const confirmReset = confirm(
        "Are you sure you want to reset your HTML course progress?"
    );

    if (!confirmReset) return;

    completedTopics = [];

    completedModules = [];

    saveProgress();

    renderModules();

    renderTopics();

    updateProgress();

}


/* =====================================================
   17. NOTES DISPLAY
===================================================== */

function showTopicNotes(topic) {

    const notesContent = document.getElementById("notesContent");

    const notes = htmlNotes[topic];

    if (!notes) {

        notesContent.innerHTML = `
            <h3>${topic}</h3>

            <p>
                This topic is part of the HTML5 learning syllabus.
                Study the concept and practice writing HTML code.
            </p>
        `;

    } else {

        notesContent.innerHTML = `
            <h3>${topic}</h3>

            <h4>Definition</h4>

            <p>${notes.definition}</p>

            <h4>Syntax</h4>

            <pre><code>${escapeHTML(notes.syntax)}</code></pre>

            <h4>Example</h4>

            <pre><code>${escapeHTML(notes.example)}</code></pre>

            <h4>Explanation</h4>

            <p>${notes.explanation}</p>
        `;

    }

    switchTab("notes");

}


function escapeHTML(value) {

    return value.replace(/[&<>"']/g, function (character) {

        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return entities[character];

    });

}


/* =====================================================
   18. YOUTUBE VIDEOS
===================================================== */

function renderVideos() {

    const allVideos = document.getElementById("allVideos");

    const videoList = document.getElementById("videoList");

    const videoHTML = htmlVideos.map(video => `

        <article class="video-card">

            <h3>${video.title}</h3>

            <p>Channel: ${video.channel}</p>

            <a href="${video.url}"
                target="_blank"
                rel="noopener noreferrer">

                ▶ Watch on YouTube ↗

            </a>

        </article>

    `).join("");

    if (allVideos) {
        allVideos.innerHTML = videoHTML;
    }

    if (videoList) {
        videoList.innerHTML = videoHTML;
    }

}


/* =====================================================
   19. CURRENT MODULE VIDEO LINK
===================================================== */

function updateVideoLink() {

    const watchVideo = document.getElementById("watchVideo");

    const videoChannel = document.getElementById("videoChannel");

    const module = htmlModules[currentModule];

    const searchURL =
        "https://www.youtube.com/results?search_query=" +
        encodeURIComponent("HTML " + module.title + " tutorial");

    watchVideo.href = searchURL;

    videoChannel.href = htmlVideos[0].url;

}


/* =====================================================
   20. SHORT TRICKS
===================================================== */

function renderTricks() {

    const allTricks = document.getElementById("allTricks");

    const trickPreview = document.getElementById("trickPreview");

    if (allTricks) {

        allTricks.innerHTML = htmlTricks.map(trick => `

            <article class="trick-card">

                <h3>💡 ${trick.title}</h3>

                <p>${trick.description}</p>

            </article>

        `).join("");

    }

    if (trickPreview) {

        trickPreview.innerHTML = htmlTricks.slice(0, 5).map(trick => `

            <li>${trick.title}</li>

        `).join("");

    }

}


/* =====================================================
   21. QUICK REVISION
===================================================== */

function renderRevision() {

    const revisionPreview = document.getElementById("revisionPreview");

    if (!revisionPreview) return;

    revisionPreview.innerHTML = htmlRevision.slice(0, 8).map(item => `

        <li>${item}</li>

    `).join("");

}


/* =====================================================
   22. INTERVIEW QUESTIONS
===================================================== */

function renderInterviewQuestions() {

    const quizList = document.getElementById("quizList");

    if (!quizList) return;

    quizList.innerHTML = "";

    interviewQuestions.forEach((item, index) => {

        const card = document.createElement("article");

        card.className = "question-card";

        const heading = document.createElement("h3");

        heading.textContent = `Q${index + 1}. ${item[0]}`;

        const answer = document.createElement("p");

        answer.className = "answer";

        answer.textContent = item[1];

        const button = document.createElement("button");

        button.textContent = "Show Answer";

        button.addEventListener("click", function () {

            const visible = answer.style.display === "block";

            answer.style.display = visible ? "none" : "block";

            button.textContent = visible
                ? "Show Answer"
                : "Hide Answer";

        });

        card.appendChild(heading);

        card.appendChild(button);

        card.appendChild(answer);

        quizList.appendChild(card);

    });

    const questionPreview =
        document.getElementById("questionPreview");

    if (questionPreview) {

        questionPreview.innerHTML = `
            <p>100 HTML interview questions available.</p>
            <p>Practice beginner to advanced concepts.</p>
        `;

    }

}


/* =====================================================
   23. MCQ PRACTICE
===================================================== */

function renderMCQs() {

    const container = document.getElementById("mcqContainer");

    if (!container) return;

    container.innerHTML = "";

    let score = 0;

    htmlMCQs.forEach((mcq, index) => {

        const card = document.createElement("div");

        card.className = "question-card";

        const heading = document.createElement("h3");

        heading.textContent = `Q${index + 1}. ${mcq.question}`;

        card.appendChild(heading);

        mcq.options.forEach((option, optionIndex) => {

            const label = document.createElement("label");

            label.style.display = "block";

            label.style.margin = "12px 0";

            const radio = document.createElement("input");

            radio.type = "radio";

            radio.name = `mcq-${index}`;

            radio.value = optionIndex;

            label.appendChild(radio);

            label.appendChild(
                document.createTextNode(" " + option)
            );

            card.appendChild(label);

        });

        container.appendChild(card);

    });

    const submit = document.createElement("button");

    submit.className = "primary-button";

    submit.textContent = "Submit MCQ Test";

    submit.style.marginTop = "20px";

    submit.addEventListener("click", function () {

        score = 0;

        htmlMCQs.forEach((mcq, index) => {

            const selected = document.querySelector(
                `input[name="mcq-${index}"]:checked`
            );

            if (selected && Number(selected.value) === mcq.answer) {

                score++;

            }

        });

        alert(
            `Your Score: ${score} / ${htmlMCQs.length}\n` +
            `Percentage: ${Math.round(score / htmlMCQs.length * 100)}%`
        );

    });

    container.appendChild(submit);

}


/* =====================================================
   24. CODING CHALLENGES
===================================================== */

function renderCodingProblems() {

    const problemList =
        document.getElementById("codingProblemList");

    if (!problemList) return;

    problemList.innerHTML = "";

    codingProblems.forEach((problem, index) => {

        const button = document.createElement("button");

        button.className = "problem-item";

        button.textContent = `Challenge ${index + 1}: ${problem}`;

        button.addEventListener("click", function () {

            document.querySelectorAll(".problem-item")
                .forEach(item => item.classList.remove("active"));

            button.classList.add("active");

            const editor =
                document.getElementById("htmlCodeEditor");

            editor.value = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HTML Challenge ${index + 1}</title>
</head>
<body>

    <!-- ${problem} -->

</body>
</html>`;

        });

        problemList.appendChild(button);

    });

}


/* =====================================================
   25. LIVE HTML CODE EDITOR
===================================================== */

function runHTMLCode() {

    const code = document.getElementById("htmlCodeEditor").value;

    const output = document.getElementById("htmlOutput");

    output.srcdoc = code;

}


function resetHTMLCode() {

    document.getElementById("htmlCodeEditor").value =
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My First Page</title>
</head>
<body>

    <h1>Hello SkillPath!</h1>
    <p>My first HTML webpage.</p>

</body>
</html>`;

    runHTMLCode();

}


/* =====================================================
   26. PROJECTS
===================================================== */

function renderProjects() {

    const projectList = document.getElementById("projectList");

    if (!projectList) return;

    projectList.innerHTML = htmlProjects.map((project, index) => `

        <article class="project-card">

            <h3>${index + 1}. ${project.title}</h3>

            <p>${project.description}</p>

            <span>Level: ${project.level}</span>

            <br>

            <span>Skills: ${project.skills}</span>

        </article>

    `).join("");

}


/* =====================================================
   27. TAB NAVIGATION
===================================================== */

function switchTab(tabName) {

    document.querySelectorAll(".tab").forEach(tab => {

        tab.classList.toggle(
            "active",
            tab.dataset.tab === tabName
        );

    });

    document.querySelectorAll(".tab-panel").forEach(panel => {

        panel.classList.toggle(
            "active",
            panel.id === `${tabName}Panel`
        );

    });

}


/* =====================================================
   28. SEARCH HTML TOPICS
===================================================== */

function searchHTMLTopics() {

    const searchInput = document.getElementById("topicSearch");

    if (!searchInput) return;

    searchInput.addEventListener("input", function () {

        const searchValue = this.value.toLowerCase().trim();

        document.querySelectorAll(".module-item").forEach((module, index) => {

            const moduleData = htmlModules[index];

            const matchesModule =
                moduleData.title.toLowerCase().includes(searchValue);

            const matchesTopic = moduleData.topics.some(topic =>
                topic.toLowerCase().includes(searchValue)
            );

            module.style.display =
                matchesModule || matchesTopic ? "block" : "none";

        });

    });

}


/* =====================================================
   29. DOWNLOAD SYLLABUS
===================================================== */

function downloadHTMLSyllabus() {

    let content = "SKILLPATH - COMPLETE HTML5 SYLLABUS\n\n";

    htmlModules.forEach((module, index) => {

        content += `MODULE ${index + 1}: ${module.title}\n`;

        content += `${module.description}\n\n`;

        module.topics.forEach((topic, topicIndex) => {

            content += `${topicIndex + 1}. ${topic}\n`;

        });

        content += "\n----------------------------------\n\n";

    });

    const blob = new Blob([content], {
        type: "text/plain"
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = "SkillPath_HTML5_Syllabus.txt";

    link.click();

    URL.revokeObjectURL(url);

}


/* =====================================================
   30. PRACTICE MODE SWITCHING
===================================================== */

function setupPracticeModes() {

    document.querySelectorAll(".practice-mode").forEach(button => {

        button.addEventListener("click", function () {

            document.querySelectorAll(".practice-mode").forEach(item => {

                item.classList.remove("active");

            });

            this.classList.add("active");

            currentPracticeMode = this.dataset.practice;

            const quizList = document.getElementById("quizList");

            const mcqContainer =
                document.getElementById("mcqContainer");

            if (currentPracticeMode === "interview") {

                quizList.style.display = "flex";

                mcqContainer.style.display = "none";

                renderInterviewQuestions();

            } else {

                quizList.style.display = "none";

                mcqContainer.style.display = "block";

                renderMCQs();

            }

        });

    });

}


/* =====================================================
   31. BUTTON EVENT LISTENERS
===================================================== */

function setupEvents() {

    document.querySelectorAll(".tab").forEach(button => {

        button.addEventListener("click", function () {

            switchTab(this.dataset.tab);

        });

    });


    document.querySelectorAll("[data-go-tab]").forEach(button => {

        button.addEventListener("click", function () {

            switchTab(this.dataset.goTab);

        });

    });


    document.getElementById("completeModule")
        ?.addEventListener("click", completeCurrentModule);


    document.getElementById("resetProgress")
        ?.addEventListener("click", resetProgress);


    document.getElementById("downloadSyllabus")
        ?.addEventListener("click", downloadHTMLSyllabus);


    document.getElementById("openNotes")
        ?.addEventListener("click", function () {

            const topic = htmlModules[currentModule].topics[currentTopic];

            showTopicNotes(topic);

        });


    document.getElementById("runHtmlCode")
        ?.addEventListener("click", runHTMLCode);


    document.getElementById("resetHtmlCode")
        ?.addEventListener("click", resetHTMLCode);


    setupPracticeModes();

    searchHTMLTopics();

}


/* =====================================================
   32. INITIALIZE HTML COURSE
===================================================== */

function initializeHTMLCourse() {

    renderModules();

    renderTopics();

    updateProgress();

    renderVideos();

    renderTricks();

    renderRevision();

    renderInterviewQuestions();

    renderMCQs();

    renderCodingProblems();

    renderProjects();

    setupEvents();

    runHTMLCode();

    console.log("SkillPath HTML5 Dashboard Loaded Successfully!");

}


/* =====================================================
   33. START APPLICATION
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    initializeHTMLCourse();

});