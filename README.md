# Quantum Dice

A simple dice roller app using quantum computing to generate random numbers.

## Project Description

Is a Dungeons and Dragons style dice roller a good use of a quantum computer? I sure think so.

Computers as we know them (aka classical computers) can, at best, generate pseudo-random numbers. Quantum computers, using uniquely quantum properties, can generate truly random numbers. This project uses random numbers generated from IBM Q's quantum systems to provide a random sequence for a simple dice rolling app.

## Generating the quantum random numbers
This project uses a sequence of random numbers returned from an IBM Q system to the qiskit script, currently titled "randomNumGenerator.py". If you run the experiment as is, you will get "NaN" for each dice role because you will need to generate the sequence of random numbers before you can get results. I recommend running that script with the IBM Q Experience. Copy the contents outputArray into the corpus.js file. 
