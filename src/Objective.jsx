import React from "react";

const Objective = () => {
  return (
    <div>
      <BlockofContent
        heading={"Project Objectives:"}
        content={[
          "Deploy two Docker containers using Ansible.",
          "One container should run an Apache service with a static web page.",
          "The other container should run an FTP service.",
          "Configure the containers to allow network communication.",
          "Verify accessibility from the host machine.",
        ]}
      />
      <BlockofContent
        heading={"Requirements:"}
        content={[
          "Docker installed on the target machine(s).",
          "Ansible installed on the control machine.",
        ]}
      />
      <BlockofContent
        heading={"Project Configurations:"}
        content={[
          "*Apache Container Configuration:*",
          "Docker image: `httpd:latest`",
          "Static web page location: `/home/ubuntu/static/index.html`",
          "Container should restart automatically on port 80",
          "*FTP Container Configuration:*",
          "Docker image: `fauria/vsftpd`",
          "Container should restart automatically. - Port 21 exposed.",
          "*Network Configuration:*",
          "Containers should be on different subnets.",
          "Network diagram required to depict containers running on different subnets but reachable from the host machine.",
        ]}
      />
      <BlockofContent
        heading={"Tasks:"}
        content={[
          "Deploy Apache container: - Copy static web content. - Ensure the container restarts automatically.",
          "Deploy FTP container: - Configure FTP service.",
          "Verify network communication: - Ensure containers are reachable from the host machine.",
          "Create a network diagram: - Depict containers running on different subnets.",
        ]}
      />
      <BlockofContent
        heading={"Additional Configuration Details:"}
        content={[
          "AWS EC2 instances are used.",
          "Apache container serves content on port 80.",
          "FTP container runs on port 21.",
          "Docker containers should restart automatically on instance reboot.",
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
          <li>{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default Objective;
