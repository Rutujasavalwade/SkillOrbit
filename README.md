# SkillOrbit — Student Skill Development Website

## 1. Project Overview

SkillOrbit is a student-focused website designed to help students explore important technical skills for learning and career preparation. It provides a simple interface for discovering skills and learning resources.

## 2. Objectives

- Create a beginner-friendly student skill development website.
- Organize technical skills in one place.
- Use Git and GitHub for version control.
- Use Docker to package and run the website.
- Use Jenkins to automate testing and Docker image building.

## 3. Technologies Used

- HTML
- CSS
- JavaScript
- Python — automated tests
- Git and GitHub
- Docker
- Jenkins

## 4. Project Features

- Student-focused homepage
- Technical skill information
- Responsive styling
- Automated checks for website files and content
- Docker-based website hosting
- Jenkins pipeline for automated testing and Docker image building

## 5. How to Run the Website

### Run using Docker

Build the Docker image:

```bash
docker build -t skillorbit:1.0 .
```

Run the container:

```bash
docker run -d --name skillorbit-web -p 8081:80 skillorbit:1.0
```

Open this URL in your browser:

http://localhost:8081

## 6. Run Automated Tests

Run the following command from the project folder:

```bash
python -m unittest discover -s tests -v
```

The project includes three automated tests that check website files, homepage content, and the Dockerfile.

## 7. Jenkins CI Pipeline

The Jenkins pipeline performs these stages:

1. **Checkout:** Downloads the project from GitHub.
2. **Automated Tests:** Runs the Python unit tests.
3. **Docker Build:** Builds the `skillorbit:1.0` Docker image.

The pipeline completed successfully, with all three tests passing and the Docker image built successfully.

## 8. Project Screenshots

### Homepage

![SkillOrbit Homepage](screenshots/step-01-homepage.png)

### Docker Integration

![Docker Integration](screenshots/step-02-docker.png)

### Automated Tests

![Three Automated Tests Passing](screenshots/step-03-tests.png)

### Jenkins Pipeline

![Jenkins Pipeline Success](screenshots/step-04-jenkins.png)

## 9. GitHub Repository

https://github.com/Rutujasavalwade/SkillOrbit

## 10. Conclusion

SkillOrbit demonstrates the basic DevOps workflow by combining source control, automated testing, containerization, and continuous integration using GitHub, Python, Docker, and Jenkins.
