# Secdevops

CI/CD utilities to check the headers of the service. For details on how it works check https://www.npmjs.com/package/check-my-headers 

## How to run it

1. Install Node 16
1. Install all dependencies `npm install`
1. Run the scan on your code `npm cli <URL>`

### Return format
By default, JSON format is returned. If markdown format is prefered, run as `npm cli <URL> md`

### Return codes
- 0: if the scan succeeds
- 1: if the scan fails

Note: a successfull scan does not mean there are no errors

## CI/CD
1. The scanner will run for every PR and it will first check itself against a well know application (https://juice-shop.herokuapp.com)
1. Next the scanner will check the latest build (again it is https://juice-shop.herokuapp.com)
1. If critical errors are found (not warn or info), the action is marked as failed

NOTE: the scanner cannot use the `npm cli` syntax as that produces additional undesired output


## TODOs
1. Use a more lightweight Comment PR Action - current one uses docker
1. Use the docker image for the self check which allows to make more precise tests and is not suscetible to network issues
