const btn = document.getElementById("btn")
const author = document.getElementById("author")
const title = document.getElementById("title")
const pages = document.getElementById("pages")
const status = document.querySelector(".status")
const list = document.getElementById("list")
 const host= document.querySelector(".host")
 const hosts = document.querySelector(".hosts")
 const lists = document.getElementById("lists")
 const read = document.getElementById("read")
 const unread = document.getElementById("unread")
 const scope = document.getElementById("scope")
let base = document.createElement("base");
 const btn2 = document.querySelector(".btn2")

function Book(author1,title1,pages1,status1) {
this.author= author1
this.title = title1
this.pages = pages1
this.status= status1
}
const libary = []; 
function info(books) {
  btn.addEventListener("click",() => {
   if(author.value==='' ) {
    alert("put in a book")
  } else {
        list.innerHTML = "";
      lists.innerHTML = "";
      h.innerHTML = "";

const p = document.createElement('p')
      p.className = "my-para"

 function updatestatus(confirm) {
        if (read.checked) {
          p.innerHTML = "read";
        } else if (unread.checked) {
          p.innerHTML = "not read";
        } else {
          p.innerHTML = "";
        }
        confirm = p.innerHTML;
        base = confirm;
      }
      updatestatus();

    const pages1 = pages.value
     const author1 = author.value   
      const title1 = title.value
      const status1 = base;
     const book = new Book(author1,title1,pages1,status1 )
     libary.push(book)

    books = libary

     function deleteinfo(books,index)  {
          btn2.addEventListener("click",() => {
           if(Array.isArray(books) && index >= 0 && index < books.length){
             books.splice(index,1)
            } else {
              console.log("invalid index")
           }
           list.innerHTML = "";
           lists.innerHTML = "";
           scope.innerHTML = "";
           h.innerHTML = "";
        })
            return books;
          
           } 
           deleteinfo(books,0)
    for(let i=0; i < books.length; i++) {
    const li = document.createElement('li')
    li.className = "my-author"
     li.innerHTML = books[i].author
     const titleli = document.createElement('li')
     titleli.className = "my-title"
     titleli.innerHTML = books[i].title
     const pageli = document.createElement('li')
        pageli.className = "my-page"
     pageli.innerHTML = books[i].pages
     h.appendChild(pageli)
     console.log(titleli)
     list.appendChild(li) 
     lists.appendChild(titleli)
    }   
    scope.appendChild(p)
     author.value = ''
     title .value ='' 
     pages.value = ''
     console.log(books)
     }
    
  })}
info()