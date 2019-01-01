# image name: apptrack-backend
# container name: apptrack-backend

# cannot leave spaces for port
# cannot type PORT = 3000
# must be in the format of PORT=3000
PORT=8000

echo "--------Server Running-------"

cd ..
docker stop apptrack-backend
docker rm apptrack-backend
docker rmi apptrack-backend
docker build -t apptrack-backend .
docker run --name apptrack-backend -d -it -p 8000:8000 apptrack-backend
docker container ls -a
open http://localhost:$PORT