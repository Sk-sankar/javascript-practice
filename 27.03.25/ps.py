# palindrome 

num=90
# rever=str(num)[::-1]
# if rever==str(num):
#     print("yes")
# else:
#     print("no")
# print("yes" if str(num)==str(num)[::-1] else "no")

# arr=[32,3,2,33,22,33]
# for i in arr:
#     if str(i)==str(i)[::-1]:
#         print(f"{i} is palindrome")
#     else:
#         print("no")


#prime

def prime(num):
    if num <=1:
        return False
    for i in range(2,int(num**0.5)+1):
        if num%i==0:
            return False
    return True

def check(arr):
    em=[]
    for i in arr:
        if prime(i):
            em.append(i)
    return em
print(check({22,32,32,31}))
