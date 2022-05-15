import random

mapSize = int(input("맵의 크기를 입력하여 주세요 : "))
bombCount = int(input("폭탄의 수를 입력하여 주세요 : "))

#맵 제작
map = []
for _ in range(mapSize):
    subList = ['⬜' for _ in range(mapSize)]
    map.append(subList)
map[0][0] = '🔳'

#폭탄 제작
count = bombCount
while True:
    if(count == 0):
        break
    x = random.randint(0,mapSize-1)
    y = random.randint(0,mapSize-1)
    if(x == 0 and y == 0):
        continue
    elif map[x][y] == '🔺':
        continue
    else:
        map[x][y] = '🔺'
        count -= 1

#보석 제작
while True:
    x = random.randint(0,mapSize-1)
    y = random.randint(0,mapSize-1)
    if map[x][y] == '🔺':
        print("보석 겹침")
        continue
    else:
        map[x][y] = '💠'
        break

x_position = 0
y_position = 0

while True:
    print("=========게임을 시작합니다.==========")
    for i in range(mapSize):
        for j in range(mapSize):
            print(map[i][j],end='')
        print()

    print("1.아래로 이동")
    print("2.위로 이동")
    print("3.오른쪽 이동")
    print("4.왼쪽 이동")
    print("5.게임 종료")
    select = int(input("원하는 숫자를 입력하여 주세요 : "))

    #[y_position][x_postion]
    if select == 1: #아래로 이동
        if (y_position + 1) > (mapSize - 1):
            print("아래로 더이상 이동할 수 없습니다.")
            continue
        else:
            y_position += 1
            if map[y_position][x_position] == '💠':
                print("클리어! 게임을 종료합니다.")
                break
            if map[y_position][x_position] == '🔺':
                print("폭탄! 게임을 종료합니다.")
                break
            map[y_position][x_position] = '🔳'
            map[y_position-1][x_position] = '⬜'

    elif select == 2: # 위로 이동
        if (y_position - 1) < 0:
            print("위로 더이상 이동할 수 없습니다.")
            continue
        else:
            y_position -= 1
            if map[y_position][x_position] == '💠':
                print("클리어! 게임을 종료합니다.")
                break
            if map[y_position][x_position] == '🔺':
                print("폭탄! 게임을 종료합니다.")
                break
            map[y_position][x_position] = '🔳'
            map[y_position+1][x_position] = '⬜'

    elif select == 3: #오른쪽 이동
        if (x_position + 1) > (mapSize - 1):
            print("오른쪽으로 더이상 이동할 수 없습니다.")
            continue
        else:
            x_position += 1
            if map[y_position][x_position] == '💠':
                print("클리어! 게임을 종료합니다.")
                break
            if map[y_position][x_position] == '🔺':
                print("폭탄! 게임을 종료합니다.")
                break
            map[y_position][x_position] = '🔳'
            map[y_position][x_position - 1] = '⬜'

    elif select == 4: #왼쪽 이동
        if (x_position - 1) < 0:
            print("왼쪽으로 더이상 이동할 수 없습니다.")
            continue
        else:
            x_position -= 1
            if map[y_position][x_position] == '💠':
                print("클리어! 게임을 종료합니다.")
                break
            if map[y_position][x_position] == '🔺':
                print("폭탄! 게임을 종료합니다.")
                break
            map[y_position][x_position] = '🔳'
            map[y_position][x_position + 1] = '⬜'
    elif select == 5: # 게임 종료
        print("게임을 종료합니다")
        break