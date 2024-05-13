---
title: Everything-As-Code brings Living Documentation and better AI experiences
summary: By adopting *-as-code methodologies you can achieve true living documentation and an improved AI experience.
date: 2017-09-21
tags: 
  - IaC
  - DevOps
  - Automated Documentation
  - Living Documentation
  - Policy-As-Code
  - Infrastructure-As-Code
---

# Intro

In the early days, our code repositories just contained application code. Plain and simple, single purpose. 
As time went by, "application configuration files" became a thing. 
Linting came around the corner and suddenly we had "linting configuration files".
CI/CD pipelines started using a declarative model and "pipeline definition files" were invented.
Let's add "infrastructure definition files" (Infrastructure-As-Code) and also some "policy definition files" (Policy-As-Code) for the fun of it.

We can see a solid trend of this *-as-code (Everything-As-Code) methodology which results in many additional metadata files in our code repository allowing for greater automation.

Aside of obvious purpose of each of these metadata files, do they have any other additional value? Just fill up disk space? Create an impressive file tree?

# Documentation

Did you forget to document any of it? Yes? Who cares, right? 
Just look at the code or the repo, all the answers are there! 
Why would we have to put additional effort to duplicate all this knowledge in written format? 
So we can forget about it?

Don't we hate documentation anyway? 

Yet, then that non-developer person comes along and asks me "Is this change already in production?", "What is the data contract of that?", "What is authorization rule to access this data?". 
Ugh, No counter-strike match during break. 

# Be Lazy

How can we automate this?
Remember, our code repository is full of these metadata/definition/config files containing most of the answers. What do all of these files share? They're machine readable (JSON, YML, XML, ...), can we do something with that? I spidey sense automation opportunities. 

* Need a network diagram? Can we not generate one from our IaC files?
* Need to explain the authorization rules for an entity? Why not generate a human readable format from policy-as-code files?
* Need to document the share a data contract? Generate that from the source code.
* Need to document which services are listening to a specific event? Why not generate a list based on which services have permissions to read certain event streams?
* Need a class diagram? Why not generate from the source code a diagram-as-code?

# Human Readable View

By having all this information in machine-readable files, we have the "data models" already at our disposal. Aside of maybe some data model transformation, we can easily generate various views from these data models. For the default, non developer stakeholder, generating human readable web page documentation.

# Knowledge Graph View

Can we not just pipe these data models in knowledge graphs? Allowing us to see relationships within and across projects even ?

Azure Graph Explorer..

pan-repo information

# AI View

If we can pipe these data models in knowledge graphs...  and AI likes knowledge graphs... Then it should make it easier for general AI (ChatGPT) or Developer AI tooling to use it.

Hell, many current developer AI tools currently probably already scran through these files.

pan-repo information

# Benefits

* Up-to-date knowledge.
* Bring the information closer to the stakeholder who has interest in it.
* Pan-repo information and overview.


# Resources

* https://github.com/microsoft/ps-docs
* https://betterprogramming.pub/automate-terraform-documentation-e9839deceb6e
* https://www.redpill-linpro.com/techblog/2021/02/11/terraform_documentation_with_terraform_docs.html
* https://www.linkedin.com/pulse/documenting-policies-code-jan-varga-jjaoe
* https://www.reddit.com/r/Kotlin/comments/18cbygl/do_you_think_we_need_an_automatic_code/