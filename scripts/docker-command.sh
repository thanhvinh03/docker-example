docker build -t tzinh:v1.0 .
docker images
docker run -d -p 3000:3000 tzinh:v1.0
docker ps

docker run --name mysql-tzinh -e MYSQL_ROOT_PASSWORD=yourpassword -e MYSQL_DATABASE=yourdatabase -e MYSQL_USER=youruser -e MYSQL_PASSWORD=youruserpassword -p 3306:3306 -d mysql:8.0

docker-compose up -d --build
docker-compose down