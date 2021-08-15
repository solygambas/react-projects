// add this to your package.json :
// "jest": {
//     "collectCoverageFrom": [
//       "src/**/*.{js,jsx,ts,tsx}"
//     ],
//     "resetMocks": false
//   }

const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "Brad",
          last: "Cooper",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/39.jpg",
        },
        login: {
          username: "brad",
        },
      },
    ],
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
