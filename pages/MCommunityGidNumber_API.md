# Using the MCommunityGidNumber API
This document provides information about the [MCommunityGidNumber](https://dir.api.it.umich.edu/docs/mcommunity/1/routes/MCommunityGidNumber/nextNumber.json/get) endpoint that is a part of the MCommunity API. The MCommunityGidNumber endpoint can be used to reserve gid numbers for groups. Instructions on making a request, available input parameters, and potential outputs and definitions are detailed in this document.

This document assumes a basic understanding of the [U-M API Directory](https://dir.api.it.umich.edu). See the API Directory [Getting Started](https://dir.api.it.umich.edu/get-started) page for more information.

## About the API
The MCommunityGidNumber API is a web service that IT professionals can use to reserve gid numbers for groups. A gid number is used in Unix/Linux systems as a unique identifier for a group. This service enables reservation of gid numbers in a way that avoids overlap with ones assigned by the ITS MCommunity team and others.

The API is restricted to 200 calls per minute. The MCommunityGidNumber API supports JSON (JavaScript Object Notation).

Use the ITS Service Status page to stay informed about potential outages of this web service.


## Making a Request
The API is located in the API Directory.

First, join a developer organization using the Getting Started Page of API Directory.

Once you get access to join a developer organization:

Log in to the API Directory with your uniqname and UMICH password.
Register your application with the API Directory by adding it as a new application.
Note the Client Id and Client Secret when you are creating the application as they will be used in getting the access tokens for API access.
On the API Directory site, navigate to the MCommunityGidNumber API by searching for the API in the search box.
Subscribe to the MCommunityGidNumber API by selecting your application in the list.
Use your Client Id and Client Secret obtained in step three to generate an access token either:
Programmatically within your application
Or on the API page for your application
By default, access tokens are available for one hour.

Make a request using the appropriate input parameters. Check the sample request and response listed below.
Input Parameter	Definition	Data type	Example
Administrator (uniqname)	The uniqname of the reference person responsible for maintaining the group to which the gidNumber is assigned. Multiple people can be listed here.	string	bjensen
System	The name of the server or system in which the group will be used.	string	limburger.dsc.umich.edu (server)
MiWorkspace (system)
Foreign Key	Group name. If an MCommunity group, use the group email value without the @umich.edu. For non-MCommunity groups, enter the group name.	string	groupname
Description	Provides a description for the gidNumber	string	MiWorkspace GID Number
MCommunity Group gidNumber
Reserved for MCIT

## Sample Request and Output
Requesting a GidNumber for a system.

Format of request:

GET https://apigw.it.umich.edu/um/MCommunityGidNumber?adminUid={input}&system={input}&foreignkey={input}&description={input}
Example request:

?adminUid=bjensen&system=limburger.dsc.umich.edu&foreignkey=
MCommunity+Test+Group&description=MCommunity+Group+gidNumber
Sample output:

{
"idNumber": {
"dn": "umichGidNumber=2600007,ou=gidNumbers,o=Registry",
"adminUid": "bjensen",
"idNumber": "2600007",
"description": "MCommunity Group gidNumber"
}
}
## Output Definitions
Output	Definition	Data type	Example
dn	The fully qualified distinguished name (dn) of the gidNumber object in the MCommunity LDAP tree.	DN	umichGidNumber=2600007,ou=gidNumbers,o=Registry
adminUid	The uniqname of one or more people who own this gidNumber.	string	bjensen
idNumber	The gidNumber for this group.	string	2600007
description	The description that will be stored in MCommunity for this gidNumber.	string	MCommunity Group gidNumber
