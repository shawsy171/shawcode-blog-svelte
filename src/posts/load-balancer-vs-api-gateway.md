---
title: Load Balancer vs Api Gateway
description: What is the differences between these two services
date: '2023-12-07'
categories:
  - system design

published: true
---

### Load Balancer

Software which works at _protocol_ or _socket_ level (eg. tcp, http, or port 3306 etc.) Its job is to balance the incoming traffic by distributing it to the destinations with various logic (eg. Round robin). I doesn't offer features such as authorisation checks, authentication of requests etc.

### API Gateway

A managed service provided by various hosting companies to manage API operations to seamlessly scale the API infra. It takes cares of the **access control**, **response caching**, **response types**, **authorisation**, **authentication**, **request throttling**, **data handling**, identifying the right destinations based on custom rules, and seamless scaling the backend.

Link: [Load Balancer vs API Gateway, Stack overflow](https://stackoverflow.com/questions/61174839/load-balancer-and-api-gateway-confusion)
