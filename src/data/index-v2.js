/* eslint-disable */
/*
{
                "leaderBoard" : [
                                {
                                                "teamName":"team1",
                                                "teamImageUrl":"http://.........",
                                                "teamId" : 1,
                                                "smileyUrl":"http://........."
                                                "totalScore": 20,
                                                "scores" : [
                                                                {
                                                                                "eventId":1,
                                                                                "score":9,
                                                                                "order":1
                                                                },
                                                                {
                                                                                "eventId":2,
                                                                                "score":null, <- default ->
                                                                                "order":100 <- default ->
                                                                } // it will have all the events’ scores
                                                ]
                                },
                                {
                                                "teamName":"team2",
                                                "teamImageUrl":"http://.........",
                                                "teamId" : 2,
                                                "smileyUrl":"http://........."
                                                "totalScore": 15,
                                                "scores" : [
                                                                {
                                                                                "eventId":1,
                                                                                "score":10,
                                                                                "order":2
                                                                },
                                                                {
                                                                                "eventId":2,
                                                                                "score":null, <- default ->
                                                                                "order":100 <- default ->
                                                                } // it will have all the events’ scores
                                                ]
                                }
                ]

}


*/

export const LeaderboardDetails = [
  {
    teamId: 12,
    teamName: 'Falcons',
    smileyType: 1,
    totalScore: 129,
    scores: [
      {
      },
      15,
      11,
      null,
      null,
      null,
      null,
    ],
    icons: {
      'sad': 'https:/url1',
      'happy': 'https:/url1',
      '1': 'https:/url2',
    },
  },
  {
    'teamId': 1,
    'smileyType': 'sad ',
    'totalScore': 7,
    'scores': [
      {
        eventId: 1,
        score: 100,
      },
      {
        eventOrder: 1,
        eventId: 3,
        score: null,
      },
      {
        eventId: 2,
        score: 100,
      },
      {
        eventId: 3,
        score: 100,
      },
      {
        eventId: 4,
        score: 100,
      },
    ],
  },

  {
    teamName: 'Hawkings',
    smileyType: 2,
    totalScore: 118,
    scores: [
      11,
      12,
      19,
      null,
      null,
      null,
      null,
    ],
  },
  {
    teamName: 'Chargers',
    smileyType: 2,
    totalScore: 111,
    scores: [
      11,
      12,
      19,
      null,
      null,
      null,
      null,
    ],
  },
  {
    teamName: 'Raiders',
    smileyType: 2,
    totalScore: 110,
    scores: [
      11,
      12,
      19,
      null,
      null,
      null,
      null,
    ],
  },
  {
    teamName: 'Giants',
    smileyType: 2,
    totalScore: 108,
    scores: [
      11,
      12,
      19,
      null,
      null,
      null,
      null,
    ],
  },
  {
    teamName: 'Celtics',
    smileyType: 2,
    totalScore: 104,
    scores: [
      11,
      12,
      19,
      null,
      null,
      null,
      null,
    ],
  },
  {
    teamName: 'Broncos',
    smileyType: 2,
    totalScore: 102,
    scores: [
      11,
      12,
      19,
      null,
      null,
      null,
      null,
    ],
  },
  {
    teamName: 'Eagles',
    smileyType: 2,
    totalScore: 100,
    scores: [
      11,
      12,
      19,
      null,
      null,
      null,
      null,
    ],
  },
  {
    teamName: 'Mavericks',
    smileyType: 2,
    totalScore: 96,
    scores: [
      11,
      12,
      19,
      null,
      null,
      null,
      null,
    ],
  },
  // {
  //   teamName: 'SeaHawks',
  //   smileyType: 2,
  //   totalScore: 92,
  //   scores: [
  //     11,
  //     12,
  //     19,
  //     null,
  //     null,
  //     null,
  //     null,
  //   ],
  // },
]
