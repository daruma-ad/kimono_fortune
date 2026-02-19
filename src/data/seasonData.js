/**
 * 二十四節気・七十二候データ
 * 日付に基づいて季節の言葉を取得するためのデータセット
 * ※日付は平年を基準とした目安です
 */

export const solarTerms = [
    // 春 (Spring)
    {
        name: '立春',
        reading: 'りっしゅん',
        startDate: '02-04',
        description: '寒さ明け、春の気配が立ち始める頃',
        pentads: [
            { name: '東風解凍', reading: 'はるかぜこおりをとく', description: '春の風が氷を解かし始める' }, // 2/4-8
            { name: '黄鶯睍睆', reading: 'うぐいすなく', description: 'ウグイスが山里で鳴き始める' }, // 2/9-13
            { name: '魚上氷', reading: 'うおこおりをいずる', description: '割れた氷の間から魚が飛び跳ねる' }, // 2/14-18
        ]
    },
    {
        name: '雨水',
        reading: 'うすい',
        startDate: '02-19',
        description: '雪が雨に変わり、氷が解けて水になる頃',
        pentads: [
            { name: '土脈潤起', reading: 'つちのしょううるおいおこる', description: '雨が降って土が湿り気を含む' }, // 2/19-23
            { name: '霞始靆', reading: 'かすみはじめてたなびく', description: '春霞がたなびき始める' }, // 2/24-28
            { name: '草木萌動', reading: 'そうもくめばえいずる', description: '草木が芽吹き始める' }, // 3/1-5
        ]
    },
    {
        name: '啓蟄',
        reading: 'けいちつ',
        startDate: '03-06',
        description: '冬ごもりの虫たちが土の中から出てくる頃',
        pentads: [
            { name: '蟄虫啓戸', reading: 'すごもりむしとをひらく', description: '冬ごもりの虫が出てくる' }, // 3/6-10
            { name: '桃始笑', reading: 'ももはじめてさく', description: '桃の花が咲き始める' }, // 3/11-15
            { name: '菜虫化蝶', reading: 'なむしちょうとなる', description: '青虫が羽化して紋白蝶になる' }, // 3/16-20
        ]
    },
    {
        name: '春分',
        reading: 'しゅんぶん',
        startDate: '03-21',
        description: '昼と夜の長さがほぼ同じになる日',
        pentads: [
            { name: '雀始巣', reading: 'すずめはじめてすくう', description: '雀が巣を作り始める' }, // 3/21-25
            { name: '桜始開', reading: 'さくらはじめてひらく', description: '桜の花が咲き始める' }, // 3/26-30
            { name: '雷乃発声', reading: 'かみなりすなわちこえをはっす', description: '遠くで雷の音がし始める' }, // 3/31-4/4
        ]
    },
    {
        name: '清明',
        reading: 'せいめい',
        startDate: '04-05',
        description: '万物が清らかで生き生きとする頃',
        pentads: [
            { name: '玄鳥至', reading: 'つばめきたる', description: '燕が南からやってくる' }, // 4/5-9
            { name: '鴻雁北', reading: 'こうがんかえる', description: '雁が北へ帰っていく' }, // 4/10-14
            { name: '虹始見', reading: 'にじはじめてあらわる', description: '雨上がりに虹が見え始める' }, // 4/15-19
        ]
    },
    {
        name: '穀雨',
        reading: 'こくう',
        startDate: '04-20',
        description: '穀物を潤す春雨が降る頃',
        pentads: [
            { name: '葭始生', reading: 'あしはじめてしょうず', description: '葦が芽吹き始める' }, // 4/20-24
            { name: '霜止出苗', reading: 'しもやみてなえいずる', description: '霜が降りなくなり苗が育つ' }, // 4/25-29
            { name: '牡丹華', reading: 'ぼたんはなさく', description: '牡丹の花が咲く' }, // 4/30-5/4
        ]
    },

    // 夏 (Summer)
    {
        name: '立夏',
        reading: 'りっか',
        startDate: '05-05',
        description: '夏の気配が感じられ始める頃',
        pentads: [
            { name: '蛙始鳴', reading: 'かわずはじめてなく', description: '蛙が鳴き始める' }, // 5/5-9
            { name: '蚯蚓出', reading: 'みみずいずる', description: 'ミミズが地上に出てくる' }, // 5/10-14
            { name: '竹筍生', reading: 'たけのこしょうず', description: '竹の子が生えてくる' }, // 5/15-20
        ]
    },
    {
        name: '小満',
        reading: 'しょうまん',
        startDate: '05-21',
        description: '生命が満ち満ちてくる頃',
        pentads: [
            { name: '蚕起食桑', reading: 'かいこおきてくわをはむ', description: '蚕が桑を盛んに食べる' }, // 5/21-25
            { name: '紅花栄', reading: 'べにばなさかう', description: '紅花が盛んに咲く' }, // 5/26-30
            { name: '麦秋至', reading: 'むぎのときいたる', description: '麦が熟して収穫の時を迎える' }, // 5/31-6/5
        ]
    },
    {
        name: '芒種',
        reading: 'ぼうしゅ',
        startDate: '06-06',
        description: '稲や麦など芒（のぎ）のある穀物の種まきの頃',
        pentads: [
            { name: '蟷螂生', reading: 'かまきりしょうず', description: 'カマキリが生まれる' }, // 6/6-10
            { name: '腐草為蛍', reading: 'くされたるくさほたるとなる', description: '蛍が飛び交い始める' }, // 6/11-15
            { name: '梅子黄', reading: 'うめのみきばむ', description: '梅の実が熟して黄色くなる' }, // 6/16-20
        ]
    },
    {
        name: '夏至',
        reading: 'げし',
        startDate: '06-21',
        description: '一年で最も昼が長く、夜が短い日',
        pentads: [
            { name: '乃東枯', reading: 'なつかれくさかるる', description: '夏枯草が枯れる' }, // 6/21-26
            { name: '菖蒲華', reading: 'あやめはなさく', description: 'あやめの花が咲く' }, // 6/27-7/1
            { name: '半夏生', reading: 'はんげしょうず', description: '半夏が生える' }, // 7/2-6
        ]
    },
    {
        name: '小暑',
        reading: 'しょうしょ',
        startDate: '07-07',
        description: '暑さが本格的になり始める頃',
        pentads: [
            { name: '温風至', reading: 'あつかぜいたる', description: '暖かい風が吹いてくる' }, // 7/7-11
            { name: '蓮始開', reading: 'はすはじめてひらく', description: '蓮の花が開き始める' }, // 7/12-16
            { name: '鷹乃学習', reading: 'たかすなわちわざをならう', description: '鷹の幼鳥が飛ぶ練習をする' }, // 7/17-22
        ]
    },
    {
        name: '大暑',
        reading: 'たいしょ',
        startDate: '07-23',
        description: '一年で最も暑さが厳しい頃',
        pentads: [
            { name: '桐始結花', reading: 'きりはじめてはなをむすぶ', description: '桐の実がなり始める' }, // 7/23-27
            { name: '土潤溽暑', reading: 'つちうるおうてむしあつし', description: '土が湿って蒸し暑くなる' }, // 7/28-8/1
            { name: '大雨時行', reading: 'たいうときどきふる', description: '時折激しい雨が降る' }, // 8/2-6
        ]
    },

    // 秋 (Autumn)
    {
        name: '立秋',
        reading: 'りっしゅう',
        startDate: '08-07',
        description: '初めて秋の気配が現れる頃',
        pentads: [
            { name: '涼風至', reading: 'すずかぜいたる', description: '涼しい風が吹き始める' }, // 8/7-12
            { name: '寒蝉鳴', reading: 'ひぐらしなく', description: 'ヒグラシが鳴き始める' }, // 8/13-17
            { name: '蒙霧升降', reading: 'ふかききりまとう', description: '深い霧が立ち込める' }, // 8/18-22
        ]
    },
    {
        name: '処暑',
        reading: 'しょしょ',
        startDate: '08-23',
        description: '暑さが和らぎ、萩の花が咲く頃',
        pentads: [
            { name: '綿柎開', reading: 'わたのはなしべひらく', description: '綿を包むガクが開く' }, // 8/23-27
            { name: '天地始粛', reading: 'てんちはじめてさむし', description: '暑さが鎮まる' }, // 8/28-9/1
            { name: '禾乃登', reading: 'こくものすなわちみのる', description: '稲が実る' }, // 9/2-7
        ]
    },
    {
        name: '白露',
        reading: 'はくろ',
        startDate: '09-08',
        description: '草花に露が宿り、白く光って見える頃',
        pentads: [
            { name: '草露白', reading: 'くさのつゆしろし', description: '草に降りた露が白く光る' }, // 9/8-12
            { name: '鶺鴒鳴', reading: 'せきれいなく', description: 'セキレイが鳴き始める' }, // 9/13-17
            { name: '玄鳥去', reading: 'つばめさる', description: '燕が南へ帰っていく' }, // 9/18-22
        ]
    },
    {
        name: '秋分',
        reading: 'しゅうぶん',
        startDate: '09-23',
        description: '昼と夜の長さがほぼ同じになる日',
        pentads: [
            { name: '雷乃収声', reading: 'かみなりすなわちこえをおさむ', description: '雷が鳴らなくなる' }, // 9/23-27
            { name: '蟄虫坏戸', reading: 'むしかくれてとをふさぐ', description: '虫が土に潜って入口を塞ぐ' }, // 9/28-10/2
            { name: '水始涸', reading: 'みずはじめてかる', description: '田畑の水を落とす' }, // 10/3-7
        ]
    },
    {
        name: '寒露',
        reading: 'かんろ',
        startDate: '10-08',
        description: '夜が長くなり、露が冷たく感じる頃',
        pentads: [
            { name: '鴻雁来', reading: 'こうがんきたる', description: '雁が飛来する' }, // 10/8-12
            { name: '菊有黄華', reading: 'きくのはなさく', description: '菊の花が咲く' }, // 10/13-17
            { name: '蟋蟀在戸', reading: 'きりぎりすとにあり', description: 'キリギリスが戸口で鳴く' }, // 10/18-22
        ]
    },
    {
        name: '霜降',
        reading: 'そうこう',
        startDate: '10-23',
        description: '霜が降り始め、冬の気配が近づく頃',
        pentads: [
            { name: '霜始降', reading: 'しもはじめてふる', description: '霜が降り始める' }, // 10/23-27
            { name: '霎時施', reading: 'こさめときどきふる', description: '時雨が降る' }, // 10/28-11/1
            { name: '楓蔦黄', reading: 'もみじつたきばむ', description: '紅葉や蔦が色づく' }, // 11/2-6
        ]
    },

    // 冬 (Winter)
    {
        name: '立冬',
        reading: 'りっとう',
        startDate: '11-07',
        description: '冬の気配が初めて現れる頃',
        pentads: [
            { name: '山茶始開', reading: 'つばきはじめてひらく', description: '山茶花が咲き始める' }, // 11/7-11
            { name: '地始凍', reading: 'ちはじめてこおる', description: '大地が凍り始める' }, // 11/12-16
            { name: '金盞香', reading: 'きんせんかさく', description: '水仙の花が咲く' }, // 11/17-21
        ]
    },
    {
        name: '小雪',
        reading: 'しょうせつ',
        startDate: '11-22',
        description: 'わずかながら雪が降り始める頃',
        pentads: [
            { name: '虹蔵不見', reading: 'にじかくれてみえず', description: '虹を見かけなくなる' }, // 11/22-26
            { name: '朔風払葉', reading: 'きたかぜこのはをはらう', description: '北風が木の葉を散らす' }, // 11/27-12/1
            { name: '橘始黄', reading: 'たちばなはじめてきばむ', description: '橘の実が黄色くなる' }, // 12/2-6
        ]
    },
    {
        name: '大雪',
        reading: 'たいせつ',
        startDate: '12-07',
        description: '雪が激しく降り始める頃',
        pentads: [
            { name: '閉塞成冬', reading: 'そらさむくふゆとなる', description: '天地の気が塞がり冬となる' }, // 12/7-11
            { name: '熊蟄穴', reading: 'くまあなにこもる', description: '熊が冬眠に入る' }, // 12/12-16
            { name: '鱖魚群', reading: 'さけのうおむらがる', description: '鮭が群がって川を上る' }, // 12/17-21
        ]
    },
    {
        name: '冬至',
        reading: 'とうじ',
        startDate: '12-22',
        description: '一年で最も夜が長く、昼が短い日',
        pentads: [
            { name: '乃東生', reading: 'なつかれくさしょうず', description: '夏枯草が芽を出す' }, // 12/22-26
            { name: '麋角解', reading: 'おおしかのつのおつる', description: '大鹿の角が落ちる' }, // 12/27-31
            { name: '雪下出麦', reading: 'ゆきわたりてむぎのびる', description: '雪の下で麦が芽を出す' }, // 1/1-5
        ]
    },
    {
        name: '小寒',
        reading: 'しょうかん',
        startDate: '01-05',
        description: '寒さが厳しくなり、「寒の入り」とも呼ばれる',
        pentads: [
            { name: '芹乃栄', reading: 'せりすなわちさかう', description: '芹が盛んに育つ' }, // 1/5-9
            { name: '水泉動', reading: 'しみずあたたかをふくむ', description: '地中の泉が動き始める' }, // 1/10-14
            { name: '雉始雊', reading: 'きじはじめてなく', description: '雉が鳴き始める' }, // 1/15-19
        ]
    },
    {
        name: '大寒',
        reading: 'だいかん',
        startDate: '01-20',
        description: '一年で最も寒さが厳しい時期',
        pentads: [
            { name: '款冬華', reading: 'ふきのはなさく', description: '蕗の薹（ふきのとう）が出る' }, // 1/20-24
            { name: '水沢腹堅', reading: 'さわみずこおりつめる', description: '沢の水が厚く凍る' }, // 1/25-29
            { name: '鶏始乳', reading: 'にわとりはじめてとやにつく', description: '鶏が卵を産み始める' }, // 1/30-2/3
        ]
    },
];

/**
 * 今日の日付から二十四節気と七十二候を取得するヘルパー関数
 * @param {Date} date
 * @returns {Object} { solarTerm, pentad }
 */
export function getSeasonalMessage(date) {
    const currentMonth = date.getMonth() + 1;
    const currentDay = date.getDate();
    const currentDateKey = currentMonth * 100 + currentDay;

    // 年末年始の特別処理（1月分をリストの最後に配置して比較しやすくするなどの工夫も可能だが、
    // ここでは日付比較で探索する）

    // 日付を数値化してソート済みの配列から探すが、
    // startDateは 'MM-DD' 文字列なので数値化して比較

    let currentTermIndex = -1;

    for (let i = 0; i < solarTerms.length; i++) {
        const [m, d] = solarTerms[i].startDate.split('-').map(Number);
        const termDateKey = m * 100 + d;

        // 年末年始の不連続性を処理するためのロジック
        // データは2/4(立春)から始まっている
        // 日付キー比較で判断

        // 単純化: 12月の終わりと1月の比較が難しいので、
        // 配列のオーダーをカレンダー順（1月1日〜12月31日）ではなく、二十四節気順（2月〜翌1月）にしている。
        // そのため、1月の冬至〜大寒は「翌年の1月」として扱うか、
        // 日付比較で「現在の月が1, 2月かつ term月が11, 12月なら...」などの考慮が必要。

        // 最も確実な方法: 
        // 現在の日付を「立春からの日数」または「1月1日からの日数」に正規化して探す。

        // ここではシンプルに:
        // 配列をループし、"今日以前で最も新しい節気"を探す。
        // ただし配列が2月始まりなので、1月の場合は前年の冬至以降を見る必要がある。
    }

    // 1月, 2月(立春前)の場合、配列末尾の方から探す必要がある
    // 立春(2/4)より前なら、前年の冬至〜大寒などを参照する

    // 簡易実装として、配列を標準的な1月始まりに並べ替えて処理するか、
    // 日付オブジェクトを使って判定する。

    // 365日分のマップを作ったほうが早いが、
    // ここでは日付文字列比較で実装する。

    // 1. 今年の日付オブジェクトを作る（年は固定でOK、比較用）
    const targetDate = new Date(2000, date.getMonth(), date.getDate()); // 閏年考慮で2000年

    let foundTerm = null;
    let foundTermIndex = -1;

    // 2月4日始まりのリストなので注意
    // 1月1日〜2月3日は、リストの最後の方（小寒・大寒）に該当する

    // 探索ロジック:
    // 全ての節気の開始日を Date オブジェクト化（年は調整）して、
    // 「開始日が今日以前」の中で最も遅いものを探す

    let maxDate = new Date(1900, 0, 1); // 遠い過去

    solarTerms.forEach((term, index) => {
        const [m, d] = term.startDate.split('-').map(Number);
        let year = 2000;

        // 1月、2月（立春前）の扱いは？
        // 立春(2/4)が先頭。
        // 1月の小寒(1/5)などはリスト末尾。

        // リストの並び：2月, 3月... 12月, 1月
        // これを時系列（1/1〜12/31）で評価するには、
        // 1月分の日付を「翌年」として扱うと時系列が壊れるので、
        // 単純に「月」で判断して年を割り振る

        // 2月〜12月は 2000年
        // 1月は 2001年 として扱うと、時系列順になる（立春2/4〜翌大寒1/20）

        if (m === 1) year = 2001;

        const termDate = new Date(year, m - 1, d);

        // ターゲット日付も同様に調整
        let targetYear = 2000;
        if (date.getMonth() === 0) targetYear = 2001; // 1月なら翌年扱い

        const checkDate = new Date(targetYear, date.getMonth(), date.getDate());

        if (termDate <= checkDate && termDate > maxDate) {
            maxDate = termDate;
            foundTerm = term;
            foundTermIndex = index;
        }
    });

    // もし見つからない場合（ありえないが）、立春(2/4)の前＝大寒
    if (!foundTerm) {
        foundTerm = solarTerms[solarTerms.length - 1]; // 大寒
        foundTermIndex = solarTerms.length - 1;
    }

    // 七十二候の特定
    // 1つの節気は約15日間、5日ごとに3つの候がある
    // 開始日からの経過日数で判定
    const [m, d] = foundTerm.startDate.split('-').map(Number);
    let termYear = 2000;
    if (m === 1) termYear = 2001;

    const termStartDate = new Date(termYear, m - 1, d);

    let targetYear = 2000;
    if (date.getMonth() === 0) targetYear = 2001;
    const currentDate = new Date(targetYear, date.getMonth(), date.getDate());

    const diffTime = Math.abs(currentDate - termStartDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let pentadIndex = 0;
    if (diffDays >= 5) pentadIndex = 1;
    if (diffDays >= 10) pentadIndex = 2;
    // 15日以上でも次の節気が来るまでは3番目（末候）
    if (pentadIndex > 2) pentadIndex = 2;

    const currentPentad = foundTerm.pentads[pentadIndex];

    // 候の名前：初候、次候、末候
    const pentadLabels = ['初候', '次候', '末候'];

    return {
        solarTerm: foundTerm,
        pentad: currentPentad,
        pentadLabel: pentadLabels[pentadIndex]
    };
}
