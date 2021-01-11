# dictionary type : variable_name={"name":"value", ...}  value: int, float , boolean , str, list
# data access : variable_name{"name"}
# student = {"name": "고재경", "age": 26, "major": "컴공"}
# print("이름:{0} 나이:{1} 전공:{2}".format(
#     student["name"], student["age"], student["major"]))
# students = [{"name": "고재경", "age": 26, "major": "컴공"},
#             {"name": "권혜영", "age": 25, "major": "정보보호"}]
students = []
students.append({"name": "고재경", "age": 26, "major": "컴공"})

for i in students:
   # print("이름:{0} 나이:{1} 전공:{2}".format(i["students"], i["age"], i["major"]))  --- KeyError
    print("이름:{0} 나이:{1} 전공:{2}".format(i["name"], i["age"], i["major"]))


# dictionary  추가 수정 : "name" : "value" 쌍으로 추가 수정 ("name" 존재하면 수정 , 존재하지 않으면 추가)
students[0]["studenid"] = "CloudMSA01"
print(students[0])
students[0]["major"] = "컴퓨터공학"
print(students[0])

# dictionary 삭제
del students[0]["studenid"]
print(students[0])

# get()함수  : key check 없는 경우 NONE return
key_value = input("student 속성 입력 (name ,age, major) >:")


while students[0].get(key_value) == None:
    print("name ,age, major 중 입력 ")
    key_value = input("student 속성 입력 (name ,age, major) >")


print("{0} key 의 value 값 : {1}".format(key_value, students[0][key_value]))
