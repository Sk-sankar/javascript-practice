# arr=[1,2,3,4,5]
# rotate=3
# result=[]
# for i in range(rotate-1,len(arr)):
#     result.append(arr[i])
# for j in range(0,len(arr)-rotate):
#     result.append(arr[j])
    
# print(result)
    
    
    
# arr=[1,2,3,None,4,5,None,8]

# empty=[]
# a1=[]

# for i in range(0,len(arr)):
#     if arr[i]!=None:
#         a1.append(arr[i])
#     else:
#         empty.append(a1)
#         a1=[]

# if len(a1)>0:
#     empty.append(a1)
# print(empty)


# def fibbo(n):
#     if n<=1:
#         return n
#     else:
#         return fibbo(n-1)+fibbo(n-2)
# print(fibbo(6))

# obj={}
# arr=[22,23,32,32,21,32,22,23,34]

# for num in arr:
#     if num in obj:
#         obj[num]+=1
#     else:
#         obj[num]=1

# min=0
# minE=None

# for key ,val in obj.items():
#     if val==1:
#         print(key)
#         break
        
        

# arr1 = ['JAN-12-2005', 'JUN-24-2006','DEC-21-2008']


# month_map = {
#     "JAN": 1, "FEB": 2, "MAR": 3, "APR": 4, "MAY": 5, "JUN": 6,
#     "JUL": 7, "AUG": 8, "SEP": 9, "OCT": 10, "NOV": 11, "DEC": 12
# }

# max_date = arr1[0]
# max_month = month_map[max_date[0:3]]  
# max_day = int(max_date[4:6])  
# max_year = int(max_date[7:])  

# for i in arr1[1:]:
#     month = month_map[i[0:3]]  
#     day = int(i[4:6])
#     year = int(i[7:]) 


#     if year > max_year:
#         max_year, max_month, max_day = year, month, day
#         max_date = i
#     elif year == max_year:
#         if month > max_month:
#             max_year, max_month, max_day = year, month, day
#             max_date = i
#         elif month == max_month:
#             if day > max_day:
#                 max_year, max_month, max_day = year, month, day
#                 max_date = i

# print( max_date)


newarr=["eat", "tea", "tan", "ate", "nat", "bat"]

a1={}

for i in range(0,len(newarr)):
    key="".join(sorted(newarr[i]))
    
    if key in a1:
        a1[key].append(newarr[i])
    else:
        a1[key]=[newarr[i]]
    
result=[]

for key in a1.values():
    result.append(key)
    
print(result)
    


