const myLibrary = [];

function Book(author,title,pages,status,id){
    this.author=author;
    this.pages=pages;
    this.title=title;
    this.status=status;
    this.id=id;
}

function addBookToLibrary(author,title,pages,status){
    const book = new Book(author,title,pages,status,crypto.randomUUID());
    myLibrary.push(book);
}

addBookToLibrary("Open the web","linux basics for hackers",500,"Yes");
addBookToLibrary("Dafydd Stuttard","The Web Application Hacker's Handbook",1232,"No");

const lib = document.getElementById('Library');

for(const module of myLibrary){
    const book = document.createElement('div');
    lib.appendChild(book);
    const title = document.createElement('h3');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const status = document.createElement('p');
    title.textContent = `Title: ${module.title}`;
    author.textContent = `Author: ${module.author}`;
    pages.textContent = `Number of pages: ${module.pages}`;
    status.textContent = `Read status: ${module.status}`;
    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(pages);
    book.appendChild(status);
    book.className="book";
    book.id=module.id;
    const removeBtn = document.createElement("button");
    const toogle = document.createElement("button");
    toogle.textContent = "Toogle Read Status"
    removeBtn.textContent="Remove";
    toogle.addEventListener("click",()=>{
        if(status.textContent=="Read status: No"){
            status.textContent="Read status: Yes";
        }else{
            status.textContent="Read status: No";
        }
    });
    book.appendChild(toogle);
    book.appendChild(removeBtn);
    removeBtn.addEventListener("click",()=>{
        removeBtn.parentElement.remove();
    });
}

const openDilog = document.getElementById("openBtn");
const dilog = document.getElementById("book-dialog");
const confirmBtn = document.querySelector("#confirmBtn");
const cancelBtn = document.querySelector("#cancelBtn");

openDilog.addEventListener("click",()=>{
    dilog.showModal();
});

cancelBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    dilog.close();
});

confirmBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    const module = new Book();
    module.title = document.getElementById("title").value;
    module.author = document.getElementById("author").value;
    module.pages = document.getElementById("pages").value;
    module.id = crypto.randomUUID();
    const book = document.createElement('div');
    lib.appendChild(book);
    const title = document.createElement('h3');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const status = document.createElement('p');
    title.textContent = `Title: ${module.title}`;
    author.textContent = `Author: ${module.author}`;
    pages.textContent = `Number of pages: ${module.pages}`;
    status.textContent = `Read status: ${module.status}`;
    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(pages);
    book.appendChild(status);
    book.className="book";
    book.id=module.id;
    const removeBtn = document.createElement("button");
    const toogle = document.createElement("button");
    toogle.textContent = "Toogle Read Status";
    removeBtn.textContent = "Remove";
    toogle.addEventListener("click",()=>{
        if(status.textContent=="Read status: No"){
            status.textContent="Read status: Yes";
        }else{
            status.textContent="Read status: No";
        }
    });
    removeBtn.addEventListener("click",()=>{
        removeBtn.parentElement.remove();
    });
    book.appendChild(toogle);
    book.appendChild(removeBtn); 
    document.getElementById("title").value="";
    document.getElementById("author").value="";
    document.getElementById("pages").value="";
    document.getElementById("read").value="";
});