// see https://dzone.com/refcardz/continuous-delivery-with-jenkins-workflow for tutorial
// see https://documentation.cloudbees.com/docs/cookbook/_pipeline_dsl_keywords.html for dsl reference
// This Jenkinsfile should simulate a minimal Jenkins pipeline and can serve as a starting point.
// NOTE: sleep commands are solelely inserted for the purpose of simulating long running tasks when you run the pipeline
node {
   // Mark the code checkout 'stage'....
   stage 'checkout'

   // Get some code from a GitHub repository
   git url: 'https://github.com/kesselborn/jenkinsfile'
   sh 'git clean -fdx; sleep 4;'

   // Get the maven tool.
   // ** NOTE: This 'mvn' maven tool must be configured
   // **       in the global configuration.
  

   stage 'build'
 

   stage 'test'
 

   stage 'archive'
   archive 'target/*.jar'
}


node {
   stage 'deploy Canary'
   sh 'echo "write your deploy code here"; sleep 5;'

   stage 'deploy Production'   
   sh 'echo "write your deploy code here"; sleep 6;'   
}