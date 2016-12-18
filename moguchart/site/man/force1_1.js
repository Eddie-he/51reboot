!function(){


var away_player = new Array(195, 2708, 1355, 1141, 3127, 1181, 3994, 3671, 36, 3521);
var home_player = new Array(1367, 89, 2964, 2799, 2834, 2766, 1442, 2762, 212, 929, 88);
var away_gs = new Array(1, 1, 1, 1, 1, 0, 0, 0, 0, 0);
var home_gs = new Array(1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0);
var away_player_name_out = new Array('科比-布莱恩特', '拉玛尔-奥多姆', '保罗-加索尔', '德里克-费舍尔', '弗拉迪米尔-拉德马诺维奇', '乔丹-法玛尔', '卢克-沃顿', '萨沙-武贾西奇', '特雷沃-阿里扎', '罗尼-图里亚夫');
var home_player_name_out = new Array('凯文-加内特', '雷-阿伦', '拉简-朗多', '保罗-皮尔斯', '肯德里克-帕金斯', '詹姆斯-波西', '埃迪-豪斯', '里昂-鲍威', 'P.J.-布朗', '格伦-戴维斯', '托尼-阿伦');

var player_id = new Array(2834, 195, 1141, 1367, 2834, 2834, 89, 89, 2708, 2799, 1141, 1141, 2964, 2708, 2964, 1355, 89, 2964, 1367, 2708, 89, 3127, 89, 89, 195, 1141, 2964, 2964, 1141, 2964, 2964, 195, 2708, 2799, 1355, 2964, 1355, 89, 2964, 2834, 2834, 2708, 2708, 2799, 1367, 2799, 2964, 1355, 195, 2834, 195, 1367, 2799, 1367, 2964, 1355, 1355, 2834, 1367, 2708, 2964, 2799, 195, 2964, 2799, 195, 3127, 3994, 3127, 2799, 1355, 1141, 2964, 89, 2834, 212, 2834, 2708, 2766, 89, 2708, 1367, 3994, 1355, 2964, 2708, 212, 3994, 3994, 1367, 2799, 1355, 212, 1367, 2766, 1181, 1141, 2964, 1355, 2799, 1355, 195, 212, 2799, 1355, 1181, 1367, 212, 1181, 1367, 3994, 2766, 2964, 1181, 2762, 1367, 1442, 2964, 1181, 2799, 195, 2762, 3994, 2799, 195, 212, 929, 212, 2762, 3671, 1442, 2799, 2766, 2708, 2708, 2762, 195, 2799, 1442, 3671, 2766, 2708, 2762, 2708, 2762, 2708, 2708, 2799, 2708, 2766, 2708, 2762, 2799, 195, 2766, 1181, 1141, 1181, 1355, 2708, 1141, 2799, 2799, 195, 1355, 1141, 3521, 1367, 2762, 2799, 929, 929, 2799, 1442, 2766, 2766, 1442, 2766, 3671, 1442, 1367, 2708, 3671, 3127, 3521, 195, 2799, 1141, 1181, 1141, 1442, 1442, 2766, 195, 2766, 2799, 2766, 1355, 1355, 1367, 3127, 89, 2766, 1355, 1367, 2799, 3127, 1442, 2964, 1442, 3127, 3994, 3127, 2799, 2799, 195, 2834, 929, 1355, 1367, 2964, 195, 3994, 3994, 2799, 2799, 89, 1181, 1181, 2834, 2799, 1181, 1181, 1367, 2799, 2708, 1367, 2964, 1367, 89, 195, 1367, 2799, 2708, 1367, 2708, 2834, 2964, 2834, 1367, 195, 1367, 1367, 2964, 89, 2834, 2708, 2708, 2799, 2834, 195, 2834, 89, 2964, 3127, 2964, 2964, 1141, 1367, 2964, 2708, 1141, 2834, 212, 2834, 1141, 3127, 212, 212, 1355, 2708, 2799, 1367, 3127, 2964, 195, 2964, 1141, 1355, 89, 1367, 2964, 3127, 2964, 2708, 89, 2964, 195, 2708, 1355, 1367, 1367, 195, 1367, 1355, 1367, 1367, 89, 1141, 2964, 212, 1355, 212, 212, 195, 1367, 1367, 2708, 3127, 1141, 1367, 2964, 2964, 195, 2708, 1367, 1367, 1355, 2799, 2708, 3127, 2799, 2799, 212, 3127, 89, 89, 1355, 2964, 1355, 3671, 2708, 1355, 1367, 1367, 3127, 3127, 1367, 1355, 2799, 195, 2964, 195, 1141, 2964, 2766, 2799, 2964, 195, 212, 1355, 212, 88, 1367, 195, 1181, 1141, 195, 2964, 3671, 1355, 2964, 195, 212, 89, 212, 2964, 195, 929, 2708, 2708, 2964, 929, 36, 36, 3671, 3671, 2964, 3521, 212, 3671, 2964, 212, 1181, 2964, 2964, 1367, 212, 2708, 929, 929, 1181, 3671, 89, 2964, 1181, 1367, 3671, 89, 3521, 2708, 89, 2964, 2799, 929, 195, 3521, 2708, 2964, 89, 2964, 195, 2766, 1141, 3671, 195, 2964, 1367, 2964, 2708, 2964, 1181, 1367, 1181, 2799, 1442, 2964, 1367, 1181, 89, 1367, 1367, 36, 195, 1181, 2708, 2766, 89, 2708, 1367, 1367, 1442, 36, 36, 195, 89, 2799, 1367, 3994, 36, 2708, 2708, 2799, 1442, 2708, 3994, 1367, 2708, 2762, 2799, 929, 1367, 88, 89, 3994, 2762, 929, 1141, 88, 2762, 2762, 2762, 2708, 2708, 2762, 88, 195, 2762, 2766, 1442, 2762, 3671, 195, 3521, 1141, 2708, 2708, 929, 36, 2708, 1442, 3521, 2762, 2762, 3994, 1442, 929, 36, 929, 88, 1442, 1181, 3994, 36, 1442, 1442, 3671, 1181, 1442, 2762, 3994, 3994);
// 动作
var item = new Array('pf', '2p', 'ast', 'm2p', 'orb', 'm2p', 'orb', 'm3p', 'drb', 'pf', 'ft', 'ft', 'm2p', 'drb', 'stl', 'tov', '3p', 'ast', 'pf', 'm3p', 'drb', 'pf', 'ft', 'ft', '3p', 'ast', 'm2p', 'orb', 'pf', 'ft', 'ft', '3p', 'ast', 'm2p', 'drb', 'stl', 'tov', 'ft', 'm2p', 'orb', 'm2p', 'drb', 'm2p', 'drb', '2p', 'ast', 'stl', 'tov', 'stl', 'tov', 'm3p', 'drb', 'm3p', 'orb', 'm2p', 'drb', 'm2p', 'drb', 'm2p', 'drb', 'pf', 'stl', 'tov', '2p', 'ast', '3p', 'pf', 'in', 'out', 'm3p', 'drb', 'm3p', 'drb', '2p', 'pf', 'in', 'out', 'mft', 'in', 'out', 'ft', '2p', '2p', 'ast', 'm2p', 'drb', 'pf', 'ft', 'ft', '2p', 'ast', 'm2p', 'drb', '2p', 'ast', 'in', 'out', 'stl', 'tov', 'm2p', 'drb', 'm2p', 'drb', 'm3p', 'drb', 'tov', '2p', 'ast', 'm2p', 'drb', 'stl', 'tov', 'pf', 'ft', 'in', 'out', 'in', 'out', 'ft', '2p', 'm3p', 'drb', 'pf', 'tov', 'm2p', 'pf', 'in', 'out', 'pf', '2p', '2p', 'ast', 'pf', 'ft', 'mft', 'drb', 'ft', '3p', 'ast', 'm3p', 'drb', 'pf', 'm2p', 'drb', 'pf', 'ft', 'ft', 'm3p', 'drb', 'stl', 'tov', '2p', 'ast', 'm3p', 'drb', 'pf', 'in', 'out', 'in', 'out', 'pf', 'mft', 'ft', 'ft', '2p', 'ast', 'pf', 'in', 'out', 'm2p', 'orb', 'm2p', 'orb', 'm3p', 'orb', '3p', 'ast', 'stl', 'tov', '3p', 'ast', 'in', 'out', 'in', 'out', 'm2p', 'drb', 'pf', 'in', 'out', 'ft', 'ft', 'stl', 'tov', '3p', 'ast', 'pf', 'ft', 'ft', 'm2p', 'drb', 'in', 'out', '2p', '2p', 'ast', 'm3p', 'drb', 'in', 'out', 'pf', 'in', 'out', 'ft', 'ft', 'ft', 'in', 'out', 'm2p', 'drb', 'm2p', 'drb', 'm2p', 'pf', 'ft', 'ft', 'stl', 'tov', 'stl', 'tov', 'pf', 'mft', 'ft', '2p', 'ast', 'm2p', 'drb', '2p', 'ast', 'stl', 'tov', '2p', 'ast', 'pf', 'ft', 'm2p', 'blk', 'drb', '2p', 'ast', 'm3p', 'drb', 'm3p', '2p', 'ast', 'pf', 'mft', 'ft', 'm2p', 'pf', 'm2p', 'drb', '3p', 'ast', 'm3p', 'drb', 'tov', 'm3p', 'drb', 'm2p', 'drb', '2p', 'pf', 'in', 'out', 'ft', 'pf', 'ft', 'ft', '2p', 'ast', '2p', 'ast', '3p', '2p', 'pf', 'ft', '2p', 'ast', 'm2p', 'orb', 'm2p', 'drb', 'stl', 'tov', '3p', 'ast', '2p', 'ast', 'pf', 'ft', 'ft', 'm2p', 'drb', 'pf', 'ft', 'ft', 'stl', 'tov', 'm2p', 'orb', 'pf', 'ft', 'ft', 'm2p', 'drb', 'm2p', 'drb', '3p', 'ast', 'm2p', 'orb', '2p', '2p', 'pf', 'ft', 'mft', 'drb', 'stl', 'tov', 'pf', 'ft', 'ft', 'pf', 'm3p', 'drb', 'm3p', 'drb', 'pf', 'ft', 'in', 'out', 'mft', 'drb', 'm2p', 'drb', 'm3p', 'stl', 'tov', 'm3p', 'drb', 'stl', 'tov', 'pf', 'mft', 'in', 'out', 'ft', '2p', 'm2p', 'drb', 'pf', 'in', 'out', 'ft', 'in', 'out', 'ft', 'm3p', 'drb', '2p', '2p', 'm2p', 'blk', 'drb', '2p', 'ast', 'm2p', 'pf', 'mft', 'ft', '2p', 'pf', 'ft', 'mft', 'orb', '3p', 'm2p', 'drb', 'stl', 'tov', '2p', 'ast', 'pf', 'mft', 'ft', 'in', 'out', 'pf', 'mft', 'ft', '3p', 'ast', '3p', 'ast', 'm3p', 'drb', 'stl', 'tov', '2p', 'ast', '3p', 'ast', 'in', 'out', 'in', 'out', 'm2p', 'drb', '3p', 'ast', 'm2p', 'blk', 'in', 'out', 'm3p', 'drb', '2p', 'ast', '2p', 'm2p', 'drb', 'stl', 'tov', 'tov', 'in', 'out', 'stl', 'tov', 'm2p', 'orb', '2p', 'm3p', 'orb', '3p', 'ast', '2p', 'ast', 'm2p', 'blk', 'drb', 'm3p', 'drb', '2p', 'ast', '3p', 'ast', 'pf', 'in', 'out', 'ft', 'ft', '3p', 'ast', '2p', 'ast', 'm2p', 'drb', 'in', 'out', 'in', 'out', 'in', 'out', '3p', 'm2p', 'orb', 'pf', 'm2p', 'orb', '2p', 'pf', 'mft', 'ft', '2p', 'ast', 'm3p', 'drb', '3p', 'ast', 'pf', 'in', 'out', 'in', 'out', 'ft', 'mft', 'drb', 'in', 'out', 'm3p', 'pf', 'ft', 'ft', 'm3p', 'drb', '2p', 'm2p', 'drb', '2p', 'ast', '3p', 'ast', 'pf', 'ft', 'ft', '2p', 'ast', 'm3p', 'pf', 'ft', 'mft');
var time = new Array(140, 200, 200, 430, 440, 460, 470, 520, 530, 600, 600, 600, 830, 830, 960, 960, 1020, 1020, 1150, 1300, 1310, 1380, 1380, 1380, 1520, 1520, 1650, 1660, 1670, 1670, 1670, 1760, 1760, 1990, 2000, 2090, 2090, 2220, 2360, 2370, 2400, 2400, 2470, 2490, 2550, 2550, 2760, 2760, 2790, 2790, 2830, 2850, 2890, 2890, 2940, 2950, 3170, 3170, 3270, 3280, 3320, 3420, 3420, 3610, 3610, 3900, 4130, 4130, 4130, 4240, 4250, 4400, 4410, 4500, 4600, 4600, 4600, 4600, 4600, 4600, 4600, 4740, 4870, 4870, 4970, 4980, 5090, 5090, 5090, 5240, 5240, 5390, 5400, 5500, 5500, 5600, 5600, 5680, 5680, 5750, 5750, 5840, 5840, 5950, 5960, 6040, 6170, 6170, 6400, 6410, 6611, 6611, 6712, 6712, 6712, 6712, 6712, 6712, 6712, 6833, 6981, 6992, 7182, 7390, 7620, 7630, 7630, 7630, 7780, 7900, 8040, 8040, 8260, 8260, 8260, 8270, 8430, 8480, 8480, 8580, 8590, 8700, 8790, 8800, 8860, 8860, 8860, 8980, 8990, 9030, 9030, 9110, 9110, 9290, 9300, 9370, 9370, 9370, 9370, 9370, 9520, 9520, 9520, 9660, 9700, 9700, 9880, 9880, 9880, 9990, 9990, 10010, 10020, 10040, 10060, 10210, 10210, 10380, 10380, 10480, 10480, 10550, 10550, 10550, 10550, 10650, 10660, 10870, 10870, 10870, 10870, 10870, 11030, 11030, 11110, 11110, 11300, 11300, 11300, 11500, 11510, 11560, 11560, 11710, 11920, 11920, 12030, 12040, 12090, 12090, 12120, 12120, 12120, 12120, 12120, 12230, 12230, 12230, 12340, 12350, 12460, 12470, 12550, 12620, 12620, 12620, 12780, 12780, 12990, 12990, 13060, 13060, 13060, 13210, 13210, 13380, 13390, 13610, 13610, 13811, 13811, 13927, 13927, 13927, 13927, 14021, 14021, 14044, 14164, 14164, 14341, 14354, 14400, 14560, 14560, 14720, 14720, 14720, 14850, 14850, 14950, 14960, 15090, 15090, 15230, 15240, 15280, 15400, 15410, 15570, 15580, 15680, 15680, 15680, 15680, 15680, 15790, 15790, 15790, 15880, 15880, 16090, 16090, 16260, 16320, 16320, 16320, 16480, 16480, 16690, 16700, 16850, 16860, 16940, 16940, 17030, 17030, 17310, 17310, 17520, 17520, 17520, 17620, 17630, 17750, 17750, 17750, 17890, 17890, 18000, 18020, 18030, 18030, 18030, 18180, 18190, 18410, 18410, 18570, 18570, 18760, 18770, 18770, 18930, 18990, 18990, 18990, 18990, 19150, 19150, 19170, 19170, 19170, 19250, 19310, 19320, 19520, 19530, 19540, 19540, 19540, 19540, 19540, 19540, 19720, 19730, 19810, 19910, 19910, 19980, 19990, 20060, 20060, 20090, 20090, 20090, 20090, 20090, 20220, 20420, 20430, 20530, 20530, 20530, 20530, 20530, 20530, 20530, 20790, 20800, 20920, 21068, 21221, 21221, 21241, 21446, 21446, 21600, 21710, 21710, 21710, 21890, 22090, 22090, 22090, 22090, 22130, 22260, 22270, 22320, 22320, 22360, 22360, 22360, 22360, 22360, 22360, 22360, 22430, 22430, 22430, 22570, 22570, 22730, 22730, 22840, 22850, 22940, 22940, 23120, 23120, 23290, 23290, 23330, 23330, 23330, 23330, 23400, 23410, 23590, 23590, 23760, 23760, 23760, 23760, 23830, 23830, 23910, 23910, 24060, 24270, 24280, 24330, 24330, 24500, 24500, 24500, 24700, 24700, 24790, 24800, 24810, 24940, 24950, 25010, 25010, 25140, 25140, 25260, 25260, 25280, 25340, 25350, 25430, 25430, 25590, 25590, 25730, 25730, 25730, 25730, 25730, 25860, 25860, 26090, 26090, 26320, 26330, 26390, 26390, 26390, 26390, 26390, 26390, 26490, 26600, 26610, 26710, 26810, 26810, 26820, 26900, 26900, 26900, 26980, 26980, 27090, 27100, 27250, 27250, 27390, 27390, 27390, 27390, 27390, 27390, 27390, 27390, 27490, 27490, 27520, 27530, 27530, 27530, 27710, 27720, 27810, 27910, 27920, 27980, 27980, 28090, 28090, 28160, 28160, 28160, 28255, 28255, 28491, 28500, 28500, 28500);

var team = new Array('BOS', 'LAL', 'LAL', 'BOS', 'BOS', 'BOS', 'BOS', 'BOS', 'LAL', 'BOS', 'LAL', 'LAL', 'BOS', 'LAL', 'BOS', 'LAL', 'BOS', 'BOS', 'BOS', 'LAL', 'BOS', 'LAL', 'BOS', 'BOS', 'LAL', 'LAL', 'BOS', 'BOS', 'LAL', 'BOS', 'BOS', 'LAL', 'LAL', 'BOS', 'LAL', 'BOS', 'LAL', 'BOS', 'BOS', 'BOS', 'BOS', 'LAL', 'LAL', 'BOS', 'BOS', 'BOS', 'BOS', 'LAL', 'LAL', 'BOS', 'LAL', 'BOS', 'BOS', 'BOS', 'BOS', 'LAL', 'LAL', 'BOS', 'BOS', 'LAL', 'BOS', 'BOS', 'LAL', 'BOS', 'BOS', 'LAL', 'LAL', 'LAL', 'LAL', 'BOS', 'LAL', 'LAL', 'BOS', 'BOS', 'BOS', 'BOS', 'BOS', 'LAL', 'BOS', 'BOS', 'LAL', 'BOS', 'LAL', 'LAL', 'BOS', 'LAL', 'BOS', 'LAL', 'LAL', 'BOS', 'BOS', 'LAL', 'BOS', 'BOS', 'BOS', 'LAL', 'LAL', 'BOS', 'LAL', 'BOS', 'LAL', 'LAL', 'BOS', 'BOS', 'LAL', 'LAL', 'BOS', 'BOS', 'LAL', 'BOS', 'LAL', 'BOS', 'BOS', 'LAL', 'BOS', 'BOS', 'BOS', 'BOS', 'LAL', 'BOS', 'LAL', 'BOS', 'LAL', 'BOS', 'LAL', 'BOS', 'BOS', 'BOS', 'BOS', 'LAL', 'BOS', 'BOS', 'BOS', 'LAL', 'LAL', 'BOS', 'LAL', 'BOS', 'BOS', 'LAL', 'BOS', 'LAL', 'BOS', 'LAL', 'BOS', 'LAL', 'LAL', 'BOS', 'LAL', 'BOS', 'LAL', 'BOS', 'BOS', 'LAL', 'BOS', 'LAL', 'LAL', 'LAL', 'LAL', 'LAL', 'LAL', 'BOS', 'BOS', 'LAL', 'LAL', 'LAL', 'LAL', 'BOS', 'BOS', 'BOS', 'BOS', 'BOS', 'BOS', 'BOS', 'BOS', 'BOS', 'BOS', 'BOS', 'LAL', 'BOS', 'BOS', 'LAL', 'LAL', 'LAL', 'LAL', 'LAL', 'BOS', 'LAL', 'LAL', 'LAL', 'BOS', 'BOS', 'BOS', 'LAL', 'BOS', 'BOS', 'BOS', 'LAL', 'LAL', 'BOS', 'LAL', 'BOS', 'BOS', 'LAL', 'BOS', 'BOS', 'LAL', 'BOS', 'BOS', 'BOS', 'LAL', 'LAL', 'LAL', 'BOS', 'BOS', 'LAL', 'BOS', 'BOS', 'LAL', 'BOS', 'BOS', 'LAL', 'LAL', 'LAL', 'BOS', 'BOS', 'BOS', 'LAL', 'LAL', 'BOS', 'BOS', 'LAL', 'LAL', 'BOS', 'BOS', 'LAL', 'BOS', 'BOS', 'BOS', 'BOS', 'LAL', 'BOS', 'BOS', 'LAL', 'BOS', 'LAL', 'BOS', 'BOS', 'BOS', 'BOS', 'LAL', 'BOS', 'BOS', 'BOS', 'BOS', 'BOS', 'LAL', 'LAL', 'BOS', 'BOS', 'LAL', 'BOS', 'BOS', 'BOS', 'LAL', 'BOS', 'BOS', 'LAL', 'BOS', 'BOS', 'LAL', 'LAL', 'BOS', 'BOS', 'BOS', 'LAL', 'LAL', 'BOS', 'BOS', 'LAL', 'LAL', 'BOS', 'BOS', 'LAL', 'BOS', 'LAL', 'BOS', 'LAL', 'LAL', 'BOS', 'BOS', 'BOS', 'LAL', 'BOS', 'LAL', 'BOS', 'BOS', 'LAL', 'LAL', 'LAL', 'BOS', 'BOS', 'LAL', 'BOS', 'LAL', 'BOS', 'BOS', 'BOS', 'LAL', 'BOS', 'BOS', 'LAL', 'BOS', 'BOS', 'LAL', 'BOS', 'BOS', 'LAL', 'LAL', 'LAL', 'BOS', 'BOS', 'BOS', 'LAL', 'LAL', 'BOS', 'BOS', 'LAL', 'BOS', 'LAL', 'LAL', 'BOS', 'BOS', 'BOS', 'LAL', 'BOS', 'BOS', 'LAL', 'BOS', 'LAL', 'LAL', 'LAL', 'LAL', 'BOS', 'BOS', 'LAL', 'LAL', 'BOS', 'LAL', 'BOS', 'LAL', 'BOS', 'LAL', 'LAL', 'BOS', 'BOS', 'BOS', 'BOS', 'LAL', 'BOS', 'LAL', 'BOS', 'BOS', 'BOS', 'LAL', 'LAL', 'LAL', 'LAL', 'BOS', 'LAL', 'LAL', 'BOS', 'LAL', 'BOS', 'BOS', 'BOS', 'BOS', 'LAL', 'BOS', 'LAL', 'LAL', 'BOS', 'BOS', 'LAL', 'LAL', 'LAL', 'LAL', 'BOS', 'LAL', 'BOS', 'LAL', 'BOS', 'BOS', 'LAL', 'BOS', 'BOS', 'BOS', 'BOS', 'LAL', 'BOS', 'BOS', 'LAL', 'LAL', 'BOS', 'BOS', 'LAL', 'BOS', 'LAL', 'BOS', 'LAL', 'LAL', 'BOS', 'BOS', 'BOS', 'BOS', 'LAL', 'LAL', 'LAL', 'BOS', 'BOS', 'BOS', 'LAL', 'BOS', 'LAL', 'LAL', 'LAL', 'BOS', 'BOS', 'BOS', 'LAL', 'BOS', 'LAL', 'BOS', 'LAL', 'BOS', 'BOS', 'BOS', 'BOS', 'LAL', 'BOS', 'BOS', 'BOS', 'LAL', 'LAL', 'LAL', 'LAL', 'BOS', 'BOS', 'LAL', 'BOS', 'BOS', 'BOS', 'LAL', 'LAL', 'LAL', 'BOS', 'BOS', 'BOS', 'LAL', 'LAL', 'LAL', 'LAL', 'BOS', 'BOS', 'LAL', 'LAL', 'BOS', 'LAL', 'BOS', 'BOS', 'BOS', 'BOS', 'BOS', 'BOS', 'LAL', 'BOS', 'BOS', 'LAL', 'BOS', 'BOS', 'BOS', 'BOS', 'LAL', 'LAL', 'BOS', 'BOS', 'LAL', 'BOS', 'BOS', 'BOS', 'BOS', 'LAL', 'LAL', 'LAL', 'LAL', 'LAL', 'LAL', 'BOS', 'LAL', 'LAL', 'BOS', 'LAL', 'BOS', 'BOS', 'LAL', 'BOS', 'BOS', 'LAL', 'BOS', 'BOS', 'BOS', 'LAL', 'LAL', 'LAL', 'BOS', 'BOS', 'LAL', 'LAL', 'BOS', 'BOS', 'LAL', 'LAL');



      // var away_player = new Array(2676,2941,365,104,2709,1160,2738,445,843,449,1071,2979);
      // var home_player = new Array(195,1355,144,3127,1141,36,2708,1181,3671,2348,2760,3994);
      // var away_gs = new Array(1,1,1,1,1,0,0,0,0,0,0,0);
      // var home_gs = new Array(1,1,1,1,1,0,0,0,0,0,0,0);
      // var away_player_name_out = new Array('特拉维斯-奥特洛','布兰登-罗伊','史蒂夫-布雷克','拉玛库斯-阿尔德里奇','格雷格-奥登','鲁迪-费尔南德斯','乔尔-普尔兹比拉','杰里-贝勒斯','埃克-迪奥古','尼古拉斯-巴通姆','钱宁-弗莱','赛尔吉奥-罗德里格斯');
      // var home_player_name_out = new Array('科比-布莱恩特','保罗-加索尔','安德鲁-拜纳姆','弗拉迪米尔-拉德马诺维奇','德里克-费舍尔','特雷沃-阿里扎','拉玛尔-奥多姆','乔丹-法玛尔','萨沙-武贾西奇','克里斯-米姆','约什-鲍威尔','卢克-沃顿');
      // var col = new Array('player_name_out','gs','mp','fgper','fg','fga','threepper','threep','threepa','ftper','ft','fta','ts','trb','orb','drb','ast','stl','blk','tov','pf','pts');
      // var player_id = new Array(1355,3127,1141,1355,1355,2709,1355,3127,104,365,1141,104,195,1355,195,2676,2941,144,2709,195,1355,195,2941,2709,2709,2709,144,2709,3127,365,144,2676,2941,144,2941,195,2941,1141,1141,2709,104,2709,2709,2738,2709,1355,1141,3127,365,1141,2676,1355,195,2738,104,2708,1355,1160,2676,2941,1141,2941,365,195,195,2941,2708,195,104,195,104,3127,144,144,1160,1071,104,2708,2941,365,3127,3127,2941,2708,144,1141,2708,1181,3127,36,144,1355,1141,2941,2738,2738,1355,2738,36,36,2708,1160,365,36,1355,1160,2738,1181,2676,2941,2979,365,1160,195,2708,2738,1071,1181,2979,3671,195,1181,1181,2738,1071,3671,2738,1071,1071,36,2979,2708,2708,1071,2708,2738,1071,2708,36,2708,2979,1355,1181,104,2738,2709,1071,1160,2676,3671,2979,104,1181,3671,1160,104,1355,2708,3671,1181,2941,2979,195,3671,1355,2709,104,195,36,2709,2676,2941,1160,195,2676,2941,36,1181,1181,1160,1141,1181,1160,2708,104,2676,104,195,1355,195,2708,3127,2708,144,36,365,1160,195,2709,2709,3127,195,195,195,1355,2676,144,2676,195,2676,3127,195,2709,2709,3127,2709,1355,195,365,195,195,2676,3127,104,1141,365,2676,3127,2738,2709,3127,2941,195,144,2941,2941,195,2738,104,2676,2676,195,104,2738,365,2941,2738,195,365,144,365,2676,365,144,2738,2676,1141,1141,1141,365,2941,1141,1141,2738,104,365,195,365,2676,2738,195,144,365,195,195,2738,195,104,2941,1355,144,3127,2676,195,365,104,144,104,195,2708,144,195,104,2708,104,195,195,2738,195,1355,2676,195,2941,1355,3127,1141,365,104,2738,1071,2738,1160,365,1141,1141,2676,1355,195,195,1071,1141,1355,445,2676,1181,3127,36,1141,2708,1160,2941,2941,195,445,2941,1160,1071,2708,3671,195,2708,445,1355,1071,2708,2708,2941,1355,1355,1071,1181,1160,104,104,1181,1160,3671,445,3671,1181,445,36,1181,1181,1071,1181,36,1160,144,2941,1160,3671,1181,445,2708,1071,2676,1071,1181,2738,104,1181,445,445,445,144,1181,2941,2738,2941,1181,445,36,3671,2941,2708,1160,2941,144,1181,2676,1181,36,3671,2738,36,2941,1181,2738,2676,1160,144,1181,1181,2738,2676,144,2708,1160,2708,1160,36,2738,445,1181,144,144,195,3671,1071,2941,2738,2738,1181,195,1071,195,195,445,1160,195,144,449,2676,2348,144,843,2738,445,445,1181,449,1071,36,449,2760,195,3994,2708,3994,449,843,449,36,449,449,2760,449,2760,843,1160,2760,1181,3994,1071,843,2760,843,843,2348,843,2348,2348,1181);
      // var item = new Array('m2p','orb','m2p','orb','2p','pf','ft','pf','2p','ast','2p','m2p','drb','2p','ast','2p','ast','m2p','blk','orb','2p','ast','m2p','orb','m2p','orb','pf','m2p','drb','pf','m2p','drb','m2p','drb','stl','tov','m2p','drb','2p','m2p','orb','pf','tov','in','out','2p','ast','stl','tov','m2p','m2p','drb','m2p','drb','m2p','in','out','in','out','tov','m2p','drb','m3p','drb','2p','m2p','drb','m2p','drb','pf','2p','m3p','2p','orb','m3p','in','out','m3p','drb','m3p','drb','tov','m2p','drb','m2p','orb','tov','in','out','in','out','in','out','m2p','2p','orb','pf','mft','drb','2p','ast','2p','ast','3p','ast','2p','ast','tov','in','out','in','out','m2p','drb','m2p','drb','m3p','drb','pf','in','out','ft','ft','2p','ast','m3p','m2p','orb','m2p','blk','m3p','drb','2p','pf','mft','drb','m3p','2p','ast','stl','tov','2p','ast','in','out','in','out','3p','ast','m2p','drb','tov','m2p','m2p','drb','m2p','blk','drb','3p','ast','in','out','in','out','m2p','drb','m2p','drb','m2p','drb','3p','ast','stl','tov','2p','ast','3p','ast','pf','ft','in','out','ft','m2p','blk','drb','m2p','drb','2p','ast','pf','in','out','in','out','in','out','pf','mft','mft','drb','m2p','orb','2p','pf','m2p','blk','orb','stl','tov','2p','ast','m2p','orb','stl','tov','2p','ast','m3p','drb','2p','m2p','drb','stl','tov','3p','ast','3p','in','out','stl','tov','tov','pf','ft','ft','m2p','drb','m3p','orb','2p','m2p','blk','drb','3p','ast','stl','tov','m2p','blk','orb','3p','ast','m2p','drb','2p','m2p','orb','m2p','drb','m3p','drb','m2p','drb','2p','ast','m2p','drb','m3p','pf','3p','ast','m2p','drb','2p','pf','mft','drb','m3p','drb','m2p','stl','tov','m2p','drb','m2p','drb','pf','ft','in','out','ft','m2p','drb','pf','ft','ft','m2p','drb','tov','2p','2p','m2p','drb','3p','ast','3p','ast','pf','in','out','in','out','ft','ft','m2p','drb','2p','pf','m2p','drb','tov','in','out','in','out','in','out','2p','m3p','orb','2p','m2p','drb','3p','ast','pf','ft','in','out','ft','m2p','drb','pf','mft','ft','m2p','drb','m2p','drb','pf','m2p','orb','2p','m2p','drb','m2p','drb','pf','stl','tov','m2p','m2p','orb','drb','pf','tf','ft','pf','3p','ast','2p','ast','m2p','drb','pf','in','out','ft','in','out','ft','pf','tov','pf','2p','ast','2p','ast','stl','tov','m2p','blk','drb','stl','tov','3p','ast','2p','ast','m3p','drb','2p','ast','pf','ft','2p','m2p','drb','2p','ast','m2p','m2p','orb','drb','m2p','blk','drb','stl','tov','3p','m2p','drb','m2p','drb','2p','pf','in','out','in','out','mft','mft','drb','2p','m2p','drb','tov','2p','ast','2p','pf','in','out','in','out','in','out','mft','ft','m2p','drb','m3p','drb','pf','in','out','in','out','m2p','drb','m2p','orb','stl','tov','stl','tov','2p','m2p','drb','m2p','drb','3p','ast','m2p','orb','pf','ft','ft','2p','m2p','blk','drb','2p');
      // var time = new Array(210,230,350,370,380,380,380,600,670,670,750,880,890,990,990,1160,1160,1300,1300,1320,1390,1390,1560,1590,1600,1600,1600,1690,1710,1760,1890,1900,2010,2020,2250,2250,2320,2330,2400,2690,2700,2760,2760,2760,2760,2930,2930,3070,3070,3200,3390,3400,3550,3560,3670,3700,3700,3700,3700,3800,3960,3980,4070,4080,4160,4340,4360,4400,4420,4430,4660,4740,4750,4750,4920,4940,4940,5060,5080,5160,5170,5190,5310,5320,5370,5400,5480,5480,5480,5480,5480,5480,5480,5680,5680,5680,5680,5680,5690,5890,5890,6110,6110,6290,6290,6420,6420,6480,6480,6480,6480,6480,6602,6614,6711,6722,6841,6861,6904,6904,6904,6904,6904,7073,7073,7191,7430,7440,7450,7450,7570,7580,7650,7650,7650,7680,7890,8010,8010,8210,8210,8260,8260,8340,8340,8340,8340,8550,8550,8720,8730,8900,8970,9010,9020,9190,9190,9210,9270,9270,9530,9530,9530,9530,9650,9670,9830,9840,9970,9990,10120,10120,10300,10300,10360,10360,10480,10480,10640,10640,10640,10640,10640,10790,10790,10820,10980,10990,11040,11040,11300,11300,11300,11300,11300,11300,11300,11440,11440,11440,11450,11660,11670,11700,11830,11890,11890,11910,11920,11920,11970,11970,12160,12200,12230,12230,12290,12290,12440,12450,12540,12780,12790,12850,12850,13000,13000,13220,13290,13290,13430,13430,13480,13630,13630,13630,13800,13803,13931,13951,13963,14061,14061,14081,14283,14283,14361,14361,14610,14610,14630,14650,14650,14800,14810,15010,15210,15230,15240,15240,15320,15330,15380,15400,15560,15560,15830,15840,15930,16140,16200,16200,16390,16410,16470,16470,16470,16480,16730,16750,16810,16940,16940,17020,17030,17160,17170,17330,17330,17330,17330,17330,17530,17560,17600,17600,17600,17810,17830,17910,18110,18390,18600,18610,18730,18730,18910,18910,18970,18970,18970,18970,18970,18970,18970,19280,19290,19450,19550,19620,19630,19800,20040,20040,20040,20040,20040,20040,20190,20390,20400,20450,20660,20670,20760,20760,20830,20830,20830,20830,20830,20970,20980,21024,21024,21024,21162,21176,21281,21291,21351,21381,21395,21398,21566,21590,21840,21850,21980,22090,22090,22140,22160,22160,22170,22170,22170,22170,22250,22330,22330,22450,22450,22600,22610,22660,22660,22660,22660,22660,22660,22660,22830,22830,22920,22980,22980,23180,23180,23460,23460,23510,23510,23540,23550,23550,23600,23600,23800,23800,24070,24090,24230,24230,24230,24230,24400,24610,24620,24690,24690,24950,24960,24960,24990,25060,25060,25080,25100,25100,25170,25290,25310,25390,25400,25560,25700,25700,25700,25700,25700,25700,25700,25720,25930,26070,26080,26150,26360,26360,26580,26680,26680,26680,26680,26680,26680,26680,26680,26680,26820,26860,27060,27070,27170,27170,27170,27170,27170,27270,27280,27490,27510,27520,27520,27600,27600,27630,27830,27840,28000,28010,28100,28100,28211,28221,28237,28237,28237,28480,28542,28542,28564,28614);
      // var team = new Array('LAL','LAL','LAL','LAL','LAL','POR','LAL','LAL','POR','POR','LAL','POR','LAL','LAL','LAL','POR','POR','LAL','POR','LAL','LAL','LAL','POR','POR','POR','POR','LAL','POR','LAL','POR','LAL','POR','POR','LAL','POR','LAL','POR','LAL','LAL','POR','POR','POR','POR','POR','POR','LAL','LAL','LAL','POR','LAL','POR','LAL','LAL','POR','POR','LAL','LAL','POR','POR','POR','LAL','POR','POR','LAL','LAL','POR','LAL','LAL','POR','LAL','POR','LAL','LAL','LAL','POR','POR','POR','LAL','POR','POR','LAL','LAL','POR','LAL','LAL','LAL','LAL','LAL','LAL','LAL','LAL','LAL','LAL','POR','POR','POR','LAL','POR','LAL','LAL','LAL','POR','POR','LAL','LAL','POR','POR','LAL','POR','POR','POR','POR','POR','LAL','LAL','POR','POR','LAL','POR','LAL','LAL','LAL','LAL','POR','POR','LAL','POR','POR','POR','LAL','POR','LAL','LAL','POR','LAL','POR','POR','LAL','LAL','LAL','POR','LAL','LAL','POR','POR','POR','POR','POR','POR','LAL','POR','POR','LAL','LAL','POR','POR','LAL','LAL','LAL','LAL','POR','POR','LAL','LAL','LAL','POR','POR','LAL','LAL','POR','POR','POR','POR','LAL','POR','POR','LAL','LAL','LAL','POR','LAL','LAL','POR','LAL','POR','POR','POR','LAL','LAL','LAL','LAL','LAL','LAL','LAL','LAL','POR','POR','LAL','POR','POR','LAL','LAL','LAL','LAL','LAL','POR','LAL','POR','LAL','POR','LAL','LAL','POR','POR','LAL','POR','LAL','LAL','POR','LAL','LAL','POR','LAL','POR','LAL','POR','POR','LAL','POR','POR','LAL','POR','LAL','LAL','POR','POR','LAL','POR','POR','POR','POR','LAL','POR','POR','POR','POR','POR','LAL','POR','LAL','POR','POR','POR','LAL','POR','POR','LAL','LAL','LAL','POR','POR','LAL','LAL','POR','POR','POR','LAL','POR','POR','POR','LAL','LAL','POR','LAL','LAL','POR','LAL','POR','POR','LAL','LAL','LAL','POR','LAL','POR','POR','LAL','POR','LAL','LAL','LAL','LAL','POR','LAL','POR','LAL','LAL','POR','LAL','LAL','POR','LAL','POR','LAL','LAL','LAL','POR','POR','POR','POR','POR','POR','POR','LAL','LAL','POR','LAL','LAL','LAL','POR','LAL','LAL','POR','POR','LAL','LAL','LAL','LAL','LAL','POR','POR','POR','LAL','POR','POR','POR','POR','LAL','LAL','LAL','LAL','POR','LAL','POR','LAL','LAL','POR','LAL','LAL','POR','LAL','POR','POR','POR','LAL','POR','LAL','POR','LAL','LAL','POR','LAL','LAL','LAL','POR','LAL','LAL','POR','LAL','POR','POR','LAL','LAL','POR','LAL','POR','POR','POR','LAL','POR','POR','LAL','POR','POR','POR','LAL','LAL','POR','POR','POR','LAL','POR','LAL','LAL','POR','LAL','POR','POR','LAL','LAL','POR','LAL','LAL','LAL','POR','LAL','POR','LAL','POR','POR','POR','LAL','LAL','LAL','POR','POR','LAL','LAL','POR','LAL','POR','LAL','POR','POR','LAL','LAL','LAL','LAL','LAL','POR','POR','POR','POR','LAL','LAL','POR','LAL','LAL','POR','POR','LAL','LAL','POR','POR','LAL','LAL','POR','POR','POR','POR','LAL','POR','POR','LAL','POR','LAL','LAL','LAL','LAL','LAL','POR','POR','POR','LAL','POR','POR','LAL','POR','LAL','POR','POR','LAL','LAL','LAL','POR','POR','LAL','POR','POR','LAL','POR','LAL','LAL','LAL');


time = _.map(time, (v, i) => parseInt(v / 10))
var home_team_name='LAL'
var away_team_name="BOS"
var play_obj = {}
_.forEach(away_player, (v, i) => {
  play_obj[v] = away_player_name_out[i]
})
_.forEach(home_player, (v, i) => {
  play_obj[v] = home_player_name_out[i]
})

var away_names = away_player.map(v => play_obj[v])
var home_names = home_player.map(v => play_obj[v])
  // 获得比赛时间
let total_time = getAllTime(time[time.length - 1])

function getAllTime(num) {
  // 不到48分钟的，就算48分钟，加时一个5分钟
  let total = 60 * 48
  let extra = 5 * 60
  let res
  if (num < total) {
    res = total
  } else {
    res = Math.ceil((num - total) / extra) * extra + total
  }
  return res
}
var xAxis = _.range(total_time)

// 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
var item_obj = {
    m2p: {
      name: "两分打铁"
    },
    m3p: {
      name: "三分打铁"
    },
    mft: {
      name: "罚球打铁"
    },
    "2p": {
      name: "命中两分",
      val: 2,
      symbol: 'image://../img/2.png'
    },
    "3p": {
      name: "命中三分",
      val: 3,
      symbol: 'image://../img/3.png'
    },
    ft: {
      name: "罚球命中",
      val: 1,
      symbol: 'image://../img/1.png'

    },
    orb: {
      name: "进攻篮板"
    },
    trb: {
      name: "防守篮板"
    },
    ast: {
      name: "助攻队友"
    },
    blk: {
      name: "盖帽对方"
    },
    stl: {
      name: "抢断对手",
      val:1
    },
    tov: {
      name: "失误",
      val:1
    },
    in : {
      name: "上场",
      symbol: 'image://../img/up.png'
    },
    out: {
      name: "被换下",
      symbol: 'image://../img/down.png'
    },
    tf: {
      name: "技术犯规"
    },
    pf: {
      name: "犯规"
    },
    pause:{
      name:'暂停',
      symbol:'image://jiaolian.jpg'
    }
  }
  // 时间毫秒，队伍，队员id，操作
  // 
var all_data = _.zip(time, team, player_id, item)
let player_score = {}
  console.log(all_data[0])

_.forEach(all_data,function(v,i){
  // player_score[]
  if (!player_score[v[2]]) {
    player_score[v[2]] = 0
  }
  if (v[3]=='2p'||v[3]=='3p'||v[3]=='ft') {
    player_score[v[2]] = player_score[v[2]]+item_obj[v[3]].val
  }
})
// console.log(player_score)
var score_data = _.fill(new Array(time[0]), 0)
var score = 0
var circleData = {
  nodes:[],
  links:[]
}
let temp = {}
let uuid = 0
// let 
_.forEach(all_data, (v, i) => {
      if (!temp[v[2]]) {
      circleData.nodes.push({
        // id:uuid+'',
        value:player_score[v[2]],
        symbolSize:player_score[v[2]]*2,
        name:play_obj[v[2]],
        category:['BOS','LAL'].indexOf(v[1]),
        draggable:true,
        label:{
          normal:{
            show:true
          }
        }
      })
      temp[v[2]] = true
      uuid = uuid+1
      }

    if (v[3]=='ast') {

      for(data of [all_data[i-1],all_data[i+1]]){
        if (data[0]==v[0]&&item_obj[data[3]].val) {
          circleData.links.push({
            time:v[0],
            extra:'助攻队友',
            source:play_obj[v[2]],
            target:play_obj[data[2]],
            label:{
              normal:{
                // show:true,
              }
            },
            lineStyle:{
              normal:{color:'blue',width:1}
            }
          })
          // return false
        }        
      }
    }
    if (v[3]=='tov') {

      for(data of [all_data[i-1],all_data[i+1]]){
      if (data[0]==v[0]&&item_obj[data[3]].val) {
        circleData.links.push({
          extra:'抢断',
            time:v[0],

          target:play_obj[v[2]],
          source:play_obj[data[2]],
          lineStyle:{
            normal:{color:'red',width:1}
          }
        })
        // return false
      }       
      }
    }
    if (v[3]=='pf') {
      // console.log(v[0])


      for(data of [all_data[i-1],all_data[i+1]]){
      if (data&&data[0]==v[0]&&_.indexOf(['mft','ft'],data[3])>-1) {
        circleData.links.push({
          extra:'犯规导致',
            time:v[0],

          extraaction:'罚球',
          source:play_obj[v[2]],
          target:play_obj[data[2]],
          lineStyle:{
            normal:{color:'green',width:1}
          }
        })
      }     
      }
    }

  // if (v[3]=='ast') {
  //   return
  // }
  if (item_obj[v[3]] && item_obj[v[3]].val) {
    if (v[1] == home_team_name) {
      score += item_obj[v[3]].val
    } else {
      score -= item_obj[v[3]].val
    }
    score_data = score_data.concat(_.fill(new Array(v[0] - score_data.length), score))
  }
})

// console.log(circleData.nodes)
// console.log(circleData.nodes.map(v=>v.name))
// console.log(circleData.links)
// 
function formatTime(num){
  let n = Number(num)
  return parseInt(num/60)+'分'+num%60+'秒'
}
    optionCircle = {
        title: {
            show:false,
            text: 'Les Miserables',
            subtext: 'Default layout',
            top: 'bottom',
            left: 'right'
        },
        tooltip: {
          formatter:function(params){
            if (params.data.draggable) {
              let temp = []
              _.forEach(circleData.links,(v)=>{

                if (v.source==params.name||v.target==params.name) {
                console.log(v)
                temp.push(formatTime(v.time)+v.source+v.extra+v.target+(v.extraaction||''))

                }
              })
              // debugger
              return params.name+'<br>'+temp.join('<br>')
            }else{
              // console.log(params)
              return params.name.replace('>',params.data.extra)+(params.data.extraaction||'')
            }
            // console.log(params)
          }
        },
        legend: [{
            // selectedMode: 'single',
            data:['BOS','LAL']
            // data: circleData.nodes.map(v=>v.name)
        }],
        animationDuration: 1500,
        animationEasingUpdate: 'quinticInOut',
        series : [
            {
                name: 'Les Miserables',
                type: 'graph',
                layout: 'force',
                force:{
                  repulsion:1000,
                  edgeLength:400
                },
                focusNodeAdjacency:true,
                edgeSymbol: ['circle', 'arrow'],
                edgeSymbolSize: [8, 8],

                data: circleData.nodes,
                links: circleData.links,
                categories: ['BOS','LAL'],
                roam: true,
                label: {
                    normal: {
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                lineStyle: {
                    normal: {
                        color: 'source',
                        curveness: 0.3
                    }
                }
            }
        ]
    };
    optionCircle1 = {
        title: {
            text: 'Les ',
            subtext: 'Circular layout',
            top: 'bottom',
            left: 'right'
        },
        tooltip: {},
        legend: [{
            // selectedMode: 'single',
            data: circleData.nodes.map(v=>v.name)
        }],
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series : [
            {
                name: 'Les ',
                type: 'graph',
                layout: 'none',
                circular: {
                    rotateLabel: true
                },
                data: circleData.nodes,
                links: circleData.links,
                categories: ['POR','LAL'],
                roam: true,
                label: {
                    normal: {
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                lineStyle: {
                    normal: {
                        color: 'source',
                        curveness: 0.3
                    }
                }
            }
        ]
    };


score_data = score_data.concat(_.fill(new Array(total_time - score_data.length), score))

// score_data = score_data.concat(_.fill(new Array(v[0] - score_data.length), score))

var myChart = echarts.init(document.getElementById('force1_1'));
myChart.setOption(optionCircle);

// var homeEle = echarts.init(document.getElementById('home'));
// var awayEle = echarts.init(document.getElementById('away'));

// 使用刚指定的配置项和数据显示图表。

// renderTimeChart(homeEle, home_team_name,home_player,home_names,home_gs)
// renderTimeChart(awayEle, away_team_name,away_player,away_names,away_gs)

function renderTimeChart(ele, team_name,player_ids,player_names,shoufa_ids) {
  
  var myChartHome = ele

  var homeData = []
  player_ids.forEach((v, i) => {
    if (shoufa_ids[i] ==1) {
      homeData[i] = [0]
    } else {
      homeData[i] = []

    }
  })
  _.forEach(all_data, (v, i) => {
    if (v[1] == team_name) {
      var play_index = _.indexOf(player_ids, v[2])
        // 如果球员已经有数据
      let data = homeData[play_index]
        // 时间减去之前的时间
      let originTime = v[0] - _.sum(data)
      if (v[3] == 'in' || v[3] == 'out') {
        data.push(originTime)
          // data.push(v[0]-_.sum())
      }
    }
  })
  homeData.forEach(v => {
    v.push(total_time - _.sum(v))

  })
  let homeSeries = _.zip(...homeData).map((v, i) => {
    let obj = {
      name: i + '',
      type: 'bar',
      stack: '总量',
      barWidth:2,
      label: {
        normal: {
          show: false,
          position: 'insideRight'
        }
      },
      itemStyle: {
        normal: {
          color: i % 2 ? '#fc9b8d' : 'white'
        }
      },
      data: v
    }
    return obj
  })

  // 设置markPoint
  let markPointData = []
  _.forEach(all_data, (v, i) => {
    if (v[1] == team_name && item_obj[v[3]] && item_obj[v[3]].symbol) {

      obj = {
        symbol: item_obj[v[3]].symbol,
        symbolSize: '15',
        label: {
          normal: {
            show: false
          }
        },
        itemStyle: {
          normal: {
            color: '#fc9b8d'
          }
        },
        name: item_obj[v[3]],
        coord: [v[0], _.indexOf(player_ids, v[2])]
      }
      if (item_obj[v[3]].val == 1) {
        obj.symbolSize = '7'
      } else if (item_obj[v[3]].val == 2) {
        obj.symbolSize = ['10', '15']

      } else if (item_obj[v[3]].val == 3) {
        obj.symbolSize = ['20', '13']
      }

      // if(item_obj[v[3]].val){
      //   obj.label = {normal:{show:true,formatter:''+item_obj[v[3]].val}}
      // }else{
      obj.label = {
          normal: {
            show: false
          }
        }
        // }
      markPointData.push(obj)
        // 主队
        // color #c23531
        // 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'

    }
  })

  homeSeries[0].markPoint = {
    data: markPointData
  }
  console.log(markPointData)
  var homeOption = {
    title: {
      text: team_name + '上场情况'
    },
        toolbox:{
                    top:15,
        feature:{
            dataView:{
                show:true
            }
        }
    },
    tooltip: {
      show: true,
      trigger: 'item',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      },
    formatter: function(params, ticket, callback) {
      if (params.color!='white') {
        if (typeof params.name=='object') {
          let i = params.data.coord[1]
                return player_names[i]+ params.name.name

        }else{
                return params.name

        }

      }
      // var data = params[0]
      // return parseInt(data.dataIndex / 60) + '分' + data.dataIndex % 60 + '秒<br><span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + data.color + '"></span>分数差值：' + data.value
    }


    },

    legend: {
      show:false,
      // data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },

    grid: {
      left: '13%',
      right: '4%',
      bottom: '3%',
      // containLabel: true
    },
    xAxis: {
      type: 'value',
      axisLabel: {
        formatter: function(value, index) {
          return parseInt(value / 60) + ':' + value % 60
            // return parseInt(value / 60) + '分' + value % 60 + '秒<br><span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + data.color + '"></span>分数差值：' + data.value

        }
      },
      offset: 300,

      // data:xAxis,
      max: xAxis[xAxis.length - 1] + 1
    },
    yAxis: {
      axisLabel:{
      formatter:function(value,index){
        return _.fill(new Array(40-value.length*2),'').join(' ')+value
      },

      },
      // offset: 300,
      type: 'category',
      data: player_names
    },
    series: homeSeries
  };
  myChartHome.setOption(homeOption);
}



}()