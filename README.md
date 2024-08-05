
# Table of Contents

- [Table of Contents](#table-of-contents)
- [Vending Machine Simulator](#vending-machine-simulator)
- [Features](#features)
- [Installation](#installation)
- [Run the project](#run-the-project)
- [Dependencies](#dependencies)

# Vending Machine Simulator

This project is a web application that simulates a vending machine. It allows users to select products and quantities, add them to a queue, manage alerts, view purchase history, and see pending orders. The data is stored using Zustand and LocalStorage to ensure persistence.


# Features

 - Product Selection:  Choose a product and select the desired quantity.
   
- Queue Management: Selected products are added to a waiting list.
   
-  Product Delivery: Products are delivered in the order they were added
   to the queue.
   
- Alerts: Manage alerts for different events (product ready, error,
   etc.).
   
- Purchase History: Record of all purchases made.
   
- Pending Orders: Screen displaying the orders that are in the queue.
   
- Data Persistence: Uses Zustand and LocalStorage to store application
   data.

# Installation

To install the project dependencies, run the following command:

```bash
git clone https://github.com/username/vending-machine.git
```

```bash
cd vending-machine
```

```bash
yarn 
```
# Run the project

To run the project in a development environment, use the following command:

```bash
yarn dev
```

# Dependencies

| Dependency                         | Version  |
| ---------------------------------- | -------- |
| @headlessui/react                  | ^2.1.2   |
| @heroicons/react                   | ^2.1.5   |
| @tanstack/react-query              | ^5.51.21 |
| @tanstack/react-query-devtools     | ^5.51.21 |
| axios                              | ^1.7.3   |
| react                              | ^18.3.1  |
| react-dom                          | ^18.3.1  |
| react-router-dom                   | ^6.26.0  |
| tailwindcss                        | ^3.4.7   |
| zustand                            | ^4.5.4   |
