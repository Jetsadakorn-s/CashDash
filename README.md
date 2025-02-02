# CashDash

## 📌 Project Overview

CashDash is a financial transaction and digital wallet management system built using **Fastify** and **MongoDB** and **Docker**.

---

## 🚀 Installation and Execution with Docker

### Prerequisites
- Ensure **Docker** is installed on your system. You can download it from [Docker Official Site](https://www.docker.com/get-started).

### Steps to Run the Project

1️⃣ **Clone the repository**
```sh
git clone git@gitlab.com:Jetsadakorn-s/cashdash.git
cd cashdash
npm i
```

2️⃣ **Run the project using `docker-compose`**
```sh
npm run dev
```
📌 This will start Fastify and MongoDB containers.

3️⃣ **View application logs**
```sh
docker-compose logs -f
```

4️⃣ **Stop and remove containers**
```sh
docker-compose down
```

---

## 📌 Features

### ✅ User Management API
- `POST /api/users` → Create a new user (name, email, password, phone number, rate_discount, wallet balance)
- `GET /api/users/:id` → Retrieve user details
- `PUT /api/users/:id` → Update user information
- `DELETE /api/users/:id` → Remove a user

### ✅ Wallet API
- `POST /api/wallet/topup` → Add funds to a user's wallet (`id`, `wallet_topup`)

### ✅ Product API
- `POST /api/products` → Add a new product
- `GET /api/products` → Retrieve all available products

### ✅ Order Management API
- `POST /api/orders` → Place an order (deduct wallet balance and apply `rate_discount`)
- `GET /api/orders` → Retrieve all orders
- `GET /api/orders/:user_id` → Retrieve orders of a specific user

### ✅ Financial Transactions API
- `POST /api/transactions` → Record income or expense
- `GET /api/transactions` → Retrieve transaction history with filters for date and type (income/expense)

### ✅ Dashboard API
- `GET /api/dashboard` → Summarize yearly income and expenses with a comparative analysis

---

📌 **For further details, refer to the project repository.**

