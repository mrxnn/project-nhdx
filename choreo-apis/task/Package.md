# Task Template

## Template Overview

This template provides a boilerplate code for rapid implementation of FHIR APIs and creating, accessing and manipulating FHIR resources.

| Module/Element       | Version |
| -------------------- | ------- |
| FHIR version         | r4 |
| Implementation Guide | [http://openhie.org/fhir/sri-lanka](http://openhie.org/fhir/sri-lanka) |
| Profile URL          |[http://openhie.org/fhir/sri-lanka/StructureDefinition/referral-task](http://openhie.org/fhir/sri-lanka/StructureDefinition/referral-task), [http://openhie.org/fhir/sri-lanka/StructureDefinition/generic-task](http://openhie.org/fhir/sri-lanka/StructureDefinition/generic-task), [http://openhie.org/fhir/sri-lanka/StructureDefinition/investigations-task](http://openhie.org/fhir/sri-lanka/StructureDefinition/investigations-task), [http://openhie.org/fhir/sri-lanka/StructureDefinition/imaging-task](http://openhie.org/fhir/sri-lanka/StructureDefinition/imaging-task)|

### Dependency List

- ballerinax/health.fhir.r4
- ballerinax/health.fhirr4
- ballerinax/health.fhir.r4.lkcore010

This template includes a Ballerina service for Task FHIR resource with following FHIR interactions.
- READ
- VREAD
- SEARCH
- CREATE
- UPDATE
- PATCH
- DELETE
- HISTORY-INSTANCE
- HISTORY-TYPE

## Prerequisites

Pull the template from central

    ` bal new -t ballerinax/health.fhir.r4.lkcore010.task TaskAPI `

## Run the template

- Run the Ballerina project created by the service template by executing bal run from the root.
- Once successfully executed, Listener will be started at port 9090. Then you need to invoke the service using the following curl command
    ` $ curl http://localhost:9090/fhir/r4/Task `
- Now service will be invoked and returns an Operation Outcome, until the code template is implemented completely.

## Adding a Custom Profile/Combination of Profiles

- Add profile type to the aggregated resource type. Eg: `public type Task r4:Task|<Other_Task_Profile>;`.
    - Add the new profile URL in `api_config.bal` file.
    - Add as a string inside the `profiles` array.
    - Eg: `profiles: ["http://openhie.org/fhir/sri-lanka/StructureDefinition/referral-task", "new_profile_url"]`
