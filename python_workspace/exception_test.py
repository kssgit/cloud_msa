# try:
#   예외 발생 가능 실행문
# except:
#   예외 발생시 실행문
# else:
#   정상흐름 구현
# finally:
#   예외 발생어부 상관없이 실행되는 실행문
# Multy Exception 처리 : subClass 타입부터 처리하고 마지막에 Excepttion

# raise 예외 강제 발생(사용자 정의 exception)

list_data = [1, 2, 3, 4, 5]
divide_sum = 0
try:
    r = int(input("반지름 ?"))  # 타입 에러 ValueError
    # for data in list_data: #0~len(list_data)-1
    #   print(data)
    for index in range(len(list_data)+1):
        divide_sum += list_data[index]/r  # 0입력시 에러 ZeroDivisionError
        # 없는 인덱스 IndexError
        print("{0}번째 데이터 : {1}".format(index, list_data[index]))
    print("원의 반지름 :", r)
    print("원의 둘레 :", 2*3.14*r)
    print("원의 넓이 :", 3.14*r*r)
except ValueError:
    print("ValueError : 숫자입력")
except IndexError:
    print("IndexError : 리스트 데이터는 0~{0}까지 접근 가능".format(len(list_data)-1))
except Exception as error:  # 최상위 객체
    print(error, "\n프로그램 비정상 종료")
    # exception으로만 예외를 잡게되면 품질에서 문제가 된다 (유지보수에서 )
finally:
    print("예외 여부 관계없이 출력")

# 사용자 정의 예외 - 클래스
# 1. Exception을 상속 받는 사용자 정의 예외클래스 정의
# 2. 함수 예외상황이 발생됬을 때 raise 이용 강제로 예외 발생
# 3. 호출하는 쪽에서 처리
# try:
#    사용자 정의 예외 함수 호출
# except 사용자정의 예외 클래스 타입 :
#    예외처리
# finally :
#    무조간 실행되는 실행문


# class UserException(Exception):
#     def __init__(self):
#         Exception.__init__(self)  # 자기 자신 넘겨주기

#     def __str__(self):
#         return "사용자 정의 오류 발생"

class UserException(Exception):
    def __init__(self, message):
        super().__init__(message)


raise UserException("사용자 정의 오류 발생")
