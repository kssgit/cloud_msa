# 랜덤하게 1000명의 키와 몸무게 만들기
import random

haguls = list("가나다라마바사아자차카타파하")

with open("info.txt", "w") as file:
    for i in range(1000):

        name = random.choice(haguls)+random.choice(haguls)
        weight = random.randrange(40, 100)
        height = random.randrange(140, 200)

        file.write("{}, {}, {}\n".format(name, weight, height))
