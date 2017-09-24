import axios from "axios";
import _ from "lodash";

const url = "./data/GermanElections.json";

var sortData = response => {
  return {
  title: response.data.title,
  elections: response.data.elections
};};

export default {
  get: axios.get(url).then(sortData).catch(error => console.error(error))
};