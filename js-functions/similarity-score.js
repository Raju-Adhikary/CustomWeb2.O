const string1 = "69nF (5uF - 2At84J) - 1000V Polyester Film Capacitor";
const string2 = "150nF (0.15uF - 2A154J) - 100V Polyester Film Capacitor";

//jaccardSimilarity method

function jaccardSimilarity(set1, set2) {
  const intersection = new Set([...set1].filter(x => set2.has(x)));
  const union = new Set([...set1, ...set2]);

  const similarity = intersection.size / union.size;
  return similarity;
}

const set1 = new Set(string1.split(''));
const set2 = new Set(string2.split(''));

const similarityScore = jaccardSimilarity(set1, set2);
console.log(`Jaccard Similarity Score: ${similarityScore}`);



// levenshteinDistance method

function levenshteinDistance(str1, str2) {
  const m = str1.length;
  const n = str2.length;

  const dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0) {
        dp[i][j] = j;
      } else if (j === 0) {
        dp[i][j] = i;
      } else {
        dp[i][j] =
          str1[i - 1] === str2[j - 1]
            ? dp[i - 1][j - 1]
            : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }

  const maxLen = Math.max(m, n);
  const similarity = 1 - dp[m][n] / maxLen;

  return similarity;
}

const similarityScore2 = levenshteinDistance(string1, string2);
console.log(`LevenshteinDistance Similarity Score: ${similarityScore2}`);
