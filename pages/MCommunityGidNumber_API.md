# Using the MCommunityGidNumber Endpoint

## Overview

This document provides information about the [MCommunityGidNumber][endpoint] endpoint that is a part of the MCommunity API. In Unix/Linux systems, a `gid` number is a unique identifier for a group. The MCommunityGidNumber endpoint can be used to reserve `gid` numbers for groups. This service enables the reservation of `gid` numbers in a way that avoids overlap with ones assigned by the ITS MCommunity team and others.

This document assumes a basic understanding of the [U-M API Directory](https://dir.api.it.umich.edu). See the API Directory [Getting Started](https://dir.api.it.umich.edu/get-started) page for more information. The API is restricted to 200 calls per minute. Use the [ITS Service Status](https://status.its.umich.edu/) page to stay informed about potential outages of MCommunity or the API Directory.

## Getting Started

To get up and running with the MCommunityGidNumber API, follow the API Directory [Getting Started](https://dir.api.it.umich.edu/get-started) guide to learn how to join a team, create an app, and get API credentials, and request access to the MCommunity API product. Once you have received approval and obtained your client key and secret, you will be able to retrieve an access token and make requests to the MCommunityGidNumber endpoint.

## Input Parameters

The MCommunityGidNumber endpoint takes the following request parameters as arguments that can be passed in the query string of your request:

| Parameter                    | Data Type | Example                   | Definition                                                                                                                               |
| ---------------------------- | --------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Uniqname<br>`adminUid`       | string    | `bjensen`                 | The uniqname of the reference person responsible for managing the group.                                                                 |
| System<br>`system`           | string    | `limburger.dsc.umich.edu` | The name of the server or system in which the group will be used.                                                                        |
| Foreign key<br>`foreignkey`  | string    | `groupname`               | The group name. If an MCommunity group, use the group email value without `@umich.edu`. For non-MCommunity groups, enter the group name. |
| Description<br>`description` | string    | `MiWorkspace GID Number`  | Provides a description for the gidNumber.                                                                                                |

## Sample Request

To request a new `gid` to be issued, make a request to the endpoint, like so:

```bash
GET https://gw.api.it.umich.edu/um/MCommunityGidNumber/nextNumber.json?adminUid={adminUid}&system={system}&foreignkey={foreignkey}&description={description}
```

As an example, consider the following request:

```bash
GET https://gw.api.it.umich.edu/um/MCommunityGidNumber/nextNumber.json?adminUid=bjensen&system=limburger.dsc.umich.edu&foreignkey=MCommunity+Test+Group&description=MCommunity+Group+GID
```

The above request should yield a response with the following JSON payload:

```json
{
  "idNumber": {
    "dn": "umichGidNumber=3600007,ou=gidNumbers,o=Registry",
    "adminUid": "bjensen",
    "idNumber": "3600007",
    "description": "MCommunity Group GID"
  }
}
```

The attributes of the `idNumber` response object are defined as follows:

| Attribute                      | Data Type | Example                                           | Description                                                                                 |
| ------------------------------ | --------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Distinguished Name<br>`dn`     | string    | `umichGidNumber=3600007,ou=gidNumbers,o=Registry` | The fully-qualified distinguished name of the gidNumber object in the MCommunity LDAP tree. |
| Administrator(s)<br>`adminUid` | string    | `bjensen`                                         | The uniquename(s) of the gitNumber's owner.                                                 |
| GID Number<br>`idNumber`       | string    | `3600007`                                         | The GID number.                                                                             |
| Description<br>`description`   | string    | `MCommunity Group GID`                            | The description associated with the GID number.                                             |

## Additional Information

For additional information about the MCommunityGidNumber endpoint, please see its [documentation][endpoint] in the API Directory. If you have additional questions, feel free to reach out to the API Directory team at [apidir-contact@umich.edu](mailto:apidir-contact@umich.edu).

[endpoint]: https://dir.api.it.umich.edu/docs/mcommunity/1/routes/MCommunityGidNumber/nextNumber.json/get 'MCommunityGIDNumber API endpoint'
