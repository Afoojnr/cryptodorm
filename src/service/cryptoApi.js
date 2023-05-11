import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoAPiHeaders = {
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  "X-RapidAPI-Key": "0452ff9dfdmsh47bc902c40e9fc4p1e78bdjsna9271aba74d2",
};

const params = {
  referenceCurrencyUuid: "yhjMzLPhuIDl",
  timePeriod: "24h",
  "tiers[0]": "1",
  orderBy: "marketCap",
  orderDirection: "desc",
  limit: "50",
  offset: "0",
};
const baseUrl = "https://coinranking1.p.rapidapi.com";
const createRequest = (url) => ({
  url,
  headers: cryptoAPiHeaders,
  //   params: params,
});

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) =>
        createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
