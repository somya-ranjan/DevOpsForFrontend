## Nginx Setup On EC2

- Install Nginx on your EC2 instance using the package manager
  - `sudo dnf install nginx`
  - `sudo nginx -v` (to check the installed version)
- Start the Nginx service and enable it to start on boot
  - `sudo systemctl enable --now nginx` (to enable Nginx to start on boot)
  - `sudo systemctl status nginx` (to check the status of the Nginx service)
  - `sudo systemctl start nginx` (to start the Nginx service)
  - `sudo systemctl restart nginx` (to restart the Nginx service)
  - `cd /etc/nginx` (to navigate to the Nginx configuration directory)
  - `sudo nano nginx.conf` or `sudo vi nginx.conf` or `sudo vim nginx.conf` (to edit the main Nginx configuration file)

  ```nginx
  server {
      listen 80;
      listen [::]:80;
      server_name _;
      root /home/ec2-user/static-website/MST-Website;
      index index.html;

      location / {
          try_files $uri $uri/ =404;
      }

      include /etc/nginx/default.d/*.conf;
  }
  ```

- By Default, Nginx serves on port 80. You can test the Nginx installation by accessing your EC2 instance's public IP address in a web browser. You should see the default Nginx welcome page.
- Test the Nginx configuration for syntax errors
  - `sudo nginx -t` (to test the configuration)
- Configure Nginx to serve your Node.js application by creating a new server block configuration file (e.g., /etc/nginx/conf.d/your-app.conf) with the appropriate settings, such as server name, port, and proxy settings to forward requests to your Node.js application.
