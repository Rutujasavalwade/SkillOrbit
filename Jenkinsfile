
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Run Automated Tests') {
            steps {
                bat 'python -m unittest discover -s tests -v'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t skillorbit:1.0 .'
            }
        }
    }
}
