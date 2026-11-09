/* =====================================================
   SKILLPATH - JAVA COMPLETE LEARNING SYSTEM
   Updated: Professional Videos + Practice Centre
===================================================== */


/* =====================================================
   1. JAVA SYLLABUS
===================================================== */

const javaModules = [

{
name:"Java Fundamentals",
desc:"Understand Java and its platform.",
topics:[
"Introduction to Java","Features of Java","JDK, JRE and JVM",
"Installing Java","First Java Program","Compilation and Execution"
]
},

{
name:"Java Basics",
desc:"Learn Java programming fundamentals.",
topics:[
"Variables and Constants","Primitive Data Types","Type Casting",
"Operators","User Input","Naming Conventions","Comments"
]
},

{
name:"Control Statements",
desc:"Control program execution.",
topics:[
"if Statement","if-else Statement","Nested if","else-if Ladder",
"switch Statement","for Loop","while Loop","do-while Loop",
"break and continue"
]
},

{
name:"Arrays and Strings",
desc:"Work with arrays and text.",
topics:[
"Introduction to Arrays","One-Dimensional Arrays",
"Two-Dimensional Arrays","Array Traversal","String Class",
"String Methods","StringBuilder","StringBuffer"
]
},

{
name:"Methods",
desc:"Create reusable methods.",
topics:[
"Method Declaration","Parameters and Arguments","Return Types",
"Method Overloading","Recursion","Pass by Value","Variable Scope"
]
},

{
name:"OOP Concepts",
desc:"Learn object-oriented programming.",
topics:[
"Classes and Objects","Constructors","this Keyword",
"Encapsulation","Inheritance","super Keyword","Polymorphism",
"Method Overriding","Abstraction","Abstract Classes","Interfaces"
]
},

{
name:"Advanced Java",
desc:"Learn advanced Java concepts.",
topics:[
"Packages","Access Modifiers","static Keyword","final Keyword",
"Exception Handling","try-catch-finally","throw and throws",
"Custom Exceptions"
]
},

{
name:"Collections",
desc:"Manage collections of objects.",
topics:[
"Collection Framework","ArrayList","LinkedList","HashSet",
"TreeSet","HashMap","TreeMap","Iterator","Comparable","Comparator"
]
},

{
name:"Multithreading",
desc:"Execute multiple tasks concurrently.",
topics:[
"Process vs Thread","Thread Class","Runnable Interface",
"Thread Life Cycle","sleep and join","Synchronization","Thread Safety"
]
},

{
name:"Java 8 Features",
desc:"Explore modern Java features.",
topics:[
"Lambda Expressions","Functional Interfaces","Predicate",
"Consumer","Method References","Stream API","filter and map",
"Optional Class"
]
},

{
name:"JDBC",
desc:"Connect Java applications with databases.",
topics:[
"JDBC Introduction","JDBC Architecture","Database Connection",
"Statement","PreparedStatement","ResultSet","CRUD Operations",
"JDBC Project"
]
},

{
name:"Advanced Topics",
desc:"Explore advanced programming concepts.",
topics:[
"File Handling","Serialization","Generics","Wrapper Classes",
"Garbage Collection","JVM Memory Areas","Design Patterns"
]
}

];


/* =====================================================
   2. COURSE VARIABLES
===================================================== */

let activeModule = 0;
let activeTopic = 0;

let completedTopics = JSON.parse(
    localStorage.getItem("javaCompletedTopics") || "[]"
);

const totalTopics = javaModules.reduce(
    (total,module)=>total+module.topics.length,0
);

let currentQuizQuestions = [];
let currentQuizIndex = 0;
let quizScore = 0;
let quizAnswers = [];
let selectedDifficulty = "Beginner";
let retryMode = false;


/* =====================================================
   3. HTML ELEMENTS
===================================================== */

const moduleList = document.getElementById("moduleList");
const topicList = document.getElementById("topicList");

const moduleTitle = document.getElementById("moduleTitle");
const moduleDescription = document.getElementById("moduleDescription");
const moduleLabel = document.getElementById("moduleLabel");
const moduleTopicCount = document.getElementById("moduleTopicCount");

const progressPercent = document.getElementById("progressPercent");
const progressFill = document.getElementById("progressFill");
const progressCount = document.getElementById("progressCount");

const notesContent = document.getElementById("notesContent");
const topicSearch = document.getElementById("topicSearch");


/* =====================================================
   4. YOUTUBE VIDEO DATABASE
===================================================== */

const javaVideos = [

{
title:"Complete Java Full Course",
channel:"Telusko",
description:"Learn Java from the fundamentals to advanced programming.",
search:"Telusko Java full course",
category:"Complete Course",
duration:"Full Course"
},

{
title:"Java Fundamentals",
channel:"Bro Code",
description:"Understand Java syntax, variables, data types and operators.",
search:"Bro Code Java tutorial",
category:"Fundamentals",
duration:"Beginner"
},

{
title:"Java OOP Concepts",
channel:"Telusko",
description:"Understand classes, objects, inheritance and polymorphism.",
search:"Telusko Java OOP concepts",
category:"OOP",
duration:"Concept Tutorial"
},

{
title:"Java Collections Framework",
channel:"Telusko",
description:"Learn ArrayList, LinkedList, HashSet and HashMap.",
search:"Telusko Java Collections Framework",
category:"Collections",
duration:"Concept Tutorial"
},

{
title:"Java Exception Handling",
channel:"Java Brains",
description:"Understand exceptions, try, catch, finally and custom exceptions.",
search:"Java Brains exception handling Java",
category:"Advanced Java",
duration:"Concept Tutorial"
},

{
title:"Java Multithreading",
channel:"Java Brains",
description:"Learn threads, Runnable, synchronization and thread safety.",
search:"Java Brains multithreading Java",
category:"Multithreading",
duration:"Concept Tutorial"
},

{
title:"Java 8 Features",
channel:"Telusko",
description:"Learn lambda expressions, streams and functional interfaces.",
search:"Telusko Java 8 features",
category:"Java 8",
duration:"Concept Tutorial"
},

{
title:"JDBC Complete Tutorial",
channel:"Telusko",
description:"Connect Java applications with MySQL databases.",
search:"Telusko JDBC tutorial",
category:"JDBC",
duration:"Complete Tutorial"
},

{
title:"Java Interview Preparation",
channel:"Naveen AutomationLabs",
description:"Prepare for common Java interview questions.",
search:"Naveen AutomationLabs Java interview questions",
category:"Interview",
duration:"Interview Preparation"
},

{
title:"Java Coding Practice",
channel:"Kunal Kushwaha",
description:"Practise programming and problem-solving skills.",
search:"Kunal Kushwaha Java DSA",
category:"Coding",
duration:"Practice"
}

];


/* =====================================================
   5. PROFESSIONAL VIDEO CARDS
===================================================== */

function getYouTubeURL(search){

    return "https://www.youtube.com/results?search_query="
        + encodeURIComponent(search);

}


function renderVideos(){

    const videoList = document.getElementById("videoList");
    const allVideos = document.getElementById("allVideos");

    if(!videoList || !allVideos) return;

    videoList.innerHTML = "";

    allVideos.innerHTML = "";

    javaVideos.forEach((video,index)=>{

        const url = getYouTubeURL(video.search);

        const card = `

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

                    <a href="https://www.youtube.com/watch?v=grEKMHGYyns"
   target="_blank"
   rel="noopener noreferrer"
   class="sp-watch-button">
    Watch Video ↗
</a>

                </div>

            </div>

        </article>

        `;

        allVideos.innerHTML += card;

        if(index < 4){

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
   6. JAVA SHORT TRICKS
===================================================== */

const javaTricks = [

{
title:"OOP Concepts",
trick:"EIPA",
description:"Encapsulation, Inheritance, Polymorphism and Abstraction."
},

{
title:"Primitive Data Types",
trick:"8 Primitive Types",
description:"byte, short, int, long, float, double, char and boolean."
},

{
title:"JDK, JRE and JVM",
trick:"Develop → Run → Execute",
description:"JDK develops, JRE provides runtime and JVM executes bytecode."
},

{
title:"Exception Handling",
trick:"Try → Catch → Finally",
description:"Try risky code, catch exceptions and finally perform cleanup."
},

{
title:"Collections",
trick:"List, Set, Map",
description:"List allows duplicates, Set stores unique elements and Map stores key-value pairs."
},

{
title:"Access Modifiers",
trick:"Private, Default, Protected, Public",
description:"Remember the four access levels."
},

{
title:"Loops",
trick:"For = Known, While = Condition",
description:"Use for loops for known iterations and while loops for condition-based repetition."
},

{
title:"String",
trick:"Immutable",
description:"String objects cannot be modified after creation."
},

{
title:"Constructor",
trick:"Same Name, No Return Type",
description:"A constructor has the same name as the class and no return type."
},

{
title:"Inheritance",
trick:"IS-A Relationship",
description:"Inheritance represents an IS-A relationship."
},

{
title:"Encapsulation",
trick:"Private + Getter + Setter",
description:"Protect data using private variables and controlled access."
},

{
title:"Polymorphism",
trick:"Overloading + Overriding",
description:"Overloading is compile-time polymorphism; overriding is runtime polymorphism."
},

{
title:"JDBC",
trick:"C S P R",
description:"Connection, Statement, PreparedStatement and ResultSet."
},

{
title:"Java 8",
trick:"Lambda + Functional Interface + Stream + Optional",
description:"Remember the important Java 8 features."
},

{
title:"ArrayList",
trick:"Dynamic Array",
description:"ArrayList grows dynamically and maintains insertion order."
}

];


function renderTricks(){

    const trickPreview = document.getElementById("trickPreview");
    const allTricks = document.getElementById("allTricks");

    if(!trickPreview || !allTricks) return;

    trickPreview.innerHTML = "";

    allTricks.innerHTML = "";

    javaTricks.slice(0,5).forEach(trick=>{

        trickPreview.innerHTML += `
            <li><strong>${trick.title}:</strong> ${trick.trick}</li>
        `;

    });

    javaTricks.forEach(trick=>{

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
   7. QUICK REVISION
===================================================== */

const revisionPoints = [

"Java is platform independent because of bytecode and JVM.",
"Java is an object-oriented programming language.",
"JDK is used to develop Java applications.",
"JVM executes Java bytecode.",
"Java has eight primitive data types.",
"String objects are immutable.",
"Constructors initialize objects.",
"Inheritance supports code reusability.",
"Encapsulation protects data.",
"Interfaces define contracts for implementing classes.",
"ArrayList is a resizable array implementation.",
"HashMap stores key-value pairs.",
"Exception handling manages runtime problems.",
"Thread enables concurrent execution.",
"JDBC connects Java applications to databases."

];


function renderRevision(){

    const revisionPreview =
        document.getElementById("revisionPreview");

    if(!revisionPreview) return;

    revisionPreview.innerHTML = "";

    revisionPoints.forEach(point=>{

        revisionPreview.innerHTML += `<li>${point}</li>`;

    });

}


/* =====================================================
   8. INTERVIEW QUESTIONS - 100
===================================================== */

const interviewQuestions = [

["What is Java?","Java is a high-level, class-based, object-oriented programming language."],
["Who developed Java?","James Gosling and his team at Sun Microsystems developed Java."],
["What is JVM?","JVM stands for Java Virtual Machine. It executes Java bytecode."],
["What is JDK?","JDK stands for Java Development Kit. It provides tools to develop Java applications."],
["What is JRE?","JRE stands for Java Runtime Environment. It provides the environment to run Java applications."],
["What is bytecode?","Bytecode is the intermediate code generated by the Java compiler."],
["Why is Java platform independent?","Java bytecode can run on any compatible JVM."],
["What are the features of Java?","Object-oriented, platform-independent, secure, robust and multithreaded."],
["What is a variable?","A variable is a named storage location used to hold data."],
["What is a constant?","A constant is a value that cannot be reassigned after initialization using final."],
["What are primitive data types?","byte, short, int, long, float, double, char and boolean."],
["What is type casting?","Type casting converts a value from one data type to another."],
["What is widening?","Widening is an automatic conversion from a smaller compatible type to a larger type."],
["What is narrowing?","Narrowing is an explicit conversion from a larger type to a smaller type."],
["What is an operator?","An operator performs an operation on operands."],
["What is a loop?","A loop repeatedly executes a block of code."],
["What is the difference between while and do-while?","while checks its condition before execution; do-while checks after execution."],
["What is an array?","An array stores multiple values of the same data type."],
["What is a String?","String is a Java class used to represent text."],
["Why is String immutable?","Once created, a String object's value cannot be changed."],
["What is StringBuilder?","StringBuilder is a mutable sequence of characters."],
["What is StringBuffer?","StringBuffer is a synchronized mutable sequence of characters."],
["What is a method?","A method is a block of code that performs a particular task."],
["What is method overloading?","Defining multiple methods with the same name but different parameter lists."],
["What is recursion?","Recursion occurs when a method calls itself."],
["Is Java pass-by-value?","Yes. Java always passes arguments by value."],
["What is OOP?","OOP stands for Object-Oriented Programming."],
["What is a class?","A class is a blueprint for creating objects."],
["What is an object?","An object is an instance of a class."],
["What is a constructor?","A constructor initializes an object when it is created."],
["Can a constructor have a return type?","No. A constructor does not have a return type."],
["What is this keyword?","this refers to the current object."],
["What is inheritance?","Inheritance allows one class to acquire properties and methods of another class."],
["Which keyword is used for inheritance?","extends is used for class inheritance."],
["What is super keyword?","super refers to the immediate parent class."],
["What is polymorphism?","Polymorphism allows one interface or method name to represent different behaviours."],
["What is encapsulation?","Encapsulation combines data and methods into a single unit and controls access to data."],
["What is abstraction?","Abstraction hides implementation details and exposes essential functionality."],
["What is an abstract class?","An abstract class is a class declared using the abstract keyword."],
["What is an interface?","An interface defines a contract that implementing classes follow."],
["Can Java support multiple inheritance?","Java does not support multiple inheritance through classes, but supports multiple interface implementation."],
["What is method overriding?","A subclass provides its own implementation of an inherited method."],
["What is a package?","A package groups related Java classes and interfaces."],
["What are access modifiers?","Access modifiers control the visibility of classes, methods and variables."],
["What is static keyword?","static makes a member belong to the class rather than individual objects."],
["What is final keyword?","final prevents reassignment, overriding or inheritance depending on its usage."],
["What is exception handling?","Exception handling manages exceptional conditions during program execution."],
["What is try block?","try contains code that may throw an exception."],
["What is catch block?","catch handles an exception thrown from the associated try block."],
["What is finally block?","finally executes after try and catch completion, subject to JVM termination."],
["Difference between throw and throws?","throw explicitly throws an exception; throws declares possible exceptions in a method signature."],
["What is a checked exception?","A checked exception is checked by the compiler."],
["What is an unchecked exception?","An unchecked exception is not required to be declared or caught by the compiler."],
["What is a custom exception?","A custom exception is a user-defined exception class."],
["What is Collections Framework?","It is a set of interfaces and classes used to store and manipulate groups of objects."],
["What is ArrayList?","ArrayList is a resizable array implementation of the List interface."],
["What is LinkedList?","LinkedList is a doubly linked list implementation of List and Deque."],
["What is HashSet?","HashSet stores unique elements without guaranteeing insertion order."],
["What is TreeSet?","TreeSet stores unique elements in sorted order."],
["What is HashMap?","HashMap stores key-value pairs with unique keys."],
["Can HashMap contain duplicate keys?","No. A new value replaces the previous value associated with an existing key."],
["What is Iterator?","Iterator is used to traverse collection elements."],
["Difference between List and Set?","List allows duplicates; Set stores unique elements."],
["What is Comparable?","Comparable defines natural ordering through compareTo."],
["What is Comparator?","Comparator defines external or custom ordering through compare."],
["What is multithreading?","Multithreading allows multiple threads to execute within a process."],
["What is a thread?","A thread is a lightweight unit of execution."],
["How can you create a thread?","By extending Thread or implementing Runnable."],
["What is Runnable?","Runnable is a functional interface representing a task for a thread."],
["What is synchronization?","Synchronization controls access to shared resources by multiple threads."],
["What is thread safety?","Thread safety means code behaves correctly when accessed concurrently."],
["What is sleep()?","sleep() pauses the currently executing thread for a specified duration."],
["What is join()?","join() allows one thread to wait for another thread to finish."],
["What is a lambda expression?","A lambda expression is a concise way to represent an anonymous function."],
["What is a functional interface?","An interface with exactly one abstract method."],
["What is Predicate?","Predicate represents a function that accepts an input and returns a boolean."],
["What is Consumer?","Consumer represents an operation that accepts an input and returns no result."],
["What is Stream API?","Stream API processes data using operations such as filter, map and collect."],
["What is filter()?","filter() selects stream elements matching a predicate."],
["What is map()?","map() transforms stream elements into another form."],
["What is Optional?","Optional is a container that may or may not contain a non-null value."],
["What is JDBC?","JDBC stands for Java Database Connectivity."],
["Why is JDBC used?","JDBC connects Java applications to relational databases."],
["What is DriverManager?","DriverManager manages JDBC database drivers and helps establish connections."],
["What is Connection?","Connection represents a session between a Java application and a database."],
["What is Statement?","Statement executes SQL statements."],
["What is PreparedStatement?","PreparedStatement executes parameterized SQL statements."],
["Why use PreparedStatement?","It supports parameters, improves query reuse and helps prevent SQL injection."],
["What is ResultSet?","ResultSet represents tabular data returned by a database query."],
["What is CRUD?","CRUD stands for Create, Read, Update and Delete."],
["What is File Handling?","File handling allows Java applications to read and write files."],
["What is Serialization?","Serialization converts an object's state into a byte stream."],
["What is Generics?","Generics provide type safety when working with classes, interfaces and methods."],
["What are Wrapper Classes?","Wrapper classes represent primitive values as objects."],
["What is Garbage Collection?","Garbage collection automatically reclaims memory occupied by unreachable objects."],
["What is JVM heap memory?","Heap memory stores objects and arrays."],
["What is Stack memory?","Stack memory stores method frames and local variables."],
["What is method reference?","A method reference is a shorthand for a lambda expression that calls an existing method."],
["What is a default method in an interface?","A default method is an interface method with an implementation using the default keyword."],
["What is an enum?","An enum defines a fixed set of named constants."],
["What is var in Java?","var allows local variable type inference in supported contexts, starting with Java 10."],
["What is a record class?","A record is a concise way to declare a class primarily used to model data."],
["What is dynamic method dispatch?","It is runtime selection of an overridden method based on the actual object type."],
["What is the main method?","The main method is the conventional entry point for launching a Java application."],
["What is the difference between == and equals()?","== compares primitive values or object references; equals() compares logical equality when properly implemented."],
["What is a marker interface?","A marker interface is an interface with no methods that indicates metadata or a capability."],
["What is an immutable class?","An immutable class is designed so its object state cannot change after construction."],
["What is a design pattern?","A design pattern is a reusable solution to a commonly occurring software design problem."]

];


/* =====================================================
   9. MCQ QUESTION BANK
===================================================== */

const mcqQuestions = [

{
q:"Which component executes Java bytecode?",
options:["JDK","JRE","JVM","JDBC"],
answer:2,
explanation:"JVM executes Java bytecode.",
level:"Beginner",
topic:"Java Fundamentals"
},

{
q:"Which is not a primitive data type?",
options:["int","boolean","String","char"],
answer:2,
explanation:"String is a class, not a primitive data type.",
level:"Beginner",
topic:"Java Basics"
},

{
q:"Which keyword creates an object?",
options:["class","new","this","static"],
answer:1,
explanation:"The new keyword creates an object.",
level:"Beginner",
topic:"OOP Concepts"
},

{
q:"Which concept protects data using private variables?",
options:["Inheritance","Polymorphism","Encapsulation","Abstraction"],
answer:2,
explanation:"Encapsulation protects data by controlling access.",
level:"Beginner",
topic:"OOP Concepts"
},

{
q:"Which collection allows duplicate elements?",
options:["HashSet","TreeSet","ArrayList","None"],
answer:2,
explanation:"ArrayList implements List and permits duplicate elements.",
level:"Beginner",
topic:"Collections"
},

{
q:"Which keyword is used to inherit a class?",
options:["implements","extends","inherits","super"],
answer:1,
explanation:"extends is used for class inheritance.",
level:"Beginner",
topic:"OOP Concepts"
},

{
q:"Which method is the conventional Java application entry point?",
options:["start()","run()","main()","execute()"],
answer:2,
explanation:"The main method is the conventional entry point.",
level:"Beginner",
topic:"Java Fundamentals"
},

{
q:"Which class is immutable?",
options:["StringBuilder","StringBuffer","String","ArrayList"],
answer:2,
explanation:"String objects are immutable.",
level:"Beginner",
topic:"Arrays and Strings"
},

{
q:"Which block handles exceptions?",
options:["try","catch","finally","static"],
answer:1,
explanation:"The catch block handles exceptions from the associated try block.",
level:"Beginner",
topic:"Advanced Java"
},

{
q:"Which interface is used to define a task for a thread?",
options:["Serializable","Runnable","Comparable","Iterator"],
answer:1,
explanation:"Runnable represents a task that can be executed by a thread.",
level:"Beginner",
topic:"Multithreading"
},

{
q:"Which method compares the logical equality of objects when implemented appropriately?",
options:["==","equals()","compareTo()","hashCode()"],
answer:1,
explanation:"equals() is used to test logical equality.",
level:"Intermediate",
topic:"Java Basics"
},

{
q:"Which collection stores key-value pairs?",
options:["ArrayList","HashSet","HashMap","LinkedList"],
answer:2,
explanation:"HashMap stores key-value mappings.",
level:"Intermediate",
topic:"Collections"
},

{
q:"Which JDBC object is suitable for parameterized SQL?",
options:["Statement","PreparedStatement","ResultSet","DriverManager"],
answer:1,
explanation:"PreparedStatement supports parameterized SQL statements.",
level:"Intermediate",
topic:"JDBC"
},

{
q:"Which method starts a new thread?",
options:["run()","start()","execute()","begin()"],
answer:1,
explanation:"start() starts a new thread, which subsequently invokes run().",
level:"Intermediate",
topic:"Multithreading"
},

{
q:"Which interface is designed to represent a function with one abstract method?",
options:["Runnable","Functional interface","Serializable","Cloneable"],
answer:1,
explanation:"A functional interface has exactly one abstract method.",
level:"Intermediate",
topic:"Java 8 Features"
},

{
q:"What is the output of 10 / 3 when both operands are int?",
options:["3","3.33","4","3.0"],
answer:0,
explanation:"Integer division discards the fractional part.",
level:"Intermediate",
topic:"Java Basics"
},

{
q:"Which method adds an element to an ArrayList?",
options:["insert()","add()","put()","append()"],
answer:1,
explanation:"The add() method appends an element to an ArrayList.",
level:"Intermediate",
topic:"Collections"
},

{
q:"Which Stream operation transforms elements?",
options:["filter()","map()","forEach()","count()"],
answer:1,
explanation:"map() transforms each stream element.",
level:"Intermediate",
topic:"Java 8 Features"
},

{
q:"What does the final keyword prevent on a variable?",
options:["Reading","Reassignment","Initialization","Declaration"],
answer:1,
explanation:"A final variable cannot be reassigned after initialization.",
level:"Intermediate",
topic:"Advanced Java"
},

{
q:"Which memory area stores objects?",
options:["Stack","Heap","Method call stack only","CPU register"],
answer:1,
explanation:"Objects and arrays are allocated on the heap.",
level:"Advanced",
topic:"Advanced Topics"
},

{
q:"Which exception is checked by the compiler?",
options:["NullPointerException","ArithmeticException","IOException","ArrayIndexOutOfBoundsException"],
answer:2,
explanation:"IOException is a checked exception.",
level:"Advanced",
topic:"Advanced Java"
},

{
q:"Which interface supports natural ordering?",
options:["Comparator","Comparable","Runnable","Collection"],
answer:1,
explanation:"Comparable defines natural ordering using compareTo().",
level:"Advanced",
topic:"Collections"
},

{
q:"What does synchronized help control?",
options:["Inheritance","Access to shared resources","Object creation","Type casting"],
answer:1,
explanation:"Synchronization coordinates access to shared resources.",
level:"Advanced",
topic:"Multithreading"
},

{
q:"Which JDBC method executes a SELECT query using Statement?",
options:["executeUpdate()","executeQuery()","executeInsert()","executeRead()"],
answer:1,
explanation:"executeQuery() returns a ResultSet for a query.",
level:"Advanced",
topic:"JDBC"
},

{
q:"Which Java feature allows local variable type inference?",
options:["var","auto","let","dynamic"],
answer:0,
explanation:"var enables local variable type inference in supported contexts.",
level:"Advanced",
topic:"Advanced Topics"
}

];


/* =====================================================
   10. CODING CHALLENGES
===================================================== */

const codingProblems = [

{
title:"Reverse a Number",
level:"Beginner",
topic:"Loops",
description:"Write a Java program to reverse a given integer.",
input:"1234",
output:"4321",
hint:"Extract the last digit using % 10.",
solution:`int number = 1234;
int reverse = 0;

while(number != 0) {
    int digit = number % 10;
    reverse = reverse * 10 + digit;
    number = number / 10;
}

System.out.println(reverse);`
},

{
title:"Check Palindrome Number",
level:"Beginner",
topic:"Loops",
description:"Check whether a number reads the same forwards and backwards.",
input:"121",
output:"Palindrome",
hint:"Reverse the number and compare it with the original.",
solution:`int number = 121;
int original = number;
int reverse = 0;

while(number != 0) {
    int digit = number % 10;
    reverse = reverse * 10 + digit;
    number /= 10;
}

if(original == reverse) {
    System.out.println("Palindrome");
} else {
    System.out.println("Not Palindrome");
}`
},

{
title:"Check Prime Number",
level:"Beginner",
topic:"Loops",
description:"Check whether a number is prime.",
input:"7",
output:"Prime",
hint:"Check whether any integer from 2 up to the square root divides the number.",
solution:`int number = 7;
boolean prime = number > 1;

for(int i = 2; i <= number / i; i++) {
    if(number % i == 0) {
        prime = false;
        break;
    }
}

System.out.println(prime ? "Prime" : "Not Prime");`
},

{
title:"Find Largest Array Element",
level:"Beginner",
topic:"Arrays",
description:"Find the largest value in an integer array.",
input:"[10, 25, 5, 40, 15]",
output:"40",
hint:"Assume the first element is largest and compare the remaining values.",
solution:`int[] arr = {10, 25, 5, 40, 15};

int largest = arr[0];

for(int value : arr) {
    if(value > largest) {
        largest = value;
    }
}

System.out.println(largest);`
},

{
title:"Count Vowels",
level:"Beginner",
topic:"Strings",
description:"Count vowels in a given string.",
input:"education",
output:"5",
hint:"Check each character against a, e, i, o and u.",
solution:`String text = "education";
int count = 0;

for(int i = 0; i < text.length(); i++) {
    char ch = Character.toLowerCase(text.charAt(i));

    if("aeiou".indexOf(ch) != -1) {
        count++;
    }
}

System.out.println(count);`
},

{
title:"Fibonacci Series",
level:"Beginner",
topic:"Loops",
description:"Print the first 10 Fibonacci numbers.",
input:"10",
output:"0 1 1 2 3 5 8 13 21 34",
hint:"Each new number is the sum of the previous two numbers.",
solution:`int a = 0;
int b = 1;

for(int i = 1; i <= 10; i++) {
    System.out.print(a + " ");

    int next = a + b;
    a = b;
    b = next;
}`
},

{
title:"Find Second Largest",
level:"Intermediate",
topic:"Arrays",
description:"Find the second distinct largest number in an array.",
input:"[10, 20, 40, 30]",
output:"30",
hint:"Maintain two variables: largest and second largest.",
solution:`int[] arr = {10, 20, 40, 30};

int largest = Integer.MIN_VALUE;
int second = Integer.MIN_VALUE;

for(int value : arr) {
    if(value > largest) {
        second = largest;
        largest = value;
    } else if(value > second && value != largest) {
        second = value;
    }
}

if(second == Integer.MIN_VALUE) {
    System.out.println("No second distinct largest value");
} else {
    System.out.println(second);
}`
},

{
title:"Remove Duplicate Elements",
level:"Intermediate",
topic:"Collections",
description:"Remove duplicate numbers from an array.",
input:"[1, 2, 2, 3, 3, 4]",
output:"[1, 2, 3, 4]",
hint:"Use LinkedHashSet to retain insertion order.",
solution:`import java.util.*;

int[] arr = {1, 2, 2, 3, 3, 4};

Set<Integer> values = new LinkedHashSet<>();

for(int number : arr) {
    values.add(number);
}

System.out.println(values);`
},

{
title:"Character Frequency",
level:"Intermediate",
topic:"Strings",
description:"Count how many times each character appears.",
input:"banana",
output:"b=1, a=3, n=2",
hint:"Use a HashMap with characters as keys.",
solution:`import java.util.*;

String text = "banana";

Map<Character, Integer> frequency = new LinkedHashMap<>();

for(char ch : text.toCharArray()) {
    frequency.put(ch, frequency.getOrDefault(ch, 0) + 1);
}

System.out.println(frequency);`
},

{
title:"Check Anagram",
level:"Intermediate",
topic:"Strings",
description:"Check whether two strings contain the same characters in a different order.",
input:"listen, silent",
output:"Anagram",
hint:"Convert both strings to character arrays and sort them.",
solution:`import java.util.Arrays;

String first = "listen";
String second = "silent";

char[] a = first.toCharArray();
char[] b = second.toCharArray();

Arrays.sort(a);
Arrays.sort(b);

System.out.println(
    Arrays.equals(a, b) ? "Anagram" : "Not Anagram"
);`
},

{
title:"Find Missing Number",
level:"Advanced",
topic:"Arrays",
description:"Find the missing number from a sequence containing numbers from 1 to n.",
input:"[1, 2, 4, 5]",
output:"3",
hint:"Compare the expected sum from 1 to n with the actual array sum.",
solution:`int[] arr = {1, 2, 4, 5};

int n = 5;

int expected = n * (n + 1) / 2;

int actual = 0;

for(int value : arr) {
    actual += value;
}

System.out.println(expected - actual);`
},

{
title:"Binary Search",
level:"Advanced",
topic:"Arrays",
description:"Find a target value in a sorted array using binary search.",
input:"Array: [10, 20, 30, 40, 50], Target: 40",
output:"Index: 3",
hint:"Use low, high and mid to divide the search range.",
solution:`int[] arr = {10, 20, 30, 40, 50};

int target = 40;

int low = 0;
int high = arr.length - 1;

int result = -1;

while(low <= high) {
    int mid = low + (high - low) / 2;

    if(arr[mid] == target) {
        result = mid;
        break;
    } else if(arr[mid] < target) {
        low = mid + 1;
    } else {
        high = mid - 1;
    }
}

System.out.println("Index: " + result);`
}

];


/* =====================================================
   11. PRACTICE CENTRE INTERFACE
===================================================== */

function renderPracticeCentre(){

    const quizList = document.getElementById("quizList");

    if(!quizList) return;

    quizList.innerHTML = `

    <section class="sp-practice-centre">

        <div class="sp-practice-heading">

            <span class="sp-eyebrow">JAVA LEARNING LAB</span>

            <h2>Practice & Assessment Centre</h2>

            <p>
                Test your Java knowledge, solve coding challenges
                and prepare for technical interviews.
            </p>

        </div>


        <div class="sp-practice-stats">

            <div class="sp-stat-card">
                <span>📝</span>
                <strong>${mcqQuestions.length}</strong>
                <small>MCQ Questions</small>
            </div>

            <div class="sp-stat-card">
                <span>💻</span>
                <strong>${codingProblems.length}</strong>
                <small>Coding Problems</small>
            </div>

            <div class="sp-stat-card">
                <span>🎯</span>
                <strong>${interviewQuestions.length}</strong>
                <small>Interview Questions</small>
            </div>

        </div>


        <div class="sp-practice-tabs">

            <button class="sp-practice-tab active"
                data-practice="mcq">
                MCQ Test
            </button>

            <button class="sp-practice-tab"
                data-practice="coding">
                Coding Practice
            </button>

            <button class="sp-practice-tab"
                data-practice="interview">
                Interview Questions
            </button>

        </div>


        <div id="spPracticeContent"></div>

    </section>

    `;

    document.querySelectorAll(".sp-practice-tab")
        .forEach(button=>{

            button.addEventListener("click",()=>{

                document.querySelectorAll(".sp-practice-tab")
                    .forEach(tab=>tab.classList.remove("active"));

                button.classList.add("active");

                const section = button.dataset.practice;

                if(section === "mcq") renderMCQSetup();

                if(section === "coding") renderCodingPractice();

                if(section === "interview") renderInterviewPractice();

            });

        });

    renderMCQSetup();

}


/* =====================================================
   12. MCQ SETUP
===================================================== */

function renderMCQSetup(){

    const container = document.getElementById("spPracticeContent");

    if(!container) return;

    container.innerHTML = `

        <div class="sp-setup-card">

            <span class="sp-eyebrow">KNOWLEDGE TEST</span>

            <h3>Start Your Java MCQ Test</h3>

            <p>
                Select your difficulty and attempt 10 questions.
                Your answers will be evaluated automatically.
            </p>

            <label for="spDifficulty">Select Difficulty</label>

            <select id="spDifficulty">

                <option value="Beginner">Beginner</option>

                <option value="Intermediate">Intermediate</option>

                <option value="Advanced">Advanced</option>

                <option value="All">All Levels</option>

            </select>

            <button class="sp-primary-button" id="startJavaQuiz">

                Start Quiz →

            </button>

        </div>

    `;

    document.getElementById("startJavaQuiz")
        .addEventListener("click",()=>{

            selectedDifficulty =
                document.getElementById("spDifficulty").value;

            startJavaQuiz();

        });

}


/* =====================================================
   13. START QUIZ
===================================================== */

function startJavaQuiz(){

    let available = mcqQuestions.filter(question=>
        selectedDifficulty === "All" ||
        question.level === selectedDifficulty
    );

    if(available.length === 0){

        alert("No questions available for this difficulty.");

        return;

    }

    available = [...available].sort(()=>Math.random()-0.5);

    currentQuizQuestions = available.slice(0,10);

    currentQuizIndex = 0;

    quizScore = 0;

    quizAnswers = [];

    retryMode = false;

    renderMCQQuestion();

}


/* =====================================================
   14. DISPLAY MCQ QUESTION
===================================================== */

function renderMCQQuestion(){

    const container = document.getElementById("spPracticeContent");

    if(!container) return;

    if(currentQuizIndex >= currentQuizQuestions.length){

        renderQuizResult();

        return;

    }

    const question = currentQuizQuestions[currentQuizIndex];

    const optionsHTML = question.options.map((option,index)=>`

        <button class="sp-option"
            data-option="${index}">

            <span class="sp-option-letter">
                ${String.fromCharCode(65+index)}
            </span>

            <span>${option}</span>

        </button>

    `).join("");

    container.innerHTML = `

        <div class="sp-quiz-card">

            <div class="sp-quiz-top">

                <span>QUESTION ${currentQuizIndex+1} / ${currentQuizQuestions.length}</span>

                <span class="sp-level">${question.level}</span>

            </div>

            <div class="sp-quiz-progress">

                <div style="width:${
                    ((currentQuizIndex+1)/currentQuizQuestions.length)*100
                }%"></div>

            </div>

            <h3>${question.q}</h3>

            <div class="sp-options">

                ${optionsHTML}

            </div>

            <div id="spAnswerFeedback"></div>

            <div class="sp-quiz-actions">

                <button class="sp-primary-button"
                    id="submitMCQ"
                    disabled>

                    Submit Answer

                </button>

            </div>

        </div>

    `;

    let selectedOption = null;

    document.querySelectorAll(".sp-option")
        .forEach(button=>{

            button.addEventListener("click",()=>{

                document.querySelectorAll(".sp-option")
                    .forEach(option=>option.classList.remove("selected"));

                button.classList.add("selected");

                selectedOption = Number(button.dataset.option);

                document.getElementById("submitMCQ").disabled = false;

            });

        });

    document.getElementById("submitMCQ")
        .addEventListener("click",()=>{

            if(selectedOption === null) return;

            checkMCQAnswer(selectedOption);

        });

}


/* =====================================================
   15. CHECK ANSWER
===================================================== */

function checkMCQAnswer(selectedOption){

    const question = currentQuizQuestions[currentQuizIndex];

    const correct = selectedOption === question.answer;

    if(correct) quizScore++;

    quizAnswers.push({

        question:question.q,

        correct:correct,

        selected:selectedOption,

        answer:question.answer

    });

    document.querySelectorAll(".sp-option")
        .forEach(button=>{

            const index = Number(button.dataset.option);

            button.disabled = true;

            if(index === question.answer){

                button.classList.add("correct");

            }else if(index === selectedOption){

                button.classList.add("incorrect");

            }

        });

    const feedback = document.getElementById("spAnswerFeedback");

    feedback.innerHTML = `

        <div class="sp-answer-feedback ${correct?"right":"wrong"}">

            <h4>${correct?"✓ Correct Answer":"✕ Incorrect Answer"}</h4>

            <p>${question.explanation}</p>

        </div>

    `;

    const submitButton = document.getElementById("submitMCQ");

    submitButton.textContent =
        currentQuizIndex === currentQuizQuestions.length-1
        ? "View Result →"
        : "Next Question →";

    submitButton.disabled = false;

    submitButton.onclick = ()=>{

        currentQuizIndex++;

        renderMCQQuestion();

    };

}


/* =====================================================
   16. QUIZ RESULT
===================================================== */

function renderQuizResult(){

    const container = document.getElementById("spPracticeContent");

    const percentage = Math.round(
        quizScore/currentQuizQuestions.length*100
    );

    container.innerHTML = `

        <div class="sp-result-card">

            <div class="sp-result-icon">🏆</div>

            <span class="sp-eyebrow">TEST COMPLETED</span>

            <h2>Your Java Test Result</h2>

            <div class="sp-score-circle">

                <strong>${percentage}%</strong>

                <span>${quizScore}/${currentQuizQuestions.length}</span>

            </div>

            <h3>${
                percentage>=80?"Excellent Work!":
                percentage>=60?"Good Job!":
                percentage>=40?"Keep Practising!":
                "Don't Give Up!"
            }</h3>

            <div class="sp-result-details">

                <div>
                    <strong>${quizScore}</strong>
                    <span>Correct</span>
                </div>

                <div>
                    <strong>${currentQuizQuestions.length-quizScore}</strong>
                    <span>Incorrect</span>
                </div>

                <div>
                    <strong>${currentQuizQuestions.length}</strong>
                    <span>Total</span>
                </div>

            </div>

            <button class="sp-primary-button"
                id="retryWrong">

                Retry Incorrect Questions

            </button>

            <button class="sp-secondary-button"
                id="restartJavaQuiz">

                Start New Quiz

            </button>

        </div>

    `;

    document.getElementById("retryWrong")
        .addEventListener("click",()=>{

            const wrongIndexes = quizAnswers
                .filter(item=>!item.correct)
                .map(item=>item.question);

            const wrongQuestions = currentQuizQuestions.filter(
                question=>wrongIndexes.includes(question.q)
            );

            if(wrongQuestions.length===0){

                alert("Excellent! You answered every question correctly.");

                return;

            }

            currentQuizQuestions = wrongQuestions;

            currentQuizIndex = 0;

            quizScore = 0;

            quizAnswers = [];

            renderMCQQuestion();

        });

    document.getElementById("restartJavaQuiz")
        .addEventListener("click",renderMCQSetup);

}


/* =====================================================
   17. CODING PRACTICE
===================================================== */

function renderCodingPractice(){

    const container = document.getElementById("spPracticeContent");

    if(!container) return;

    container.innerHTML = `

        <div class="sp-coding-heading">

            <span class="sp-eyebrow">JAVA PROBLEM SOLVING</span>

            <h3>Choose Your Coding Challenge</h3>

            <p>Improve your logic through practical Java problems.</p>

            <select id="codingDifficulty">

                <option value="All">All Difficulties</option>

                <option value="Beginner">Beginner</option>

                <option value="Intermediate">Intermediate</option>

                <option value="Advanced">Advanced</option>

            </select>

        </div>

        <div id="codingProblemList" class="sp-coding-grid"></div>

        <div id="codingProblemDetails"></div>

    `;

    document.getElementById("codingDifficulty")
        .addEventListener("change",renderCodingCards);

    renderCodingCards();

}


function renderCodingCards(){

    const list = document.getElementById("codingProblemList");

    const difficulty = document.getElementById("codingDifficulty").value;

    const filtered = codingProblems.filter(problem=>
        difficulty==="All" || problem.level===difficulty
    );

    list.innerHTML = filtered.map(problem=>`

        <article class="sp-problem-card">

            <span class="sp-level">${problem.level}</span>

            <h4>${problem.title}</h4>

            <p>${problem.description}</p>

            <span class="sp-problem-topic">${problem.topic}</span>

            <button class="sp-secondary-button"
                data-problem="${codingProblems.indexOf(problem)}">

                Solve Problem →

            </button>

        </article>

    `).join("");

    list.querySelectorAll("[data-problem]")
        .forEach(button=>{

            button.addEventListener("click",()=>{

                showCodingProblem(
                    Number(button.dataset.problem)
                );

            });

        });

}


function showCodingProblem(index){

    const problem = codingProblems[index];

    const details = document.getElementById("codingProblemDetails");

    details.innerHTML = `

        <article class="sp-problem-detail">

            <span class="sp-eyebrow">CODING CHALLENGE</span>

            <h2>${problem.title}</h2>

            <p>${problem.description}</p>

            <div class="sp-example-box">

                <strong>Sample Input</strong>

                <code>${problem.input}</code>

            </div>

            <div class="sp-example-box">

                <strong>Expected Output</strong>

                <code>${problem.output}</code>

            </div>

            <button class="sp-hint-button" id="showCodingHint">

                💡 Show Hint

            </button>

            <div id="codingHint" class="sp-hint-content" hidden>

                ${problem.hint}

            </div>

            <button class="sp-primary-button" id="showCodingSolution">

                View Java Solution

            </button>

            <pre id="codingSolution" class="sp-code-block" hidden><code></code></pre>

            <p class="sp-practice-note">

                Practice tip: First try solving the problem yourself.
                Then compare your logic with the solution.

            </p>

        </article>

    `;

    document.getElementById("showCodingHint")
        .addEventListener("click",()=>{

            const hint = document.getElementById("codingHint");

            hint.hidden = !hint.hidden;

        });

    document.getElementById("showCodingSolution")
        .addEventListener("click",()=>{

            const solution = document.getElementById("codingSolution");

            solution.hidden = !solution.hidden;

            solution.querySelector("code").textContent = problem.solution;

        });

}


/* =====================================================
   18. INTERVIEW PREPARATION
===================================================== */

function renderInterviewPractice(){

    const container = document.getElementById("spPracticeContent");

    if(!container) return;

    container.innerHTML = `

        <div class="sp-interview-heading">

            <span class="sp-eyebrow">INTERVIEW PREPARATION</span>

            <h3>100 Java Interview Questions</h3>

            <p>Prepare important questions for Java developer interviews.</p>

            <input type="search"
                id="interviewSearch"
                placeholder="Search Java interview questions...">

            <div class="sp-interview-count">

                ${interviewQuestions.length} Questions Available

            </div>

        </div>

        <div id="interviewQuestionList"></div>

    `;

    renderInterviewQuestions();

    document.getElementById("interviewSearch")
        .addEventListener("input",renderInterviewQuestions);

}


function renderInterviewQuestions(){

    const list = document.getElementById("interviewQuestionList");

    if(!list) return;

    const search = document.getElementById("interviewSearch")
        .value.toLowerCase();

    const filtered = interviewQuestions.filter(item=>
        item[0].toLowerCase().includes(search)
    );

    list.innerHTML = filtered.map((item,index)=>`

        <details class="sp-interview-item">

            <summary>

                <span class="sp-question-number">
                    ${index+1}
                </span>

                ${item[0]}

            </summary>

            <div class="sp-interview-answer">

                <strong>Answer</strong>

                <p>${item[1]}</p>

            </div>

        </details>

    `).join("");

}


/* =====================================================
   19. TOPIC NAVIGATION
===================================================== */

function getTopicId(moduleIndex,topicIndex){

    return `${moduleIndex}-${topicIndex}`;

}


function isCompleted(moduleIndex,topicIndex){

    return completedTopics.includes(
        getTopicId(moduleIndex,topicIndex)
    );

}


function saveProgress(){

    localStorage.setItem(
        "javaCompletedTopics",
        JSON.stringify(completedTopics)
    );

}


/* =====================================================
   20. UPDATE PROGRESS
===================================================== */

function updateProgress(){

    const completed = completedTopics.length;

    const percentage = Math.round(
        (completed/totalTopics)*100
    );

    if(progressPercent)
        progressPercent.textContent = percentage+"%";

    if(progressFill)
        progressFill.style.width = percentage+"%";

    if(progressCount)
        progressCount.textContent =
            `${completed} / ${totalTopics} Topics`;

}


/* =====================================================
   21. DISPLAY MODULES
===================================================== */

function renderModules(){

    if(!moduleList) return;

    moduleList.innerHTML = "";

    javaModules.forEach((module,index)=>{

        const completed = module.topics.filter(
            (_,topicIndex)=>isCompleted(index,topicIndex)
        ).length;

        const button = document.createElement("button");

        button.className = "module-item";

        if(activeModule===index)
            button.classList.add("active");

        button.innerHTML = `

            <div class="module-item-content">

                <strong>${index+1}. ${module.name}</strong>

                <span>${completed}/${module.topics.length} Topics</span>

            </div>

            <div class="module-mini-progress">

                <div style="width:${
                    completed/module.topics.length*100
                }%"></div>

            </div>

        `;

        button.addEventListener("click",()=>{

            activeModule = index;

            activeTopic = 0;

            renderModules();

            renderModuleDetails();

        });

        moduleList.appendChild(button);

    });

}


/* =====================================================
   22. DISPLAY MODULE DETAILS
===================================================== */

function renderModuleDetails(){

    const module = javaModules[activeModule];

    if(!module) return;

    if(moduleTitle) moduleTitle.textContent = module.name;

    if(moduleDescription) moduleDescription.textContent = module.desc;

    if(moduleLabel)
        moduleLabel.textContent = `MODULE ${activeModule+1}`;

    if(moduleTopicCount)
        moduleTopicCount.textContent = `${module.topics.length} Topics`;

    renderTopics();

}


/* =====================================================
   23. DISPLAY TOPICS
===================================================== */

let searchValue = "";


function renderTopics(){

    if(!topicList) return;

    topicList.innerHTML = "";

    const module = javaModules[activeModule];

    module.topics.forEach((topic,index)=>{

        if(searchValue && !topic.toLowerCase().includes(searchValue))
            return;

        const button = document.createElement("button");

        button.className = "topic-item";

        if(activeTopic===index)
            button.classList.add("active");

        if(isCompleted(activeModule,index))
            button.classList.add("completed");

        button.innerHTML = `

            <span class="topic-check">

                ${isCompleted(activeModule,index)?"✓":"○"}

            </span>

            <span class="topic-name">

                ${index+1}. ${topic}

            </span>

            <span class="topic-status">

                ${isCompleted(activeModule,index)?"Completed":"Learn"}

            </span>

        `;

        button.addEventListener("click",()=>{

            activeTopic = index;

            renderTopics();

        });

        topicList.appendChild(button);

    });

    showTopicNotes();

}


/* =====================================================
   24. TOPIC NOTES
===================================================== */

function showTopicNotes(){

    const topic = javaModules[activeModule].topics[activeTopic];

    if(!topic || !notesContent) return;

    notesContent.innerHTML = `

        <article class="note-card">

            <span class="eyebrow purple-text">

                MODULE ${activeModule+1}

            </span>

            <h2>${topic}</h2>

            <h3>Introduction</h3>

            <p>${getTopicExplanation(topic)}</p>

            <h3>Learning Objective</h3>

            <p>
                Understand the concept, its purpose,
                syntax and practical usage in Java programming.
            </p>

            <h3>Practice</h3>

            <p>
                Write Java programs related to this concept
                and practise explaining it in interviews.
            </p>

            <div class="note-navigation">

                <button class="outline-button"
                    onclick="previousTopic()">
                    ← Previous
                </button>

                <button class="success-button"
                    onclick="completeCurrentTopic()">
                    ✓ Complete Topic
                </button>

                <button class="outline-button"
                    onclick="nextTopic()">
                    Next →
                </button>

            </div>

        </article>

    `;

}


function getTopicExplanation(topic){

    const explanations = {

        "Introduction to Java":
            "Java is a high-level, object-oriented programming language used to develop different types of applications.",

        "Features of Java":
            "Java supports platform independence, object-oriented programming, security, robustness and multithreading.",

        "JDK, JRE and JVM":
            "JDK provides development tools, JRE provides the runtime environment and JVM executes bytecode.",

        "Variables and Constants":
            "Variables store data values. Constants are declared using the final keyword.",

        "Primitive Data Types":
            "Java has eight primitive types: byte, short, int, long, float, double, char and boolean.",

        "Type Casting":
            "Type casting converts one data type into another. Java supports widening and narrowing conversions.",

        "Classes and Objects":
            "A class is a blueprint. An object is an instance of a class.",

        "Inheritance":
            "Inheritance allows one class to reuse properties and methods of another class.",

        "Encapsulation":
            "Encapsulation protects data by combining variables and methods inside a class.",

        "Polymorphism":
            "Polymorphism allows different implementations through a common method or interface.",

        "Abstraction":
            "Abstraction hides implementation details and exposes essential functionality.",

        "ArrayList":
            "ArrayList is a resizable array implementation of the List interface.",

        "HashMap":
            "HashMap stores key-value pairs and provides efficient average-time lookup.",

        "Exception Handling":
            "Exception handling manages runtime exceptional conditions using try, catch and finally.",

        "JDBC Introduction":
            "JDBC allows Java applications to communicate with relational databases.",

        "Lambda Expressions":
            "Lambda expressions provide a concise way to represent functional behaviour."

    };

    return explanations[topic] ||
        `${topic} is an important Java programming concept. Learn its definition, syntax, working process and practical implementation.`;

}


/* =====================================================
   25. COMPLETE TOPIC
===================================================== */

function completeCurrentTopic(){

    const id = getTopicId(activeModule,activeTopic);

    if(!completedTopics.includes(id))
        completedTopics.push(id);

    saveProgress();

    updateProgress();

    renderModules();

    renderTopics();

}


/* =====================================================
   26. COMPLETE MODULE
===================================================== */

const completeModuleButton =
    document.getElementById("completeModule");

if(completeModuleButton){

    completeModuleButton.addEventListener("click",()=>{

        javaModules[activeModule].topics.forEach((_,index)=>{

            const id = getTopicId(activeModule,index);

            if(!completedTopics.includes(id))
                completedTopics.push(id);

        });

        saveProgress();

        updateProgress();

        renderModules();

        renderTopics();

        alert("Module completed successfully!");

    });

}


/* =====================================================
   27. PREVIOUS AND NEXT TOPICS
===================================================== */

function previousTopic(){

    if(activeTopic>0){

        activeTopic--;

    }else if(activeModule>0){

        activeModule--;

        activeTopic =
            javaModules[activeModule].topics.length-1;

    }else{

        return;

    }

    renderModules();

    renderModuleDetails();

}


function nextTopic(){

    if(activeTopic<javaModules[activeModule].topics.length-1){

        activeTopic++;

    }else if(activeModule<javaModules.length-1){

        activeModule++;

        activeTopic=0;

    }else{

        alert("You completed the entire Java syllabus!");

        return;

    }

    renderModules();

    renderModuleDetails();

}


/* =====================================================
   28. RESET PROGRESS
===================================================== */

const resetButton = document.getElementById("resetProgress");

if(resetButton){

    resetButton.addEventListener("click",()=>{

        if(confirm("Reset all Java learning progress?")){

            completedTopics=[];

            saveProgress();

            updateProgress();

            renderModules();

            renderTopics();

        }

    });

}


/* =====================================================
   29. TOPIC SEARCH
===================================================== */

if(topicSearch){

    topicSearch.addEventListener("input",function(){

        searchValue=this.value.toLowerCase().trim();

        renderTopics();

    });

}


/* =====================================================
   30. TAB NAVIGATION
===================================================== */

const tabs = document.querySelectorAll(".tab");

const panels = document.querySelectorAll(".tab-panel");


function switchTab(name){

    tabs.forEach(tab=>{

        tab.classList.toggle(
            "active",
            tab.dataset.tab===name
        );

    });

    panels.forEach(panel=>{

        panel.classList.toggle(
            "active",
            panel.id===name+"Panel"
        );

    });

}


tabs.forEach(tab=>{

    tab.addEventListener("click",()=>{

        switchTab(tab.dataset.tab);

    });

});


/* =====================================================
   31. NOTES BUTTON
===================================================== */

const openNotesButton = document.getElementById("openNotes");

if(openNotesButton){

    openNotesButton.addEventListener("click",()=>{

        switchTab("notes");

        showTopicNotes();

    });

}


/* =====================================================
   32. QUICK NAVIGATION BUTTONS
===================================================== */

document.querySelectorAll("[data-go-tab]")
    .forEach(button=>{

        button.addEventListener("click",()=>{

            switchTab(button.dataset.goTab);

        });

    });


/* =====================================================
   33. DOWNLOAD SYLLABUS
===================================================== */

const downloadButton =
    document.getElementById("downloadSyllabus");

if(downloadButton){

    downloadButton.addEventListener("click",()=>{

        let content="SKILLPATH - JAVA FULL SYLLABUS\n\n";

        javaModules.forEach((module,index)=>{

            content+=`MODULE ${index+1}: ${module.name}\n`;

            content+=`${module.desc}\n\n`;

            module.topics.forEach((topic,topicIndex)=>{

                content+=`${topicIndex+1}. ${topic}\n`;

            });

            content+="\n";

        });

        const blob=new Blob(
            [content],
            {type:"text/plain"}
        );

        const url=URL.createObjectURL(blob);

        const link=document.createElement("a");

        link.href=url;

        link.download="Java-Full-Syllabus.txt";

        link.click();

        URL.revokeObjectURL(url);

    });

}


/* =====================================================
   34. ADD PROFESSIONAL UI STYLES
===================================================== */

function addPracticeStyles(){

    if(document.getElementById("skillPathPracticeStyles"))
        return;

    const style=document.createElement("style");

    style.id="skillPathPracticeStyles";

    style.textContent=`

    .sp-video-card,
    .sp-practice-centre,
    .sp-setup-card,
    .sp-quiz-card,
    .sp-result-card,
    .sp-problem-card,
    .sp-problem-detail,
    .sp-interview-item{

        background:#151426;
        border:1px solid rgba(255,255,255,.09);
        border-radius:16px;
        color:#fff;

    }

    .sp-video-card{
        overflow:hidden;
        margin-bottom:20px;
    }

    .sp-video-thumbnail{
        height:120px;
        background:linear-gradient(135deg,#30245f,#17172e);
        display:flex;
        align-items:center;
        justify-content:center;
        position:relative;
    }

    .sp-video-icon{
        width:48px;
        height:48px;
        display:grid;
        place-items:center;
        background:#7657f5;
        border-radius:50%;
        font-size:20px;
    }

    .sp-video-category{
        position:absolute;
        right:14px;
        top:14px;
        background:#292345;
        padding:6px 10px;
        border-radius:20px;
        font-size:11px;
    }

    .sp-video-content{
        padding:20px;
    }

    .sp-video-content h3{
        margin:10px 0;
        font-size:18px;
    }

    .sp-video-content p,
    .sp-video-duration{
        color:#aaa8bc;
        font-size:13px;
    }

    .sp-video-footer{
        display:flex;
        justify-content:space-between;
        align-items:center;
        gap:12px;
        flex-wrap:wrap;
        margin-top:18px;
    }

    .sp-channel-name{
        color:#bcb8d0;
        font-size:12px;
    }

    .sp-watch-button,
    .sp-primary-button{
        background:#7657f5;
        color:white;
        border:0;
        border-radius:9px;
        padding:11px 17px;
        text-decoration:none;
        cursor:pointer;
        display:inline-block;
        font-size:13px;
        font-weight:600;
    }

    .sp-watch-button:hover,
    .sp-primary-button:hover{
        background:#6242e8;
        color:white;
    }

    .sp-video-row{
        display:flex;
        align-items:center;
        gap:12px;
        padding:12px;
        margin-bottom:10px;
        background:#151426;
        border:1px solid rgba(255,255,255,.08);
        border-radius:12px;
    }

    .sp-video-small-icon{
        background:#30245f;
        padding:12px;
        border-radius:10px;
    }

    .sp-video-row-content{
        flex:1;
        display:flex;
        flex-direction:column;
        gap:4px;
    }

    .sp-video-row-content span{
        font-size:12px;
        color:#a7a3b8;
    }

    .sp-video-row a{
        color:#a995ff;
        text-decoration:none;
        font-size:12px;
    }

    .sp-practice-centre{
        padding:24px;
        margin-top:10px;
    }

    .sp-eyebrow{
        color:#a995ff;
        font-size:11px;
        font-weight:700;
        letter-spacing:1.5px;
    }

    .sp-practice-heading h2{
        margin:10px 0;
        font-size:27px;
    }

    .sp-practice-heading p,
    .sp-setup-card p{
        color:#aaa8bc;
        line-height:1.7;
    }

    .sp-practice-stats{
        display:grid;
        grid-template-columns:repeat(3,1fr);
        gap:14px;
        margin:24px 0;
    }

    .sp-stat-card{
        padding:18px;
        border-radius:12px;
        background:#201e38;
        display:flex;
        flex-direction:column;
        gap:7px;
    }

    .sp-stat-card strong{
        font-size:23px;
    }

    .sp-stat-card small{
        color:#aaa8bc;
    }

    .sp-practice-tabs{
        display:flex;
        flex-wrap:wrap;
        gap:10px;
        border-bottom:1px solid rgba(255,255,255,.1);
        padding-bottom:15px;
        margin-bottom:22px;
    }

    .sp-practice-tab{
        border:1px solid rgba(255,255,255,.1);
        background:#201e38;
        color:#c6c2d5;
        padding:11px 16px;
        border-radius:9px;
        cursor:pointer;
    }

    .sp-practice-tab.active{
        background:#7657f5;
        color:white;
    }

    .sp-setup-card{
        padding:25px;
    }

    .sp-setup-card h3{
        margin:12px 0;
    }

    .sp-setup-card label{
        display:block;
        margin:18px 0 8px;
    }

    .sp-setup-card select,
    .sp-coding-heading select,
    .sp-interview-heading input{
        width:100%;
        max-width:320px;
        padding:12px;
        background:#201e38;
        color:white;
        border:1px solid rgba(255,255,255,.15);
        border-radius:8px;
        margin-bottom:18px;
    }

    .sp-quiz-card{
        padding:25px;
    }

    .sp-quiz-top{
        display:flex;
        justify-content:space-between;
        gap:10px;
        color:#aaa8bc;
        font-size:12px;
    }

    .sp-level{
        display:inline-block;
        background:#30245f;
        color:#c8baff;
        padding:6px 10px;
        border-radius:20px;
        font-size:11px;
    }

    .sp-quiz-progress{
        height:7px;
        background:#29263e;
        border-radius:10px;
        margin:18px 0 25px;
        overflow:hidden;
    }

    .sp-quiz-progress div{
        height:100%;
        background:#8769ff;
    }

    .sp-quiz-card h3{
        font-size:20px;
        margin-bottom:22px;
    }

    .sp-options{
        display:grid;
        gap:12px;
    }

    .sp-option{
        display:flex;
        align-items:center;
        gap:12px;
        text-align:left;
        background:#201e38;
        border:1px solid rgba(255,255,255,.1);
        border-radius:10px;
        color:white;
        padding:14px;
        cursor:pointer;
    }

    .sp-option.selected{
        border-color:#967aff;
        background:#30245f;
    }

    .sp-option.correct{
        border-color:#22c98a;
        background:rgba(34,201,138,.12);
    }

    .sp-option.incorrect{
        border-color:#ff667d;
        background:rgba(255,102,125,.12);
    }

    .sp-option:disabled{
        cursor:default;
        opacity:1;
    }

    .sp-option-letter{
        width:28px;
        height:28px;
        display:grid;
        place-items:center;
        border-radius:7px;
        background:#35314e;
        font-weight:bold;
    }

    .sp-quiz-actions{
        margin-top:22px;
    }

    .sp-answer-feedback{
        margin-top:18px;
        padding:16px;
        border-radius:10px;
        line-height:1.6;
    }

    .sp-answer-feedback.right{
        background:rgba(34,201,138,.12);
        border:1px solid #22c98a;
    }

    .sp-answer-feedback.wrong{
        background:rgba(255,102,125,.12);
        border:1px solid #ff667d;
    }

    .sp-result-card{
        padding:30px;
        text-align:center;
    }

    .sp-result-icon{
        font-size:45px;
        margin-bottom:12px;
    }

    .sp-score-circle{
        width:145px;
        height:145px;
        margin:25px auto;
        border-radius:50%;
        border:9px solid #7657f5;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
    }

    .sp-score-circle strong{
        font-size:30px;
    }

    .sp-score-circle span{
        color:#aaa8bc;
        font-size:12px;
    }

    .sp-result-details{
        display:flex;
        justify-content:center;
        gap:35px;
        margin:25px 0;
    }

    .sp-result-details div{
        display:flex;
        flex-direction:column;
        gap:5px;
    }

    .sp-result-details strong{
        font-size:22px;
    }

    .sp-result-details span{
        font-size:12px;
        color:#aaa8bc;
    }

    .sp-secondary-button,
    .sp-hint-button{
        border:1px solid rgba(255,255,255,.16);
        color:white;
        background:#25223f;
        padding:10px 15px;
        border-radius:8px;
        cursor:pointer;
        margin:5px;
    }

    .sp-coding-heading{
        margin-bottom:22px;
    }

    .sp-coding-grid{
        display:grid;
        grid-template-columns:repeat(2,minmax(0,1fr));
        gap:14px;
    }

    .sp-problem-card{
        padding:18px;
    }

    .sp-problem-card h4{
        margin:13px 0;
    }

    .sp-problem-card p{
        color:#aaa8bc;
        font-size:13px;
        line-height:1.6;
    }

    .sp-problem-topic{
        display:block;
        color:#a995ff;
        font-size:12px;
        margin:12px 0;
    }

    .sp-problem-detail{
        padding:24px;
        margin-top:25px;
    }

    .sp-example-box{
        padding:14px;
        margin:12px 0;
        background:#201e38;
        border-radius:9px;
        display:flex;
        flex-direction:column;
        gap:10px;
    }

    .sp-example-box code{
        color:#9fe6bf;
    }

    .sp-hint-content{
        padding:14px;
        background:#30245f;
        border-radius:8px;
        margin:12px 0;
        color:#e2dcff;
    }

    .sp-code-block{
        padding:18px;
        background:#090914;
        border-radius:10px;
        overflow-x:auto;
        color:#a9edc8;
        line-height:1.7;
        margin-top:15px;
        white-space:pre-wrap;
    }

    .sp-practice-note{
        color:#aaa8bc;
        margin-top:20px;
        font-size:13px;
    }

    .sp-interview-heading{
        margin-bottom:20px;
    }

    .sp-interview-heading h3{
        margin:12px 0;
    }

    .sp-interview-count{
        color:#a995ff;
        font-size:13px;
        margin-bottom:15px;
    }

    .sp-interview-item{
        margin-bottom:10px;
        overflow:hidden;
    }

    .sp-interview-item summary{
        padding:15px;
        cursor:pointer;
        font-weight:600;
        list-style:none;
        display:flex;
        align-items:center;
        gap:12px;
    }

    .sp-interview-item summary::-webkit-details-marker{
        display:none;
    }

    .sp-question-number{
        width:27px;
        height:27px;
        display:grid;
        place-items:center;
        border-radius:7px;
        background:#30245f;
        color:#c8baff;
        flex-shrink:0;
    }

    .sp-interview-answer{
        padding:15px 20px;
        border-top:1px solid rgba(255,255,255,.08);
        color:#c8c5d4;
        line-height:1.7;
    }

    .sp-interview-answer strong{
        color:#a995ff;
    }

    @media(max-width:650px){

        .sp-practice-stats{
            grid-template-columns:1fr;
        }

        .sp-coding-grid{
            grid-template-columns:1fr;
        }

        .sp-practice-centre{
            padding:15px;
        }

        .sp-video-footer{
            align-items:flex-start;
            flex-direction:column;
        }

        .sp-result-details{
            gap:18px;
        }

    }

    `;

    document.head.appendChild(style);

}


/* =====================================================
   35. INITIALIZE ALL FEATURES
===================================================== */

function initializeCourse(){

    addPracticeStyles();

    updateProgress();

    renderModules();

    renderModuleDetails();

    renderVideos();

    renderTricks();

    renderRevision();

    renderPracticeCentre();

    console.log("SkillPath Java Course Loaded!");

    console.log("Modules:",javaModules.length);

    console.log("Topics:",totalTopics);

    console.log("Interview Questions:",interviewQuestions.length);

    console.log("MCQ Questions:",mcqQuestions.length);

    console.log("Coding Problems:",codingProblems.length);

}


initializeCourse();