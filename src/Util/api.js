import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import {config} from "./config";

const api = axios.create(config);

export default api;
