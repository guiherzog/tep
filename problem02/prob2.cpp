// Autor: Guilherme Herzog
// Disciplina: TEP 2017.2
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(void)    
{
	// Random seed initialization.
   	time_t t;
	srand((unsigned) time(&t));

	int n;
    printf("Enter the vector size:");
    scanf("%d", &n);

    // Generate array of random numbers;
    int a[n];
    for (int i = 1; i <= n; ++i){
        a[i] = rand() % 9999;;
    }

    int k;
    printf("Enter K to select the K biggest numbers of this array:");
    scanf("%d", &k);
    
    int* kBiggest = quickselect(a, k);

    for (int i = 1; i <= n; ++i)
    {
    	printf("%d\n", a[i]);
    }
}

int* sortselect(int a[], int k) {
	sort(a.begin, a.end);
}

int* quickselect(int a[], int k) {
	int biggest[k];

	for (int i = 0; i < k; ++i)
	{
		a[k]
	}
}