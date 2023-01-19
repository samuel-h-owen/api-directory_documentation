# Using the MCommunityUidNumber Endpoint
This document provides information about the [MCommunityUidNumber](https://dir.api.it.umich.edu/docs/mcommunity/1/routes/MCommunityUidNumber/nextNumber.json/get) endpoint that is a part of the MCommunity API. The MCommunityUidNumber endpoint can be used to reserve gid numbers for groups. Instructions on making a request, available input parameters, and potential outputs and definitions are detailed in this document.

This document assumes a basic understanding of the [U-M API Directory](https://dir.api.it.umich.edu). See the API Directory [Getting Started](https://dir.api.it.umich.edu/get-started) page for more information.

## About the API
The MCommunityUidNumber endpoint can be used to reserve uid numbers for administrative accounts. A uid number is used in Unix/Linux systems as a unique identifier for an account. This service enables reservation of uid numbers in a way that avoids overlap with ones assigned by the ITS MCommunity team and others.

The API is restricted to 200 calls per minute. The MCommunityUidNumber API supports JSON (JavaScript Object Notation).

Use the ITS Service Status page to stay informed about potential outages of this web service.


## Making a Request
The API is located in the API Directory.

First, join a developer organization using the Getting Started Page of API Directory.

Once you get access to join a developer organization:

Log in to the API Directory with your uniqname and UMICH password.
Register your application with the API Directory by adding it as a new application.
Note the Client Id and Client Secret when you are creating the application as they will be used in getting the access tokens for API access.
On the API Directory site, navigate to the MCommunityUidNumber API by searching for the API in the search box.
Subscribe to the MCommunityUidNumber API by selecting your application in the list.
Use your Client Id and Client Secret obtained in step three to generate an access token either:
Programmatically within your application
Or on the API page for your application
By default, access tokens are available for one hour.

Make a request using the appropriate input parameters. Check the sample request and response listed below.
Input Parameter	Definition	Data type	Example
Administrator (uniqname)	The uniqname of the reference person responsible for maintaining the identity, not the person to whom the uidNumber is assigned. Multiple people can be listed here.	string	bjensen
System	The name of the server or system in which the admin account will be used.	string	limburger.dsc.umich.edu (server)
MiWorkspace (system)
Foreign Key	Account name. The name or user ID of the admin account which will be assigned the uidNumber.	string	bjensen1
Description	Brief description of how the admin account will be used.	string	File attach ID for MCommDev
MiWorkspace admin account
Shared account for research group

## Sample Request and Output
Requesting a uidNumber for a system.

Format of request:

GET http://apigw.it.umich.edu/um/MCommunityUidNumber?adminUid={input}&system={input}&foreignkey={input}&description={input}
Example request:

?adminUid=bjensen&system=limburger.dsc.umich.edu&foreignkey=bjensen1&description=Shared+account+for+research+group
Sample output:

{
"idNumber": {
"description": "Shared account for research group",
"idNumber": "1000208",
"adminUid": "bjensen",
"dn": "umichUidNumber=1000208,ou=uidNumbers,o=Registry"
}
}

## Output Definitions
Output	Definition	Data type	Example
description	The description that will be stored in MCommunity for this uidNumber.	string	Shared account for research group
idNumber	The uidNumber for this account.	string	1000208
adminUid	The uniqname of one or more people who own this uidNumber.	string	bjensen
dn	The fully qualified distinguished name (dn) of the uidNumber object in the MCommunity LDAP tree.	DN	umichUidNumber=1000208,ou=uidNumbers,o=Registry
