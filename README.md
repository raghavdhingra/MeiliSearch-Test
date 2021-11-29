# Test MeiliSearch

### How to operate

1. Initialise the local MeiliSearch server:

```
npm start
```

###### The MeiliSearch server will be initialised at host: 127.0.0.1 on port 7700 (http://127.0.0.1:7700). A folder will be created on the base route with name "meili_database", this will be the default database directory from where the API will fetch the data, Thanks to MeiliSearch in-built API server. Alongwith, an API key will be set to access the MeiliSearch API. Check package.json for API key.

2. Import the json data from data-API to meiliSearch server in order to create a local instance of indexed-database entries. For this, start a new terminal without killing the previous one, and enter:

```
npm init_database
```

3. Change the directory to the react-webapp folder and install node dependencies by:

```
cd react-webapp

yarn
```

##### If yarn is not added, then run:

```
npm install --global yarn
```

4. Run the frontend server on a new terminal, by:

```
cd react-webapp

npm start
```

#### API Data Repository
I took the raw data url from self-made Json data stored on GitHub pages.

```
https://raw.githubusercontent.com/raghavdhingra/ItemApi/main/item.json
```

Link to Repository: https://github.com/raghavdhingra/ItemApi

### Screenshot of the working application

It's a responsive application to test MeiliSearch database and API along with some in-built functions.

<img width="1440" alt="Screenshot 2021-11-29 at 11 09 52 PM" src="https://user-images.githubusercontent.com/24492201/143916583-de73e3ff-8ecc-4444-8669-6981b43d589b.png">
<img width="1440" alt="Screenshot 2021-11-29 at 11 12 35 PM" src="https://user-images.githubusercontent.com/24492201/143917232-8633f86e-33bc-4a88-8743-61ea07577878.png">
<img width="1440" alt="Screenshot 2021-11-29 at 11 14 22 PM" src="https://user-images.githubusercontent.com/24492201/143917258-ddfb3558-f552-40ee-95d0-ccc42f283835.png">

##### If location filter is selected, it will ask for current location, below the screen the longitude and latitude will be visible. If no radius value is given, then it will sort all value, else it will consider the radius, and filter the list based on given radius in meters.

<img width="1440" alt="Screenshot 2021-11-29 at 11 25 19 PM" src="https://user-images.githubusercontent.com/24492201/143918987-f1d85fbc-a107-40ec-b445-b23516775ef4.png">
<img width="1440" alt="Screenshot 2021-11-29 at 11 25 36 PM" src="https://user-images.githubusercontent.com/24492201/143919025-c7c7a392-1894-4964-93ed-1789593c8940.png">

<img width="371" alt="Screenshot 2021-11-29 at 11 10 04 PM" src="https://user-images.githubusercontent.com/24492201/143916626-00878c52-0647-4628-844f-2dde2658861e.png">
<img width="363" alt="Screenshot 2021-11-29 at 11 10 18 PM" src="https://user-images.githubusercontent.com/24492201/143916634-c457ff4a-012d-4011-bd5c-7434be1dc2e1.png">


### References

https://docs.meilisearch.com/learn/getting_started/installation.html#download-and-launch

https://blog.meilisearch.com

https://docs.meilisearch.com/reference/features/

https://docs.meilisearch.com/reference/api/

https://docs.meilisearch.com/create/how_to/
