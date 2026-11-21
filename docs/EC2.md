## EC2 Setup

- Create a instance (Launch Instance)
- Name (Unique name for your instance)
- Select AMI (Amazon Machine Image) (Choose an operating system for your instance)
- Select Instance Type (Choose the hardware configuration for your instance)
- Key Pair (Create a new key pair or use an existing one to securely connect to your instance)
- Firewall (Configure security groups to control inbound and outbound traffic to your instance)
- File System (Choose the storage options for your instance, such as EBS volumes)
- Review and Launch (Review your instance configuration and launch the instance)

## Setup EC2 Instance

- Connect to your EC2 instance using SSH (Secure Shell) with the key pair you created during the instance setup.
- Update the package manager and install necessary packages (e.g., Node.js, npm, etc.) on your EC2 instance.
- `sudo dnf update -y`
- `sudo dnf install nodejs git nginx etc.`

## Deploying Nginx on EC2 [./Nginx.md](./Nginx.md)

## Deploying Node.js Application on EC2 [./Nodejs.md](./Nodejs.md)

## Deploying Static Website on EC2 [./StaticWebsite.md](./StaticWebsite.md)
