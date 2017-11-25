// Autor: Guilherme Herzog
// Disciplina: TEP 2017.2
#include <stdio.h>
#include <math.h>
#include <time.h>

int isPerfectSquare(long long int n) {
	if (sqrtl(n)*floor(sqrtl(n)) == n){
		return 1;
	}
	return 0;
}

// Naive solution.
void printN(int d) {
	int j = 1;
	long long int i = 0, nextSum = 0;
	
    while (j <= d){
    	// While the next number is not a square number.
    	do {
    		nextSum += i;;
    		i++;
    	} while (!isPerfectSquare(nextSum));
    	j++;
    	printf("%lli\n", nextSum);
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