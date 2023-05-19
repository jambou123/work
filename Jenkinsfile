#!/usr/bin/env groovy
pipeline {
    agent any
    tools {
      nodejs 'nodejs12.22.9'
    }
    stages {
       stage('Checkout') {
          steps {
                  checkout([$class: 'GitSCM', branches: [[name: '*/main']], userRemoteConfigs: [[url: 'https://github.com/jambou123/work.git']]])
              }
       }
       stage('Install dependencies') {
          steps {
            sh 'npm install'
      }
    }
       stage('test'){
         steps {
           sh 'npm run build'
        }
      }
        stage('build image') {
            steps {
                script {
                    echo "building the docker image..."
                    docker.withRegistry("", "dockerhubcredentiels") {
                        sh "docker build -t new ."
                        sh "docker tag new medali1996/nodejs:new"
                        sh "docker push medali1996/nodejs:new"
                    }
                }
            }
        }
        stage('kubernetes deploy') {
          steps {
            withKubeConfig([credentialsId: 'work',serverUrl: 'https://192.168.199.41:6443']) {
                    sh "sed -i 's#replace-image#medali1996/nodejs:new#g' deployment-nodejs.yaml"
                    sh "kubectl apply -f deployment-nodejs.yaml --namespace=default"
          }
        }
   }
   }
}
 

