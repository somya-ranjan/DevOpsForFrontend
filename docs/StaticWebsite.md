# Deploying a Static Website on EC2

## Place the website files

- Copy or clone the static website so its entry page is at `/home/ec2-user/static-website/MST-Website/index.html`.
- Nginx needs permission to traverse `/home/ec2-user` and read the website files. Allow traversal without granting permission to list the home directory, then make the website directories and files readable:

  ```bash
  sudo chmod o+x /home/ec2-user
  find /home/ec2-user/static-website -type d -exec chmod 755 {} \;
  find /home/ec2-user/static-website -type f -exec chmod 644 {} \;
  ```

## Configure Nginx

- Set the document root in the active Nginx `server` block (for example, in `/etc/nginx/nginx.conf`):

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

- Test the configuration and reload Nginx:

  ```bash
  sudo nginx -t
  sudo systemctl reload nginx
  ```

- Open the EC2 instance's public IP address in a browser. If Nginx still reports `403 Forbidden`, check `/var/log/nginx/error.log` for filesystem permission or SELinux denials.
