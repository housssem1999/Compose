# Use an openjdk base image
FROM openjdk:17-jdk-slim

# Install Maven
RUN apt-get update && apt-get install -y maven

# Set the working directory
WORKDIR /app

# Copy the source code to the container
COPY . .

# Build the application
RUN mvn clean package -DskipTests

# Set the entry point for the container
ENTRYPOINT ["java", "-jar", "target/demo-0.0.1-SNAPSHOT.jar"]
