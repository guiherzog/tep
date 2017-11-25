// Autor: Guilherme Herzog
// Disciplina: TEP 2017.2
#include <stdio.h>
#include <math.h>
#include <time.h>

// Second solution
void printN(int d) {
	int j = 1;
	long long int index = 1, nextSum = 0, indexSquare = 0, square = 0, triangular = 0;
	
	// Imprime o zero, pois cumpre os reqs.
	printf("%lli\n", triangular);
	j++;

    while (j <= d){
		triangular += index;

		while (square < triangular) {
			square += indexSquare*2 + 1;
			indexSquare++;
		}

		if (triangular == square){
			printf("%lli\n", triangular);
			j++;
		}
		index++;
    }

}

int main(void)    
{
	int n;
	clock_t begin = clock();

    printf("Enter how many square triangular numbers you want to find:");
    scanf("%d", &n);
    printN(n);
 
	clock_t end = clock();
	double time_spent = (double)(end - begin) / CLOCKS_PER_SEC;
	printf("Time spent: %fs \n", time_spent);
    return 0;
}