---
page_id: 3784
---

# API Glossary

## Overview

This document contains a glossary with a list of terms and definitions related to the API Directory & APIs in general.

## Glossary

<dl>

<dt>Access Tokens</dt>
<dd>Access Tokens provide the authorization necessary to allow client applications to call APIs that they are subscribed to.</dd>

<dt>API</dt>
<dd>An API (Application Programming Interface) enables access to processes and data assets through a uniform interface. Web APIs usually take the form of REST or SOAP web services and provide the building blocks for creating web apps and integrations across systems.</dd>

<dt>Client Application</dt>
<dd>Client applications are the applications that consume one or more APIs from the API Directory.</dd>

<dt>API Credentials</dt>
<dd>API credentials consist of two parts: an API key and an associated secret. The API key functions much like a username in that it is used to identify a particular application that is registered in the API directory. The secret associated with the API key functions much like a password—it proves ownership over the API key that is being used. In combination, the key and secret can be used to generate an access token and begin issuing calls to the API Directory.</dd>

<dt>cURL</dt>
<dd><a href="https://curl.haxx.se/" target="_blank" rel="noreferrer">cURL</a> is a command line tool commonly used to transfer data across various protocols. It is common to see examples of API calls written as cURL commands due to the readability of the syntax and its widespread currency throughout the API landscape.</dd>

<dt>JSON</dt>
<dd><a href="https://www.json.org/json-en.html" target="_blank">JavaScript Object Notation</a> (JSON) is a standard and highly portable way to serialize or represent data structures across systems. JSON is commonly used across the web to transfer data to and from APIs and has deep support across nearly all programming languages.</dd>

<dt>REST</dt>
<dd><a href="https://en.wikipedia.org/wiki/Representational_state_transfer" target="_blank">Representational State Transfer</a> (REST) is a stateless architecture that generally runs over HTTP. The REST architecture exposes resources through unique URIs which can be acted upon via HTTP verbs (GET, POST, PUT, PATCH, DELETE).</dd>

<dt>OAuth</dt>
<dd><a href="https://oauth.net/" target="_blank">OAuth</a> is an open protocol to allow secure authorization in a simple and standard method from web, mobile, and desktop applications. The protocol supports multiple authentication flows enabling direct authorization with a platform or indirect authorization via a third-party identity provider. The API Directory typically uses the client credentials OAuth flow to authenticate apps.</dd>

<dt>SOAP</dt>
<dd>Simple Object Access Protocol (SOAP) is a XML-based framework typically used to expose enterprise-grade web service operations over HTTP.</dd>
</dl>
