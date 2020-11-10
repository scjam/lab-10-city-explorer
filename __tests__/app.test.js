require('dotenv').config();

const { mungeLocation, mungeWeather, mungeHiking, mungeYelp } = require('../lib/utils.js');
const weatherData = require('../data/weather.json');
const hikingData = require('../data/hiking.json');
const yelpData = require('../data/yelp.json');

describe('app routes', () => {
  describe('routes', () => {

    test('returns location', () => {

      const longLocation = [{
        'place_id': '282983083',
        'licence': 'https://locationiq.com/attribution',
        'osm_type': 'relation',
        'osm_id': '186579',
        'boundingbox': [
          '45.432536',
          '45.6528812',
          '-122.8367489',
          '-122.4720252'
        ],
        'lat': '45.5202471',
        'lon': '-122.6741949',
        'display_name': 'Portland, Multnomah County, Oregon, USA',
        'class': 'place',
        'type': 'city',
        'importance': 0.75356571743377,
        'icon': 'https://locationiq.org/static/images/mapicons/poi_place_city.p.20.png'
      }];

      const expectation = 
      {
        formatted_query: 'Portland, Multnomah County, Oregon, USA',
        latitude: '45.5202471',
        longitude: '-122.6741949'
      };

      const result = mungeLocation(longLocation);
      expect(result).toEqual(expectation);
    });

    test('test mungeWeather', () => {
      
      const expectation = [
        {
          'forecast': 'Scattered clouds',
          'time': '2020-11-11',
        },
        {
          'forecast': 'Clear Sky',
          'time': '2020-11-12',
        },
        {
          'forecast': 'Scattered clouds',
          'time': '2020-11-13',
        },
        {
          'forecast': 'Clear Sky',
          'time': '2020-11-14',
        },
        {
          'forecast': 'Scattered clouds',
          'time': '2020-11-15',
        },
        {
          'forecast': 'Overcast clouds',
          'time': '2020-11-16',
        },
        {
          'forecast': 'Broken clouds',
          'time': '2020-11-17',
        },
        {
          'forecast': 'Broken clouds',
          'time': '2020-11-18',
        },
      ];

      const result = mungeWeather(weatherData);

      expect(result).toEqual(expectation);
    });

    test('test mungeHiking', () => {
      
      const expectation = [
        { 
          'condition_date': '1970-01-01',
          'condition_time': '00:00:00',
          'conditions': null,
          'length': 46.5,
          'location': 'Tanabe, Japan',
          'name': 'Nakahechi Imperial Route',
          'star_votes': 2,
          'stars': 5,
          'summary': 'This is part of the Kumano Kodo-a 1000 year old pilgrimage route formerly used by emperors and nobles.',
          'trail_url': 'https://www.hikingproject.com/trail/7093516/nakahechi-imperial-route',
        },
        {
          'condition_date': '1970-01-01',
          'condition_time': '00:00:00',
          'conditions': null,
          'length': 4.4,
          'location': 'Toyoshina, Japan',
          'name': 'Kamikochi Trail',
          'star_votes': 1,
          'stars': 5,
          'summary': 'This short hike leads through the Japanese Alps to plenty of views and rich history.',
          'trail_url': 'https://www.hikingproject.com/trail/7033573/kamikochi-trail',
        },
        {
          'condition_date': '1970-01-01',
          'condition_time': '00:00:00',
          'conditions': null,
          'length': 9.1,
          'location': 'Shingū, Japan',
          'name': 'Nakahechi Imperial Route - Koguchi to Nachi Taisha',
          'star_votes': 1,
          'stars': 5,
          'summary': 'Needs Summary',
          'trail_url': 'https://www.hikingproject.com/trail/7093375/nakahechi-imperial-route-koguchi-to-nachi-taisha',
        },
        {
          'condition_date': '1970-01-01',
          'condition_time': '00:00:00',
          'conditions': null,
          'length': 10.5,
          'location': 'Tanabe, Japan',
          'name': 'Nakahechi Imperial Route Section 1: Takijiri-oji to Chikatsuyu-oji',
          'star_votes': 1,
          'stars': 5,
          'summary': 'The rolling first section of the Nakahechi Imperial Route.',
          'trail_url': 'https://www.hikingproject.com/trail/7093382/nakahechi-imperial-route-section-1-takijiri-oji-to-chikatsuyu-oji',
        },
        {
          'condition_date': '1970-01-01',
          'condition_time': '00:00:00',
          'conditions': null,
          'length': 15.2,
          'location': 'Tanabe, Japan',
          'name': 'Nakahechi Imperial Route - Chikatsuyu to Hongū',
          'star_votes': 1,
          'stars': 5,
          'summary': 'The longest section of the Nakahechi Imperial Route.',
          'trail_url': 'https://www.hikingproject.com/trail/7093411/nakahechi-imperial-route-chikatsuyu-to-hongu',
        },
        {
          'condition_date': '1970-01-01',
          'condition_time': '00:00:00',
          'conditions': null,
          'length': 8,
          'location': 'Shingū, Japan',
          'name': 'Nakahechi Imperial Route - Ukegawa to Koguchi',
          'star_votes': 1,
          'stars': 5,
          'summary': 'A short but powerful section of the trail.',
          'trail_url': 'https://www.hikingproject.com/trail/7093376/nakahechi-imperial-route-ukegawa-to-koguchi',
        },
        {
          'condition_date': '1970-01-01',
          'condition_time': '00:00:00',
          'conditions': null,
          'length': 1.5,
          'location': 'Mino, Japan',
          'name': 'Minoo Waterfall',
          'star_votes': 2,
          'stars': 4,
          'summary': 'Easy paved trail to a beautiful waterfall with fall colors, historic buildings, and monkeys.',
          'trail_url': 'https://www.hikingproject.com/trail/7091135/minoo-waterfall',
        },
        {
          'condition_date': '1970-01-01',
          'condition_time': '00:00:00',
          'conditions': null,
          'length': 0.8,
          'location': 'Mino, Japan',
          'name': 'Death Canyon',
          'star_votes': 1,
          'stars': 3,
          'summary': 'A pleasant trail in Minoo Park with some valley and river views. Not as intimidating as the name suggests.',
          'trail_url': 'https://www.hikingproject.com/trail/7091367/death-canyon',
        }
      ];

      const result = mungeHiking(hikingData);

      expect(result).toEqual(expectation);
    });

    test.only('test mungeYelp', () => {
      
      const expectation = [
        
      ];

      const result = mungeYelp(yelpData);

      expect(result).toEqual(expectation);
    });
  });
});
