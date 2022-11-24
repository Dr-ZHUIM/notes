server {
    listen       80;
    server_name  zhuim.fun www.zhuim.fun;
    location / {
        proxy_pass http://127.0.0.1:3000;
        root   html;
        index  index.html index.htm;
    }
}



worker_processes  1;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;
    server {
        listen       80;
        server_name  zhuim.fun www.zhuim.fun;
        location / {
            proxy_pass http://127.0.0.1:3000;
            root   html;
            index  index.html index.htm;
        }
    }

}
