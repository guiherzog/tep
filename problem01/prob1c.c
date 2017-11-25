// Autor: Guilherme Herzog
// Disciplina: TEP 2017.2
#include <stdio.h>
#include <math.h>
#include <time.h>

// Third solution using a recurrence function.
void printN(int d) {
	
	long long int prevprevN = 0, prevN = 1, currentN = 0;
	printf("%lli\n%lli\n", prevprevN, prevN);

	int i = 2;
	while (i < d){
		currentN = 34*prevN - prevprevN + 2;
		prevprevN = prevN;
		prevN = currentN;
		i++;
		printf("%lli\n", currentN);
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