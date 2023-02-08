# Use an existing Java 11 image as the base
FROM openjdk:17 as buillder

# Set the working directory in the container
WORKDIR /app

COPY . /app
# Copy the compiled jar file of the demo application to the container
COPY target/demo-0.0.1-SNAPSHOT.jar /app/demo.jar

# Set the command to run when the container starts
ENTRYPOINT ["java", "-jar", "/app/demo.jar"]

# Expose port 8080 to allow incoming traffic
EXPOSE 8080
