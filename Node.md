# The LateRooms Group Node task

> It is recommended you review the [submission guidelines](SUBMISSION-GUIDELINES.md) before starting the exercise.

Please take a couple of hours at most to tackle this task. Your solution will be the basis for a discussion during our interview. 

## The Task

Please write an API using Node.JS that returns a JSON response in the following structure...

```
[{
    "id": "16296355",
    "url": "r16296355_manchester",
    "text": "Manchester"
},
{
    "id": "16844357",
    "url": "k16844357_manchester-city-centre",
    "text": "Manchester City Centre"
}]
```

The API should expose a single ```GET``` endpoint ```/{{term}}``` where term can be letters or numbers and has a minimum length of 3 characters.

The API should use the following endpoints to build the response.

http://lr-node-kata.herokuapp.com/search/{{term}}

Please return mappings for all the id's returned by the search endpoint.

http://lr-node-kata.herokuapp.com/details/?id={{id}}

We would like any JavaScript to be test driven (in whatever library and test framework you feel comfortable with). 

Feel free to use any npm packages you deem appropriate.
