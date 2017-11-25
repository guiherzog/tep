import random
# Sort a number depending on its prob. distribution.
def sorteie(nSides, distribution):
	vetor = []
	for i in range(0, nSides):
		while distribution[i] > 0:
			vetor.append(i+1);
			distribution[i] -= 1;
	sorteado = random.randrange(0,len(vetor))
	return vetor[sorteado];

# Calculate diference between Probability and Conditional Probability.
def calcProbs(rounds, dist):
	# print(dist);
	experiments = 0; 
	xEqualsZ = 0;
	xEqualsZCond = 0;
	xNotEqualsY = 0;

	for i in range(0,rounds):
		# print(dist)
		X = sorteie(len(dist),dist[:]);
		Y = sorteie(len(dist),dist[:]);
		Z = sorteie(len(dist),dist[:]);

		if (X == Z):
			xEqualsZ += 1
		if (X != Y):
			xNotEqualsY += 1
			if (X == Z):
				xEqualsZCond += 1
		experiments += 1

	probXeqZ = xEqualsZ/float(experiments);
	probXeqZCond = xEqualsZCond/float(xNotEqualsY);

	return probXeqZ, probXeqZCond

# Main
uniformDistribution = [1,1];
nonUniformDistribution = [1,10];

# Teste com distribuição uniforme.
probXeqZ, probXeqZCond = calcProbs(10000, nonUniformDistribution);
print('Results using a Non-Uniform Prob. Distribution:')
print(f'P(X = Z):\t\t{probXeqZ} \nP(X = Z | X != Y): \t{probXeqZCond}');


# # Teste com distribuição não-uniforme.
probXeqZ, probXeqZCond = calcProbs(10000, uniformDistribution);
print('Results using a Uniform Prob Distribution:')
print(f'P(X = Z):\t\t{probXeqZ} \nP(X = Z | X != Y): \t{probXeqZCond}');
