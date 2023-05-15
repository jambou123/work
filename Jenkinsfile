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
  }
 }
