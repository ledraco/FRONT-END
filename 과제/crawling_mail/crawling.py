from bs4 import BeautifulSoup
import requests
from datetime import datetime
import smtplib
from email.message import EmailMessage
import re

headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36'}
url = "https://movie.naver.com/movie/sdb/rank/rmovie.naver"

response = requests.get(url,headers=headers)
soup = BeautifulSoup(response.text, 'html.parser')

results = soup.findAll("div","tit3","title")

movie_rank_file = open("movie_rank.txt","w", encoding="UTF-8")
movie_rank_file.write(datetime.today().strftime('%Y년 %m월 %d일의 영화 순위\n'.encode('unicode-escape').decode()).encode().decode('unicode-escape'))
rank = 1
for result in results:
    movie_rank_file.write(str(rank)+ "위 :" + result.get_text())
    rank += 1
    #print(rank,"위 : ",result.get_text(),"\n")

movie_rank_file.close() 

SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 465

def sendEmail(addr):
    reg = "^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$"
    if bool(re.match(reg,addr)):
        smtp.send_message(message)
        print("정상적으로 메일이 발송되었습니다.")
    else:
        print("유효한 이메일 주소가 아닙니다.")

message = EmailMessage()
message.set_content("오늘의 영화 순위를 알려드립니다.")

message["Subject"] = "크롤링해서 메일보내기[]" 
message["From"] = "###@gmail.com"
message["To"] = "###@gmail.com"

with open("movie_rank.txt","rb") as txt:
    txt_file = txt.read()
message.add_attachment(txt_file,maintype = 'text',subtype='plain',filename="movie_rank.txt")

smtp = smtplib.SMTP_SSL(SMTP_SERVER,SMTP_PORT)
smtp.login("###@gmail.com","#####")

sendEmail("###@gmail.com")
smtp.quit()
