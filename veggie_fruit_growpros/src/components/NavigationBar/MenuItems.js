export const MenuItems = [
    {
        title: 'Home',
        function: 'browsepage',
        className: 'nav-links'
    },
    {
        title: 'Browse',
        function: 'browsepage',
        className: 'nav-links'
    },
    {
        title: 'Questionnaire',
        function: "questionnaire",
        className: 'nav-links'
    },

]

/* 
This page is needed so that menu items in the Navbar can be added
to with ease.

The  navbar will map through the objects creating a 

Simply copy the object, also in Navbar.css add to the grid-template-columns

------ How to use
Title is the text which appears in Navigation Bar

Function is where a string is handed to the changePageFunction

ClassName is used for the styling the li
----
 */