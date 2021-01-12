# def 함수명([argumentlist]) :
#   구현
#   [return data]
# 함수는 정의 -- > 함수 호출
# 함수 호출 시 정의된 함수의 argumentlist에 맞도록 데이터 전달
# 가변 매개변수(*argument) 사용시 호출 시마다 argumentlist 다를 수 있다
# 기본 매개변수(argument=값) argument 기본값 설정 -호출시 argument 생략 가능

# 함수 정의
def print_3_times(*values, data="test"):  # 갯수가 가변적이면 가변 매개변수 *를 붙인다
    for value in values:
        print("{0} : hello finction {1}".format(value, data))


# 함수 호출
print_3_times('test')  # 함수는 정의만 하는것이 아니라 호출을 해줘야 작동 한다.
print_3_times('test', 'test')
print_3_times('test', 3)
print_3_times()
# 파라미터와 argument갯수와 타입이 같아야 한다


def argument_test(a, b=20, c=30):
    print("{0} : {1} : {2} ".format(a, b, c))


argument_test(10)  # b, c 는 기본값 : 10 :20: 30
argument_test(b=200, c=300, a=100)  # value명을 명시하면 순서 상관없이 입력 가능
argument_test(1000,  2000, 3000)  # value명을 명시하지 않으면 순서대로 입력


def retun_none_test():
    return                # return : function 종료 -호출한 곳으로


value = retun_none_test()
print(value)
# return data 없을 경우 None
# 문법이 엄격한 java에서는 컴파일 에러가 발생하지만 파이썬은 None출력


def return_test(a, b):
    sum = a + b
    return sum


print(return_test(10, 20))


def mul(*values):
    result = 1
    for value in values:
        result *= value
    return result


print(mul(3, 4, 5, 6))

# tuple : 값 변경하지 않는 list tuple변수=(value , value , ...) 상수 값 저장
# return 할 때 많이 쓰인다( 여러가지의 데이타 타입을 리턴할 경우)
# return (max , min )
tuple_data = (10, 20, 30, 40)
list_data = [10, 20, 30, 40]

for tdata in tuple_data:
    print(tdata, end=" ")
print()

for ldata in list_data:
    print(ldata, end=" ")

list_data[0] = 100
# tuple_data[0] = 100 #TypeError : 값변경 못함
# tuple : function에서 다수의 데이터 리턴시 사용

print()


def test_tuple():
    return (10, 20)


a, b = test_tuple()  # a,b 상수값이아닌 튜플에서 값을 넘겨받은 변수이다
a = 30  # 값변경 가능
print("{0}+{1}={2}".format(a, b, a+b))

# 람다 : lambda argumentlist(매게변수) : retrun  -  1회성 익명 함수
list_input = [1, 2, 3, 4, 5]
output_list = map(lambda data: data*data, list_input)  # js map과 같은 기능
print(list_input)
print(output_list)  # map객체
print(list(output_list))

output_filter = filter(lambda data: data < 3, list_input)
print(list_input)
print(output_filter)
print(list(output_filter))

# lambda x,y : (x*y , x+y) #여러개의 매서드 , 여러개의 리턴 값 가능
