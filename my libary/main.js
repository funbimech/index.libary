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
 const reader = document.getElementById("reader")
 const scope = document.getElementById("scope")
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
    // ( const title1 = title.value
    const pages1 = pages.value
     const author1 = author.value   
      const title1 = title.value
     const book = new Book(author1,title1,pages1 )
     libary.push(book)
     console.log(book)
    books = libary
    for(let i=0; i < books.length; i++) {
    const li = document.createElement('li')
    // li.style.margin = '-1px' 
    // li.style.padding= '-1px'
    //  li.style.textAlign ='center'
    console.log(i)
     li.innerHTML = books[i].author
     const titleli = document.createElement('li')
     titleli.innerHTML = books[i].title
     const pageli = document.createElement('li')
     pageli.innerHTML = books[i].pages
     h.appendChild(pageli)
     console.log(titleli)
     list.appendChild(li) 
     lists.appendChild(titleli)
     const checkstatus = document.querySelector('input[name="ticket"]:checked')    
    let ticket; 
    switch((checkstatus.id))  {
      case 'read':
      ticket = 'read';
      break;
      case 'reader':
      ticket= 'not read';
      break;
    }   
    const p = document.createElement('p')
    p.textContent = `${ticket}`;
    scope.appendChild(p)
     author.value = ''
     title .value ='' 
     pages.value = ''
     console.log(books)
     }
    
  }}
  )
  btn2.addEventListener("click",() => {
    lcontainer = ''
  })
};
// const store = new book('author')
info()