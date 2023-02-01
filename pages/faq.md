## Overview

This document contains the answers to frequently asked questions about the API Directory.

## Consuming an API

### What is an API?

An API is an interface that makes it easy for one application to consume capabilities or data from another application. By defining stable, simplified entry points to application logic and data, APIs enable developers to easily access and reuse application logic built by other developers. In the case of Web APIs, that logic and data is exposed over the network.

Since applications that consume APIs are sensitive to changes, APIs also imply a contract. The contract provides some level of assurance that, over time, the API will change in a predictable manner.

### Who is allowed to consume an API?

University of Michigan students, faculty, staff, and sponsored affiliates are all granted access to the API Directory for academic, educational, administrative, or research purposes. All users are responsible to comply with the API Directory [Terms & Conditions](https://dir.api.it.umich.edu/terms).

### How do I get started consuming APIs?

To get started with the API Directory, visit the [Getting Started](https://dir.api.it.umich.edu/get-started) page.

### Are there any usage limits?

In general, APIs within the API Directory have a quota of 200 calls per minute for each app. Any additional restrictions or policies will be individually documented within the Directory.

### Who can I contact with questions or issues?

If you have questions or issues, please reach out to the [API Directory Team](https://teamdynamix.umich.edu/TDClient/30/Portal/Requests/TicketRequests/NewForm?ID=h9GDFPFJJ8M_&RequestorType=Service) for support.

### Do I have to be on a campus network or VPN?

The API directory can be accessed from anywhere. There is no need to worry about your network connection or being on VPN.

### Are there any code samples to help my team get started?

Yes! See the [API Directory Code Examples](https://github.com/apidir/http-client-code-examples) GitHub repo for sample Python, Node, and Bash scripts.

## Developing & Publishing an API

### How can I list my own API in the API Directory?

To get started in developing, join the API Developers MCommunity group. Review the [API Developer Training Materials](https://documentation.its.umich.edu/node/3783) to get familiar with API Development practices at U-M.

Once you are a member of the API Developers group, you will be granted access to the dev and test environments for the API Directory, where you will be able to build and test your own API proxies.

If you have questions, please reach out to the [API Directory Team](https://teamdynamix.umich.edu/TDClient/30/Portal/Requests/TicketRequests/NewForm?ID=h9GDFPFJJ8M_&RequestorType=Service) for support.

### How are APIs secured?

At the transport level, all API traffic is secured by TLS, ensuring end-to-end encryption between the API Directory and consumers.

The API Directory is hosted by Google within a virtual private cloud, ensuring secure communication between the API Directory runtimes and backend services.

At the application level, all APIs are secured by two-legged OAuth. Traffic is managed by quota policies tied to each application and additional security policies block malicious requests and mitigate sudden spikes in traffic.

Each developer application is tied to a U-M affiliated user or a team of U-M affiliated users. Application credentials can be issued and revoked by end-users as well as API admins and APIs can require approval before a subscription is granted.

The [API Directory Data Sensitivity Guidlines](https://documentation.its.umich.edu/node/3933) offer additional perspective on the different types of data that can be exposed through the API Directory.

### Who controls access to each API?

While the ITS API Directory team has ultimate control over who is allowed to access APIs within the API Directory, users are allowed to self-manage their own API Teams through the API Portal.

Subscription requests are handled by ITS and will require approval from the appropriate stakeholders and data stewards before subscriptions are authorized.

### Is there a development environment?

The API Directory has both a dev and test environment for developers to use as they develop their APIs. Developers should start building their API proxies in the dev environment before promoting their code to the test environment for QA testing. In each environment, extensive debug tools are available to aid in development efforts.

### How can I audit & monitor my API's traffic?

The API Directory offers API Developers basic reports on traffic by product/proxy within the developer console. All API traffic is logged via Google Cloud Logging and sent to Splunk. If you have additional needs for logging and analytics, please contact the [API Directory Team](https://teamdynamix.umich.edu/TDClient/30/Portal/Requests/TicketRequests/NewForm?ID=h9GDFPFJJ8M_&RequestorType=Service) for support.

### What is an API proxy?

You expose an API on the API Directory by implementing one or more API proxies. API proxies decouple the app-facing API from your backend services, shielding those apps from backend code changes. As you make backend changes to your services, apps continue to call the same API without any interruption.

### What is an API product?

As an API provider, you create API products to bundle your APIs and make them available to app developers for consumption. You can think of API products as your product line.

Specifically, an API product bundles together one or more operations. An operation specifies an API proxy and resource paths that can be accessed on that proxy. An operation can also limit access by HTTP methods and by quota.

API products are the central mechanism for access control to your APIs. By defining one or more API products in a developer app, you can restrict access to proxies with an API key. In Apigee, API keys are provisioned, not for APIs themselves, but for API products. In other words, API keys are provisioned for bundles of operations that define a product line or specific service plan.

### Are there limitations to request & response sizes?

Within Apigee, message payload sizes are limited to 10MB for requests and responses. Exceeding this limit will yield a fault like the following:

```
{"fault":"{\"detail\":{\"errorcode\":\"protocol.http.TooBigBody\"},\"faultstring\":\"Body buffer overflow\"}"}
```

If you are designing a proxy that will handle large requests or responses (especially binary data), consider enabling [streaming](https://cloud.google.com/apigee/docs/api-platform/develop/enabling-streaming) within your proxy.
