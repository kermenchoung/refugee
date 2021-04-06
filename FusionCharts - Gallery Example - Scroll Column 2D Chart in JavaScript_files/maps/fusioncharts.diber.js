(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=306)})({306:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(307);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},307:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts, Inc.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts, Inc.
 * @meta package_map_pack
 * @id fusionmaps.Diber.20.12-21-2012 09:20:12
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Diber",revision:20,standaloneInit:true,baseWidth:572,baseHeight:567,baseScaleFactor:10,entities:{"01":{outlines:[[M,4849,2647,Q,4839,2609,4815,2616,L,4791,2616,Q,4781,2616,4761,2636,4749,2629,4719,2645,4691,2643,4604,2649,4526,2640,4450,2652,4448,2652,4447,2652,4399,2653,4386,2674,L,4067,2674,Q,4055,2695,4017,2695,3973,2691,3953,2693,L,3819,2693,3815,2827,Q,3810,2839,3795,2858,3794,2866,3790,3052,L,3432,3051,Q,3430,3073,3406,3073,3379,3071,3368,3073,3374,3107,3330,3100,3334,3114,3325,3125,3311,3121,3298,3143,3275,3149,3268,3152,3260,3153,3260,3164,3259,3176,3248,3176,3224,3176,3217,3188,3207,3203,3190,3203,3187,3203,3186,3203,3176,3203,3176,3211,3174,3224,3172,3226,3149,3224,3142,3239,3139,3244,3116,3252,3116,3253,3106,3273,3091,3275,3081,3286,3062,3301,3057,3301,3042,3301,3035,3321,L,3006,3321,3006,3355,2987,3355,Q,2983,3460,2984,3488,2986,3516,2971,3525,2956,3535,2951,3578,L,2951,3733,Q,2949,3753,2943,3760,2930,3771,2931,3787,2928,3809,2928,3904,L,2927,3957,Q,2932,3970,2901,3998,L,2901,4064,Q,2866,4063,2860,4069,2852,4083,2847,4084,L,2760,4084,Q,2735,4083,2732,4087,2719,4102,2716,4103,L,2593,4103,Q,2579,4103,2560,4125,2556,4125,2556,4148,L,2524,4150,2522,4199,Q,2507,4206,2502,4209,2493,4216,2498,4232,2481,4236,2476,4236,L,2476,4290,Q,2477,4298,2460,4299,2441,4300,2441,4314,2440,4341,2426,4347,2422,4348,2423,4389,2388,4393,2390,4419,2390,4431,2377,4439,2364,4448,2364,4458,2366,4475,2357,4482,L,2339,4496,Q,2347,4518,2324,4539,2322,4562,2304,4577,2303,4611,2282,4621,2273,4625,2273,4649,2273,4657,2259,4663,2247,4667,2248,4714,L,2223,4714,Q,2220,4724,2223,4749,2223,4770,2200,4772,2196,4775,2195,4806,2172,4823,2172,4827,2171,4839,2170,4859,2167,4862,2144,4881,2149,4898,2139,4911,2133,4917,2119,4932,2124,4945,2110,4958,2094,4971,2095,4982,2096,5003,2081,5004,2066,5006,2066,5030,2066,5046,2053,5049,2042,5051,2045,5071,2047,5109,2018,5113,2020,5130,2019,5150,L,3124,5148,Q,3324,5144,3338,5145,3330,5126,3345,5124,3354,5123,3379,5124,L,3379,5103,3420,5103,3420,5075,3453,5075,Q,3445,5052,3463,5051,3473,5050,3495,5051,3492,5033,3503,5023,3516,5012,3533,5018,L,3535,4994,3574,4993,3574,4975,3588,4975,Q,3596,5037,3661,5140,3696,5195,3743,5301,3777,5364,3842,5457,3863,5490,3863,5496,3862,5515,3887,5538,3892,5549,3897,5581,3905,5606,3926,5607,L,3928,5626,5200,5626,Q,5204,5619,5204,5603,5204,5593,5156,5504,5155,5469,5141,5453,5136,5448,5119,5404,5105,5385,5102,5377,5102,5358,5095,5352,5078,5335,5075,5304,5075,5294,5059,5285,5045,5275,5047,5265,5055,5223,5028,5223,L,5026,5174,5050,5154,Q,5080,5147,5090,5132,5099,5117,5130,5107,5161,5069,5202,5030,L,5361,4884,Q,5389,4851,5446,4812,5478,4788,5524,4736,5554,4712,5591,4663,5659,4613,5664,4608,5669,4602,5640,4585,5611,4568,5581,4550,5550,4532,5530,4519,5425,4453,5389,4434,5332,4412,5315,4402,L,5241,4356,Q,5199,4319,5174,4311,5114,4289,5102,4271,L,5104,4014,5075,4014,Q,5068,3973,5037,3933,4993,3873,4987,3862,4926,3761,4896,3709,4747,3494,4700,3413,L,4700,3402,Q,4699,3396,4700,3392,4700,3387,4699,3387,4677,3373,4677,3363,4677,3359,4661,3335,4644,3320,4640,3313,L,4623,3286,4623,3267,Q,4632,3268,4649,3248,4669,3258,4678,3226,4686,3226,4701,3215,4706,3210,4725,3198,4741,3186,4761,3161,4766,3153,4782,3150,4798,3148,4807,3137,4844,3117,4844,3105,L,4841,3105,Q,4842,3104,4844,3104,4876,3083,4876,3077,L,4877,2647,Z]],label:"Bulqizë",shortLabel:"BU",labelPosition:[401.3,412],labelAlignment:[CEN,MID]},"02":{outlines:[[M,4658,523,Q,4625,540,4606,566,4595,580,4544,610,4535,625,4509,642,4472,663,4458,677,4379,746,4376,753,4345,773,4335,786,4309,811,4295,816,4275,839,4252,847,4233,851,4226,867,L,4226,886,4201,886,4201,903,4183,903,4183,859,Q,4161,864,4160,841,4158,808,4153,801,4141,787,4141,756,4120,735,4117,726,4116,722,4116,686,4115,678,4087,665,L,4087,618,Q,4074,609,4072,604,4069,600,4070,590,4070,579,4059,558,4045,529,4044,520,4020,494,4019,488,4016,460,4012,448,3997,433,3991,408,3986,384,3980,378,3964,364,3961,344,3955,319,3947,308,3940,270,3937,264,3916,251,3919,234,3921,217,3904,197,3887,178,3889,164,3890,150,3876,129,3862,104,3862,84,3862,69,3853,65,3842,60,3840,58,3831,40,3811,40,3789,40,3786,55,3785,64,3774,64,3756,64,3753,64,3757,87,3733,98,3703,110,3690,119,3686,121,3636,164,3513,260,3512,260,3479,293,3375,364,3291,423,3263,466,L,3245,466,Q,3217,438,3159,410,3090,378,3073,366,2952,308,2900,264,2880,282,2849,311,2818,340,2784,368,2750,396,2733,407,2716,419,2711,423,2705,427,2685,445,2664,462,2649,472,2635,481,2613,503,2591,524,2536,567,2482,610,2465,614,L,2465,627,Q,2517,687,2747,953,L,2746,964,Q,2755,966,2768,970,L,2768,992,Q,2773,1002,2778,1003,2780,1006,2780,1011,2779,1016,2781,1026,2784,1036,2783,1069,2787,1130,2802,1194,2802,1197,2803,1199,L,2800,1246,Q,2800,1280,2818,1305,2834,1329,2828,1391,2823,1432,2840,1470,2856,1506,2852,1539,2843,1614,2857,1631,2879,1660,2879,1698,2877,1727,2879,1782,2876,1797,2891,1811,2904,1824,2905,1836,L,2905,1964,Q,2905,1981,2914,1990,2924,2e3,2924,2022,L,2924,2103,Q,2924,2148,2933,2173,2946,2206,2956,2211,2960,2212,2960,2238,2960,2261,2957,2276,2954,2287,2937,2294,2918,2325,2907,2342,L,2864,2385,Q,2857,2401,2853,2410,2848,2424,2824,2415,2832,2444,2783,2481,2761,2494,2734,2544,2725,2556,2688,2599,2649,2642,2649,2666,2648,2689,2768,2788,L,2924,2931,Q,2961,2963,3057,3066,3078,3088,3130,3130,3173,3168,3186,3203,3187,3203,3190,3203,3207,3203,3217,3188,3224,3176,3248,3176,3259,3176,3260,3164,3260,3153,3268,3152,3275,3149,3298,3143,3311,3121,3325,3125,3334,3114,3330,3100,3374,3107,3368,3073,3379,3071,3406,3073,3430,3073,3432,3051,L,3790,3052,Q,3794,2866,3795,2858,3810,2839,3815,2827,L,3819,2693,3953,2693,Q,3973,2691,4017,2695,4055,2695,4067,2674,L,4386,2674,Q,4399,2653,4447,2652,4448,2652,4450,2652,4526,2640,4604,2649,4691,2643,4719,2645,4749,2629,4761,2636,4781,2616,4791,2616,L,4815,2616,Q,4839,2609,4849,2647,L,4877,2647,4876,3077,Q,4876,3083,4844,3104,L,4844,3105,Q,4844,3117,4807,3137,4798,3148,4782,3150,4766,3153,4761,3161,4741,3186,4725,3198,4706,3210,4701,3215,4686,3226,4678,3226,4669,3258,4649,3248,4632,3268,4623,3267,L,4623,3286,4640,3313,Q,4644,3320,4661,3335,4677,3359,4677,3363,4677,3373,4699,3387,4705,3378,4712,3378,4726,3378,4742,3354,4748,3351,4759,3346,4770,3341,4787,3326,4798,3323,4812,3316,4815,3302,4836,3294,4858,3287,4862,3279,4867,3272,4884,3269,4900,3267,4943,3229,4985,3191,5012,3181,5039,3171,5041,3154,5050,3150,5065,3140,5106,3101,5146,3074,5186,3047,5210,3031,5235,3015,5288,2979,5334,2937,5376,2924,5389,2920,5413,2890,5429,2869,5454,2861,5454,2804,5452,2797,5433,2780,5433,2764,L,5433,2721,Q,5406,2695,5406,2651,5406,2632,5394,2613,5380,2595,5380,2583,5378,2541,5367,2508,5356,2478,5356,2438,5356,2429,5341,2409,5327,2390,5331,2368,5333,2352,5322,2335,5308,2320,5304,2311,L,5304,2244,Q,5289,2228,5284,2218,5272,2199,5276,2176,5277,2170,5277,2165,L,4690,2165,Q,4671,2190,4667,2192,4664,2194,4639,2194,4611,2194,4363,2192,L,4341,2192,4341,2147,Q,4315,2134,4318,2114,L,4312,2090,Q,4312,2074,4303,2071,4294,2068,4294,2056,L,4294,2029,Q,4285,2010,4273,2e3,4261,1990,4261,1980,4263,1952,4259,1947,4241,1938,4241,1930,4244,1903,4239,1894,4221,1869,4221,1866,L,4221,1835,Q,4219,1827,4199,1816,4189,1809,4188,1788,4188,1765,4183,1760,4161,1749,4161,1741,L,4161,1710,Q,4135,1680,4139,1655,4140,1634,4110,1612,L,4110,1580,Q,4096,1567,4089,1561,L,4089,1482,4117,1483,Q,4131,1483,4134,1459,L,4174,1459,Q,4180,1430,4213,1432,4235,1432,4241,1401,L,4288,1401,Q,4283,1381,4312,1377,4342,1373,4342,1365,4346,1356,4376,1353,4404,1351,4403,1331,4426,1333,4445,1323,4455,1306,4455,1296,L,4496,1295,Q,4511,1276,4523,1277,4534,1279,4544,1264,4553,1248,4572,1248,4590,1248,4600,1231,4606,1228,4634,1227,4643,1222,4656,1200,L,4692,1200,Q,4692,1172,4707,1173,L,4747,1173,Q,4753,1171,4767,1150,4792,1150,4798,1145,4820,1123,4826,1125,4844,1124,4855,1114,4870,1097,4873,1097,4897,1094,4905,1093,L,4917,1093,4917,1122,Q,4932,1126,4939,1130,4947,1134,4950,1159,L,4978,1176,4978,1202,4985,1208,5022,1256,Q,5026,1260,5035,1291,L,5058,1314,Q,5076,1337,5076,1347,5076,1351,5095,1374,L,5123,1404,Q,5142,1425,5150,1425,L,5150,1453,Q,5160,1431,5204,1377,5256,1313,5284,1286,5313,1259,5330,1236,5347,1213,5360,1200,5373,1188,5386,1165,5399,1150,5633,880,5631,864,5636,847,5578,843,5514,788,5495,773,5457,762,5420,750,5408,740,5322,705,5299,683,5284,668,5252,658,5214,644,5199,635,5128,606,5095,581,5086,575,5045,553,4994,528,4991,527,4954,518,4936,508,4903,482,4888,477,L,4830,448,Q,4793,429,4782,421,4707,471,4706,483,L,4675,490,Q,4671,515,4658,523,Z]],label:"Dibër",shortLabel:"DI",labelPosition:[355.6,171.3],labelAlignment:[CEN,MID]},"03":{outlines:[[M,2778,1003,Q,2773,1002,2768,992,L,2768,970,Q,2755,966,2746,964,L,2746,968,Q,2742,967,2737,967,2705,965,2679,988,2649,1023,2626,1039,2537,1093,2529,1116,2389,1225,2305,1299,2173,1411,2114,1459,1981,1574,1927,1620,1838,1692,1825,1705,1794,1741,1783,1749,1764,1789,1743,1789,1740,1789,1738,1789,1671,1783,1609,1808,1511,1806,1491,1810,1470,1813,1439,1824,1407,1835,1365,1835,1323,1835,1260,1851,1188,1870,1129,1864,1070,1857,991,1887,L,831,1887,Q,806,1915,772,1915,738,1915,686,1916,634,1916,617,1917,599,1918,530,1807,461,1696,452,1687,448,1668,424,1660,422,1643,422,1606,L,392,1604,Q,371,1603,368,1609,360,1620,344,1628,333,1644,311,1658,276,1677,270,1682,222,1726,198,1748,88,1842,71,1863,L,47,1863,44,1914,Q,44,1938,69,1962,L,69,2038,Q,78,2065,97,2105,91,2175,102,2189,113,2202,119,2256,122,2309,135,2325,137,2329,141,2406,L,141,2446,Q,141,2464,163,2482,173,2514,187,2630,L,187,2717,Q,215,2740,220,2800,226,2861,241,2881,256,2901,245,2984,246,2994,260,3023,271,3048,269,3071,265,3095,293,3158,298,3172,294,3203,313,3217,326,3231,356,3262,423,3355,539,3486,603,3541,667,3596,773,3738,921,3871,1034,4017,1037,4022,1085,4062,1116,4087,1123,4108,1597,4634,1650,4690,1702,4745,1748,4785,1793,4825,1811,4863,1830,4902,1932,4989,1950,5014,2003,5051,2015,5077,2018,5113,2047,5109,2045,5071,2042,5051,2053,5049,2066,5046,2066,5030,2066,5006,2081,5004,2096,5003,2095,4982,2094,4971,2110,4958,2124,4945,2119,4932,2133,4917,2139,4911,2149,4898,2144,4881,2167,4862,2170,4859,2171,4839,2172,4827,2172,4823,2195,4806,2196,4775,2200,4772,2223,4770,2223,4749,2220,4724,2223,4714,L,2248,4714,Q,2247,4667,2259,4663,2273,4657,2273,4649,2273,4625,2282,4621,2303,4611,2304,4577,2322,4562,2324,4539,2347,4518,2339,4496,L,2357,4482,Q,2366,4475,2364,4458,2364,4448,2377,4439,2390,4431,2390,4419,2388,4393,2423,4389,2422,4348,2426,4347,2440,4341,2441,4314,2441,4300,2460,4299,2477,4298,2476,4290,L,2476,4236,Q,2481,4236,2498,4232,2493,4216,2502,4209,2507,4206,2522,4199,L,2524,4150,2556,4148,Q,2556,4125,2560,4125,2579,4103,2593,4103,L,2716,4103,Q,2719,4102,2732,4087,2735,4083,2760,4084,L,2847,4084,Q,2852,4083,2860,4069,2866,4063,2901,4064,L,2901,3998,Q,2932,3970,2927,3957,L,2928,3904,Q,2928,3809,2931,3787,2930,3771,2943,3760,2949,3753,2951,3733,L,2951,3578,Q,2956,3535,2971,3525,2986,3516,2984,3488,2983,3460,2987,3355,L,3006,3355,3006,3321,3035,3321,Q,3042,3301,3057,3301,3062,3301,3081,3286,3091,3275,3106,3273,3116,3253,3116,3252,3139,3244,3142,3239,3149,3224,3172,3226,3174,3224,3176,3211,3176,3203,3186,3203,3173,3168,3130,3130,3078,3088,3057,3066,2961,2963,2924,2931,L,2768,2788,Q,2648,2689,2649,2666,2649,2642,2688,2599,2725,2556,2734,2544,2761,2494,2783,2481,2832,2444,2824,2415,2848,2424,2853,2410,2857,2401,2864,2385,L,2907,2342,Q,2918,2325,2937,2294,2954,2287,2957,2276,2960,2261,2960,2238,2960,2212,2956,2211,2946,2206,2933,2173,2924,2148,2924,2103,L,2924,2022,Q,2924,2e3,2914,1990,2905,1981,2905,1964,L,2905,1836,Q,2904,1824,2891,1811,2876,1797,2879,1782,2877,1727,2879,1698,2879,1660,2857,1631,2843,1614,2852,1539,2856,1506,2840,1470,2823,1432,2828,1391,2834,1329,2818,1305,2800,1280,2800,1246,L,2803,1199,Q,2802,1197,2802,1194,2787,1130,2783,1069,2784,1036,2781,1026,2779,1016,2780,1011,Q,2780,1006,2778,1003,Z]],label:"Mat",shortLabel:"MT",labelPosition:[161.5,303.9],labelAlignment:[CEN,MID]},"04":{outlines:[[M,4855,1114,Q,4844,1124,4826,1125,4820,1123,4798,1145,4792,1150,4767,1150,4753,1171,4747,1173,L,4707,1173,Q,4692,1172,4692,1200,L,4656,1200,Q,4643,1222,4634,1227,4606,1228,4600,1231,4590,1248,4572,1248,4553,1248,4544,1264,4534,1279,4523,1277,4511,1276,4496,1295,L,4455,1296,Q,4455,1306,4445,1323,4426,1333,4403,1331,4404,1351,4376,1353,4346,1356,4342,1365,4342,1373,4312,1377,4283,1381,4288,1401,L,4241,1401,Q,4235,1432,4213,1432,4180,1430,4174,1459,L,4134,1459,Q,4131,1483,4117,1483,L,4089,1482,4089,1561,Q,4096,1567,4110,1580,L,4110,1612,Q,4140,1634,4139,1655,4135,1680,4161,1710,L,4161,1741,Q,4161,1749,4183,1760,4188,1765,4188,1788,4189,1809,4199,1816,4219,1827,4221,1835,L,4221,1866,Q,4221,1869,4239,1894,4244,1903,4241,1930,4241,1938,4259,1947,4263,1952,4261,1980,4261,1990,4273,2e3,4285,2010,4294,2029,L,4294,2056,Q,4294,2068,4303,2071,4312,2074,4312,2090,L,4318,2114,Q,4315,2134,4341,2147,L,4341,2192,4363,2192,Q,4611,2194,4639,2194,4664,2194,4667,2192,4671,2190,4690,2165,L,5277,2165,Q,5275,2150,5267,2136,5255,2114,5255,2105,5257,2052,5252,2016,5225,1993,5226,1985,L,5226,1841,Q,5226,1821,5216,1802,5204,1784,5204,1770,5204,1703,5202,1677,5198,1635,5176,1609,L,5181,1518,Q,5181,1492,5165,1482,5147,1471,5149,1456,5149,1454,5150,1453,L,5150,1425,Q,5142,1425,5123,1404,L,5095,1374,Q,5076,1351,5076,1347,5076,1337,5058,1314,L,5035,1291,Q,5026,1260,5022,1256,L,4985,1208,4978,1202,4978,1176,4950,1159,Q,4947,1134,4939,1130,4932,1126,4917,1122,L,4917,1093,4905,1093,Q,4897,1094,4873,1097,Q,4870,1097,4855,1114,Z]],label:"Peshkopi",shortLabel:"PE",labelPosition:[468.3,164.3],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"diber",type:"maps"}}})});