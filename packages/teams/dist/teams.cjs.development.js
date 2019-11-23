'use strict';

var teams = [{
  id: 1,
  name: 'New Jersey Devils',
  abbreviation: 'NJD',
  nicknames: ['Devs'],
  colors: ['#F47A38', '#B9975C', '#C1C6C8', '#000'],
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/New_Jersey_Devils_logo.svg/594px-New_Jersey_Devils_logo.svg.png',
  goalHorn: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/horns/njd.m4a',
  goalHornSong: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/songs/njd.mp3',
  isActive: true
}, {
  id: 2,
  name: 'New York Islanders',
  abbreviation: 'NYI',
  nicknames: ['Isles', 'Fishsticks', 'Fish Sticks'],
  colors: ['#00539B', '#F47D30'],
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/42/Logo_New_York_Islanders.svg/440px-Logo_New_York_Islanders.svg.png',
  goalHorn: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/horns/nyi.m4a',
  goalHornSong: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/songs/nyi.mp3',
  isActive: true
}, {
  id: 3,
  name: 'New York Rangers',
  abbreviation: 'NYR',
  nicknames: ['Blueshirts', 'Rags'],
  colors: ['#0038A8', '#C31126', '#FFF'],
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/New_York_Rangers.svg/440px-New_York_Rangers.svg.png',
  goalHorn: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/horns/nyr.m4a',
  goalHornSong: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/songs/nyr.mp3',
  isActive: true
}, {
  id: 4,
  name: 'Philadelphia Flyers',
  abbreviation: 'PHI',
  nicknames: ['Broad St. Bullies'],
  colors: ['#F74902', '#000', '#FFF'],
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Philadelphia_Flyers.svg/440px-Philadelphia_Flyers.svg.png',
  goalHorn: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/horns/phi.m4a',
  goalHornSong: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/songs/phi.mp3',
  isActive: true
}, {
  id: 5,
  name: 'Pittsburgh Penguins',
  abbreviation: 'PIT',
  nicknames: ['Shittsburgh', 'Pens'],
  colors: ['#000', '#CFC493', '#FCB514', '#FFF'],
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/Pittsburgh_Penguins_logo_%282016%29.svg/440px-Pittsburgh_Penguins_logo_%282016%29.svg.png',
  goalHorn: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/horns/pit.m4a',
  goalHornSong: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/songs/pit.mp3',
  isActive: true
}, {
  id: 6,
  name: 'Boston Bruins',
  abbreviation: 'BOS',
  nicknames: ["B's", 'Big Bad Bruins', 'Black and Gold'],
  colors: ['#000', '#FFB81C'],
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Boston_Bruins.svg/440px-Boston_Bruins.svg.png',
  goalHorn: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/horns/bos.m4a',
  goalHornSong: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/songs/bos.mp3',
  isActive: true
}, {
  id: 7,
  name: 'Buffalo Sabres',
  abbreviation: 'BUF',
  nicknames: ['Swords', 'Slugs'],
  colors: ['#002654', '#FCB514', '#ADAFAA', '#C8102E'],
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Buffalo_Sabres_Logo.svg/440px-Buffalo_Sabres_Logo.svg.png',
  goalHorn: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/horns/buf.m4a',
  goalHornSong: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/songs/buf.mp3',
  isActive: true
}, {
  id: 8,
  name: 'Montreal Canadiens',
  abbreviation: 'MTL',
  nicknames: ['Habs', 'Les Habitants', 'Le bleu-blanc-et-rouge', 'Toilet Bowls'],
  colors: ['#AF1E2D', '#192168'],
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Montreal_Canadiens.svg/440px-Montreal_Canadiens.svg.png',
  goalHorn: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/horns/mtl.m4a',
  goalHornSong: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/songs/mtl.mp3',
  isActive: true
}, {
  id: 9,
  name: 'Ottawa Senators',
  abbreviation: 'OTT',
  nicknames: ['Sens'],
  colors: ['#C52032', '#C2912C', '#000', '#FFF'],
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Ottawa_Senators.svg/440px-Ottawa_Senators.svg.png',
  goalHorn: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/horns/ott.m4a',
  goalHornSong: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/songs/ott.mp3',
  isActive: true
}, {
  id: 10,
  name: 'Toronto Maple Leafs',
  abbreviation: 'TOR',
  nicknames: ['Leafs', 'Cry Babies'],
  colors: ['#00205B', '#FFF'],
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Toronto_Maple_Leafs_2016_logo.svg/440px-Toronto_Maple_Leafs_2016_logo.svg.png',
  goalHorn: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/horns/tor.m4a',
  goalHornSong: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/songs/tor.mp3',
  isActive: true
}, {
  id: 11,
  name: 'Atlanta Thrashers',
  abbreviation: 'ATL',
  nicknames: ['Thrash'],
  colors: ['#041E42', '#5C88DA', '#862633', '#B76125', '#FFA300', '#FFF'],
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Atlanta_Thrashers.svg/440px-Atlanta_Thrashers.svg.png',
  goalHorn: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/horns/ana.m4a',
  goalHornSong: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/songs/ana.m4a',
  isActive: false
}, {
  id: 12,
  name: 'Carolina Hurricanes',
  abbreviation: 'CAR',
  nicknames: ['Canes', 'Jerks', 'Bunch of Jerks'],
  colors: ['#CC0000', '#000', '#A2AAAD', '#76232F'],
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Carolina_Hurricanes.svg/440px-Carolina_Hurricanes.svg.png',
  goalHorn: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/horns/car.m4a',
  goalHornSong: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/songs/car.mp3',
  isActive: true
}, {
  id: 13,
  name: 'Florida Panthers',
  abbreviation: 'FLA',
  nicknames: ['Cats'],
  colors: ['#041E42', '#C8102E', '#B9975B'],
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/43/Florida_Panthers_2016_logo.svg/440px-Florida_Panthers_2016_logo.svg.png',
  goalHorn: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/horns/fla.m4a',
  goalHornSong: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/songs/fla.mp3',
  isActive: true
}, {
  id: 14,
  name: 'Tampa Bay Lightning',
  abbreviation: 'TBL',
  nicknames: ['Bolts'],
  colors: ['#002868', '#FFF'],
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Tampa_Bay_Lightning_Logo_2011.svg/440px-Tampa_Bay_Lightning_Logo_2011.svg.png',
  goalHorn: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/horns/tbl.m4a',
  goalHornSong: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/songs/tbl.mp3',
  isActive: true
}, {
  id: 15,
  name: 'Washington Capitals',
  abbreviation: 'WSH',
  nicknames: ['Caps', 'Second Round Exit'],
  colors: ['#041E42', '#C8102E', '#FFF'],
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Washington_Capitals.svg/440px-Washington_Capitals.svg.png',
  goalHorn: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/horns/wsh.m4a',
  goalHornSong: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/songs/wsh.mp3',
  isActive: true
}, {
  id: 16,
  name: 'Chicago Blackhawks',
  abbreviation: 'CHI',
  nicknames: ['Hawks'],
  colors: ['#CF0A2C', '#000', '#FF671B', '#00833E', '#FFD100', '#D18A00', '#001970', '#FFF'],
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Chicago_Blackhawks_logo.svg/440px-Chicago_Blackhawks_logo.svg.png',
  goalHorn: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/horns/chi.m4a',
  goalHornSong: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/songs/chi.mp3',
  isActive: true
}, {
  id: 17,
  name: 'Detroit Red Wings',
  abbreviation: 'DET',
  nicknames: ['Dead Wings', 'Wings'],
  colors: ['#CE1126', '#FFF'],
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Detroit_Red_Wings_logo.svg/440px-Detroit_Red_Wings_logo.svg.png',
  goalHorn: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/horns/det.m4a',
  goalHornSong: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/songs/det.mp3',
  isActive: true
}, {
  id: 18,
  name: 'Nashville Predators',
  abbreviation: 'NSH',
  nicknames: ['Preds', 'Smashville'],
  colors: ['#FFB81C', '#041E42', '#FFF'],
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Nashville_Predators_Logo_%282011%29.svg/440px-Nashville_Predators_Logo_%282011%29.svg.png',
  goalHorn: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/horns/nsh.m4a',
  goalHornSong: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/songs/nsh.mp3',
  isActive: true
}, {
  id: 19,
  name: 'St. Louis Blues',
  abbreviation: 'STL',
  nicknames: ['Notes'],
  colors: ['#002F87', '#FCB514', '#041E42', '#FFF'],
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/St._Louis_Blues_logo.svg/440px-St._Louis_Blues_logo.svg.png',
  goalHorn: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/horns/stl.m4a',
  goalHornSong: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/songs/stl.mp3',
  isActive: true
}, {
  id: 20,
  name: 'Calgary Flames',
  abbreviation: 'CGY',
  nicknames: ['Flaming Snot Donkeys', "Flaming C's"],
  colors: ['#C8102E', '#F1BE48', '#111', '#FFF'],
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Calgary_Flames_Logo.svg/440px-Calgary_Flames_Logo.svg.png',
  goalHorn: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/horns/cgy.m4a',
  goalHornSong: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/songs/cgy.mp3',
  isActive: true
}, {
  id: 21,
  name: 'Colorado Avalanche',
  abbreviation: 'COL',
  nicknames: ['Avs'],
  colors: ['#6F263D', '#236192', '#A2AAAD', '#000'],
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Colorado_Avalanche_logo.svg/440px-Colorado_Avalanche_logo.svg.png',
  goalHorn: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/horns/col.m4a',
  goalHornSong: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/songs/col.mp3',
  isActive: true
}, {
  id: 22,
  name: 'Edmonton Oilers',
  abbreviation: 'EDM',
  nicknames: ['Spoilers'],
  colors: ['#041E42', '#FF4C00'],
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Logo_Edmonton_Oilers.svg/440px-Logo_Edmonton_Oilers.svg.png',
  goalHorn: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/horns/edm.m4a',
  goalHornSong: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/songs/edm.mp3',
  isActive: true
}, {
  id: 23,
  name: 'Vancouver Canucks',
  abbreviation: 'VAN',
  nicknames: ['Nucks', 'Canuckleheads'],
  colors: ['#00205B', '#00843D', '#041C2C', '#99999A', '#FFF'],
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Vancouver_Canucks_logo.svg/440px-Vancouver_Canucks_logo.svg.png',
  goalHorn: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/horns/van.m4a',
  goalHornSong: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/songs/van.mp3',
  isActive: true
}, {
  id: 24,
  name: 'Anaheim Ducks',
  abbreviation: 'ANA',
  nicknames: ['Mighty Ducks'],
  colors: ['#F47A38', '#B9975B', '#C1C6C8', '#000', '#00685E', '#532A44', '#FCC72C', '#241E34'],
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/72/Anaheim_Ducks.svg/440px-Anaheim_Ducks.svg.png',
  goalHorn: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/horns/ana.m4a',
  goalHornSong: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/songs/ana.mp3',
  isActive: true
}, {
  id: 25,
  name: 'Dallas Stars',
  abbreviation: 'DAL',
  nicknames: ['Sheriffs'],
  colors: ['#006847', '#8F8F8C', '#111'],
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Dallas_Stars_logo_%282013%29.svg/440px-Dallas_Stars_logo_%282013%29.svg.png',
  goalHorn: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/horns/dal.m4a',
  goalHornSong: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/songs/dal.mp3',
  isActive: true
}, {
  id: 26,
  name: 'Los Angeles Kings',
  abbreviation: 'LAK',
  nicknames: ['Monarchs'],
  colors: ['#111', '#A2AAAD', '#FFF', '#572A84', '#FFC80C'],
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/63/Los_Angeles_Kings_logo.svg/440px-Los_Angeles_Kings_logo.svg.png',
  goalHorn: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/horns/lak.m4a',
  goalHornSong: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/songs/lak.mp3',
  isActive: true
}, {
  id: 53,
  name: 'Arizona Coyotes',
  abbreviation: 'ARI',
  nicknames: ['Yotes'],
  colors: ['#8C2633', '#E2D6B5', '#000', '#154734', '#DDCBA4', '#A9431E', '#5F259F'],
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/27/Arizona_Coyotes.svg/440px-Arizona_Coyotes.svg.png',
  goalHorn: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/horns/ari.m4a',
  goalHornSong: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/songs/ari.mp3',
  isActive: true
}, {
  id: 28,
  name: 'San Jose Sharks',
  abbreviation: 'SJS',
  nicknames: ['Fins', 'Tuna', 'Team Teal'],
  colors: ['#006D75', '#000', '#EA7200', '#FFF'],
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/37/SanJoseSharksLogo.svg/440px-SanJoseSharksLogo.svg.png',
  goalHorn: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/horns/sjs.m4a',
  goalHornSong: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/songs/sjs.mp3',
  isActive: true
}, {
  id: 29,
  name: 'Columbus Blue Jackets',
  abbreviation: 'CBJ',
  nicknames: ['Jackets', 'Cannons'],
  colors: ['#002654', '#CE1126', '#A4A9AD'],
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Columbus_Blue_Jackets_logo.svg/440px-Columbus_Blue_Jackets_logo.svg.png',
  goalHorn: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/horns/cbj.m4a',
  goalHornSong: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/songs/cbj.mp3',
  isActive: true
}, {
  id: 30,
  name: 'Minnesota Wild',
  abbreviation: 'MIN',
  nicknames: ['Minny', 'Mild', 'ManBearPigs'],
  colors: ['#A6192E', '#154734', '#EAAA00', '#DDCBA4'],
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Minnesota_Wild.svg/440px-Minnesota_Wild.svg.png',
  goalHorn: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/horns/min.m4a',
  goalHornSong: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/songs/min.mp3',
  isActive: true
}, {
  id: 54,
  name: 'Vegas Golden Knights',
  abbreviation: 'VGK',
  nicknames: ['Golden Misfits', 'Knights'],
  colors: ['#B4975A', '#333F42', '#C8102E', '#000', '#FFF'],
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/Vegas_Golden_Knights_logo.svg/440px-Vegas_Golden_Knights_logo.svg.png',
  goalHorn: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/horns/vgk.m4a',
  goalHornSong: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/songs/vgk.mp3',
  isActive: true
}, {
  id: 52,
  name: 'Winnipeg Jets',
  abbreviation: 'WPG',
  nicknames: ['Airforce'],
  colors: ['#041E42', '#004C97', '#AC162C', '#7B303E', '#55565A', '#8E9090', '#FFF'],
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Winnipeg_Jets_Logo_2011.svg/440px-Winnipeg_Jets_Logo_2011.svg.png',
  goalHorn: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/horns/wpg.m4a',
  goalHornSong: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/songs/wpg.mp3',
  isActive: true
}, {
  id: 38,
  name: 'Pittsburgh Pirates',
  abbreviation: 'PIR',
  nicknames: [],
  colors: ['#000', '#FCB932', '#FFF', '#F87A36'],
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/85/Pittsburgh_Pirates_Logo.svg/440px-Pittsburgh_Pirates_Logo.svg.png',
  goalHorn: '',
  goalHornSong: '',
  isActive: false
}, {
  id: 58,
  name: 'Toronto St. Patricks',
  abbreviation: 'TSP',
  nicknames: [],
  colors: ['#046A38', '#FFF'],
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/68/Toronto_St._Patricks_logo.svg/440px-Toronto_St._Patricks_logo.svg.png',
  goalHorn: '',
  goalHornSong: '',
  isActive: false
}, {
  id: 49,
  name: 'Cleveland Barons',
  abbreviation: 'CLE',
  nicknames: [],
  colors: ['#C8102E', '#000', '#FFF'],
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Cleveland_Barons_%28NHL%29_logo.svg/440px-Cleveland_Barons_%28NHL%29_logo.svg.png',
  goalHorn: '',
  goalHornSong: '',
  isActive: false
}, {
  id: 46,
  name: 'Oakland Seals',
  abbreviation: 'OAK',
  nicknames: [],
  colors: ['#046A38', '#0033A0', '#FFF', '#FFC72C', '#009CA6'],
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/17/California_Golden_Seals_Logo.svg/440px-California_Golden_Seals_Logo.svg.png',
  goalHorn: '',
  goalHornSong: '',
  isActive: false
}, {
  id: 44,
  name: 'New York Americans',
  abbreviation: 'NYA',
  nicknames: [],
  colors: ['#0038A8', '#C31126', '#FFF'],
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/da/New_York_Americans_Logo.svg/440px-New_York_Americans_Logo.svg.png',
  goalHorn: '',
  goalHornSong: '',
  isActive: false
}, {
  id: 56,
  name: 'California Golden Seals',
  abbreviation: 'CGS',
  nicknames: [],
  colors: ['#046A38', '#0033A0', '#FFF', '#FFC72C', '#009CA6'],
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/17/California_Golden_Seals_Logo.svg/440px-California_Golden_Seals_Logo.svg.png',
  goalHorn: '',
  goalHornSong: '',
  isActive: false
}, {
  id: 34,
  name: 'Hartford Whalers',
  abbreviation: 'HFD',
  nicknames: [],
  colors: ['#00B140', '#005EB8', '#00205B', '#046A38', '#FED000', '#8D9093', '#000', '#FFF'],
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Hartford_Whalers_Logo-79-92.svg/440px-Hartford_Whalers_Logo-79-92.svg.png',
  goalHorn: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/horns/hfd.m4a',
  goalHornSong: 'https://github.com/gretzky/nhl-api/blob/master/packages/teams/src/assets/songs/hfd.m4a',
  isActive: false
}, {
  id: 47,
  name: 'Atlanta Flames',
  abbreviation: 'AFM',
  nicknames: [],
  colors: ['#C52032', '#C2912C', '#FFF'],
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Atlanta_Flames_Logo.svg/440px-Atlanta_Flames_Logo.svg.png',
  goalHorn: '',
  goalHornSong: '',
  isActive: false
}, {
  id: 31,
  name: 'Minnesota North Stars',
  abbreviation: 'MNS',
  nicknames: [],
  colors: ['#009639', '#FFD100', '#000', '#FFF'],
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Minnesota_North_Stars_Logo_2.svg/440px-Minnesota_North_Stars_Logo_2.svg.png',
  goalHorn: '',
  goalHornSong: '',
  isActive: false
}, {
  id: 32,
  name: 'Quebec Nordiques',
  abbreviation: 'QUE',
  nicknames: [],
  colors: ['#005EBB', '#DA291C', '#FFF'],
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/96/Quebec_Nordiques_Logo.svg/440px-Quebec_Nordiques_Logo.svg.png',
  goalHorn: '',
  goalHornSong: '',
  isActive: false
}, {
  id: 37,
  name: 'Hamilton Tigers',
  abbreviation: 'HAM',
  nicknames: [],
  colors: ['#000', '#FFC727', '#FFF'],
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/15/Hamilton_Tigers_Logo.svg/440px-Hamilton_Tigers_Logo.svg.png',
  goalHorn: '',
  goalHornSong: '',
  isActive: false
}, {
  id: 41,
  name: 'Montreal Wanderers',
  abbreviation: 'MWN',
  nicknames: [],
  colors: ['#FFF', '#E4002B'],
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Montreal_Wanderers_logo.svg/440px-Montreal_Wanderers_logo.svg.png',
  goalHorn: '',
  goalHornSong: '',
  isActive: false
}, {
  id: 42,
  name: 'Quebec Bulldogs',
  abbreviation: 'QBD',
  nicknames: [],
  colors: ['#3E5EFF', '#FFF'],
  logo: 'https://upload.wikimedia.org/wikipedia/commons/7/75/QuebecBulldogs.png',
  goalHorn: '',
  goalHornSong: '',
  isActive: false
}, {
  id: 57,
  name: 'Toronto Arenas',
  abbreviation: 'TAN',
  nicknames: [],
  colors: ['#003087'],
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Toronto_Arenas_Logo.svg/440px-Toronto_Arenas_Logo.svg.png',
  goalHorn: '',
  goalHornSong: '',
  isActive: false
}, {
  id: 39,
  name: 'Philadelphia Quakers',
  abbreviation: 'QUA',
  nicknames: [],
  colors: ['#000', '#F87A36', '#FFF'],
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Logo_Philadelphia_Quakers.svg/440px-Logo_Philadelphia_Quakers.svg.png',
  goalHorn: '',
  goalHornSong: '',
  isActive: false
}, {
  id: 48,
  name: 'Kansas City Scouts',
  abbreviation: 'KCS',
  nicknames: [],
  colors: ['#003087', '#C8102e', '#FFC72C', '#FFF'],
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Kansas_City_Scouts_logo.svg/440px-Kansas_City_Scouts_logo.svg.png',
  goalHorn: '',
  goalHornSong: '',
  isActive: false
}, {
  id: 45,
  name: 'St. Louis Eagles',
  abbreviation: 'SLE',
  nicknames: [],
  colors: ['#C60C30', '#FFF'],
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/St._Louis_Eagles_logo.svg/440px-St._Louis_Eagles_logo.svg.png',
  goalHorn: '',
  goalHornSong: '',
  isActive: false
}, {
  id: 43,
  name: 'Montreal Maroons',
  abbreviation: 'MMR',
  nicknames: [],
  colors: ['#FFF', '#6F263D'],
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Montreal_Maroons_Logo.svg/440px-Montreal_Maroons_Logo.svg.png',
  goalHorn: '',
  goalHornSong: '',
  isActive: false
}];

// adding `toUpperCase` makes the search case insensitive

var getTeamId = function getTeamId(name) {
  var t = teams.filter(function (team) {
    return team.name.toUpperCase().includes(name.toUpperCase()) || // we don't explicitly match the nickname here because most team nicknames don't overlap and this allows for some wiggle room
    team.nicknames.some(function (nickname) {
      return nickname.toUpperCase().includes(name.toUpperCase());
    });
  });
  return t.length > 1 ? t : t[0].id;
};

exports.default = teams;
exports.getTeamId = getTeamId;
//# sourceMappingURL=teams.cjs.development.js.map