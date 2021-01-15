class ClassTest:
    class_v = 10

    def __init__(self, instance_v):
        self.instance_v = instance_v


c1 = ClassTest(10)

c2 = ClassTest(10)

c1.instance_v += 1
c2.instance_v += 1
print("{0}  c1.instance_v   , {1}  c2.instance_v".format(
    c1.instance_v, c2.instance_v))

print("=========")

ClassTest.class_v += 1
print("{0}  c1.class_v   , {1}  c2.class_v".format(
    c1.class_v, c2.class_v))

ClassTest.class_v += 1


print("{0}  c1.class_v   , {1}  c2.class_v".format(
    c1.class_v, c2.class_v))

print("=========")

# 파이썬에서는 각 인스턴스에서 클래스변수를 선언할 경우 값이 공유되지 않는다
# 반드시!!! 클래스변수는 클래스 이름으로 참조 해야한다 (인스턴스로 참조 ㄴㄴ )

c1.class_v += 1
print("{0}  c1.class_v   , {1}  c2.class_v".format(
    c1.class_v, c2.class_v))

c2.class_v += 1


print("{0}  c1.class_v   , {1}  c2.class_v".format(
    c1.class_v, c2.class_v))


print("============")
# 각각의 인스턴스에서 클래스변수를 변경해도 원래 클래스이름으로 참조하는 클래스변수는 변하지 않는다
print("{0}  ClassTest.class_v".format(
    ClassTest.class_v))
