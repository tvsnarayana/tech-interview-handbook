class Trie(object):
  def __init__(self):
    """
    Initialize your data structure here.
    """
    self.d = {}

  def insert(self, word):
    """
    Inserts a word into the trie.
    :type word: str
    :rtype: void
    """
    curr = self.d
    for char in word:
      if char not in curr:
        curr[char] = {}
      curr = curr[char]
    curr['#'] = True

  def search(self, word):
    """
    Returns if the word is in the trie.
    :type word: str
    :rtype: bool
    """
    curr = self.d
    for char in word:
      if char in curr:
        curr = curr[char]
      else:
        return False
    return '#' in curr

  def startsWith(self, prefix):
    """
    Returns if there is any word in the trie that starts with the given prefix.
    :type prefix: str
    :rtype: bool
    """
    curr = self.d
    for char in prefix:
      if char in curr:
        curr = curr[char]
      else:
        return False
    return True

# Example
word = 'hello'
trie = Trie()
trie.insert(word)
print(trie.search(word))
print(trie.startsWith('hello'))
print(trie.search('world'))
print(trie.startsWith('wor'))
