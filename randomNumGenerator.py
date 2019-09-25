%matplotlib inline
# Importing standard Qiskit libraries and configuring account
from qiskit import QuantumCircuit, execute, Aer, IBMQ, ClassicalRegister, QuantumRegister
from qiskit.compiler import transpile, assemble
from qiskit.tools.jupyter import *
from qiskit.visualization import *
from qiskit.quantum_info import Pauli, state_fidelity, basis_state, process_fidelity

# Loading your IBM Q account(s)
provider = IBMQ.load_account()


qc = QuantumCircuit(5, 5)
qc.h(0)
qc.h(1)
qc.h(2)
qc.h(3)
qc.h(4)
qc.measure([0, 1, 2, 3, 4], [0, 1, 2, 3, 4]) 
    
# decide on a system and how many times to send the circuit
backend = provider.get_backend('ibmq_ourense')
shots = 1024
job = execute(qc, backend, shots=shots, memory=True)

#we want to see results independently, instead of as a probability
result = job.result()
memory = result.get_memory()

# need an array to drop all the results into
outputArray = []

#convert results to int and drop into array
for x in range(0, shots):
    converted = int(memory[x], 2)
    outputArray.append(converted)

# copy returned values from outputArray into corpus.js    
print(outputArray)
