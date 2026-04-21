const DB = {
  "buttermilk": {
    subs: [
      { name: "Milk + Lemon Juice", ratio: "1 cup whole milk + 1 tbsp fresh lemon juice. Stir, let sit 5 min until curdled.", taste: "seamless", notes: "The closest match. Works in pancakes, biscuits, cakes, fried chicken batter. Use white vinegar if no lemon.", contexts: [{ label: "Best for baking", type: "best" }, { label: "Best for fried chicken", type: "best" }] },
      { name: "Milk + White Vinegar", ratio: "1 cup whole milk + 1 tbsp white vinegar. Stir, wait 5 min.", taste: "seamless", notes: "Same chemistry as lemon. Neutral flavor makes it better for savory dishes.", contexts: [{ label: "Best for savory", type: "best" }] },
      { name: "Plain Yogurt + Water", ratio: "¾ cup plain yogurt + ¼ cup water, whisked smooth.", taste: "seamless", notes: "Thicker than buttermilk. Great for marinades and dressings. Greek yogurt works but needs more water (½ cup).", contexts: [{ label: "Great for marinades", type: "best" }] },
      { name: "Sour Cream + Water", ratio: "½ cup sour cream + ½ cup water, whisked.", taste: "noticeable", notes: "Slightly richer. Works well in cakes and biscuits. Not ideal for fried chicken — coating may be heavier.", contexts: [{ label: "Avoid for frying", type: "avoid" }] },
      { name: "Kefir (plain)", ratio: "1 cup kefir = 1 cup buttermilk (1:1)", taste: "seamless", notes: "Naturally fermented, very close tang profile. Thinner than yogurt, closer to buttermilk consistency.", contexts: [{ label: "1:1 direct swap", type: "best" }] }
    ],
    veganSubs: [
      { name: "Oat Milk + Lemon Juice", ratio: "1 cup oat milk + 1 tbsp lemon juice. Wait 5 min.", taste: "noticeable", notes: "Oat milk has natural sweetness. Works in pancakes and muffins. Not ideal for savory marinades.", contexts: [{ label: "Best for sweet baking", type: "best" }] },
      { name: "Soy Milk + Vinegar", ratio: "1 cup soy milk + 1 tbsp apple cider vinegar. Wait 5 min.", taste: "seamless", notes: "Soy milk curdles best of all plant milks. Closest vegan match.", contexts: [{ label: "Best vegan option", type: "best" }] }
    ]
  },
  "eggs": {
    subs: [
      { name: "Flax Egg", ratio: "1 tbsp ground flaxseed + 3 tbsp warm water. Mix, refrigerate 15 min until gel-like.", taste: "noticeable", notes: "Works as binder in cookies, muffins, quick breads. Adds slight nutty flavor. NOT for recipes where eggs are the star (meringue, custard).", contexts: [{ label: "Best for cookies/muffins", type: "best" }, { label: "Avoid for meringue", type: "avoid" }] },
      { name: "Applesauce (unsweetened)", ratio: "¼ cup applesauce per egg. Add ½ tsp baking powder if batter seems flat.", taste: "noticeable", notes: "Adds moisture and sweetness. Reduces binding strength. Best in brownies, cakes, quick breads. Not for fluffy recipes.", contexts: [{ label: "Best for brownies", type: "best" }, { label: "Avoid for angel food cake", type: "avoid" }] },
      { name: "Mashed Banana", ratio: "¼ cup mashed ripe banana per egg.", taste: "different", notes: "Strong banana flavor — only use if it complements the recipe. Great in pancakes, oatmeal cookies, banana bread (obviously). Makes results denser.", contexts: [{ label: "Strong flavor", type: "avoid" }, { label: "Best for pancakes", type: "best" }] },
      { name: "Chia Egg", ratio: "1 tbsp chia seeds + 3 tbsp water. Stir, wait 10 min.", taste: "noticeable", notes: "Similar to flax egg but with visible seeds. Slightly better binding. Works in same recipes as flax egg.", contexts: [] },
      { name: "Aquafaba (chickpea water)", ratio: "3 tbsp aquafaba per egg. Whip 5-10 min for recipes needing volume.", taste: "seamless", notes: "The miracle sub. Can whip into foam for meringue, mousses, and macarons. Canned chickpea liquid works best.", contexts: [{ label: "Best for meringue", type: "best" }, { label: "Best for mousses", type: "best" }] },
      { name: "Yogurt (plain)", ratio: "¼ cup plain yogurt per egg.", taste: "noticeable", notes: "Adds moisture and tang. Works in cakes and quick breads. Not a binder — add 1 tbsp cornstarch if needed.", contexts: [] }
    ],
    veganSubs: [
      { name: "Aquafaba", ratio: "3 tbsp aquafaba per egg.", taste: "seamless", notes: "Already vegan! The most versatile egg sub. Whips for meringue, binds for cookies, leavens for cakes.", contexts: [{ label: "Most versatile", type: "best" }] },
      { name: "Silken Tofu", ratio: "¼ cup blended silken tofu per egg.", taste: "noticeable", notes: "Great for dense baked goods and quiches. Virtually flavorless. Adds protein. Not for light/fluffy recipes.", contexts: [{ label: "Best for quiche/frittata", type: "best" }] }
    ]
  },
  "brown sugar": {
    subs: [
      { name: "White Sugar + Molasses", ratio: "1 cup white sugar + 1-2 tbsp molasses. Mix with fingers until uniform.", taste: "seamless", notes: "This IS brown sugar — you're just making it. 1 tbsp = light brown, 2 tbsp = dark brown. The closest possible match.", contexts: [{ label: "1:1 equivalent", type: "best" }] },
      { name: "Coconut Sugar", ratio: "1 cup coconut sugar = 1 cup brown sugar (1:1)", taste: "noticeable", notes: "Similar caramel notes but slightly drier. May need an extra tbsp of liquid. Lower glycemic index.", contexts: [{ label: "Closest 1-ingredient swap", type: "best" }] },
      { name: "Maple Syrup", ratio: "¾ cup maple syrup per 1 cup brown sugar. Reduce other liquids by 2-3 tbsp.", taste: "different", notes: "Distinct maple flavor. Adds moisture — reduce other liquids. Best in cookies and oatmeal recipes.", contexts: [{ label: "Flavor change", type: "avoid" }] },
      { name: "Honey", ratio: "¾ cup honey per 1 cup brown sugar. Reduce other liquids by 2 tbsp. Add ¼ tsp baking soda.", taste: "different", notes: "Much sweeter than brown sugar. Browning happens faster — watch oven temp. Not vegan.", contexts: [] }
    ]
  },
  "heavy cream": {
    subs: [
      { name: "Butter + Whole Milk", ratio: "⅓ cup melted butter + ⅔ cup whole milk = 1 cup heavy cream.", taste: "seamless", notes: "Great for sauces, soups, and casseroles. NOT for whipping — will not hold peaks. Closest for cooked dishes.", contexts: [{ label: "Best for cooking", type: "best" }, { label: "Cannot whip", type: "avoid" }] },
      { name: "Half-and-Half + Butter", ratio: "⅞ cup half-and-half + ⅛ cup melted butter = 1 cup heavy cream.", taste: "seamless", notes: "Even closer than milk+butter. Works in most cooked applications. Still can't whip.", contexts: [{ label: "Closer fat content", type: "best" }] },
      { name: "Coconut Cream", ratio: "1 cup coconut cream (thick part from top of can, chilled) = 1 cup heavy cream.", taste: "different", notes: "Whips beautifully when chilled. Distinct coconut flavor. Best for desserts and curries. Vegan.", contexts: [{ label: "Can whip!", type: "best" }, { label: "Coconut flavor", type: "avoid" }] },
      { name: "Evaporated Milk", ratio: "1 cup evaporated milk + 2 tbsp butter = 1 cup heavy cream.", taste: "noticeable", notes: "Slightly caramelized flavor. Works in soups and pies. Thinner than cream but acceptable.", contexts: [] }
    ]
  },
  "all-purpose flour": {
    subs: [
      { name: "Bread Flour (less 1 tbsp)", ratio: "1 cup bread flour minus 1 tbsp per cup of AP flour.", taste: "seamless", notes: "Higher protein = chewier results. Fine for bread and pizza. For cakes, sift extra to lighten.", contexts: [{ label: "Best for bread/pizza", type: "best" }] },
      { name: "Cake Flour", ratio: "1 cup + 2 tbsp cake flour per cup of AP flour.", taste: "seamless", notes: "Lower protein = more tender. Add the extra 2 tbsp to compensate for less structure. Best for cakes and pastries.", contexts: [{ label: "Best for cakes", type: "best" }] },
      { name: "Whole Wheat Flour", ratio: "¾ cup whole wheat + ¼ cup AP flour per cup. Or substitute max 50% whole wheat.", taste: "noticeable", notes: "Denser, nuttier. Absorbs more liquid — add 1 extra tbsp liquid per cup. Best for muffins, pancakes, breads.", contexts: [{ label: "Denser result", type: "avoid" }] },
      { name: "Oat Flour (homemade)", ratio: "1¼ cup oat flour per cup AP flour. Add ½ tsp baking powder.", taste: "noticeable", notes: "Blend rolled oats until fine. Slightly sweet. No gluten so won't rise as much. Works in cookies and pancakes.", contexts: [] }
    ],
    glutenFreeSubs: [
      { name: "1:1 GF Flour Blend", ratio: "1 cup GF 1:1 blend = 1 cup AP flour (check label for xanthan gum).", taste: "seamless", notes: "Look for blends with xanthan gum already included (Bob's Red Mill, King Arthur). Without it, add ½ tsp per cup.", contexts: [{ label: "Easiest swap", type: "best" }] },
      { name: "Almond Flour", ratio: "Use ⅓ cup more almond flour per cup AP. Add 1 extra egg for binding.", taste: "different", notes: "High fat, no gluten binding. Results are denser and richer. Best for cakes, brownies. Not for bread.", contexts: [{ label: "Avoid for bread", type: "avoid" }] }
    ]
  },
  "butter": {
    subs: [
      { name: "Coconut Oil", ratio: "¾ cup coconut oil per 1 cup butter. Use refined for neutral flavor.", taste: "noticeable", notes: "Solid when cool like butter. Works in most baking. Unrefined adds coconut flavor. Refined is neutral.", contexts: [{ label: "Best for baking", type: "best" }] },
      { name: "Vegetable Oil", ratio: "¾ cup oil per 1 cup butter.", taste: "noticeable", notes: "No water content (butter is ~18% water). Results are slightly denser. Works in cakes, muffins, quick breads. Not for frosting or pie crust.", contexts: [{ label: "Avoid for pie crust", type: "avoid" }] },
      { name: "Applesauce", ratio: "½ cup applesauce per 1 cup butter (for baking only).", taste: "different", notes: "Massive calorie reduction. Makes baked goods very moist and dense. Works in brownies, muffins. Do NOT use for sautéing or frosting.", contexts: [{ label: "Baking only", type: "best" }] },
      { name: "Greek Yogurt", ratio: "½ cup Greek yogurt per 1 cup butter.", taste: "noticeable", notes: "Tangy, very moist results. Great for cakes and muffins. Adds protein. Cannot cream like butter for cookies.", contexts: [] },
      { name: "Margarine", ratio: "1 cup margarine = 1 cup butter (1:1)", taste: "seamless", notes: "Closest direct swap. Check label for water content — some margarines have more water than butter. Look for stick form.", contexts: [{ label: "1:1 direct swap", type: "best" }] }
    ],
    veganSubs: [
      { name: "Vegan Butter (stick)", ratio: "1 cup vegan butter = 1 cup butter (1:1)", taste: "seamless", notes: "Country Crock Plant, Miyoko's, Earth Balance. Formulated to behave like dairy butter. Best direct swap.", contexts: [{ label: "Best vegan swap", type: "best" }] }
    ]
  }
};

let activeDiet = 'none';

function getSubs(ingredient) {
  const data = DB[ingredient.toLowerCase().trim()];
  if (!data) return null;

  let subs = [...data.subs];
  
  if (activeDiet === 'vegan' && data.veganSubs) {
    subs = [...data.veganSubs, ...subs.filter(s => !isNonVegan(s.name))];
  }
  if (activeDiet === 'gluten-free' && data.glutenFreeSubs) {
    subs = [...data.glutenFreeSubs, ...subs];
  }

  return subs;
}

function isNonVegan(name) {
  return /milk|butter|yogurt|cream|sour cream|kefir(?!.*soy)|honey/i.test(name) && !/coconut|oat|soy|almond/i.test(name);
}

function renderResults(ingredient) {
  const subs = getSubs(ingredient);
  const container = document.getElementById('results');

  if (!subs) {
    container.innerHTML = `<div class="no-results"><div class="emoji">🤔</div><p>No substitutions found for "<strong>${ingredient}</strong>"<br>Try: buttermilk, eggs, butter, brown sugar, heavy cream, all-purpose flour</p></div>`;
    return;
  }

  const tasteLabels = { seamless: "🟢 Seamless", noticeable: "🟡 Noticeable", different: "🟠 Different", "last": "🔴 Last Resort" };
  const tasteClass = { seamless: "taste-seamless", noticeable: "taste-noticeable", different: "taste-different", "last": "taste-last" };

  container.innerHTML = subs.map((sub, i) => `
    <div class="result-card" style="animation-delay: ${i * 0.08}s">
      <div class="result-header">
        <div class="sub-name">${sub.name}</div>
        <span class="taste-badge ${tasteClass[sub.taste]}">${tasteLabels[sub.taste]}</span>
      </div>
      <div class="ratio-box">
        <div class="ratio-label">Ratio</div>
        ${sub.ratio}
      </div>
      <div class="notes">${sub.notes}</div>
      ${sub.contexts.length ? `<div class="context-tags">${sub.contexts.map(c => `<span class="context-tag ${c.type}">${c.label}</span>`).join('')}</div>` : ''}
    </div>
  `).join('');
}

// Search
const input = document.getElementById('ingredientInput');
const suggestionsEl = document.getElementById('suggestions');
const allIngredients = Object.keys(DB);

input.addEventListener('input', () => {
  const val = input.value.toLowerCase().trim();
  if (val.length < 1) {
    suggestionsEl.classList.add('hidden');
    return;
  }
  const matches = allIngredients.filter(i => i.includes(val));
  if (matches.length && matches[0] !== val) {
    suggestionsEl.innerHTML = matches.map(m => `<div class="suggestion-item">${m}</div>`).join('');
    suggestionsEl.classList.remove('hidden');
    suggestionsEl.querySelectorAll('.suggestion-item').forEach(el => {
      el.addEventListener('click', () => {
        input.value = el.textContent;
        suggestionsEl.classList.add('hidden');
        renderResults(el.textContent);
      });
    });
  } else {
    suggestionsEl.classList.add('hidden');
  }
});

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    suggestionsEl.classList.add('hidden');
    renderResults(input.value);
  }
});

// Chips
document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', () => {
    const ingredient = chip.dataset.ingredient;
    input.value = ingredient;
    renderResults(ingredient);
  });
});

// Diet toggle
document.querySelectorAll('.diet-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.diet-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeDiet = btn.dataset.diet;
    if (input.value.trim()) renderResults(input.value);
  });
});

// Voice
const micBtn = document.getElementById('micBtn');
if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  
  micBtn.addEventListener('click', () => {
    micBtn.classList.add('listening');
    recognition.start();
  });
  
  recognition.onresult = (e) => {
    const text = e.results[0][0].transcript.toLowerCase().trim();
    input.value = text;
    micBtn.classList.remove('listening');
    renderResults(text);
  };
  
  recognition.onend = () => micBtn.classList.remove('listening');
} else {
  micBtn.style.display = 'none';
}
