import random

vetor = []
def sorteie(nSides, dist):
	for i in range(0, nSides):
		while dist[i] > 0:
			vetor.append(i+1);
			dist[i] -= 1;
	sorteado = random.randrange(0,len(vetor))
	return vetor[sorteado];

# Main
dist = [15,85];
winA = 0;
winB = 0;

for i in range(1,10000):
	result1 = sorteie(len(dist),dist);
	result2 = sorteie(len(dist),dist);
	result3 = sorteie(len(dist),dist);
	result4 = sorteie(len(dist),dist);

	if (result1 == result2 and result3 == result4):
		winA += 1;
	if (result1 == result2 and result1 == result3):
		winB += 1;

print(f'Score A={winA} B={winB}, the diff between them was {winB-winA}')