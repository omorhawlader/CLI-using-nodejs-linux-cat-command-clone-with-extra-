#include <stdio.h>

int main(int argc, char *argv[])
{
    for (int i = 0; i < argc; i++)
    {
        printf("argv number is %d and argument is %s\n", i, argv[i]);
    }
    // printf("my name is omar from c argc %d", argc);

    return 0;
}