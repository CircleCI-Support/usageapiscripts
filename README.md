# Generate Usage Reports

## Installs
Before use, please ensure that both Node.js and the following Node library is installed:
```
npm install request
```

## How To Use
1. First, replace the {INSERT-ORG-ID} and the {INSERT-API-TOKEN} sections of both files with your organization ID and CircleCI API PAT
2. Run: ```node generateReportID.js```
3. Take the output of the generated report ID and replace the {INSERT-GENERATED-ID-FROM-FIRST-SCRIPT} with this ID
4. Run ```node getUsageReport.js```
5. Use the generated URL to download the Usage Report. Please not that this link is temporary and will need to be regenerated if left unused for too long
