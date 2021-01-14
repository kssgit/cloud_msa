class Person:
    count = 0    # 클래스 속성

    def __init__(self):
        Person.count += 1    # 인스턴스가 만들어질 때
        # 클래스 속성 count에 1을 더함

    @classmethod
    def print_count(cls):
        print('{0}명 생성되었습니다.'.format(cls.count))    # cls로 클래스 속성에 접근

    @classmethod
    def create(cls):
        p = cls()    # cls()로 인스턴스 생성
        return p


# cls 는 현재 클래스를 가리킴

james = Person()
maria = Person()
print(Person.create())
Person.print_count()    # 2명 생성되었습니다.
