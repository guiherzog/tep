// Autor: Guilherme Herzog
// Disciplina: TEP 2017.2
#include <iostream>
#include <cstring>
#include <algorithm>
using namespace std;

int totalPermutations = 0;

void calculateWordAnagrams(char w[], int size, int n){
	if (n == size){
		// cout << w << '\n';
		totalPermutations++;
	} else {
		for (int i = n; i <= size; i++)
		{
			// Verify if is a vowel.
			if (strchr("AEIOU", w[0])){
				return;
			}

			// // Verify if first ocurrence of A is before first ocurrence of L;			
			if (strchr(w, 'A') > strchr(w, 'L')){
				return;
			}

			// Verify if there is any ocurrence of RP or PR.
			if (strstr(w, "PR") && strstr(w, "RP")){
				return;
			}

			swap(w[i], w[n]);
			calculateWordAnagrams(w, size, n+1);
			swap(w[i], w[n]);
		}
	}
}

int main(void)    
{
	// Initialize and copy the string to an array.
	char word[] = "PARALELA";
	
	word[1] = 1;
	word[3] = 2;
	word[7] = 3;

	word[4] = 4;
	word[6] = 5;

	int length = strlen(word);
	calculateWordAnagrams(word, length-1, 0);
	cout << totalPermutations << '\n';
	return 0;
}