const reviews = [
  {
    id: 1,
    user: {
      id: 6,
      isPro: true,
      name: `Carlo`,
      avatarUrl: `https://i.pravatar.cc/${Math.floor(Math.random() * 100)}`
    },
    rating: 5,
    comment: `Cannot fault the hotel for cleanliness and friendliness of staff, who attended to anything we asked. The hotel facilities were great and the breakfast was really good value and lots of choice.`,
    date: `2020-11-27T09:09:35.123Z`
  },
  {
    id: 2,
    user: {
      id: 11,
      isPro: true,
      name: `Liz`,
      avatarUrl: `https://i.pravatar.cc/${Math.floor(Math.random() * 100)}`
    },
    rating: 3,
    comment: `Excellent location, just across the river from the Louvre and couple of minutes away from dozens of cafes and restaurants.`,
    date: `2021-02-23T11:17:25.810Z`
  },
  {
    id: 3,
    user: {
      id: 13,
      isPro: false,
      name: `Christopher`,
      avatarUrl: `https://i.pravatar.cc/${Math.floor(Math.random() * 100)}`
    },
    rating: 4,
    comment: `Lovely bright space and comfortable beds. We had two apartments, one at the front and one at the back. The apartment at the back was lovely and roomy, the one at the front pretty cramped, but good value for money.`,
    date: `2021-01-03T15:40:14.010Z`
  }
];

export default reviews;
