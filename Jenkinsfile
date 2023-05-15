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
   }
}
 
