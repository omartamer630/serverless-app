# (Project) Serverless App
![Automated Photo](https://github.com/user-attachments/assets/5f7ff71f-432d-4c98-92fe-279d304eeb8d)
  ### Project Overview
  This Serverless Application project focuses on creating a scalable and secure API-based cloud infrastructure using AWS services. The architecture utilizes DynamoDB for database storage, AWS Lambda for serverless function execution, and API Gateway for managing API endpoints. Security and availability are prioritized through Route 53 for DNS management and ACM for SSL certification. The front end is hosted as a static website on S3, with CloudFront providing CDN support for improved performance and reliability.
  ### Purpose
  The primary aim of this project is to build an efficient, serverless environment that automates API-based interactions and allows for seamless data retrieval and storage. DynamoDB serves as the backend storage with email as the partition key to interact efficiently with Lambda functions. API Gateway facilitates routing, enabling a structured setup for invoking Lambda functions. This infrastructure ensures smooth deployment and a robust API layer with HTTPS support for secure access.

## Steps
 ### Dynamodb
 - Dynamodb is a Serverless DB that is Fully managed by AWS, Using NoSQL, purpose-built to deliver improved performance, scalability, manageability, and flexibility compared to traditional relational databases, when you create a table you must specify a primary key
   
   ![image](https://github.com/user-attachments/assets/0e91bbed-3a7d-4015-904a-6540ee21a06d)
   1- I have created DB using Dynamodb services in AWS, And email is the primary key so I can receive The data from the lambda function
 
 ### IAM policy and role
 - IAM is a web service that controls access to AWS Resources by users or by another service, Policy is the permissions that you give to the user or service written in JSON, and IAM Role is temporary permissions that you give to Service to communicate Service-to-Service
    
  ![image](https://github.com/user-attachments/assets/a9afe215-6f1f-4299-8e9e-01285190bd76)
  2- I Created an IAM policy and Role for the three Lambda functions so it can access dynamodb(for db) and cloud watch(for logs)
  
 ### Lambda Function
 - Lambda Function is a serverless like dynamodb fully managed by AWS, Lambda can only run like other functions when you call/trigger it, so you pay-as-you-go, Lambda scales automatically
   
   ![image](https://github.com/user-attachments/assets/d99d2d6f-07d9-4455-b661-dad4a7de2fbc)
   3- Then created 3 Lambda Functions for apply, count, draw and give it the IAM Role then tested

    ![image](https://github.com/user-attachments/assets/fbef9cad-0788-404e-a9cc-f60c0fa41940)
    logs from lambda
   
    ![image](https://github.com/user-attachments/assets/02e3bc5c-1725-4c45-a823-716ee5e97406)
    database after using lambda
     
 ### CloudWatch
 - CloudWatch is a monitor service that collects and tracks metrics, you can create an alarm to send to notify or see what is the performance of the service
   
    ![image](https://github.com/user-attachments/assets/9588a966-09a8-433e-8579-7537c060fc1d)
    logs from cloud watch
    
   
 ### DNS & Route53 HostedZone
 - Route53 is a web service that can perform three functions domain registration, DNS routing, and health checking
   
   ![image](https://github.com/user-attachments/assets/d8ba48fb-c3ff-4b1c-804e-00810dcd6347)
   4- Then bought DNS from GoDaddy.com 
   5- then create route53 hosted zone and add it to GoDaddy
   
 ### API Gateway
 - API Gateway is a web service for creating, publishing, maintaining, monitoring, and securing REST, HTTP, and WebSocket APIs at any scale, A Developer can create an API that can route to another service or something in my own app but it has to be certificate (SSL/TLS)
   
   ![image](https://github.com/user-attachments/assets/4943660a-47da-44b3-8eee-7922d374ff2a)
   6- Then created API gateway service that invokes lambda function and gives it a subdomain

   ![image](https://github.com/user-attachments/assets/c9b720fa-368a-427b-a9ef-b966ccd158b1)
   7- then create a route for every lambda function
    
 ### ACM
 - ACM (AWS Certificate Manager) Handles the complexity of creating, storing, and renewing the Certificate Public/Private (SSL/TLS)
   
   ![image](https://github.com/user-attachments/assets/d7c7cc08-820d-4d75-8e19-8e4396e718a5)
   8- then create an ACM SSL certificate for APIs and DNS to be HTTPS and add their record in the hosted zone
    
 ### S3
 - An S3 bucket is an object storage (files) that can host a Static website or have backup objects(files)
   
   ![image](https://github.com/user-attachments/assets/f57952a3-8ddd-4938-96ed-dfb4ec9b3740)
   9- then create S3 one for hosting the Static website and another for uploading the RootCA certificate and attach it to PI Gateway Services
   
   ![image](https://github.com/user-attachments/assets/b0164aa5-7810-477c-b20b-28e8c7011824)
   attach certificate to API Gateway

  ![image](https://github.com/user-attachments/assets/01a0a99d-36f9-4953-9911-d7f93c92a334)
  10- added Trust to URL of S3(static website URL) and DNS to CORS in API Gateway
    
 ### CloudFront
 - CloudFront is a webservice that store cache of your Static/Dynamic website in different CDN(Edges) To provide low latency(time delay)
   
  ![image](https://github.com/user-attachments/assets/08003198-9288-40e2-9f1d-30d63a206df7)
  11- used Cloudfront
    
## Final Result

![image](https://github.com/user-attachments/assets/1b51cc86-d347-477b-ba2e-ac1d2d6d5bb6)
![image](https://github.com/user-attachments/assets/ffc67a80-9144-4b1b-a378-0b75957d032e)



    

  



