## BeautyChina — React + Express + MySQL (OpenServer)

An e-commerce demo app with a React (Vite) frontend and an Express backend using MySQL. This README explains how to run everything locally on Windows using OpenServer and phpMyAdmin, and how to test the API and UI.

### Tech stack
- React 19 + Vite 7
- Express 5
- MySQL (via OpenServer)
- Auth with JWT, password hashing with bcrypt
- SCSS modules

### Project structure (high level)
- `src/` — React app
- `server/` — Express API (routes, controllers, DB config)
- `TestDbData/makeupStore_db.sql` — DB dump to import via phpMyAdmin
- `ExampleEnvFile/ExampleEnvFile` — example `.env` values for DB + JWT

## Prerequisites
1) Windows 10/11
2) Node.js 18+ and npm
3) OpenServer (includes MySQL and phpMyAdmin)

## Setup (OpenServer + phpMyAdmin)
1) Install and launch OpenServer.
2) In OpenServer settings, ensure MySQL is enabled and note the port (default: 3306).
3) Open phpMyAdmin from the OpenServer tray menu.
4) Create a database named `makeupStore_db` (or choose your own name and remember it).
5) Import the SQL dump:
   - Navigate to `Import` in phpMyAdmin.
   - Select `TestDbData/makeupStore_db.sql` from this repository.
   - Start import and ensure tables are created successfully.

## Environment variables (.env)
Create a `.env` file at the project root (same level as `package.json`). Use `ExampleEnvFile/ExampleEnvFile` as a template. For OpenServer defaults it can look like this:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=makeupStore_db
DB_PORT=3306

JWT_SECRET='my_secret_key'
```

Notes:
- If your OpenServer MySQL root user has a password, set `DB_PASSWORD` accordingly.
- If you named the DB differently, update `DB_NAME`.
- `JWT_SECRET` can be any strong secret string.

## Install and run
1) Install dependencies:
```
npm install
```
2) Start backend + frontend together (concurrent):
```
npm run start:dev
```
This runs:
- Backend Express API on `http://localhost:3000`
- Frontend Vite dev server on `http://localhost:5173` (proxied API)

Alternatively, run separately:
- Backend only: `npm run start`
- Frontend only: `npm run dev`

Vite proxy is configured in `vite.config.js` to forward calls from the frontend to `http://localhost:3000/api`, so you won’t need CORS in dev.

## API overview
Base URL: `http://localhost:3000/api`

### Auth
- POST `/auth/register`
  - body: `{ "name": string, "email": string, "password": string }`
  - returns: `{ user: { id, email }, token, message }`

- POST `/auth/login`
  - body: `{ "email": string, "password": string }`
  - returns: `{ user: { id, email }, token, message }`

Use the returned `token` for authenticated requests with header: `Authorization: Bearer <token>`.

### Users (protected)
- GET `/users`
  - headers: `Authorization: Bearer <token>`
  - returns: `{ id, email }` for the current user

### Products
- GET `/products`
  - query params (optional): `type` one of `price|title|amount`, `order` one of `ASC|DESC`
  - example: `/products?type=price&order=DESC`

- GET `/products/:id`
  - returns product by id

### Categories
- GET `/categories`

### Cart
- POST `/carts/postCart`
  - body: `{ "user_id": number, "items": [{ "product_id": number, "quantity": number }, ...] }`
  - returns: `{ message: 'success' }` on insert

## Frontend
Run `npm run start:dev` and open `http://localhost:5173`.

Key pages in `src/Pages/`:
- `Home.jsx`
- `CategoryPage.jsx`
- `ProductPage.jsx`
- `CartPage.jsx`
- `AuthRegPage.jsx` (login/register)
- `ProfilePage.jsx`

Auth state and cart state are provided via context components under `src/Context` and `src/ContextProvider`.

## Testing flow (quick start)
1) Start OpenServer and ensure MySQL is running.
2) Import `TestDbData/makeupStore_db.sql` into a DB named `makeupStore_db` via phpMyAdmin.
3) Create `.env` at project root (see above) to point to your MySQL.
4) `npm install`
5) `npm run start:dev`
6) In the UI, go to Auth/Registration and create an account (or use API to register).
7) Browse products, add to cart, submit cart.

## Scripts
- `npm run dev` — start Vite dev server
- `npm run build` — build frontend
- `npm run preview` — preview built frontend
- `npm run start` — start backend (Express on 3000)
- `npm run start:dev` — start backend + frontend concurrently

## Troubleshooting
- Cannot connect to DB: verify OpenServer MySQL is running, `DB_HOST=localhost`, correct `DB_PORT` (commonly 3306), valid `DB_USER/DB_PASSWORD`, and the database name exists.
- Token errors on protected routes: ensure you include `Authorization: Bearer <token>` from the login/register response and that `JWT_SECRET` in `.env` matches the backend expectation.
- Port conflicts: change Vite or backend port if already in use. Backend port is set in `server/server.js` (`PORT = 3000`).
- CORS: in dev, requests are proxied via Vite (`/api` → `http://localhost:3000`), so you should not need extra CORS config.

## Security note
Product listing supports `type` and `order` sorting with allow-lists to mitigate SQL injection. Avoid passing unrecognized values. Do not expose this backend to the internet without further hardening.


