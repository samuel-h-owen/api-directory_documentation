---
node: 336
---

# Using the MCommunity People API

This document provides information about the People endpoints that are available as a part of the [MCommunity API][mcommunity-people-api]. This API can be used to programmatically get public information from the MCommunity Directory. Instructions for making a request, available request parameters, and sample outputs are detailed in this document. This document assumes a basic understanding of the U-M API Directory.

## About the API

The [MCommunity People API][mcommunity-people-api] is a web service that returns public MCommunity Directory information about current U-M affiliates, such as name, affiliation, and email address. This API is read-only. The Source of the data is the MCommunity LDAP Identity Vault. See [LDAP Access to MCommunity][mcommunity-ldap] for more details about the data source, and for definitions of the output attributes you will receive.

The API is restricted to 200 calls per minute. The MCommunity People API supports JSON (JavaScript Object Notation).

Use the [ITS Service Status page] to stay informed about potential outages of this web service.

## Getting Started

To get up and running with the MCommunity People API, follow the API Directory [Getting Started](https://dir.api.it.umich.edu/get-started) guide to learn how to join a team, create an app, and get API credentials, and request access to the MCommunity API product. Once you have received approval and obtained your client key and secret, you will be able to retrieve an access token and make requests to the MCommunity People endpoint.

## Available Endpoints

### /People/{uniqname}

This endpoint returns directory information about the person associated with the provided `uniqname` value.

#### Sample request

```
curl \
  'https://gw.api.it.umich.edu/um/MCommunity/People/bjensen' \
  --header 'Authorization: Bearer {access-token}' \
  --header 'Accept: application/json'
```

In this example request, we are calling the person endpoint to get information about the person with the `bjensen` uniqname. Be sure to replace the `{access-token}` value in the authorization header with an access token obtained using your app's credentials.

#### Sample response

The above request yields the following response:

```json
{
  "person": {
    "distinguishedName": "uid=bjensen,ou=People,dc=umich,dc=edu",
    "errors": "",
    "objectClass": [
      "inetOrgPerson",
      "posixAccount",
      "umichPerson",
      "krbForeignPrincipalAux",
      "posixGroup",
      "organizationalPerson",
      "person",
      "ndsLoginProperties",
      "top",
      "DirXML-EntitlementRecipient",
      "DirXML-ApplicationAttrs"
    ],
    "aboutMeView": 2,
    "affiliation": "Staff",
    "aliases": ["Babs Jensen", "Barbara Jensen"],
    "altAddressView": 2,
    "altPhoneView": 2,
    "displayName": "Babs Jensen",
    "email": "bjensen@umich.edu",
    "faxPhoneView": 2,
    "homeAddressView": 2,
    "homePhoneView": 2,
    "imView": 2,
    "mobilePhoneView": 2,
    "noticeView": 2,
    "pagerPhoneView": 2,
    "uniqname": "bjensen",
    "urlView": 2,
    "vacationView": 2
  }
}
```

### /People/minisearch/{criteria}

Returns public directory information for the `criteria` search string.

#### Sample Request

```
curl \
  'https://gw.api.it.umich.edu/um/MCommunity/People/minisearch/bjensen' \
  --header 'Authorization: Bearer {access-token}' \
  --header 'Accept: application/json'
```

This request uses the mini search endpoint to retrieve information about all entries matching the search criteria of `bjensen`.

#### Sample Response

The above request yields the following response. Note that the response contains a list of person entries, unlike the singular result produced by the `/person/{uniqname}` endpoint.

```json
{
  "person": [
    {
      "distinguishedName": "uid=bjensen,ou=People,dc=umich,dc=edu",
      "errors": "",
      "objectClass": [
        "inetOrgPerson",
        "posixAccount",
        "umichPerson",
        "krbForeignPrincipalAux",
        "posixGroup",
        "organizationalPerson",
        "person",
        "ndsLoginProperties",
        "top",
        "DirXML-EntitlementRecipient",
        "DirXML-ApplicationAttrs"
      ],
      "aboutMeView": 2,
      "affiliation": "Staff",
      "aliases": ["Babs Jensen", "Barbara Jensen"],
      "altAddressView": 2,
      "altPhoneView": 2,
      "displayName": "Babs Jensen",
      "email": "bjensen@umich.edu",
      "faxPhoneView": 2,
      "homeAddressView": 2,
      "homePhoneView": 2,
      "imView": 2,
      "mobilePhoneView": 2,
      "noticeView": 2,
      "pagerPhoneView": 2,
      "uniqname": "bjensen",
      "urlView": 2,
      "vacationView": 2
    },
    {
      "distinguishedName": "uid=bajensen,ou=People,dc=umich,dc=edu",
      "errors": "",
      "objectClass": [
        "inetOrgPerson",
        "rfc822MailGroup",
        "umichPerson",
        "krbForeignPrincipalAux",
        "umichGroup",
        "posixAccount",
        "organizationalPerson",
        "person",
        "ndsLoginProperties",
        "top",
        "DirXML-EntitlementRecipient"
      ],
      "aboutMeView": 2,
      "aliases": ["Barbra Anne Jensen", "B A Jensen", "Barb Jensen"],
      "altAddressView": 2,
      "altPhoneView": 2,
      "displayName": "Barbra Anne Jensen",
      "email": "bajensen@umich.edu",
      "faxPhoneView": 2,
      "homeAddressView": 2,
      "homePhoneView": 2,
      "imView": 2,
      "mobilePhoneView": 2,
      "noticeView": 2,
      "pagerPhoneView": 2,
      "uniqname": "bajensen",
      "urlView": 2,
      "vacationView": 2
    },
    {
      "distinguishedName": "uid=bbjensen,ou=People,dc=umich,dc=edu",
      "errors": "",
      "objectClass": [
        "inetOrgPerson",
        "posixAccount",
        "umichPerson",
        "krbForeignPrincipalAux",
        "posixGroup",
        "organizationalPerson",
        "person",
        "ndsLoginProperties",
        "top",
        "DirXML-EntitlementRecipient"
      ],
      "aboutMeView": 2,
      "affiliation": "Faculty",
      "aliases": ["Barbara Betty Jensen", "Barb B Jensen"],
      "altAddressView": 2,
      "altPhoneView": 2,
      "displayName": "Barbara Betty Jensen",
      "email": "bbjensen@umich.edu",
      "faxPhoneView": 2,
      "homeAddressView": 2,
      "homePhoneView": 2,
      "imView": 2,
      "mobilePhoneView": 2,
      "noticeView": 2,
      "pagerPhoneView": 2,
      "title": "Associate Professor of Basketweaving, School of Arts and Crafts",
      "uniqname": "bbjensen",
      "urlView": 2,
      "vacationView": 2,
      "workPhone": "734/847-5309"
    }
  ]
}
```

### /People/compact/find/{criteria}

Returns only affiliation, name, uniqname, and full name of people related to the search term specified in `criteria`.

#### Sample Request

```
curl \
  'https://gw.api.it.umich.edu/um/MCommunity/People/compact/find/jensen' \
  --header 'Authorization: Bearer {access-token}' \
  --header 'Accept: application/json'
```

In this example, we are using the compact find endpoint to search for any entries matching the search criteria of `jensen`.

#### Sample Response

The above request yields the following response. Note that the response contains an array of entries with condensed information about each person.

```json
{
  "person": [
    {
      "aff": "Alumni",
      "name": "Barbara J Jensen",
      "uniqname": "bjensen",
      "fName": "Barbara J Jensen"
    },
    {
      "name": "Andrew Victor Jensen",
      "uniqname": "ajensen",
      "fName": "Andrew Victor Jensen"
    },
    {
      "aff": "Alumni",
      "name": "Amy Rebecca Jensenson",
      "uniqname": "arjens",
      "fName": "Amy Rebecca Jensenson"
    },
    {
      "aff": "Alumni",
      "name": "James Earl Jensen ",
      "uniqname": "jejensen",
      "fName": "James Earl Jensen"
    },
    {
      "name": "Jens Benjamin",
      "uniqname": "bejens",
      "fName": "Jens Benjamin"
    },
    {
      "aff": "Alumni",
      "name": "Arthur Bennett Jensens",
      "uniqname": "abjensen",
      "fName": "Arthur Bennett Jensens"
    },
    {
      "aff": "Retiree - Faculty and Staff",
      "name": "Belinda L Jensen",
      "title": "Professor Emeritus of Basketweaving, School of Arts and Crafts",
      "uniqname": "bljensen",
      "fName": "Belinda L Jensen"
    }
  ]
}
```

## Output Definitions

The MCommunityPeople API provides public data from the MCommunity Directory. Definitions of those data can be found in [MCommunity Directory Attributes Available Via LDAP][mcommunity-ldap-attrs]. The output from this API contains only attributes with an access level of read-only, anonymous access.

## Policy Notes

**Researching with this data**  
The data available in the MCommunityPeople API could be considered human subjects data. Such research [requires approval from U-M's Institutional Review Board](https://compliance.umich.edu/topics/research/human-subjects/). Students should consult with their faculty advisor.

**Displaying names in your application**  
Adhere to the U-M [Preferred Names Policy](https://documentation.its.umich.edu/node/248) by using the `displayName` attribute when displaying names within your application.

[api-dir]: https://dir.api.it.umich.edu
[mcommunity-ldap]: https://documentation.its.umich.edu/node/271
[mcommunity-ldap-attrs]: https://documentation.its.umich.edu/node/374
[mcommunity-people-api]: https://dir.api.it.umich.edu/docs/mcommunity/1/overview
