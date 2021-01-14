# 부모class (Super Class) : attribut 와 operation 자식class(Sub Class)에서
#                         사용 허용(상속)


class Person:

    t = "나는 부모클래스"
    a = 0

    def __init__(self, id, name):  # Person() : 생성자 호출 시 내부적으로 호출       self 반드시 써야 한다 오버라이드
        self.id = id               # 객체생성 시 초기화 구현
        self.name = name           # {"id":id , "name": name}
        Person.a += 1

    def info(self):  # 객체 operation : member method
        print("아이디: {0} 이름: {1}".format(self.id, self.name))

    # object 클래스의 __str__재정의
    def __str__(self):
        return "아이디: {0} 이름: {1}".format(self.id, self.name)

    # object 클래스의 __eq__재정의
    def __eq__(self, id):
        if self.id == id:
            return True
        return False

    # 클래스 메서드
    @classmethod
    def classMethod(cls):  # 클래스이름.메서드 : Student.classMethod()
        return cls.t

    @classmethod
    def class_method(cls):
        return "{0}명".format(cls.a)

    # 스테틱 메서드
    @staticmethod
    def staticMethod():
        return Person.t
# Person의 Sub Class
# 파이썬은 super클래스가 아니라 메서드이기 때문에 ()써야 한다


class Student(Person):
    staticVariable = 0  # 클래스 변수 : 객체생성하지 않고 클래스 이름으로 참조  -->java  static
    # 클래스가 로드 되는 시점에 생성
    t = "나는 자식클래스"

    def __init__(self, id, name, major):
        super().__init__(id, name)  # Super Class의 생성자 호출해서 초기화 super() 괄호 반드시!
        self.major = major

    def info(self):  # Person info Override
        super().info()  # Super  Class의 method 호출
        print("전공: {0}".format(self.major))

    # Person클래스의 __str__() 재정의
    def __str__(self):
        return super().__str__() + "  전공: {0}".format(self.major)

    def __eq__(self, value):
        return self.__str__() == value.__str__()


class Teacher (Person):
    def __init__(self, id, name, subject):
        super().__init__(id, name)
        self.subject = subject

    def info(self):
        super().info()
        print("과목 : {0}".format(self.subject))

    def __str__(self):
        return super().__str__() + " 과목 : {0}".format(self.subject)


class Employee(Person):
    def __init__(self, id, name, department):
        super().__init__(id, name)
        self.department = department

    def info(self):
        super().info()
        print("부서 : {0}".format(self.department))

    def __str__(self):
        return super().__str__() + " 부서 : {0}".format(self.department)


# 사용자 코드
#객생성 : Class이름([argumentlist])
student = Student("CMSA07", "박기윤", "정보통신")
student2 = Student("CMSA07", "박기윤", "정보통신")
teacher = Teacher("T001", "박성민", "함수형 프로그래밍")
employee = Employee("E001", "심아윤", "연구소")

# 객체사용 :object이름.변수, object이름.기능([argumentlist])
# student.student_info()
# teacher.teacher_info()
# employee.employee_info()
# 다형성 : 한 가지 타입으로 여러 형태 사용  Person 타입의 Student Teacher Employee
#         super에서 제공되는 method를 Sub에서 재정의 할 수 있다. - 사용자가 Super의 method 사용 가능
#         호출하더라도 재정의된 Sub의 method가 다양하게 응답될 수 있다.
student.info()
teacher.info()
employee.info()


# isinstance(인스턴스 , 클래스) 해당 객체가 어떤 클래스로 생성 되었는지
# 부모타입 클래스면 True
# 리스트 내부에 여러 종류의 인스턴스 들어있을 때, 인스턴스들을 구분하며 속성과 기능 사용
print("isinstance student Student :", isinstance(student, Student))  # True
print("isinstance student Teacher :", isinstance(student, Teacher))  # False
print("isinstance student Person :", isinstance(student, Person))  # True


# 최상위 객체인 object 클래스의  __str__()매서드 호출
# Sub Class에서 재정의한 경우 Sub의 재정의한 메서드 응답

print(student)
print(teacher)
print(employee)
# 원래 나오는 값
# <__main__.Student object at 0x0000021EFC9C9BE0>
# <__main__.Teacher object at 0x0000021EFC9C9AC0>
# <__main__.Employee object at 0x0000021EFC9C9A60>

# __str__() 오버라이딩 할 경우
# 학번: CMSA07 이름: 박기윤  전공: 정보통신
# 학번: T001 이름: 박성민
# 학번: E001 이름: 심아윤

# 모든 클래스는 Object 를 기본적으로 상속 받는다


# 객체 비교 방법
# __eq__ 재정의하기 전 객체의 주소값 비교 : student != student2
# __eq__ 재정의 한후 (id 값 비교) : student == student2
if student == student2:
    print("student == student2")
else:
    print("student != student2")


# 가비지 컬랙터 heap 영역에 차지하고 있는 레퍼런스 되어있지 않는 메모리 값을 제거해주는 역할
# __del__
#
#

print(Student.classMethod())
print(Student.staticMethod())


p1 = Person("12", "qwe")
p2 = Person("qw", "qwe")
print(Person.class_method())
