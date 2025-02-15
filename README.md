# Frontend Challenge  

A simple and responsive dashboard built with **Next.js, React, and TypeScript**. It features a clean UI, efficient state management, and a well-structured component architecture, ensuring scalability and maintainability.  

## 🚀 Deployed App  
[Add your deployed link here]  

## 🛠 Running Instructions  

### Install dependencies:  
```bash
npm install
```  

### Start development server:  
```bash
npm run dev
```  
The app will be available at [http://localhost:3000/](http://localhost:3000/) in your browser.  

### Run JSON server:  
```bash
json-server --watch db.json --port 5000
```  
The fake API will be available at [http://localhost:5000](http://localhost:5000).  

---

## 📂 Project Structure  

```
DashBoard-yammTask
├─ db.json
├─ eslint.config.mjs
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ README.md
├─ src
│  ├─ app
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  └─ products
│  │     └─ [productId]
│  │        └─ page.tsx
│  ├─ components
│  │  ├─ Layout
│  │  │  ├─ Content
│  │  │  │  └─ TableContent
│  │  │  │     ├─ TableContent.module.scss
│  │  │  │     ├─ TableContent.tsx
│  │  │  │     └─ type.ts
│  │  │  ├─ DashboardLayout
│  │  │  │  ├─ DashboardLayout.module.scss
│  │  │  │  └─ DashboardLayout.tsx
│  │  │  ├─ Navbar
│  │  │  │  ├─ Navbar.module.scss
│  │  │  │  ├─ Navbar.test.tsx
│  │  │  │  └─ Navbar.tsx
│  │  │  ├─ Sidebar
│  │  │  │  ├─ Sidebar.module.scss
│  │  │  │  ├─ Sidebar.test.tsx
│  │  │  │  └─ Sidebar.tsx
│  │  │  └─ SingleProduct
│  │  │     ├─ columns.ts
│  │  │     ├─ SingleProduct.module.scss
│  │  │     └─ SingleProduct.tsx
│  │  └─ Shared
│  │     ├─ Button
│  │     │  └─ CustomButton.tsx
│  │     ├─ Dropdown
│  │     │  └─ ActionsDropdown
│  │     │     └─ index.tsx
│  │     ├─ Notification
│  │     │  └─ CustomAlert.tsx
│  │     └─ Table
│  │        ├─ columns.tsx
│  │        └─ CustomTable.tsx
│  ├─ providers
│  │  └─ Providers.tsx
│  ├─ query
│  │  ├─ ProductId
│  │  │  └─ index.ts
│  │  ├─ TableContentMutation
│  │  │  └─ index.ts
│  │  └─ TableContentQuery
│  │     └─ index.ts
│  ├─ services
│  │  └─ TableContent
│  │     ├─ index.ts
│  │     ├─ postTableContent.ts
│  │     ├─ singleProductId.ts
│  │     └─ type.ts
│  └─ styles
│     └─ globals.scss
├─ tsconfig.json
├─ vitest.config.ts
└─ vitest.setup.ts
```

---

## 📦 Libraries Used  

- **Next.js** - React framework for server-side rendering  
- **React Router** - Client-side routing  
- **TypeScript** - Statically typed JavaScript  
- **Axios** - HTTP client for API calls  
- **Ant Design** - UI component library  
- **React Query** - Efficient data fetching  
- **SASS** - CSS preprocessor  
- **Vitest** - Unit testing framework  

---

## 🎨 Code Formatting  

- **Prettier** - Ensures consistent code styling  

---

## 🚀 Improvements  

- **Make it fully responsive** 📱  
- **Add GitHub Actions workflow** for automated deployments 🚀  
- **Write unit and integration tests** to improve code quality 🧪  

---

### 🎯 *Make it amazing!* 😃

