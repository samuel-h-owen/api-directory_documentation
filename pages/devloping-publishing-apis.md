# Developing & Publishing APIs in the API Directory

## Overview

This guide will cover the general requirements for developing and publishing an API product in the API Directory.

## Development Experience

In order to publish an API product, you will need to develop one or more API proxies, fully document and test your API, and pass security and data sensitivity audits. The API Directory runs on Google's Apigee X platform and developers are required to familiarize themselves with Apigee's approach to API development and management. To help facilitate this process, we have assembled some [high-level resources](apigee-dev-resources) for potential API developers to use as a basis for learning.

In broad strokes, developing a new API product will involve the following steps:

- Documenting your API using the OpenAPI specification
- Defining & configuring connections to your data sources
- Developing one or more API proxies which will contain all of the authentication, routing, transformation, and error handling logic over the course of the request/response lifecycle
- Testing your API product
- Working with the API Directory team to publish your product

Developers looking to create new API products will need to have the following competencies:

- Writing XML-based configuration
- Documenting APIs within the OpenAPI specification
- Unit, integration, and end-to-end testing of APIs
- Basic data manipulation experience via javascript

## How to Develop an API

1. **Request API Developer Access**  
   To get started developing APIs, you will need to submit an [API Directory Access Request](tdx-ticket) in order to be added to the API Directory Developers MCommunity group. Membership to this group will grant you access to the [Apigee Management Console](apigee), enabling you to begin API Development.

2. **Develop & Test Your API Product**  
   Once you have access to Apigee, you may begin developing your API product within the development environment. Consult the Apigee X Developer Resources page for additional resources on how to develop your API.

3. **Complete the API Publication Checklist & Consultation Process**  
   When you have finished developing and testing your API product, please complete the API Publication Checklist and send it to the API Directory team. They will review your configuration and take the next steps to migrate your API into the production environment. The API Directory team will review the following items:

   - The API product is properly configured & secured
   - The provided OpenAPI spec fully describes your API product
   - You have obtained the necessary approvals from the appropriate data stewards
   - The data exposed by your API meets the [API Directory Data Sensitivity Guidelines](sensitivity-guidelines)
   - For restricted APIs that will require approvals before a subscription is granted, the proper approval protocols have been defined

4. **Deploy Your API Product**  
   Once all parties are satisfied with the new API product, the API Directory team will deploy and publish your API product to the API Directory.

If you have any questions or would like to schedule a consultation, reach out to the API Directory team at apidir-contact@umich.edu.

[apigee]: https://apigee.google.com
[tdx-ticket]: https://teamdynamix.umich.edu/TDClient/30/Portal/Requests/TicketRequests/NewForm?ID=P0BnH7tZeYc_&RequestorType=Service
[apigee-dev-resources]: https://documentation.its.umich.edu/?q=node/3783
[sensitivity-guidelines]: https://documentation.its.umich.edu/node/3933
