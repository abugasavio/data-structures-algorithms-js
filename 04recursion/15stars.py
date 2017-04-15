def d(n):
    if n == (n + 1):
        return
    print('*' * n)

    d(n - 1)


d(4)

