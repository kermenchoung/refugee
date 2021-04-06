(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=134)})({134:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(135);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},135:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts, Inc.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts, Inc.
 * @meta package_map_pack
 * @id fusionmaps.NewMexicoCongressional.18.08-10-2012 10:47:45
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"NewMexicoCongressional",revision:18,standaloneInit:true,baseWidth:527,baseHeight:588,baseScaleFactor:10,entities:{1:{outlines:[[M,2782,2077,L,2759,2079,Q,2748,2079,2745,2082,2680,2079,2629,2080,2583,2080,2565,2079,2548,2084,2548,2072,L,2546,2058,2546,1987,2548,1979,Q,2566,1978,2577,1977,2579,1976,2579,1955,L,2578,1926,Q,2577,1901,2576,1891,2550,1893,2544,1888,L,2514,1869,2508,1869,2509,1843,Q,2511,1825,2511,1822,2509,1816,2509,1813,2502,1813,2500,1812,L,2500,1798,Q,2500,1771,2499,1767,L,2499,1664,Q,2466,1664,2447,1662,L,2447,1661,Q,2447,1652,2439,1651,2429,1652,2427,1654,2424,1658,2419,1660,2411,1664,2410,1681,L,2411,1687,2411,1687,2409,1731,Q,2409,1750,2408,1750,2395,1751,2383,1751,L,2383,1762,2333,1760,Q,2332,1756,2331,1755,2331,1755,2324,1755,2318,1755,2313,1757,2313,1762,2310,1763,2300,1762,2298,1763,2296,1764,2293,1767,2297,1780,2284,1781,L,2260,1780,Q,2262,1787,2256,1789,L,2233,1790,Q,2236,1796,2230,1801,2223,1806,2220,1808,2211,1816,2210,1826,L,2212,1851,Q,2221,1848,2222,1858,2223,1859,2223,1861,L,2222,1895,Q,2220,1899,2208,1898,2181,1898,2180,1898,L,2118,1897,Q,2113,1898,2108,1897,L,2107,1900,Q,2107,1909,2125,1912,2135,1921,2142,1921,2142,1922,2145,1934,2145,1941,2130,1940,2129,1940,2128,1940,2115,1939,2110,1939,2088,1941,2085,1938,2085,1934,2085,1932,L,2084,1898,Q,2065,1899,2061,1901,L,1914,1900,1914,1928,Q,1914,1936,1921,1938,1927,1942,1927,1947,L,1927,2051,Q,1927,2060,1925,2079,1926,2094,1936,2096,L,1936,2167,2103,2167,2103,2176,2151,2176,Q,2167,2144,2167,2144,2170,2140,2171,2126,2176,2117,2210,2095,2211,2094,2212,2093,L,2231,2093,Q,2236,2094,2260,2106,2269,2111,2280,2120,2281,2121,2298,2121,2300,2121,2302,2121,2347,2121,2359,2115,2376,2115,2387,2120,2384,2136,2400,2137,L,2400,2158,2395,2174,Q,2393,2178,2386,2187,2386,2213,2375,2223,2371,2227,2369,2241,2368,2252,2361,2252,2332,2252,2321,2253,2321,2269,2319,2313,2231,2314,2132,2313,2118,2326,2119,2333,2119,2339,2113,2341,2110,2344,2099,2347,2089,2352,2084,2367,2085,2371,2084,2403,2084,2435,2088,2469,L,2092,2469,2092,2492,2080,2493,Q,2080,2503,2083,2521,2083,2540,2073,2545,2062,2550,2062,2559,2062,2569,2066,2569,2072,2569,2074,2579,2075,2584,2074,2593,2074,2601,2079,2602,2094,2605,2097,2608,2100,2612,2110,2612,2131,2612,2144,2619,2161,2627,2210,2640,2260,2653,2320,2696,L,2341,2697,2341,2689,2359,2689,Q,2359,2691,2362,2775,2362,2777,2362,2779,2362,2781,2361,2784,L,2361,2876,3274,2876,Q,3274,2848,3272,2842,L,3272,2566,Q,3271,2538,3270,2524,L,3290,2524,3290,2496,Q,3286,2474,3287,2418,3287,2349,3286,2333,L,3286,2078,3248,2078,Q,3203,2076,3186,2076,3186,2076,3182,2076,3174,2077,3148,2077,3114,2081,3105,2081,3085,2078,3084,2078,L,2909,2077,Q,2904,2080,2889,2081,L,2844,2080,Q,2808,2077,2782,2077,Z]],label:"1st district",shortLabel:"1st",labelPosition:[272.2,240.4],labelAlignment:[CEN,MID]},2:{outlines:[[M,4248,1909,Q,4245,1902,4245,1892,L,4045,1892,4045,1900,3347,1900,Q,3347,1899,3346,1898,L,3287,1898,3286,2334,Q,3287,2349,3287,2418,3286,2474,3291,2497,L,3291,2524,3270,2524,Q,3271,2538,3272,2567,L,3272,2842,Q,3274,2848,3274,2876,L,2361,2876,2361,2784,Q,2362,2781,2362,2779,2362,2777,2362,2775,2359,2691,2359,2689,L,2341,2689,2341,2697,2320,2696,Q,2260,2653,2211,2640,2161,2627,2144,2619,2131,2612,2110,2612,2100,2612,2097,2608,2094,2605,2079,2602,2074,2601,2074,2593,2075,2584,2074,2580,2072,2569,2066,2569,2062,2569,2062,2559,2062,2550,2073,2546,2083,2540,2083,2521,2080,2503,2080,2493,L,2092,2492,2092,2469,2088,2469,Q,2084,2435,2084,2403,2085,2371,2084,2367,2089,2352,2099,2348,2110,2344,2113,2342,2119,2339,2119,2333,2118,2326,2133,2313,2231,2314,2319,2313,2321,2269,2321,2254,2332,2252,2361,2252,2368,2252,2370,2241,2371,2227,2376,2223,2386,2213,2386,2188,2393,2178,2395,2175,L,2400,2158,2400,2137,Q,2384,2136,2387,2120,2376,2115,2359,2115,2347,2121,2302,2121,2300,2121,2299,2121,2281,2121,2280,2120,2269,2111,2260,2107,2236,2094,2231,2094,L,2213,2094,Q,2211,2094,2211,2095,2176,2117,2171,2126,2170,2140,2167,2144,L,2151,2177,2103,2177,2103,2167,1936,2167,1936,2097,Q,1926,2094,1926,2079,1927,2060,1927,2051,L,1927,1948,Q,1927,1942,1921,1939,1914,1936,1914,1928,L,1914,1900,1888,1900,Q,1865,1896,1865,1896,L,1862,1896,Q,1774,1895,1731,1892,L,1723,1892,Q,1713,1874,1709,1865,1703,1843,1699,1831,1693,1808,1679,1808,L,1584,1811,Q,1564,1809,1563,1807,1561,1800,1555,1800,1547,1802,1542,1802,L,1525,1802,Q,1503,1802,1486,1799,L,1390,1800,Q,1370,1797,1370,1796,L,1369,1777,Q,1373,1763,1374,1760,1373,1753,1363,1752,1334,1752,1333,1752,L,1289,1751,Q,1285,1751,1282,1770,1281,1772,1281,1793,L,1174,1792,Q,1149,1793,1134,1791,L,946,1791,Q,921,1792,911,1792,L,909,1792,Q,899,1791,855,1791,L,852,1780,Q,831,1779,805,1779,775,1782,738,1782,L,649,1783,648,1791,Q,633,1787,618,1794,602,1801,603,1811,603,1815,606,1823,L,612,1821,Q,614,1821,614,1828,L,613,1842,Q,613,1849,614,1850,615,1851,622,1851,L,622,1855,Q,620,1860,620,1874,L,621,1899,Q,623,1902,632,1904,L,632,1954,Q,606,1977,601,1978,596,1979,595,1983,594,1988,588,1989,575,1990,573,1983,571,1978,566,1977,561,1976,561,1975,559,1971,546,1971,536,1970,541,1960,538,1959,532,1959,518,1959,522,1968,505,1970,491,1968,482,1967,482,1972,480,1978,472,1979,453,1986,445,1986,442,1986,427,1998,423,2004,417,2007,L,401,2008,Q,387,2011,383,2011,376,2007,376,2004,376,1996,382,1993,389,1989,396,1984,392,1973,392,1971,L,392,1966,Q,381,1965,381,1964,384,1956,384,1949,384,1931,369,1923,357,1918,356,1916,350,1908,342,1909,L,336,1909,Q,334,1917,334,1918,333,1919,326,1919,L,295,1918,295,1928,276,1927,Q,277,1911,274,1901,247,1899,229,1899,L,197,1899,Q,196,1913,197,1931,196,1932,197,1933,196,1952,196,2015,198,2029,199,2032,198,2051,196,2085,L,195,2123,186,2123,Q,188,2255,185,2264,L,185,2270,Q,185,2275,186,2280,187,2284,186,2309,186,2334,188,2345,188,2384,183,2394,176,2477,178,2480,179,2484,179,2511,179,2537,176,2551,L,176,2643,Q,174,2648,174,2651,L,168,2715,Q,162,2734,169,2770,170,2774,170,2784,170,2797,167,2834,L,166,2914,Q,166,2932,168,2942,L,167,2985,Q,167,2988,161,2989,156,2988,157,2992,156,2998,155,3013,155,3030,160,3045,158,3131,158,3204,155,3221,155,3278,L,152,3278,151,3277,148,3277,149,3316,Q,149,3362,148,3397,147,3407,147,3458,L,146,3490,Q,146,3501,145,3522,L,144,3565,Q,137,3565,137,3577,137,3583,138,3612,137,3631,141,3643,141,3644,142,3646,137,3679,137,3718,137,3720,137,3722,L,137,3766,Q,138,3774,137,3791,L,136,3853,Q,135,3860,136,3874,135,3884,129,3883,130,3912,128,3944,128,3945,128,3946,L,128,4052,Q,127,4055,128,4058,126,4148,126,4149,L,120,4149,120,4367,Q,116,4392,116,4424,L,116,4448,109,4448,110,4471,Q,110,4492,108,4527,107,4568,106,4599,L,108,4638,Q,108,4671,106,4730,L,102,4730,101,4729,98,4729,Q,98,4730,98,4730,96,4901,96,4928,96,4929,96,4948,L,96,5030,88,5030,89,5109,Q,89,5111,89,5112,88,5131,88,5168,L,88,5185,Q,90,5192,90,5206,L,90,5267,Q,89,5286,88,5306,L,89,5318,80,5318,80,5345,Q,81,5353,81,5376,L,78,5507,Q,80,5514,81,5539,L,78,5601,77,5601,Q,74,5600,72,5600,L,71,5607,Q,69,5658,69,5714,69,5715,69,5717,L,69,5717,Q,68,5751,68,5800,L,68,5809,Q,108,5808,185,5807,L,190,5807,202,5807,Q,209,5807,220,5809,222,5809,232,5812,242,5815,244,5817,246,5818,268,5819,L,297,5819,Q,350,5817,411,5823,412,5823,413,5823,445,5823,476,5821,L,563,5821,Q,602,5821,640,5819,660,5819,662,5830,L,694,5830,Q,714,5829,793,5829,797,5614,798,5595,L,798,5563,800,5559,800,5518,Q,797,5446,797,5408,L,798,5376,841,5377,Q,848,5375,855,5375,L,855,5374,858,5374,Q,857,5374,855,5375,856,5375,875,5375,878,5375,893,5377,898,5377,945,5372,L,985,5372,Q,991,5372,998,5372,1054,5372,1108,5375,1116,5375,1174,5379,1239,5379,1283,5380,1292,5380,1331,5379,1356,5377,1369,5377,1370,5377,1372,5377,L,1390,5377,1401,5380,1435,5384,Q,1459,5384,1463,5385,1495,5389,1498,5389,1509,5389,1526,5379,1537,5379,1579,5384,1655,5382,1654,5389,1668,5389,1691,5385,L,1796,5385,Q,1829,5385,1833,5386,L,1835,5387,1929,5387,Q,1938,5388,2003,5389,L,2048,5393,Q,2098,5393,2139,5394,2140,5393,2140,5394,2141,5393,2142,5394,2221,5390,2223,5390,2225,5390,2242,5392,L,2243,5375,Q,2242,5369,2221,5367,2196,5361,2196,5361,2190,5347,2188,5346,2169,5333,2166,5325,2164,5321,2154,5309,2149,5303,2151,5291,L,2152,5291,2151,5268,2161,5268,Q,2161,5236,2165,5236,2166,5236,2171,5238,L,2173,5237,2173,5218,Q,2160,5222,2161,5212,2164,5200,2162,5197,2153,5196,2153,5189,2153,5179,2156,5178,2164,5174,2169,5168,L,2473,5168,Q,2479,5170,2498,5170,L,2722,5170,Q,2751,5175,2825,5172,L,2910,5172,Q,2916,5172,2921,5172,2995,5172,3053,5171,3054,5171,3056,5171,3068,5171,3102,5172,L,3143,5171,Q,3147,5172,3159,5172,L,3161,5172,Q,3166,5171,3186,5172,L,3193,5171,3235,5171,Q,3281,5168,3308,5168,3309,5168,3310,5168,3367,5168,3401,5170,3420,5169,3459,5167,L,3678,5168,Q,3724,5169,3782,5169,3809,5169,3826,5168,L,4025,5168,Q,4027,5162,4027,5159,L,4333,5160,Q,4452,5160,4467,5157,4468,5157,4487,5157,4502,5158,4520,5160,4552,5161,4635,5159,4635,5149,4655,5150,L,4689,5149,Q,4733,5149,4766,5148,L,5031,5147,Q,5038,5149,5049,5149,5062,5149,5062,5148,5061,5145,5063,5138,L,5208,5138,Q,5207,4886,5207,4843,5207,4772,5197,4716,5197,4493,5196,4471,5195,4450,5192,4438,5196,4367,5184,4356,5184,4001,5179,3866,5179,3864,5179,3863,5173,3618,5173,3542,L,5126,3542,Q,5092,3536,5073,3536,5057,3536,5057,3551,L,4925,3551,Q,4862,3549,4851,3549,4849,3549,4848,3549,4839,3551,4821,3552,4801,3551,4792,3551,L,4792,3471,Q,4762,3468,4616,3468,4609,3352,4611,3301,4611,3301,4611,3300,4608,3301,4605,3302,L,4512,3302,Q,4512,3213,4512,3205,4503,3112,4503,3100,4503,3054,4504,3035,L,4486,3036,Q,4459,3035,4416,3035,4415,3027,4414,2854,L,4406,2854,4408,2789,Q,4406,2769,4406,2766,4403,2589,4403,2513,4387,2516,4258,2512,L,4258,2466,Q,4258,2464,4258,2463,4249,2341,4245,2287,L,4247,2285,4247,2242,4248,2242,Z]],label:"2nd district",shortLabel:"2nd",labelPosition:[263.8,379],labelAlignment:[CEN,MID]},3:{outlines:[[M,3392,89,Q,2156,92,2146,92,2088,87,2044,90,L,2044,80,Q,2028,81,2017,83,L,1903,83,Q,1900,84,1896,84,1856,84,1812,82,L,1695,79,Q,1693,79,1692,70,L,1681,70,Q,1641,73,1581,74,L,1444,71,Q,1443,71,1442,71,1391,73,1336,72,1330,72,1325,72,1222,72,1187,70,L,1002,68,Q,1004,60,985,60,957,65,906,65,892,65,845,60,844,60,844,60,837,63,811,62,L,666,61,666,50,Q,544,51,515,51,496,56,488,55,481,53,455,50,429,47,385,49,342,51,328,50,326,44,319,45,L,320,45,Q,321,46,268,42,270,52,269,59,L,268,95,256,95,255,132,Q,254,158,254,197,L,256,253,Q,259,323,251,384,L,246,472,Q,244,480,246,524,L,245,666,236,666,237,695,Q,235,711,234,770,235,772,234,773,L,234,880,Q,235,900,236,906,L,236,959,226,960,Q,225,1033,228,1095,229,1102,229,1111,L,229,1115,Q,229,1125,228,1129,L,228,1175,Q,227,1177,225,1203,224,1211,223,1241,L,216,1241,Q,220,1377,218,1385,218,1394,216,1411,L,217,1447,Q,217,1466,214,1549,L,207,1549,Q,205,1718,205,1727,205,1744,205,1744,L,205,1829,Q,206,1831,206,1839,206,1848,197,1848,196,1861,196,1898,L,229,1898,Q,247,1899,274,1900,277,1911,276,1927,L,295,1928,295,1918,325,1919,Q,333,1919,334,1918,334,1917,336,1909,L,342,1909,Q,350,1908,356,1916,357,1918,368,1923,384,1931,384,1948,384,1956,381,1964,381,1965,391,1966,L,392,1971,Q,392,1973,396,1983,389,1989,382,1993,376,1996,376,2004,376,2007,383,2011,387,2011,400,2008,L,417,2007,Q,423,2004,427,1998,442,1986,444,1986,453,1986,471,1979,480,1978,481,1972,482,1967,491,1968,505,1970,522,1968,518,1959,532,1959,538,1959,541,1960,536,1970,546,1971,559,1971,560,1975,561,1976,566,1977,571,1978,573,1983,575,1990,588,1988,594,1988,595,1982,596,1979,600,1978,606,1977,632,1954,L,632,1903,Q,623,1902,621,1898,L,620,1874,Q,620,1860,622,1855,L,622,1850,Q,615,1851,614,1850,613,1849,613,1842,L,614,1827,Q,614,1821,612,1821,L,605,1823,Q,603,1815,602,1811,602,1801,618,1794,633,1787,648,1791,L,649,1782,738,1782,Q,775,1782,805,1778,831,1779,852,1780,L,855,1791,Q,899,1791,909,1792,L,911,1792,Q,921,1792,946,1790,L,1134,1791,Q,1149,1793,1174,1792,L,1281,1793,Q,1281,1772,1281,1770,1285,1751,1288,1751,L,1332,1752,Q,1334,1752,1362,1752,1373,1753,1373,1760,1373,1763,1369,1776,L,1369,1796,Q,1370,1797,1390,1799,L,1485,1799,Q,1503,1802,1525,1802,L,1542,1802,Q,1547,1802,1555,1800,1561,1800,1563,1807,1564,1809,1584,1810,L,1678,1808,Q,1693,1808,1699,1831,1703,1843,1709,1865,1713,1874,1723,1892,L,1731,1892,Q,1774,1895,1862,1895,L,1865,1895,Q,1865,1896,1887,1899,L,2061,1901,Q,2065,1899,2084,1898,L,2085,1932,Q,2085,1934,2085,1938,2088,1941,2110,1939,2115,1939,2128,1940,2129,1940,2130,1940,2145,1941,2145,1934,2142,1922,2142,1921,2135,1921,2125,1912,2107,1909,2107,1900,L,2108,1897,Q,2113,1898,2118,1897,L,2180,1898,Q,2181,1898,2208,1898,2220,1899,2222,1895,L,2223,1861,Q,2223,1859,2222,1858,2221,1848,2212,1851,L,2210,1826,Q,2211,1816,2220,1808,2223,1806,2230,1801,2236,1796,2233,1790,L,2256,1789,Q,2262,1787,2260,1780,L,2284,1781,Q,2297,1780,2293,1767,2296,1764,2298,1763,2300,1762,2310,1763,2313,1762,2313,1757,2318,1755,2324,1755,2331,1755,2331,1755,2332,1756,2333,1760,L,2383,1762,2383,1751,Q,2395,1751,2408,1750,2409,1750,2409,1731,L,2411,1687,2411,1687,2410,1681,Q,2411,1664,2419,1660,2424,1658,2427,1654,2429,1652,2439,1651,2447,1652,2447,1661,L,2447,1662,Q,2466,1664,2499,1664,L,2499,1767,Q,2500,1771,2500,1798,L,2500,1812,Q,2502,1813,2509,1813,2509,1816,2511,1822,2511,1825,2509,1843,L,2508,1869,2514,1869,2544,1888,Q,2550,1893,2576,1891,2577,1901,2578,1926,L,2579,1955,Q,2579,1976,2577,1977,2566,1978,2548,1979,L,2546,1987,2546,2058,2548,2072,Q,2548,2084,2565,2079,2583,2080,2629,2080,2680,2079,2745,2082,2748,2079,2759,2079,L,2782,2077,Q,2808,2077,2844,2080,L,2889,2081,Q,2904,2080,2909,2077,L,3084,2078,Q,3085,2078,3105,2081,3114,2081,3148,2077,3174,2077,3182,2076,3186,2076,3186,2076,3203,2076,3248,2078,L,3286,2078,3287,1898,3346,1898,Q,3347,1899,3347,1899,L,4045,1899,4045,1892,4245,1892,Q,4245,1902,4248,1908,L,4248,2242,4247,2242,4247,2285,4245,2287,Q,4249,2341,4258,2462,4258,2464,4258,2466,L,4258,2511,Q,4387,2516,4403,2512,4403,2589,4406,2766,4406,2769,4407,2788,L,4406,2851,4414,2851,Q,4414,2853,4414,2854,4415,3027,4415,3035,4459,3035,4486,3036,L,4504,3035,Q,4503,3054,4502,3099,4503,3112,4511,3205,4512,3213,4512,3301,L,4605,3301,Q,4608,3301,4611,3300,4611,3301,4611,3301,4609,3352,4616,3467,4762,3468,4792,3471,L,4791,3550,Q,4801,3551,4820,3551,4839,3551,4848,3549,4849,3549,4851,3549,4862,3549,4925,3550,L,5057,3550,Q,5057,3536,5073,3536,5092,3536,5126,3541,L,5173,3541,Q,5173,3540,5175,3538,5171,3228,5171,3203,5171,3130,5172,3116,5172,3114,5172,3113,5162,2999,5162,2922,5166,2859,5166,2849,5166,2779,5158,2767,5157,2753,5156,2593,5157,2546,5151,2430,5144,2340,5144,2212,5144,2196,5145,2187,5146,2184,5147,2182,5135,1941,5137,1869,5137,1868,5137,1867,5130,1619,5129,1570,5124,1545,5124,1521,5124,1497,5117,1491,5114,1175,5111,1079,L,5105,1079,Q,5112,902,5102,747,L,5095,747,5095,579,Q,5097,574,5099,567,L,5099,562,5127,562,Q,5126,528,5128,489,5128,487,5128,486,5124,464,5124,439,L,5123,327,5119,326,Q,5113,194,5114,53,4962,54,4942,54,4938,55,4938,55,L,4939,60,Q,4940,64,4932,64,L,4784,61,Q,4757,61,4706,64,L,4706,64,Q,4637,63,4619,62,L,4591,62,Q,4590,71,4588,72,4588,73,4574,73,L,4492,72,Q,4455,72,4426,74,4413,74,4306,71,L,4309,71,Q,4309,69,4258,72,4253,72,4253,81,L,3398,81,Q,3394,82,3392,89,Z]],label:"3rd district",shortLabel:"3rd",labelPosition:[268.6,83.7],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"newmexicocongressional",type:"maps"}}})});