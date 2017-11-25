def collatz(x):
	if x % 2 == 0:
		return x / 2
	else:
		return 3*x + 1;

def size_path(n):
	count = 0
	while n != 1:
		# Verify in O(1) if collatz(n) is known.
		alreadyKnown = n in knownPaths
		if alreadyKnown:
			return count + alreadyKnown;
		# If is not known, calculate it.
		else:
			n = collatz(n);
		count += 1
	knownPaths[n] = count
	return count
# Input
minX = 1
maxX = 10000

# Main
knownPaths = {}
biggestSize = 0
element = 0
for i in range(minX,maxX):
	size = size_path(i);
	if biggestSize < size:
		element = i
		biggestSize = size

print(biggestSize)
print(element)