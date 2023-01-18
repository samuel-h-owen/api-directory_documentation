# Step-by-Step Guide to Creating Groups with the iamGroups Web Service

This document provides information about the [iamGroups](https://dir.api.it.umich.edu/docs/iamgroups/1/overview) Application Programming Interface (API). The iamGroups API is a web service that IT professionals can use to create and edit [MCommunity groups](https://documentation.its.umich.edu/node/749). This document assumes a basic understanding of the [U-M API Directory](https://dir.api.it.umich.edu). See the API Directory [Getting Started](https://dir.api.it.umich.edu/get-started) page for more information.

## MCommunity Directory Basics

The MCommunity Web Directory application allows for the management of user and group information. It is an application written in-house and supported by the Identity and Access Management team.

The purpose of the iamGroups web service is to allow you to do anything you can do with the Web Directory user interface.

The underlying database for the MCommunity Web Directory is an LDAP v3 compliant directory.

Users in the MCommunity directory (specifically, the MCommunity vault) are stored in `ou=People,dc=umich,dc=edu`, with a naming attribute of `uid`. The LDAP fully-qualified distinguished name of the user with the uniqname bjensen is `uid=bjensen,ou=People,dc=umich,dc=edu`.

Groups in the MCommunity directory are stored in `ou=User Groups,ou=Groups,dc=umich,dc=edu`, with a naming attribute of `cn` (common name). The LDAP fully-qualified distinguished name of a group with the name iamGroupsWSTest1 is `cn=iamGroupsWSTest1,ou=User Groups,ou=Groups,dc=umich,dc=edu`.

## API Directory Setup

To call the iamGroups API, you will first need to join a team, create an app, subscribe to the iamGroups API, and obtain an API key. See the [Getting Started](https://dir.api.it.umich.edu/get-started) guide for more information.

## Setup within MCommunity

After you subscribe to the iamGroups API, you will receive an API key. This API key should be added as an alias under the "Also Known As” section of your MCommunity group.

<img src="/files/mcommunity-aka-section.png" alt="MCommunity Also Known As section" style="width: 100%; max-width: 500px; height: auto;" />

For example, if the group you want to own your other groups is called FakeDepartment-Owners, you would add the API key as an alias under the “Also Known As” section of this group.

## Active Directory Synchronization

If you are interested in synchronizing groups from MCommunity to Active Directory, please see [Synchronizing Groups from MCommunity to AD](https://docs.google.com/document/d/1AY5V6pinkLSfd8Wqs3ZxXh4tZVOBuLLnKcfA4YPicNM/edit?usp=sharing) (Google doc) for additional configuration steps.

## Programming Notes

- Data in POST request operations are always in JSON format.
- If you are trying to automate group operations, you will need to append uniqnames and group names with the `ou=People,dc=umich,dc=edu` and `ou=User Groups,ou=Groups,dc=umich,dc=edu` organizational units.
- The LDAP protocol is not case sensitive, so user and group fully-qualified distinguished names can appear in any combination of mixed case.

## Example Functionality

Any time you want to add or remove a member, owner, etc., you must first read the `memberDn` attribute with the `/members` endpoint, add or remove the user(s) from it, then call the desired endpoint with the updated list of users.

For example, the member, moderator, and owner endpoints have this requirement.

### Find information for a group

Request method: `GET`  
API endpoint: `/find/group/{Your Group Name}`

This endpoint provides some, but not all, of the information for a group. For example, it does not provide the group's `gid` number. If you want to find the group's `gid` number, use the `/profile/dn` endpoint, described below.

### Find detailed information for a group

Request method: `GET`  
API endpoint: `/profile/dn/cn={Your Group Name},ou=User Groups,ou=Groups,dc=umich,dc=edu`

This endpoint provides complete information for a group, including the group's `gid` number, which is located in the `gidNumber` attribute of the response.

### Get the members of a group

Request method: `GET`  
API endpoint: `/members/cn=Your Group Name,ou=User Groups,ou=Groups,dc=umich,dc=edu`

Call this endpoint to get the members of the group from the memberDn attribute of the response.

### Create a group

Request method: `POST`  
API endpoint: `/api/create`  
Request body:

```json
{
  "name": "iamGroupsWSTest1"
}
```

Your group will be created with an expiration date one year into the future.

### Add members to a group

Request method: `POST`  
API endpoint: `/update/member`  
Request body:

```json
{
  "dn": "cn=<your group name>,ou=user groups,ou=groups,dc=umich,dc=edu",
  "memberDn": [
    "uid=<uniqname>,ou=people,dc=umich,dc=edu",
    "uid=<uniqname>,ou=people,dc=umich,dc=edu"
  ]
}
```

This endpoint performs a replacement operation of the member attribute values.

### Add moderators to a group

Request method: `POST`  
API endpoint: `/update/moderator`  
Request body:

```json
{
  "dn": "cn=<your group name>,ou=user groups,ou=groups,dc=umich,dc=edu",
  "moderator": [
    {
      "email": "someone@google.com"
    },
    {
      "email": "someone@yahoo.com",
      "name": "someone"
    }
  ]
}
```

Do not try to add the name element without the email element, as this will not create a valid moderator value.

### Add owners to a group

Request method: POST
API endpoint: `/update/owner`
Request body:

```json
{
  "dn": "cn=<your group name>,ou=user groups,ou=groups,dc=umich,dc=edu",
  "ownerDn": [
    "cn=<your group name>,ou=user groups,ou=groups,dc=umich,dc=edu",
    "uid=uniqname,ou=people,dc=umich,dc=edu"
  ]
}
```

### Doing More with the iamGroups API

Apart from the example routes outlined above, the iamGroups API is capable of many other operations. The full documentation for the iamGroups API is available on the [API Directory](https://dir.api.it.umich.edu/docs/iamgroups/1/overview). For more help, reach out to the API Directory team at [apidir-contact@umich.edu](mailto:apidir-contact@umich.edu).
