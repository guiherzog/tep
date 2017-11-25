from random import shuffle
from itertools import combinations
from itertools import permutations

# Input
n = 8
k = 5 

iterations = 0
exit = False
# Create a sequential array
array = list(range(1, n+1))
subset = combinations(array, k)
permutationsOfCombinations = {} 

def sortear(n, k, array):
	shuffle(array)
	result = []
	for i in range(1,k+1):
		result.append(array.pop())
	return result

def checkEmpty(sortedSet):
	if (not permutationsOfCombinations[sortedSet]):
		return True
	return False
# Main
# Create
for i in subset:
	permutationsOfCombinations[i] = list(permutations(i, k))
	print('Combination:', i)
	for j in permutationsOfCombinations[i]:
		print(j)
	print('----')
	
while (not exit):
	# Get a random subset.
	randomSet = sortear(n, k, array[:])
	# print('Random Set', randomSet)

	# Adds one to the counter.
	iterations += 1

	# Print # of iterations if they are too high.
	if (iterations % 10000 == 0):
		print('Iterations done:', iterations)

	# Converts and sort and random set.
	sortedSet = randomSet[:]
	sortedSet.sort()
	# print('Sorted Set', sortedSet)

	# Verifies if the random set is in the list.
	if(tuple(randomSet) in permutationsOfCombinations[tuple(sortedSet)]):
		permutationsOfCombinations[tuple(sortedSet)].remove(tuple(randomSet))
		# Check if this last list of permutations is empty after removing a tuple
		if (checkEmpty(tuple(sortedSet))):
			exit = True
# Print # of iterations
print('Total iterations to sort all permutations:', iterations)
