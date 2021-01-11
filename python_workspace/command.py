# if 조건식 :
#   참일 때 실행문
# elif 조건식 2:
#   조건식 2가 참일 때 실행문
# else :
#   조건식, 조건식2 거짓일 때 실행문

#month = input("월 입력 : ")
# if month.isdecimal():
#     m = int(month)
#     if m == 1 or m == 3 or m == 5 or m == 7 or m == 8 or m == 10 or m == 12:
#         print("{0}월은 31일 까지 있습니다.".format(m))
#     elif m == 2:
#         print("{0}월은 28일 까지 있습니다.".format(m))
#     elif m == 4 or m == 6 or m == 9 or m == 11:
#         print("{0}월은 30일 까지 있습니다.".format(m))
#     else:
#         month = input("월은 1~12사이 값을 입력 : ")

# else:
#     month = input("월은 1~12사이 값을 입력 : ")


# lsit type : [str , int , float , boolean , list ]
#              +, *(iterattion) ,len()
# 자주 사용하는 메서드 : qppend() , insert() ,extend(), del 리스트[index범위], pop(index), remove(값), clear()
# .을 js의 해당 주소가 가리키는 곳(메모리)로 가서 수정해라
list_a = [1, 2, 3]
list_b = [4, 5, 6]
print(list_a + list_b, "+연산후 list_a", list_a)
# 임시로 값을 저장한후 사라진다
print(list_a.append(4), "append후 list_a", list_a)
print(list_a.insert(2, 3), "insert후 list_a", list_a)

print(list_a.pop(1), "pop(1) 삭제 후 list_a", list_a)  # 해당 index 삭제

del list_a[:1]
print("del로 index 0 삭제 후 list_a", list_a)  # 해당 index 삭제

print(list_a.remove(3), "remove(3) 삭제 후 list_a", list_a)  # 첫번째 만나는 해당 값 삭제

# 연산자  in , not in


# for 반복자 in 반복할 수 있는 데이터(list, dictionaly, string, range()) :
#   실행문
index = 0
for i in list_a:
    print("list_a[{0}] : {1}".format(index, i))
    index += 1
