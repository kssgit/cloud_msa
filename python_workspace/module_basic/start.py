# import test_module as test #ModuleNotFoundError
# import test_package.test_module as test
# import test_package.test_module2 as test2
# __init__을 이용 = 디랙토리 파일 밑에 __init__파일 생성후 그 파일안에 해당 디렉토리 모듈들을 __all__안에 넣는다
from test_package import *

radius = test_module.number_input()
print(test_module.get_circumference(radius))
print(test_module.get_circle_area(radius))

x, y = test_module2.number_input()
print(test_module2.get_circumference(x, y))
print(test_module2.get_rectangle_area(x, y))


print("#메인의 __name__ 출력#")
print(__name__)
print()

# import한 모듈먼저 로드한다
# 모듈의 __name__은 그 모듈의 파일명 출력
# 실행시킨 파일이 __main__
# 파이썬에서 자동으로 모듈 관리해주는 __pycache__이 자동 생성
