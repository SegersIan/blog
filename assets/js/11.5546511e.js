(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{212:function(e,t,a){"use strict";a.r(t);var s=a(28),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"what-i-would-teach-about-databases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-i-would-teach-about-databases"}},[e._v("#")]),e._v(" What I Would Teach About Databases")]),e._v(" "),a("p",[e._v("(Published originally 17.10.2019 on "),a("a",{attrs:{href:"https://itnext.io/what-would-i-teach-about-databases-f02417b188d2",target:"_blank",rel:"noopener noreferrer"}},[e._v("Medium"),a("OutboundLink")],1),e._v(")")]),e._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),a("p",[e._v("As I was discussing with a Software Engineering student, about learning SQL at school and the lack of any other DB engines, I asked myself “What would I teach about Databases”, if I would be lecturing aspiring Software Engineers?")]),e._v(" "),a("p",[e._v("Based on my current level of knowledge. I am by far a DB expert nor administrator. But as my interest leans towards Solution Architecture, I felt motivated to write about my thoughts on what topics would be useful to teach in today’s Software Engineering landscape.")]),e._v(" "),a("p",[e._v("The majority of universities in Europe (based on talking with multiple Engineers) their core focus still remains on SQL. Although I am a strong advocate to keep SQL in the curriculum, I do feel that universities should explore more (upcoming) DB technologies and challenge students on creating a mindset on being able to choose a DB engine.")]),e._v(" "),a("p",[e._v("It goes without a saying that I can’t speak for all universities their curriculum, some might be more progressive, others solely focussing on pure SQL and relation databases. So I’ll be covering some topics I’d considering worth amending to a curriculum and also (probably) existing topics to emphasize their importance.")]),e._v(" "),a("h2",{attrs:{id:"topic-cap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#topic-cap"}},[e._v("#")]),e._v(" Topic: CAP")]),e._v(" "),a("p",[e._v("At my university, we touched quickly the CAP theorem (if I recall well). But we went over it quite fast. It’s almost pointless to discuss if one is only teaching you one DB engine. There is often a lot of emphasizing on the ACID characteristics, which are important, but the CAP theorem is very useful to understand the core characteristics of a DB engine.")]),e._v(" "),a("p",[e._v("Learning a few examples of different DB engines with their respective orientation on the CAP triangle is very educational to be aware of the drawbacks, challenges, and implications of choosing a specific DB engine.")]),e._v(" "),a("h2",{attrs:{id:"topic-consistency-models"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#topic-consistency-models"}},[e._v("#")]),e._v(" Topic: Consistency Models")]),e._v(" "),a("p",[e._v("There are more than just 2 consistency models out there (Strong Consistency vs. Eventual Consistency). There is a spectrum between these two. It is very useful to understand what type of consistency models exist, and learning to determine which consistency models you need, depending on the use cases of your application.")]),e._v(" "),a("p",[e._v("This is an interesting notion to learn when working with databases. You need to learn to understand the consistency models you need or prefer based on the use cases, helping you understand what databases you should consider. There is an amazing talk by Doug Terry who explains some of the different consistency models which are out there and how to understand which matter to your use case.")]),e._v(" "),a("h2",{attrs:{id:"topic-sql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#topic-sql"}},[e._v("#")]),e._v(" Topic: SQL")]),e._v(" "),a("p",[e._v("Goes without a saying. As SQL is still a standard and very widely used in the industry, I just wanted to point out that this is by far a deprecated topic. Learning to use SQL (preferably DB Engine agnostic), execution plans, and performance are all still relevant subjects and helpful to understand the internals of a database.")]),e._v(" "),a("h2",{attrs:{id:"topic-nosql-databases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#topic-nosql-databases"}},[e._v("#")]),e._v(" Topic: NoSQL Databases")]),e._v(" "),a("p",[e._v("At my university, we only covered basically SQL databases. The idea of a “Non-SQL” database was not mentioned or considered an “obscure niche”.")]),e._v(" "),a("p",[e._v("The idea is not to cover many different databases at a deep level. Rather, scout the horizon, see what types are out there. Having a look at real-world scenarios, challenges, and benefits!")]),e._v(" "),a("p",[e._v("Simple small “Hello-World” type of examples would be sufficient, so as a student, you will understand, that there is so much more out there than just SQL.")]),e._v(" "),a("h2",{attrs:{id:"topic-cloud-managed-databases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#topic-cloud-managed-databases"}},[e._v("#")]),e._v(" Topic: Cloud/Managed Databases")]),e._v(" "),a("p",[e._v("Cloud databases are definitely the “newest” kids on the block (e.g. DynamoDB, Cosmos DB, …). The core focus here would not be the “everyday usage” but rather learning the concepts and the design behind these databases.")]),e._v(" "),a("p",[e._v("These databases are engineered and designed to provide “High Availability” and “High Scalability”. Therefore, there are many interesting concepts to cover like “multi-master”, “sharding keys”, “read-replicas”, “change-feeds” and “disaster recovery”. I would only touch the surface of these topics probably, but enough to give great insight into databases “at scale” and the impact it has on your operations, consistency model, and preferred CAP orientation.")]),e._v(" "),a("h2",{attrs:{id:"topic-combining-databases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#topic-combining-databases"}},[e._v("#")]),e._v(" Topic: Combining Databases")]),e._v(" "),a("p",[e._v("After my studies, I had the (naive) impression that you’d probably always have just one DB in your solution. Why need more? But in reality, this is rarely true. Many architectures nowadays consist of multiple databases, each fulfilling a specific need.")]),e._v(" "),a("p",[e._v("For example, having an SQL database as your “single source of truth”, and using an “In-Memory” database for “caching” recurring queries to offload your SQL database load. Important to remark to the student here is that you don’t need to overengineer a solution from the start either.")]),e._v(" "),a("p",[e._v("It is important though for the student to learn, that it’s perfectly normal for different databases to live side-by-side, each fulfilling distinctive roles, based on the requirements.")]),e._v(" "),a("h2",{attrs:{id:"topic-about-your-database-schema"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#topic-about-your-database-schema"}},[e._v("#")]),e._v(" Topic: About your Database Schema")]),e._v(" "),a("p",[e._v("An excellent subject in SQL type of databases is the exercise of Normalizing and Denormalizing your database schema design. It’s a must to teach one to challenge their database schema design, and train them to become better at it.")]),e._v(" "),a("p",[e._v("In a SQL database, the schema is “within” the DB itself, often being very close to the domain model of their solution. With MongoDB for example, you can move the “Schema Design” in your codebase. This sparks an interesting discussion;")]),e._v(" "),a("ul",[a("li",[e._v("Is it better to have your schema design within your application code (respecting the Clean Architecture idea that “the DB is a detail”)? Making your architecture more DB agnostic.")]),e._v(" "),a("li",[e._v("Or does it make sense to have the schema of your data model in the database? Creating a tighter coupling between your Application code and Database, but gaining more data consistency.")])]),e._v(" "),a("p",[e._v("I won’t tell and defend my opinion here, but I would like to challenge students to think about such concerns.")]),e._v(" "),a("h2",{attrs:{id:"topic-choosing-the-right-database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#topic-choosing-the-right-database"}},[e._v("#")]),e._v(" Topic: Choosing the Right Database")]),e._v(" "),a("p",[e._v("One of the most important topics in my opinion! If I would teach about databases, the focus would be “What is the right database…for me?”.")]),e._v(" "),a("p",[e._v("Most of the topics I covered are intended to teach the student the right combination of skills, to form a well educated and objective answer by themselves. Teaching a good thought process for making the right, educated decision for a technology stack. Compared to any hype-driven mindset.")]),e._v(" "),a("p",[e._v("It is important to first understand your solution’s use cases, their actual requirements (e.g. instead of arbitrarily concluding that a user always needs Strong Consistency). Going from understanding your requirements, one can consider what consistency models they need and where the database should be oriented on the CAP spectrum to accommodate requirements.")]),e._v(" "),a("p",[e._v("Should you consider “High Availability”, “Disaster Recovery” and really small response times? If so, what databases are there and what impact might that have on the CAP characteristics? You will have to balance the required features and characteristics of a database to accommodate your needs.")]),e._v(" "),a("h2",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),a("p",[e._v("The idea is not that a fresh graduate can answer all these questions by themselves, but rather to teach the right attitude and mindset on choosing their stack in an objective way. Understanding that every database is a balance between the pros and the cons. Learn to choose on your actual requirements, learn to have a critic mind, learn to understand the “why”")])])}),[],!1,null,null,null);t.default=o.exports}}]);