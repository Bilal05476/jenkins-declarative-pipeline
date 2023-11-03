export const steps = [
  {
    desc: `To establish a robust AWS environment, three Ubuntu-based EC2 instances have been launched to serve distinct roles: the Control node, responsible for orchestrating operations; the Apache instance, dedicated to hosting web services; and the FTP Host, designed for handling file transfer protocol requirements. Each instance is configured with its appropriate instance type, storage, and security groups. The Control node acts as the central command center, orchestrating the overall system, while the Apache instance serves as the web server, managing HTTP requests. Simultaneously, the FTP Host facilitates file transfers securely. The security groups are carefully configured to allow essential communication, such as SSH access, web traffic on port 80 for Apache, and FTP communication on port 21. With these instances now deployed, one can access and further customize each node according to specific application and infrastructure needs, contributing to a well-organized and functional AWS environment. To ensure secure SSH access to the three instances and streamline management, it is advisable to use the same key pair across all instances. By using the same key pair for all instances, you simplify management tasks and ensure a consistent and secure access method.`,
    img: [
      { src: "/assets/img/ec2.jpeg", alt: "Snapshot of AWS EC2 Instances" },
    ],
    code: "",
    text: "",
  },
];
