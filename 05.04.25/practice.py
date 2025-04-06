# create_obj={
#     "sudhan":"body builder",
#     "sankar":"pathiyam"
# }
# print(create_obj)


# def bubble(arr):
#     n=len(arr)
#     for i in range(0,n):
#         for j in range(0,n-i-1):
#             if(arr[j]>arr[j+1]):
#                 [arr[j+1],arr[j]]=[arr[j],arr[j+1]]
#     return arr

# print(bubble([32,2,3,1,42,53,5]))


# def selection(arr):
#     n=len(arr)
#     for i in range(0,n):
#         mid=i
#         for j in range(i+1,n):
#             if arr[mid]>arr[j]:
#                 mid=j
#         if mid!=i:
#             [arr[i],arr[mid]]=[arr[mid],arr[i]]
#     return arr

# print(selection([32,2,3,1,42,53,5]))


# def insertion(arr):
#     n=len(arr)
#     for i in range(0,n):
#         temp=arr[i]
#         j=i-1
#         while j>=0 and arr[j]>temp:
#             arr[j+1]=arr[j]
#             j=j-1
#         arr[j+1]=temp
#     return arr
# print(insertion([32,2,3,1,42,53,5]))

# def mergesort(arr):
#     if len(arr)<=1:
#         return arr
        
#     mid=len(arr)//2
#     left_l=mergesort(arr[:mid])
#     right_r=mergesort(arr[mid:])
    
#     return merge(left_l,right_r)
    
# def merge(left,right):
#     result=[]
#     i,j=0,0
    
#     while i<len(left) and j<len(right):
#         if left[i]<right[j]:
#             result.append(left[i])
#             i+=1
#         else:
#             result.append(right[j])
#             j+=1
    
#     result.extend(left[i:])
#     result.extend(right[j:])
#     return result


# print(mergesort([32,2,3,1,42,53,5]))  


# def quick_sort(arr):
#     if len(arr)<=1:
#         return arr
    
#     pivot= arr[len(arr)//2]
#     left=[x for x in arr if x<pivot]
#     middle=[x for x in arr if x==pivot]
#     right=[x for x in arr if x>pivot]
    
#     return quick_sort(left)+middle+quick_sort(right)

# print(quick_sort([4, 32, 53, 1, 5, 13, 124, 89, 23]))


