1. Foundations of Cryptography
Plaintext vs Ciphertext


Plaintext: Original data — could be a message, file, transaction.


Ciphertext: Encrypted form of the plaintext, generated via an encryption algorithm and key.


Keys


Secret/Private Key: Must remain confidential. Used for decryption (symmetric) or signing (asymmetric).


Public Key: Advertised openly. Used for encryption (to you) or verifying your signature.


Encryption Goals


Confidentiality → Prevents others from reading your data.


Integrity → Detects whether data has been altered.


Authenticity → Confirms the data origin (you).



2. Public Key (Asymmetric) Cryptography
Each key pair = Private key (SK) + Public key (PK).


In blockchain:


Your wallet’s SK signs transactions.


PK (or address derived from PK) is public to verify those transactions.



3. Why Randomness Matters
Crypto-safe randomness is critical for key generation & signatures.


Using math.random-style RNGs is unsafe: outputs are predictable & biased.


Insecure randomness can leak your private key (e.g., ECDSA nonce reuse attacks).


Always use a cryptographically secure pseudorandom number generator (CSPRNG).



4. Threshold Cryptography – Core Idea
Instead of one device holding the entire private key, split the secret among n participants such that:
Any t participants can collaborate to produce a valid signature or decrypt data.


Fewer than t cannot learn anything about the key.


This is usually built on Shamir’s Secret Sharing (SSS).

5. Shamir’s Secret Sharing (SSS)
Secret = polynomial value at x=0.


Dealer generates random polynomial of degree t-1.


Each share = polynomial evaluated at a unique x coordinate.


Reconstruction: Any t shares → Lagrange interpolation → recover secret.


Example (t=3):
java
CopyEdit
Secret s = f(0)
f(x) = s + a1*x + a2*x²
Shares:
P1 gets f(1)
P2 gets f(2)
P3 gets f(3)
...
Any 3 → reconstruct f(0)


6. From Secret Sharing to Distributed Key Generation (DKG)
Problem: SSS needs a dealer who knows the secret — not decentralized.


DKG: Every participant:


Generates their own random secret polynomial.


Secret-shares it to everyone else.


Final key share = sum of shares from all others.


Property: If even 1 participant is honest, the resulting group secret is truly random and unknown to anyone.

Step 6 recap (DKG) in one minute
Distributed Key Generation (DKG) is how a group creates a single cryptographic key without any one person ever knowing it. Everyone contributes randomness; everyone ends up holding a share of the secret. Later, any t of n participants can cooperate to use the key (sign or decrypt), but fewer than t learn nothing.
Mechanically, DKG is built from Shamir’s Secret Sharing (everyone shares a random polynomial; shares add up). The upshot: there is a “group private key” conceptually, but it never lives on any device.

What is “BLS” (step 7)?
BLS = Boneh–Lynn–Shacham signatures (2001). They’re a digital signature scheme that’s unusually friendly to aggregation and thresholds.
Why people love BLS
Short & deterministic: one compact signature; same message + key ⇒ same signature (no random nonce).


Effortless aggregation: if multiple people sign the same message, you can algebraically combine their signatures into one signature that verifies against the sum of their public keys. This linearity is gold for threshold signatures.


Where BLS lives (the math objects)
BLS uses pairing-friendly elliptic curves and a special function called a bilinear pairing:
Three cyclic groups of prime order qqq: G1G_1G1​, G2G_2G2​, GTG_TGT​.


A pairing e:G1×G2→GTe : G_1 \times G_2 \to G_Te:G1​×G2​→GT​ with bilinearity:
 e(aP, bQ)  =  e(P, Q)abe(aP,\, bQ) \;=\; e(P,\, Q)^{ab}e(aP,bQ)=e(P,Q)ab
 (Think: linear in each input.)


You don’t need to compute points by hand; libraries do it. But bilinearity is what makes threshold/aggregation clean.
Plain BLS signature (no threshold yet)
KeyGen: pick secret sk∈Zqsk \in \mathbb{Z}_qsk∈Zq​. Public key PK=sk⋅GPK = sk \cdot GPK=sk⋅G (a curve point).


Hash-to-curve: map the message mmm to a curve point H(m)H(m)H(m).


Sign: σ=sk⋅H(m)\sigma = sk \cdot H(m)σ=sk⋅H(m) (scalar–point multiplication).


Verify (using the pairing):
 e(σ, G)=?e(H(m), PK)e(\sigma,\, G) \stackrel{?}{=} e(H(m),\, PK)e(σ,G)=?e(H(m),PK)
 Because e(sk⋅H(m), G)=e(H(m), sk⋅G)e(sk \cdot H(m),\, G) = e(H(m),\, sk \cdot G)e(sk⋅H(m),G)=e(H(m),sk⋅G).


That’s it. Simple structure, thanks to bilinearity.

Threshold BLS (step 8): how the group signs without ever rebuilding the key
After DKG, each participant iii holds a share skisk_iski​ of the (never-assembled) group secret.
To sign a message mmm:
Everyone computes the same H(m)H(m)H(m) (hash-to-curve).


Any t participants produce partial signatures:
 σi  =  ski⋅H(m)\sigma_i \;=\; sk_i \cdot H(m)σi​=ski​⋅H(m)
A combiner computes Lagrange coefficients λi\lambda_iλi​ (numbers derived from the signers’ share indices) and combines:
 σ  =  ∑i∈Sλi σi\sigma \;=\; \sum_{i \in S} \lambda_i \, \sigma_iσ=i∈S∑​λi​σi​
 Result σ\sigmaσ is a normal BLS signature that verifies against the group public key.


Key points:
The group private key never exists on any device.


Any t-out-of-n subset can produce the same final signature (deterministic).


On-chain or to verifiers, it looks like one ordinary signature—cheap and private (unlike N-of-M multisig transactions that reveal all signers).



Threshold encryption (step 9): same idea, but for decryption
You can also encrypt to the group’s public key. To decrypt:
Any t participants provide partial decryptions.


A combiner uses Lagrange interpolation to recover the plaintext (or, more commonly, a symmetric key that decrypts the bulk payload).


This enables sealed-bid auctions, time-locked documents, front-running/MEV-resistant transactions, and social recovery (friends hold shares that can help you recover access without any single friend holding your whole key).

Why do we need any of this? (Why “one key” or basic multisig often isn’t enough)
Single key (one device, one secret)
Single point of failure: lose it → funds gone; malware steals it → funds gone.


Operational risk: hardware dies; admin leaves; device seized.


Compliance & custody: institutions often need multi-operator approval without any one operator having unilateral power.


Basic on-chain multisig (e.g., N-of-M wallet contracts)
Cost & UX: multiple on-chain signatures = higher fees, slower UX.


Privacy: anyone can see the policy and which keys signed.


Compatibility: some protocols/tools expect a single L1 signature (not a contract call).


Complexity across chains: different multisig semantics or contract availability.


Threshold signatures vs multisig
Threshold outputs one normal signature—looks like a regular account.
 → Cheaper, private, widely compatible, and policy-agnostic on-chain.


Security without a single key ever existing.
 → Compromise requires t machines/people, not one.



Where is this used in the real world?
Ethereum ecosystem


BLS12-381 is the signature curve for the beacon chain (validator signature aggregation).
 Threshold BLS is natural for DVT (Distributed Validator Tech) like Obol/SSV—validator keys split across nodes so one machine going down or being hacked doesn’t kill you.


MEV protection / encryption research & prototypes use threshold decryption to reveal transactions only after ordering.


Randomness beacons
 Networks like drand use threshold BLS to produce unbiased, verifiable randomness at fixed intervals. Any t nodes can sign “the round,” and the combined signature is the random output (plus a proof).


Blockchains that use BLS signatures
 Filecoin, Chia, and others leverage BLS for efficient aggregation; threshold forms are used for committees or custody.


Custody / MPC wallets
 Institutions (exchanges, funds) use threshold/MPC to hold assets: no single HSM/operator can move funds alone.

