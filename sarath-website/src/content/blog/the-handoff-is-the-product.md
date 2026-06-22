---
title: "The Art of Technical Decision-Making"
description: "How to evaluate trade-offs, align stakeholders, and make engineering decisions that stand the test of time."
pubDate: 2025-03-12
tags: ["engineering", "leadership", "architecture"]
---

Most tech products we have interacted with so far have been deterministic in nature.

At their core were APIs, business logic, and algorithms that behaved predictably. If something broke, reverse engineer and trace it.

That has changed. With AI now sitting inside the core of products, the behaviour is becoming probabilistic. Your product is no longer just executing logic - it is generating likelihoods.

This changes product design - how you design the handoff between human judgment and machine output can make or break your product.

- What context does the AI model get?
- What happens when it is wrong?
- Who owns the decision?
- At what point does the human step in?

These are not edge questions anymore. They are central to the product.

A lot of AI adoption fails not because the model is weak, but because the handoff is poorly designed.

The model can be probabilistic - not the surrounding system. 