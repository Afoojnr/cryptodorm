import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const cryptoAPiHeaders = {
  "X-RapidAPI-Key": "0452ff9dfdmsh47bc902c40e9fc4p1e78bdjsna9271aba74d2",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com/coins";
const createRequest = (url) =>({url, headers: cryptoAPiHeaders})

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: builder => ({
        getCryptos: builder.query({
          query: ()=> createRequest('/exchanges')
      })
  })
});

// const options = {
//   method: "GET",
//   url: "https://coinranking1.p.rapidapi.com/coins",
//   params: {
//     referenceCurrencyUuid: "yhjMzLPhuIDl",
//     timePeriod: "24h",
//     "tiers[0]": "1",
//     orderBy: "marketCap",
//     orderDirection: "desc",
//     limit: "50",
//     offset: "0",
//   },
// };
