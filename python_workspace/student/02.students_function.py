import os.path

# 수강생 관리 시스템
students = []

# 수강생 등록 : list students에 id중복 체크하고 존재하지 않는 경우 정보 저장 하고 message 리턴


def register(student):
    index = is_exist(student["id"])
    print(index)
    if index == -1:
        students.append(student)
        return "{0}(이)가 등록되었습니다".format(student["name"])
    else:
        return " Id가 등록되었습니다."


# 수강생 목록 : list students 목록 리턴


def getAllStudents():
    return students

# 수강생 수정 : id를 검색해서 전공정보 수정하고 message 리턴


def update(id, major):
    index = is_exist(id)
    if index > -1:
        students[index]["major"] = major
        return "{0}전공 정보가 수정되었습니다.".format(id)
    else:
        return "{0}전공 정보가 존재하지 않습니다..".format(id)


# 수강생 삭제 : id를 검색해서 수강생 정보 상제 message 리턴


def remove_s(id):
    index = is_exist(id)
    if index > -1:
        students.pop(index)
        return "{0}의 정보가 삭제 되었습니다".format(index)

    else:
        return "{0} 정보가 존재하지 않습니다..".format(id)

# 수강생 존재 여부 : id를 검색해서 list students의 index 값 리턴
# enumerate
# 반복문 사용 시 몇 번째 반복문인지 확인이 필요할 수 있습니다. 이때 사용합니다.
# 인덱스 번호와 컬렉션의 원소를 tuple형태로 반환합니다


def is_exist(id):
    for index, student in enumerate(students):
        if student["id"] == id:
            return index
    return -1  # 없으면 -1


# menu display


def menu_display():
    print("=======Cloud MSA 반 수강생 관리 시스템=======")
    print("1.수강생 정보 등록 ")
    print("2.수강생 목록 보기")
    print("3.수강생 정보 수정")
    print("4.수강생 정보 삭제")
    print("0.종료")


# message display


def message_display(message):
    print(message)

# 프로그램 종료시 list students "students.dat" 파일 저장


def save_list():
    save_file = open("students.dat", "w")  # 맨처음 할때는 w
    for index, student in enumerate(students):
        save_file.write("{0}번째 | {1},{2},{3},{4}\n".format(
            index, student["id"], student["name"], student["age"], student["major"]))
    save_file.close()

# 프로그램 시작시 "student.dat" 파일이 존재하고 정보가 있는 경우 list students 초기화


def init_data_load():
    fileExist = os.path.isfile("students.dat")
    if fileExist:
        read_file = open("students.dat", "r")
        while True:
            data = read_file.readline()
            if len(data.split("|")) == 2:
                student = data.split("|")[1].strip("\n").split(",")  # 문자열 데이터
                students.append({"id": student[0].strip(), "name": student[1].strip(
                ), "age": int(student[2].strip()), "major": student[3].strip()})
            if not data:
                break
        read_file.close()

# -----------------------------------------------------------------------------------------------


init_data_load()
while True:
    menu_display()

    menu = input("메뉴를 선택하세요 >")

    if menu == "1":
        id = input("학번 : ")
        name = input("이름 : ")
        age = input("나이 : ")
        major = input("전공 : ")
        student = {"id": id, "name": name, "age": int(age), "major": major}

        message_display(register(student))

    elif menu == "2":
        print("==== 수강생 목록 보기 ====")
        message_display(getAllStudents())

    elif menu == "3":
        print("==== 수강생 정보 수정 ====")
        id = input("ID를 입력하세요 :")
        while not id.isdecimal:
            print("숫자로 입력하세요")
            id = input("ID를 입력하세요 :")
        major = input("수정할 전공 : ")

        message_display(update(id, major))

    elif menu == "4":
        print("==== 수강생 정보 삭제 ====")
        id = input("ID를 입력하세요 :")
        while not id.isdecimal:
            print("숫자로 입력하세요")
            id = input("ID를 입력하세요 :")

        message_display(remove_s(id))

    elif menu == "0":
        message_display("수강생 관리 프로그램을 종료합니다")
        save_list()
        break

    else:
        message_display("1,2,3,4,0 번 중 선택하세요\n")
