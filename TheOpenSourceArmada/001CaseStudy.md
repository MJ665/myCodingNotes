## The case study of payment system of Razorpay and Dukaan

### Dakaan

### very basic upper idea
- Dukaan is an app designed to empower small businesses by helping them create an online presence.
- It allows merchants to easily digitize their inventory, manage orders, and sell products online.
- Dukaan aims to streamline the process of setting up and running an online store for local businesses.
- what does it provide
    - Customer relation ship management system
    - employee management system
    - dilivery management system
    - online product selling website 
    - online customer management system
    - online product management system
    - bussiness can design their own websites
    - they also have to provide analytics to other bussinesses


- what they have to make for there selves
    - they have partenered with their subsidery company for delivery
    - they have to make app for there delivery org manager to moniter weather their dilivery boy has picked up and droped the packet
    - they have to make app for their delivery boys
    - they have to make app weather their delivery company is giving proper delivery the access of this app is given to a company operations officer coo of the company
    - 
    - 
    - now after this they have to manage their developers weather they do proper work or not and number of commits etc // this they do usually basic with but powerfull application of microsoft or apple for example in L&T they give microsoft laptop  and use microsoft outlook company email and microsoft teams
    - then they use git github etc for developer monitering
    - 
    - 
    - 
    - 
    -
    - Integration with various payment gateways to facilitate online transactions-----> both india and foreign countries.
    - Implementation of features for inventory management, including stock tracking and alerts for low inventory levels.
    - Enhancement of the analytics platform to provide detailed insights into sales performance, customer behavior, and trends both for bussiness and for self.
    - Expansion of platform capabilities to support multiple languages and currencies for broader market reach.
    - Compliance with regulatory standards.
    - Continuous improvement and optimization of the user experience across web and mobile platforms to increase customer satisfaction and retention.
    - For each sell of the customer of the bussiness client they have to generate excell sheet report consisting of the selled product  details ,totalselled product , purchase history, invoice , full report,  transaction status and id , delivery status and id , and las but not the least hellping to make excell sheet so that the client can help in filing income tax return
    - Building partnerships
### Code

rapid mq , Kubernetes lens , rds , dynamo db , ngnix , fluentbit , elastic , cicd , cncf .  efk stack , elastic search cluster, apache software to store auth logs , anylitics software, yekger siblos for tracing if api is slow you can track up to the database query  ,  tumara koi bhi tech stack kubernetes pe hona chahiye self hostable hona chahiye mai paisa nahi dega -> rule & thinking of cto of dukan while while going to new tech stack , cdn is used for js images etc   they wrote algorithm for image transformation by self ,   they use  bunny ,archamive etc before some time if cloudfare works better then they use cloudflare, whatsappi  is one of the cdn to store the images beacouse google cloud is very expensive so they take backup with whatsappi and store in hard drive , 

cloudflare bhi sql lite data base use karta hai 


asli engineering wale ka project  ->system call hii hamesha koi bhi database ya kafka bhi use karke chiz fast karta hai  to uusne dug db ,postgres , geno db by paypal, padha  500 page ka unix ka system call ka book padha aur bana raha hai

Certainly! Let's break down each technology and concept mentioned:

1. **RabbitMQ (MQ)**:
   - RabbitMQ is a message broker software that enables applications to communicate by sending and receiving messages.
   - It facilitates asynchronous communication, which is crucial for decoupling components in a distributed system like Dukaan's architecture.
   - Dukaan likely uses RabbitMQ for tasks such as order processing, notifications, and event-driven communication between various microservices.

2. **Kubernetes Lens**:
   - Kubernetes Lens is a Kubernetes IDE (Integrated Development Environment) that provides developers with a graphical interface for managing Kubernetes clusters.
   - It offers features like real-time monitoring, resource utilization analysis, and debugging tools, which help in managing the Kubernetes infrastructure efficiently.

3. **Amazon RDS (Relational Database Service)**:
   - Amazon RDS is a managed relational database service offered by AWS (Amazon Web Services).
   - Dukaan may use Amazon RDS to host databases like PostgreSQL or MySQL, which are essential for storing structured data such as user information, product details, and order records.

4. **Amazon DynamoDB**:
   - DynamoDB is a fully managed NoSQL database service provided by AWS.
   - It is highly scalable and can handle large volumes of data with low latency, making it suitable for applications with high read and write throughput requirements.
   - Dukaan might use DynamoDB for storing semi-structured data, caching, or as a fast-access data store for frequently accessed information.

5. **NGINX**:
   - NGINX is a popular open-source web server and reverse proxy server.
   - It is known for its high performance, reliability, and scalability, making it ideal for handling incoming HTTP requests, load balancing, and serving static content efficiently in Dukaan's infrastructure.

6. **Fluent Bit**:
   - Fluent Bit is an open-source log processor and forwarder, part of the larger Fluentd ecosystem.
   - It collects logs from various sources, performs lightweight processing, and forwards them to centralized logging systems like Elasticsearch or cloud-based analytics platforms.
   - Dukaan likely uses Fluent Bit for collecting and forwarding logs from different microservices running in their Kubernetes clusters.

7. **Elasticsearch**:
   - Elasticsearch is a distributed search and analytics engine built on top of Apache Lucene.
   - It is commonly used for real-time search, log analysis, and full-text search capabilities.
   - Dukaan may utilize Elasticsearch for indexing and searching large volumes of log data, application metrics, and other structured or unstructured data generated by their platform.

8. **CI/CD (Continuous Integration/Continuous Deployment)**:
   - CI/CD is a software development practice that involves automating the process of code integration, testing, and deployment.
   - Dukaan implements CI/CD pipelines to ensure that code changes are continuously integrated, tested, and deployed to production environments, thereby enabling rapid and reliable software delivery.

9. **CNCF (Cloud Native Computing Foundation)**:
   - CNCF is a vendor-neutral foundation that hosts open-source projects related to cloud-native computing.
   - Dukaan may adopt CNCF projects and best practices for building, deploying, and managing cloud-native applications, ensuring scalability, reliability, and interoperability in their infrastructure.

10. **EFK Stack (Elasticsearch, Fluentd, Kibana)**:
    - The EFK stack is a variant of the ELK stack (Elasticsearch, Logstash, Kibana) that replaces Logstash with Fluentd.
    - It is used for log management and analysis, where Fluentd collects and forwards logs to Elasticsearch for indexing and storage, and Kibana provides a visualization and analytics interface.
    - Dukaan likely leverages the EFK stack for centralized logging, monitoring, and troubleshooting across their microservices architecture.

These technologies collectively form the backbone of Dukaan's infrastructure, enabling them to build, deploy, and scale their platform efficiently while ensuring reliability, performance, and security.











<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
## Juno db
