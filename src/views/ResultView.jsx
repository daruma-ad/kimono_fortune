import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { generateFortune } from '../utils/fortuneLogic';
import { items } from '../data/items';
import './ResultView.css';

export default function ResultView() {
    const { itemId } = useParams();
    const navigate = useNavigate();
    const [fortune, setFortune] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isExiting, setIsExiting] = useState(false);

    const selectedItem = items.find(i => i.id === itemId);

    useEffect(() => {
        const birthday = localStorage.getItem('wasai_birthday');
        if (!birthday) {
            navigate('/');
            return;
        }
        const result = generateFortune(birthday, itemId);
        setFortune(result);

        // Staggered reveal
        setTimeout(() => setIsVisible(true), 100);
    }, [itemId, navigate]);

    const handleRetry = () => {
        setIsExiting(true);
        setTimeout(() => navigate('/home'), 500);
    };

    if (!fortune) return null;

    return (
        <div className={`result-page ${isExiting ? 'result-page--exit' : ''}`}>
            <div className="result-bg-pattern" />
            <div
                className="result-bg-glow"
                style={{ '--glow-color': fortune.luckyColor.hex }}
            />

            <div className="page-container">
                {/* Header */}
                <header className={`result-header ${isVisible ? 'result-header--visible' : ''}`}>
                    <p className="result-header-label">今日のあなたの運勢</p>
                    <h1 className="result-title">和彩ごよみ</h1>
                    {selectedItem && (
                        <p className="result-selected-item">
                            <span className="result-selected-emoji">{selectedItem.emoji}</span>
                            {selectedItem.name}を選びました
                        </p>
                    )}
                </header>

                <div className="wa-divider">
                    <span>◆</span>
                </div>

                {/* Lucky Color */}
                <section className={`result-section result-color-section ${isVisible ? 'result-section--visible' : ''}`}>
                    <h2 className="result-section-title">今日のラッキーカラー</h2>
                    <div className="result-color-card">
                        <div
                            className="result-color-swatch"
                            style={{ backgroundColor: fortune.luckyColor.hex }}
                        />
                        <div className="result-color-info">
                            <span className="result-color-name">{fortune.luckyColor.name}</span>
                            <span className="result-color-name-en">{fortune.luckyColor.nameEn}</span>
                            <span className="result-color-desc">{fortune.luckyColor.description}</span>
                        </div>
                    </div>
                </section>

                {/* Lucky Pattern */}
                <section className={`result-section result-pattern-section ${isVisible ? 'result-section--visible' : ''}`}>
                    <h2 className="result-section-title">今日のラッキー和柄</h2>
                    <div className="result-pattern-card">
                        <div className="result-pattern-preview">
                            <PatternSvg pattern={fortune.luckyPattern.svgPattern} color={fortune.luckyColor.hex} />
                        </div>
                        <div className="result-pattern-info">
                            <span className="result-pattern-name">{fortune.luckyPattern.name}</span>
                            <span className="result-pattern-name-en">{fortune.luckyPattern.nameEn}</span>
                            <span className="result-pattern-desc">{fortune.luckyPattern.description}</span>
                        </div>
                    </div>
                </section>

                {/* Fortune Text */}
                <section className={`result-section result-fortune-section ${isVisible ? 'result-section--visible' : ''}`}>
                    <h2 className="result-section-title">今日の運勢</h2>
                    <div className="result-fortune-card">
                        <p className="result-fortune-text">{fortune.fortuneText}</p>
                    </div>
                </section>

                <div className="wa-divider">
                    <span>✦</span>
                </div>

                {/* Promotion Section */}
                <section className={`result-section result-promo-section ${isVisible ? 'result-section--visible' : ''}`}>
                    <h2 className="result-section-title">おすすめ</h2>

                    {/* Recommendation */}
                    <div className="result-promo-card result-recommendation">
                        <div className="result-promo-icon">💡</div>
                        <p className="result-promo-text">{fortune.recommendation}</p>
                    </div>

                    {/* Store Coupon */}
                    <div className="result-promo-card result-store-coupon">
                        <div className="result-promo-badge">店頭特典</div>
                        <p className="result-promo-text">
                            この画面を店頭でご提示いただくと<br />
                            <strong>オリジナルノベルティ</strong>をプレゼント 🎁
                        </p>
                        <div className="result-promo-note">※ おひとり様1日1回まで</div>
                    </div>

                    {/* EC Coupon */}
                    <div className="result-promo-card result-ec-coupon">
                        <div className="result-promo-badge result-promo-badge--ec">ECクーポン</div>
                        <p className="result-promo-text">
                            オンラインショップで使える
                        </p>
                        <div className="result-coupon-code">
                            <span className="result-coupon-label">クーポンコード</span>
                            <span className="result-coupon-value">WASAI10OFF</span>
                        </div>
                        <p className="result-coupon-discount">全品 <strong>10% OFF</strong></p>
                        <div className="result-promo-note">※ 他クーポンとの併用不可</div>
                    </div>
                </section>

                {/* Retry Button */}
                <button className="result-retry-button" onClick={handleRetry}>
                    <span>もう一度占う</span>
                    <span className="result-retry-icon">🔮</span>
                </button>

                <footer className="result-footer">
                    <p>和彩ごよみ — あなたの毎日に、和の彩りを</p>
                </footer>
            </div>
        </div>
    );
}

/**
 * SVG Japanese pattern component
 */
function PatternSvg({ pattern, color }) {
    const size = 120;
    const opacity = 0.7;

    const patterns = {
        seigaiha: (
            <svg viewBox="0 0 120 120" width={size} height={size}>
                {[0, 1, 2].map(row =>
                    [0, 1, 2, 3].map(col => (
                        <g key={`${row}-${col}`} transform={`translate(${col * 36 - (row % 2) * 18}, ${row * 28 - 10})`}>
                            {[36, 28, 20, 12].map((r, i) => (
                                <path
                                    key={i}
                                    d={`M ${-r / 2} 30 A ${r / 2} ${r / 2} 0 0 1 ${r / 2} 30`}
                                    fill="none"
                                    stroke={color}
                                    strokeWidth="1.2"
                                    opacity={opacity - i * 0.12}
                                />
                            ))}
                        </g>
                    ))
                )}
            </svg>
        ),
        asanoha: (
            <svg viewBox="0 0 120 120" width={size} height={size}>
                <defs>
                    <pattern id="asanoha" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <line x1="20" y1="0" x2="20" y2="40" stroke={color} strokeWidth="0.8" opacity={opacity} />
                        <line x1="0" y1="20" x2="40" y2="20" stroke={color} strokeWidth="0.8" opacity={opacity} />
                        <line x1="0" y1="0" x2="20" y2="20" stroke={color} strokeWidth="0.8" opacity={opacity} />
                        <line x1="40" y1="0" x2="20" y2="20" stroke={color} strokeWidth="0.8" opacity={opacity} />
                        <line x1="0" y1="40" x2="20" y2="20" stroke={color} strokeWidth="0.8" opacity={opacity} />
                        <line x1="40" y1="40" x2="20" y2="20" stroke={color} strokeWidth="0.8" opacity={opacity} />
                    </pattern>
                </defs>
                <rect width="120" height="120" fill={`url(#asanoha)`} />
            </svg>
        ),
        ichimatsu: (
            <svg viewBox="0 0 120 120" width={size} height={size}>
                {Array.from({ length: 6 }).map((_, row) =>
                    Array.from({ length: 6 }).map((_, col) => (
                        (row + col) % 2 === 0 && (
                            <rect
                                key={`${row}-${col}`}
                                x={col * 20}
                                y={row * 20}
                                width="20"
                                height="20"
                                fill={color}
                                opacity={opacity * 0.3}
                            />
                        )
                    ))
                )}
            </svg>
        ),
        shippou: (
            <svg viewBox="0 0 120 120" width={size} height={size}>
                {[0, 1, 2].map(row =>
                    [0, 1, 2, 3].map(col => (
                        <circle
                            key={`${row}-${col}`}
                            cx={col * 35 + 15}
                            cy={row * 35 + 15}
                            r="17"
                            fill="none"
                            stroke={color}
                            strokeWidth="1.2"
                            opacity={opacity}
                        />
                    ))
                )}
            </svg>
        ),
        kikkou: (
            <svg viewBox="0 0 120 120" width={size} height={size}>
                <defs>
                    <pattern id="kikkou" x="0" y="0" width="34" height="40" patternUnits="userSpaceOnUse">
                        <polygon
                            points="17,2 32,11 32,29 17,38 2,29 2,11"
                            fill="none"
                            stroke={color}
                            strokeWidth="1.2"
                            opacity={opacity}
                        />
                    </pattern>
                </defs>
                <rect width="120" height="120" fill="url(#kikkou)" />
            </svg>
        ),
        uroko: (
            <svg viewBox="0 0 120 120" width={size} height={size}>
                {Array.from({ length: 5 }).map((_, row) =>
                    Array.from({ length: 5 }).map((_, col) => (
                        <polygon
                            key={`${row}-${col}`}
                            points={`${col * 28 + 14},${row * 24} ${col * 28 + 28},${row * 24 + 24} ${col * 28},${row * 24 + 24}`}
                            fill={color}
                            opacity={(row + col) % 2 === 0 ? opacity * 0.25 : opacity * 0.12}
                        />
                    ))
                )}
            </svg>
        ),
        yagasuri: (
            <svg viewBox="0 0 120 120" width={size} height={size}>
                <defs>
                    <pattern id="yagasuri" x="0" y="0" width="30" height="40" patternUnits="userSpaceOnUse">
                        <line x1="0" y1="20" x2="15" y2="0" stroke={color} strokeWidth="1" opacity={opacity} />
                        <line x1="0" y1="20" x2="15" y2="40" stroke={color} strokeWidth="1" opacity={opacity} />
                        <line x1="15" y1="0" x2="30" y2="20" stroke={color} strokeWidth="1" opacity={opacity} />
                        <line x1="15" y1="40" x2="30" y2="20" stroke={color} strokeWidth="1" opacity={opacity} />
                    </pattern>
                </defs>
                <rect width="120" height="120" fill="url(#yagasuri)" />
            </svg>
        ),
        sayagata: (
            <svg viewBox="0 0 120 120" width={size} height={size}>
                <defs>
                    <pattern id="sayagata" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M0,20 L10,20 L10,10 L20,10 L20,0" fill="none" stroke={color} strokeWidth="1" opacity={opacity} />
                        <path d="M20,40 L20,30 L30,30 L30,20 L40,20" fill="none" stroke={color} strokeWidth="1" opacity={opacity} />
                        <path d="M0,20 L0,30 L10,30 L10,40" fill="none" stroke={color} strokeWidth="1" opacity={opacity * 0.6} />
                        <path d="M40,20 L40,10 L30,10 L30,0" fill="none" stroke={color} strokeWidth="1" opacity={opacity * 0.6} />
                    </pattern>
                </defs>
                <rect width="120" height="120" fill="url(#sayagata)" />
            </svg>
        ),
    };

    return (
        <div className="pattern-svg-container">
            {patterns[pattern] || patterns.seigaiha}
        </div>
    );
}
