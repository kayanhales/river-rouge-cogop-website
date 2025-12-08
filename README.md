# River Rouge Church of God in Christ Website

This repository hosts the source code for the official website of the River Rouge Church of God in Christ (riverrougecogop.com).

The site is built using **Next.js** and **TypeScript**.

## Getting Started

To run a local copy of the site for development or testing:

### Prerequisites

You must have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/kayanhales/river-rouge-cogop-website
    cd river-rouge-cogop-website
    ```
2.  **Install Dependencies:**
    ```bash
    npm install
    ```
3.  **Run the Development Server:**
    ```bash
    npm run dev
    ```

The site will now be running locally at `http://localhost:3000`.

## How to Update Content

Content updates (like events and news) are managed through dedicated data files, making updates simple and avoiding complex databases.

### Updating Events

To add, edit, or remove upcoming events:

1.  Navigate to the data directory: `components/data/`.
2.  Edit the **`events.tsx`** file.
3.  Add new events following the existing structure. Ensure the date and time are accurate.

### Updating News and Announcements

To add, edit, or remove news items or announcements:

1.  Navigate to the data directory: `components/data/`.
2.  Edit the **`news.tsx`** file.
3.  Add new items following the existing structure.

### Adding or Updating Images

* Place all new images in the **`/public`** directory.
* When referencing an image in a component or data file, use a path relative to the `/public` directory (e.g., `/images/my-new-photo.jpg`).

### Updating the Homepage

Edit the .tsx files under 'components' for the homepage

### Updating the subpages

Edit the .tsx files under 'app' for the subpages such as 'About' or 'Ministries'

## Deployment

This site is hosted on **Vercel** and uses its seamless integration with Git.

* **Deployment Flow:** Any push to the `main` branch automatically triggers a new build and deployment on Vercel.
* **Live URL:** http://riverrougecogop.com
