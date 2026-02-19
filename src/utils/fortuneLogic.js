/**
 * おみくじロジック
 * 生年月日 + 選択アイテム + 今日の日付からハッシュ的に結果を決定
 */

const traditionalColors = [
    { name: '瑠璃色', nameEn: 'Ruri-iro', hex: '#1E50A2', description: '深く澄んだ青' },
    { name: '山吹色', nameEn: 'Yamabuki-iro', hex: '#F8B400', description: '鮮やかな黄金色' },
    { name: '臙脂色', nameEn: 'Enji-iro', hex: '#9B2335', description: '深みのある赤' },
    { name: '若竹色', nameEn: 'Wakatake-iro', hex: '#68BE8D', description: '爽やかな緑' },
    { name: '藤色', nameEn: 'Fuji-iro', hex: '#A187BE', description: '淡く優雅な紫' },
    { name: '珊瑚色', nameEn: 'Sango-iro', hex: '#F5A3A3', description: '柔らかなピンク' },
    { name: '群青色', nameEn: 'Gunjou-iro', hex: '#4C6CB3', description: '力強い青' },
    { name: '抹茶色', nameEn: 'Matcha-iro', hex: '#7B8D42', description: '落ち着いた緑' },
    { name: '桜鼠', nameEn: 'Sakura-nezumi', hex: '#E3C4C4', description: '上品なくすみピンク' },
    { name: '柿色', nameEn: 'Kaki-iro', hex: '#ED6D3D', description: '温かみのある橙' },
    { name: '藍色', nameEn: 'Ai-iro', hex: '#264061', description: '深く静かな青' },
    { name: '銀鼠', nameEn: 'Gin-nezumi', hex: '#91989F', description: '洗練されたグレー' },
];

const traditionalPatterns = [
    { name: '青海波', nameEn: 'Seigaiha', description: '穏やかな波が続く吉祥文様。平穏な暮らしを象徴します。', svgPattern: 'seigaiha' },
    { name: '麻の葉', nameEn: 'Asanoha', description: '六角形が連なる文様。成長と魔除けの意味があります。', svgPattern: 'asanoha' },
    { name: '市松', nameEn: 'Ichimatsu', description: '格子状の文様。繁栄が途切れず続くことを表します。', svgPattern: 'ichimatsu' },
    { name: '七宝', nameEn: 'Shippou', description: '円が連なる文様。円満や調和を意味します。', svgPattern: 'shippou' },
    { name: '亀甲', nameEn: 'Kikkou', description: '六角形の文様。長寿と繁栄の象徴です。', svgPattern: 'kikkou' },
    { name: '鱗', nameEn: 'Uroko', description: '三角形が並ぶ文様。厄除けの力があるとされます。', svgPattern: 'uroko' },
    { name: '矢絣', nameEn: 'Yagasuri', description: '矢羽根を並べた文様。的を射る縁起の良さがあります。', svgPattern: 'yagasuri' },
    { name: '紗綾形', nameEn: 'Sayagata', description: '卍を崩した連続文様。不断長久を意味します。', svgPattern: 'sayagata' },
];

const fortuneTexts = [
    '今日は素敵な出会いに恵まれる日。新しいことを始めるにもぴったりです。自分らしい装いで一歩を踏み出しましょう。',
    '穏やかな風が吹く一日。心をゆったりと構えれば、自然と良い流れがやってきます。伝統の美しさに触れることで運気アップ。',
    '創造力が高まる日。いつもと違うコーディネートを楽しんでみて。きっと周りからも褒められるはず。',
    '人間関係に温かい光が差す日。大切な人と過ごす時間を大切に。和の心で接すれば、きっと笑顔が生まれます。',
    '直感が冴える日。ピンと来たものには迷わず手を伸ばして。今日選んだ色があなたにとってのお守りになります。',
    '落ち着いた判断ができる日。じっくり考えて行動すれば、良い結果がついてきます。上品な色合いがあなたの味方。',
    'エネルギーに満ちた一日。積極的に動くことで運気が開けます。はっきりとした色を取り入れると吉。',
    '感性が豊かになる日。美しいものに囲まれると心が満たされます。季節の色を楽しんでみてください。',
    '安定した運気の日。いつもの自分らしさを大切に。身近な人への感謝の気持ちを伝えると、さらに良い一日に。',
    '変化を楽しめる日。新しい色や柄に挑戦してみると、思わぬ発見があるかもしれません。冒険心を持って。',
];

const recommendations = [
    (color) => `今日は${color}の小物を身につけると吉。バッグや帯留めなどのワンポイントがおすすめです。`,
    (color) => `${color}のアイテムがあなたの魅力を引き立てます。半衿や帯揚げに取り入れてみては？`,
    (color) => `${color}を暮らしに取り入れてみませんか。ハンカチやポーチなど、身近なアイテムから始めてみましょう。`,
    (color) => `今日のあなたには${color}がぴったり。お出かけの際にはぜひ意識してみてください。`,
    (color) => `${color}が幸運を運んでくれる日。着物に限らず、普段使いの小物にも取り入れると◎。`,
];

/**
 * 簡易ハッシュ関数
 */
function simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash);
}

/**
 * おみくじ結果を生成する
 * @param {string} birthday - 生年月日 (YYYY-MM-DD)
 * @param {string} itemId - 選択したアイテムのID
 * @returns {Object} おみくじ結果
 */
export function generateFortune(birthday, itemId) {
    const today = new Date();
    const dateStr = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    const seed = `${birthday}-${itemId}-${dateStr}`;

    const hash = simpleHash(seed);

    const colorIndex = hash % traditionalColors.length;
    const patternIndex = (hash >> 4) % traditionalPatterns.length;
    const fortuneIndex = (hash >> 8) % fortuneTexts.length;
    const recIndex = (hash >> 12) % recommendations.length;

    const luckyColor = traditionalColors[colorIndex];
    const luckyPattern = traditionalPatterns[patternIndex];
    const fortuneText = fortuneTexts[fortuneIndex];
    const recommendation = recommendations[recIndex](luckyColor.name);

    return {
        luckyColor,
        luckyPattern,
        fortuneText,
        recommendation,
    };
}
