import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { items } from '../data/items';
import './HomeView.css';

export default function HomeView() {
    const navigate = useNavigate();
    const [selectedId, setSelectedId] = useState(null);

    const today = new Date();
    const monthNames = ['睦月', '如月', '弥生', '卯月', '皐月', '水無月', '文月', '葉月', '長月', '神無月', '霜月', '師走'];
    const dayOfWeek = ['日', '月', '火', '水', '木', '金', '土'];
    const dateLabel = `${today.getMonth() + 1}月${today.getDate()}日（${dayOfWeek[today.getDay()]}）`;
    const monthLabel = monthNames[today.getMonth()];

    const handleSelect = (itemId) => {
        setSelectedId(itemId);
        setTimeout(() => {
            navigate(`/result/${itemId}`);
        }, 700);
    };

    return (
        <div className="home-page">
            <div className="home-bg-pattern" />

            <div className="page-container">
                {/* Header */}
                <header className="home-header">
                    <div className="home-date">
                        <span className="home-date-month">{monthLabel}</span>
                        <span className="home-date-day">{dateLabel}</span>
                    </div>
                    <h1 className="home-title">和彩ごよみ</h1>
                </header>

                <div className="wa-divider">
                    <span>◆</span>
                </div>

                <p className="home-instruction">
                    今日、心惹かれるものを<br />
                    ひとつお選びください
                </p>

                {/* Item Grid */}
                <div className="home-grid">
                    {items.map((item, index) => (
                        <button
                            key={item.id}
                            className={`home-item stagger-${index + 1} ${selectedId === item.id ? 'home-item--selected' : ''} ${selectedId && selectedId !== item.id ? 'home-item--dimmed' : ''}`}
                            onClick={() => !selectedId && handleSelect(item.id)}
                            disabled={!!selectedId}
                        >
                            <div
                                className="home-item-icon"
                                style={{ background: item.gradient }}
                            >
                                <span className="home-item-emoji">{item.emoji}</span>
                            </div>
                            <span className="home-item-name">{item.name}</span>
                            <span className="home-item-desc">{item.description}</span>
                        </button>
                    ))}
                </div>

                <footer className="home-footer">
                    <p>あなたの直感を信じて ✦</p>
                </footer>
            </div>
        </div>
    );
}
