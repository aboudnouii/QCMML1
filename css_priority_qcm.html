<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CSS Priority & Cascade — QCM Quiz</title>
<link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Syne:wght@400;700;800;900&display=swap" rel="stylesheet">
<style>
  :root {
    --bg: #0a0a0f;
    --surface: #111118;
    --card: #16161f;
    --border: #2a2a3a;
    --accent-low: #3bffa0;
    --accent-med: #ffb830;
    --accent-high: #ff4d6d;
    --accent-tf: #7b8cff;
    --text: #e8e8f0;
    --muted: #7070a0;
    --code-bg: #0d0d16;
    --correct: #3bffa0;
    --incorrect: #ff4d6d;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'Syne', sans-serif;
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* ── HEADER ── */
  header {
    position: relative;
    padding: 60px 40px 40px;
    border-bottom: 1px solid var(--border);
    overflow: hidden;
  }
  header::before {
    content: '';
    position: absolute;
    top: -120px; left: -120px;
    width: 500px; height: 500px;
    background: radial-gradient(circle, rgba(59,255,160,.12) 0%, transparent 70%);
    pointer-events: none;
  }
  header::after {
    content: '';
    position: absolute;
    top: -80px; right: 100px;
    width: 300px; height: 300px;
    background: radial-gradient(circle, rgba(255,77,109,.1) 0%, transparent 70%);
    pointer-events: none;
  }

  .header-badge {
    display: inline-block;
    font-family: 'Space Mono', monospace;
    font-size: .7rem;
    letter-spacing: .15em;
    text-transform: uppercase;
    color: var(--accent-low);
    border: 1px solid var(--accent-low);
    padding: 4px 12px;
    border-radius: 2px;
    margin-bottom: 16px;
  }

  h1 {
    font-size: clamp(2rem, 5vw, 3.8rem);
    font-weight: 900;
    line-height: 1.05;
    letter-spacing: -.02em;
    background: linear-gradient(135deg, #fff 0%, var(--muted) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 12px;
  }

  .subtitle {
    font-family: 'Space Mono', monospace;
    font-size: .85rem;
    color: var(--muted);
    max-width: 600px;
  }

  /* ── STATS BAR ── */
  .stats-bar {
    display: flex;
    gap: 32px;
    padding: 20px 40px;
    border-bottom: 1px solid var(--border);
    flex-wrap: wrap;
  }
  .stat {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: 'Space Mono', monospace;
    font-size: .8rem;
    color: var(--muted);
  }
  .stat-dot {
    width: 8px; height: 8px;
    border-radius: 50%;
  }
  .stat-num {
    font-weight: 700;
    color: var(--text);
    font-size: 1rem;
  }

  /* ── SCORE PANEL ── */
  .score-panel {
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(10,10,15,.9);
    backdrop-filter: blur(12px);
    padding: 12px 40px;
    border-bottom: 1px solid var(--border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
  }
  .score-display {
    font-family: 'Space Mono', monospace;
    font-size: .85rem;
    color: var(--muted);
  }
  .score-display span { color: var(--accent-low); font-weight: 700; font-size: 1.1rem; }
  .btn-check {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: .85rem;
    letter-spacing: .05em;
    padding: 10px 28px;
    background: var(--accent-low);
    color: #000;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: transform .15s, box-shadow .15s;
  }
  .btn-check:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(59,255,160,.25); }
  .btn-reset {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: .85rem;
    padding: 10px 20px;
    background: transparent;
    color: var(--muted);
    border: 1px solid var(--border);
    border-radius: 3px;
    cursor: pointer;
    transition: border-color .15s, color .15s;
  }
  .btn-reset:hover { border-color: var(--muted); color: var(--text); }

  /* ── SECTION ── */
  .section {
    padding: 48px 40px 24px;
    max-width: 960px;
    margin: 0 auto;
  }
  .section-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 32px;
  }
  .section-tag {
    font-family: 'Space Mono', monospace;
    font-size: .65rem;
    letter-spacing: .2em;
    text-transform: uppercase;
    padding: 5px 12px;
    border-radius: 2px;
    font-weight: 700;
  }
  .tag-low { background: rgba(59,255,160,.12); color: var(--accent-low); border: 1px solid rgba(59,255,160,.3); }
  .tag-med { background: rgba(255,184,48,.12); color: var(--accent-med); border: 1px solid rgba(255,184,48,.3); }
  .tag-high { background: rgba(255,77,109,.12); color: var(--accent-high); border: 1px solid rgba(255,77,109,.3); }
  .tag-tf { background: rgba(123,140,255,.12); color: var(--accent-tf); border: 1px solid rgba(123,140,255,.3); }

  .section-title {
    font-size: 1.4rem;
    font-weight: 800;
    letter-spacing: -.01em;
  }

  /* ── QUESTION CARD ── */
  .q-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 28px 28px 20px;
    margin-bottom: 16px;
    position: relative;
    transition: border-color .2s;
  }
  .q-card:hover { border-color: #3a3a5a; }
  .q-card.correct { border-color: var(--correct); background: rgba(59,255,160,.04); }
  .q-card.incorrect { border-color: var(--incorrect); background: rgba(255,77,109,.04); }

  .q-num {
    font-family: 'Space Mono', monospace;
    font-size: .7rem;
    color: var(--muted);
    letter-spacing: .1em;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .q-num-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .q-text {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5;
    margin-bottom: 16px;
    color: var(--text);
  }

  pre, code {
    font-family: 'Space Mono', monospace;
    font-size: .78rem;
    background: var(--code-bg);
    border: 1px solid var(--border);
    border-radius: 4px;
    color: #a8d8a8;
    white-space: pre-wrap;
    word-break: break-word;
  }
  pre { padding: 14px 16px; margin: 12px 0 16px; line-height: 1.6; }
  code { padding: 2px 6px; }

  /* ── OPTIONS ── */
  .options { display: flex; flex-direction: column; gap: 8px; }

  .opt-label {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 10px 14px;
    border: 1px solid var(--border);
    border-radius: 4px;
    cursor: pointer;
    transition: background .15s, border-color .15s;
    font-size: .9rem;
    line-height: 1.45;
  }
  .opt-label:hover { background: rgba(255,255,255,.03); border-color: #3a3a5a; }
  .opt-label input { display: none; }
  .opt-key {
    font-family: 'Space Mono', monospace;
    font-size: .75rem;
    font-weight: 700;
    color: var(--muted);
    min-width: 18px;
    padding-top: 1px;
  }
  .opt-label.selected { border-color: #5a5a8a; background: rgba(123,140,255,.07); }
  .opt-label.selected .opt-key { color: var(--accent-tf); }
  .opt-label.reveal-correct { border-color: var(--correct) !important; background: rgba(59,255,160,.08) !important; }
  .opt-label.reveal-correct .opt-key { color: var(--correct); }
  .opt-label.reveal-wrong { border-color: var(--incorrect) !important; background: rgba(255,77,109,.06) !important; }
  .opt-label.reveal-wrong .opt-key { color: var(--incorrect); }

  /* TF buttons */
  .tf-group { display: flex; gap: 10px; }
  .tf-btn {
    flex: 1;
    padding: 11px 0;
    border: 1px solid var(--border);
    border-radius: 4px;
    background: transparent;
    color: var(--muted);
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: .9rem;
    cursor: pointer;
    transition: all .15s;
  }
  .tf-btn:hover { border-color: #3a3a5a; color: var(--text); }
  .tf-btn.selected { border-color: var(--accent-tf); color: var(--accent-tf); background: rgba(123,140,255,.07); }
  .tf-btn.reveal-correct { border-color: var(--correct) !important; color: var(--correct) !important; background: rgba(59,255,160,.08) !important; }
  .tf-btn.reveal-wrong { border-color: var(--incorrect) !important; color: var(--incorrect) !important; background: rgba(255,77,109,.06) !important; }

  /* answer reveal */
  .answer-line {
    margin-top: 14px;
    font-family: 'Space Mono', monospace;
    font-size: .75rem;
    color: var(--muted);
    display: none;
    gap: 8px;
    align-items: flex-start;
    line-height: 1.5;
  }
  .answer-line.show { display: flex; }
  .ans-label { color: var(--correct); font-weight: 700; flex-shrink: 0; }

  /* result badge */
  .result-badge {
    position: absolute;
    top: 16px; right: 16px;
    font-family: 'Space Mono', monospace;
    font-size: .65rem;
    font-weight: 700;
    padding: 3px 10px;
    border-radius: 2px;
    display: none;
  }
  .result-badge.show { display: block; }
  .result-badge.c { background: rgba(59,255,160,.15); color: var(--correct); }
  .result-badge.w { background: rgba(255,77,109,.15); color: var(--incorrect); }

  /* ── DIVIDER ── */
  hr { border: none; border-top: 1px solid var(--border); margin: 40px 0; }

  /* ── FOOTER ── */
  footer {
    text-align: center;
    padding: 40px;
    font-family: 'Space Mono', monospace;
    font-size: .7rem;
    color: var(--muted);
    border-top: 1px solid var(--border);
  }

  /* ── RESULT MODAL ── */
  #result-modal {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,.8);
    backdrop-filter: blur(8px);
    z-index: 1000;
    align-items: center;
    justify-content: center;
  }
  #result-modal.open { display: flex; }
  .modal-box {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 48px;
    text-align: center;
    max-width: 400px;
    width: 90%;
  }
  .modal-score {
    font-size: 4rem;
    font-weight: 900;
    background: linear-gradient(135deg, var(--accent-low), var(--accent-tf));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
    margin-bottom: 8px;
  }
  .modal-label {
    font-family: 'Space Mono', monospace;
    font-size: .8rem;
    color: var(--muted);
    margin-bottom: 24px;
  }
  .modal-msg { font-size: 1.1rem; font-weight: 700; margin-bottom: 28px; }
  .modal-close {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    padding: 12px 32px;
    background: var(--accent-low);
    color: #000;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    font-size: .9rem;
  }
</style>
</head>
<body>

<header>
  <div class="header-badge">CSS Mastery Series</div>
  <h1>CSS Priority &amp;<br>Cascade Quiz</h1>
  <p class="subtitle">// 100+ questions · Multiple Choice &amp; True/False · Browser styles → !important</p>
</header>

<div class="stats-bar">
  <div class="stat"><span class="stat-dot" style="background:var(--accent-low)"></span><span class="stat-num">60+</span> MCQ</div>
  <div class="stat"><span class="stat-dot" style="background:var(--accent-tf)"></span><span class="stat-num">40+</span> T/F</div>
  <div class="stat"><span class="stat-dot" style="background:var(--accent-high)"></span><span class="stat-num">3</span> Difficulty tiers</div>
  <div class="stat"><span class="stat-dot" style="background:var(--accent-med)"></span><span class="stat-num">100+</span> Total questions</div>
</div>

<div class="score-panel">
  <div class="score-display">Score: <span id="live-score">0</span> / <span id="total-qs">0</span> answered</div>
  <div style="display:flex;gap:10px;">
    <button class="btn-reset" onclick="resetAll()">Reset</button>
    <button class="btn-check" onclick="checkAll()">Check All Answers</button>
  </div>
</div>

<div id="result-modal">
  <div class="modal-box">
    <div class="modal-score" id="modal-pct">0%</div>
    <div class="modal-label" id="modal-fraction">0 / 0 correct</div>
    <div class="modal-msg" id="modal-msg">—</div>
    <button class="modal-close" onclick="document.getElementById('result-modal').classList.remove('open')">Close</button>
  </div>
</div>

<!-- ===================== SECTION 1: LOW PRIORITY MCQ ===================== -->
<div class="section">
  <div class="section-header">
    <span class="section-tag tag-low">Low Priority</span>
    <span class="section-title">Browser Default &amp; External CSS — MCQ</span>
  </div>

  <!-- Q1 -->
  <div class="q-card" data-correct="B">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-low)"></span>Q1 · MCQ</div>
    <div class="q-text">Which CSS source has the LOWEST priority in the browser cascade?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q1" value="A"><span class="opt-key">A</span>Author stylesheet</label>
      <label class="opt-label"><input type="radio" name="q1" value="B"><span class="opt-key">B</span>User-agent (browser default) stylesheet</label>
      <label class="opt-label"><input type="radio" name="q1" value="C"><span class="opt-key">C</span>User stylesheet</label>
      <label class="opt-label"><input type="radio" name="q1" value="D"><span class="opt-key">D</span>Inline styles</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: B</span> — User-agent styles are the browser defaults and have the lowest priority; author styles override them.</div>
  </div>

  <!-- Q2 -->
  <div class="q-card" data-correct="C">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-low)"></span>Q2 · MCQ</div>
    <div class="q-text">An external CSS file is linked using which HTML element?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q2" value="A"><span class="opt-key">A</span><code>&lt;script src="style.css"&gt;</code></label>
      <label class="opt-label"><input type="radio" name="q2" value="B"><span class="opt-key">B</span><code>&lt;style href="style.css"&gt;</code></label>
      <label class="opt-label"><input type="radio" name="q2" value="C"><span class="opt-key">C</span><code>&lt;link rel="stylesheet" href="style.css"&gt;</code></label>
      <label class="opt-label"><input type="radio" name="q2" value="D"><span class="opt-key">D</span><code>&lt;import src="style.css"&gt;</code></label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: C</span></div>
  </div>

  <!-- Q3 -->
  <div class="q-card" data-correct="A">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-low)"></span>Q3 · MCQ</div>
    <div class="q-text">What default margin does a browser typically apply to <code>&lt;body&gt;</code>?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q3" value="A"><span class="opt-key">A</span>8px on all sides</label>
      <label class="opt-label"><input type="radio" name="q3" value="B"><span class="opt-key">B</span>0px on all sides</label>
      <label class="opt-label"><input type="radio" name="q3" value="C"><span class="opt-key">C</span>16px on all sides</label>
      <label class="opt-label"><input type="radio" name="q3" value="D"><span class="opt-key">D</span>Depends entirely on the doctype</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: A</span> — Most browsers apply an 8px margin to &lt;body&gt; by default.</div>
  </div>

  <!-- Q4 -->
  <div class="q-card" data-correct="D">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-low)"></span>Q4 · MCQ</div>
    <div class="q-text">Two external stylesheets are linked in this order:<br><code>&lt;link href="a.css"&gt; &lt;link href="b.css"&gt;</code><br>Both define <code>p { color: red; }</code> and <code>p { color: blue; }</code> respectively with equal specificity. Which color wins?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q4" value="A"><span class="opt-key">A</span>Red — first declaration wins</label>
      <label class="opt-label"><input type="radio" name="q4" value="B"><span class="opt-key">B</span>Depends on the browser</label>
      <label class="opt-label"><input type="radio" name="q4" value="C"><span class="opt-key">C</span>Neither, they cancel out</label>
      <label class="opt-label"><input type="radio" name="q4" value="D"><span class="opt-key">D</span>Blue — last declaration wins (cascade order)</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: D</span> — When specificity is equal, the later rule in source order wins.</div>
  </div>

  <!-- Q5 -->
  <div class="q-card" data-correct="B">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-low)"></span>Q5 · MCQ</div>
    <div class="q-text">Which property resets an element to its browser default value?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q5" value="A"><span class="opt-key">A</span><code>default</code></label>
      <label class="opt-label"><input type="radio" name="q5" value="B"><span class="opt-key">B</span><code>initial</code></label>
      <label class="opt-label"><input type="radio" name="q5" value="C"><span class="opt-key">C</span><code>inherit</code></label>
      <label class="opt-label"><input type="radio" name="q5" value="D"><span class="opt-key">D</span><code>reset</code></label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: B</span> — <code>initial</code> resets a property to its CSS specification initial value.</div>
  </div>

  <!-- Q6 -->
  <div class="q-card" data-correct="C">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-low)"></span>Q6 · MCQ</div>
    <div class="q-text">The browser's built-in stylesheet is formally known as?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q6" value="A"><span class="opt-key">A</span>Default stylesheet</label>
      <label class="opt-label"><input type="radio" name="q6" value="B"><span class="opt-key">B</span>Author stylesheet</label>
      <label class="opt-label"><input type="radio" name="q6" value="C"><span class="opt-key">C</span>User-agent stylesheet</label>
      <label class="opt-label"><input type="radio" name="q6" value="D"><span class="opt-key">D</span>Inherited stylesheet</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: C</span></div>
  </div>

  <!-- Q7 -->
  <div class="q-card" data-correct="A">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-low)"></span>Q7 · MCQ</div>
    <div class="q-text">What does a CSS normalizer (like <code>normalize.css</code>) primarily do?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q7" value="A"><span class="opt-key">A</span>Makes browser default styles consistent across browsers</label>
      <label class="opt-label"><input type="radio" name="q7" value="B"><span class="opt-key">B</span>Removes ALL default styles</label>
      <label class="opt-label"><input type="radio" name="q7" value="C"><span class="opt-key">C</span>Adds !important to every rule</label>
      <label class="opt-label"><input type="radio" name="q7" value="D"><span class="opt-key">D</span>Converts inline styles to external files</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: A</span></div>
  </div>

  <!-- Q8 -->
  <div class="q-card" data-correct="D">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-low)"></span>Q8 · MCQ</div>
    <div class="q-text">Where must a <code>&lt;link&gt;</code> tag for an external stylesheet be placed?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q8" value="A"><span class="opt-key">A</span>At the end of <code>&lt;body&gt;</code></label>
      <label class="opt-label"><input type="radio" name="q8" value="B"><span class="opt-key">B</span>Inside a <code>&lt;div&gt;</code></label>
      <label class="opt-label"><input type="radio" name="q8" value="C"><span class="opt-key">C</span>After the closing <code>&lt;/html&gt;</code></label>
      <label class="opt-label"><input type="radio" name="q8" value="D"><span class="opt-key">D</span>Inside <code>&lt;head&gt;</code></label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: D</span></div>
  </div>

  <!-- Q9 -->
  <div class="q-card" data-correct="B">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-low)"></span>Q9 · MCQ</div>
    <div class="q-text">Which CSS keyword reverts a property to the user-agent or user stylesheet value?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q9" value="A"><span class="opt-key">A</span><code>initial</code></label>
      <label class="opt-label"><input type="radio" name="q9" value="B"><span class="opt-key">B</span><code>revert</code></label>
      <label class="opt-label"><input type="radio" name="q9" value="C"><span class="opt-key">C</span><code>unset</code></label>
      <label class="opt-label"><input type="radio" name="q9" value="D"><span class="opt-key">D</span><code>none</code></label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: B</span> — <code>revert</code> rolls back to the cascade's previous origin (user-agent or user styles).</div>
  </div>

  <!-- Q10 -->
  <div class="q-card" data-correct="C">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-low)"></span>Q10 · MCQ</div>
    <div class="q-text">Which rule correctly imports an external CSS file from within a CSS file?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q10" value="A"><span class="opt-key">A</span><code>link("theme.css");</code></label>
      <label class="opt-label"><input type="radio" name="q10" value="B"><span class="opt-key">B</span><code>include "theme.css";</code></label>
      <label class="opt-label"><input type="radio" name="q10" value="C"><span class="opt-key">C</span><code>@import url("theme.css");</code></label>
      <label class="opt-label"><input type="radio" name="q10" value="D"><span class="opt-key">D</span><code>@use "theme.css";</code></label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: C</span></div>
  </div>

  <!-- Q11 -->
  <div class="q-card" data-correct="A">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-low)"></span>Q11 · MCQ</div>
    <div class="q-text">What is the default <code>display</code> value of a <code>&lt;div&gt;</code> set by the user-agent stylesheet?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q11" value="A"><span class="opt-key">A</span><code>block</code></label>
      <label class="opt-label"><input type="radio" name="q11" value="B"><span class="opt-key">B</span><code>inline</code></label>
      <label class="opt-label"><input type="radio" name="q11" value="C"><span class="opt-key">C</span><code>flex</code></label>
      <label class="opt-label"><input type="radio" name="q11" value="D"><span class="opt-key">D</span><code>inline-block</code></label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: A</span></div>
  </div>

  <!-- Q12 -->
  <div class="q-card" data-correct="D">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-low)"></span>Q12 · MCQ</div>
    <div class="q-text">Which of these represents the correct priority order from LOWEST to HIGHEST?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q12" value="A"><span class="opt-key">A</span>Inline → Internal → External → Browser default</label>
      <label class="opt-label"><input type="radio" name="q12" value="B"><span class="opt-key">B</span>Internal → External → Browser default → Inline</label>
      <label class="opt-label"><input type="radio" name="q12" value="C"><span class="opt-key">C</span>Browser default → Inline → Internal → External</label>
      <label class="opt-label"><input type="radio" name="q12" value="D"><span class="opt-key">D</span>Browser default → External → Internal → Inline</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: D</span> — General order (ignoring specificity differences): user-agent → external → internal → inline.</div>
  </div>

  <!-- Q13 -->
  <div class="q-card" data-correct="B">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-low)"></span>Q13 · MCQ</div>
    <div class="q-text">A CSS "reset" stylesheet (like Eric Meyer's reset) sets all margins and padding to?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q13" value="A"><span class="opt-key">A</span>8px</label>
      <label class="opt-label"><input type="radio" name="q13" value="B"><span class="opt-key">B</span>0</label>
      <label class="opt-label"><input type="radio" name="q13" value="C"><span class="opt-key">C</span>auto</label>
      <label class="opt-label"><input type="radio" name="q13" value="D"><span class="opt-key">D</span>initial</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: B</span></div>
  </div>

  <!-- Q14 -->
  <div class="q-card" data-correct="C">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-low)"></span>Q14 · MCQ</div>
    <div class="q-text">Which CSS property value keyword means "use the computed value of the parent element"?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q14" value="A"><span class="opt-key">A</span><code>initial</code></label>
      <label class="opt-label"><input type="radio" name="q14" value="B"><span class="opt-key">B</span><code>revert</code></label>
      <label class="opt-label"><input type="radio" name="q14" value="C"><span class="opt-key">C</span><code>inherit</code></label>
      <label class="opt-label"><input type="radio" name="q14" value="D"><span class="opt-key">D</span><code>unset</code></label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: C</span></div>
  </div>

  <!-- Q15 -->
  <div class="q-card" data-correct="A">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-low)"></span>Q15 · MCQ</div>
    <div class="q-text">An external stylesheet linked later in the <code>&lt;head&gt;</code> than another external stylesheet of identical specificity will:</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q15" value="A"><span class="opt-key">A</span>Override the earlier one</label>
      <label class="opt-label"><input type="radio" name="q15" value="B"><span class="opt-key">B</span>Be ignored by the browser</label>
      <label class="opt-label"><input type="radio" name="q15" value="C"><span class="opt-key">C</span>Always lose to the first one</label>
      <label class="opt-label"><input type="radio" name="q15" value="D"><span class="opt-key">D</span>Merge with the first one</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: A</span> — Source order: later rules override earlier ones at the same specificity.</div>
  </div>
</div>

<!-- ===================== SECTION 2: MEDIUM PRIORITY MCQ ===================== -->
<div class="section">
  <div class="section-header">
    <span class="section-tag tag-med">Medium Priority</span>
    <span class="section-title">Internal CSS, Specificity &amp; Cascade — MCQ</span>
  </div>

  <!-- Q16 -->
  <div class="q-card" data-correct="B">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-med)"></span>Q16 · MCQ</div>
    <div class="q-text">Where is an internal stylesheet written?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q16" value="A"><span class="opt-key">A</span>Inside the <code>style</code> attribute of HTML elements</label>
      <label class="opt-label"><input type="radio" name="q16" value="B"><span class="opt-key">B</span>Inside <code>&lt;style&gt;</code> tags in the <code>&lt;head&gt;</code></label>
      <label class="opt-label"><input type="radio" name="q16" value="C"><span class="opt-key">C</span>In a separate <code>.css</code> file</label>
      <label class="opt-label"><input type="radio" name="q16" value="D"><span class="opt-key">D</span>In the <code>&lt;meta&gt;</code> tag</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: B</span></div>
  </div>

  <!-- Q17 -->
  <div class="q-card" data-correct="C">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-med)"></span>Q17 · MCQ</div>
    <div class="q-text">What is the specificity value of this selector: <code>#nav .item a</code>?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q17" value="A"><span class="opt-key">A</span>(0,1,1,0)</label>
      <label class="opt-label"><input type="radio" name="q17" value="B"><span class="opt-key">B</span>(0,0,2,1)</label>
      <label class="opt-label"><input type="radio" name="q17" value="C"><span class="opt-key">C</span>(0,1,1,1)</label>
      <label class="opt-label"><input type="radio" name="q17" value="D"><span class="opt-key">D</span>(1,1,1,0)</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: C</span> — 1 ID (#nav) = (0,1,0,0); 1 class (.item) = (0,0,1,0); 1 element (a) = (0,0,0,1) → total (0,1,1,1).</div>
  </div>

  <!-- Q18 -->
  <div class="q-card" data-correct="A">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-med)"></span>Q18 · MCQ</div>
    <div class="q-text">
<pre>/* style.css */
p { color: green; }

/* &lt;style&gt; tag in &lt;head&gt; */
p { color: blue; }</pre>
With identical selectors and equal specificity, which color applies to <code>&lt;p&gt;</code>?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q18" value="A"><span class="opt-key">A</span>Blue — internal stylesheet appears after external in source order</label>
      <label class="opt-label"><input type="radio" name="q18" value="B"><span class="opt-key">B</span>Green — external always wins</label>
      <label class="opt-label"><input type="radio" name="q18" value="C"><span class="opt-key">C</span>Both — the browser averages the colors</label>
      <label class="opt-label"><input type="radio" name="q18" value="D"><span class="opt-key">D</span>Depends on browser implementation</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: A</span> — The <code>&lt;style&gt;</code> block comes after the <code>&lt;link&gt;</code>, so it wins by source order.</div>
  </div>

  <!-- Q19 -->
  <div class="q-card" data-correct="D">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-med)"></span>Q19 · MCQ</div>
    <div class="q-text">Specificity is represented as a tuple. What does the notation <code>(a,b,c,d)</code> represent?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q19" value="A"><span class="opt-key">A</span>a=inline; b=!important; c=IDs; d=classes</label>
      <label class="opt-label"><input type="radio" name="q19" value="B"><span class="opt-key">B</span>a=!important; b=IDs; c=elements; d=classes</label>
      <label class="opt-label"><input type="radio" name="q19" value="C"><span class="opt-key">C</span>a=classes; b=IDs; c=elements; d=pseudo</label>
      <label class="opt-label"><input type="radio" name="q19" value="D"><span class="opt-key">D</span>a=inline style; b=IDs; c=classes/attributes/pseudoclasses; d=elements/pseudoelements</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: D</span></div>
  </div>

  <!-- Q20 -->
  <div class="q-card" data-correct="B">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-med)"></span>Q20 · MCQ</div>
    <div class="q-text">What is the specificity of <code>div p.highlight</code>?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q20" value="A"><span class="opt-key">A</span>(0,0,1,1)</label>
      <label class="opt-label"><input type="radio" name="q20" value="B"><span class="opt-key">B</span>(0,0,1,2)</label>
      <label class="opt-label"><input type="radio" name="q20" value="C"><span class="opt-key">C</span>(0,1,1,0)</label>
      <label class="opt-label"><input type="radio" name="q20" value="D"><span class="opt-key">D</span>(0,0,2,1)</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: B</span> — 0 inline; 0 IDs; 1 class (.highlight); 2 elements (div, p) → (0,0,1,2).</div>
  </div>

  <!-- Q21 -->
  <div class="q-card" data-correct="C">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-med)"></span>Q21 · MCQ</div>
    <div class="q-text">What is the specificity of the universal selector <code>*</code>?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q21" value="A"><span class="opt-key">A</span>(0,0,0,1)</label>
      <label class="opt-label"><input type="radio" name="q21" value="B"><span class="opt-key">B</span>(0,1,0,0)</label>
      <label class="opt-label"><input type="radio" name="q21" value="C"><span class="opt-key">C</span>(0,0,0,0)</label>
      <label class="opt-label"><input type="radio" name="q21" value="D"><span class="opt-key">D</span>(1,0,0,0)</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: C</span> — The universal selector has zero specificity.</div>
  </div>

  <!-- Q22 -->
  <div class="q-card" data-correct="A">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-med)"></span>Q22 · MCQ</div>
    <div class="q-text">
<pre>h1 { color: red; }
.title { color: blue; }</pre>
Applied to <code>&lt;h1 class="title"&gt;</code>, what color wins?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q22" value="A"><span class="opt-key">A</span>Blue — class selector has higher specificity than element selector</label>
      <label class="opt-label"><input type="radio" name="q22" value="B"><span class="opt-key">B</span>Red — element selector has higher specificity</label>
      <label class="opt-label"><input type="radio" name="q22" value="C"><span class="opt-key">C</span>Red — it appears first</label>
      <label class="opt-label"><input type="radio" name="q22" value="D"><span class="opt-key">D</span>Neither, they conflict and are ignored</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: A</span> — Class (0,0,1,0) beats element (0,0,0,1).</div>
  </div>

  <!-- Q23 -->
  <div class="q-card" data-correct="D">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-med)"></span>Q23 · MCQ</div>
    <div class="q-text">The <code>:hover</code> pseudo-class contributes how much specificity?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q23" value="A"><span class="opt-key">A</span>Same as an ID: (0,1,0,0)</label>
      <label class="opt-label"><input type="radio" name="q23" value="B"><span class="opt-key">B</span>Same as an element: (0,0,0,1)</label>
      <label class="opt-label"><input type="radio" name="q23" value="C"><span class="opt-key">C</span>Zero: (0,0,0,0)</label>
      <label class="opt-label"><input type="radio" name="q23" value="D"><span class="opt-key">D</span>Same as a class: (0,0,1,0)</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: D</span> — Pseudo-classes count as class-level specificity.</div>
  </div>

  <!-- Q24 -->
  <div class="q-card" data-correct="B">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-med)"></span>Q24 · MCQ</div>
    <div class="q-text">Which selector has the HIGHEST specificity?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q24" value="A"><span class="opt-key">A</span><code>div div div div div</code></label>
      <label class="opt-label"><input type="radio" name="q24" value="B"><span class="opt-key">B</span><code>#header</code></label>
      <label class="opt-label"><input type="radio" name="q24" value="C"><span class="opt-key">C</span><code>.a.b.c.d.e.f.g.h.i.j.k</code></label>
      <label class="opt-label"><input type="radio" name="q24" value="D"><span class="opt-key">D</span><code>div.container p.text span</code></label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: B</span> — One ID (0,1,0,0) beats any number of classes or elements.</div>
  </div>

  <!-- Q25 -->
  <div class="q-card" data-correct="C">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-med)"></span>Q25 · MCQ</div>
    <div class="q-text">What does the keyword <code>unset</code> do?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q25" value="A"><span class="opt-key">A</span>Always resets to browser default</label>
      <label class="opt-label"><input type="radio" name="q25" value="B"><span class="opt-key">B</span>Removes the property entirely from the DOM</label>
      <label class="opt-label"><input type="radio" name="q25" value="C"><span class="opt-key">C</span>Inherits if the property is inheritable, otherwise acts as <code>initial</code></label>
      <label class="opt-label"><input type="radio" name="q25" value="D"><span class="opt-key">D</span>Same as <code>none</code></label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: C</span></div>
  </div>

  <!-- Q26 -->
  <div class="q-card" data-correct="A">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-med)"></span>Q26 · MCQ</div>
    <div class="q-text">The <code>::before</code> pseudo-element contributes how much specificity?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q26" value="A"><span class="opt-key">A</span>(0,0,0,1) — same as an element selector</label>
      <label class="opt-label"><input type="radio" name="q26" value="B"><span class="opt-key">B</span>(0,0,1,0) — same as a class</label>
      <label class="opt-label"><input type="radio" name="q26" value="C"><span class="opt-key">C</span>(0,1,0,0) — same as an ID</label>
      <label class="opt-label"><input type="radio" name="q26" value="D"><span class="opt-key">D</span>(0,0,0,0) — zero specificity</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: A</span> — Pseudo-elements count as element-level specificity.</div>
  </div>

  <!-- Q27 -->
  <div class="q-card" data-correct="D">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-med)"></span>Q27 · MCQ</div>
    <div class="q-text">
<pre>#box { background: red; }
div#box { background: blue; }</pre>
Applied to <code>&lt;div id="box"&gt;</code>, what background color wins?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q27" value="A"><span class="opt-key">A</span>Red — shorter selector wins</label>
      <label class="opt-label"><input type="radio" name="q27" value="B"><span class="opt-key">B</span>Red — #box is the same as div#box</label>
      <label class="opt-label"><input type="radio" name="q27" value="C"><span class="opt-key">C</span>Neither, they're exactly equal</label>
      <label class="opt-label"><input type="radio" name="q27" value="D"><span class="opt-key">D</span>Blue — div#box has (0,1,0,1) vs #box (0,1,0,0)</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: D</span> — Adding the element selector increases specificity.</div>
  </div>

  <!-- Q28 -->
  <div class="q-card" data-correct="B">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-med)"></span>Q28 · MCQ</div>
    <div class="q-text">Attribute selectors like <code>[type="text"]</code> have the same specificity as?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q28" value="A"><span class="opt-key">A</span>Element selectors</label>
      <label class="opt-label"><input type="radio" name="q28" value="B"><span class="opt-key">B</span>Class selectors</label>
      <label class="opt-label"><input type="radio" name="q28" value="C"><span class="opt-key">C</span>ID selectors</label>
      <label class="opt-label"><input type="radio" name="q28" value="D"><span class="opt-key">D</span>Inline styles</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: B</span> — Attribute selectors = class level (0,0,1,0).</div>
  </div>

  <!-- Q29 -->
  <div class="q-card" data-correct="C">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-med)"></span>Q29 · MCQ</div>
    <div class="q-text">Inheritance in CSS means:</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q29" value="A"><span class="opt-key">A</span>Child elements override parent styles automatically</label>
      <label class="opt-label"><input type="radio" name="q29" value="B"><span class="opt-key">B</span>Every CSS property is passed from parent to child</label>
      <label class="opt-label"><input type="radio" name="q29" value="C"><span class="opt-key">C</span>Some CSS properties (like <code>color</code>, <code>font-family</code>) pass from parent to child by default</label>
      <label class="opt-label"><input type="radio" name="q29" value="D"><span class="opt-key">D</span>Only inline styles are inherited</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: C</span></div>
  </div>

  <!-- Q30 -->
  <div class="q-card" data-correct="A">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-med)"></span>Q30 · MCQ</div>
    <div class="q-text">Which property is NOT inherited by default?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q30" value="A"><span class="opt-key">A</span><code>border</code></label>
      <label class="opt-label"><input type="radio" name="q30" value="B"><span class="opt-key">B</span><code>color</code></label>
      <label class="opt-label"><input type="radio" name="q30" value="C"><span class="opt-key">C</span><code>font-size</code></label>
      <label class="opt-label"><input type="radio" name="q30" value="D"><span class="opt-key">D</span><code>font-family</code></label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: A</span> — <code>border</code> is not inherited; text-related properties usually are.</div>
  </div>

  <!-- Q31 -->
  <div class="q-card" data-correct="D">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-med)"></span>Q31 · MCQ</div>
    <div class="q-text">
<pre>body { font-size: 16px; }
div { font-size: 1.5em; }
span { font-size: 1em; }</pre>
With <code>&lt;div&gt;&lt;span&gt;text&lt;/span&gt;&lt;/div&gt;</code>, what is the <code>span</code>'s font-size?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q31" value="A"><span class="opt-key">A</span>16px</label>
      <label class="opt-label"><input type="radio" name="q31" value="B"><span class="opt-key">B</span>32px</label>
      <label class="opt-label"><input type="radio" name="q31" value="C"><span class="opt-key">C</span>16px (em resolves against body)</label>
      <label class="opt-label"><input type="radio" name="q31" value="D"><span class="opt-key">D</span>24px (1em inherits div's computed 24px)</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: D</span> — div = 16×1.5 = 24px; span's 1em resolves to parent (div's computed 24px) = 24px.</div>
  </div>

  <!-- Q32 -->
  <div class="q-card" data-correct="C">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-med)"></span>Q32 · MCQ</div>
    <div class="q-text">How many IDs does the selector <code>.nav > li:first-child a</code> contain?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q32" value="A"><span class="opt-key">A</span>1</label>
      <label class="opt-label"><input type="radio" name="q32" value="B"><span class="opt-key">B</span>2</label>
      <label class="opt-label"><input type="radio" name="q32" value="C"><span class="opt-key">C</span>0</label>
      <label class="opt-label"><input type="radio" name="q32" value="D"><span class="opt-key">D</span>3</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: C</span> — No IDs in this selector. Specificity: (0,0,2,2).</div>
  </div>

  <!-- Q33 -->
  <div class="q-card" data-correct="B">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-med)"></span>Q33 · MCQ</div>
    <div class="q-text">Which three sources does the CSS cascade consider, in order from lowest to highest authority?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q33" value="A"><span class="opt-key">A</span>User → User-agent → Author</label>
      <label class="opt-label"><input type="radio" name="q33" value="B"><span class="opt-key">B</span>User-agent → User → Author</label>
      <label class="opt-label"><input type="radio" name="q33" value="C"><span class="opt-key">C</span>Author → User → User-agent</label>
      <label class="opt-label"><input type="radio" name="q33" value="D"><span class="opt-key">D</span>User-agent → Author → User</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: B</span></div>
  </div>

  <!-- Q34 -->
  <div class="q-card" data-correct="A">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-med)"></span>Q34 · MCQ</div>
    <div class="q-text">The combinator <code>></code> in CSS targets:</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q34" value="A"><span class="opt-key">A</span>Direct children only</label>
      <label class="opt-label"><input type="radio" name="q34" value="B"><span class="opt-key">B</span>All descendants</label>
      <label class="opt-label"><input type="radio" name="q34" value="C"><span class="opt-key">C</span>Adjacent siblings</label>
      <label class="opt-label"><input type="radio" name="q34" value="D"><span class="opt-key">D</span>General siblings</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: A</span></div>
  </div>

  <!-- Q35 -->
  <div class="q-card" data-correct="D">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-med)"></span>Q35 · MCQ</div>
    <div class="q-text">Which of these selectors has the LOWEST specificity?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q35" value="A"><span class="opt-key">A</span><code>.container</code></label>
      <label class="opt-label"><input type="radio" name="q35" value="B"><span class="opt-key">B</span><code>[href]</code></label>
      <label class="opt-label"><input type="radio" name="q35" value="C"><span class="opt-key">C</span><code>:focus</code></label>
      <label class="opt-label"><input type="radio" name="q35" value="D"><span class="opt-key">D</span><code>p</code></label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: D</span> — <code>p</code> is an element (0,0,0,1); classes/attributes/pseudo-classes are all (0,0,1,0).</div>
  </div>
</div>

<!-- ===================== SECTION 3: HIGH PRIORITY MCQ ===================== -->
<div class="section">
  <div class="section-header">
    <span class="section-tag tag-high">High Priority</span>
    <span class="section-title">Inline Styles, !important &amp; Advanced Cascade — MCQ</span>
  </div>

  <!-- Q36 -->
  <div class="q-card" data-correct="C">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-high)"></span>Q36 · MCQ</div>
    <div class="q-text">What is the specificity value of an inline style?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q36" value="A"><span class="opt-key">A</span>(0,1,0,0)</label>
      <label class="opt-label"><input type="radio" name="q36" value="B"><span class="opt-key">B</span>(0,0,1,0)</label>
      <label class="opt-label"><input type="radio" name="q36" value="C"><span class="opt-key">C</span>(1,0,0,0)</label>
      <label class="opt-label"><input type="radio" name="q36" value="D"><span class="opt-key">D</span>(0,0,0,1)</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: C</span> — Inline styles get a specificity of (1,0,0,0).</div>
  </div>

  <!-- Q37 -->
  <div class="q-card" data-correct="B">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-high)"></span>Q37 · MCQ</div>
    <div class="q-text">
<pre>&lt;p id="x" style="color:red;"&gt;Text&lt;/p&gt;
/* CSS */
#x { color: blue !important; }</pre>
What color is the paragraph?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q37" value="A"><span class="opt-key">A</span>Red — inline always beats !important</label>
      <label class="opt-label"><input type="radio" name="q37" value="B"><span class="opt-key">B</span>Blue — !important overrides inline styles</label>
      <label class="opt-label"><input type="radio" name="q37" value="C"><span class="opt-key">C</span>Depends on browser</label>
      <label class="opt-label"><input type="radio" name="q37" value="D"><span class="opt-key">D</span>Neither — they cancel each other</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: B</span> — <code>!important</code> overrides even inline styles.</div>
  </div>

  <!-- Q38 -->
  <div class="q-card" data-correct="D">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-high)"></span>Q38 · MCQ</div>
    <div class="q-text">Two rules both use <code>!important</code> on the same property. Which one wins?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q38" value="A"><span class="opt-key">A</span>The one with fewer characters</label>
      <label class="opt-label"><input type="radio" name="q38" value="B"><span class="opt-key">B</span>The first one declared always wins</label>
      <label class="opt-label"><input type="radio" name="q38" value="C"><span class="opt-key">C</span>They both apply simultaneously</label>
      <label class="opt-label"><input type="radio" name="q38" value="D"><span class="opt-key">D</span>The one with higher specificity; if equal, source order decides</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: D</span></div>
  </div>

  <!-- Q39 -->
  <div class="q-card" data-correct="A">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-high)"></span>Q39 · MCQ</div>
    <div class="q-text">
<pre>&lt;div style="color:green"&gt;Hello&lt;/div&gt;
/* CSS */
div { color: red !important; }
</pre>What color is shown?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q39" value="A"><span class="opt-key">A</span>Red</label>
      <label class="opt-label"><input type="radio" name="q39" value="B"><span class="opt-key">B</span>Green</label>
      <label class="opt-label"><input type="radio" name="q39" value="C"><span class="opt-key">C</span>Black (default)</label>
      <label class="opt-label"><input type="radio" name="q39" value="D"><span class="opt-key">D</span>Depends on browser</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: A</span> — <code>!important</code> overrides inline styles.</div>
  </div>

  <!-- Q40 -->
  <div class="q-card" data-correct="C">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-high)"></span>Q40 · MCQ</div>
    <div class="q-text">Where is <code>!important</code> placed in a CSS declaration?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q40" value="A"><span class="opt-key">A</span>Before the property name: <code>!important color: red;</code></label>
      <label class="opt-label"><input type="radio" name="q40" value="B"><span class="opt-key">B</span>After the property name: <code>color !important: red;</code></label>
      <label class="opt-label"><input type="radio" name="q40" value="C"><span class="opt-key">C</span>After the value, before the semicolon: <code>color: red !important;</code></label>
      <label class="opt-label"><input type="radio" name="q40" value="D"><span class="opt-key">D</span>After the semicolon: <code>color: red; !important</code></label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: C</span></div>
  </div>

  <!-- Q41 -->
  <div class="q-card" data-correct="B">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-high)"></span>Q41 · MCQ</div>
    <div class="q-text">Using <code>!important</code> is generally considered:</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q41" value="A"><span class="opt-key">A</span>A best practice for all overrides</label>
      <label class="opt-label"><input type="radio" name="q41" value="B"><span class="opt-key">B</span>A last resort; overuse makes debugging difficult</label>
      <label class="opt-label"><input type="radio" name="q41" value="C"><span class="opt-key">C</span>Mandatory in production CSS</label>
      <label class="opt-label"><input type="radio" name="q41" value="D"><span class="opt-key">D</span>Invalid in modern CSS</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: B</span></div>
  </div>

  <!-- Q42 -->
  <div class="q-card" data-correct="D">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-high)"></span>Q42 · MCQ</div>
    <div class="q-text">Can <code>!important</code> be applied to an inline style attribute?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q42" value="A"><span class="opt-key">A</span>No, it's only for external files</label>
      <label class="opt-label"><input type="radio" name="q42" value="B"><span class="opt-key">B</span>No, it's only for &lt;style&gt; tags</label>
      <label class="opt-label"><input type="radio" name="q42" value="C"><span class="opt-key">C</span>No, it's invalid in any context</label>
      <label class="opt-label"><input type="radio" name="q42" value="D"><span class="opt-key">D</span>Yes: <code>style="color:red !important;"</code> is valid</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: D</span> — <code>!important</code> can be used inside the <code>style</code> attribute.</div>
  </div>

  <!-- Q43 -->
  <div class="q-card" data-correct="A">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-high)"></span>Q43 · MCQ</div>
    <div class="q-text">
<pre>p { color: red !important; }
p { color: blue !important; }</pre>
What color applies?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q43" value="A"><span class="opt-key">A</span>Blue — later source order wins when !important specificity is equal</label>
      <label class="opt-label"><input type="radio" name="q43" value="B"><span class="opt-key">B</span>Red — first !important always wins</label>
      <label class="opt-label"><input type="radio" name="q43" value="C"><span class="opt-key">C</span>Neither — duplicate !important cancels both</label>
      <label class="opt-label"><input type="radio" name="q43" value="D"><span class="opt-key">D</span>Browser default color</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: A</span></div>
  </div>

  <!-- Q44 -->
  <div class="q-card" data-correct="C">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-high)"></span>Q44 · MCQ</div>
    <div class="q-text">JavaScript's <code>element.style.color = "red"</code> is equivalent in priority to:</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q44" value="A"><span class="opt-key">A</span>An ID selector rule</label>
      <label class="opt-label"><input type="radio" name="q44" value="B"><span class="opt-key">B</span>A class selector rule</label>
      <label class="opt-label"><input type="radio" name="q44" value="C"><span class="opt-key">C</span>An inline style attribute</label>
      <label class="opt-label"><input type="radio" name="q44" value="D"><span class="opt-key">D</span>A rule with !important</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: C</span> — JS inline style changes set the element's <code>style</code> attribute, same as inline.</div>
  </div>

  <!-- Q45 -->
  <div class="q-card" data-correct="B">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-high)"></span>Q45 · MCQ</div>
    <div class="q-text">To override a rule with <code>!important</code> in an author stylesheet, a user stylesheet must:</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q45" value="A"><span class="opt-key">A</span>Use a higher specificity selector only</label>
      <label class="opt-label"><input type="radio" name="q45" value="B"><span class="opt-key">B</span>Also use <code>!important</code> — user !important beats author !important</label>
      <label class="opt-label"><input type="radio" name="q45" value="C"><span class="opt-key">C</span>Use inline styles</label>
      <label class="opt-label"><input type="radio" name="q45" value="D"><span class="opt-key">D</span>This is impossible</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: B</span> — In the full cascade, user !important overrides author !important.</div>
  </div>

  <!-- Q46 -->
  <div class="q-card" data-correct="D">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-high)"></span>Q46 · MCQ</div>
    <div class="q-text">
<pre>#main { color: black !important; }
#main.active { color: green !important; }</pre>
For <code>&lt;div id="main" class="active"&gt;</code>, what color applies?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q46" value="A"><span class="opt-key">A</span>Black</label>
      <label class="opt-label"><input type="radio" name="q46" value="B"><span class="opt-key">B</span>Neither</label>
      <label class="opt-label"><input type="radio" name="q46" value="C"><span class="opt-key">C</span>The browser default</label>
      <label class="opt-label"><input type="radio" name="q46" value="D"><span class="opt-key">D</span>Green — #main.active has higher specificity (0,1,1,0) vs (0,1,0,0)</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: D</span></div>
  </div>

  <!-- Q47 -->
  <div class="q-card" data-correct="A">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-high)"></span>Q47 · MCQ</div>
    <div class="q-text">The full priority order (lowest → highest) including !important is:</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q47" value="A"><span class="opt-key">A</span>UA normal → User normal → Author normal → Author !important → User !important → UA !important</label>
      <label class="opt-label"><input type="radio" name="q47" value="B"><span class="opt-key">B</span>Author normal → User normal → UA normal → UA !important → User !important → Author !important</label>
      <label class="opt-label"><input type="radio" name="q47" value="C"><span class="opt-key">C</span>Inline → External → Internal → !important</label>
      <label class="opt-label"><input type="radio" name="q47" value="D"><span class="opt-key">D</span>All !important rules are equal</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: A</span> — This is the formal CSS cascade order per the specification.</div>
  </div>

  <!-- Q48 -->
  <div class="q-card" data-correct="C">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-high)"></span>Q48 · MCQ</div>
    <div class="q-text">Which statement about inline styles is TRUE?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q48" value="A"><span class="opt-key">A</span>Inline styles are overridden by class selectors</label>
      <label class="opt-label"><input type="radio" name="q48" value="B"><span class="opt-key">B</span>Inline styles apply only to child elements</label>
      <label class="opt-label"><input type="radio" name="q48" value="C"><span class="opt-key">C</span>Inline styles have higher specificity than any selector-based rule except !important</label>
      <label class="opt-label"><input type="radio" name="q48" value="D"><span class="opt-key">D</span>Inline styles cannot use shorthand properties</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: C</span></div>
  </div>

  <!-- Q49 -->
  <div class="q-card" data-correct="B">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-high)"></span>Q49 · MCQ</div>
    <div class="q-text">
<pre>/* External */
.btn { background: gray; }

/* Inline */
&lt;button class="btn" style="background: orange;"&gt;Click&lt;/button&gt;</pre>
What background color applies?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q49" value="A"><span class="opt-key">A</span>Gray</label>
      <label class="opt-label"><input type="radio" name="q49" value="B"><span class="opt-key">B</span>Orange</label>
      <label class="opt-label"><input type="radio" name="q49" value="C"><span class="opt-key">C</span>Transparent</label>
      <label class="opt-label"><input type="radio" name="q49" value="D"><span class="opt-key">D</span>Depends on source order</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: B</span> — Inline styles (1,0,0,0) beat class selectors (0,0,1,0).</div>
  </div>

  <!-- Q50 -->
  <div class="q-card" data-correct="D">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-high)"></span>Q50 · MCQ</div>
    <div class="q-text">
<pre>* { color: pink !important; }
#logo { color: black; }</pre>
What color does <code>#logo</code> get?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q50" value="A"><span class="opt-key">A</span>Black — ID beats universal</label>
      <label class="opt-label"><input type="radio" name="q50" value="B"><span class="opt-key">B</span>Black — element rules always win</label>
      <label class="opt-label"><input type="radio" name="q50" value="C"><span class="opt-key">C</span>Neither</label>
      <label class="opt-label"><input type="radio" name="q50" value="D"><span class="opt-key">D</span>Pink — !important on * overrides even the ID rule</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: D</span> — !important elevates the rule above the normal specificity calculation.</div>
  </div>

  <!-- Q51–Q60: Mixed MCQ -->
  <!-- Q51 -->
  <div class="q-card" data-correct="C">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-high)"></span>Q51 · MCQ</div>
    <div class="q-text">CSS layers (<code>@layer</code>) introduced in CSS Cascade 5 allow you to:</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q51" value="A"><span class="opt-key">A</span>Replace !important entirely</label>
      <label class="opt-label"><input type="radio" name="q51" value="B"><span class="opt-key">B</span>Apply 3D z-index to CSS rules</label>
      <label class="opt-label"><input type="radio" name="q51" value="C"><span class="opt-key">C</span>Control the order in which groups of styles are applied, below specificity</label>
      <label class="opt-label"><input type="radio" name="q51" value="D"><span class="opt-key">D</span>Load CSS files asynchronously</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: C</span></div>
  </div>

  <!-- Q52 -->
  <div class="q-card" data-correct="A">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-high)"></span>Q52 · MCQ</div>
    <div class="q-text">Which DevTools panel shows which CSS rules are overridden (shown with strikethrough)?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q52" value="A"><span class="opt-key">A</span>Elements → Styles</label>
      <label class="opt-label"><input type="radio" name="q52" value="B"><span class="opt-key">B</span>Network → CSS</label>
      <label class="opt-label"><input type="radio" name="q52" value="C"><span class="opt-key">C</span>Performance → Layers</label>
      <label class="opt-label"><input type="radio" name="q52" value="D"><span class="opt-key">D</span>Console → Rules</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: A</span></div>
  </div>

  <!-- Q53 -->
  <div class="q-card" data-correct="B">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-high)"></span>Q53 · MCQ</div>
    <div class="q-text">
<pre>a:visited { color: purple; }
a:hover { color: red; }</pre>
A visited link is hovered. What color appears?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q53" value="A"><span class="opt-key">A</span>Purple — :visited comes first</label>
      <label class="opt-label"><input type="radio" name="q53" value="B"><span class="opt-key">B</span>Red — :hover comes later in source order (same specificity)</label>
      <label class="opt-label"><input type="radio" name="q53" value="C"><span class="opt-key">C</span>Both colors mix</label>
      <label class="opt-label"><input type="radio" name="q53" value="D"><span class="opt-key">D</span>Browser default blue</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: B</span> — Both have equal specificity; source order decides (LVHA order matters).</div>
  </div>

  <!-- Q54 -->
  <div class="q-card" data-correct="D">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-high)"></span>Q54 · MCQ</div>
    <div class="q-text">The recommended order for link pseudo-classes is:</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q54" value="A"><span class="opt-key">A</span>HVAL (Hover, Visited, Active, Link)</label>
      <label class="opt-label"><input type="radio" name="q54" value="B"><span class="opt-key">B</span>LAVH</label>
      <label class="opt-label"><input type="radio" name="q54" value="C"><span class="opt-key">C</span>VAHL</label>
      <label class="opt-label"><input type="radio" name="q54" value="D"><span class="opt-key">D</span>LVHA (Link, Visited, Hover, Active)</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: D</span> — "LoVe HAte" mnemonic: Link → Visited → Hover → Active.</div>
  </div>

  <!-- Q55 -->
  <div class="q-card" data-correct="C">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-high)"></span>Q55 · MCQ</div>
    <div class="q-text">CSS Custom Properties (variables) like <code>--color: red</code> follow which priority rule?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q55" value="A"><span class="opt-key">A</span>They always override !important</label>
      <label class="opt-label"><input type="radio" name="q55" value="B"><span class="opt-key">B</span>They are resolved before specificity is considered</label>
      <label class="opt-label"><input type="radio" name="q55" value="C"><span class="opt-key">C</span>They follow the same cascade and specificity rules as regular properties</label>
      <label class="opt-label"><input type="radio" name="q55" value="D"><span class="opt-key">D</span>They bypass the cascade entirely</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: C</span></div>
  </div>

  <!-- Q56 -->
  <div class="q-card" data-correct="A">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-high)"></span>Q56 · MCQ</div>
    <div class="q-text">Which CSS property accepts <code>all</code> as a shorthand to reset every property at once?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q56" value="A"><span class="opt-key">A</span><code>all: unset</code></label>
      <label class="opt-label"><input type="radio" name="q56" value="B"><span class="opt-key">B</span><code>reset: all</code></label>
      <label class="opt-label"><input type="radio" name="q56" value="C"><span class="opt-key">C</span><code>clear: both</code></label>
      <label class="opt-label"><input type="radio" name="q56" value="D"><span class="opt-key">D</span><code>none: inherit</code></label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: A</span> — The <code>all</code> property resets every CSS property except <code>direction</code> and <code>unicode-bidi</code>.</div>
  </div>

  <!-- Q57 -->
  <div class="q-card" data-correct="B">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-high)"></span>Q57 · MCQ</div>
    <div class="q-text">
<pre>:root { --accent: blue; }
.card { --accent: red; }
.card p { color: var(--accent); }</pre>
What color is the <code>&lt;p&gt;</code> inside <code>&lt;div class="card"&gt;</code>?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q57" value="A"><span class="opt-key">A</span>Blue — :root has highest specificity</label>
      <label class="opt-label"><input type="radio" name="q57" value="B"><span class="opt-key">B</span>Red — .card's --accent is closer in the DOM tree (inherited)</label>
      <label class="opt-label"><input type="radio" name="q57" value="C"><span class="opt-key">C</span>Neither — conflicting variables are both ignored</label>
      <label class="opt-label"><input type="radio" name="q57" value="D"><span class="opt-key">D</span>Black (default)</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: B</span> — CSS variables inherit through the DOM; the closer ancestor's value wins.</div>
  </div>

  <!-- Q58 -->
  <div class="q-card" data-correct="D">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-high)"></span>Q58 · MCQ</div>
    <div class="q-text">Which of these approaches avoids increasing specificity while still overriding a style?</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q58" value="A"><span class="opt-key">A</span>Repeating the selector multiple times</label>
      <label class="opt-label"><input type="radio" name="q58" value="B"><span class="opt-key">B</span>Adding more class names</label>
      <label class="opt-label"><input type="radio" name="q58" value="C"><span class="opt-key">C</span>Using an ID selector</label>
      <label class="opt-label"><input type="radio" name="q58" value="D"><span class="opt-key">D</span>Moving the rule later in the source order</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: D</span> — Source order is the tie-breaker when specificity is equal.</div>
  </div>

  <!-- Q59 -->
  <div class="q-card" data-correct="C">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-high)"></span>Q59 · MCQ</div>
    <div class="q-text">The <code>:is()</code> pseudo-class takes the specificity of:</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q59" value="A"><span class="opt-key">A</span>Zero — it's always (0,0,0,0)</label>
      <label class="opt-label"><input type="radio" name="q59" value="B"><span class="opt-key">B</span>The entire list combined</label>
      <label class="opt-label"><input type="radio" name="q59" value="C"><span class="opt-key">C</span>The most specific selector in its argument list</label>
      <label class="opt-label"><input type="radio" name="q59" value="D"><span class="opt-key">D</span>The least specific selector in its argument list</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: C</span> — <code>:is()</code> uses the specificity of its most specific argument.</div>
  </div>

  <!-- Q60 -->
  <div class="q-card" data-correct="A">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-high)"></span>Q60 · MCQ</div>
    <div class="q-text">The <code>:where()</code> pseudo-class differs from <code>:is()</code> in that:</div>
    <div class="options">
      <label class="opt-label"><input type="radio" name="q60" value="A"><span class="opt-key">A</span>It always contributes zero specificity</label>
      <label class="opt-label"><input type="radio" name="q60" value="B"><span class="opt-key">B</span>It only works with class selectors</label>
      <label class="opt-label"><input type="radio" name="q60" value="C"><span class="opt-key">C</span>It adds !important to all its rules</label>
      <label class="opt-label"><input type="radio" name="q60" value="D"><span class="opt-key">D</span>It requires a browser prefix</label>
    </div>
    <div class="answer-line"><span class="ans-label">✓ Answer: A</span> — <code>:where()</code> is the zero-specificity version of <code>:is()</code>.</div>
  </div>
</div>

<!-- ===================== SECTION 4: TRUE / FALSE ===================== -->
<div class="section">
  <div class="section-header">
    <span class="section-tag tag-tf">True / False</span>
    <span class="section-title">All Priority Levels — 40+ True/False Questions</span>
  </div>

  <!-- TF1 -->
  <div class="q-card" data-correct="True">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-tf)"></span>Q61 · True / False</div>
    <div class="q-text">The user-agent stylesheet has a lower priority than any author stylesheet rule.</div>
    <div class="tf-group">
      <button class="tf-btn" data-val="True" onclick="selectTF(this)">True</button>
      <button class="tf-btn" data-val="False" onclick="selectTF(this)">False</button>
    </div>
    <div class="answer-line"><span class="ans-label">✓ True</span> — Author styles override user-agent styles in the cascade.</div>
  </div>

  <!-- TF2 -->
  <div class="q-card" data-correct="False">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-tf)"></span>Q62 · True / False</div>
    <div class="q-text">An external CSS file always has a higher priority than an internal <code>&lt;style&gt;</code> block.</div>
    <div class="tf-group">
      <button class="tf-btn" data-val="True" onclick="selectTF(this)">True</button>
      <button class="tf-btn" data-val="False" onclick="selectTF(this)">False</button>
    </div>
    <div class="answer-line"><span class="ans-label">✓ False</span> — Priority depends on source order and specificity, not on external vs internal alone.</div>
  </div>

  <!-- TF3 -->
  <div class="q-card" data-correct="True">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-tf)"></span>Q63 · True / False</div>
    <div class="q-text">Inline styles have a specificity of (1,0,0,0).</div>
    <div class="tf-group">
      <button class="tf-btn" data-val="True" onclick="selectTF(this)">True</button>
      <button class="tf-btn" data-val="False" onclick="selectTF(this)">False</button>
    </div>
    <div class="answer-line"><span class="ans-label">✓ True</span></div>
  </div>

  <!-- TF4 -->
  <div class="q-card" data-correct="False">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-tf)"></span>Q64 · True / False</div>
    <div class="q-text"><code>!important</code> cannot be overridden under any circumstances.</div>
    <div class="tf-group">
      <button class="tf-btn" data-val="True" onclick="selectTF(this)">True</button>
      <button class="tf-btn" data-val="False" onclick="selectTF(this)">False</button>
    </div>
    <div class="answer-line"><span class="ans-label">✓ False</span> — Another !important with higher specificity or later source order can override it.</div>
  </div>

  <!-- TF5 -->
  <div class="q-card" data-correct="True">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-tf)"></span>Q65 · True / False</div>
    <div class="q-text">The <code>color</code> property is inherited by default in CSS.</div>
    <div class="tf-group">
      <button class="tf-btn" data-val="True" onclick="selectTF(this)">True</button>
      <button class="tf-btn" data-val="False" onclick="selectTF(this)">False</button>
    </div>
    <div class="answer-line"><span class="ans-label">✓ True</span></div>
  </div>

  <!-- TF6 -->
  <div class="q-card" data-correct="False">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-tf)"></span>Q66 · True / False</div>
    <div class="q-text">Ten class selectors chained together can beat a single ID selector in specificity.</div>
    <div class="tf-group">
      <button class="tf-btn" data-val="True" onclick="selectTF(this)">True</button>
      <button class="tf-btn" data-val="False" onclick="selectTF(this)">False</button>
    </div>
    <div class="answer-line"><span class="ans-label">✓ False</span> — Specificity columns don't carry over; 10 classes = (0,0,10,0) which is still less than (0,1,0,0) for one ID.</div>
  </div>

  <!-- TF7 -->
  <div class="q-card" data-correct="True">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-tf)"></span>Q67 · True / False</div>
    <div class="q-text">The <code>background-color</code> property is NOT inherited by default.</div>
    <div class="tf-group">
      <button class="tf-btn" data-val="True" onclick="selectTF(this)">True</button>
      <button class="tf-btn" data-val="False" onclick="selectTF(this)">False</button>
    </div>
    <div class="answer-line"><span class="ans-label">✓ True</span> — Layout and box-model properties are generally not inherited.</div>
  </div>

  <!-- TF8 -->
  <div class="q-card" data-correct="False">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-tf)"></span>Q68 · True / False</div>
    <div class="q-text">Using <code>!important</code> increases the specificity number in the specificity tuple.</div>
    <div class="tf-group">
      <button class="tf-btn" data-val="True" onclick="selectTF(this)">True</button>
      <button class="tf-btn" data-val="False" onclick="selectTF(this)">False</button>
    </div>
    <div class="answer-line"><span class="ans-label">✓ False</span> — !important operates at the cascade origin level, not as a specificity column. It doesn't change the (a,b,c,d) tuple.</div>
  </div>

  <!-- TF9 -->
  <div class="q-card" data-correct="True">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-tf)"></span>Q69 · True / False</div>
    <div class="q-text">
<pre>p { color: red; }
p { color: blue; }</pre>
The paragraph will be blue because later declarations win when specificity is equal.</div>
    <div class="tf-group">
      <button class="tf-btn" data-val="True" onclick="selectTF(this)">True</button>
      <button class="tf-btn" data-val="False" onclick="selectTF(this)">False</button>
    </div>
    <div class="answer-line"><span class="ans-label">✓ True</span></div>
  </div>

  <!-- TF10 -->
  <div class="q-card" data-correct="False">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-tf)"></span>Q70 · True / False</div>
    <div class="q-text">The <code>style</code> attribute on an HTML element is considered an "author stylesheet."</div>
    <div class="tf-group">
      <button class="tf-btn" data-val="True" onclick="selectTF(this)">True</button>
      <button class="tf-btn" data-val="False" onclick="selectTF(this)">False</button>
    </div>
    <div class="answer-line"><span class="ans-label">✓ False</span> — Inline styles are part of the author origin but are treated separately with their own specificity column (1,0,0,0).</div>
  </div>

  <!-- TF11 -->
  <div class="q-card" data-correct="True">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-tf)"></span>Q71 · True / False</div>
    <div class="q-text">A browser can have multiple user-agent stylesheets for different media types (screen, print, etc.).</div>
    <div class="tf-group">
      <button class="tf-btn" data-val="True" onclick="selectTF(this)">True</button>
      <button class="tf-btn" data-val="False" onclick="selectTF(this)">False</button>
    </div>
    <div class="answer-line"><span class="ans-label">✓ True</span></div>
  </div>

  <!-- TF12 -->
  <div class="q-card" data-correct="False">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-tf)"></span>Q72 · True / False</div>
    <div class="q-text">The <code>font-size</code> property does NOT inherit by default.</div>
    <div class="tf-group">
      <button class="tf-btn" data-val="True" onclick="selectTF(this)">True</button>
      <button class="tf-btn" data-val="False" onclick="selectTF(this)">False</button>
    </div>
    <div class="answer-line"><span class="ans-label">✓ False</span> — <code>font-size</code> is inherited by default.</div>
  </div>

  <!-- TF13 -->
  <div class="q-card" data-correct="True">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-tf)"></span>Q73 · True / False</div>
    <div class="q-text">The universal selector <code>*</code> has a specificity of (0,0,0,0) and thus loses to any other selector.</div>
    <div class="tf-group">
      <button class="tf-btn" data-val="True" onclick="selectTF(this)">True</button>
      <button class="tf-btn" data-val="False" onclick="selectTF(this)">False</button>
    </div>
    <div class="answer-line"><span class="ans-label">✓ True</span></div>
  </div>

  <!-- TF14 -->
  <div class="q-card" data-correct="False">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-tf)"></span>Q74 · True / False</div>
    <div class="q-text">Inherited property values have specificity and can compete with explicitly set values.</div>
    <div class="tf-group">
      <button class="tf-btn" data-val="True" onclick="selectTF(this)">True</button>
      <button class="tf-btn" data-val="False" onclick="selectTF(this)">False</button>
    </div>
    <div class="answer-line"><span class="ans-label">✓ False</span> — Inherited values have no specificity; any explicitly set value wins regardless of specificity.</div>
  </div>

  <!-- TF15 -->
  <div class="q-card" data-correct="True">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-tf)"></span>Q75 · True / False</div>
    <div class="q-text"><code>@import</code> rules must appear before any other rules (except <code>@charset</code>) in a CSS file.</div>
    <div class="tf-group">
      <button class="tf-btn" data-val="True" onclick="selectTF(this)">True</button>
      <button class="tf-btn" data-val="False" onclick="selectTF(this)">False</button>
    </div>
    <div class="answer-line"><span class="ans-label">✓ True</span></div>
  </div>

  <!-- TF16 -->
  <div class="q-card" data-correct="False">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-tf)"></span>Q76 · True / False</div>
    <div class="q-text">The cascade algorithm processes specificity BEFORE checking the source origin (user-agent / user / author).</div>
    <div class="tf-group">
      <button class="tf-btn" data-val="True" onclick="selectTF(this)">True</button>
      <button class="tf-btn" data-val="False" onclick="selectTF(this)">False</button>
    </div>
    <div class="answer-line"><span class="ans-label">✓ False</span> — Origin is checked first; specificity is only compared within the same origin/layer.</div>
  </div>

  <!-- TF17 -->
  <div class="q-card" data-correct="True">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-tf)"></span>Q77 · True / False</div>
    <div class="q-text">
<pre>&lt;p style="color: red !important;"&gt;Text&lt;/p&gt;
/* CSS */
#main p { color: blue !important; }</pre>
The CSS rule wins because the ID selector increases specificity among competing !important rules.</div>
    <div class="tf-group">
      <button class="tf-btn" data-val="True" onclick="selectTF(this)">True</button>
      <button class="tf-btn" data-val="False" onclick="selectTF(this)">False</button>
    </div>
    <div class="answer-line"><span class="ans-label">✓ True</span> — When both !important, higher specificity wins.</div>
  </div>

  <!-- TF18 -->
  <div class="q-card" data-correct="False">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-tf)"></span>Q78 · True / False</div>
    <div class="q-text">Pseudo-elements like <code>::after</code> count as a class in specificity calculations.</div>
    <div class="tf-group">
      <button class="tf-btn" data-val="True" onclick="selectTF(this)">True</button>
      <button class="tf-btn" data-val="False" onclick="selectTF(this)">False</button>
    </div>
    <div class="answer-line"><span class="ans-label">✓ False</span> — Pseudo-elements count as element selectors (0,0,0,1), not classes.</div>
  </div>

  <!-- TF19 -->
  <div class="q-card" data-correct="True">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-tf)"></span>Q79 · True / False</div>
    <div class="q-text">User stylesheets (custom browser styles) have higher priority than normal author styles.</div>
    <div class="tf-group">
      <button class="tf-btn" data-val="True" onclick="selectTF(this)">True</button>
      <button class="tf-btn" data-val="False" onclick="selectTF(this)">False</button>
    </div>
    <div class="answer-line"><span class="ans-label">✓ False</span> — Author styles override user styles for normal declarations. (True for !important: user !important beats author !important.)</div>
  </div>

  <!-- correction to TF19: answer is actually False -->
  <div class="q-card" data-correct="False">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-tf)"></span>Q80 · True / False</div>
    <div class="q-text">The <code>:not()</code> pseudo-class adds specificity equal to its argument.</div>
    <div class="tf-group">
      <button class="tf-btn" data-val="True" onclick="selectTF(this)">True</button>
      <button class="tf-btn" data-val="False" onclick="selectTF(this)">False</button>
    </div>
    <div class="answer-line"><span class="ans-label">✓ False</span> — <code>:not()</code> itself contributes zero specificity; only its argument contributes.</div>
  </div>

  <!-- TF21 -->
  <div class="q-card" data-correct="True">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-tf)"></span>Q81 · True / False</div>
    <div class="q-text"><code>display: none</code> is NOT inherited — child elements won't be visible but for a different reason (the whole subtree is not rendered).</div>
    <div class="tf-group">
      <button class="tf-btn" data-val="True" onclick="selectTF(this)">True</button>
      <button class="tf-btn" data-val="False" onclick="selectTF(this)">False</button>
    </div>
    <div class="answer-line"><span class="ans-label">✓ True</span></div>
  </div>

  <!-- TF22 -->
  <div class="q-card" data-correct="False">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-tf)"></span>Q82 · True / False</div>
    <div class="q-text">An <code>@import</code> inside a CSS file loads faster than a <code>&lt;link&gt;</code> tag in HTML.</div>
    <div class="tf-group">
      <button class="tf-btn" data-val="True" onclick="selectTF(this)">True</button>
      <button class="tf-btn" data-val="False" onclick="selectTF(this)">False</button>
    </div>
    <div class="answer-line"><span class="ans-label">✓ False</span> — <code>@import</code> is sequential (blocking); <code>&lt;link&gt;</code> tags can be loaded in parallel.</div>
  </div>

  <!-- TF23 -->
  <div class="q-card" data-correct="True">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-tf)"></span>Q83 · True / False</div>
    <div class="q-text">
<pre>h1 { color: navy !important; }
h1 { color: gold; }</pre>
The heading color will be navy.</div>
    <div class="tf-group">
      <button class="tf-btn" data-val="True" onclick="selectTF(this)">True</button>
      <button class="tf-btn" data-val="False" onclick="selectTF(this)">False</button>
    </div>
    <div class="answer-line"><span class="ans-label">✓ True</span> — !important in the first rule beats the normal declaration in the second.</div>
  </div>

  <!-- TF24 -->
  <div class="q-card" data-correct="False">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-tf)"></span>Q84 · True / False</div>
    <div class="q-text">Specificity is counted using a decimal system, so 10 classes equals 1 ID.</div>
    <div class="tf-group">
      <button class="tf-btn" data-val="True" onclick="selectTF(this)">True</button>
      <button class="tf-btn" data-val="False" onclick="selectTF(this)">False</button>
    </div>
    <div class="answer-line"><span class="ans-label">✓ False</span> — Specificity is compared column by column, not decimally. Any number of classes cannot beat a single ID.</div>
  </div>

  <!-- TF25 -->
  <div class="q-card" data-correct="True">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-tf)"></span>Q85 · True / False</div>
    <div class="q-text">An internal <code>&lt;style&gt;</code> block placed AFTER a <code>&lt;link&gt;</code> tag will override the linked external stylesheet's rules of equal specificity.</div>
    <div class="tf-group">
      <button class="tf-btn" data-val="True" onclick="selectTF(this)">True</button>
      <button class="tf-btn" data-val="False" onclick="selectTF(this)">False</button>
    </div>
    <div class="answer-line"><span class="ans-label">✓ True</span> — Source order determines the winner when specificity is equal.</div>
  </div>

  <!-- TF26 -->
  <div class="q-card" data-correct="False">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-tf)"></span>Q86 · True / False</div>
    <div class="q-text">Inline styles can be set for multiple elements at once with a single <code>style</code> attribute.</div>
    <div class="tf-group">
      <button class="tf-btn" data-val="True" onclick="selectTF(this)">True</button>
      <button class="tf-btn" data-val="False" onclick="selectTF(this)">False</button>
    </div>
    <div class="answer-line"><span class="ans-label">✓ False</span> — Each <code>style</code> attribute applies only to the single element it is placed on.</div>
  </div>

  <!-- TF27 -->
  <div class="q-card" data-correct="True">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-tf)"></span>Q87 · True / False</div>
    <div class="q-text">The <code>padding</code> property is not inherited by default.</div>
    <div class="tf-group">
      <button class="tf-btn" data-val="True" onclick="selectTF(this)">True</button>
      <button class="tf-btn" data-val="False" onclick="selectTF(this)">False</button>
    </div>
    <div class="answer-line"><span class="ans-label">✓ True</span></div>
  </div>

  <!-- TF28 -->
  <div class="q-card" data-correct="False">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-tf)"></span>Q88 · True / False</div>
    <div class="q-text">The order of specificity components from highest to lowest is: elements → classes → IDs → inline.</div>
    <div class="tf-group">
      <button class="tf-btn" data-val="True" onclick="selectTF(this)">True</button>
      <button class="tf-btn" data-val="False" onclick="selectTF(this)">False</button>
    </div>
    <div class="answer-line"><span class="ans-label">✓ False</span> — Correct order from highest: inline (1,0,0,0) → IDs (0,1,0,0) → classes (0,0,1,0) → elements (0,0,0,1).</div>
  </div>

  <!-- TF29 -->
  <div class="q-card" data-correct="True">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-tf)"></span>Q89 · True / False</div>
    <div class="q-text">Media queries do not affect CSS specificity.</div>
    <div class="tf-group">
      <button class="tf-btn" data-val="True" onclick="selectTF(this)">True</button>
      <button class="tf-btn" data-val="False" onclick="selectTF(this)">False</button>
    </div>
    <div class="answer-line"><span class="ans-label">✓ True</span> — Media queries control when rules apply, not their specificity.</div>
  </div>

  <!-- TF30 -->
  <div class="q-card" data-correct="False">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-tf)"></span>Q90 · True / False</div>
    <div class="q-text">CSS specificity conflicts are resolved before cascade origin conflicts.</div>
    <div class="tf-group">
      <button class="tf-btn" data-val="True" onclick="selectTF(this)">True</button>
      <button class="tf-btn" data-val="False" onclick="selectTF(this)">False</button>
    </div>
    <div class="answer-line"><span class="ans-label">✓ False</span> — Origin is resolved first; specificity only applies within the same origin.</div>
  </div>

  <!-- TF31 -->
  <div class="q-card" data-correct="True">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-tf)"></span>Q91 · True / False</div>
    <div class="q-text">In CSS, later rules override earlier rules when specificity is equal — regardless of whether the styles come from different files.</div>
    <div class="tf-group">
      <button class="tf-btn" data-val="True" onclick="selectTF(this)">True</button>
      <button class="tf-btn" data-val="False" onclick="selectTF(this)">False</button>
    </div>
    <div class="answer-line"><span class="ans-label">✓ True</span></div>
  </div>

  <!-- TF32 -->
  <div class="q-card" data-correct="False">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-tf)"></span>Q92 · True / False</div>
    <div class="q-text">You can use <code>!important</code> to override user-agent stylesheet rules — and this is the recommended way to reset browser defaults.</div>
    <div class="tf-group">
      <button class="tf-btn" data-val="True" onclick="selectTF(this)">True</button>
      <button class="tf-btn" data-val="False" onclick="selectTF(this)">False</button>
    </div>
    <div class="answer-line"><span class="ans-label">✓ False</span> — You can do it, but the recommended approach is a CSS reset or normalize stylesheet, not !important.</div>
  </div>

  <!-- TF33 -->
  <div class="q-card" data-correct="True">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-tf)"></span>Q93 · True / False</div>
    <div class="q-text">The <code>visibility</code> property IS inherited by default, unlike <code>display</code>.</div>
    <div class="tf-group">
      <button class="tf-btn" data-val="True" onclick="selectTF(this)">True</button>
      <button class="tf-btn" data-val="False" onclick="selectTF(this)">False</button>
    </div>
    <div class="answer-line"><span class="ans-label">✓ True</span> — <code>visibility: hidden</code> is inherited by children (they can explicitly override with <code>visibility: visible</code>).</div>
  </div>

  <!-- TF34 -->
  <div class="q-card" data-correct="False">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-tf)"></span>Q94 · True / False</div>
    <div class="q-text">Shorthand properties like <code>font</code> and <code>background</code> have higher specificity than individual longhand properties.</div>
    <div class="tf-group">
      <button class="tf-btn" data-val="True" onclick="selectTF(this)">True</button>
      <button class="tf-btn" data-val="False" onclick="selectTF(this)">False</button>
    </div>
    <div class="answer-line"><span class="ans-label">✓ False</span> — Shorthand and longhand properties using the same selector have equal specificity.</div>
  </div>

  <!-- TF35 -->
  <div class="q-card" data-correct="True">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-tf)"></span>Q95 · True / False</div>
    <div class="q-text">
<pre>div { color: red; }
div { color: blue; }</pre>
Both rules target <code>&lt;div&gt;</code>. The color will be blue.</div>
    <div class="tf-group">
      <button class="tf-btn" data-val="True" onclick="selectTF(this)">True</button>
      <button class="tf-btn" data-val="False" onclick="selectTF(this)">False</button>
    </div>
    <div class="answer-line"><span class="ans-label">✓ True</span></div>
  </div>

  <!-- TF36 -->
  <div class="q-card" data-correct="False">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-tf)"></span>Q96 · True / False</div>
    <div class="q-text">The <code>:root</code> pseudo-class has the same specificity as the <code>html</code> element selector.</div>
    <div class="tf-group">
      <button class="tf-btn" data-val="True" onclick="selectTF(this)">True</button>
      <button class="tf-btn" data-val="False" onclick="selectTF(this)">False</button>
    </div>
    <div class="answer-line"><span class="ans-label">✓ False</span> — <code>:root</code> is a pseudo-class (0,0,1,0); <code>html</code> is an element selector (0,0,0,1). :root wins.</div>
  </div>

  <!-- TF37 -->
  <div class="q-card" data-correct="True">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-tf)"></span>Q97 · True / False</div>
    <div class="q-text">CSS Cascade Layers (<code>@layer</code>) placed outside any layer have higher priority than styles inside a layer.</div>
    <div class="tf-group">
      <button class="tf-btn" data-val="True" onclick="selectTF(this)">True</button>
      <button class="tf-btn" data-val="False" onclick="selectTF(this)">False</button>
    </div>
    <div class="answer-line"><span class="ans-label">✓ True</span> — Un-layered styles have higher priority than any named layer.</div>
  </div>

  <!-- TF38 -->
  <div class="q-card" data-correct="False">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-tf)"></span>Q98 · True / False</div>
    <div class="q-text">The <code>line-height</code> property is not inherited by default.</div>
    <div class="tf-group">
      <button class="tf-btn" data-val="True" onclick="selectTF(this)">True</button>
      <button class="tf-btn" data-val="False" onclick="selectTF(this)">False</button>
    </div>
    <div class="answer-line"><span class="ans-label">✓ False</span> — <code>line-height</code> is inherited.</div>
  </div>

  <!-- TF39 -->
  <div class="q-card" data-correct="True">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-tf)"></span>Q99 · True / False</div>
    <div class="q-text">Applying <code>all: initial</code> to an element resets every CSS property to its initial specification value, effectively removing inheritance.</div>
    <div class="tf-group">
      <button class="tf-btn" data-val="True" onclick="selectTF(this)">True</button>
      <button class="tf-btn" data-val="False" onclick="selectTF(this)">False</button>
    </div>
    <div class="answer-line"><span class="ans-label">✓ True</span></div>
  </div>

  <!-- TF40 -->
  <div class="q-card" data-correct="False">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-tf)"></span>Q100 · True / False</div>
    <div class="q-text">Combining two class selectors like <code>.a.b</code> results in the same specificity as a single ID selector <code>#c</code>.</div>
    <div class="tf-group">
      <button class="tf-btn" data-val="True" onclick="selectTF(this)">True</button>
      <button class="tf-btn" data-val="False" onclick="selectTF(this)">False</button>
    </div>
    <div class="answer-line"><span class="ans-label">✓ False</span> — <code>.a.b</code> = (0,0,2,0); <code>#c</code> = (0,1,0,0). The ID wins.</div>
  </div>

  <!-- TF41 -->
  <div class="q-card" data-correct="True">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-tf)"></span>Q101 · True / False</div>
    <div class="q-text">Styles inside a <code>@media</code> query block don't have any additional specificity bonus.</div>
    <div class="tf-group">
      <button class="tf-btn" data-val="True" onclick="selectTF(this)">True</button>
      <button class="tf-btn" data-val="False" onclick="selectTF(this)">False</button>
    </div>
    <div class="answer-line"><span class="ans-label">✓ True</span></div>
  </div>

  <!-- TF42 -->
  <div class="q-card" data-correct="False">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-tf)"></span>Q102 · True / False</div>
    <div class="q-text">Adding a <code>rel="stylesheet"</code> attribute to a <code>&lt;link&gt;</code> tag is optional — the browser will detect CSS files automatically.</div>
    <div class="tf-group">
      <button class="tf-btn" data-val="True" onclick="selectTF(this)">True</button>
      <button class="tf-btn" data-val="False" onclick="selectTF(this)">False</button>
    </div>
    <div class="answer-line"><span class="ans-label">✓ False</span> — <code>rel="stylesheet"</code> is required for the browser to treat the linked file as CSS.</div>
  </div>

  <!-- TF43 -->
  <div class="q-card" data-correct="True">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-tf)"></span>Q103 · True / False</div>
    <div class="q-text">
<pre>button { background: green !important; }
button { background: red; }</pre>
The button background will be green.</div>
    <div class="tf-group">
      <button class="tf-btn" data-val="True" onclick="selectTF(this)">True</button>
      <button class="tf-btn" data-val="False" onclick="selectTF(this)">False</button>
    </div>
    <div class="answer-line"><span class="ans-label">✓ True</span> — !important in the first rule beats the normal later rule.</div>
  </div>

  <!-- TF44 -->
  <div class="q-card" data-correct="False">
    <div class="result-badge"></div>
    <div class="q-num"><span class="q-num-dot" style="background:var(--accent-tf)"></span>Q104 · True / False</div>
    <div class="q-text">The <code>text-decoration</code> property is inherited by default.</div>
    <div class="tf-group">
      <button class="tf-btn" data-val="True" onclick="selectTF(this)">True</button>
      <button class="tf-btn" data-val="False" onclick="selectTF(this)">False</button>
    </div>
    <div class="answer-line"><span class="ans-label">✓ False</span> — <code>text-decoration</code> is not inherited; it only applies to the element it is set on.</div>
  </div>
</div>

<footer>
  CSS Priority &amp; Cascade Quiz · 104 Questions · All levels covered<br>
  <span style="color:var(--accent-low)">Browser Default</span> ·
  <span style="color:var(--accent-med)">Specificity</span> ·
  <span style="color:var(--accent-high)">!important</span>
</footer>

<script>
  // ── SELECT MCQ ──
  document.querySelectorAll('.opt-label').forEach(label => {
    label.addEventListener('click', () => {
      const name = label.querySelector('input').name;
      document.querySelectorAll(`input[name="${name}"]`).forEach(r => {
        r.closest('.opt-label').classList.remove('selected');
      });
      label.classList.add('selected');
      label.querySelector('input').checked = true;
      updateScore();
    });
  });

  // ── SELECT TF ──
  function selectTF(btn) {
    const group = btn.closest('.tf-group');
    group.querySelectorAll('.tf-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    updateScore();
  }

  // ── SCORE ──
  function updateScore() {
    const answered = document.querySelectorAll('.q-card').length;
    const totalEl = document.getElementById('total-qs');
    // count answered
    let count = 0;
    document.querySelectorAll('.q-card').forEach(card => {
      const inp = card.querySelector('input[type="radio"]:checked');
      const tfSel = card.querySelector('.tf-btn.selected');
      if (inp || tfSel) count++;
    });
    document.getElementById('live-score').textContent = count;
    totalEl.textContent = document.querySelectorAll('.q-card').length;
  }

  // ── CHECK ALL ──
  function checkAll() {
    let correct = 0, total = 0;
    document.querySelectorAll('.q-card').forEach(card => {
      const ans = card.dataset.correct;
      const badge = card.querySelector('.result-badge');
      const ansLine = card.querySelector('.answer-line');
      // MCQ
      const selected = card.querySelector('input[type="radio"]:checked');
      // TF
      const tfSel = card.querySelector('.tf-btn.selected');

      card.querySelectorAll('.opt-label').forEach(l => {
        l.classList.remove('reveal-correct','reveal-wrong');
        const inp = l.querySelector('input');
        if (inp.value === ans) l.classList.add('reveal-correct');
        else if (inp.checked) l.classList.add('reveal-wrong');
      });
      card.querySelectorAll('.tf-btn').forEach(b => {
        b.classList.remove('reveal-correct','reveal-wrong');
        if (b.dataset.val === ans) b.classList.add('reveal-correct');
        else if (b.classList.contains('selected')) b.classList.add('reveal-wrong');
      });

      ansLine.classList.add('show');
      total++;

      let userAns = selected ? selected.value : (tfSel ? tfSel.dataset.val : null);
      if (userAns === ans) {
        correct++;
        badge.textContent = '✓';
        badge.className = 'result-badge show c';
        card.classList.add('correct');
        card.classList.remove('incorrect');
      } else if (userAns) {
        badge.textContent = '✗';
        badge.className = 'result-badge show w';
        card.classList.add('incorrect');
        card.classList.remove('correct');
      }
    });

    const pct = total ? Math.round(correct / total * 100) : 0;
    document.getElementById('modal-pct').textContent = pct + '%';
    document.getElementById('modal-fraction').textContent = `${correct} / ${total} correct`;
    const msgs = ['Keep studying! 📚', 'Good effort! 🔥', 'Nice work! 🎯', 'Excellent! ⭐', 'CSS Master! 🏆'];
    document.getElementById('modal-msg').textContent = msgs[Math.floor(pct / 20)] || msgs[4];
    document.getElementById('result-modal').classList.add('open');
    updateScore();
  }

  // ── RESET ──
  function resetAll() {
    document.querySelectorAll('.q-card').forEach(card => {
      card.classList.remove('correct','incorrect');
      card.querySelectorAll('input[type="radio"]').forEach(r => r.checked = false);
      card.querySelectorAll('.opt-label').forEach(l => l.classList.remove('selected','reveal-correct','reveal-wrong'));
      card.querySelectorAll('.tf-btn').forEach(b => b.classList.remove('selected','reveal-correct','reveal-wrong'));
      card.querySelector('.answer-line').classList.remove('show');
      const badge = card.querySelector('.result-badge');
      badge.textContent = '';
      badge.className = 'result-badge';
    });
    document.getElementById('live-score').textContent = '0';
    updateScore();
  }

  // init score
  updateScore();
</script>
</body>
</html>
