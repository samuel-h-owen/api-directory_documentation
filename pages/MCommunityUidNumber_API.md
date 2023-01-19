# Using the MCommunityUidNumber Endpoint

## Overview

This document provides information about the [MCommunityUidNumber][endpoint] endpoint that is a part of the MCommunity API. In Unix/Linux systems, a `uid` number serves as a unique identifier for a user account. The MCommunityUidNumber endpoint can be used to reserve `uid` numbers in a way that avoids overlap with ones assigned by the ITS MCommunity team and others.

This document assumes a basic understanding of the [U-M API Directory](https://dir.api.it.umich.edu). See the API Directory [Getting Started](https://dir.api.it.umich.edu/get-started) page for more information. The API is restricted to 200 calls per minute. Use the [ITS Service Status](https://status.its.umich.edu/) page to stay informed about potential outages of MCommunity or the API Directory.

## Getting Started

To get up and running with the MCommunityGidNumber API, follow the API Directory [Getting Started](https://dir.api.it.umich.edu/get-started) guide to learn how to join a team, create an app, and get API credentials, and request access to the MCommunity API product. Once you have received approval and obtained your client key and secret, you will be able to retrieve an access token and make requests to the MCommunityUidNumber endpoint.

## Input Parameters

The MCommunityUidNumber endpoint takes the following request parameters as argument that can be passed in the query string of your request:

| Parameter                    | Data Type | Example                             | Description                                                                                                                                                                |
| ---------------------------- | --------- | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Administrator<br>`adminUid`  | string    | `bjensen`                           | The uniqname of the reference person responsible for maintaining the identity—**not** the person to whome the `uidNumber` is assigned. Multiple values can be listed here. |
| System<br>`system`           | string    | `limburger.dsc.umich.edu`           | The name of the server or system in which the admin account will be used.                                                                                                  |
| Foreign Key<br>`foreignkey`  | string    | `bjensen1`                          | The account name or user ID of the admin account to which the `uidNumber` will be assigned.                                                                                |
| Description<br>`description` | string    | `Shared account for research group` |

## Sample Request

To request a new `uid`, make a request to the endpoint like so:

```bash
GET https://gw.api.umich.edu/um/MCommunitUidNumber/nextNumber.json?adminUid={adminUid}&system={system}&foreignkey={foreignkey}&description={description}
```

As an example, consider the following request:

```bash
GET https://gw.api.umich.edu/um/MCommunitUidNumber/nextNumber.json?adminUid=bjensen&system=limburger.dsc.umich.edu&foreignkey=bjensen1&description=Shared+account+for+research+group
```

The above request should yield a response with the following JSON payload:

```json
{
  "idNumber": {
    "dn": "umichUidNumber=1000208,ou=uidNumbers,o=Registry",
    "idNumber": "1000208",
    "adminUid": "bjensen",
    "description": "Shared account for research group"
  }
}
```

The attributes of the `idNumber` response object are defined as follows:

| Attribute                      | Data Type | Example                                           | Description                                                                                 |
| ------------------------------ | --------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Distinguished Name<br>`dn`     | string    | `umichUidNumber=1000208,ou=uidNumbers,o=Registry` | The fully-qualified distinguished name of the gidNumber object in the MCommunity LDAP tree. |
| UID Number<br>`idNumber`       | string    | `1000208`                                         | The UID number that has been issued.                                                        |
| Administrator(s)<br>`adminUid` | string    | `bjensen`                                         | The uniquename(s) of the gitNumber's owner.                                                 |
| Description<br>`description`   | string    | `MCommunity Group GID`                            | The description associated with the GID number.                                             |

## Additional Information

For additional information about the MCommunityUidNumber endpoint, please see its [documentation][endpoint] in the API Directory. If you have additional questions, feel free to reach out to the API Directory team at [apidir-contact@umich.edu](mailto:apidir-contact@umich.edu).

[endpoint]: https://dir.api.it.umich.edu/docs/mcommunity/1/routes/MCommunityUidNumber/nextNumber.json/get
