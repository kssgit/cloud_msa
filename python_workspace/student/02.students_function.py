# 수강생 관리 시스템
students = []
id = 1
while True:
    print("=======Cloud MSA 반 수강생 관리 시스템=======")
    print("1.수강생 정보 등록 ")
    print("2.수강생 목록 보기")
    print("3.수강생 정보 수정")
    print("4.수강생 정보 삭제")
    print("0.종료")

    menu = input("메뉴를 선택하세요 >")

    if menu == "1":
        name = input("이름 : ")
        age = input("나이 : ")
        while not age.isdecimal and int(age) >= 18:
            print("나이는 18 이상의 숫자로 입력 하세요")
            age = input("나이 : ")
        major = input("전공 : ")
        student = {"id": id, "name": name, "age": int(age), "major": major}
        students.append(student)
        print("{0}(이)가 등록되었습니다".format(name))
        id += 1

    elif menu == "2":
        print("==== 수강생 목록 보기 ====")
        print(students)

    elif menu == "3":
        print("==== 수강생 정보 수정 ====")
        index = input("ID를 입력하세요 :")
        while not index.isdecimal:
            print("숫자로 입력하세요")
            index = input("ID를 입력하세요 :")
        print("{0}의 전공이 수정 되었습니다".format(index))
        students[int(index)-1]["major"] = input("수정할 전공 : ")

    elif menu == "4":
        print("==== 수강생 정보 삭제 ====")
        index = input("ID를 입력하세요 :")
        while not index.isdecimal:
            print("숫자로 입력하세요")
            index = input("ID를 입력하세요 :")
        delete = input("{}의 정보를 삭제하시겠습니까? [y/n]".format(index))
        if delete == "y" or delete == "Y":
            print("{0}의 정보가 삭제 되었습니다".format(index))
            students.pop(int(index)-1)
            # for st in students :
            #     if student["id"] == int(index)
            #       delete = input("{}의 정보를 삭제하시겠습니까? [y/n]".format(index))
        #           if delete == "y" or delete == "Y":
        #               print("{0}의 정보가 삭제 되었습니다".format(index))
        #               student.remove(student)
        #               break
    elif menu == "0":
        print("수강생 관리 프로그램을 종료합니다")
        break

    else:
        print("1,2,3,4,0 번 중 선택하세요\n")

# github : python_workshop repository 생성 - 01.todos.py 작성해보기
#                                                 {"todoNum": todoNum , "title":title}데이터
#                                                   등록, 수정 , 삭제 , 일정목록 , 전체 삭제 기능
