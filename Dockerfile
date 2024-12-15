# Stage 1: Build Stage
FROM node:18-alpine AS builder

# Tạo thư mục ứng dụng
WORKDIR /app

# Sao chép các tệp cấu hình
COPY package.json yarn.lock ./

# Cài đặt dependencies
RUN yarn install

# Sao chép mã nguồn vào container
COPY . .

# Stage 2: Production Stage
FROM node:18-alpine

# Tạo thư mục ứng dụng
WORKDIR /app

# Sao chép từ build stage
COPY --from=builder /app /app

# Expose cổng ứng dụng
EXPOSE 3000

# Chạy ứng dụng
CMD ["yarn", "start"]
