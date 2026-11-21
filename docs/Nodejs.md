# Deploy the Node.js API on EC2

This repository's API is in `api/index.cjs`. It listens on port `4500` and returns the users list at `GET /users`. It uses Node.js built-in modules, so there are no npm packages to install for the API.

## 1. Install Node.js and Git

Connect to the EC2 instance over SSH, then run:

```bash
sudo dnf update -y
sudo dnf install -y nodejs git
node --version
npm --version
```

## 2. Download the project

Replace `<repository-url>` with the clone URL for your GitHub repository:

```bash
cd /home/ec2-user
git clone <repository-url> DevOpsForFrontend
cd /home/ec2-user/DevOpsForFrontend/api
```

If you already cloned the repository, go to its `api` directory instead.

## 3. Run and test the API

Start the API:

```bash
node index.cjs
```

Keep that SSH session open. In a second SSH session, test it on the EC2 instance:

```bash
curl http://127.0.0.1:4500/users
```

You should see a JSON array of users. Keep the first SSH session open while you want the API to run; press `Ctrl+C` to stop it.

## 4. Access the API through Nginx (optional)

To access the API at `http://<EC2-public-IP>/api/users`, add this location inside the Nginx `server` block:

```nginx
location /api/ {
    proxy_pass http://127.0.0.1:4500/;
}
```

The trailing slash on `proxy_pass` removes the `/api/` prefix, so Nginx forwards `/api/users` to the API as `/users`.

Test and reload Nginx:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

When using Nginx, allow HTTP traffic on port `80` in the EC2 security group:

1. In the AWS console, open **EC2** and select **Instances**.
2. Select your instance, then open its **Security** tab and select the attached security group.
3. Choose **Edit inbound rules** and add an **HTTP** rule for port `80`, with the source set to `0.0.0.0/0` (and `::/0` if the site should be reachable over IPv6).
4. Save the rules.

Do not open port `4500` to the public internet; Nginx connects to the API locally.
