def frequency_map(s: str) -> dict:
	freq = {}
	for ch in s:
		if ch in freq:
			freq[ch] += 1
		else:
			freq[ch] = 1
	return freq

freq = frequency_map("BANANA")

print(freq)