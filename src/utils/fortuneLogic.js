/**
 * おみくじロジック
 * 生年月日 + 選択アイテム + 今日の日付からハッシュ的に結果を決定
 */
import { getSeasonalMessage } from '../data/seasonData';

const traditionalColors = [
    { name: '瑠璃色', nameEn: 'Ruri-iro', hex: '#1E50A2', description: '深く澄んだ青。心を落ち着かせ、直感力を高めてくれます。' },
    { name: '山吹色', nameEn: 'Yamabuki-iro', hex: '#F8B400', description: '鮮やかな黄金色。金運や豊かさを象徴する縁起の良い色です。' },
    { name: '臙脂色', nameEn: 'Enji-iro', hex: '#9B2335', description: '深みのある赤。情熱と生命力を呼び覚ましてくれます。' },
    { name: '若竹色', nameEn: 'Wakatake-iro', hex: '#68BE8D', description: '爽やかな緑。成長と若々しいエネルギーを与えてくれます。' },
    { name: '藤色', nameEn: 'Fuji-iro', hex: '#A187BE', description: '淡く優雅な紫。高貴さと品格を引き立てる色です。' },
    { name: '珊瑚色', nameEn: 'Sango-iro', hex: '#F5A3A3', description: '柔らかなピンク。優しさと幸福感をもたらします。' },
    { name: '群青色', nameEn: 'Gunjou-iro', hex: '#4C6CB3', description: '力強い青。冷静な判断力と誠実さを表します。' },
    { name: '抹茶色', nameEn: 'Matcha-iro', hex: '#7B8D42', description: '落ち着いた緑。平穏な心と調和をもたらします。' },
    { name: '桜鼠', nameEn: 'Sakura-nezumi', hex: '#E3C4C4', description: '上品なくすみピンク。控えめながらも愛らしさを演出します。' },
    { name: '柿色', nameEn: 'Kaki-iro', hex: '#ED6D3D', description: '温かみのある橙。実りと活力を象徴する色です。' },
    { name: '藍色', nameEn: 'Ai-iro', hex: '#264061', description: '深く静かな青。信頼と知性を印象づけます。' },
    { name: '銀鼠', nameEn: 'Gin-nezumi', hex: '#91989F', description: '洗練されたグレー。都会的でスマートな印象を与えます。' },
    { name: '紅梅色', nameEn: 'Koubai-iro', hex: '#E86B79', description: '春の訪れを告げる梅の色。明るい希望と可愛らしさを運びます。' },
    { name: '萌黄', nameEn: 'Moegi', hex: '#aacf53', description: '春先に萌え出る若葉の色。新しいことへの挑戦を応援します。' },
    { name: '菫色', nameEn: 'Sumire-iro', hex: '#7058a3', description: '可憐なスミレの色。慎ましさと誠実な愛を表します。' },
    { name: '黄金色', nameEn: 'Kogane-iro', hex: '#e6b422', description: '稲穂のような輝く黄色。豊穣と成功のシンボルです。' },
    { name: '常磐色', nameEn: 'Tokiwa-iro', hex: '#007b43', description: '松の葉のような深い緑。変わらぬ強さと永遠を意味します。' },
    { name: '牡丹色', nameEn: 'Botan-iro', hex: '#c80852', description: '百花の王、牡丹の色。華やかさと自信を与えてくれます。' },
    { name: '空色', nameEn: 'Sora-iro', hex: '#a0d8ef', description: '晴れ渡る空の色。晴れやかな気分と開放感をもたらします。' },
    { name: '鬱金色', nameEn: 'Ukon-iro', hex: '#fabf14', description: '鮮やかな黄色。邪気を払い、明るい未来を照らします。' },
    { name: '浅葱色', nameEn: 'Asagi-iro', hex: '#00a3af', description: '薄い藍色。若々しさと爽快感を感じさせる色です。' },
    { name: '鳶色', nameEn: 'Tobi-iro', hex: '#95483f', description: '赤みのある茶色。落ち着きと大人の余裕を醸し出します。' },
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
    // Added
    '小さな幸せがたくさん見つかる予感。道端の花や空の色に目を向けてみて。心が洗われるような発見があるでしょう。',
    '努力が実を結ぶ兆し。これまで続けてきたことが形になりそうです。自信を持って進んでください。',
    '懐かしい人からの連絡があるかも。旧交を温めることで、新しいインスピレーションが湧いてきます。',
    '学びの意欲が高まる日。興味のあることについて深く調べてみると、大きな収穫があります。',
    'リフレッシュに最適な日。お気に入りの場所に出かけたり、美味しいお茶とお菓子で一息つきましょう。',
    '魅力が開花する日。あなたの何気ない仕草や言葉が、誰かの心を温かくします。笑顔を大切に。',
    '整理整頓が吉。身の回りを整えることで、頭の中もすっきりクリアになります。良い気の流れを作りましょう。',
    '冒険心が幸運の鍵。行ったことのない道を通ってみたり、初めてのお店に入ってみると良いことがありそう。',
    '感謝の気持ちを言葉にすると良い日。「ありがとう」の一言で、人間関係がより円滑になります。',
    '芸術的な感性が光る日。美術館に行ったり、美しい和菓子を目で楽しんだりするのがおすすめです。',
    '健康運が上昇中。少し早起きして朝日を浴びたり、深呼吸をすることで、さらに活力が湧いてきます。',
    'チームワークが重要な日。周りの人と協力することで、一人ではできない大きな成果が得られます。',
    '金運が好調な兆し。長く使える良いものとの出会いがあるかもしれません。直感を信じて選んでみて。',
    '対人運がアップ。聞き上手になることで、相手からの信頼が深まります。相槌は丁寧に。',
    '自分へのご褒美をあげたい日。頑張っている自分を労って、少し贅沢な時間を過ごしてください。',
];

const recommendations = [
    (color) => `今日は${color}の小物を身につけると吉。バッグや帯留めなどのワンポイントがおすすめです。`,
    (color) => `${color}のアイテムがあなたの魅力を引き立てます。半衿や帯揚げに取り入れてみては？`,
    (color) => `${color}を暮らしに取り入れてみませんか。ハンカチやポーチなど、身近なアイテムから始めてみましょう。`,
    (color) => `今日のあなたには${color}がぴったり。お出かけの際にはぜひ意識してみてください。`,
    (color) => `${color}が幸運を運んでくれる日。着物に限らず、普段使いの小物にも取り入れると◎。`,
    // Added
    (color) => `足元に${color}を取り入れてみて。草履の鼻緒や足袋のワンポイントに。`,
    (color) => `スマホの待ち受け画面を${color}にすると、見るたびに運気がチャージされます。`,
    (color) => `${color}のネイルやアクセサリーで、指先から華やかに。気分も運気も上がります。`,
    (color) => `ステーショナリーに${color}を選んでみて。手帳やペンなど、よく使う道具に取り入れるのがコツ。`,
    (color) => `今日は${color}の食材を使った料理を食べてみては？身体の内側からパワーが湧いてきます。`,
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

    const seasonalMessage = getSeasonalMessage(today);

    return {
        luckyColor,
        luckyPattern,
        fortuneText,
        recommendation,
        seasonalMessage,
    };
}
