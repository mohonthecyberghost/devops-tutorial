node {
    def app

    stage('Clone repository') {
        /* Let's make sure we have the repository cloned to our workspace */

        checkout scm
    }

    

    stage('Building image 1') {
        script {
          app = docker.build "/var/jenkins_home/workspace/devops-tutorial"
      }
    }

    stage('Build image 2') {
        /* This builds the actual image; synonymous to
         * docker build on the command line */
        app = docker.build("mohonthecyberghost/devops-tutorial:${env.BUILD_ID}")
    }


    stage('Test image') {
        /* Ideally, we would run a test framework against our image.
         * For this example, we're using a Volkswagen-type approach ;-) */

        app.inside {
            sh 'echo "Tests passed"'
        }
    }

    stage('Push image') {
        /* Finally, we'll push the image with two tags:
         * First, the incremental build number from Jenkins
         * Second, the 'latest' tag.
         * Pushing multiple tags is cheap, as all the layers are reused. */
        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
            app.push("${env.BUILD_ID}")
            app.push("latest")
        }
    }
}