# Using AWS S3 commands to upload, download, list, and delete files.
## And leveraging Multer to parse form data uploads.

### API Documentation:

[API Documentation](https://documenter.getpostman.com/view/40182356/2sB34foMGE)

## How to Run

### Install dependencies:

``` npm i ```


### Run with Docker Compose (recommended if you have Docker)

``` docker compose up --build ```

### Run the server locally (requires Node.js installed):

``` npm run dev ```


### Run the tests:

``` npm run test ```


### Environment Configuration Overview
1. A "bootstrap.js" file is loaded automatically on startup to manage environment variables using dotenv.


2. config/{environment}.env is loaded based on process.env.ENVIRONMENT, which is set by the script in package.json (e.g., npm run dev_local sets ENVIRONMENT=dev).

3. config/shared.env holds variables common to all environments.

