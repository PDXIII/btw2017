import axios from "axios";
import _ from "lodash";

const url = "./data/GermanElections.json";

var sortData = response => {
  return {
  title: response.data.title,
  elections: response.data.elections,
  parties: response.data.parties
};};

export default {
  get: axios.get(url).then(sortData).catch(error => console.error(error))
};