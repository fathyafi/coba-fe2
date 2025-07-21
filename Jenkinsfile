// pipeline {
//   agent any

//   environment {
//     NODE_ENV = "development"
//   }

//   tools {
//     nodejs "NodeJS 20.19.0" // Pastikan NodeJS ini sudah disiapkan di Jenkins > Global Tool Configuration
//   }

//   stages {
//     stage('Checkout') {
//       steps {
//         checkout scm
//       }
//     }

//     stage('Install Yarn & Dependencies') {
//       steps {
//         // ✅ Install yarn jika belum tersedia
//         sh 'npm install -g yarn'
//         sh 'yarn --version'  // Cek versi sebagai validasi
//         sh 'yarn install'
//       }
//     }

//     stage('Lint') {
//       steps {
//         sh 'yarn lint'
//       }
//     }

//     stage('Build') {
//       steps {
//         sh 'yarn build'
//       }
//     }

//     stage('Test') {
//   steps {
//     sh 'yarn test'
//   }
// }

//     stage('SonarQube Analysis') {
//       steps {
//         withSonarQubeEnv('SonarQube') {
//           sh 'npx sonar-scanner'
//         }
//       }
//     }
//   }

//   post {
//     success {
//       echo '✅ Build, Lint, dan SonarQube analysis sukses!'
//     }
//     failure {
//       echo '❌ Build atau SonarQube analysis gagal.'
//     }
//   }
// }

pipeline {
  agent any

  tools {
    nodejs 'node-18' // sesuai dengan nama yang kamu isi tadi
  }

  environment {
  SONAR_TOKEN = credentials('sonarqube-token')
  }

  stages {
    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Run Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('SonarQube Analysis') {
      steps {
        withSonarQubeEnv('MySonarQube') {
          sh '''
            npm install -g sonar-scanner
            sonar-scanner \
              -Dsonar.projectKey=sq-fe \
              -Dsonar.sources=src \
              -Dsonar.host.url=https://fc267257b1b0.ngrok-free.app \
              -Dsonar.login=$SONAR_TOKEN
          '''
        }
      }
    }
  }
}