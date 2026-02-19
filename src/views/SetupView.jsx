import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SetupView.css';

export default function SetupView() {
    const navigate = useNavigate();
    const currentYear = new Date().getFullYear();

    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [isReady, setIsReady] = useState(false);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        setIsReady(year && month && day);
    }, [year, month, day]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isReady) return;

        const birthday = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        localStorage.setItem('wasai_birthday', birthday);

        setIsExiting(true);
        setTimeout(() => {
            navigate('/home');
        }, 600);
    };

    const years = [];
    for (let y = currentYear; y >= currentYear - 100; y--) {
        years.push(y);
    }
    const months = Array.from({ length: 12 }, (_, i) => i + 1);
    const days = Array.from({ length: 31 }, (_, i) => i + 1);

    return (
        <div className={`setup-page ${isExiting ? 'setup-page--exit' : ''}`}>
            {/* Decorative background */}
            <div className="setup-bg-pattern" />

            <div className="setup-container">
                {/* Logo / Title */}
                <header className="setup-header">
                    <div className="setup-logo-mark">🎋</div>
                    <h1 className="setup-title">和彩ごよみ</h1>
                    <p className="setup-subtitle">わさいごよみ</p>
                </header>

                <div className="wa-divider">
                    <span>◆</span>
                </div>

                <p className="setup-description">
                    あなたの生年月日をお教えください。<br />
                    毎日のラッキーカラーと和柄をお届けします。
                </p>

                {/* Birthday Form */}
                <form className="setup-form" onSubmit={handleSubmit}>
                    <div className="setup-date-group">
                        <div className="setup-select-wrapper">
                            <label className="setup-label" htmlFor="year">年</label>
                            <select
                                id="year"
                                className="setup-select"
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                            >
                                <option value="">—</option>
                                {years.map(y => (
                                    <option key={y} value={y}>{y}</option>
                                ))}
                            </select>
                        </div>

                        <div className="setup-select-wrapper">
                            <label className="setup-label" htmlFor="month">月</label>
                            <select
                                id="month"
                                className="setup-select"
                                value={month}
                                onChange={(e) => setMonth(e.target.value)}
                            >
                                <option value="">—</option>
                                {months.map(m => (
                                    <option key={m} value={m}>{m}</option>
                                ))}
                            </select>
                        </div>

                        <div className="setup-select-wrapper">
                            <label className="setup-label" htmlFor="day">日</label>
                            <select
                                id="day"
                                className="setup-select"
                                value={day}
                                onChange={(e) => setDay(e.target.value)}
                            >
                                <option value="">—</option>
                                {days.map(d => (
                                    <option key={d} value={d}>{d}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className={`setup-button ${isReady ? 'setup-button--active' : ''}`}
                        disabled={!isReady}
                    >
                        <span className="setup-button-text">はじめる</span>
                        <span className="setup-button-icon">→</span>
                    </button>
                </form>

                <p className="setup-note">
                    ※ 入力された情報はお使いの端末にのみ保存されます
                </p>
            </div>
        </div>
    );
}
