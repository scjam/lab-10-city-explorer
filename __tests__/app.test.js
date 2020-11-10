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
        {
          'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/YTLG-N1UC0vHS1YzS3vQxw/o.jpg',
          'name': 'Nadai Tonkatsu Katsukura Sanjō Honten',
          'price': '￥￥',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/%E5%90%8D%E4%BB%A3%E3%81%A8%E3%82%93%E3%81%8B%E3%81%A4-%E3%81%8B%E3%81%A4%E3%81%8F%E3%82%89-%E4%B8%89%E6%9D%A1%E6%9C%AC%E5%BA%97-%E4%BA%AC%E9%83%BD%E5%B8%82?adjust_creative=QZsM1JMhm4u_X176nAHxRQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=QZsM1JMhm4u_X176nAHxRQ',
        },
        {
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/J8bUwxbFJSjw6njjOoiMoA/o.jpg',
          'name': 'MENBAKAICHIDAI',
          'price': '￥',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/%E3%82%81%E3%82%93%E9%A6%AC%E9%B9%BF%E4%B8%80%E4%BB%A3-%E4%BA%AC%E9%83%BD%E5%B8%82?adjust_creative=QZsM1JMhm4u_X176nAHxRQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=QZsM1JMhm4u_X176nAHxRQ',
        },
        {
          'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/rJYhCshV2BdzgLgHw9O4Ww/o.jpg',
          'name': 'IPPUDO Nishiki Koji',
          'price': '￥',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/%E4%B8%80%E9%A2%A8%E5%A0%82-%E9%8C%A6%E5%B0%8F%E8%B7%AF%E5%BA%97-%E4%BA%AC%E9%83%BD%E5%B8%82?adjust_creative=QZsM1JMhm4u_X176nAHxRQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=QZsM1JMhm4u_X176nAHxRQ',
        },
        {
          'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/ZzvxvKrkH428SytU6X9O_A/o.jpg',
          'name': 'ICHIRAN Kyoto Kawaramachi',
          'price': '￥',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/%E4%B8%80%E8%98%AD-%E4%BA%AC%E9%83%BD%E6%B2%B3%E5%8E%9F%E7%94%BA%E5%BA%97-%E4%BA%AC%E9%83%BD%E5%B8%82-2?adjust_creative=QZsM1JMhm4u_X176nAHxRQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=QZsM1JMhm4u_X176nAHxRQ',
        },
        {
          'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/TxQkPzyCrmvpXRa6SZ0EUw/o.jpg',
          'name': 'Chaochao Sanjō Kiyamachi',
          'price': '￥',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/%E9%A4%83%E3%80%85-%E4%B8%89%E6%9D%A1%E6%9C%A8%E5%B1%8B%E7%94%BA%E5%BA%97-%E4%BA%AC%E9%83%BD%E5%B8%82?adjust_creative=QZsM1JMhm4u_X176nAHxRQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=QZsM1JMhm4u_X176nAHxRQ',
        },
        {
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/qgWqFZArc2h3PsEOuLpVdQ/o.jpg',
          'name': 'L\'escamoteur Bar',
          'price': '￥￥',
          'rating': 5,
          'url': 'https://www.yelp.com/biz/%E3%83%AC%E3%82%B9%E3%82%AB%E3%83%A2%E3%83%88%E3%82%A5%E3%83%BC%E3%83%AB-%E3%83%90%E3%83%BC-%E4%BA%AC%E9%83%BD%E5%B8%82?adjust_creative=QZsM1JMhm4u_X176nAHxRQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=QZsM1JMhm4u_X176nAHxRQ',
        },
        {
          'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/fIXdmsufCa4hBQRHn7D9UA/o.jpg',
          'name': 'Adachi',
          'price': '￥',
          'rating': 5,
          'url': 'https://www.yelp.com/biz/%E3%81%82%E3%81%A0%E3%81%A1-%E4%BA%AC%E9%83%BD%E5%B8%82?adjust_creative=QZsM1JMhm4u_X176nAHxRQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=QZsM1JMhm4u_X176nAHxRQ',
        },
        {
          'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/oZ39SqxSI7CKAJwZm8reYg/o.jpg',
          'name': 'Hafuu Honten',
          'price': '￥￥￥￥',
          'rating': 5,
          'url': 'https://www.yelp.com/biz/%E3%81%AF%E3%81%B5%E3%81%86-%E6%9C%AC%E5%BA%97-%E4%B8%AD%E4%BA%AC%E5%8C%BA?adjust_creative=QZsM1JMhm4u_X176nAHxRQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=QZsM1JMhm4u_X176nAHxRQ',
        },
        {
          'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/w2o7kflggM0mqvUyQrmGOA/o.jpg',
          'name': 'Nijo Castle',
          'price': undefined,
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/%E4%BA%8C%E6%9D%A1%E5%9F%8E-%E4%BA%AC%E9%83%BD%E5%B8%82-3?adjust_creative=QZsM1JMhm4u_X176nAHxRQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=QZsM1JMhm4u_X176nAHxRQ',
        },
        {
          'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/UkdGLCR9KUovlEb9I26CRA/o.jpg',
          'name': 'Wajōryōmen Sugari',
          'price': '￥',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/%E5%92%8C%E9%86%B8%E8%89%AF%E9%BA%BA-%E3%81%99%E3%81%8C%E3%82%8A-%E4%BA%AC%E9%83%BD%E5%B8%82?adjust_creative=QZsM1JMhm4u_X176nAHxRQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=QZsM1JMhm4u_X176nAHxRQ',
        },
        {
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/LrV7Fp89Z7PenW01P-_HJw/o.jpg',
          'name': 'Feel Kyo Good',
          'price': '￥￥',
          'rating': 5,
          'url': 'https://www.yelp.com/biz/feel-%E4%BA%AC-good-%E4%BA%AC%E9%83%BD%E5%B8%82-3?adjust_creative=QZsM1JMhm4u_X176nAHxRQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=QZsM1JMhm4u_X176nAHxRQ',
        },
        {
          'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/y69ovZS9dv6HfH9OdzqITg/o.jpg',
          'name': 'SPICE CHAMBER',
          'price': '￥',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/%E3%82%B9%E3%83%91%E3%82%A4%E3%82%B9%E3%83%81%E3%83%A3%E3%83%B3%E3%83%90%E3%83%BC-%E4%BA%AC%E9%83%BD%E5%B8%82?adjust_creative=QZsM1JMhm4u_X176nAHxRQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=QZsM1JMhm4u_X176nAHxRQ',
        },
        {
          'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/9XUGSloyBRZNZbHS0Q2aoA/o.jpg',
          'name': 'Ramen Sen no Kaze Kyoto',
          'price': '￥',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/%E3%82%89%E3%83%BC%E3%82%81%E3%82%93%E5%8D%83%E3%81%AE%E9%A2%A8%E4%BA%AC%E9%83%BD-%E4%BA%AC%E9%83%BD%E5%B8%82?adjust_creative=QZsM1JMhm4u_X176nAHxRQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=QZsM1JMhm4u_X176nAHxRQ',
        },
        {
          'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/gm7FgQqpPo7trXd-PhD4Gg/o.jpg',
          'name': 'Honke Owariya Honten',
          'price': '￥￥',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/%E6%9C%AC%E5%AE%B6%E5%B0%BE%E5%BC%B5%E5%B1%8B-%E6%9C%AC%E5%BA%97-%E4%BA%AC%E9%83%BD%E5%B8%82?adjust_creative=QZsM1JMhm4u_X176nAHxRQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=QZsM1JMhm4u_X176nAHxRQ',
        },
        {
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/_YRhQHvWMSWAwLrKb3-aXg/o.jpg',
          'name': 'Jiki Miyazawa',
          'price': '￥￥￥￥',
          'rating': 5,
          'url': 'https://www.yelp.com/biz/%E3%81%98%E3%81%8D-%E5%AE%AE%E3%81%96%E3%82%8F-%E4%BA%AC%E9%83%BD%E5%B8%82?adjust_creative=QZsM1JMhm4u_X176nAHxRQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=QZsM1JMhm4u_X176nAHxRQ',
        },
        {
          'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/Ch6OwbibV2PyGVwI1r9FKA/o.jpg',
          'name': 'GYOZA BAR ANZUKKO',
          'price': '￥￥',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/gyoza-bar-anzukko-%E4%BA%AC%E9%83%BD%E5%B8%82-2?adjust_creative=QZsM1JMhm4u_X176nAHxRQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=QZsM1JMhm4u_X176nAHxRQ',
        },
        {
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/SVVn8VhmhmEAfpAYpjKBpA/o.jpg',
          'name': 'Premium Wagyu Beef SHIBATA',
          'price': undefined,
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/premium-wagyu-beef-shibata-%E4%BA%AC%E9%83%BD%E5%B8%82?adjust_creative=QZsM1JMhm4u_X176nAHxRQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=QZsM1JMhm4u_X176nAHxRQ',
        },
        {
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/GcU4zCsUYlfUTxQBDTXt7w/o.jpg',
          'name': 'Ippodo Tea  Kyoto Honten',
          'price': '￥￥￥',
          'rating': 5,
          'url': 'https://www.yelp.com/biz/%E4%B8%80%E4%BF%9D%E5%A0%82%E8%8C%B6%E8%88%97-%E4%BA%AC%E9%83%BD%E6%9C%AC%E5%BA%97-%E4%BA%AC%E9%83%BD%E5%B8%82?adjust_creative=QZsM1JMhm4u_X176nAHxRQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=QZsM1JMhm4u_X176nAHxRQ',
        },
        {
          'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/hLCCAAzEAZ6U3zsZ-cU3OA/o.jpg',
          'name': 'Tiger Gyoza Hall - Shijo-Karasuma',
          'price': '￥',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/%E3%82%BF%E3%82%A4%E3%82%AC%E3%83%BC%E9%A4%83%E5%AD%90%E4%BC%9A%E9%A4%A8-%E5%9B%9B%E6%9D%A1%E7%83%8F%E4%B8%B8-%E4%BA%AC%E9%83%BD%E5%B8%82?adjust_creative=QZsM1JMhm4u_X176nAHxRQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=QZsM1JMhm4u_X176nAHxRQ',
        },
        {
          'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/5c7t0G6Cw2VqRdMnX0YGOQ/o.jpg',
          'name': 'Saryō Tsujiri Gion Honten',
          'price': '￥',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/%E8%8C%B6%E5%AF%AE-%E9%83%BD%E8%B7%AF%E9%87%8C-%E7%A5%87%E5%9C%92%E6%9C%AC%E5%BA%97-%E4%BA%AC%E9%83%BD%E5%B8%82-2?adjust_creative=QZsM1JMhm4u_X176nAHxRQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=QZsM1JMhm4u_X176nAHxRQ',
        },
      ];

      const result = mungeYelp(yelpData);

      expect(result).toEqual(expectation);
    });
  });
});
