---
title: Can We Thinking Clearly As A Developer?
summary: We examine the thought process of writing and refactoring code. Does it share anything with regular writing? If it does, what can we learn from this? How can we think clearer and communicate more clearly in our daily work as developers, programmers, and software engineers?
date: 2024-08-23
tags:
  - Programming
  - Clear Thinking
---

# Preface

Have you ever thought about your thinking? How it works, what can we learn from it, and perhaps, how we can take advantage of it as a software engineer?

Lets rewrite some simple code:
```js
console.log(1);
console.log(2);
console.log(3);
```
This piece of code does exactly what you want, print the numbers 1, 2 and 3. But you feel the urge to rewrite:
```js
for(var number = 1; number < 4; number++){
    console.log(number);
}
```
You are told about a change of requirements to "print the numbers 1 and 3", so you get to work:
```js
for(var number = 1; number < 4; number++){
    if(number === 2) continue;
    console.log(number);
}
```
You're not happy, you know those pesky requirements will change! Let's reframe this to a more generic requirement "print all odd numbers from 1 to 3". In case the range of number changes, I won't need to make major changes:
```js
for(var number = 1; number < 4; number++){
    if(number % 2 === 0) continue;
    console.log(number);
}
```
Wait, just for clarity, you might want to do that final change:
```js
for(var number = 1; number < 4; number++){
    if(isEven(number)) continue;
    console.log(number);
}

function isEven(x){
  return x % 2 === 0;
}
```
*Sigh*, why use the world "even" while the only word "odd" is mentioned in your requirement? The final final version:
```js
for(var number = 1; number < 4; number++){
    if(isOdd(number)){
        console.log(number);
    }
}

function isOdd(x){
  return x % 2 > 0;
}
```

Great, you are satisified (or not) with the solution. Let's reflect here on the thinking process for a moment. What were you doing as you were rewriting the code? Maybe overengineering? But that's not within scope of this article. What else? You were rewriting your code, maybe we can say "rephrasing your code"?

# Clarity Of Thought

Your code is a text format that describes your solution to a problem. Why do you rephrase your code, or anything at all? One reason being, you are not satisfied with the current wording of the text (code) that describes your solution. It feels messy, uncomfortable, maybe it's too verbose, hard to read, or lacks structure?

You go back over the problem and its solution. You analyze it, might gain new insights, identify a flaw or an error. With this newfound wisdom, you restructure, reorganize and improve your solution. After a warm cup of coffee, you repeat the process once more, eventually, after a few iterations, you are satisfied with the phrasing and the clarity that it brings.

Notice, you went through a process of reading, understanding, reflecting, reasoning, refining and rephrasing your thoughts (e.g. the solution), then repeating those steps and reaching a higher level of understanding with each iteration. Is this process unique to writing code?

When you write any text -- even with non-fiction -- a great start is to "just write freely" (aka prewriting or outlining), let your thoughts flow, unfiltered, no resistance, undisturbed like a mountain creek. You braindump all your wisdom or understanding in a written format. Along the way you might even learn something, make an intereseting observation or have the occasional AHA moment. Like most people, if you read out loud what you have just written, you'll notice some spelling and grammer mistakes, a lack of structure, maybe you're repeating the same ideas in different words. It is in dear need of refinement.

One way you can go about it, is by asking yourself "What do I want to say?", then read your text once again and ask "Have I said what I wanted to say?" then you go about improving your text based on these reflections. Do you spot the similarities with writing code?

Writing code is writing the solution to [a problem that needs fixing](https://xkcd.com/1739/), only, you write the solution in a different language, a programming language. Programming languages are human creations, so they have strong similarities to our [way of thinking and writing](https://esolangs.org/wiki/Brainfuck). As you code, you probably follow many [steps of the writing process](https://www.lynchburg.edu/academics/writing-center/wilmer-writing-center-online-writing-lab/the-writing-process/). Can you become a better programmer, by improving your writing skills?

The human brain stores information in a tree-like structure, if you think about work, you have a whole bucket of information about your work. Within that work related bucket, you have a smaller bucket with information about coworkers. Again, that coworker bucket has an bucket about Bob and so on. When you recal Bob's annoying behaviour, you are reminded of your annoying aunt Elize who makes the same dreadful jokes. Wait ? Doesn't Elize fit in the "family" bucket ? The humain brain also keeps cross references across all the tree-like structure. Your brain is a multi-dimensional storage unit for your memories. When writing, you are converting multi-dimensional information into a one dimentional string of words. That is quite the achievement if you can do that properly on the first attempt!

It's only natural that you need to go back, re-read that text and make sure it  came out properly. The same happens when talking, sometimes you realized what you just said was incoherent, nonsense or incomplete. It normal that you need to revise, edit and correct the end result of your attempt to express information. Try to remember the last time you tried to explain a complex problem to a coworker which you are stuck with, did you ever had the answer come to you, as you were trying to [articulate the problem](https://en.wikipedia.org/wiki/Rubber_duck_debugging)?

You can improve your thinking, reasoning and understanding on any subject by writing your thoughts down, read them, revise them, and iterate. As you go through this process, your are structuring your thoughts, which is a feedback loop from your text to your brain, allowing for new connections to be made and to have those "aha" moments, without learning any new facts. Exactly like when you wrote that summary on that difficult subject at school. Reading, writing and thinking are all integrated. There is this fascinating initiative ["Writing Across The Curiculum"](https://wac.colostate.edu/repository/teaching/intro/include/) intended to help students to improve their thinking. As you attempt to write more clearly, your thoughts will become more clear.

This is not limited to writing actually, you might prefer visualizations instead. A whiteboard is an excellent equivalent where you can express your thoughts or any information on a blank canvas, analyze it, revise, and achieve more clarity on your thoughts.

Aah, there it is, *clarity of thought*, giving you the ability to communicate clearly, to express your thoughts clearly, to reason more clearly, and implicitly write code more clearly. Clarity of thought gives you a major advantage in any work you do as a software engineer: improved critical thinking, write cleaner code, write understandable emails, write effecient code reviews, express new ideas effectively, write a design document that makes sense, reason better and properly articulare your trade-off analysis. Very few are born with a talent for this, you can learn and develop this skill.

Pushing yourself to write your thoughts in a clear manner will give you a clearer understanding of the subect, as wel, learning useful new insights along the way. If you are a software engineer, you probably will still write more text than code in any given day, therefore writing advice works well for your daily work as for writing code (aka writing a solution). Some programming languages are not so near to natural languages (e.g. some functional languages), in that case, you could consider writing first pseudocode. My advice is non-exhaustive and informal, pick what works for you.

# Writing More Clearly

## The Reader
Some of the best and clearly written articles, are jargon articles that were even accessible to people from outside given jargon. Many TED talks discuss scientific topics, made accessible. Within the field of software engineering it is hard to agree on what constitutes a minimum general knowledge within the field. There are countless technologies, libraries, tools, languages and frameworks, making it impossible to all know the same things. In addition, majority of software engineers must communicate with non or semi technical stakeholders to get things done. There is no point to fight this. Mind the reader or target audience.

Reading Tip: [Rhetorical Situations](https://wac.colostate.edu/repository/teaching/intro/rhetoric/)

## The Writing Process

"What do I want to say?" Start with that question and write freely from there. Once you got that first outline you can reread it and work through your text iteratively, on global level, but also per paragraph/sentence:

### Guiding questions
* "What do I want to say?"
* "Did I say what I wanted to say?"
* "Is this sentence/paragraph/text clear to someone who knows nothing about the subject?"
* "What do I need to say next? Will it lead logically out of what I’ve just written?"
* "Is there any ambiguity for the reader?"

### Simplify
* Prune words and sentences that repeat or don't add value, be ruthless, if it does not help the reader, its just taking space.
  * Great writing is all about the power of the deleted word (Richard Bach).
* Trim any clutter or pompous writing.
* Rewrite if it doesn't work, don't be overly attached to every sentence you write.
* Choose short words over lengthy ones.
* TED talks are have a hard stop at 18 minutes so that speakers would prune  all the noise and clutter.

Don't be tempted by others their pompous or snobbish writing style. Especially academia suffers from this pretentious writing style. Writing in a short, clear style, takes more effort and skill than the academic or business cluttered writing. Simple writing doesn't mean a simple mind. One can argue this opposite, someone who can articulate things clearly, often thinks clearly and has little fog and clutter in their mind. A French mathematician and philosopher, Blaise Pascal said "If I had more time, I would have written a shorter letter".

### Iterate

* Iteration is king. This is the key differentiator from those who write once and don't look back in anything they do.
* When you do Test Driven Development you also do the bare minimum to make the test pass. Then you iterate on the implementation.
* When doing agile software engineering, you start with a base and iteratively built your solution.

Reading Tip: [The Writing Process](https://www.lynchburg.edu/academics/writing-center/wilmer-writing-center-online-writing-lab/the-writing-process/) but be weary for the paper/academic specific tips.

# Final Thoughts

As I am writing this article, I went through this process, collecting my multi-dimensional thoughts and ideas, attempting to express them in this one dimensonal format called text. I've gained many insights as I kept iterating over this article and my thoughts, resulting in a clearer and cohesive understanding. I can only hope you experience the fruits of my labour.

# Resources

* [WAC: Writing Across The Curriculum](https://wac.colostate.edu/repository/teaching/intro/)
* [WAC: Writing To Engage](https://wac.colostate.edu/repository/teaching/intro/wte/)
* [Writing To Learn](https://www.goodreads.com/book/show/53343.On_Writing_Well) by Willian Zinsser.
* [On Writing Well: The Classic Guide to Writing Nonfiction](https://www.goodreads.com/book/show/53343.On_Writing_Well) by William Zinsser.
* [Reasoning](https://www.goodreads.com/book/show/1645567.Reasoning) by Michael Scriven.
* [Ted Talks: The Official TED Guide to Public Speaking](https://www.goodreads.com/book/show/41044212-ted-talks?) by Chris J. Anderson.
