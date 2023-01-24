# API Glossary

## Overview

This document contains a glossary with a list of terms and definitions related to the API Directory & APIs in general.

## Glossary

<dl>

<dt>Access Token</dt>
<dd>An access token provides the authorization necessary to allow client applications to call APIs that they are subscribed to. You can obtain an access token by <a href="https://dir.api.it.umich.edu/guides/oauth-authentication" target="_blank">authenticating your app</a> with the API Directory's OAuthProvider service.</dd>
<dt>API</dt>
<dd>An API (Application Programming Interface) enables access to processes and data assets through a uniform interface. Web APIs usually take the form of REST or SOAP web services and provide the building blocks for creating web apps and integrations across systems.</dd>

<dt>API Credentials</dt>
<dd>API credentials consist of two parts: an API key and an associated secret. The API key functions much like a username in that it is used to identify a particular application that is registered in the API directory. The secret associated with the API key functions much like a password—it proves ownership over the API key that is being used. In combination, the key and secret can be used to generate an access token and begin issuing calls to the API Directory.</dd>

<dt>App</dt>
<dd>In the API Directory, an app is an entity that can subscribe to one or more APIs. Each app is issued a set of one or more credentials which can be used to identify and authenticate the app and its associated developer(s). For more information about apps, see the <a href="https://dir.api.it.umich.edu/guides/managing-apps" target="_blank">Managing Apps</a> guide.</dd>

<dt>Client Application</dt>
<dd>Client applications are the applications that consume one or more APIs from the API Directory.</dd>

<dt>cURL</dt>
<dd><a href="https://curl.haxx.se/" target="_blank" rel="noreferrer">cURL</a> is a command line tool commonly used to transfer data across various protocols. It is common to see examples of API calls written as cURL commands due to the readability of the syntax and its widespread currency throughout the API landscape.</dd>

<dt>JSON</dt>
<dd><a href="https://www.json.org/json-en.html" target="_blank">JavaScript Object Notation</a> (JSON) is a standard and highly portable way to serialize or represent data structures across systems. JSON is commonly used across the web to transfer data to and from APIs and has deep support across nearly all programming languages.</dd>

<dt>OAuth</dt>
<dd><a href="https://oauth.net/" target="_blank">OAuth</a> is an open protocol to allow secure authorization in a simple and standard method from web, mobile, and desktop applications. The protocol supports multiple authentication flows enabling direct authorization with a platform or indirect authorization via a third-party identity provider. The API Directory typically uses the client credentials OAuth flow to authenticate apps.</dd>

<dt>Postman</dt>
<dd><a href="https://www.postman.com/" target="_blank">Postman</a> is an API platform for developers to design, build, test, and iterate their APIs. Most APIs listed in the API Directory have accompanying <a href="https://drive.google.com/drive/folders/1OdXufmwJJ_Qy-uSJImlmZImCkN-RqBCE" target="_blank">Postman collections</a> demonstrating typical configuration and consumption practices for that particular API.</dd>

<dt>Rate Limiting</dt>
<dd>A rate limit is the number of calls per time unit that an application is allowed to make for a given API. For the API Directory, most APIs are configured to have a rate limit of 200 calls per minute. Once an app exceeds this limit, the API will begin returning the <code>429 Too Many Requests</code> status code until enough time has passed and your traffic has fallen under the limit.</dd>

<dt>REST</dt>
<dd><a href="https://en.wikipedia.org/wiki/Representational_state_transfer" target="_blank">Representational State Transfer</a> (REST) is a stateless architecture that generally runs over HTTP. The REST architecture exposes resources through unique URIs which can be acted upon via HTTP verbs (GET, POST, PUT, PATCH, DELETE).</dd>

<dt>SOAP</dt>
<dd>Simple Object Access Protocol (SOAP) is a XML-based framework typically used to expose enterprise-grade web service operations over HTTP.</dd>

<dt>Team</dt>
<dd>In the API Directory, a team represents a group users who are able to view and manage shared apps and credentials. For more information about teams, see the <a href="https://dir.api.it.umich.edu/guides/managing-teams" target="_blank">Managing Teams</a> guide.</dd>

<dt>XML</dt>
<dd>Extensible Markup Language (XML) is a markup language designed to store and transport data in a format that is self-descriptive. It is commonly used to exchange data between systems through backend services and APIs. All SOAP web services transfer data through the exchange of XML payloads.</dd>

</dl>
