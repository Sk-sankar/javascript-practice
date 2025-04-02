# def bubble(arr):
#     n=len(arr)
#     for i in range(0,n):
#         for j in range(0,n-i-1):
#             if arr[j]>arr[j+1]:
#                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
    
#     return arr

# print(bubble([4,25,43,22,3]))


# def selection(arr):
#     n=len(arr)
#     for i in range(0,n):
#         mid=i
#         for j in range(i+1,n):
#             if arr[j]<arr[mid]:
#                 mid=j
#         if mid !=i:
#             [arr[i],arr[mid]]=[arr[mid],arr[i]]
    
#     return arr

# print(selection([5,3,62,53,2]))


# def insertion(arr):
#     n=len(arr)
#     for i in range(1,n):
#         temp=arr[i]
#         j=i-1
#         while j>=0 and arr[j]>temp:
#             arr[j+1]=arr[j]
#             j=j-1
#         arr[j+1]=temp
#     return arr

# print(insertion([4,2,7,3,22,223]))



# num=1234

# print(int(str(num)[::-1]))


# def fibbo(n):
#     if n<=1:
#         return n
#     else:
#         return fibbo(n-1)+fibbo(n-2)
    
# print(fibbo(7))