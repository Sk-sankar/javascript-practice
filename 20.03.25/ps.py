obj={}
arr=[22,23,32,32,32,22,23]

for num in arr:
    if num in obj:
        obj[num]+=1
    else:
        obj[num]=1

print(obj.items())
maxf=0
maxc=None

for key ,val in obj.items():
    if val > maxf:
        maxf=val
        maxc=key

print(key)
        

