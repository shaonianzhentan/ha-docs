# 代词

代词（英文pronoun，简称pron.），是指代名词或一句话的一种词类。大多数代词具有名词和形容词的功能

---
```mermaid
graph
    one[人称代词] --> one-one(Personal pronoun)
    two[物主代词] --> two-one(Possessive  pronoun)
    three[指示代词] --> three-one(reciprocal pronoun)
    four[反身代词] --> four-one(Reflexive pronoun)
    five[相互代词] --> five-one(reciprocal pronoun)
```
---
```mermaid
graph
    six[疑问代词] --> six-one(Interrogative pronoun)
    seven[关系代词] --> seven-one(Relational pronoun)
    eight[连接代词] --> eight-one(conjunctional pronoun)
    nine[不定代词] --> nine-one(Indefinite pronoun)
    ten[替代词] --> ten-one(substitute pronoun)
```
---

### 人称代词
```mermaid
graph LR
    root(人称代词)-->nominative{主格}
      nominative-->nominative-singular((单数))===first(I, You, He She, It)
      nominative-->nominative-complex((复数))===second(We, You, They)
    root-->accusative{宾格}
      accusative-->accusative-singular((单数))===third(me, you, him, her, it)
      accusative-->accusative-complex((复数))===fourth(us, you, them)
```
---
### 物主代词
```mermaid
graph LR
    root[物主代词]--某人的...,后加人或物-->nominative{形容词性}
      nominative==>nominative-singular((单数))-..-first>my, your, his, her, Its]
      nominative==>nominative-complex((复数))-..-second>our, your, their]
    root--某人的,单独使用-->accusative{名词性}
      accusative==>accusative-singular((单数))-..-third>mine, yours, his, her, its]
      accusative==>accusative-complex((复数))-..-fourth>ours, yours, theirs]
```
---
### 反身代词
```mermaid
graph TB
    root(反身代词)-->singular{单数}
      singular==>myself((myself))
      singular==>yourself((yourself))
      singular==>himself((himself))
      singular==>herself((herself))
      singular==>itself((itself))
    root-->complex{复数}
      complex==>ourselves((ourselves))
      complex==>yourselves((yourselves))
      complex==>themselves((themselves))
```

### 指示代词

```mermaid
graph TB
    root(指示代词)-->singular{单数}
      singular==>this(this)-..-this_translate(这)
      singular==>that(that)-..-that_translate(那)
    root-->complex{复数}
      complex==>these(these)-..-these_translate(这些)
      complex==>those(those)-..-those_translate(那些)
```

### 相互代词

`each other` 两者之间 

`one another` 三者之间/三者以上之间


### 疑问代词

### 关系代词

### 连接代词

### 不定代词

`many` 许多，很多 
*代替/修饰可数名词的复数*
<br>
`much` 很多
*代替/修饰不可数名词的复数*

`a few`（肯定意义）一些
<br>
`few`（否定意义）几乎没有
*后接可数名词*

`a little`  （肯定意义）一些
<br>
`little`  （否定意义）几乎没有
*后接不可数名词*

`some` 一些
<br>
`any` 任何

`each` 每（2个/2个以上）
*后接单数*
<br>
`every` 每（3个/3个以上）

`either` 
两者中的每一个（谓语用单数）
<br>
`neither`
两者中的每一个都不（谓语用单数）

都；全部（它们做主语时，谓语动词都要用复数形式）
<br>
`both` 两者
<br>
`all` 两者及以上

`other` 另外的；其它的（+名词）
<br>
`the other` 特指两者中的另一个
<br>
`another` 泛指3个及以上另一个

### 复合不定代词

```mermaid
graph TB
    root(复合不定代词)-->every{every}
      every===every_text(每人/人人)==>everyone(everyone)==>everybody(everybody)
      every===everything_translate(每件事/一切事)==>everything(everything)
    root-->some{some}
      some===some_text(某人)==>someone(someone)==>somebody(somebody)
      some===something_translate(某事)==>something(something)
    root-->any{any}
      any===any_text(任何人)==>anyone(anyone)==>anybody(anybody)
      any===anything_translate(任何事)==>anything(anything)
    root-->no{no}
      no===no_text(没人)==>noone(no one)==>nobody(nobody)
      no===nothing_translate(没事)==>nothing(nothing)
```

### 替代词