const btn = document.getElementById("btn");
const author = document.getElementById("author");
const title = document.getElementById("title");
const pages = document.getElementById("pages");
const status = document.querySelector(".status");
const list = document.getElementById("list");
const host = document.querySelector(".host");
const hosts = document.querySelector(".hosts");
const lists = document.getElementById("lists");
const read = document.getElementById("read");
const unread = document.getElementById("unread");
const scope = document.getElementById("scope");
const del = document.getElementById("del");
let base = document.createElement("base");
let delbtn = document.querySelectorAll(".delbtn")
let newindex = 0;
const btn2 = document.querySelector(".btn2");
const radios = document.querySelectorAll('input[name="ticket')

function Book(author1, title1, pages1, status1) {
  this.author = author1;
  this.title = title1;
  this.pages = pages1;
  this.status = status1;
}
let libary = [];
     
function addbook() {
      const pages1 = pages.value;
      const author1 = author.value;
      const title1 = title.value;
      let selval = ''
      if (read.checked) {
        selval = "read";
     } else  {
       selval = "not read";
     } 
      const status1 = selval;
      const book = new Book(author1, title1, pages1, status1);
      libary.push(book);
}
 let books;
 function deletebook (books,index) {
        books.splice(index,1)
          list.innerHTML =''
     lists.innerHTML = ""
      h.innerHTML = ""
     scope.innerHTML = ""
     del.textContent = ""
            updateinfo()
 }
  btn.addEventListener("click", () => {
          addbook()
          list.innerHTML =''
          lists.innerHTML = ""
         h.innerHTML = ''
         scope.innerHTML =''
        del.textContent = ''
        books = libary
           updateinfo();
  })
      function updateinfo() {
        for (let i = 0; i < books.length; i++) {
          const li = document.createElement("li");
          li.className = "my-author"
          li.innerHTML = books[i].author;
          const titleli = document.createElement("li");
          titleli.className = "my-title"
          titleli.innerHTML = books[i].title;
          const pageli = document.createElement("li");
          pageli.className = "my-page"
          pageli.innerHTML = books[i].pages;
          const statusli = document.createElement("li")
          statusli.innerHTML = books[i].status
         let deleteli = document.createElement("li");
           deleteli.textContent = "delete";
         deleteli.style.backgroundColor = "red";
       deleteli.className = "my-delete";
        deleteli.addEventListener("click", () => deletebook(books,i))
        del.appendChild(deleteli)
          h.appendChild(pageli);
           list.appendChild(li);
           lists.appendChild(titleli);
           scope.appendChild(statusli);
          author.value = "";
          title.value = "";
          pages.value = "";
    }}
 
