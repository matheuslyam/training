# Trie

**Trie** é um tipo de árvore. 

Também conhecida por **prefix tree**.

Conforme vamos ‘avançando’ na árvore, mantemos o estados que estamos tendo. A representação da Trie abaixo no excalidraw ilustra bem.

https://excalidraw.com

```python
class TrieNode:
	def __init__(self):
	self.is_end_of_word = False

class Trie:
	def __init__(self):
		self.root = TrieNode()
		
		def insert(self, word):
			current_node = self.root
			for char in word:
				if char not in current_node.children:
					current_node.children[char] = TrieNode()
				current_node = current_node.children[char]
			current_node.is_end_of_word = True
		
		def search(self, word):
			current_node = self.root
			for char in word:
				if char not in current_node.children:
					return False
				current_node = current_node.children[char]
			return current_node.is_end_of_word
		
		def starts_with(self, prefix):
			current_node = self.root
			for char in prefix:
				if char not in current_node.children:
					return False
				current_node = current_node.children[char]
			return True
```