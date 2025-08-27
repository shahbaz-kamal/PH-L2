<div align="center">
  <img height="400" src="https://github.com/shahbaz-kamal/book-nest-client/blob/main/src/assets/git_banner.png"  />
</div>

###

<h1 align="left">📚 BookNest - Library  Management System </h1>

###

BookNest is a **library management system** built with **React, TypeScript, Redux Toolkit (RTK Query), Node.js, Express, and Mongoose**. It allows users to **browse books, perform CRUD operations, borrow books, and view a borrow summary** — all without authentication or payment integration.  
The focus is on a clean, functional UI and robust state management with API integration. The interface is enhanced with GSAP animations for smooth and interactive UI transitions, providing a dynamic and engaging user experience.

###

## 🔗 Live Link

###

<p align="left">https://booknest-by-shahbaz.netlify.app/</p>

###

## 🔗 Backened Github Link

###

<p align="left">https://github.com/shahbaz-kamal/book-nest-server.git</p>

###

## ✨ Features

1. **Public Access** 🚀

   - All routes are accessible without login or authentication.

2. **Book Management** 🛠️

   - **View Books** in a responsive table.
   - **CRUD Operations**: Create, edit, delete books.
   - **Availability Handling**: If copies = 0, book is marked unavailable.

3. **Borrow Book** 📖

   - Borrow form with quantity & due date.
   - Copies auto-update — prevents borrowing more than available.
   - If stock reaches 0, book is unavailable.

4. **Borrow Summary** 📊

   - Aggregated summary of borrowed books in table format.

5. **UI/UX** 🎨

   - Responsive design with **Tailwind CSS**.
   - Clean and minimalist design.

6. **Bonus Features** 🌟
   - Optimistic UI updates.
   - Toast notifications for CRUD success/failure.
   - Type-safe forms (TypeScript).

## 📑 Page List

- `/all-books` → List all books with CRUD + borrow options.
- `/create-book` → Add new book.
- `/books/:id` → Detailed view of a book.
- `/edit-book/:id` → Update book details.
- `/borrow-summary` → Summary of borrowed books in Table format.

## 🛠 Technology Used

###

 <div align="left">
  <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" height="40" alt="tailwindcss logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" alt="react logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="40" alt="typescript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" height="40" alt="redux logo"  />
  <img width="12" />
  <img src="https://cdn.simpleicons.org/nodedotjs/339933" height="40" alt="nodejs logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=express" height="40" alt="express logo"  />
  <img width="12" />
  <img src="https://cdn.simpleicons.org/mongodb/47A248" height="40" alt="mongodb logo"  />
  <img width="12" />
  <img src="https://img.icons8.com/?size=48&id=gKfcEStXI1Hm&format=png" height="40" alt="mongodb logo"  />
  <img width="12" />
  <img src="https://static.wikia.nocookie.net/logopedia/images/a/a5/GSAP_2023.svg/revision/latest/scale-to-width-down/300?cb=20231024190052" height="40" alt="mongodb logo"  />
</div>

###

###

## 💥 Dependencies:

<!-- <h3 align="left"></h3> -->

###

<h3 align="left">"@gsap/react": "^2.1.2",<br>    "@radix-ui/react-dialog": "^1.1.15",<br>    "@radix-ui/react-dropdown-menu": "^2.1.15",<br>    "@radix-ui/react-label": "^2.1.7",<br>    "@radix-ui/react-slot": "^1.2.3",<br>    "@radix-ui/react-tabs": "^1.1.13",<br>    "@reduxjs/toolkit": "^2.8.2",<br>    "@tailwindcss/vite": "^4.1.11",<br>    "class-variance-authority": "^0.7.1",<br>    "clsx": "^2.1.1",<br>    "gsap": "^3.13.0",<br>    "lucide-react": "^0.537.0",<br>    "react": "^19.1.1",<br>    "react-datepicker": "^8.7.0",<br>    "react-dom": "^19.1.1",<br>    "react-hook-form": "^7.62.0",<br>    "react-redux": "^9.2.0",<br>    "react-responsive": "^10.0.1",<br>    "react-router": "^7.7.1",<br>    "redux": "^5.0.1",<br>    "sweetalert2": "^11.22.4",<br>    "tailwind-merge": "^3.3.1",<br>    "tailwindcss": "^4.1.11"</h3>

###

###

## 🔧 Installation Guidline:

1. First clone the project by running

```bash
  git clone https://github.com/shahbaz-kamal/book-nest-client.git
```

2. Change your directory to the cloned folder by

```bash
  cd folder_name
```

3. Run the following to install dependencies:

```bash
npm install
```

4. Run the following command and open the website locally on port 5173:

```bash
npm run dev
```

###
