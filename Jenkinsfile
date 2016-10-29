node {
   stage('拉取镜像') {      
      git branch: 'jenkenstest', url: 'https://github.com/fengzier/hehe.git'
      sh 'rm -rf dist'
      echo 'git clone done'
   }
   
   stage('容器中编译代码'){
       docker.image('node-build:3.0').inside {            
           sh 'mkdir dist'
           sh 'cp index.html dist'
           sh 'tar cvf dist.tar.gz dist'
       }
   }
   if(BUILDIMAGE == true ){
        stage('编译镜像'){
            image = docker.build '192.168.18.250:5002/jenkins/jenkins-test1:v${BUILDVERSION}'
            image.push()
       }
   }
   emailext body: '$PROJECT_NAME - Build # $BUILD_NUMBER - $BUILD_STATUS: Check console output at $BUILD_URL to view the results.', subject: '$PROJECT_NAME - Build # $BUILD_NUMBER - $BUILD_STATUS!', to: 'feng.ye@youruncloud.com'
}
