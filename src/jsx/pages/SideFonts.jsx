import React, { useState }  from "react";
import "../../assets/icons/sidefonts/tradeicon.css";

const icons = [
  { label: "봉", className: "tradeicon-ticon_26" },
  { label: "캔들", className: "tradeicon-ticon_27" },
  { label: "영역", className: "tradeicon-ticon_80" },
  { label: "원호", className: "tradeicon-ticon_44" },
  { label: "곡선", className: "tradeicon-ticon_45" },
  { label: "더블곡선", className: "tradeicon-ticon_46" },
  { label: "텍스트", className: "tradeicon-ticon_12" },
  { label: "고정위치문자", className: "tradeicon-ticon_13" },
  { label: "노트", className: "tradeicon-ticon_14" },
  { label: "프라이스 노트", className: "tradeicon-ticon_15" },
  { label: "핀", className: "tradeicon-ticon_16" },
  { label: "테이블", className: "tradeicon-ticon_17" },
  { label: "콜아웃", className: "tradeicon-ticon_18" },
  { label: "코멘트", className: "tradeicon-ticon_19" },
  { label: "가격라벨", className: "tradeicon-ticon_20" },
  { label: "길잡이", className: "tradeicon-ticon_21" },
  { label: "플래그 마크", className: "tradeicon-ticon_22" },
  { label: "", className: "tradeicon-ticon_7" },
  { label: "", className: "tradeicon-ticon_8" },
  { label: "위크 마그넷", className: "tradeicon-ticon_9" },
  { label: "스트롱 마그넷", className: "tradeicon-ticon_10" }
];

const copyCode = (text, msgElement) => {
  navigator.clipboard.writeText(text).then(() => {
    if (msgElement) {
      msgElement.style.display = "inline-block";
      setTimeout(() => {
        msgElement.style.display = "none";
      }, 1500);
    }
  });
};

const SideFonts = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    const newTheme = isDarkTheme ? "light" : "dark";
    setIsDarkTheme(!isDarkTheme);
    document.body.setAttribute("data-theme-version", newTheme);
  };

  return (
    <div style={{  padding: "2rem",  maxWidth: "700px", margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>TradeIcon Font Style Guidelines</h1>
        <div className="theme-toggle" onClick={toggleTheme} style={{ cursor: "pointer" }}>
          {isDarkTheme ? (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="bn-svg" width="24" height="24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.5 3h-3v3h3V3zm0 15h-3v3h3v-3zm-6.803-2.818l2.121 2.121-2.121 2.122-2.122-2.122 2.122-2.121zm12.728-8.485l-2.122-2.122-2.12 2.122 2.12 2.121 2.122-2.121zM15.5 12a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zM6.697 8.818l2.121-2.121-2.121-2.122-2.122 2.122 2.122 2.121zM6 10.5v3H3v-3h3zm15 0v3h-3v-3h3zm-1.576 6.803l-2.12 2.121-2.122-2.12 2.121-2.122 2.121 2.121z"
                fill="currentColor"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="bn-svg" width="24" height="24">
              <path d="M20 12.67A6.233 6.233 0 0111.33 4 8.015 8.015 0 1020 12.67z" fill="currentColor" />
            </svg>
          )}
        </div>
      </div>
      {icons.map((icon, idx) => (
        <div key={idx} style={{ background: isDarkTheme ? " #181a20" : "#fff", border: "1px solid var(--color-DisableBtn)", borderRadius: "8px", padding: "1rem", marginBottom: "1.5rem", boxShadow: "0 2px 5px rgba(0,0,0,0.05)" }}>
          <strong>{icon.label}</strong>
          <div style={{ padding: "1rem 0", fontSize: "2.2rem" }}>
            <div className={`font-i trade_icon ${icon.className}`} />
          </div>
          <div style={{ position: "relative" }}>
            <div className="copied-msg" style={{ position: "absolute", top: "5px", right: "70px", background: "#28a745", color: "white", padding: "4px 8px", fontSize: "0.75rem", borderRadius: "4px", display: "none" }}>
              Copied!
            </div>
            <button
              className="copy-btn"
              style={{ position: "absolute", top: "5px", right: "5px", background: "#007bff", color: "white", border: "none", borderRadius: "4px", padding: "4px 8px", fontSize: "0.8rem", cursor: "pointer" }}
              onClick={(e) => {
                const msgElement = e.target.previousElementSibling;
                copyCode(`<span class=\"font-i trade_icon ${icon.className}\"></span>`, msgElement);
              }}
            >
              Copy
            </button>
            <div className="code-block" style={{ background: isDarkTheme ? "var(--color-DisableBtn)" : "#f0f0f0", padding: "0.5rem 1rem", fontFamily: "monospace", fontSize: "0.9rem", borderRadius: "4px", overflowX: "auto" }}>
              {`<span class="font-i trade_icon ${icon.className}"></span>`}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideFonts;
