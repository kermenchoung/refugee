(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=88)})({88:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(89);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},89:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts, Inc.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts, Inc.
 * @meta package_map_pack
 * @id fusionmaps.CentralAfrica.20.12-18-2012 07:30:23
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"CentralAfrica",revision:20,standaloneInit:true,baseWidth:348,baseHeight:573,baseScaleFactor:10,entities:{40:{outlines:[[M,2115,4241,Q,2097,4241,2081,4243,2061,4246,2061,4230,2061,4224,2056,4208,2043,4184,2002,4172,1988,4176,1973,4177,1955,4178,1938,4181,1934,4182,1917,4186,1897,4192,1890,4202,1877,4218,1865,4247,1859,4258,1851,4280,1849,4284,1834,4295,1830,4298,1813,4303,1756,4309,1684,4307,1670,4302,1654,4305,1636,4308,1620,4294,1605,4293,1598,4285,1595,4280,1589,4266,1572,4244,1563,4207,1561,4199,1548,4178,1544,4156,1526,4133,1521,4111,1504,4093,1504,4083,1486,4068,1477,4056,1469,4041,1459,4025,1427,4029,1419,4030,1410,4028,1381,4021,1353,4020,1290,4019,1228,4021,1178,4024,1126,4023,1104,4021,1080,4020,1064,4020,1052,4025,1046,4028,1030,4033,1016,4038,995,4035,965,4030,954,4052,940,4078,922,4094,926,4104,929,4115,934,4144,921,4155,911,4162,914,4184,916,4193,917,4201,936,4227,957,4251,970,4264,973,4269,979,4278,988,4280,995,4318,996,4349,997,4368,998,4389,1e3,4420,1002,4451,1e3,4468,1006,4475,1013,4500,1012,4525,1012,4570,1020,4630,1030,4637,1035,4660,1062,4674,1078,4718,1085,4773,1077,4821,1074,4832,1066,4856,1063,4866,1062,4878,1059,4898,1048,4913,1024,4942,1002,4980,998,4985,987,4999,982,5007,972,5008,954,5011,942,5019,938,5023,925,5036,903,5054,890,5086,875,5096,874,5111,873,5120,872,5128,870,5150,866,5185,864,5232,865,5281,866,5300,850,5316,842,5336,831,5345,823,5352,822,5366,822,5375,819,5384,809,5418,811,5468,796,5494,799,5526,801,5546,803,5567,862,5565,910,5565,928,5564,931,5549,958,5522,979,5518,1006,5520,1022,5524,1066,5550,1085,5572,1099,5590,1131,5586,1250,5588,1359,5588,1469,5588,1580,5588,1629,5588,1676,5594,1694,5615,1722,5635,1744,5650,1763,5660,1830,5662,1887,5660,1896,5660,1904,5655,1936,5650,1961,5653,2020,5656,2075,5656,2105,5656,2133,5671,2171,5679,2200,5686,2222,5689,2240,5688,2249,5687,2257,5686,2269,5668,2277,5660,2296,5647,2309,5647,2328,5647,2345,5614,2315,5589,2291,5554,2258,5523,2229,5496,2211,5465,2202,5439,2200,5399,2203,5372,2210,5322,2210,5270,2211,5167,2214,5065,2217,5046,2219,5031,2247,5016,2275,5012,2360,5008,2434,5006,2456,5004,2464,4999,2485,4990,2486,4980,2494,4925,2492,4866,2491,4818,2491,4770,2492,4759,2496,4751,2503,4736,2497,4701,2478,4713,2457,4728,2406,4730,2355,4731,2328,4731,2309,4747,2303,4752,2290,4756,2274,4739,2252,4740,2229,4742,2223,4718,2229,4705,2247,4697,2257,4691,2258,4684,2258,4662,2259,4639,2259,4623,2250,4612,2243,4604,2235,4597,2215,4580,2209,4537,2209,4475,2185,4417,2182,4397,2184,4377,2185,4365,2203,4358,2215,4347,2209,4310,2201,4291,2192,4260,2188,4255,2176,4245,Q,2146,4241,2115,4241,Z]],label:"Angola",shortLabel:"AO",labelPosition:[164.9,485.4],labelAlignment:[CEN,MID]},45:{outlines:[[M,1152,1523,Q,1149,1548,1168,1581,1184,1587,1194,1608,1203,1628,1197,1668,1178,1695,1121,1691,1100,1698,1073,1737,1058,1751,1054,1773,1051,1785,1044,1794,1028,1812,1016,1841,1008,1860,991,1886,989,1932,990,1977,990,1995,971,2011,973,2037,965,2069,954,2072,932,2084,916,2086,907,2107,905,2111,895,2125,895,2147,886,2164,881,2174,880,2182,878,2204,864,2222,837,2258,824,2301,822,2310,821,2318,820,2361,770,2356,751,2339,728,2330,690,2290,625,2279,593,2273,571,2298,568,2301,558,2314,549,2322,543,2329,540,2333,532,2345,524,2356,513,2360,487,2369,475,2392,475,2404,466,2409,456,2416,456,2426,456,2435,451,2449,449,2472,447,2495,446,2508,441,2532,431,2546,417,2581,401,2592,393,2620,407,2625,421,2632,431,2643,441,2650,460,2676,479,2691,489,2699,499,2707,515,2716,523,2719,551,2742,556,2767,557,2826,553,2875,551,2884,548,2894,542,2906,538,2921,534,2927,532,2933,662,2931,795,2941,840,2929,871,2941,950,2943,1029,2951,1034,2951,1039,2952,1054,2940,1069,2941,1088,2944,1108,2946,1169,2965,1228,2963,1273,2961,1319,2962,1336,2962,1354,2970,1389,2977,1406,2993,1453,3004,1442,2968,1438,2958,1430,2952,1423,2945,1425,2927,1424,2919,1423,2910,1421,2881,1423,2853,1423,2851,1423,2850,1389,2856,1385,2837,1380,2820,1370,2813,1362,2807,1351,2798,1334,2784,1327,2766,1322,2756,1314,2749,1289,2708,1267,2689,1254,2676,1251,2671,1241,2651,1230,2634,1222,2563,1220,2506,1219,2469,1229,2438,1234,2400,1241,2375,1257,2361,1265,2349,1271,2341,1277,2333,1282,2311,1294,2295,1298,2267,1305,2255,1311,2242,1313,2240,1319,2236,1334,2226,1329,2215,1302,2210,1304,2180,1294,2143,1287,2120,1282,2089,1263,2070,1227,2055,1216,2033,1206,2022,1203,2017,1197,2001,1192,1993,1172,1988,1164,1967,1168,1933,1172,1921,1184,1910,1191,1901,1199,1900,1216,1897,1244,1895,1256,1890,1268,1889,1282,1886,1303,1882,1325,1871,1313,1837,1291,1833,1276,1807,1264,1732,1265,1644,1248,1622,1253,1591,1256,1560,1228,1540,1211,1537,1202,1517,1199,1511,1191,1503,1178,1485,1154,1477,Q,1154,1500,1152,1523,Z]],label:"Cameroon",shortLabel:"CM",labelPosition:[91.8,252.4],labelAlignment:[CEN,MID]},47:{outlines:[[M,2354,1782,Q,2344,1771,2327,1759,2318,1753,2295,1749,2286,1755,2275,1757,2269,1759,2252,1768,2220,1784,2193,1819,2185,1851,2151,1869,2148,1891,2132,1902,2121,1910,2119,1920,2116,1938,2098,1941,2049,1946,2038,1986,2016,2009,1990,2016,1953,2026,1910,2025,1871,2023,1830,2040,1819,2051,1822,2085,1826,2111,1819,2142,1751,2148,1674,2150,1655,2162,1624,2184,1617,2195,1597,2197,1572,2199,1537,2192,1529,2183,1506,2186,1495,2187,1484,2190,1457,2194,1433,2210,1427,2214,1419,2225,1410,2236,1393,2235,1368,2233,1334,2226,1319,2236,1313,2240,1311,2242,1305,2255,1298,2267,1294,2295,1282,2311,1277,2333,1271,2341,1265,2349,1257,2361,1241,2375,1234,2400,1229,2438,1219,2469,1220,2506,1222,2563,1230,2634,1241,2651,1251,2671,1254,2676,1267,2689,1289,2708,1314,2749,1322,2756,1327,2766,1334,2784,1351,2798,1362,2807,1370,2813,1380,2820,1385,2837,1389,2856,1423,2850,1424,2837,1429,2825,1434,2811,1442,2804,1439,2772,1467,2772,1487,2772,1506,2770,1526,2767,1546,2765,1567,2737,1603,2744,1612,2745,1620,2745,1656,2745,1693,2749,1725,2771,1763,2767,1762,2759,1762,2750,1760,2711,1772,2677,1780,2655,1786,2638,1794,2616,1812,2606,1828,2598,1837,2587,1860,2563,1877,2555,1909,2560,1927,2561,1986,2589,2013,2613,2049,2627,2065,2634,2073,2636,2081,2639,2145,2642,2206,2642,2219,2642,2229,2653,2269,2659,2298,2658,2338,2657,2334,2620,2332,2605,2350,2599,2379,2591,2406,2588,2420,2585,2434,2588,2451,2589,2464,2582,2508,2580,2541,2574,2564,2552,2593,2555,2609,2556,2617,2561,2659,2567,2684,2556,2695,2550,2698,2540,2730,2534,2758,2533,2798,2532,2833,2549,2889,2558,2922,2533,2938,2524,2945,2523,2907,2482,2882,2433,2868,2417,2850,2403,2840,2396,2823,2390,2800,2369,2796,2330,2797,2318,2783,2313,2779,2292,2757,2275,2717,2243,2680,2226,2670,2222,2659,2205,2662,2174,2638,2146,2619,2138,2588,2127,2558,2126,2519,2117,2500,2117,2485,2108,2476,2103,2467,2096,2457,2088,2447,2078,2434,2067,2434,2051,2434,1977,2432,1894,2415,1877,2393,1852,2373,1828,2364,1797,Q,2360,1790,2354,1782,Z]],label:"Central African Republic",shortLabel:"CP",labelPosition:[208.2,230.1],labelAlignment:[CEN,MID]},48:{outlines:[[M,2418,555,Q,2402,548,2377,547,2349,542,2316,525,2298,516,2276,498,2260,486,2248,481,2225,472,2199,450,2153,413,2115,403,2107,400,2099,395,2087,387,2074,382,2067,380,2045,373,2012,366,1984,346,1976,340,1970,332,1966,324,1946,321,1933,312,1920,303,1910,295,1901,287,1875,266,1854,253,1845,247,1813,240,1776,239,1750,211,1743,201,1733,195,1722,190,1713,183,1683,161,1630,121,1606,108,1593,95,1573,76,1546,71,1513,63,1483,47,1472,42,1461,40,1444,39,1427,37,1387,33,1365,57,1348,76,1330,78,1313,79,1296,80,1296,118,1298,147,1299,180,1286,221,1274,265,1278,312,1279,338,1302,352,1318,365,1330,380,1353,412,1381,431,1385,434,1390,446,1393,448,1401,465,1405,488,1378,496,1370,503,1361,522,1358,562,1359,602,1358,664,1361,727,1363,788,1346,846,1338,869,1340,897,1342,921,1335,936,1324,953,1312,976,1295,995,1267,1038,1249,1059,1218,1091,1202,1110,1164,1134,1131,1149,1103,1180,1079,1186,1076,1216,1074,1227,1072,1238,1066,1260,1060,1289,1058,1315,1060,1349,1068,1355,1074,1365,1078,1369,1080,1375,1083,1384,1093,1396,1103,1409,1119,1427,1130,1454,1154,1477,1178,1485,1191,1503,1199,1511,1202,1517,1211,1537,1228,1540,1256,1560,1253,1591,1248,1622,1265,1644,1264,1732,1276,1807,1291,1833,1313,1837,1325,1871,1303,1882,1282,1886,1268,1889,1256,1890,1244,1895,1216,1897,1199,1900,1191,1901,1184,1910,1172,1921,1168,1933,1164,1967,1172,1988,1192,1993,1197,2001,1203,2017,1206,2022,1216,2033,1227,2055,1263,2070,1282,2089,1287,2120,1294,2143,1304,2180,1302,2210,1329,2215,1334,2226,1368,2233,1393,2235,1410,2236,1419,2225,1427,2214,1433,2210,1457,2194,1484,2190,1495,2187,1506,2186,1529,2183,1537,2192,1572,2199,1597,2197,1617,2195,1624,2184,1655,2162,1674,2150,1751,2148,1819,2142,1826,2111,1822,2085,1819,2051,1830,2040,1871,2023,1910,2025,1953,2026,1990,2016,2016,2009,2038,1986,2049,1946,2098,1941,2116,1938,2119,1920,2121,1910,2132,1902,2148,1891,2151,1869,2185,1851,2193,1819,2220,1784,2252,1768,2269,1759,2275,1757,2286,1755,2295,1749,2318,1753,2327,1759,2344,1771,2354,1782,2344,1747,2341,1704,2326,1693,2324,1690,2282,1669,2284,1625,2286,1591,2284,1557,2268,1536,2252,1535,2234,1534,2218,1528,2203,1478,2216,1432,2224,1404,2239,1385,2246,1375,2253,1363,2269,1335,2285,1305,2290,1298,2291,1289,2295,1255,2316,1228,2336,1198,2345,1164,2365,1142,2385,1127,2400,1122,2406,1120,2424,1114,2445,1113,2470,1112,2489,1098,2491,979,2491,869,2491,757,2491,647,2491,610,2492,568,2465,567,2440,562,Q,2428,560,2418,555,Z]],label:"Chad",shortLabel:"TD",labelPosition:[177.5,113.6],labelAlignment:[CEN,MID]},51:{outlines:[[M,3336,2711,Q,3335,2700,3328,2692,3307,2675,3296,2645,3289,2634,3270,2636,3239,2637,3202,2639,3184,2639,3172,2647,3156,2656,3149,2664,3143,2672,3112,2669,3082,2659,3069,2638,3054,2614,3022,2595,3015,2584,3009,2579,2996,2565,2981,2545,2976,2538,2971,2534,2968,2531,2964,2529,2957,2526,2945,2523,2938,2524,2922,2533,2889,2558,2833,2549,2798,2532,2758,2533,2730,2534,2698,2540,2695,2550,2684,2556,2659,2567,2617,2561,2609,2556,2593,2555,2564,2552,2541,2574,2508,2580,2464,2582,2451,2589,2434,2588,2420,2585,2406,2588,2379,2591,2350,2599,2332,2605,2334,2620,2338,2657,2298,2658,2269,2659,2229,2653,2219,2642,2206,2642,2145,2642,2081,2639,2073,2636,2065,2634,2049,2627,2013,2613,1986,2589,1927,2561,1909,2560,1877,2555,1860,2563,1837,2587,1828,2598,1812,2606,1794,2616,1786,2638,1780,2655,1772,2677,1760,2711,1762,2750,1762,2759,1763,2767,1763,2773,1764,2779,1769,2813,1747,2841,1747,2861,1741,2877,1737,2884,1725,2900,1719,2908,1704,2913,1674,2923,1675,2955,1673,2969,1674,2983,1671,3029,1674,3074,1675,3107,1664,3137,1648,3182,1656,3240,1669,3247,1664,3268,1660,3290,1647,3317,1634,3327,1628,3337,1614,3359,1593,3371,1584,3376,1576,3383,1551,3404,1519,3422,1495,3436,1477,3470,1459,3479,1456,3501,1455,3512,1451,3530,1445,3546,1446,3563,1447,3591,1437,3613,1413,3664,1407,3728,1407,3747,1387,3769,1371,3770,1363,3790,1343,3799,1326,3815,1306,3831,1276,3849,1269,3866,1251,3869,1224,3874,1205,3862,1195,3862,1188,3853,1179,3842,1146,3837,1131,3827,1105,3834,1090,3849,1071,3865,1064,3890,1031,3885,1017,3876,1e3,3859,984,3838,953,3838,939,3859,928,3876,909,3904,891,3936,903,3943,900,3967,898,3995,898,4024,898,4041,900,4058,914,4076,922,4094,940,4078,954,4052,965,4030,995,4035,1016,4038,1030,4033,1046,4028,1052,4025,1064,4020,1080,4020,1104,4021,1126,4023,1178,4024,1228,4021,1290,4019,1353,4020,1381,4021,1410,4028,1419,4030,1427,4029,1459,4025,1469,4041,1477,4056,1486,4068,1504,4083,1504,4093,1521,4111,1526,4133,1544,4156,1548,4178,1561,4199,1563,4207,1572,4244,1589,4266,1595,4280,1598,4285,1605,4293,1620,4294,1636,4308,1654,4305,1670,4302,1684,4307,1756,4309,1813,4303,1830,4298,1834,4295,1849,4284,1851,4280,1859,4258,1865,4247,1877,4218,1890,4202,1897,4192,1917,4186,1934,4182,1938,4181,1955,4178,1973,4177,1988,4176,2002,4172,2043,4184,2056,4208,2061,4224,2061,4230,2061,4246,2081,4243,2097,4241,2115,4241,2146,4241,2176,4245,2188,4255,2192,4260,2201,4291,2209,4310,2215,4347,2203,4358,2185,4365,2184,4377,2182,4397,2185,4417,2209,4475,2209,4537,2215,4580,2235,4597,2243,4604,2250,4612,2259,4623,2259,4639,2258,4662,2258,4684,2257,4691,2247,4697,2229,4705,2223,4718,2229,4742,2252,4740,2274,4739,2290,4756,2303,4752,2309,4747,2328,4731,2355,4731,2406,4730,2457,4728,2478,4713,2497,4701,2502,4698,2508,4695,2535,4685,2543,4701,2558,4724,2568,4739,2595,4750,2622,4747,2653,4743,2681,4760,2699,4767,2700,4770,2717,4796,2758,4808,2773,4813,2784,4820,2785,4846,2787,4866,2826,4868,2846,4851,2880,4843,2899,4848,2948,4889,3008,4895,3029,4900,3032,4905,3040,4912,3047,4926,3087,4957,3092,4990,3117,5017,3145,5016,3176,5014,3207,5016,3220,5024,3219,5031,3242,5030,3257,5023,3271,5018,3278,5004,3283,4991,3287,4980,3292,4960,3277,4958,3264,4943,3255,4932,3254,4914,3242,4913,3224,4906,3220,4904,3201,4894,3197,4892,3182,4884,3171,4874,3141,4871,3132,4862,3107,4833,3090,4807,3092,4781,3103,4772,3110,4758,3115,4751,3123,4738,3139,4733,3162,4705,3152,4673,3153,4634,3142,4612,3138,4600,3136,4588,3130,4555,3139,4525,3153,4479,3153,4428,3166,4403,3186,4391,3199,4383,3212,4376,3237,4364,3264,4365,3322,4369,3378,4358,3391,4356,3399,4346,3392,4341,3387,4334,3372,4314,3361,4286,3349,4257,3344,4230,3341,4218,3337,4208,3332,4195,3327,4183,3312,4183,3303,4167,3291,4148,3278,4131,3272,4123,3264,4109,3255,4091,3249,4068,3246,4031,3254,4014,3258,3993,3261,3978,3263,3960,3256,3953,3247,3926,3244,3899,3241,3885,3240,3870,3237,3832,3274,3821,3292,3813,3298,3812,3307,3811,3315,3810,3329,3808,3338,3791,3355,3761,3370,3733,3375,3717,3377,3711,3382,3655,3381,3597,3379,3583,3377,3572,3370,3575,3352,3585,3331,3587,3306,3586,3293,3573,3281,3568,3269,3563,3248,3551,3227,3539,3233,3508,3238,3477,3240,3467,3242,3459,3263,3460,3255,3454,3248,3446,3239,3438,3247,3411,3249,3378,3281,3379,3266,3340,3267,3302,3270,3243,3267,3182,3266,3164,3273,3157,3280,3131,3290,3123,3314,3105,3324,3085,3330,3072,3332,3069,3340,3059,3350,3053,3369,3039,3395,3034,3440,3021,3444,2995,3446,2966,3441,2939,3432,2927,3428,2922,3397,2889,3404,2830,3407,2805,3405,2779,3405,2777,3405,2776,3393,2768,3379,2761,Q,3361,2743,3336,2711,Z]],label:"Democratic Republic of the Congo",shortLabel:"CD",labelPosition:[245.5,377.8],labelAlignment:[CEN,MID]},54:{outlines:[[M,795,2942,Q,662,2931,532,2934,527,2951,535,2966,555,2995,549,3017,546,3027,541,3036,531,3054,520,3082,645,3086,756,3087,770,3087,772,3076,788,3058,787,3041,785,3016,783,2990,Q,781,2961,795,2942,Z]],label:"Equatorial Guinea",shortLabel:"GQ",labelPosition:[65.7,301],labelAlignment:[CEN,MID]},57:{outlines:[[M,1028,2951,Q,950,2944,871,2942,840,2929,794,2942,781,2961,783,2989,785,3016,786,3041,788,3058,772,3076,770,3087,756,3087,645,3086,519,3082,516,3128,527,3160,533,3178,524,3185,508,3196,503,3228,498,3251,489,3257,469,3273,462,3292,450,3317,434,3333,418,3347,418,3376,417,3398,428,3415,458,3454,469,3474,479,3498,487,3502,503,3512,509,3521,551,3560,561,3592,568,3613,584,3618,615,3659,649,3693,665,3707,684,3733,700,3748,703,3761,723,3792,745,3803,740,3788,743,3768,746,3760,747,3751,749,3723,773,3725,805,3719,822,3699,828,3692,831,3684,836,3649,837,3620,838,3594,851,3584,871,3557,882,3531,912,3516,938,3501,947,3495,956,3492,986,3487,996,3494,1004,3499,1012,3502,1027,3510,1040,3518,1061,3532,1085,3540,1119,3549,1153,3542,1177,3523,1180,3507,1182,3493,1182,3478,1182,3427,1180,3376,1180,3368,1179,3359,1177,3345,1173,3332,1163,3308,1158,3296,1152,3279,1140,3255,1137,3198,1161,3167,1175,3148,1180,3126,1187,3087,1161,3067,1150,3059,1146,3046,1134,3042,1131,3030,1100,3031,1084,3038,1074,3044,1063,3046,1048,3049,1038,3053,1021,3043,1022,3024,1023,2993,1028,2962,Q,1048,2949,1028,2951,Z]],label:"Gabon",shortLabel:"GA",labelPosition:[80,330],labelAlignment:[CEN,MID]},75:{outlines:[[M,83,2814,Q,58,2816,43,2842,L,43,2854,Q,65,2854,88,2860,L,89,2860,89,2854,Q,83,2842,83,2814,Z],[M,123,2774,Q,118,2746,94,2746,L,72,2765,Q,72,2773,100,2797,Z],[M,163,2797,L,180,2814,214,2814,Q,211,2783,191,2769,L,163,2769,Z],[M,282,2803,Q,282,2832,271,2854,282,2854,282,2865,L,322,2865,Q,326,2847,308,2837,290,2826,299,2803,Z],[M,301,2741,Q,293,2774,327,2769,315,2747,338,2731,364,2714,362,2700,356,2700,356,2695,L,327,2695,Q,308,2712,301,2741,Z]],label:"Sao Tome and Principe",shortLabel:"ST",labelPosition:[19.3,330.6],labelAlignment:[CEN,BTM],labelConnectors:[[M,193,3306,L,193,2798]]},91:{outlines:[[M,1763,2768,Q,1725,2771,1693,2750,1656,2745,1620,2745,1612,2745,1603,2744,1567,2737,1546,2766,1526,2768,1506,2770,1487,2772,1467,2773,1439,2772,1442,2804,1434,2811,1429,2826,1424,2837,1423,2851,1423,2852,1423,2853,1421,2881,1423,2910,1424,2919,1425,2927,1423,2945,1430,2952,1438,2959,1442,2968,1453,3004,1406,2993,1389,2977,1354,2970,1336,2962,1319,2962,1273,2961,1228,2964,1169,2966,1108,2946,1088,2944,1069,2942,1054,2941,1039,2952,1034,2956,1028,2962,1023,2993,1022,3024,1021,3043,1038,3053,1048,3049,1063,3047,1074,3044,1085,3039,1100,3031,1131,3031,1134,3042,1146,3047,1150,3059,1161,3067,1187,3087,1180,3126,1175,3148,1161,3167,1137,3198,1140,3256,1152,3279,1159,3297,1163,3308,1173,3332,1177,3345,1179,3359,1180,3368,1180,3376,1182,3427,1182,3479,1182,3493,1180,3507,1177,3523,1153,3542,1119,3549,1086,3540,1061,3532,1040,3518,1027,3510,1012,3502,1004,3499,996,3494,986,3487,956,3492,947,3495,938,3501,912,3516,882,3531,871,3557,852,3584,838,3594,837,3621,836,3649,831,3684,828,3692,822,3699,805,3719,773,3725,749,3723,747,3751,746,3760,744,3768,740,3788,745,3804,750,3806,756,3808,767,3811,778,3815,799,3843,809,3870,818,3888,821,3894,840,3920,858,3924,875,3931,887,3934,889,3935,891,3936,909,3905,928,3876,939,3859,953,3839,984,3839,1e3,3859,1017,3876,1031,3886,1064,3890,1071,3865,1090,3849,1105,3834,1131,3827,1146,3838,1179,3842,1188,3854,1195,3863,1205,3863,1224,3874,1251,3870,1269,3866,1276,3849,1306,3832,1326,3815,1343,3799,1363,3790,1371,3771,1387,3770,1407,3748,1407,3729,1413,3665,1437,3614,1447,3591,1446,3564,1445,3547,1451,3531,1455,3513,1456,3501,1459,3480,1477,3471,1495,3436,1519,3423,1551,3405,1576,3383,1584,3376,1593,3372,1614,3359,1628,3338,1634,3327,1647,3317,1660,3291,1664,3268,1669,3248,1656,3241,1648,3183,1664,3137,1675,3108,1674,3075,1671,3029,1674,2984,1673,2969,1675,2956,1674,2924,1704,2913,1719,2909,1725,2901,1737,2885,1741,2877,1747,2861,1747,2842,1769,2813,1764,2779,Q,1763,2774,1763,2768,Z]],label:"Congo",shortLabel:"CG",labelPosition:[135.7,333.9],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"centralafrica",type:"maps"}}})});