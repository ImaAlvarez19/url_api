# Url API
API to get short urls

## Requirements
 - Node 15.0.1
 
### Necessary Files
You need to have the following configuration files that are not in the repository for security issues:

- `serviceAccountKey.json`
 
### API

- #### POST /api/shorturl
 **Example Request**
> {
>   "longUrl": "a website url"
> }

**Example Response**
> {
>   "urlCode": "BFFxi12",
>    "longUrl": "a website url"
> }


- #### GET /api/:urlCode
The response will redirect to the site corresponding to the `urlCode` received


## Tests
 - Jest (TODO)
 
 ## Author
 Alvarez Imanol
