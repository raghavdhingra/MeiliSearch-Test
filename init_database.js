/*
  Reference,
  https://www.npmjs.com/package/meilisearch
*/

const { MeiliSearch } = require("meilisearch");
const axios = require("axios");

const meiliSearchHost = "http://127.0.0.1:7700";
const meiliAPIKey = "a2efjndskfkdsj";
const IndexName = "product";
const productListApiEndpoint =
  "https://raw.githubusercontent.com/raghavdhingra/ItemApi/main/item.json";
const newSettings = {
  rankingRules: [
    "typo",
    "words",
    "proximity",
    "attribute",
    "wordsPosition",
    "exactness",
  ],
};

const init_database_entry = async () => {
  try {
    const config = {
      host: meiliSearchHost,
      apiKey: meiliAPIKey,
    };

    const meili = new MeiliSearch(config);

    const meiliHealthState = await meili.isHealthy();
    if (meiliHealthState) {
      console.log("MeiliSearch Server is Healthy");
    } else {
      console.log(
        "There's some problem with the server. Please restart the server and try again."
      );
      return;
    }

    const indexList = await meili.getIndexes(IndexName);
    const filteredIndexList = indexList.filter(
      (index) => index.uid === IndexName
    );

    if (filteredIndexList && filteredIndexList.length === 0) {
      await meili.createIndex(IndexName);
    }

    const {
      data: { product },
    } = await axios.get(productListApiEndpoint);

    const index = meili.index(IndexName);

    await index.addDocuments(product);
    await index.updateSettings(newSettings);
    console.log("Products added to the MeiliSearch Database");
  } catch (e) {
    console.error(e);
    console.log("Meili error: ", e.message);
  }
};

init_database_entry();
