# (Project) Serverless App

## Steps
  1- I have created DB using Dynamodb services in AWS, And email is the partition key so I can receive The data from the lambda function
  ![image](https://github.com/user-attachments/assets/0e91bbed-3a7d-4015-904a-6540ee21a06d)
  
  2- I Created an IAM policy and Role for the three Lambda functions so it can access dynamodb(for db) and cloud watch(for logs)
  ![image](https://github.com/user-attachments/assets/a9afe215-6f1f-4299-8e9e-01285190bd76)

  3- Then created 3 Lambda Functions for apply, count, draw and give it the IAM Role then tested
  ![image](https://github.com/user-attachments/assets/d99d2d6f-07d9-4455-b661-dad4a7de2fbc)
  logs from lambda
   ![image](https://github.com/user-attachments/assets/fbef9cad-0788-404e-a9cc-f60c0fa41940)
  database after using lambda
    ![image](https://github.com/user-attachments/assets/02e3bc5c-1725-4c45-a823-716ee5e97406)
  logs from cloud watch
    ![image](https://github.com/user-attachments/assets/9588a966-09a8-433e-8579-7537c060fc1d)

  4- Then bought DNS from GoDaddy.com
    ![image](https://github.com/user-attachments/assets/d8ba48fb-c3ff-4b1c-804e-00810dcd6347)

  5- then create route53 hosted zone and add it to GoDaddy
  
  6- Then created API gateway service that invokes lambda function and gives it a subdomain
    ![image](https://github.com/user-attachments/assets/4943660a-47da-44b3-8eee-7922d374ff2a)

  7- then create a route for every lambda function
    ![image](https://github.com/user-attachments/assets/c9b720fa-368a-427b-a9ef-b966ccd158b1)

  8- then create an ACM SSL certificate for APIs and DNS to be HTTPS and add their record in the hosted zone
    ![image](https://github.com/user-attachments/assets/d7c7cc08-820d-4d75-8e19-8e4396e718a5)

  9- then create S3 one for hosting the Static website and another for uploading the RootCA certificate and attach it to API Gateway Services
   ![image](https://github.com/user-attachments/assets/f57952a3-8ddd-4938-96ed-dfb4ec9b3740)
    attach certificate to API Gateway
    ![image](https://github.com/user-attachments/assets/b0164aa5-7810-477c-b20b-28e8c7011824)

  10- added Trust to URL of S3(static website url) and DNS to CORS 
    ![image](https://github.com/user-attachments/assets/01a0a99d-36f9-4953-9911-d7f93c92a334)

## Final Result

![image](https://github.com/user-attachments/assets/1b51cc86-d347-477b-ba2e-ac1d2d6d5bb6)
![image](https://github.com/user-attachments/assets/ffc67a80-9144-4b1b-a378-0b75957d032e)



    

  



