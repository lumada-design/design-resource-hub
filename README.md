# Hitachi Vantara Resources Library

### Unlock Your Creativity and Accelerate Your Work

Explore the Design Resources Library using the categorization available to find the right resource for your use case.

## Getting Started

Make sure you have [Node.js](https://nodejs.org/en/download) installed.

1. Clone the repository locally:

```bash
  git clone https://github.com/lumada-design/hv-resources-library.git
```

2. Run `setup` command to setup frontend and backend dependencies:

```bash
  yarn setup
```

3. Seeding The Data

In the root of our project we have our `seed-data.tar.gz` file. We will use it to seed our data.

- Open up your terminal and make sure you are in you `backend` folder.

- Run the following command to seed your data:

```bash
  yarn strapi import -f ../seed-data.tar.gz
```

This will import your data locally.

4. Start your project by running the following command:

```bash
  yarn dev
```

5. To manage your project 🚀, go to the administration panel at:
```bash
  http://localhost:1337/admin
```
user: admin@admin.com  
pass: Demo1234


6. To access the app ⚡️, go to:
```bash
  http://localhost:5173/
```


