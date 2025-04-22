import React, { useState }  from "react";
import "../../assets/icons/sidefonts/tradeicon.css";

const icons = [
    { label: "봉", className: "tradeicon-ticon_26" },
    { label: "캔들", className: "tradeicon-ticon_27" },
    { label: "영역", className: "tradeicon-ticon_80" },
    { label: "봉스타일", className: "tradeicon-ticon_77" },
    { label: "심볼 비교/추가", className: "tradeicon-ticon_29" },
    { label: "인디케이터, 메트릭 및 스트래티지", className: "tradeicon-ticon_5" },
    { label: "봉", className: "tradeicon-ticon_26" }, // duplicate entry
    { label: "캔들", className: "tradeicon-ticon_27" }, // duplicate entry
    { label: "할로우캔들", className: "tradeicon-ticon_204" },
    { label: "라인", className: "tradeicon-ticon_192" },
    { label: "마커가 있는 라인", className: "tradeicon-ticon_193" },
    { label: "스텝 라인", className: "tradeicon-ticon_195" },
    { label: "영역", className: "tradeicon-ticon_185" },
    { label: "HLC 영역", className: "tradeicon-ticon_195" }, // duplicate className with 스텝 라인
    { label: "베이스라인", className: "tradeicon-ticon_196" },
    { label: "컬럼", className: "tradeicon-ticon_197" },
    { label: "하이-로우", className: "tradeicon-ticon_198" },
    { label: "헤이킨 아시", className: "tradeicon-ticon_199" },
    { label: "렌코", className: "tradeicon-ticon_200" },
    { label: "위나 아래 수평", className: "tradeicon-ticon_177" },
    { label: "디스조인트 채널", className: "tradeicon-ticon_177" }, // duplicate className with 위나 아래 수평
    { label: "피치포크", className: "tradeicon-ticon_178" },
    { label: "쉬프 피치포크", className: "tradeicon-ticon_179" },
    { label: "변형 쉬프 피치포크", className: "tradeicon-ticon_180" },
    { label: "피치포크 안", className: "tradeicon-ticon_181" },
    { label: "피보나치 되돌림", className: "tradeicon-ticon_133" },
    { label: "추세기반 피보나치 확장", className: "tradeicon-ticon_134" },
    { label: "피보나치 채널", className: "tradeicon-ticon_135" },
    { label: "피보나치 타임존", className: "tradeicon-ticon_136" },
    { label: "피보나치 스피드 리지스턴스 팬", className: "tradeicon-ticon_137" },
    { label: "추세기반 피보나치 시간", className: "tradeicon-ticon_138" },
    { label: "피보나치 서클", className: "tradeicon-ticon_139" },
    { label: "피보나치 스파이럴", className: "tradeicon-ticon_140" },
    { label: "피보나치 스피드 리지스턴스 아크", className: "tradeicon-ticon_141" },
    { label: "피보나치 웻지", className: "tradeicon-ticon_142" },
    { label: "피치팬", className: "tradeicon-ticon_143" },
    { label: "간 박스", className: "tradeicon-ticon_144" },
    { label: "간 스퀘어 픽스트", className: "tradeicon-ticon_3" },
    { label: "간 스퀘어", className: "tradeicon-ticon_4" },
    { label: "간 팬", className: "tradeicon-ticon_147" },
    { label: "XABCD 패턴", className: "tradeicon-ticon_84" },
    { label: "사이퍼 패턴", className: "tradeicon-ticon_85" },
    { label: "헤드 앤 숄더", className: "tradeicon-ticon_86" },
    { label: "ABCD 패턴", className: "tradeicon-ticon_87" },
    { label: "세모 패턴", className: "tradeicon-ticon_88" },
    { label: "쓰리 드라이브 패턴", className: "tradeicon-ticon_89" },
    { label: "엘리엇 임펄스 파동 (12345)", className: "tradeicon-ticon_90" },
    { label: "엘리엇 코렉션 파동 (ABC)", className: "tradeicon-ticon_91" },
    { label: "엘리엇 트라이앵글 웨이브 (ABCDE)", className: "tradeicon-ticon_92" },
    { label: "엘리엇 다블콤보 파동 (WXY)", className: "tradeicon-ticon_93" },
    { label: "엘리엇 트리플콤보 파동 (WXYXZ)", className: "tradeicon-ticon_94" },
    { label: "사이클릭 라인", className: "tradeicon-ticon_95" },
    { label: "타임 사이클", className: "tradeicon-ticon_96" },
    { label: "사인 라인", className: "tradeicon-ticon_97" },
    { label: "매수 포지션", className: "tradeicon-ticon_57" },
    { label: "숏 포지션", className: "tradeicon-ticon_59" },
    { label: "예측", className: "tradeicon-ticon_60" },
    { label: "봉패턴", className: "tradeicon-ticon_61" },
    { label: "고스트피드", className: "tradeicon-ticon_62" },
    { label: "프로젝션", className: "tradeicon-ticon_63" },
    { label: "앵커드 VWAP", className: "tradeicon-ticon_64" },
    { label: "픽스트 레인지 볼륨 프로화일", className: "tradeicon-ticon_65" },
    { label: "고정 볼륨 프로필", className: "tradeicon-ticon_66" },
    { label: "가격범위", className: "tradeicon-ticon_67" },
    { label: "기간", className: "tradeicon-ticon_68" },
    { label: "날짜 및 가격 범위", className: "tradeicon-ticon_69" },
    { label: "붓", className: "tradeicon-ticon_31" },
    { label: "하이라이터", className: "tradeicon-ticon_32" },
    { label: "화살표", className: "tradeicon-ticon_33" },
    { label: "화살표", className: "tradeicon-ticon_34" },
    { label: "위화살표", className: "tradeicon-ticon_35" },
    { label: "아래화살표", className: "tradeicon-ticon_36" },
    { label: "네모", className: "tradeicon-ticon_37" },
    { label: "회전네모", className: "tradeicon-ticon_38" },
    { label: "경로", className: "tradeicon-ticon_39" },
    { label: "서클", className: "tradeicon-ticon_6" },
    { label: "타원", className: "tradeicon-ticon_41" },
    { label: "다선형", className: "tradeicon-ticon_42" },
    { label: "세모", className: "tradeicon-ticon_43" },
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
