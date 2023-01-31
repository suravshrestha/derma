# Derma
An Artificial Intelligence application for predicting skin diseases.

## Demonstration
https://user-images.githubusercontent.com/24486999/215794690-3a877db8-edc1-4d51-80c1-e0524688e723.mp4

## Requirements
- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Usage
1. Clone the repository
```
git clone https://github.com/suravshrestha/derma.git
```

2. Navigate to the repository :open_file_folder:
```
cd derma
```

3. Install the dependencies
```
cd frontend
npm install
cd ../backend
npm install
```
Have patience, this might take a while.

4. Create a `.env` file inside the backend folder and set the following credentials:
```
#.env
JWT_SECRET_KEY=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```
Get the Cloudinary credentials from your [Cloudinary Dashboard](https://cloudinary.com/console/)

5. Start the backend development server
```
npm run dev
```

6. Open a new terminal from `frontend` folder and run the frontend development server
```
npm run start
```

The application can be viewed at http://localhost:3000/
