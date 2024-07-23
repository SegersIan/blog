---
title: TODO
summary: TODO
date: 2024-08-23
tags:
  - Programming
---

# Ideation

## Target Audience

* software engineers and technologists

## What do I want to say ?

* The hidden value of
  * Refactoring code
  * Writing down a DESIGN/RFC/ADR
  * Blogging (but do it well)
* How does this all fit in a bigger narative or concept / BENEFTS
  * Learning to think better
  * Clarity on your thoughts and understanding
  * Better communication
  * Reasoning
* Introduce the iterative thinking process
  * Be careful with this one
* Similarities
  * Rubber Ducking
  * Clean code
* Tips
  * On How to improve
    * Less is more
    * Linear built up
    * Avoid Jargon
    * Should be accessible outside the field
* Others
  * Metacognition (https://en.wikipedia.org/wiki/Metacognition)
  *  thinking about thinking
  * Also used in therapy btw, but don't go too deep, we want to be accessible and just gently nudge on this.
* Writing Across The Curriculum
* Accessible pieces about science

* Unveiling
  * Clean code
  * Lean
  * Agile
  * Refining


# Structure

* Tense: Current
* Preposition: You ?

## Introduction


// TODO: See quotes of the writing KB


Have you ever thought about your thinking? How it works, what can we learn from it, and perhaps, how we can take advantage of it as software engineer?

Lets rewrite some simple code:
```js
console.log(1);
console.log(2);
console.log(3);
```
This piece of code does exactly what you want, print the numbers 1, 2 and 3. You become anxious, and feel urge to rewrite:
```js
for(var number = 1; number < 4; number++){
    console.log(number);
}
```
You are told about a change of requirements to "print the numbers 1 and 3" and get to work:
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
*Sigh*, why use the world "even" while the only word "odd" is mentioned in your requirement. The real final version:
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

Great, you are satisified -- or not at all -- with the outcome. Let's reflect on the thinking process, but we shall keep overengineering out of scope for the sake of focus. You were rewriting your code, or "rephrasing your code".

## The (Rewriting) Process

Your code is a text that describes your solution to a problem. Why do you rephrase your code, or anything at all? One good reason being, you are not satisfied with the current wording of the text (code) that describes your solution. It feels messy and uncomfortable, maybe it's too verbose, hard to read, or lacks structure?

You go back over the problem and its solution. You analyze it, might gain new insights, identify a flaw or spot errors. With this newfound wisdom, you restructure, reorganize and improve your solution. After a warm cup of coffee, you repeat the process, eventually, after a few iterations, you are satisfied with the phrasing and the clarity of it.

Notice, you went through a process of understanding, reflecting, reasoning, refining and rephrasing your thoughts (e.g. the solution), then repeating those steps and reaching higher clarity with each iteration. Is this unique to writing code?

When you write -- even for non-fiction -- a great approach is to start of with "just writing freely", let your thoughts flow, unfiltered, no resistance, undisturbed like a mountain creek. Next, you reread, wonder "Have I said what I wanted to say?", "Is it clear what I'm trying to say?", "Am I being too verbose?". You prune words and phrases, you rephrase, reread and repeat the process a coouple of times. You are now doing exactly the same as you are with coding.

## Taking Advantage

Writing can help clear your thoughts. But the art is not in just writing any text, the secret is in making your text clear, structured, accessible to anyone to read. This takes skill. The hard part isn’t the writing, the hard part is the thinking that goes with it (*Toni Morrison*). Reading, writing and thinking are all integrated (*Kevin Byrne*).

One technique which is excellent to write more clearly is by making the text as short as humanly possible. A lack of words can comfortably obscure a lack of understanding from yourself. You kind of get it, but there are loose ends, maybe conflicting statements, your thoughts might be a mess. Let alone that others will understand. By trimming away the fat, down to the bare essence, you will gain a clearer understanding of your thoughts. It is no coincidence that TED talks have a hard limit of 18 minutes. Speakers are forced to aggresively cut their script, with captivating talks as a result.

Blaise Pascal, a French mathematician and philosopher, said "If I had more time, I would have written a shorter letter".

Our brain works mult dimensional int one dimenson string of words // TODO, but need resourcess.




// Remember ... What do I want to say ? Say it.... Did I say it? Is there logical build up. But it's ok to just first write, let it flow, freeflow of thoughts.

// Remember, you got this tree structure of thought with cross references, multi dimensional thoughts that you try to express in a one dimensional string of words.


// <What we applied here, is some form of unscientific metacogniztion, or thinking about thinkig>


   * What can we learn from this? insights



## Further enumerate examples of where you can apply and benefit

* List of good examples how you can applu

## Closure

Look for nearest exit here.... Something that makes them think... reflect

* Programmers are non-fiction writers.
* Writing can help your way of thinking, cricitcal thinking and reasonong
* Writing can clear your thoughts


## Resources

* [On Writing Well: The Classic Guide to Writing Nonfiction](https://www.goodreads.com/book/show/53343.On_Writing_Well) by William Zinsser.
* [Reasoning](https://www.goodreads.com/book/show/1645567.Reasoning) by Michael Scriven.
* [Ted Talks: The Official TED Guide to Public Speaking](https://www.goodreads.com/book/show/41044212-ted-talks?) by Chris J. Anderson.
* [WAC: Writing Across The Curriculum](https://wac.colostate.edu/repository/teaching/intro/)
* [Writing To Learn](https://www.goodreads.com/book/show/53343.On_Writing_Well) by Willian Zinsser.
