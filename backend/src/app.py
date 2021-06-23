from PyDictionary import PyDictionary
import goslate

gs = goslate.Goslate()
dictionary=PyDictionary("hotel","ambush","nonchalant","perceptive")
'There can be any number of words in the Instance'

print(dictionary.printMeanings())
print(dictionary.getMeanings())
print (dictionary.getSynonyms())

print (dictionary.translateTo("hi"))