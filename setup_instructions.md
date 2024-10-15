
# Setup Instructions for ZAI-IDE Project

## 1. Clone the Repository
```bash
git clone https://github.com/ZanaNowshad/zai-ide.git
cd zai-ide
```

## 2. Install Dependencies
Make sure to install all required dependencies for both backend and frontend:

### Backend Dependencies
```bash
cd backend
pip install -r requirements.txt  # If using Python for services
npm install
```

### Frontend Dependencies
```bash
cd ../src
npm install
```

## 3. Install GitPython
For handling Git operations:
```bash
pip install GitPython
```

## 4. Set Up Git Configuration
Make sure to set up Git user details:
```bash
git config --global user.email "zanabal.nowshad@gmail.com"
git config --global user.name "ZanaNowshad"
```

## 5. Running the Application
To run the application locally:
```bash
# Start the backend server
cd ../backend
npm start

# Start the frontend server
cd ../src
npm start
```
