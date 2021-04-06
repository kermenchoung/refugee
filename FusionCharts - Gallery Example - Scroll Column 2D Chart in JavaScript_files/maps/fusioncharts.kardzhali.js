(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=276)})({276:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(277);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},277:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts, Inc.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts, Inc.
 * @meta package_map_pack
 * @id fusionmaps.Kardzhali.18.08-09-2012 12:29:00
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Kardzhali",revision:18,standaloneInit:true,baseWidth:593,baseHeight:577,baseScaleFactor:10,entities:{"02":{outlines:[[M,1665,44,Q,1621,58,1461,59,L,1213,59,Q,1216,111,1208,123,1194,135,1188,142,1178,155,1182,177,1180,203,1162,205,L,1160,239,Q,1158,258,1147,267,1131,276,1124,282,1054,310,1019,341,974,380,902,384,902,397,848,417,845,435,828,437,L,786,437,Q,774,437,771,466,747,466,738,475,722,506,717,542,717,543,704,551,695,557,700,566,L,700,604,Q,692,610,672,626,678,655,664,662,641,670,641,686,640,707,628,716,619,729,608,739,591,750,582,761,544,779,522,791,500,802,430,836,360,869,366,869,343,892,335,896,320,901,317,916,321,975,308,985,281,1003,278,1014,277,1040,275,1050,270,1059,255,1076,L,255,1165,Q,255,1167,273,1190,275,1200,275,1224,276,1248,288,1261,301,1278,299,1334,295,1372,335,1399,338,1406,342,1434,345,1450,360,1466,380,1487,393,1528,455,1633,477,1639,L,503,1641,503,1626,522,1626,522,1564,547,1562,547,1511,Q,560,1511,568,1510,L,568,1467,585,1467,585,1442,607,1442,615,1469,Q,659,1468,665,1493,713,1489,713,1518,L,764,1518,764,1490,829,1490,829,1469,889,1469,Q,904,1459,898,1422,911,1412,930,1393,952,1374,959,1348,965,1343,992,1309,993,1307,1015,1261,1035,1233,1041,1216,1057,1168,1063,1165,1068,1161,1122,1161,1182,1161,1187,1165,1225,1190,1242,1190,1307,1186,1447,1196,L,1522,1196,Q,1535,1196,1553,1224,1578,1234,1589,1298,1590,1309,1617,1331,1624,1337,1635,1371,1696,1412,1728,1419,L,1759,1450,Q,1773,1457,1808,1468,1809,1469,1830,1476,1834,1479,1847,1498,1866,1502,1878,1519,L,1933,1519,Q,1931,1494,1931,1481,1930,1457,1954,1467,L,1955,1430,Q,1955,1411,1974,1411,L,1978,1346,2029,1346,Q,2034,1362,2034,1372,2107,1372,2133,1374,2133,1379,2138,1393,L,2138,1446,2119,1446,2120,1575,Q,2148,1584,2181,1632,2193,1640,2219,1651,2240,1663,2239,1692,2245,1692,2245,1694,L,2280,1694,2280,1651,2300,1651,2300,1585,2333,1585,Q,2349,1620,2365,1629,2372,1632,2393,1637,2406,1643,2419,1661,2435,1671,2474,1689,2506,1706,2514,1731,L,2591,1731,2591,1706,2690,1706,2690,1686,Q,2711,1691,2710,1652,2708,1617,2733,1630,2736,1605,2736,1536,2736,1522,2761,1509,L,2761,1468,Q,2761,1437,2779,1405,2784,1393,2784,1328,L,2779,1216,Q,2779,1193,2800,1160,2824,1121,2839,1109,2865,1086,2875,1064,L,2903,1015,Q,2909,1010,2923,1002,2931,989,2943,977,2954,965,2952,954,2951,943,2960,935,2927,930,2927,930,2907,906,2878,909,2859,910,2831,893,2807,877,2783,887,2777,753,2767,738,2760,726,2760,593,2759,531,2711,481,2654,431,2633,399,L,2566,399,Q,2564,404,2564,419,L,2500,419,2500,444,2456,444,Q,2463,468,2439,472,2406,472,2390,473,2394,492,2361,491,2322,488,2318,502,2299,541,2264,549,2249,552,2235,570,2212,599,2208,603,2187,644,2168,664,L,2139,664,Q,2133,620,2084,613,2060,608,2019,575,1997,557,1941,559,1878,562,1854,560,L,1856,364,Q,1856,352,1835,336,1810,317,1805,308,1800,299,1749,253,1711,218,1714,172,1734,172,1739,170,L,1736,101,1759,101,1759,59,1741,59,1739,47,Q,1716,44,1665,44,Z]],label:"Chernoochene",shortLabel:"CH",labelPosition:[160.7,88.7],labelAlignment:[CEN,MID]},"04":{outlines:[[M,3538,1130,Q,3514,1129,3498,1114,L,3370,1114,3370,1136,3305,1136,Q,3287,1087,3287,1047,3259,1043,3256,1014,L,3192,1014,Q,3189,1009,3189,991,L,3125,994,Q,3116,992,3101,975,3088,958,3079,958,L,3023,958,Q,3005,958,2995,950,2986,941,2980,940,2963,937,2960,935,2951,943,2952,954,2954,965,2943,977,2931,989,2923,1002,2909,1010,2903,1015,L,2875,1064,Q,2865,1086,2839,1109,2824,1121,2800,1160,2779,1193,2779,1216,L,2784,1328,Q,2784,1393,2779,1405,2761,1437,2761,1468,L,2761,1509,Q,2736,1522,2736,1536,2736,1605,2733,1630,2708,1617,2710,1652,2711,1691,2690,1686,L,2690,1706,2591,1706,2591,1731,2514,1731,Q,2506,1706,2474,1689,2435,1671,2419,1661,2406,1643,2393,1637,2372,1632,2365,1629,2349,1620,2333,1585,L,2300,1585,2300,1651,2280,1651,2280,1694,2245,1694,Q,2245,1692,2239,1692,2240,1663,2219,1651,2193,1640,2181,1632,2148,1584,2120,1575,L,2119,1446,2138,1446,2138,1393,Q,2133,1379,2133,1374,2107,1372,2034,1372,2034,1362,2029,1346,L,1978,1346,1974,1411,Q,1955,1411,1955,1430,L,1954,1467,Q,1930,1457,1931,1481,1931,1494,1933,1519,L,1878,1519,Q,1866,1502,1847,1498,1834,1479,1830,1476,1809,1469,1808,1468,1773,1457,1759,1450,L,1728,1419,Q,1696,1412,1635,1371,1624,1337,1617,1331,1590,1309,1589,1298,1578,1234,1553,1224,1535,1196,1522,1196,L,1447,1196,Q,1307,1186,1242,1190,1225,1190,1187,1165,1182,1161,1122,1161,1068,1161,1063,1165,1057,1168,1041,1216,1035,1233,1015,1261,993,1307,992,1309,965,1343,959,1348,952,1374,930,1393,911,1412,898,1422,904,1459,889,1469,L,892,1469,Q,891,1474,899,1490,922,1482,933,1518,941,1520,967,1517,987,1517,980,1537,L,1024,1537,1024,1561,1140,1561,1140,1539,1238,1539,Q,1236,1524,1245,1511,L,1320,1512,Q,1331,1512,1339,1530,1352,1535,1396,1535,1402,1535,1421,1557,1425,1560,1447,1560,1466,1560,1490,1587,1502,1588,1528,1607,1534,1612,1550,1616,1560,1625,1565,1630,L,1600,1665,Q,1614,1680,1619,1681,1625,1682,1646,1682,L,1679,1715,Q,1689,1725,1705,1755,1708,1757,1714,1780,1716,1785,1728,1795,1735,1802,1742,1837,1746,1841,1758,1855,1761,1863,1764,1879,1767,1888,1785,1920,1786,1933,1810,1959,1810,1979,1820,1983,1828,1988,1828,2003,1828,2023,1818,2027,1805,2030,1804,2041,L,1804,2080,1807,2088,Q,1818,2089,1848,2085,1875,2085,1886,2097,1899,2112,1917,2113,1942,2112,1952,2123,L,1998,2173,Q,2005,2181,2016,2199,2026,2213,2044,2212,L,2044,2273,Q,2017,2271,2006,2287,L,1973,2316,Q,1966,2320,1954,2344,1929,2355,1917,2366,1879,2408,1854,2426,1815,2454,1811,2458,1809,2463,1809,2502,1809,2540,1815,2562,1820,2583,1823,2586,1825,2590,1826,2611,1827,2633,1823,2640,1818,2649,1809,2662,L,1784,2681,1741,2722,Q,1726,2729,1721,2738,1722,2750,1713,2751,L,1696,2751,1695,2775,1666,2775,1665,2823,1645,2823,Q,1645,2916,1641,2923,1619,2946,1619,2950,L,1617,3013,Q,1617,3014,1632,3034,1638,3043,1660,3040,1666,3041,1692,3042,1709,3059,1717,3060,L,1753,3060,Q,1760,3060,1776,3076,1793,3091,1804,3091,L,1839,3092,Q,1839,3092,1840,3092,1914,3092,1974,3090,1988,3090,1998,3109,2001,3116,2015,3124,2016,3136,2036,3140,2044,3141,2056,3156,2074,3161,2094,3194,2126,3211,2130,3229,L,2155,3229,2155,3204,Q,2189,3208,2193,3179,L,2242,3179,Q,2257,3178,2265,3192,2270,3200,2277,3217,2290,3237,2328,3255,2381,3295,2416,3345,2425,3340,2434,3360,L,2456,3360,2456,3347,2476,3347,Q,2477,3312,2476,3295,2473,3267,2489,3259,2501,3251,2501,3219,L,2502,3178,Q,2528,3185,2529,3152,2555,3130,2560,3122,L,2577,3090,Q,2596,3084,2594,3057,2611,3064,2614,3051,2614,3033,2615,3029,L,2632,3029,2634,3052,Q,2634,3056,2647,3064,2647,3075,2651,3106,L,2672,3106,2674,3152,Q,2674,3156,2686,3162,2698,3168,2698,3181,L,2733,3181,2733,3156,Q,2736,3155,2783,3160,2807,3162,2803,3134,L,2837,3134,Q,2831,3121,2842,3111,2854,3099,2855,3095,2855,3054,2879,3054,2878,3036,2877,3027,2876,3010,2888,3004,2904,2996,2905,2986,2905,2965,2906,2964,2924,2930,2923,2922,2912,2888,2950,2898,L,2950,2872,Q,2992,2872,3094,2872,L,3217,2871,3238,2845,3277,2845,Q,3276,2824,3293,2823,3302,2822,3328,2823,3329,2805,3353,2806,3365,2806,3397,2797,3401,2770,3422,2770,3450,2771,3454,2764,3463,2751,3497,2751,3520,2750,3523,2730,L,3564,2725,Q,3569,2710,3569,2707,3569,2703,3567,2681,3569,2635,3566,2592,3565,2556,3580,2555,3595,2554,3602,2539,3609,2520,3662,2486,3709,2439,3724,2439,L,3847,2439,3847,2417,3878,2417,Q,3883,2412,3882,2394,L,3913,2394,3913,2369,3953,2369,Q,3956,2375,4e3,2429,L,4018,2456,Q,4018,2474,4043,2483,4043,2484,4066,2486,4071,2482,4085,2467,L,4107,2449,Q,4119,2436,4127,2432,4132,2429,4145,2424,4150,2416,4149,2412,L,4162,2406,Q,4163,2393,4178,2390,4187,2388,4206,2390,4210,2361,4293,2297,4345,2256,4387,2230,4476,2165,4488,2146,4504,2121,4504,2034,4510,1967,4495,1954,4479,1941,4475,1921,4466,1889,4466,1888,4445,1837,4446,1816,4447,1787,4423,1757,L,4423,1739,Q,4418,1708,4425,1631,4429,1564,4413,1553,4384,1518,4366,1499,4335,1464,4310,1448,4106,1265,4075,1265,4051,1265,4054,1280,4057,1296,4032,1295,3981,1292,3986,1323,L,3922,1323,Q,3873,1226,3861,1178,L,3819,1178,Q,3819,1190,3774,1247,3740,1285,3703,1274,3703,1287,3697,1308,L,3677,1308,Q,3636,1211,3618,1188,3580,1155,3570,1142,Q,3561,1133,3538,1130,Z]],label:"Kardzhali",shortLabel:"KA",labelPosition:[269.7,214.7],labelAlignment:[CEN,MID]},"01":{outlines:[[M,1140,1539,L,1140,1561,1024,1561,1024,1537,980,1537,Q,987,1517,967,1517,941,1520,933,1518,922,1482,899,1490,891,1474,892,1469,L,829,1469,829,1490,764,1490,764,1518,713,1518,Q,713,1489,665,1493,659,1468,615,1469,L,607,1442,585,1442,585,1467,568,1467,568,1510,Q,560,1511,547,1511,L,547,1562,522,1564,522,1626,503,1626,503,1641,489,1639,493,1726,Q,493,1768,518,1790,526,1819,524,1872,546,1896,546,1897,L,546,1948,Q,546,1966,558,1983,570,1997,569,2020,568,2030,590,2048,590,2086,593,2091,596,2101,620,2117,626,2124,628,2158,635,2165,637,2203,638,2229,662,2220,L,662,2244,Q,644,2248,626,2265,621,2288,613,2296,579,2320,562,2347,535,2391,522,2412,500,2449,477,2464,477,2488,449,2486,449,2514,426,2537,426,2543,449,2560,461,2568,462,2595,471,2605,475,2629,495,2651,495,2657,494,2677,538,2718,546,2725,549,2751,L,577,2771,577,2807,Q,558,2804,552,2833,546,2858,524,2848,524,2895,498,2887,501,2935,480,2929,478,2942,478,2961,476,2974,451,2971,L,451,2991,344,2991,342,3011,Q,311,3014,230,3014,230,3024,226,3038,L,137,3038,137,3087,Q,159,3094,165,3114,170,3131,193,3139,L,191,3187,Q,209,3197,209,3203,L,209,3234,244,3234,244,3276,181,3276,181,3300,112,3298,112,3318,92,3318,92,3343,Q,93,3345,111,3355,122,3361,124,3376,130,3429,96,3443,80,3449,73,3475,68,3496,47,3492,L,47,3519,Q,57,3522,90,3555,100,3565,113,3606,145,3638,150,3670,151,3683,186,3683,207,3683,218,3681,L,218,3657,298,3655,Q,307,3654,368,3710,399,3721,443,3770,L,463,3770,463,3757,494,3757,Q,490,3738,513,3729,550,3716,552,3714,569,3697,585,3688,590,3685,602,3669,609,3658,621,3659,641,3659,656,3644,670,3624,679,3617,709,3613,719,3606,723,3601,729,3589,732,3585,747,3586,768,3586,828,3650,858,3674,907,3699,962,3748,993,3750,1098,3750,1111,3768,1149,3821,1209,3895,L,1220,3888,Q,1229,3886,1232,3880,1233,3859,1235,3847,1254,3845,1255,3825,1255,3798,1260,3795,1279,3776,1279,3773,1279,3740,1286,3739,1311,3734,1311,3682,L,1330,3682,Q,1330,3644,1333,3631,L,1352,3631,Q,1350,3613,1350,3605,1350,3588,1371,3588,1394,3591,1400,3586,1402,3569,1405,3562,L,1442,3562,Q,1443,3541,1491,3530,1495,3528,1500,3469,L,1497,3452,Q,1490,3451,1472,3451,L,1472,3376,Q,1462,3372,1455,3373,1456,3356,1452,3348,L,1452,3338,1469,3338,1469,3294,1505,3294,1510,3324,1710,3324,Q,1702,3303,1724,3297,1746,3291,1739,3273,1761,3275,1764,3227,1764,3218,1780,3209,1784,3205,1785,3179,1789,3175,1812,3168,1812,3140,1817,3139,1840,3130,1839,3122,L,1839,3092,1804,3091,Q,1793,3091,1776,3076,1760,3060,1753,3060,L,1717,3060,Q,1709,3059,1692,3042,1666,3041,1660,3040,1638,3043,1632,3034,1617,3014,1617,3013,L,1619,2950,Q,1619,2946,1641,2923,1645,2916,1645,2823,L,1665,2823,1666,2775,1695,2775,1696,2751,1713,2751,Q,1722,2750,1721,2738,1726,2729,1741,2722,L,1784,2681,1809,2662,Q,1818,2649,1823,2640,1827,2633,1826,2611,1825,2590,1823,2586,1820,2583,1815,2562,1809,2540,1809,2502,1809,2463,1811,2458,1815,2454,1854,2426,1879,2408,1917,2366,1929,2355,1954,2344,1966,2320,1973,2316,L,2006,2287,Q,2017,2271,2044,2273,L,2044,2212,Q,2026,2213,2016,2199,2005,2181,1998,2173,L,1952,2123,Q,1942,2112,1917,2113,1899,2112,1886,2097,1875,2085,1848,2085,1818,2089,1807,2088,L,1804,2080,1804,2041,Q,1805,2030,1818,2027,1828,2023,1828,2003,1828,1988,1820,1983,1810,1979,1810,1959,1786,1933,1785,1920,1767,1888,1764,1879,1761,1863,1758,1855,1746,1841,1742,1837,1735,1802,1728,1795,1716,1785,1714,1780,1708,1757,1705,1755,1689,1725,1679,1715,L,1646,1682,Q,1625,1682,1619,1681,1614,1680,1600,1665,L,1565,1630,Q,1560,1625,1550,1616,1534,1612,1528,1607,1502,1588,1490,1587,1466,1560,1447,1560,1425,1560,1421,1557,1402,1535,1396,1535,1352,1535,1339,1530,1331,1512,1320,1512,L,1245,1511,Q,1236,1524,1238,1539,Z]],label:"Ardino",shortLabel:"AR",labelPosition:[104.5,266.8],labelAlignment:[CEN,MID]},"03":{outlines:[[M,2242,3179,L,2193,3179,Q,2189,3208,2155,3204,L,2155,3229,2130,3229,Q,2126,3211,2094,3194,2074,3161,2056,3156,2044,3141,2036,3140,2016,3136,2015,3124,2001,3116,1998,3109,1988,3090,1974,3090,1914,3092,1840,3092,1839,3092,1839,3092,L,1839,3122,Q,1840,3130,1817,3139,1812,3140,1812,3168,1789,3175,1785,3179,1784,3205,1780,3209,1764,3218,1764,3227,1761,3275,1739,3273,1746,3291,1724,3297,1702,3303,1710,3324,L,1510,3324,1505,3294,1469,3294,1469,3338,1452,3338,1452,3348,Q,1456,3356,1455,3373,1462,3372,1472,3376,L,1472,3451,Q,1490,3451,1497,3452,L,1500,3469,Q,1495,3528,1491,3530,1443,3541,1442,3562,L,1405,3562,Q,1402,3569,1400,3586,1394,3591,1371,3588,1350,3588,1350,3605,1350,3613,1352,3631,L,1333,3631,Q,1330,3644,1330,3682,L,1311,3682,Q,1311,3734,1286,3739,1279,3740,1279,3773,1279,3776,1260,3795,1255,3798,1255,3825,1254,3845,1235,3847,1233,3859,1232,3880,1229,3886,1220,3888,L,1219,3908,Q,1224,3914,1229,3920,1265,3964,1262,4030,L,1263,4155,Q,1261,4169,1238,4199,1230,4208,1212,4225,1208,4231,1203,4253,1200,4256,1163,4294,1141,4318,1136,4348,L,1110,4348,1110,4393,1189,4393,Q,1192,4399,1192,4411,L,1287,4411,1287,4429,Q,1275,4432,1220,4495,1155,4565,1151,4572,1104,4645,1098,4651,1076,4670,1046,4694,1025,4714,1025,4748,1025,4777,1047,4782,1036,4827,1074,4824,L,1074,4851,1092,4851,1092,4896,1174,4896,1174,4870,1203,4867,1206,4819,1241,4816,Q,1237,4802,1244,4796,1257,4784,1257,4783,1257,4752,1270,4748,1285,4744,1286,4735,1285,4723,1286,4716,1307,4706,1313,4691,1317,4680,1364,4640,1397,4609,1408,4589,1424,4588,1444,4547,1471,4539,1472,4527,1474,4514,1474,4511,L,1474,4467,1501,4467,1501,4394,1524,4394,1525,4314,1539,4314,1539,4266,1552,4266,1556,4303,Q,1580,4298,1581,4322,1619,4332,1646,4361,1678,4393,1700,4402,1696,4420,1738,4425,1740,4426,1746,4445,1749,4458,1766,4456,1787,4477,1834,4518,L,1904,4518,1904,4481,1950,4482,1950,4459,1999,4459,1999,4438,2021,4438,2021,4417,2038,4417,Q,2044,4428,2044,4438,L,2161,4438,Q,2168,4422,2192,4407,2219,4387,2224,4368,2280,4306,2283,4297,L,2323,4297,Q,2327,4321,2343,4326,2344,4326,2384,4327,2415,4327,2445,4348,2458,4349,2484,4344,2507,4343,2515,4356,2530,4377,2569,4372,2580,4356,2579,4348,L,2589,4348,2589,4087,2609,4087,2609,4020,2640,4020,2640,3932,Q,2622,3928,2620,3928,2611,3876,2603,3871,2586,3862,2586,3819,2586,3796,2607,3743,2621,3701,2613,3659,L,2611,3462,Q,2598,3459,2594,3456,2586,3452,2586,3432,2586,3421,2575,3414,2564,3407,2564,3397,2563,3361,2551,3349,2532,3330,2527,3319,L,2513,3319,Q,2515,3351,2476,3348,L,2476,3347,2456,3347,2456,3360,2434,3360,Q,2425,3340,2416,3345,2381,3295,2328,3255,2290,3237,2277,3217,2270,3200,2265,3192,Q,2257,3178,2242,3179,Z]],label:"Dzhebel",shortLabel:"DZ",labelPosition:[183.2,399.3],labelAlignment:[CEN,MID]},"07":{outlines:[[M,3913,2369,L,3913,2394,3882,2394,Q,3883,2412,3878,2417,L,3847,2417,3847,2439,3724,2439,Q,3709,2439,3662,2486,3609,2520,3602,2539,3595,2554,3580,2555,3565,2556,3566,2592,3569,2635,3567,2681,3569,2703,3569,2707,3569,2710,3564,2725,L,3523,2730,Q,3520,2750,3497,2751,3463,2751,3454,2764,3450,2771,3422,2770,3401,2770,3397,2797,3365,2806,3353,2806,3329,2805,3328,2823,3302,2822,3293,2823,3276,2824,3277,2845,L,3238,2845,3217,2871,3094,2872,Q,2992,2872,2950,2872,L,2950,2898,Q,2912,2888,2923,2922,2924,2930,2906,2964,2905,2965,2905,2986,2904,2996,2888,3004,2876,3010,2877,3027,2878,3036,2879,3054,2855,3054,2855,3095,2854,3099,2842,3111,2831,3121,2837,3134,L,2803,3134,Q,2807,3162,2783,3160,2736,3155,2733,3156,L,2733,3181,2698,3181,Q,2698,3168,2686,3162,2674,3156,2674,3152,L,2672,3106,2651,3106,Q,2647,3075,2647,3064,2634,3056,2634,3052,L,2632,3029,2615,3029,Q,2614,3033,2614,3051,2611,3064,2594,3057,2596,3084,2577,3090,L,2560,3122,Q,2555,3130,2529,3152,2528,3185,2502,3178,L,2501,3219,Q,2501,3251,2489,3259,2473,3267,2476,3295,2477,3312,2476,3347,L,2476,3348,Q,2515,3351,2513,3319,L,2527,3319,Q,2532,3330,2551,3349,2563,3361,2564,3397,2564,3407,2575,3414,2586,3421,2586,3432,2586,3452,2594,3456,2598,3459,2611,3462,L,2613,3659,Q,2621,3701,2607,3743,2586,3796,2586,3819,2586,3862,2603,3871,2611,3876,2620,3928,2622,3928,2640,3932,L,2640,4020,2609,4020,2609,4087,2589,4087,2589,4348,2613,4348,Q,2613,4327,2625,4327,L,2684,4327,2685,4294,2755,4294,2758,4273,2830,4273,2830,4254,2843,4254,Q,2846,4255,2849,4255,2870,4257,2916,4228,2968,4194,2993,4180,L,2993,4156,3091,4156,Q,3090,4192,3142,4185,3153,4182,3161,4205,L,3206,4205,Q,3209,4212,3207,4236,3208,4255,3232,4250,L,3232,4289,3274,4289,3274,4275,3305,4275,3305,4253,3372,4253,Q,3387,4287,3388,4288,3400,4306,3431,4303,L,3550,4303,Q,3582,4341,3652,4423,L,3677,4423,Q,3686,4392,3693,4387,3705,4372,3722,4362,3746,4340,3778,4305,3800,4287,3835,4249,3853,4228,3886,4198,3894,4182,3902,4180,3909,4177,3924,4176,3938,4174,3941,4166,3944,4158,3978,4152,4011,4146,4004,4102,3996,4057,4006,4043,4016,4030,4022,4020,L,4022,3964,4045,3964,Q,4041,3946,4061,3929,4067,3917,4074,3914,4081,3906,4089,3907,L,4089,3879,4067,3879,Q,4043,3839,4018,3848,4024,3829,3975,3819,L,3975,3677,Q,3998,3652,4023,3631,4047,3609,4080,3576,4112,3543,4153,3501,4185,3463,4255,3401,4259,3380,4249,3364,4235,3345,4234,3338,4232,3323,4215,3312,4215,3289,4206,3280,4187,3261,4187,3246,4187,3242,4167,3222,4162,3200,4157,3188,4139,3179,4137,3162,4137,3160,4113,3136,4113,3113,4100,3104,4091,3077,4087,3070,4068,3059,4063,3047,4046,3003,4035,2989,L,3992,2945,3992,2870,Q,3991,2821,3999,2782,4007,2743,4011,2725,4015,2708,4023,2588,4039,2555,4036,2527,L,4043,2483,Q,4018,2474,4018,2456,L,4e3,2429,Q,3956,2375,3953,2369,Z]],label:"Momchilgrad",shortLabel:"MO",labelPosition:[336.6,339.6],labelAlignment:[CEN,MID]},"06":{outlines:[[M,5474,2499,Q,5431,2456,5441,2422,L,5020,2422,Q,5020,2454,4979,2483,4936,2545,4925,2564,4880,2611,4867,2631,4849,2664,4844,2672,4837,2684,4811,2684,4797,2684,4775,2667,4744,2669,4731,2649,4724,2638,4709,2638,4690,2638,4689,2637,4672,2608,4652,2608,4624,2611,4606,2611,L,4606,2651,4584,2651,4584,2700,4491,2700,Q,4481,2684,4442,2682,4430,2682,4425,2670,4420,2663,4412,2660,4408,2658,4404,2658,L,4351,2658,Q,4342,2617,4325,2626,4273,2628,4262,2626,4254,2589,4255,2567,4254,2550,4241,2538,4228,2526,4228,2518,L,4228,2437,Q,4228,2421,4217,2416,4206,2410,4206,2392,4206,2391,4206,2390,4187,2388,4178,2390,4163,2393,4162,2406,L,4149,2412,Q,4150,2416,4145,2424,4132,2429,4127,2432,4119,2436,4107,2449,L,4085,2467,Q,4071,2482,4066,2486,4043,2484,4043,2483,L,4036,2527,Q,4039,2555,4023,2588,4015,2708,4011,2725,4007,2743,3999,2782,3991,2821,3992,2870,L,3992,2945,4035,2989,Q,4046,3003,4063,3047,4068,3059,4087,3070,4091,3077,4100,3104,4113,3113,4113,3136,4137,3160,4137,3162,4139,3179,4157,3188,4162,3200,4167,3222,4187,3242,4187,3246,4187,3261,4206,3280,4215,3289,4215,3312,4232,3323,4234,3338,4235,3345,4249,3364,4259,3380,4255,3401,4185,3463,4153,3501,4112,3543,4080,3576,4047,3609,4023,3631,3998,3652,3975,3677,L,3975,3819,Q,4024,3829,4018,3848,4043,3839,4067,3879,L,4089,3879,4089,3907,Q,4081,3906,4074,3914,4067,3917,4061,3929,4041,3946,4045,3964,L,4022,3964,4022,4020,Q,4016,4030,4006,4043,3996,4057,4004,4102,4011,4146,3978,4152,3944,4158,3941,4166,3938,4174,3924,4176,3909,4177,3902,4180,3894,4182,3886,4198,3853,4228,3835,4249,3800,4287,3778,4305,3746,4340,3722,4362,3705,4372,3693,4387,3686,4392,3677,4423,L,3652,4423,Q,3582,4341,3550,4303,L,3431,4303,Q,3400,4306,3388,4288,3387,4287,3372,4253,L,3305,4253,3305,4275,3274,4275,3274,4289,3232,4289,3232,4385,Q,3232,4505,3236,4514,3249,4547,3301,4595,3308,4613,3333,4640,3348,4657,3349,4694,3348,4749,3328,4745,L,3328,4794,3308,4794,3308,4851,3286,4851,3286,4893,3255,4893,3255,4967,3277,4967,3280,4990,Q,3318,4990,3324,5002,3327,5006,3341,5015,3353,5022,3352,5035,3389,5035,3425,5061,L,3448,5061,3448,5035,3547,5035,3547,5010,3627,5010,Q,3641,5043,3661,5035,3661,5067,3678,5084,3683,5088,3690,5106,3699,5122,3712,5124,L,3712,5203,3681,5204,Q,3691,5229,3673,5242,3655,5255,3661,5274,3635,5264,3641,5296,3621,5319,3621,5321,3621,5328,3640,5349,3660,5370,3677,5370,L,3677,5363,3785,5363,3785,5338,3848,5338,3848,5320,3941,5320,3943,5338,Q,3972,5328,3986,5371,3991,5391,4030,5392,4056,5390,4070,5425,4076,5427,4086,5443,L,4117,5443,Q,4145,5443,4148,5428,4151,5414,4193,5414,4206,5414,4225,5396,4240,5381,4268,5389,4270,5362,4324,5361,4327,5358,4327,5348,4327,5339,4337,5338,L,4370,5338,Q,4402,5338,4417,5340,L,4417,5358,Q,4473,5358,4477,5369,4483,5383,4528,5392,4533,5392,4541,5407,4548,5420,4561,5419,4571,5418,4578,5431,4585,5446,4602,5450,4629,5454,4655,5463,4674,5462,4680,5469,4684,5473,4691,5488,4700,5500,4740,5501,4744,5508,4767,5510,4782,5513,4775,5532,L,4796,5532,Q,4801,5523,4813,5503,4824,5497,4831,5481,4831,5479,4834,5447,4835,5423,4849,5409,4854,5403,4854,5376,4854,5350,4866,5343,4879,5336,4885,5296,4916,5294,4923,5296,L,4943,5270,Q,4964,5266,5018,5256,5021,5252,5096,5250,5099,5225,5119,5225,5133,5225,5156,5205,5187,5174,5216,5161,5260,5136,5278,5118,5327,5098,5323,5072,L,5352,5072,Q,5358,5085,5359,5136,5367,5135,5392,5141,L,5417,5189,Q,5456,5189,5483,5189,L,5526,5189,Q,5520,5187,5548,5163,5561,5150,5643,5156,5657,5149,5671,5132,L,5710,5125,Q,5719,5122,5728,5101,5735,5081,5753,5077,5754,5056,5799,5021,5821,5005,5826,4992,5836,4963,5842,4954,5848,4944,5864,4928,5877,4912,5875,4893,5875,4812,5875,4807,L,5875,4727,Q,5875,4702,5847,4651,5846,4637,5838,4620,5826,4592,5826,4587,5826,4577,5804,4508,L,5757,4508,Q,5744,4508,5742,4499,5738,4490,5726,4490,L,5606,4490,Q,5515,4490,5504,4488,5496,4486,5495,4471,5493,4452,5490,4446,L,5468,4415,Q,5464,4408,5446,4391,5443,4361,5439,4357,5421,4344,5421,4332,5421,4321,5403,4304,L,5403,4250,5417,4250,5417,4179,Q,5441,4170,5441,4122,5440,4106,5467,4085,5503,4054,5510,4046,5517,4036,5535,4035,5552,4034,5559,4021,5566,4007,5580,4006,5596,4006,5602,3995,5605,3986,5630,3984,5638,3978,5646,3966,5651,3965,5665,3954,5667,3952,5671,3932,L,5654,3920,Q,5638,3908,5633,3901,5616,3877,5609,3866,5597,3851,5586,3848,5511,3847,5472,3847,5403,3847,5385,3816,5294,3703,5271,3703,5239,3706,5221,3706,5221,3715,5216,3732,L,5161,3732,5161,3285,Q,5183,3270,5183,3247,5183,3244,5183,3241,L,5183,3155,Q,5182,3138,5199,3127,5210,3116,5216,3098,5317,3052,5345,3042,5348,3041,5408,2989,5430,2966,5449,2925,5461,2907,5508,2863,5528,2844,5528,2794,5528,2753,5515,2741,5496,2722,5497,2697,5500,2611,5490,2598,5479,2582,5478,2549,Q,5477,2507,5474,2499,Z]],label:"Krumovgrad",shortLabel:"KR",labelPosition:[455.4,396],labelAlignment:[CEN,MID]},"05":{outlines:[[M,3091,4156,L,2993,4156,2993,4180,Q,2968,4194,2916,4228,2870,4257,2849,4255,2846,4255,2843,4254,L,2830,4254,2830,4273,2758,4273,2755,4294,2685,4294,2684,4327,2625,4327,Q,2613,4327,2613,4348,L,2579,4348,Q,2580,4356,2569,4372,2530,4377,2515,4356,2507,4343,2484,4344,2458,4349,2445,4348,2415,4327,2384,4327,2344,4326,2343,4326,2327,4321,2323,4297,L,2283,4297,Q,2280,4306,2224,4368,2219,4387,2192,4407,2168,4422,2161,4438,L,2044,4438,Q,2044,4428,2038,4417,L,2021,4417,2021,4438,1999,4438,1999,4459,1950,4459,1950,4482,1904,4481,1904,4518,1834,4518,Q,1787,4477,1766,4456,1749,4458,1746,4445,1740,4426,1738,4425,1696,4420,1700,4402,1678,4393,1646,4361,1619,4332,1581,4322,1580,4298,1556,4303,L,1552,4266,1539,4266,1539,4314,1525,4314,1524,4394,1501,4394,1501,4467,1474,4467,1474,4511,Q,1474,4514,1472,4527,1471,4539,1444,4547,1424,4588,1408,4589,1397,4609,1364,4640,1317,4680,1313,4691,1307,4706,1286,4716,1285,4723,1286,4735,1285,4744,1270,4748,1257,4752,1257,4783,1257,4784,1244,4796,1237,4802,1241,4816,L,1206,4819,1203,4867,1174,4870,1174,4896,1092,4896,1092,4973,1065,4973,1066,4991,Q,1065,5092,1068,5104,1071,5116,1085,5128,1098,5141,1098,5163,1098,5211,1101,5214,1135,5244,1155,5272,1160,5279,1182,5282,1204,5286,1211,5299,1218,5313,1256,5335,1278,5346,1311,5379,1320,5388,1349,5392,1370,5394,1371,5414,1378,5415,1405,5414,1427,5415,1433,5424,1449,5446,1500,5439,L,1500,5465,Q,1529,5462,1554,5491,1586,5527,1609,5534,1630,5541,1652,5585,1673,5581,1685,5597,1689,5603,1724,5603,1740,5603,1755,5616,1770,5629,1783,5628,1800,5627,1817,5638,1834,5648,1849,5648,1871,5648,1885,5660,1898,5675,1916,5675,1919,5674,1943,5688,1948,5690,1988,5690,2039,5690,2054,5670,2080,5664,2086,5659,2102,5636,2110,5637,L,2110,5603,2168,5600,Q,2180,5601,2200,5628,2217,5630,2254,5628,2283,5629,2279,5653,L,2372,5653,Q,2366,5629,2388,5628,2419,5626,2428,5610,2434,5582,2446,5575,2459,5566,2459,5557,L,2460,5539,2485,5539,Q,2485,5512,2501,5518,2501,5497,2507,5489,L,2522,5489,2522,5514,Q,2557,5529,2651,5593,2736,5642,2764,5682,L,2942,5682,2946,5679,2946,5647,2960,5647,2960,5587,3003,5587,3003,5568,Q,3012,5566,3047,5568,3074,5565,3063,5539,3102,5539,3232,5494,3270,5494,3344,5546,3431,5606,3445,5612,3469,5621,3528,5673,3578,5716,3618,5727,L,3632,5726,3632,5685,Q,3628,5673,3636,5671,3641,5670,3652,5667,3665,5657,3665,5631,3665,5603,3677,5594,3686,5584,3686,5565,L,3685,5532,Q,3709,5532,3708,5521,3707,5462,3736,5478,L,3736,5452,Q,3716,5452,3708,5450,3711,5425,3698,5414,3692,5409,3677,5383,L,3677,5370,Q,3660,5370,3640,5349,3621,5328,3621,5321,3621,5319,3641,5296,3635,5264,3661,5274,3655,5255,3673,5242,3691,5229,3681,5204,L,3712,5203,3712,5124,Q,3699,5122,3690,5106,3683,5088,3678,5084,3661,5067,3661,5035,3641,5043,3627,5010,L,3547,5010,3547,5035,3448,5035,3448,5061,3425,5061,Q,3389,5035,3352,5035,3353,5022,3341,5015,3327,5006,3324,5002,3318,4990,3280,4990,L,3277,4967,3255,4967,3255,4893,3286,4893,3286,4851,3308,4851,3308,4794,3328,4794,3328,4745,Q,3348,4749,3349,4694,3348,4657,3333,4640,3308,4613,3301,4595,3249,4547,3236,4514,3232,4505,3232,4385,L,3232,4250,Q,3208,4255,3207,4236,3209,4212,3206,4205,L,3161,4205,Q,3153,4182,3142,4185,Q,3090,4192,3091,4156,Z]],label:"Kirkovo",shortLabel:"KI",labelPosition:[240,494.1],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"kardzhali",type:"maps"}}})});