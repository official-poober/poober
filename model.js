/**
 * model.js
 * Data representing restrooms in NYC parks
 * Data sourced from the NYC.gov website
 * @author Irene Alvarado
 */

/* ======= Model ======= */

var filters = [ "All", "Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island"] ;

var restrooms = [
   {
      "location": "Glenwood Road, East 100 & East 101 streets",
      "name": "100% Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.64659,
      "lng": -73.899055,
      "place_id": "ChIJNwvvtedcwokR-CqHxddTvE8"
   },
   {
      "location": "East 174 Street, Stratford Avenue, Bronx River Avenue",
      "name": "174th Street Playground",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.834343,
      "lng": -73.87774,
      "place_id": "ChIJ57ToBPL0wokRxzFXggPCB4s"
   },
   {
      "location": "East 135 Street, between Madison & 5 avenues",
      "name": "Abe Lincoln",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.812313,
      "lng": -73.93727,
      "place_id": "ChIJ6-JT5nX2wokRusw1c8WFxug"
   },
   {
      "location": "East 156 Street, Tinton Avenue",
      "name": "Abigail Playground",
      "borough": "Bronx",
      "open_year_round": "No",
      "lat": 40.81733,
      "lng": -73.90485,
      "place_id": "ChIJWSqXZbH1wokRaw3IAQd1Jj8"
   },
   {
      "location": "East 215 Street, Barnes Avenue, East 216 Street",
      "name": "Agnes Haywood Playground",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.880398,
      "lng": -73.86157,
      "place_id": "ChIJpW5RhT7zwokR3An-ITLc6S4"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Albermarle Road & Dahill Road",
      "name": "Albemarle Park",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.646652,
      "lng": -73.965454,
      "place_id": "ChIJxbshfDlbwokR22dAXr8_WnE"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Adelphi Street, Clermont, DeKalb & Willoughby avenues",
      "name": "Albert J. Parham Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.69023,
      "lng": -73.97106,
      "place_id": "ChIJs-2N3blbwokR3yds1DYFwiQ"
   },
   {
      "location": "Hamilton Place, West 140 to West 141 streets",
      "name": "Alexander Hamilton Playground",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.82303,
      "lng": -73.95132,
      "place_id": "ChIJKdd4W2T2wokRknKQeZy3ntk"
   },
   {
      "location": "Anrow Avenue, Bouck Avenue, Throop Avenue, Streetedman Place, Allerton Avenue",
      "name": "Allerton Playground",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.865883,
      "lng": -73.85055,
      "place_id": "ChIJ2wWlS07zwokRdTu_0Sd5fTo"
   },
   {
      "location": "67 Avenue & 230 Street",
      "name": "Alley Park (PS 213)",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.76007,
      "lng": -73.770256,
      "place_id": "ChIJmzkJ0-BhwokRZqGFshqdkGU"
   },
   {
      "location": "Entrance off Grand Central Parkway, includes athletic fields and picnic areas",
      "name": "Alley Pond Park",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.747314,
      "lng": -73.74296,
      "place_id": "ChIJzyx69P9hwokRMP73UTW2hTA"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Noble, Franklin Milton Streets",
      "name": "American Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.72877,
      "lng": -73.95783,
      "place_id": "ChIJEZTfskFZwokRVRYWnMmva6s"
   },
   {
      "location": "49 Avenue, Vernon Boulevard, 5 Street",
      "name": "Andrews Playground",
      "borough": "Queens",
      "open_year_round": "No",
      "lat": 40.74345,
      "lng": -73.95481,
      "place_id": "ChIJU0mtdiNZwokRYjOvi3aXWUE"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Yellowstone Boulevard, 65 Road, 65 Avenue",
      "name": "Annandale Playground (PS 175)",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.7311405,
      "lng": -73.851918,
      "place_id": "ChIJt1ldh8RMtokREBjGDOcKq0A"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Teller Avenue, Park Avenue, Clay Avenue, East 64 Street",
      "name": "Arcilla Playground",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.827145,
      "lng": -73.914215,
      "place_id": "ChIJnXHlozX0wokRcB-hofrRRZs"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Sand Lane, Major Avenue, McFarland Avenue",
      "name": "Arrochar Playground",
      "borough": "Staten Island",
      "open_year_round": "Yes",
      "lat": 40.597633,
      "lng": -74.07095,
      "place_id": "ChIJ6_gQYhtPwokRtKDQUJeoUcI"
   },
   {
      "location": "Asser Levy Place & East 24-25 streets",
      "name": "Asser Levy",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.735935,
      "lng": -73.97632,
      "place_id": "ChIJ3QWkiwxZwokRtSAA01kLa4s"
   },
   {
      "location": "Boardwalk, Surf, Sea Breeze avenues, Ocean Parkway",
      "name": "Asser Levy Park",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.57506,
      "lng": -73.97162,
      "place_id": "ChIJJ6b4_0dEwokR3RI76Ea93dw"
   },
   {
      "location": "30 Road, 45 to 46 streets",
      "name": "Astoria Heights Playground",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.76052,
      "lng": -73.91155,
      "place_id": "ChIJv4Qp7hVfwokRjWjp4AyKfdY"
   },
   {
      "location": "Shore Boulevard opposite 23 Road",
      "name": "Astoria Park (Charybdis Playground)",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.7792862,
      "lng": -73.9205912,
      "place_id": "ChIJi_uVCUR7k1QRv4obofFy3fc"
   },
   {
      "handicap_accessible": "Yes",
      "location": "29 Street, 30 Street, 30 Avenue, Newtown Avenue",
      "name": "Athens Sq (PS 17)",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.7692191,
      "lng": -73.9229162,
      "place_id": "ChIJ8UNwBh-9oRQR3Y1mdkU1Nic"
   },
   {
      "location": "170-171 streets, 33-35 avenues",
      "name": "Aubondale Playground",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.765858,
      "lng": -73.794205,
      "place_id": "ChIJycPVL9VhwokRdaLkrH1hdtM"
   },
   {
      "location": "East 19 to East 20 streets, 2 Avenue",
      "name": "Augustus St. Gaudens",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.73563,
      "lng": -73.98236,
      "place_id": "ChIJ_W0brgpZwokR4EJOoF2h260"
   },
   {
      "location": "Bailey Avenue, Weast 233-West 238 streets",
      "name": "Bailey Playground",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.881912,
      "lng": -73.900154,
      "place_id": "ChIJDXXquaLzwokRlaXt6kPefeo"
   },
   {
      "location": "Rockaway Boulevard, 125th Avenue, & Baisley Boulevard South",
      "name": "Baisley Pond Park",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.675583,
      "lng": -73.78529,
      "place_id": "ChIJrQgf9NpmwokRPcrLDI42IHQ"
   },
   {
      "location": "150th Street, Rockaway Boulevard, Baisley Boulevard South, & North Conduit Avenue",
      "name": "Baisley Pond Park",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.675583,
      "lng": -73.78529,
      "place_id": "ChIJrQgf9NpmwokRPcrLDI42IHQ"
   },
   {
      "location": "Bartlett Street & Throop Avenue",
      "name": "Bartlett Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.700893,
      "lng": -73.94608,
      "place_id": "ChIJZVCvmfpbwokRjTZHGtAQnq8"
   },
   {
      "location": "Battery Place, State & Whitehall streets",
      "name": "Battery Park (Battery Gardens)",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.70683,
      "lng": -74.01758,
      "place_id": "ChIJ1cyukBFawokRyQ1BU3s-Z18"
   },
   {
      "location": "23 Avenue & 212 Street",
      "name": "Bay Terrace Playground (PS 169)",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.774334,
      "lng": -73.75071,
      "place_id": "EioxLTY5IFBhcmsgTGFuZSwgTGl0dGxlIE5lY2ssIE5ZIDExMzYzLCBVU0E"
   },
   {
      "handicap_accessible": "Yes",
      "location": "204 Street & 29 Avenue, Clearview Expressway",
      "name": "Bayside Fields",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.771008,
      "lng": -73.784966,
      "place_id": "ChIJa7eVMHqKwokRHo_RdIM-NN4"
   },
   {
      "location": "Beach Channel Drive & Seaside Avenue",
      "name": "Bayside Playground (JHS 180)",
      "borough": "Queens",
      "open_year_round": "No",
      "lat": 40.758556,
      "lng": -73.765434,
      "place_id": "ChIJvffyJeJhwokRnqmHtHkM_X4"
   },
   {
      "location": "Seaview Avenue & East 99 Street",
      "name": "Bayview Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.63477,
      "lng": -73.88721,
      "place_id": "ChIJhQPCpiddwokRmBD51_EOUTk"
   },
   {
      "location": "Bedford Avenue & South 9 Street, Division Avenue",
      "name": "Bedford Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.70831,
      "lng": -73.964,
      "place_id": "ChIJzzZ1ot5bwokRJVqbnLf7f8s"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Tinton Avenue, East 165 Street, Union Avenue, East 166 Street",
      "name": "Behagen Playground",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.82537,
      "lng": -73.90126,
      "place_id": "ChIJ73HKhE30wokRGjKFOTmG1B8"
   },
   {
      "location": "89 Avenue, 207 & 208 streets",
      "name": "Bellaire Playground",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.72152,
      "lng": -73.7579,
      "place_id": "ChIJwV0SQHhhwokRzEFbhbM7FLw"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Crotona Avenue, East 181 Street",
      "name": "Belmont Playground",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.850246,
      "lng": -73.887665,
      "place_id": "ChIJvzbi4If0wokR0U_Jy88iXJs"
   },
   {
      "handicap_accessible": "Yes",
      "location": "100th Street and Fifth Ave",
      "name": "Bendheim Playground",
      "borough": "Manhattan",
      "lat": 40.790466,
      "lng": -73.954445,
      "place_id": "ChIJvXbPp6BYwokR4qLYE8FWVbM"
   },
   {
      "location": "West 185 Street, Ft Washington Avenue",
      "name": "Bennett Park",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.852806,
      "lng": -73.938,
      "place_id": "ChIJTbE1MKf2wokRmmwnWT7_t4c"
   },
   {
      "location": "Bath Avenue between Bay 22 & Bay 23 streets",
      "name": "Benson Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.602383,
      "lng": -74.00221,
      "place_id": "ChIJ67VgtgtFwokRKPuk7AC_rRQ"
   },
   {
      "location": "Gravesend Bay, 21 & Cropsey avenues, Bay Parkway",
      "name": "Bensonhurst Park",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.59632,
      "lng": -74.00134,
      "place_id": "ChIJw8mHO6FFwokRcM0WpmQcNHQ"
   },
   {
      "location": "61 Street, north and south of Brooklyn-Queens Expressway",
      "name": "Big Bush Park",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.739506,
      "lng": -73.90273,
      "place_id": "ChIJv1jibuNewokRK0FqKaXtxAs"
   },
   {
      "location": "Flatlands Avenue between East 81 & East 82 streets",
      "name": "Bildersee Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.63567,
      "lng": -73.91167,
      "place_id": "ChIJQ254D8hcwokRQ6tw5TO4h74"
   },
   {
      "location": "Hudson & West 11 streets",
      "name": "Bleecker Playground",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.73622,
      "lng": -74.00559,
      "place_id": "ChIJUdQnJJVZwokRkAVt9JscnGg"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Richmond Pkwy, Bloomingdale Rd., Lenevar Ave",
      "name": "Bloomingdale Park",
      "borough": "Staten Island",
      "lat": 40.5334,
      "lng": -74.210594,
      "place_id": "ChIJnV9kHslKwokRPKUuDwlpPGA"
   },
   {
      "location": "Amsterdam Avenue, West 104 & West 105 streets",
      "name": "Bloomingdale Playground",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.78851,
      "lng": -73.96643,
      "place_id": "ChIJifkMFpxYwokRXYDkgiFNh1E"
   },
   {
      "location": "159 Street, 29 Avenue, 155 Street, 32 Avenue",
      "name": "Bowne Park",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.7705,
      "lng": -73.80772,
      "place_id": "ChIJH9ghRp2KwokRUtHSD91Dbbg"
   },
   {
      "location": "Union Street and Sanford Avenue",
      "name": "Bowne Playground",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.757988,
      "lng": -73.824814,
      "place_id": "ChIJU-fJSBFgwokRaT0G-ov0_rw"
   },
   {
      "location": "Braddock Avenue & 240 Street",
      "name": "Breininger Park",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.725845,
      "lng": -73.72903,
      "place_id": "ChIJe2Ki3jZiwokRR9E0iBkH_lQ"
   },
   {
      "location": "Louisiana & Flatlands Avenue",
      "name": "Breukelen Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.6514248,
      "lng": -73.8917039,
      "place_id": "ChIJt5thZINxxkcRA8KNLed51cg"
   },
   {
      "location": "Ralph Avenue & Chauncy Street",
      "name": "Brevoort Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.68046,
      "lng": -73.92263,
      "place_id": "ChIJFYXER25cwokRbInmyNLU2to"
   },
   {
      "location": "Bridge & Prospect streets",
      "name": "Bridge Park 2",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.696175,
      "lng": -73.9803,
      "place_id": "EiYyIFBhcmsgQXZlbnVlLCBCcm9va2x5biwgTlkgMTEyMDUsIFVTQQ"
   },
   {
      "location": "Broadway, Columbus Circle to West 110 Street",
      "name": "Broadway Malls",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.77235,
      "lng": -73.97159,
      "place_id": "ChIJx3g2ovJYwokRtkUlbWC4nE8"
   },
   {
      "location": "Lydig Avenue & Bronx Park East",
      "name": "Bronx Park (Ben Abrams Playground)",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.83705,
      "lng": -73.86543,
      "place_id": "ChIJBUEf6ovgwokRwlazSIxIpsk"
   },
   {
      "location": "Bronx Park East between Bronxdale Avenue and Unionport Road",
      "name": "Bronx Park (Brady Playground)",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.83705,
      "lng": -73.86543,
      "place_id": "ChIJBUEf6ovgwokRwlazSIxIpsk"
   },
   {
      "location": "East 204 Street & W/S Bronx Park",
      "name": "Bronx Park (French Charley's Playground)",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.83705,
      "lng": -73.86543,
      "place_id": "ChIJBUEf6ovgwokRwlazSIxIpsk"
   },
   {
      "location": "East 219 Street & Bronx River Parkway",
      "name": "Bronx Park (Olinville Playground)",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.86049,
      "lng": -73.87425,
      "place_id": "ChIJdYs5dWjzwokRagNsXYTMbog"
   },
   {
      "location": "Southern Boulevard, Webster, Burke avenues, Bronx Park East, 180 Street",
      "name": "Bronx Park (Ranaqua)",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.806713,
      "lng": -73.922295,
      "place_id": "ChIJuXPDksL1wokRy0go-NDPFxY"
   },
   {
      "handicap_accessible": "Yes",
      "location": "East 180th Street, Boston Road",
      "name": "Bronx Park (River Park Playground)",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.83705,
      "lng": -73.86543,
      "place_id": "ChIJBUEf6ovgwokRwlazSIxIpsk"
   },
   {
      "location": "Bronx River Parkway & Rosewood Street",
      "name": "Bronx Park (Rosewood Playground)",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.83705,
      "lng": -73.86543,
      "place_id": "ChIJBUEf6ovgwokRwlazSIxIpsk"
   },
   {
      "location": "Bronx Park East between Waring Avenure and Thwaites Place",
      "name": "Bronx Park (Waring Playground)",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.83705,
      "lng": -73.86543,
      "place_id": "ChIJBUEf6ovgwokRwlazSIxIpsk"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Bronx River Parkway, Bronx Park, Westchester/NYC City Line.",
      "name": "Bronx River Parkway (Parque de los Ninos)",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.94776,
      "lng": -73.83453,
      "place_id": "ChIJwxrhruqSwokRNr3sIuhgXu4"
   },
   {
      "location": "Conduit Avenue, Brookville Boulevard, 144th Avenue, 233rd Street",
      "name": "Brookville Park",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.65998,
      "lng": -73.74558,
      "place_id": "ChIJo9myzZxmwokRf8tp9AYNJFE"
   },
   {
      "location": "Brooklyn, St. Mark's, Kingston avenues, Park Place",
      "name": "Brower Park",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.673588,
      "lng": -73.943146,
      "place_id": "ChIJW_THx4NbwokRNBtZNhJp9Js"
   },
   {
      "location": "Linden Boulevard & Hegeman Avenue",
      "name": "Brownsville Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.66725,
      "lng": -73.9072,
      "place_id": "ChIJE92ULl9cwokR7fXB3KDZ_Ko"
   },
   {
      "location": "Flushing & Bushwick Avenue between Garden & Beaver",
      "name": "Bushwick Playground & Pool",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.70181,
      "lng": -73.939476,
      "place_id": "ChIJ-3QCqflbwokRRB2-39l2v_c"
   },
   {
      "location": "Tillary, Cadman Plaza West, Cadman Plaza East, Prospect streets",
      "name": "Cadman Plaza & Brooklyn War Memorial",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.698277,
      "lng": -73.99149,
      "place_id": "ChIJF0uTxzdawokRY90anIEMYX4"
   },
   {
      "location": "Tillary, Cadman Plaza West, Cadman Plaza East, Prospect streets",
      "name": "Cadman Plaza & Brooklyn War Memorial",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.698277,
      "lng": -73.99149,
      "place_id": "ChIJF0uTxzdawokRY90anIEMYX4"
   },
   {
      "location": "Hope Street & Metropolitan Avenue",
      "name": "Campiz Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.713783,
      "lng": -73.95417,
      "place_id": "ChIJFalKLl9ZwokRBbgRfV9luQg"
   },
   {
      "location": "Paerdegat Avenue, Seaview Avenue, East 93rd Street, Skidmore Avenue",
      "name": "Canarsie Park",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.630363,
      "lng": -73.892624,
      "place_id": "ChIJe6Gxc9RcwokR3nmTlX2LMIk"
   },
   {
      "handicap_accessible": "Yes",
      "location": "East 156 Street, Forest Avenue",
      "name": "Capt. Rivera Playground",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.817833,
      "lng": -73.90677,
      "place_id": "ChIJPd5xrLb1wokR_ya1YK8BEnM"
   },
   {
      "location": "Highland Avenue, Upland Parkway, Gothic Parkway, 85 Avenue",
      "name": "Capt. Tilly Park",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.71244,
      "lng": -73.7989,
      "place_id": "ChIJqdLwGeFgwokRl4dj3o97C9c"
   },
   {
      "handicap_accessible": "Yes",
      "location": "East 84 Street & East End Avenue",
      "name": "Carl Schurz Park",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.77513,
      "lng": -73.943695,
      "place_id": "ChIJ42dOPLFYwokRR31RRn7rDDM"
   },
   {
      "location": "Amsterdam Avenue, West 151 to West 152 streets",
      "name": "Carmansville Playground",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.82934,
      "lng": -73.94425,
      "place_id": "ChIJVfOYcIf2wokRZOHnnfezEQs"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Court & Smith Streets",
      "name": "Carroll Park",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.68105,
      "lng": -73.995674,
      "place_id": "ChIJG95a21lawokRea-RZUlsxhQ"
   },
   {
      "location": "Ralph Avenue & Sumpter Street",
      "name": "Carver Playground",
      "borough": "Brooklyn",
      "open_year_round": "No",
      "lat": 40.680298,
      "lng": -73.92056,
      "place_id": "ChIJkaXX8W5cwokRbWw8ilCwTaU"
   },
   {
      "location": "St. Raymond Avenue, Puroy Street",
      "name": "Caserta Playground",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.837395,
      "lng": -73.85385,
      "place_id": "ChIJccnaKLj0wokREdCUKTE79qk"
   },
   {
      "location": "Parker Street, Castle Hill Avenue, Puroy Street",
      "name": "Castle Hill Playground",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.823414,
      "lng": -73.850914,
      "place_id": "ChIJhaLRT9D0wokR2LUzeXAWSuk"
   },
   {
      "location": "Little Neck Parkway & 72 Avenue",
      "name": "Castlewood Playground (PS 186)",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.74966,
      "lng": -73.721434,
      "place_id": "ChIJ4a5wGymEbIcRiFRZzyA4X5k"
   },
   {
      "location": "West 179 Street, West Burnside Avenue, Major Deegan Expressway, Sedgewick Avenue",
      "name": "Cedar Playground",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.85511,
      "lng": -73.91743,
      "place_id": "ChIJs-rr7g30wokRZzdJaQdg4Og"
   },
   {
      "handicap_accessible": "Yes",
      "location": "85 ST & 5TH AVE",
      "name": "Central Park (Ancient Playground)",
      "borough": "Manhattan",
		"open_year_round": "Yes",
      "lat": 40.78087,
      "lng": -73.96119,
      "place_id": "ChIJa3Sxk5dYwokR-r1HwXcGrH8"
   },
   {
      "location": "5th Avenue from 60th Street to 65th Street",
      "name": "Central Park (Arsenal)",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.76744,
      "lng": -73.971436,
      "place_id": "ChIJ49l0jdD1wokRolt34tBgxoI"
   },
   {
      "name": "Central Park (Bethesda Terrace)",
      "borough": "Manhattan",
      "lat": 40.77384,
      "lng": -73.97086,
      "place_id": "ChIJEYYWppJYwokRUTul6ztwlJ0"
   },
   {
      "location": "5th Avenue, 103rd Street to 106th Street",
      "name": "Central Park (Conservatory Garden)",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.79357,
      "lng": -73.951866,
      "place_id": "ChIJi2bDZxz2wokRYtrmk91wrQk"
   },
   {
      "handicap_accessible": "Yes",
      "location": "110th Street between Fifth Avenue and Malcolm X Boulevard",
      "name": "Central Park (Dana Discovery Center)",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.79706,
      "lng": -73.95142,
      "place_id": "ChIJqTjOsRv2wokRpTQaxNBKALY"
   },
   {
      "location": "62 ST, BET WEST & CENTER DRS",
      "name": "Central Park (Heckscher Playground)",
      "borough": "Manhattan",
	  "open_year_round": "Yes",
      "lat": 40.768486,
      "lng": -73.9772,
      "place_id": "ChIJyVaLsvZYwokRIDVJ-GYzaCg"
   },
   {
      "location": "74th Street near Fifth Avenue",
      "name": "Central Park (Kerbs Boathouse)",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.782864,
      "lng": -73.965355,
      "place_id": "ChIJ4zGFAZpYwokRGUGph3Mf37k"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Central Park at 107th Street",
      "name": "Central Park (Lasker)",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.782864,
      "lng": -73.965355,
      "place_id": "ChIJ4zGFAZpYwokRGUGph3Mf37k"
   },
   {
      "location": "East Side between 74th and 75th streets",
      "name": "Central Park (Loeb Boathouse)",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.782864,
      "lng": -73.965355,
      "place_id": "ChIJ4zGFAZpYwokRGUGph3Mf37k"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Mid-park at 97th Street",
      "name": "Central Park (North Meadow Recreation Center)",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.791134,
      "lng": -73.95968,
      "place_id": "ChIJhSkZ_J9YwokRuPP6zzavTbk"
   },
   {
      "location": "Central Park",
      "name": "Central Park (Ramble)",
      "borough": "Manhattan",
      "lat": 40.776154,
      "lng": -73.96906,
      "place_id": "ChIJ_1f3U5JYwokRH1_PRd1eIrI"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Mid-park at 69th Street",
      "name": "Central Park (Sheep Meadow, Mineral Springs)",
      "borough": "Manhattan",
      "open_year_round": "No",
      "lat": 40.782864,
      "lng": -73.965355,
      "place_id": "ChIJ4zGFAZpYwokRGUGph3Mf37k"
   },
   {
      "location": "Central Park",
      "name": "Central Park (Tavern on The Green)",
      "borough": "Manhattan",
      "lat": 40.77221,
      "lng": -73.977786,
      "place_id": "ChIJR85N-75ZwokRgaTKj1AmgvA"
   },
   {
      "location": "93d Street near the West Drive",
      "name": "Central Park (Tennis Courts)",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.789562,
      "lng": -73.96191,
      "place_id": "ChIJm17AB5pYwokRvAT6yLn623E"
   },
   {
      "location": "West Side from 103rd to 107th streets",
      "name": "Central Park (The Great Hill)",
      "borough": "Manhattan",
      "open_year_round": "No",
      "lat": 40.796894,
      "lng": -73.95895,
      "place_id": "ChIJUQj7pBj2wokRkE42LsmsmIM"
   },
   {
      "location": "Fifth Avenue at 82nd Street",
      "name": "Central Park (The Metropolitan Museum of Art)",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.779438,
      "lng": -73.96324,
      "place_id": "ChIJb8Jg9pZYwokR-qHGtvSkLzs"
   },
   {
      "location": "West Drive, Central Park West, & 65th Street Transverse",
      "name": "Central Park (West 61st)",
      "borough": "Manhattan",
      "open_year_round": "No",
      "lat": 40.771324,
      "lng": -73.985886,
      "place_id": "ChIJgZA2J19YwokRlM8A5UGOzDI"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Center Drive to East Drive (including Gapstow Bridge)",
      "name": "Central Park (Wollman Rink)",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.782864,
      "lng": -73.965355,
      "place_id": "ChIJ4zGFAZpYwokRGUGph3Mf37k"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Mid-Park at 80th Street",
      "name": "Central Park Delacorte Comfort Station",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.782864,
      "lng": -73.965355,
      "place_id": "ChIJ4zGFAZpYwokRGUGph3Mf37k"
   },
   {
      "location": "Brighton Beach Avenue & West 2 Street",
      "name": "Century Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.576775,
      "lng": -73.970055,
      "place_id": "ChIJU6ONxkdEwokRgKaa5iCoQnM"
   },
   {
      "location": "West 27 Street & 9 Avenue",
      "name": "Chelsea Park",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.75011,
      "lng": -74.00118,
      "place_id": "ChIJQ1pGK7dZwokRfVM1hZ1QmU4"
   },
   {
      "handicap_accessible": "Yes",
      "location": "South of West 25 Street, 9 to 10 avenues",
      "name": "Chelsea Recreation Center",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.748302,
      "lng": -74.002045,
      "place_id": "ChIJk_1kXbdZwokRTCNXO2NxYt8"
   },
   {
      "location": "Chester Street, Sutter Avenue",
      "name": "Chester Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.66866,
      "lng": -73.91191,
      "place_id": "ChIJ78NzLl5cwokRaExoOtaDaLo"
   },
   {
      "location": "Mount Eden Parkway & Morris Avenue",
      "name": "Claremont Park",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.840504,
      "lng": -73.90748,
      "place_id": "ChIJZbqMb0H0wokRKJ3PIMd-kD0"
   },
   {
      "location": "E 170 Street & Teller Avenue",
      "name": "Claremont Park Playground",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.840502,
      "lng": -73.907481,
      "place_id": "ChIJX_ane5Q6w4ARTTe8KondetU"
   },
   {
      "location": "Broadway & 83 Street",
      "name": "Clement Clark Moore Park",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.742176,
      "lng": -73.88252,
      "place_id": "ChIJM67XlqxfwokRyybUBAj-iak"
   },
   {
      "location": "Clintonville Street, 17 Road & 17 Avenue",
      "name": "Clintonville Playground (JHS 194)",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.783159,
      "lng": -73.807,
      "place_id": "ChIJn3LhCWiMOIgR3Rx6W6VV1PA"
   },
   {
      "location": "West 144 Street & Lenox Avenue",
      "name": "Col. Charles Young Playground",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.81959,
      "lng": -73.93619,
      "place_id": "ChIJw3VA2df1wokRqNXEaFTut7Q"
   },
   {
      "location": "Between Cherry & Monroe streets",
      "name": "Coleman Square Playground",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.711205,
      "lng": -73.99365,
      "place_id": "ChIJr5WyOC9awokRXnoOef0xDrU"
   },
   {
      "location": "Hutchinson River Parkway, Wilkinson Avenue, Mayflower Avenue",
      "name": "Colucci Playground",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.852837,
      "lng": -73.83474,
      "place_id": "ChIJe82E56mMwokR1P82IGVW-yQ"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Brighton 2nd",
      "name": "Coney Island",
      "borough": "Brooklyn",
      "lat": 40.574924,
      "lng": -73.98594,
      "place_id": "ChIJxYx4g8pFwokRxOWbtEQbr3o"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Stillwell Avenue",
      "name": "Coney Island Beach",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.57213,
      "lng": -73.97933,
      "place_id": "ChIJRWwYoTREwokRtbWBEodfuS0"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Pittsville St,Hylan Blvd.,Surf,Richard Aves",
      "name": "Conference House Park",
      "borough": "Staten Island",
      "comments": "This facility is currently closed",
      "lat": 40.499416,
      "lng": -74.25168,
      "place_id": "ChIJqVNqlb3Kw4kRhpOMG6975Mg"
   },
   {
      "location": "Sharon, Olive streets, Maspeth & Morgan avenues",
      "name": "Cooper Park",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.716015,
      "lng": -73.93727,
      "place_id": "ChIJU0PwIlNZwokRzqwxSCnttrg"
   },
   {
      "location": "109 Street between 46-47 avenues",
      "name": "Corona Golf Playground",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.747494,
      "lng": -73.85496,
      "place_id": "ChIJd_8qRMVfwokRKJHst3GbH9Y"
   },
   {
      "location": "Hudson & Horatio streets",
      "name": "Corporal John A. Seravalli Playground",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.739086,
      "lng": -74.00492,
      "place_id": "ChIJdY3Rwr9ZwokR-69tc5yUGlA"
   },
   {
      "location": "Broadway, Henderson Avenue",
      "name": "Corporal Thompson Park",
      "borough": "Staten Island",
      "open_year_round": "No",
      "lat": 40.637917,
      "lng": -74.11849,
      "place_id": "ChIJa65UdgtOwokRnPEzggw-TAs"
   },
   {
      "location": "Crotona East & Claremont Parkway",
      "name": "Crotona Park (Martin Van Buren Playground)",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.83531,
      "lng": -73.89584,
      "place_id": "ChIJGUCh6Vv0wokRluEWqvt9RXQ"
   },
   {
      "location": "Fulton Avenue & Crotona Park South",
      "name": "Crotona Park (Playground of the Stars)",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.835671,
      "lng": -73.900639,
      "place_id": "ChIJb380HitoQBMRsIPgTq6VCwM"
   },
   {
      "handicap_accessible": "Yes",
      "location": "173rd Street and Fulton Avenue",
      "name": "Crotona Park (Pool House)",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.8399418,
      "lng": -73.8980562,
      "place_id": "ChIJb380HitoQBMRsIPgTq6VCwM"
   },
   {
      "location": "57 Avenue & 83 Street",
      "name": "Crowley Playground",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.729458,
      "lng": -73.879944,
      "place_id": "ChIJpxe1J1pewokRLi8m5fdNSoE"
   },
   {
      "location": "Union Turnpike, Clearview Expressway, 73rd Avenue, Francis Lewis Boulevard",
      "name": "Cunningham Park",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.736763,
      "lng": -73.76838,
      "place_id": "ChIJs40Y2ZlhwokRKkRKsOXfG8E"
   },
   {
      "location": "Blake & Euclid avenues",
      "name": "Cypress Hills Park",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.68994,
      "lng": -73.87255,
      "place_id": "ChIJT1_NtMRdwokRmI0vB9PWJp4"
   },
   {
      "location": "113 Avenue & 196 Street",
      "name": "Daniel M. O'Connell Playground",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.69996,
      "lng": -73.75826,
      "place_id": "ChIJWxJ0wlxhwokRE0L9pzLyZ6w"
   },
   {
      "handicap_accessible": "Yes",
      "location": "West 52 to West 54 streets, 11 to 12 avenues",
      "name": "De Witt Clinton Park",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.794968,
      "lng": -73.94585,
      "place_id": "ChIJ_XIefgP2wokRs_Y_gC2x-9o"
   },
   {
      "location": "Tompkins Avenue, Chestnut Avenue",
      "name": "Dematti Playground",
      "borough": "Staten Island",
      "open_year_round": "Yes",
      "lat": 40.61451,
      "lng": -74.07426,
      "place_id": "ChIJqT3Rf6tPwokRqP8Lf2kall0"
   },
   {
      "location": "106 Avenue, 173 Street, Liberty Avenue, 172 Street",
      "name": "Detective Keith L. Williams Park",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.702297,
      "lng": -73.78419,
      "place_id": "ChIJ44D9QSNhwokRQYyg3wCbb68"
   },
   {
      "location": "West Fordham Road, University Avenue, Sedgwick Avenue, Father Zeiser Place",
      "name": "Devoe Park",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.86309,
      "lng": -73.9064,
      "place_id": "ChIJo8QZ9onzwokR1MbApd6Kjvg"
   },
   {
      "location": "Hicks & Rapelye streets",
      "name": "Dimattina Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.680313,
      "lng": -74.00221,
      "place_id": "ChIJT491bV9awokRcqlUjY8WmEU"
   },
   {
      "location": "23 Avenue to Ditmars Boulevard",
      "name": "Ditmars Park Playground",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.772743,
      "lng": -73.89762,
      "place_id": "ChIJA85TfnpfwokRu5MfdPTw_fA"
   },
   {
      "location": "Van Wyck Expressway, 116 Avenue, 140 Street, 115 Avenue",
      "name": "Dr. Charles R. Drew Memorial Park",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.68095,
      "lng": -73.80331,
      "place_id": "ChIJD1VPcC9nwokR-1WsiYxEK2A"
   },
   {
      "location": "Fulton Avenue, East 169 Street",
      "name": "Drew Playground",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.83315,
      "lng": -73.90337,
      "place_id": "ChIJm8H1eUX0wokR9ntsxEgefNg"
   },
   {
      "location": "Broadway & West 204 Street",
      "name": "Dyckman House Museum",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.8674,
      "lng": -73.922844,
      "place_id": "ChIJW5tkmffzwokR9kQiFoAOU0A"
   },
   {
      "location": "Shore Parkway, 86 Street, 7 to 14 avenues",
      "name": "Dyker Beach Park",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.61208,
      "lng": -74.01403,
      "place_id": "ChIJp3bA9W9FwokR8hUQH1e9snE"
   },
   {
      "handicap_accessible": "Yes",
      "location": "25 Avenue & 98 Street",
      "name": "East Elmhurst Playground (PS 127)",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.698696,
      "lng": -73.84754,
      "place_id": "EjExMjcgUGFyayBMYW5lIFNvdXRoLCBSaWNobW9uZCBIaWxsLCBOWSAxMTQxOCwgVVNB"
   },
   {
      "location": "East River Park at Broome Street",
      "name": "East River Park (Tennis Courts)",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.726814,
      "lng": -74.01142,
      "place_id": "ChIJD5tjzPNZwokR4mjbLtJHERI"
   },
   {
      "location": "FDR Drive, East 106 to East 107 streets",
      "name": "East River Playground",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.789284,
      "lng": -73.938,
      "place_id": "ChIJlznYOQD2wokRdN_UHLiSqVk"
   },
   {
      "location": "115 Road between 218 & 219 streets",
      "name": "East Springfield Playground",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.698505,
      "lng": -73.74016,
      "place_id": "ChIJFW2SG-djwokRf1yeJHz4hew"
   },
   {
      "location": "Adee Avenue, Tenbroeck Avenue",
      "name": "Eastchester Playground",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.869896,
      "lng": -73.85275,
      "place_id": "ChIJ6ejvtUjzwokRcjV8q-7Pxxc"
   },
   {
      "location": "East 226 Drive, Schieffelin Avenue",
      "name": "Edenwald Playground",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.884186,
      "lng": -73.84503,
      "place_id": "ChIJkYXNnS3zwokR4N-2qSCviIc"
   },
   {
      "location": "DeKalb Avenue, Adelphi Street",
      "name": "Edmonds Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.689354,
      "lng": -73.971436,
      "place_id": "ChIJiWq3VLdbwokRTLxLAuEvuVU"
   },
   {
      "location": "164 Street, south of 65 Avenue",
      "name": "Electric Playground",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.736057,
      "lng": -73.80533,
      "place_id": "ChIJ5bIGv1BgwokRSXXfHppTXZM"
   },
   {
      "location": "90 Street, 88 & 89 avenues",
      "name": "Equity Park",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.691387,
      "lng": -73.853485,
      "place_id": "ChIJrYYgTPtdwokRDeTzgBCS020"
   },
   {
      "location": "New Jersey Avenue & Vermont Street/Worthman",
      "name": "Ethan Allen Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.655704,
      "lng": -73.88695,
      "place_id": "ChIJo2NORAJdwokRMIZiLkAzIPg"
   },
   {
      "location": "Troutman Street & Central Avenue",
      "name": "Fermi Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.700565,
      "lng": -73.92837,
      "place_id": "ChIJlR9-zAVcwokRkD7u_kXAuro"
   },
   {
      "location": "Bayside Avenue, 25 Avenue, 149 to 150 streets",
      "name": "Flushing Fields (Leonardo Ingravallo Playground)",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.767498,
      "lng": -73.83308,
      "place_id": "ChIJP2PATQVgwokRHih0tNEk7Po"
   },
   {
      "location": "Park Drive East & 73 Terrace",
      "name": "Flushing Meadows Corona Park (Albert H. Mauro Playground)",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.767498,
      "lng": -73.83308,
      "place_id": "ChIJP2PATQVgwokRHih0tNEk7Po"
   },
   {
      "location": "College Point Boulevard and Lawrence Street",
      "name": "Flushing Meadows Corona Park (Lawrence Playground)",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.767498,
      "lng": -73.83308,
      "place_id": "ChIJP2PATQVgwokRHih0tNEk7Po"
   },
   {
      "location": "Long Island Expressway to Meadow Lake to Van Wyck Expressway Extension to Grand Central Parkway",
      "name": "Flushing Meadows Corona Park (Meadow Lake North)",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.736,
      "lng": -73.84044,
      "place_id": "ChIJmX4_LH5gwokRkSCWiIR_AU0"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Unisphere Fountain to pool, at Meridian Road",
      "name": "Flushing Meadows Corona Park (Passerelle)",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.767498,
      "lng": -73.83308,
      "place_id": "ChIJP2PATQVgwokRHih0tNEk7Po"
   },
   {
      "handicap_accessible": "Yes",
      "location": "111 Street and Corona Avenue",
      "name": "Flushing Meadows Corona Park (Playground for All Children)",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.74083,
      "lng": -73.849945,
      "place_id": "ChIJKww2zM5fwokRT9vNWrDaVno"
   },
   {
      "location": "Grand Central Parkway, Van Wyck Expressway",
      "name": "Flushing Meadows Corona Park (Worlds Fair Playground)",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.737534,
      "lng": -73.845764,
      "place_id": "ChIJSXcb8tRfwokRdD-yeM2_EZM"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Grand Central Parkway to 111th Street to Heckscher Children Farm to Playground for All Children",
      "name": "Flushing Meadows Corona Park (Zoo, Ballfields)",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.767498,
      "lng": -73.83308,
      "place_id": "ChIJP2PATQVgwokRHih0tNEk7Po"
   },
   {
      "location": "3 Avenue, East 158 Street, Brook Avenue, East 157 Street",
      "name": "Flynn Playground",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.821033,
      "lng": -73.91192,
      "place_id": "ChIJsZBThLX1wokR4XHDk77cYfY"
   },
   {
      "location": "108 Street and Park Lane South",
      "name": "Forest Park (Jackson Pond Playground)",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.70078,
      "lng": -73.84297,
      "place_id": "ChIJC2OzHgJewokRMuk7-lOiOfo"
   },
   {
      "location": "Park Lane (to east and south) to Metropolitan Avenue",
      "name": "Forest Park (The Overlook)",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.71077,
      "lng": -73.83554,
      "place_id": "ChIJEZVI3KNgwokRfwy2aACXCnE"
   },
   {
      "location": "Long Island Railroad to Woodhaven Boulevard. to Myrtle Avenue to 96th Street",
      "name": "Forest Park (Victory Field)",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.701714,
      "lng": -73.8533,
      "place_id": "ChIJ03eDBAZewokRVlxzTwVHPSw"
   },
   {
      "location": "South of Myrtle Avenue to Willoughby Avenue",
      "name": "Fort Greene Park",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.690346,
      "lng": -73.97383,
      "place_id": "ChIJvf6v7bZbwokRUO0-u24i73g"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Myrtle Avenue & St. Edwards Plaza",
      "name": "Fort Greene Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.69041,
      "lng": -73.97058,
      "place_id": "ChIJ7Ro_3blbwokRX6lB9YrtwKA"
   },
   {
      "location": "Stevenson Place, West 238 Street, Sedgwick Avenue",
      "name": "Fort Independence Playground",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.881645,
      "lng": -73.89612,
      "place_id": "ChIJ0--wkqHzwokRpvNm0ZDJrI8"
   },
   {
      "location": "One Margaret Corbin Drive",
      "name": "Fort Tryon Park (Café)",
      "borough": "Manhattan",
      "open_year_round": "No",
      "lat": 40.863796,
      "lng": -73.932556,
      "place_id": "ChIJuQtEAgH0wokR6ntLHv4BwVk"
   },
   {
      "handicap_accessible": "Yes",
      "location": "West 162 Street, east of Riverside Drive",
      "name": "Fort Washington Park (Lily Brown Playground)",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.8494774,
      "lng": -73.9466407,
      "place_id": "ChIJMcSS1-W6xokR5gfc6tz5inA"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Avenue H, East 54 to E 55 streets",
      "name": "Fox Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.632523,
      "lng": -73.92404,
      "place_id": "ChIJmeYZBrJcwokRp9nJZ6JxLeQ"
   },
   {
      "location": "3 Avenue and Bronx Whitestone Bridge",
      "name": "Francis Lewis Playground",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.76051,
      "lng": -73.78437,
      "place_id": "ChIJj24kutBhwokRkN_djZdiUD4"
   },
   {
      "location": "Broadway & 78 Street",
      "name": "Frank D. O'Connor Playground",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.744297,
      "lng": -73.88656,
      "place_id": "ChIJcZj1UKpfwokRRXXX63ylrws"
   },
   {
      "location": "132 to 138 streets, 14 Road",
      "name": "Frank Golden Park",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.784786,
      "lng": -73.83419,
      "place_id": "ChIJgUiRsbGKwokRhZYvvc48pHI"
   },
   {
      "handicap_accessible": "Yes",
      "location": "East 153 Street, Gerard Avenue, East 151 Street, Walton Avenue",
      "name": "Franz Sigel Park",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.8231,
      "lng": -73.92533,
      "place_id": "ChIJt1jVX9L1wokRX_MwJv8axtU"
   },
   {
      "location": "West 100-101 Street Amsterdam Avenue",
      "name": "Frederick Douglass Playground",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.796913,
      "lng": -73.96776,
      "place_id": "ChIJP5P_hSb2wokRwE_TDZpJyFg"
   },
   {
      "location": "Lenox Avenue, West 139 to West 140 streets",
      "name": "Frederick E. Samuel Playground",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.817204,
      "lng": -73.9391,
      "place_id": "ChIJgUbtdnf2wokRjxV-HD_9Cc4"
   },
   {
      "location": "7 Avenue, West 150-151 streets",
      "name": "Frederick Johnson Park",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.82481,
      "lng": -73.93557,
      "place_id": "ChIJgcLNl3_2wokRcfBDVyXc0Dc"
   },
   {
      "location": "67 Avenue & 173 Street",
      "name": "Fresh Meadows Playground (PS 173)",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.72667,
      "lng": -73.79644,
      "place_id": "ChIJz0BP51RgwokR1APTL0u4dpw"
   },
   {
      "location": "Avenue L, East 4 Street, McDonald Avenue, Avenue M",
      "name": "Friends Field",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.61861,
      "lng": -73.97308,
      "place_id": "ChIJD7b46txEwokRBgohTVUOboA"
   },
   {
      "location": "Fulton, Chauncey streets, Stuyvesant, Lewis avenues",
      "name": "Fulton Park",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.6798,
      "lng": -73.932495,
      "place_id": "ChIJWwO2dXdcwokR48fntL7vPaI"
   },
   {
      "location": "Bedford Avenue, Gravesend Neck Road",
      "name": "Galapo Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.59792,
      "lng": -73.94673,
      "place_id": "ChIJzX2uk4VEwokR7BQEd8k3y6g"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Ralph Avenue & Farragut Road",
      "name": "Glenwood Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.636845,
      "lng": -73.91963,
      "place_id": "ChIJeUnzorBcwokR5Sz-RXk2dk4"
   },
   {
      "location": "30 Avenue between 84 & 85 streets",
      "name": "Gorman Playground",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.7625,
      "lng": -73.88435,
      "place_id": "ChIJaa0WPJ9fwokRngqjbs88b7c"
   },
   {
      "location": "3rd Avenue, St. Paul's Place, East 170 Street",
      "name": "Gouverneur Playground",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.835617,
      "lng": -73.90337,
      "place_id": "ChIJZ0PE-UT0wokRhP7gJFxf6bU"
   },
   {
      "location": "Wyckoff Street between Bond & Hoyt streets",
      "name": "Gowanus Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.680206,
      "lng": -73.98539,
      "place_id": "ChIJbxjFjVRawokRomfivipNUes"
   },
   {
      "location": "East 158 Street, Caldwell Avenue, Eagle Avenue",
      "name": "Grove Hill Playground",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.82,
      "lng": -73.90897,
      "place_id": "ChIJPTNzSLT1wokRrVhaZC3VD74"
   },
   {
      "location": "Holland Avenue, Magenta Street, Cueger Avenue",
      "name": "Gun Hill Playground",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.874817,
      "lng": -73.865616,
      "place_id": "ChIJ_y5tnWrzwokRl6UMMSelm-Y"
   },
   {
      "location": "Burke Avenue, Hammersley Avenue, Gunther Avenue, Ely Avenue",
      "name": "Haffen Park",
      "borough": "Bronx",
      "open_year_round": "No",
      "lat": 40.87367,
      "lng": -73.83933,
      "place_id": "ChIJK5HUi8qMwokR2NBJez2_i6I"
   },
   {
      "location": "Hallets Cove, Vernon Boulevard",
      "name": "Hallets Cove Playground",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.77179,
      "lng": -73.934326,
      "place_id": "ChIJaXQybktfwokRlm0TIT_t1bM"
   },
   {
      "location": "Albany, East New York, Lefferts avenues",
      "name": "Hamilton-Metz Field",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.662453,
      "lng": -73.94094,
      "place_id": "ChIJqzk3iHxbwokRWghMeDKhBr4"
   },
   {
      "location": "35 West 134 Street",
      "name": "Hansborough Recreation Center",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.812805,
      "lng": -73.939224,
      "place_id": "ChIJfStcKXT2wokRh9-lesopliM"
   },
   {
      "location": "West 205 Street, Paul Avenue, Bedford Pk B, Goulden Avenue",
      "name": "Harris Park",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.876213,
      "lng": -73.891525,
      "place_id": "ChIJA3rjYZ7zwokRpkXZlNA5mi8"
   },
   {
      "location": "37 Avenue, west of 69 Street",
      "name": "Hart Playground",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.748905,
      "lng": -73.89722,
      "place_id": "ChIJrc6_ZgRfwokR09_KMeIqiDI"
   },
   {
      "location": "15 to 20 avenues, East of Whitestone Expressway",
      "name": "Harvey Park",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.784554,
      "lng": -73.82343,
      "place_id": "ChIJY1qUZLyKwokRxYZa4HRQo6c"
   },
   {
      "location": "East of Marcy Street",
      "name": "Hattie Carthan Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.685444,
      "lng": -73.94608,
      "place_id": "ChIJ0RqI341bwokR30woo5CHACc"
   },
   {
      "location": "Watson Avenue, Havenuemeyer Avenue, Cross Bronx Expressway",
      "name": "Havemeyer Playground",
      "borough": "Bronx",
      "open_year_round": "No",
      "lat": 40.829838,
      "lng": -73.84788,
      "place_id": "ChIJmdbfVcn0wokR5tQSzXTHYpc"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Grove Street to Linden Street",
      "name": "Heckscher Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.695065,
      "lng": -73.91816,
      "place_id": "ChIJy_AHNRdcwokRgKzo0bzB-c4"
   },
   {
      "location": "Palisade Avenue, Kappock Street & Independence Avenue",
      "name": "Henry Hudson Park",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.88092,
      "lng": -73.92018,
      "place_id": "ChIJM6mCDOnzwokRdA3Jq-C9HOE"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Greene, Marcy, Lafayette, Tompkins avenues",
      "name": "Herbert Von King Park",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.689613,
      "lng": -73.94673,
      "place_id": "ChIJgypUQY1bwokRQ2r4QJ0d1so"
   },
   {
      "location": "Avenue V & Nostrand Avenue",
      "name": "Herman Dolgon Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.59826,
      "lng": -73.93984,
      "place_id": "ChIJm_VUp4NEwokRTRrTLuTIro8"
   },
   {
      "location": "East of paved path running north from 119th Street",
      "name": "Hermon MacNeil Park",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.79283,
      "lng": -73.85186,
      "place_id": "ChIJP5W2-Ej1wokR3QpPBK__PRs"
   },
   {
      "location": "Richmond Parkway & Moravian Cemetery at Rockland Avenue",
      "name": "High Rock Park",
      "borough": "Staten Island",
      "open_year_round": "Yes",
      "lat": 40.58254,
      "lng": -74.12326,
      "place_id": "ChIJ64AwUh1MwokRiTY282qWRDA"
   },
   {
      "location": "Jackie Robinson Parkway to Highland Boulevard",
      "name": "Highland Park",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.68837,
      "lng": -73.88748,
      "place_id": "ChIJF1inp8xdwokRIG9nBQYpooQ"
   },
   {
      "location": "Hoffman Drive west of Queens Boulevard",
      "name": "Hoffman Park",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.732677,
      "lng": -73.87223,
      "place_id": "ChIJn8nHyE5ewokRQl0AboAImmc"
   },
   {
      "location": "West 155 Street, 8 Avenue to Harlem River Drive",
      "name": "Holcombe Rucker",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.828884,
      "lng": -73.935615,
      "place_id": "ChIJi7evxHBcq1IRgyAeL53_xOo"
   },
   {
      "location": "Hall Place, Rogers Place, East 165 Street",
      "name": "Horseshoe Playground",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.824013,
      "lng": -73.897675,
      "place_id": "ChIJf1AYAlP0wokRoYMJmELhykY"
   },
   {
      "location": "Spofford Avenue, Hunts Point Avenue, Faile Street",
      "name": "Hunts Point Playground",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.814228,
      "lng": -73.885826,
      "place_id": "ChIJh2OF3wb1wokRlK6_7_a7YpE"
   },
   {
      "location": "Gaelic Field and Area around Salt Marsh West of Indian Road (at 218th Street)",
      "name": "Inwood Hill Park (Nature Center)",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.867714,
      "lng": -73.9212,
      "place_id": "ChIJd6eiHvfzwokRHALd9SLBP0c"
   },
   {
      "location": "Payson & Dyckman streets",
      "name": "Inwood Hill Park (Payson Playground)",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.867714,
      "lng": -73.9212,
      "place_id": "ChIJd6eiHvfzwokRHALd9SLBP0c"
   },
   {
      "location": "Tennis courts & ballfields along Seaman Avenue from 207th Street to 214th Street",
      "name": "Inwood Hill Park (Tennis Courts)",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.867714,
      "lng": -73.9212,
      "place_id": "ChIJd6eiHvfzwokRHALd9SLBP0c"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Ft. Washington & Haven avenues, West 173 Street",
      "name": "J. Hood Wright Park",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.846367,
      "lng": -73.94149,
      "place_id": "ChIJW8Q_N5_2wokREfZXoLWHIEA"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Malcolm X Boulevard between Chauncey and Marion streets",
      "name": "Jackie Robinson Park",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.680355,
      "lng": -73.92772,
      "place_id": "ChIJqR2g_HBcwokRyNmxhVvr6XE"
   },
   {
      "location": "West 149 Street & Bradhurst Avenue",
      "name": "Jackie Robinson Park",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.82429,
      "lng": -73.94217,
      "place_id": "ChIJgzplcn72wokRpwVCAYr77ls"
   },
   {
      "location": "Sullivan Place & Franklin Avenue, Montgomery Street",
      "name": "Jackie Robinson Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.66584,
      "lng": -73.95921,
      "place_id": "ChIJwcx0MnNbwokRsAaRzCD7IVI"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Stuyvesant & Lafayette avenues",
      "name": "Jesse Owens Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.691235,
      "lng": -73.932495,
      "place_id": "ChIJ_-XirgtcwokRcn75EiyhOlg"
   },
   {
      "handicap_accessible": "Yes",
      "location": "215 Place, south of 32 Avenue",
      "name": "John Golden Park",
      "borough": "Queens",
      "open_year_round": "No",
      "lat": 40.7743,
      "lng": -73.76765,
      "place_id": "ChIJcZJPfBKKwokRgRj3L03dXgE"
   },
   {
      "location": "Fort Hamilton Parkway, 94-95 streets",
      "name": "John J. Carty Park",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.613262,
      "lng": -74.03009,
      "place_id": "ChIJWXrh_odPwokRmhFHGTyQvxE"
   },
   {
      "location": "East 76-East 78 streets & Cherokee Place",
      "name": "John Jay Park & Pool",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.769306,
      "lng": -73.949394,
      "place_id": "ChIJEQ6kk8dYwokRVW7W8Xj-lqw"
   },
   {
      "location": "Shore Parkway, Fort Hamilton Parkway, 101 Street",
      "name": "John Paul Jones Park",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.611153,
      "lng": -74.03405,
      "place_id": "ChIJNeN18YZPwokREIx2z6hFJuM"
   },
   {
      "location": "Grand Central Parkway & 164 Place",
      "name": "Joseph Austin Playground",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.715847,
      "lng": -73.8011,
      "place_id": "ChIJEW3DieNgwokRy4_Fb_KsIaM"
   },
   {
      "location": "65 Place & Catalpa Avenue & 68 Avenue",
      "name": "Joseph F. Mafera Park",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.707176,
      "lng": -73.891525,
      "place_id": "ChIJcVQZ0IBewokRz7YTIHpEJns"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Lutheran Avenue; North and South Juniper boulevards; and the pathway from 76th Street on north end to 75th Street on south end",
      "name": "Juniper Valley Park",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.721127,
      "lng": -73.8846,
      "place_id": "ChIJwaaRmmdewokRTRadCEvkHnA"
   },
   {
      "location": "South of Gravesend Bay, southeast of Path, northeast of Neptune Avenue",
      "name": "Kaiser Park",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.579586,
      "lng": -73.99696,
      "place_id": "ChIJbwdQG7hFwokRA-1gKnCmC3E"
   },
   {
      "location": "East 93 Street & Lenox Road",
      "name": "Kennedy King Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.658615,
      "lng": -73.92205,
      "place_id": "ChIJo-7mx49cwokRIQd6l9bLO0o"
   },
   {
      "location": "Oak Avenue, 104th Street, & Kissena Lake Area",
      "name": "Kissena Park",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.746174,
      "lng": -73.80809,
      "place_id": "ChIJz0JyaUZgwokRaa65eFs4xX0"
   },
   {
      "handicap_accessible": "Yes",
      "location": "39 Drive & 54 Street",
      "name": "Lawerence Virgilio Playground",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.747448,
      "lng": -73.91081,
      "place_id": "ChIJq5MydB9fwokR7UA__nypHS0"
   },
   {
      "location": "CLF behind CS adjacent to 5th Avenue to 7th Avenue(Highway) between 66th and 67th Street",
      "name": "Leif Ericson Park & Square",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.6395739,
      "lng": -74.0141676,
      "place_id": "ChIJJ5otRLZ38ocRrYN14zm9Ke0"
   },
   {
      "location": "Jewett & Castleton avenues",
      "name": "Levy Playground",
      "borough": "Staten Island",
      "open_year_round": "Yes",
      "lat": 40.633904,
      "lng": -74.12904,
      "place_id": "ChIJaWCTkN5NwokRtLC663gfgSw"
   },
   {
      "location": "Buffalo Avenue/Protal Street/New York Avenue",
      "name": "Lincoln Terrace Park",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.667343,
      "lng": -73.92643,
      "place_id": "ChIJE9J4o4dcwokRHBEGAPmS6jw"
   },
   {
      "location": "Stanley Avenue, Linden Boulevard",
      "name": "Linden Park",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.658955,
      "lng": -73.887115,
      "place_id": "ChIJzZBlvAFdwokRTXrC3I_f9ds"
   },
   {
      "location": "104 Street & 41 Avenue",
      "name": "Linden Park",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.67347,
      "lng": -73.84479,
      "place_id": "ChIJ1TChq4tdwokRUn3Sih6oXnQ"
   },
   {
      "location": "Mill & Strickland avenues, 60 Street",
      "name": "Lindower Park",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.61231,
      "lng": -73.91136,
      "place_id": "ChIJy_FkuzhDwokRsB5JkGlLn0w"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Madison Street opposite Jefferson Street",
      "name": "Little Flower Playground",
      "borough": "Manhattan",
      "open_year_round": "No",
      "lat": 40.712395,
      "lng": -73.98842,
      "place_id": "ChIJzSG25itawokRo4CWpVi_CbE"
   },
   {
      "location": "88 Street, Atlantic-95 avenues",
      "name": "London Planetree Playground",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.686084,
      "lng": -73.853117,
      "place_id": "ChIJdd4hrwug2EcRmSrV3Vo6llI"
   },
   {
      "location": "Queens Boulevard between 62 Avenue & 62 Road",
      "name": "Lost Battalion Hall",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.73185,
      "lng": -73.86533,
      "place_id": "ChIJ00BqHzZewokRJzV4xkzXHxI"
   },
   {
      "location": "East 135 Street, Willis Avenue, Alexander Avenue",
      "name": "Lozada Playground",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.807877,
      "lng": -73.92505,
      "place_id": "ChIJgbaoOt31wokRNjCQaJIiiwI"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Pier 6, Victory Boulevard",
      "name": "Lyons Pool",
      "borough": "Staten Island",
      "open_year_round": "No",
      "lat": 40.637283,
      "lng": -74.07444,
      "place_id": "ChIJyUNPAM1PwokRXVq-XUSZmFs"
   },
   {
      "location": "East 161th Street & Ruppert Place",
      "name": "Macombs Dam Park",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.827545,
      "lng": -73.92977,
      "place_id": "ChIJscfYjyz0wokRzjhFjVCOmGk"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Olinville Avenue, Rosewood Street",
      "name": "Magenta Playground",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.873684,
      "lng": -73.86791,
      "place_id": "ChIJXS8UTmrzwokRqbVxAmixmFA"
   },
   {
      "location": "Beechwood & Cleveland avenues",
      "name": "Mahoney Playground",
      "borough": "Staten Island",
      "open_year_round": "Yes",
      "lat": 40.643402,
      "lng": -74.086006,
      "place_id": "ChIJOcDAVC5OwokRoqPzL_162BA"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Kissena Boulevard & Maple Avenue",
      "name": "Maple Playground",
      "borough": "Queens",
      "open_year_round": "No",
      "lat": 40.755924,
      "lng": -73.82601,
      "place_id": "ChIJrxvFvhNgwokR5XpjrtTEp8o"
   },
   {
      "location": "Marble Hill Avenue, West 230 Street, West 228 Street",
      "name": "Marble Hill Playground",
      "borough": "Bronx",
      "open_year_round": "No",
      "lat": 40.87752,
      "lng": -73.90824,
      "place_id": "ChIJISzAipPzwokRwO5kqaUgxg0"
   },
   {
      "location": "109 Avenue & 155 Street",
      "name": "Marconi Park",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.692673,
      "lng": -73.794876,
      "place_id": "ChIJ98nw9dVgwokRaWNY00zt5vc"
   },
   {
      "location": "Sterling Street & Empire Boulevard",
      "name": "Marc's & Jason's Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.6635039,
      "lng": -73.949556,
      "place_id": "ChIJMfr4JdC_UIgR5XXDKcDZMrY"
   },
   {
      "location": "Knickerbocker to Irving avenues, Starr to Suydam Streets",
      "name": "Maria Hernandez Park",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.70316,
      "lng": -73.9239,
      "place_id": "ChIJY1MdtBxcwokRB2pYGRyDdWs"
   },
   {
      "location": "Burnett Street between Avenue U and Avenue X/west of East 33rd Street",
      "name": "Marine Park",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.61199,
      "lng": -73.933044,
      "place_id": "ChIJQ4aauqBEwokRUUjtEmjfFg0"
   },
   {
      "handicap_accessible": "Yes",
      "location": "East 33rd Street and Avenue U",
      "name": "Marine Park Nature Center",
      "borough": "Brooklyn",
      "lat": 40.603966,
      "lng": -73.93057,
      "place_id": "ChIJoRNC_GNDwokRWOPeZcK6c-g"
   },
   {
      "location": "Scholes Street, Graham Avenue",
      "name": "Martinez Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.708977,
      "lng": -73.94425,
      "place_id": "ChIJw5Y_mf1bwokRbKDtoe42DhY"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Delancy Place, Muliner Avenue, Matthews Avenue",
      "name": "Mathew Muliner Playground",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.846886,
      "lng": -73.86148,
      "place_id": "ChIJIQeRMKP0wokRGXP_Wj5cjps"
   },
   {
      "location": "West 43 Street, 8 & 9 avenues",
      "name": "McCaffrey Playground",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.75895,
      "lng": -73.991325,
      "place_id": "ChIJ978QqVNYwokRJAZNUDHfxBY"
   },
   {
      "location": "Mcdonald Avenue, between avenues S & T",
      "name": "McDonald Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.600685,
      "lng": -73.97217,
      "place_id": "ChIJv-USG_pEwokRXoFXqO8V2uE"
   },
   {
      "location": "Avenue V between East 13 & East 14 streets",
      "name": "Mellett Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.59696,
      "lng": -73.95738,
      "place_id": "ChIJ3WEZbYtEwokR9Pn427UsDs4"
   },
   {
      "handicap_accessible": "Yes",
      "location": "West 123 Street & Morningside Avenue",
      "name": "Morningside Park",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.80509,
      "lng": -73.95913,
      "place_id": "ChIJZ9134BX2wokRt92hotTSVe0"
   },
   {
      "location": "Athletic Fields and Lawns from 114th Street to 110th Street along Manhattan Avenue, East of Upper Path",
      "name": "Morningside Park",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.80509,
      "lng": -73.95913,
      "place_id": "ChIJZ9134BX2wokRt92hotTSVe0"
   },
   {
      "location": "West 117 Street & Morningside Avenue",
      "name": "Morningside Playground",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.784065,
      "lng": -73.92547,
      "place_id": "ChIJlfpGnldfwokR6IvDn8ea1ms"
   },
   {
      "location": "Morris Avenue, College Avenue, Mc Clellan Street",
      "name": "Mott Playground",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.83132,
      "lng": -73.914856,
      "place_id": "ChIJ1x9KUDb0wokRCaD4kNu2dr4"
   },
   {
      "location": "Eastern Parkway, Underhill Avenue",
      "name": "Mt. Prospect Park",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.672714,
      "lng": -73.967255,
      "place_id": "ChIJd7iXmQlbwokR8dF5ivoy3_Y"
   },
   {
      "location": "21 Street, 45 Avenue, 11 Street, 45 Road",
      "name": "Murray Playground",
      "borough": "Queens",
      "open_year_round": "No",
      "lat": 40.747284,
      "lng": -73.948654,
      "place_id": "ChIJ3SO2MCZZwokR2jBo9akeoXA"
   },
   {
      "location": "West 166 Street, Nelson Avenue, Woodycrest Avenue",
      "name": "Nelson Playground",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.8349,
      "lng": -73.92698,
      "place_id": "ChIJoxkxny_0wokRbftzdtljYPQ"
   },
   {
      "location": "Newport Avenue & Osborn Street",
      "name": "Newport Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.700706,
      "lng": -73.994995,
      "place_id": "ChIJBTi92TlawokRh6j-HQvZTRg"
   },
   {
      "location": "Nobel Avenue, Bronx River Avenue, Bronx River Parkway, Cross Bronx Expressway",
      "name": "Noble Playground",
      "borough": "Bronx",
      "open_year_round": "No",
      "lat": 40.837254,
      "lng": -73.87223,
      "place_id": "ChIJlYZwuuz0wokRQTsIoURAxsE"
   },
   {
      "location": "Greenpoint & 47 avenues, 43 Street",
      "name": "Noonan Playground",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.7411,
      "lng": -73.92257,
      "place_id": "ChIJn7huI9pewokR2ocRiZBwz3I"
   },
   {
      "location": "Bergen Street, Rockaway Avenue, Dean Street",
      "name": "Ocean Hill Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.674416,
      "lng": -73.91219,
      "place_id": "ChIJ1y0nYV1cwokRw7RKVHndcho"
   },
   {
      "location": "Parkinson Avenue, Kramer Street",
      "name": "Old Town Playground",
      "borough": "Staten Island",
      "open_year_round": "Yes",
      "lat": 40.595417,
      "lng": -74.0816,
      "place_id": "ChIJ6SOGXeFOwokRbXhOdYmwOaM"
   },
   {
      "location": "Adelphi & Myrtle avenues",
      "name": "Oracle Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.693928,
      "lng": -73.97153,
      "place_id": "ChIJI7jB_rdbwokR3kqQ-U1p14A"
   },
   {
      "location": "West 156 Street & St. Nicholas Avenue",
      "name": "Wright Brothers Playground",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.831688,
      "lng": -73.941768,
      "place_id": "ChIJzYYnew9l3UcRkN1jgT7xCgQ"
   },
   {
      "location": "Westchester Avenue, Lane Avenue, East Tremont Avenue",
      "name": "Owen Dolen Recreation Center",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.840706,
      "lng": -73.84252,
      "place_id": "ChIJEzpEZrP0wokRFlUTHwKUrV8"
   },
   {
      "location": "Turnbull Avenue, Olmstead Avenue, Lafayette Avenue",
      "name": "P.O. Serrano Playground",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.823414,
      "lng": -73.850914,
      "place_id": "ChIJhaLRT9D0wokR2LUzeXAWSuk"
   },
   {
      "location": "Foster Avenue, East 40-41 streets",
      "name": "Paerdegat Park",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.63822,
      "lng": -73.938,
      "place_id": "ChIJ1VynuldbwokRlvbBjS2wM7Q"
   },
   {
      "location": "Berkeley Street & Lincoln Place",
      "name": "Park Slope Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.69041,
      "lng": -73.97058,
      "place_id": "ChIJ7Ro_3blbwokRX6lB9YrtwKA"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Arnow Avenue, Adee Avenue, Olinville Avenue",
      "name": "Parkside Playground",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.88834,
      "lng": -73.84083,
      "place_id": "ChIJHSOvpNSMwokR2FVMqiuYHlQ"
   },
   {
      "location": "Bruckner Boulevard, Eastchester Bay, Hutchinson",
      "name": "Pelham Bay Park (Bruckner Boulevard and Wilkinson Avenue)",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.84967,
      "lng": -73.833084,
      "place_id": "ChIJneRyRVaLwokRet03ScFfGyg"
   },
   {
      "location": "Bruckner Boulevard, Eastchester Bay, Hutchinson",
      "name": "Pelham Bay Park (Bruckner CS)",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.84967,
      "lng": -73.833084,
      "place_id": "ChIJneRyRVaLwokRet03ScFfGyg"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Bruckner Boulevard, Eastchester Bay, Hutchinson",
      "name": "Pelham Bay Park (Hunter Island Picnic Area)",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.84967,
      "lng": -73.833084,
      "place_id": "ChIJneRyRVaLwokRet03ScFfGyg"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Bruckner Expressway & Buhre Avenue",
      "name": "Pelham Bay Park (Playground for All Children)",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.84967,
      "lng": -73.833084,
      "place_id": "ChIJneRyRVaLwokRet03ScFfGyg"
   },
   {
      "handicap_accessible": "Yes",
      "location": "West End Avenue & West 70 Street",
      "name": "Playground 70",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.768486,
      "lng": -73.9772,
      "place_id": "ChIJyVaLsvZYwokRIDVJ-GYzaCg"
   },
   {
      "location": "East 109 Street between 2 & 3 avenues",
      "name": "Poor Richard's Playground",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.79268,
      "lng": -73.94287,
      "place_id": "ChIJyRyD6QP2wokR-i-lN9sczfA"
   },
   {
      "location": "Tompkins Avenue & Halsey Street",
      "name": "Potomac Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.68209,
      "lng": -73.94425,
      "place_id": "ChIJK0__Do9bwokRGr9FCPECNJI"
   },
   {
      "location": "Hylan Boulevard & Huguenot Avenue",
      "name": "Prescott Playground",
      "borough": "Staten Island",
      "open_year_round": "Yes",
      "lat": 40.5227,
      "lng": -74.186195,
      "place_id": "ChIJ17cftpNKwokRK-9UhgFp63c"
   },
   {
      "location": "Argyle Road/Parade Place./Parkside Avenue/Caton Avenue",
      "name": "Prospect Park (East Parade Grounds)",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.650845,
      "lng": -73.96861,
      "place_id": "ChIJy7rj9TxbwokRMXUF-M8IKm8"
   },
   {
      "location": "Prospect Park West/3rd Street/7th Street",
      "name": "Prospect Park (Litchfield Villa)",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.666973,
      "lng": -73.97378,
      "place_id": "ChIJ7WeoBgVbwokRz3H_YxwUsgw"
   },
   {
      "location": "Coney Island Avenue/Arglye Road/Parkside Avenue/Caton Avenue",
      "name": "Prospect Park (West Parade Grounds)",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.650845,
      "lng": -73.96861,
      "place_id": "ChIJy7rj9TxbwokRMXUF-M8IKm8"
   },
   {
      "location": "Lincoln Road/Ocean Avenue/Willink Entrance/East Lake Drive",
      "name": "Prospect Park (Willink Hill)",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.661667,
      "lng": -73.96389,
      "place_id": "ChIJofiGRxJbwokRKBnXiDcuBiU"
   },
   {
      "location": "Lincoln Road/Ocean Avenue/Willink Entrance/East Lake Drive",
      "name": "Prospect Park (Willink Hill)",
      "borough": "Brooklyn",
      "open_year_round": "No",
      "lat": 40.661667,
      "lng": -73.96389,
      "place_id": "ChIJofiGRxJbwokRKBnXiDcuBiU"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Quarry Road, East 181 Street, Oak Place & Hughes Avenue",
      "name": "Quarry Ballfields",
      "borough": "Bronx",
      "open_year_round": "No",
      "lat": 40.851025,
      "lng": -73.89097,
      "place_id": "ChIJ3ShDMX30wokR92v0ag6TVq0"
   },
   {
      "location": "Little Neck Parkway, Commonwealth Boulevard, south of Grand Central Parkway",
      "name": "Queens Farm Museum",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.747917,
      "lng": -73.72282,
      "place_id": "ChIJ97dFr3JiwokRbeAyMsBwcnA"
   },
   {
      "location": "21 Street, Bridge Plaza, Vernon Boulevard, East River",
      "name": "Queensbridge Park",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.756725,
      "lng": -73.94884,
      "place_id": "ChIJOzs_bdpYwokRptRUx_jDQMs"
   },
   {
      "location": "Dawson Street, Beck Street, Kelly Street, Intervale Avenue, Longwood Avenue",
      "name": "Rainey Park",
      "borough": "Bronx",
      "open_year_round": "No",
      "lat": 40.81912,
      "lng": -73.8974,
      "place_id": "ChIJ73A_U6z1wokRm2a7OPx29mk"
   },
   {
      "location": "Vernon Boulevard, 33 Road, 34 Street, East River",
      "name": "Rainey Park",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.76607,
      "lng": -73.94076,
      "place_id": "ChIJLSDuystYwokRJXBFXaPXZkc"
   },
   {
      "location": "Randall Avenue, Castle Hill Avenue",
      "name": "Randall Playground",
      "borough": "Bronx",
      "open_year_round": "No",
      "lat": 40.819286,
      "lng": -73.84953,
      "place_id": "ChIJnZhwxtb0wokRXm-DzI4eD4Q"
   },
   {
      "location": "Otsego, Bay, Hicks, Lorraine, Court, Halleck streets",
      "name": "Red Hook Park",
      "borough": "Brooklyn",
      "open_year_round": "No",
      "lat": 40.672276,
      "lng": -74.00402,
      "place_id": "ChIJlWggH_NawokRkXIEHLE0Jyo"
   },
   {
      "location": "Columbia and Bay streets, southeast of \"Halleck Street\" Sidewalk and northeast of \"Henry Street\" Sidewalk",
      "name": "Red Hook Park",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.672276,
      "lng": -74.00402,
      "place_id": "ChIJlWggH_NawokRkXIEHLE0Jyo"
   },
   {
      "location": "King, Richards, & Dwight Streets",
      "name": "Red Hook Park (Coffey Park Playground)",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.67728,
      "lng": -74.009445,
      "place_id": "ChIJv4cTh4tawokRQFmjdeb5YyI"
   },
   {
      "location": "Otsego, Bay, Hicks, Lorraine, Court, Halleck streets",
      "name": "Red Hook Park (Recreation Center)",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.672276,
      "lng": -74.00402,
      "place_id": "ChIJlWggH_NawokRkXIEHLE0Jyo"
   },
   {
      "location": "Fresh Pond Road, 63 Street, 59 Drive",
      "name": "Reiff Playground",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.71866,
      "lng": -73.90163,
      "place_id": "ChIJOTmx9pFewokRx8Pn2d3TiZ4"
   },
   {
      "location": "Rev. James Polite Avenue, Intervale Avenue, East 167 Street",
      "name": "Rev. Polite Playground",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.82721,
      "lng": -73.89685,
      "place_id": "ChIJWYenZFH0wokRJk4bl4znFl4"
   },
   {
      "location": "East 226 Street, Barnes Avenue, East 225 Street",
      "name": "Rienzi Playground",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.887676,
      "lng": -73.85863,
      "place_id": "ChIJeZ8RiSTzwokRxcMg921M-VQ"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Bailey Avenue, West Kingsbridge Road",
      "name": "Riverbend Playground",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.871883,
      "lng": -73.905945,
      "place_id": "ChIJHaU2A47zwokRxDg1NdIX_bQ"
   },
   {
      "location": "Riverside Drive to Hudson River, West 59th Street to Clair Place",
      "name": "Riverside Park (Boat Basin)",
      "borough": "Manhattan",
      "open_year_round": "No",
      "lat": 40.7857406,
      "lng": -73.9844978,
      "place_id": "ChIJu330f9-m3IAR6ApeEwXXofc"
   },
   {
      "handicap_accessible": "Yes",
      "location": "105th Street, next to Henry Hudson Parkway",
      "name": "Riverside Park (Café)",
      "borough": "Manhattan",
      "open_year_round": "No",
      "lat": 40.801947,
      "lng": -73.973044,
      "place_id": "ChIJu330f9-m3IAR6ApeEwXXofc"
   },
   {
      "location": "72nd to 79th streets between Hudson River and Henry Hudson Parkway",
      "name": "Riverside Park (Classic Playground)",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.784042,
      "lng": -73.985980,
      "place_id": "ChIJu330f9-m3IAR6ApeEwXXofc"
   },
   {
      "location": "West 97 Street & Riverside Drive",
      "name": "Riverside Park (Dinosaur Playground)",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.797175,
      "lng": -73.975091,
      "place_id": "ChIJu330f9-m3IAR6ApeEwXXofc"
   },
   {
      "location": "West 91 Street & Riverside Drive",
      "name": "Riverside Park (Hippo Playground)",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.793441,
      "lng": -73.978858,
      "place_id": "ChIJu330f9-m3IAR6ApeEwXXofc"
   },
   {
      "location": "West 76 Street & Riverside Drive",
      "name": "Riverside Park (Neufeld Playground)",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.783955,
      "lng": -73.986104,
      "place_id": "ChIJu330f9-m3IAR6ApeEwXXofc"
   },
   {
      "location": "West 83 Street & Riverside Drive",
      "name": "Riverside Park (River Run Playground)",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.787103,
      "lng": -73.982183,
      "place_id": "ChIJu330f9-m3IAR6ApeEwXXofc"
   },
   {
      "location": "West 142 Street & Riverside Drive",
      "name": "Riverside Park (Riverbank Playground)",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.8241473,
      "lng": -73.9526712,
      "place_id": "ChIJu330f9-m3IAR6ApeEwXXofc"
   },
   {
      "location": "Riverside Drive & West 96th Street",
      "name": "Riverside Park (Tennis Courts)",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.81206,
      "lng": -73.96528,
      "place_id": "ChIJk-gMVD_2wokRyzf3J8AjnYU"
   },
   {
      "location": "1 Avenue, East 41 to East 42 streets",
      "name": "Robert Moses Playground",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.748047,
      "lng": -73.96923,
      "place_id": "ChIJObfdnxxZwokRExJ3Sgs2B0g"
   },
   {
      "location": "Between 87th Street and 100th Street",
      "name": "Rockaway Beach",
      "borough": "Queens",
      "open_year_round": "No",
      "lat": 40.586723,
      "lng": -73.8115,
      "place_id": "ChIJoxE3NnZowokRlTnWRcMzxOU"
   },
   {
      "location": "Between 100th Street and 110th Street",
      "name": "Rockaway Beach",
      "borough": "Queens",
      "open_year_round": "No",
      "lat": 40.586723,
      "lng": -73.8115,
      "place_id": "ChIJoxE3NnZowokRlTnWRcMzxOU"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Beach 106 Street",
      "name": "Rockaway Beach 106 Comfort Station",
      "borough": "Queens",
      "lat": 40.586723,
      "lng": -73.8115,
      "place_id": "ChIJoxE3NnZowokRlTnWRcMzxOU"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Beach 86 Street",
      "name": "Rockaway Beach 86 Comfort Station",
      "borough": "Queens",
      "lat": 40.586723,
      "lng": -73.8115,
      "place_id": "ChIJoxE3NnZowokRlTnWRcMzxOU"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Beach 97 Street",
      "name": "Rockaway Beach 97 Comfort Station",
      "borough": "Queens",
      "lat": 40.586723,
      "lng": -73.8115,
      "place_id": "ChIJoxE3NnZowokRlTnWRcMzxOU"
   },
   {
      "location": "Rodney, South 3 & South 4 streets",
      "name": "Rodney Playground South",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.709785,
      "lng": -73.95591,
      "place_id": "ChIJ-VCfr-FbwokRSuWf5yA6fGg"
   },
   {
      "location": "Southeast of fence running from 118th Road to hospital",
      "name": "Roy Wilkins Recreation Center",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.688076,
      "lng": -73.77017,
      "place_id": "ChIJCUlB4EphwokRSmxfemFzqmg"
   },
   {
      "location": "Jamaica Avenue, 153 Street, 89 Avenue, 150 Street",
      "name": "Rufus King Park",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.703915,
      "lng": -73.80404,
      "place_id": "ChIJ0WeVdNtgwokR37KJk1s7Szw"
   },
   {
      "location": "Avenue P, Bay Parkway, West 12 Street",
      "name": "Seth Low Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.60811,
      "lng": -73.986305,
      "place_id": "ChIJpylQ5xxFwokRvefLlEI0444"
   },
   {
      "location": "West 135 Street, Independence Avenue, West 232 Street",
      "name": "Seton Park",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.88594,
      "lng": -73.91651,
      "place_id": "ChIJ5zUuqcHzwokRF5DJbc4ourU"
   },
   {
      "location": "Owl's Head Park to Fort Hamilton Parkway Narrows Avenue",
      "name": "Shore Road Park",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.628002,
      "lng": -74.03997,
      "place_id": "ChIJ-co5iPRPwokR38_7atc6LmU"
   },
   {
      "location": "72nd Street to Harbor View",
      "name": "Shore Road Park",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.628002,
      "lng": -74.03997,
      "place_id": "ChIJ-co5iPRPwokR38_7atc6LmU"
   },
   {
      "location": "92nd Street to 4 Avenue - lower half, by expressway",
      "name": "Shore Road Park",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.628002,
      "lng": -74.03997,
      "place_id": "ChIJ-co5iPRPwokR38_7atc6LmU"
   },
   {
      "location": "92nd Street to 4 Avenue - upper half, by road",
      "name": "Shore Road Park",
      "borough": "Brooklyn",
      "open_year_round": "No",
      "lat": 40.628002,
      "lng": -74.03997,
      "place_id": "ChIJ-co5iPRPwokR38_7atc6LmU"
   },
   {
      "location": "Victory Boulevard, Clove Road, Forest Avenue",
      "name": "Silver Lake Park",
      "borough": "Staten Island",
      "open_year_round": "Yes",
      "lat": 40.627666,
      "lng": -74.093254,
      "place_id": "ChIJKxhR-EJOwokR2BG8WGpYJZE"
   },
   {
      "location": "East 183 Street, Ryer Avenue, Valentine Avenue",
      "name": "Slattery Playground",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.857315,
      "lng": -73.89832,
      "place_id": "ChIJhzGamnn0wokRwvO307JC8k8"
   },
   {
      "location": "6 Avenue Bet 18 & 19 Sts",
      "name": "Slope Park",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.664764,
      "lng": -73.982185,
      "place_id": "ChIJiyYWQh1bwokR0UAUI-D9hQY"
   },
   {
      "location": "Columbus Avenue, West 91 to West 92 streets, Central Park West",
      "name": "Sol Bloom Playground",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.789574,
      "lng": -73.96877,
      "place_id": "ChIJE7dN-pxYwokRlMjrqn1gsA4"
   },
   {
      "location": "Broadway, Henry Street, Samuel Dickstein Place",
      "name": "Sol Lain Playground",
      "borough": "Manhattan",
      "open_year_round": "No",
      "lat": 40.7142,
      "lng": -73.983894,
      "place_id": "ChIJH61mxipawokRP0XLHwtDZGo"
   },
   {
      "location": "Metcalf Avenue between Seward and Randall avenues",
      "name": "Soundview Park Playground",
      "borough": "Bronx",
      "open_year_round": "No",
      "lat": 40.82221,
      "lng": -73.85973,
      "place_id": "ChIJTbgkCdz0wokRke1wGEDo6_U"
   },
   {
      "location": "Natural Area and Boardwalk from Sands Lane to Vulcan Street, East of Father Capodanno Boulevard",
      "name": "South Beach",
      "borough": "Staten Island",
      "open_year_round": "Yes",
      "comments": "This facility is currently closed",
      "lat": 40.5829,
      "lng": -74.07386,
      "place_id": "ChIJSVX5zthOwokRYYERkRLbDr8"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Quintard St Bet. Quincy Ave & Father Capodanno Blvd",
      "name": "South Beach Wetlands",
      "borough": "Staten Island",
		"open_year_round": "Yes",
      "lat": 40.58692,
      "lng": -74.072975,
      "place_id": "ChIJDS-XCSFPwokRSWNMtP98rMo"
   },
   {
      "location": "Streetory Avenue, Bolton Avenue, Lafayette Avenue, Underhill Avenue",
      "name": "Space Time Playground",
      "borough": "Bronx",
      "open_year_round": "No",
      "lat": 40.82221,
      "lng": -73.85973,
      "place_id": "ChIJTbgkCdz0wokRke1wGEDo6_U"
   },
   {
      "location": "Atlantic Avenue & Elton Street",
      "name": "Sperandeo Brothers Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.677143,
      "lng": -73.88436,
      "place_id": "ChIJSSmjDLRdwokRPchh8CoFdyc"
   },
   {
      "location": "149 Avenue, Springfield Boulevard, 145 Road, 148 Street",
      "name": "Springfield Park",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.66107,
      "lng": -73.76176,
      "place_id": "ChIJzW9kppdmwokRF46wqamCPKw"
   },
   {
      "location": "West 129 & 7 Avenue",
      "name": "St Nicholas Park South",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.817917,
      "lng": -73.94954,
      "place_id": "ChIJ0zHAy2_2wokROHSUG_3UnEw"
   },
   {
      "location": "174 Street & 113 Avenue",
      "name": "St. Albans Park (174 Street Playground)",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.692911,
      "lng": -73.779042,
      "place_id": "ChIJCcmT56A4dkgRWUCmRoCE7HE"
   },
   {
      "location": "Atlantic Avenue & Herkimer Street",
      "name": "St. Andrew's Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.67856,
      "lng": -73.94223,
      "place_id": "ChIJV5Qp3IVbwokR6rMX0ta2m_s"
   },
   {
      "location": "East 67-68 streets, 1 Avenue",
      "name": "St. Catherine's Park",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.765057,
      "lng": -73.95857,
      "place_id": "ChIJbQ05bcJYwokRd3y182keOmk"
   },
   {
      "location": "St. Anns Avenue & East 147 Street",
      "name": "St. Mary's Park West",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.81099,
      "lng": -73.911736,
      "place_id": "ChIJ2WRPfsf1wokRIMcB__ZIV1A"
   },
   {
      "location": "West 133 Street & St. Nicholas Avenue",
      "name": "St. Nicholas Park",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.817917,
      "lng": -73.94954,
      "place_id": "ChIJ0zHAy2_2wokROHSUG_3UnEw"
   },
   {
      "location": "West 129 Street & St. Nicholas Terrace",
      "name": "St. Nicholas Park",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.817917,
      "lng": -73.94954,
      "place_id": "ChIJ0zHAy2_2wokROHSUG_3UnEw"
   },
   {
      "handicap_accessible": "Yes",
      "location": "East 35-East 36 streets, between 1 & 2 avenues",
      "name": "St. Vartan Park",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.74497,
      "lng": -73.97363,
      "place_id": "ChIJ61QpcwVZwokRKRSfanl07Ro"
   },
   {
      "handicap_accessible": "Yes",
      "location": "East 96-97 streets & FDR Drive",
      "name": "Stanley Isaacs",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.781387,
      "lng": -73.945,
      "place_id": "ChIJvzdZrK9YwokRmb50mxB1xtU"
   },
   {
      "location": "Baychester Avenue, Crawford Avenue",
      "name": "Stars & Stripes Playground",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.885244,
      "lng": -73.839517,
      "place_id": "ChIJjUU5_NDGlzMRbf6wdCtl6To"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Montrose Avenue, Boerum, Lorimer, Leonard streets",
      "name": "Sternberg Park",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.706486,
      "lng": -73.94737,
      "place_id": "ChIJG3vIsfxbwokRo3p8VMxvdyY"
   },
   {
      "location": "Marcy & Park avenues",
      "name": "Stockton Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.697243,
      "lng": -73.948654,
      "place_id": "ChIJHzryPO5bwokRKe0DigCMbn0"
   },
   {
      "location": "Classon Avenue & Sterling Place",
      "name": "Stroud Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.674812,
      "lng": -73.96192,
      "place_id": "ChIJ5SJZUKBbwokR4n40uLZYgew"
   },
   {
      "location": "41 to 44 streets, 5 to 7 avenues",
      "name": "Sunset Park",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.64553,
      "lng": -74.01238,
      "place_id": "ChIJfWVm5LNawokRMvYNqC6zPgg"
   },
   {
      "location": "41 to 44 streets, 5 to 7 avenues",
      "name": "Sunset Park (Recreation Center)",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.64665,
      "lng": -74.00229,
      "place_id": "ChIJZ_TgIMlawokReqA6Y5yTda4"
   },
   {
      "location": "Guerlain Street, Thieriot Avenue, Taylor Avenue",
      "name": "Taylor Playground",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.83913,
      "lng": -73.86598,
      "place_id": "ChIJezW6epX0wokRNSLCSBCDGkU"
   },
   {
      "location": "West 77 Street & Amsterdam Avenue",
      "name": "Tecumseh Playground",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.781727,
      "lng": -73.97868,
      "place_id": "ChIJq9Bh4IhYwokRSUs2Oq1vU_Y"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Howard Avenue & Martha Street",
      "name": "Terrace Playground",
      "borough": "Staten Island",
      "open_year_round": "Yes",
      "lat": 40.613586,
      "lng": -74.09849,
      "place_id": "ChIJj1jOj19OwokRXVpW02Ba9IM"
   },
   {
      "location": "Tratman Avenue, Street Peter's Avenue",
      "name": "The Pearly Gates",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.83874,
      "lng": -73.84549,
      "place_id": "ChIJ0xMJerT0wokR7oAeKNhix3I"
   },
   {
      "location": "1 Avenue to FDR Drive, East 111 to East 114 streets",
      "name": "Thomas Jefferson Park",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.793365,
      "lng": -73.93525,
      "place_id": "ChIJMwj--v31wokR1R54vRBAyNs"
   },
   {
      "location": "Tiffany Street, Fox Street, East 167 Street",
      "name": "Tiffany Playground",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.82477,
      "lng": -73.89437,
      "place_id": "ChIJybxjcVT0wokR184gVd3hmC8"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Evergreen Avenue & Eldert Street",
      "name": "Tiger Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.688217,
      "lng": -73.91103,
      "place_id": "ChIJg4GPNT5cwokRYypKonHZ1Ek"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Schmidts Lane & Manor Road",
      "name": "Todt Hill Playground",
      "borough": "Staten Island",
      "open_year_round": "Yes",
      "lat": 40.601433,
      "lng": -74.10344,
      "place_id": "ChIJN7S95ZdOwokRaVpMnuYk9xE"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Avenues A to B, East 7 to East 10 streets",
      "name": "Tompkins Square Park",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.726376,
      "lng": -73.98177,
      "place_id": "ChIJDY-I6ndZwokRTyVjfDd4GXA"
   },
   {
      "location": "Corner of East 175 Street & Arthur Avenue",
      "name": "Tremont Park Playground",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.84281,
      "lng": -73.89171,
      "place_id": "ChIJa8gw_2D0wokRiw47NWNqELs"
   },
   {
      "location": "Underhill Avenue & Prospect Place",
      "name": "Underhill Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.676716,
      "lng": -73.96577,
      "place_id": "ChIJwfAMzqZbwokRj7xQGEaMA8A"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Lafayette & Waverly avenues",
      "name": "Underwood Park",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.688625,
      "lng": -73.96629,
      "place_id": "ChIJuYa4WLlbwokRuvf6ohlrlPg"
   },
   {
      "location": "Broadway to 4 Avenue, East 14 Street to East 17 streets",
      "name": "Union Square Park",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.73594,
      "lng": -73.990395,
      "place_id": "ChIJuwazLZ9ZwokRoDhp6p5_XCo"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Broadway, Jerome Avenue, City Line, Van Cortlandt Park South",
      "name": "Van Cortlandt Park (Indian Field)",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.896496,
      "lng": -73.878296,
      "place_id": "ChIJwfwrwQLzwokRViHMlXDBjcY"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Spring & Thompson streets",
      "name": "Vesuvio Playground",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.725254,
      "lng": -74.00266,
      "place_id": "ChIJy4wBT4xZwokRlPlUcvHPRBE"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Vyse & Daly avenues between West 179-180 streets",
      "name": "Vidalia Park",
      "borough": "Bronx",
      "open_year_round": "No",
      "lat": 40.844227,
      "lng": -73.88117,
      "place_id": "ChIJ-V7II4z0wokROHkh2ylfg6U"
   },
   {
      "location": "Virginia Avenue, McGraw Avenue, Cross Bronx Expressway, White Plains Road",
      "name": "Virginia Playground",
      "borough": "Bronx",
      "open_year_round": "No",
      "lat": 40.8342,
      "lng": -73.86221,
      "place_id": "ChIJ_fcpAMH0wokRl84qBCXrplY"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Vleigh Place & 141 Street",
      "name": "Vleigh Place Playground",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.718155,
      "lng": -73.820404,
      "place_id": "ChIJUZejcpNgwokRbdZHtWirGYA"
   },
   {
      "location": "Matilda Avenue, East 239 Street, Carpenter Avenue",
      "name": "Wakefield Playground",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.90181,
      "lng": -73.854675,
      "place_id": "ChIJgfCXY9rywokRQkKv-8EZO1k"
   },
   {
      "handicap_accessible": "Yes",
      "location": "Park, Washington avenues to Hall Street",
      "name": "Washington Hall Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.695476,
      "lng": -73.966657,
      "place_id": "ChIJW-T2Wt7Gt4kRKl2I1CJFUsI"
   },
   {
      "location": "5 Avenue, Waverly Place, West 4 & MacDougal streets.",
      "name": "Washington Square Park",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.7312823,
      "lng": -73.997949,
      "place_id": "ChIJW-T2Wt7Gt4kRKl2I1CJFUsI"
   },
   {
      "location": "Gleason Avenue, Rosedale Avenue, Watson Avenue, Nobel Avenue",
      "name": "Watson Gleason Playground",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.828457,
      "lng": -73.86892,
      "place_id": "ChIJhamvj-j0wokRfUVaT_4mkNU"
   },
   {
      "handicap_accessible": "Yes",
      "location": "E. 188 St. Bet. Webster Ave. And Park Ave.",
      "name": "Webster Playground",
      "borough": "Bronx",
      "lat": 40.859543,
      "lng": -73.8929,
      "place_id": "ChIJhw3ObH_0wokR6OaLR0qsneE"
   },
   {
      "location": "West 59 to West 60 streets, Amsterdam to West End avenues",
      "name": "Gertrude Ederle Recreation Center & Pool",
      "borough": "Manhattan",
      "open_year_round": "Yes",
      "lat": 40.7711104,
      "lng": -73.988662,
      "place_id": "ChIJwehykPGUtocRMZyyQ-1g2yI"
   },
   {
      "location": "W 8 St.",
      "name": "West 8nd Street CS",
      "borough": "Brooklyn",
      "lat": 40.576805,
      "lng": -73.97642,
      "place_id": "ChIJKcyK7UlEwokRhO_wirCD14o"
   },
   {
      "location": "12 Avenue & 153 Street",
      "name": "Whitestone Playground (PS 193)",
      "borough": "Queens",
      "open_year_round": "Yes",
      "lat": 40.792046,
      "lng": -73.809555,
      "place_id": "ChIJPyY-ve2KwokRJBcRvkPYaro"
   },
   {
      "location": "Wythe Avenue, Berry & Grand streets",
      "name": "William Sheridan Playground",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.715195,
      "lng": -73.96409,
      "place_id": "ChIJF2xbnmFZwokRaTdxnUu1lIw"
   },
   {
      "location": "Reservoir Oval East, Reservoir Oval West, Reservoir Place, Putnam Place, Bainbridge Avenue, Wayne Avenue, Tryon Avenue, Holt Place, Van Cortlandt Avenue",
      "name": "Williamsbridge Oval",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.87791,
      "lng": -73.877556,
      "place_id": "ChIJe5iiqHLzwokRW5FP5WoZjEE"
   },
   {
      "location": "East 139 Street, East 140 Street, Willis & Alexander avenues",
      "name": "Willis Playground",
      "borough": "Bronx",
      "open_year_round": "Yes",
      "lat": 40.810955,
      "lng": -73.922844,
      "place_id": "ChIJJRufocT1wokRw7bHF2mftYI"
   },
   {
      "location": "Richmond Avenue To Victory Boulevard",
      "name": "Willowbrook Park",
      "borough": "Staten Island",
      "open_year_round": "Yes",
      "lat": 40.600563,
      "lng": -74.15811,
      "place_id": "ChIJjd5CmEJMwokR3q_qsj1h3Dk"
   },
   {
      "location": "Brooklyn Avenue & Rutland Road",
      "name": "Wingate Park",
      "borough": "Brooklyn",
      "open_year_round": "Yes",
      "lat": 40.658596,
      "lng": -73.94425,
      "place_id": "ChIJ8RsP-2RbwokRJHjpdE5xO-w"
   },
   {
      "location": "Britton Street, Barker Avenue, Olinville Avenue",
      "name": "Zimmerman Playground",
      "borough": "Bronx",
      "open_year_round": "No",
      "lat": 40.866177,
      "lng": -73.86874,
      "place_id": "ChIJCXtWMWbzwokRM8yJf_yNzbU"
   }
] ;

function initMap() {
	var uluru = {lat: -25.363, lng: 131.044};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 4,
		center: uluru
	});
	var marker = new google.maps.Marker({
		position: uluru,
		map: map
	});
}
