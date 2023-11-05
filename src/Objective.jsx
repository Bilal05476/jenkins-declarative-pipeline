import React from "react";

const Objective = () => {
  return (
    <div>
      <BlockofContent
        heading={"Project Objectives:"}
        content={[
          "Set up Jenkins to automate the build and deployment process.",
          "Implement a Jenkins Declarative Pipeline for defining the CI/CD process.",
          "Use Docker Compose to define and manage the application's containers.",
          "Deploy the application on AWS infrastructure.",
          "Set up a webhook to trigger the CI/CD pipeline on code changes.",
        ]}
      />
      <BlockofContent
        heading={"Requirements:"}
        content={[
          "Install and configure Jenkins on a server.",
          "Install Docker and Docker Compose on the Jenkins server.",
          "Launch an AWS service with the necessary key and security (EC2).",
          "Host your code in a Git repository (GitHub).",
        ]}
      />
      <BlockofContent
        heading={"Project Configurations:"}
        content={[
          "*Jenkins Configuration:*",
          "Configure Jenkins to connect to your Git repository.",
          "Set up Jenkins credentials for Docker hub (username and password).",
          "Install necessary plugins (Docker, AWS, Pipeline).",

          "*Docker Compose Configuration:*",
          "Write a docker-compose.yml file for your application's services.",

          "*AWS Configuration:*",
          "Create an EC2 instance for hosting Jenkins and Docker containers.",

          "*Webhook Configuration:*",
          "Set up a webhook in your Git repository to trigger Jenkins on code changes.",
        ]}
      />
      <BlockofContent
        heading={"Tasks:"}
        content={[
          "Jenkins Pipeline Script: - Write a Jenkins Declarative Pipeline script (Jenkinsfile) in your repository. - Define stages for clone, build, push, and deployment.",
          "Clone Github Code: - Clones the code from the specified GitHub repository and branch.",
          "Docker Image Build: - Use Dockerfile to define the build image for your code.",
          "Docker Image Push: - Tags the built Docker image, logs in to Docker Hub using credentials, and pushes the image to the repository.",
          "Docker Container Deploy: - Deploys the containerized application using Docker Compose, taking down existing containers and bringing up the new ones in detached mode.",
          "Webhook Trigger: - est the webhook by changing your Git repository. - Ensure the Jenkins pipeline is triggered automatically.",
          "Pipeline Validation: - Validate the entire pipeline by changing your code and observing the pipeline stages.",
          "Security Considerations: - Ensure your Docker hub credentials in Jenkins are securely managed. - Implement appropriate security measures for your Docker hub.",
        ]}
      />
    </div>
  );
};

const BlockofContent = ({ heading, content }) => {
  return (
    <div className="blockofcontent">
      <h4>{heading}</h4>
      <ol>
        {content.map((item) => (
          <li className={item.startsWith("*") && "underline"}>{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default Objective;
