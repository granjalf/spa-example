# spa Example

## INTRODUCTION
This project has the purpose of start building single page applications. This is a book shelf list of programming books.

### What project did you refactor?

I made a mix between SPA and Web components

### What changes did you make?

I created a Reactjs project with 2 components, the first a NavBar, the second a Header.
Added 3 html files, main.html, books.html, customers.html.
Added javascript logic in public/index.html to control the routings with javascript and to fill book list for the webComponents in books.html

### Tell us about your design decisions. Why did you make those changes?

Tried to separate html in pieces, for that I used React components.
As window.location is not available inside components, I decided to put all the logic in the "main" index.html for the routing.
As books.hmtl is not a react component, but a .html file, all logic to load the books is alocated in public/index.html aswell.
