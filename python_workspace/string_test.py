hello = " Hello Python "  # 문자열 배열 : 0~len()-1
num_string = input("숫자 입력 : ")
print(hello[1:3])  # index 1부터 (3-1)까지
print(len(hello))  # 문자열 길이 구하기
print("문자열 '안녕하세요'길이는 {0}입니다.".format(len(hello)))
# print("문자열 '안녕하세요'길이는 {0}입니다.{1}".format(len(hello)))  # 괄호수가 더 많으면 IndexError
print("문자열 '안녕하세요'길이는 {0}입니다.".format(len(hello), hello))  # 자료 값이 많으면 상관 없음

print(hello.upper())  # 대문자
print(hello.lower())  # 소문자

print(hello.strip())  # 공백 문자 제거

print("{0} 가 숫자인가 :{1} ? ".format(num_string, num_string.isalnum()))

if num_string.isalnum():
    num = 10 + int(num_string)

# 문자열 함수  --많이 쓰인다
print("'l' 문자열 검색 ", hello.find("l"))  # first index 검색한 문자열 첫번째 index return
print("'l' 문자열 검색 ", hello.rfind("l"))  # 검색한 문자열 last index return
print("'l' 문자열 포함여부 ", ("l" in hello))  # 문자열 포함 여부 return (bool)  -- 연산자
print(hello.split(" "))  # split token으로 문자열을 나누어 list 형태로 return
