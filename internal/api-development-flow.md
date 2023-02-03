# User Story: API Developer Experience

This user journey follows a prospective API developer as they attempt to publish an API in the API Directory.

## API Developer Onboarding

The user gains access to Apigee by submitting a Tdx ticket and being added to the apidir-developers MCommunity group.

```mermaid
sequenceDiagram
    autonumber
    participant U as User
    participant T as Tdx Ticket
    participant A as API Directory Team
    participant I as IAM

    U->>+T: Submits ticket
    T->>+A: Reviews request
    A-->>-T: Approves request
    T->>+I: Adds user to MCommunity Group
    I-->>-T: Completes task via ticket
    T->>+A: Follow-up tasks
    A-->>-U: Closes ticket<br>Sends onboarding materials to user
    deactivate T
```

## API Development

Once the developer is able to access Apigee, they are expected to navigate the platform and independently complete all development work in the nonprod environments with little consultation from the API team.

## API Migration Flow

At some point, work has progressed to the point where the developer would like to migrate their changes to production. They will need to submit a Tdx ticket to request that their API be published.

```mermaid
sequenceDiagram
    autonumber
    participant U as User
    participant T as Tdx Ticket
    participant A as API Directory Team

    U->>+T: Submits ticket
    U-->>T: Attaches API worksheet
    T->>+A: Reviews request

    rect rgba(0,0,0,.25)
    loop Consultation & Changes
        A-->>U: Requests changes
        U-->>A: Makes changes
    end
    end
    A->>A: Migrates API to production
    A->>-U: Closes ticket<br>Notifies user of migration
    deactivate T

```
