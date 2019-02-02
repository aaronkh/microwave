import mraa
import requests
import time

microServo = mraa.Pwm(3)
lockServo = mraa.Pwm(4)
microServo.enable = True
lockServo.enable = True

microServo.period_us(19000000)
lockServo.period_us(19000000)

def turnOnMicrowave(time):
	times = time / 30
	for i in xrange(times):
		microServo.write(2)
		time.sleep(1)
		microServo.write(1.5)
		time.sleep(1)

def lock():
	lockServo.write(2) # 180 degrees
	time.sleep(2)

def unlock():
	lockServo.write(1.5) # 90 degrees
	time.sleep(2)

url = ""

turnOnMicrowave(30)
lock()
unlock()

# r = requests.get(url)
# j = r.json()
# if(j["time"]):
# 	turnOnMicrowave(j["time"])
# elif(j["lock"]):
# 	lock()
# elif(j["unlock"]):
# 	unlock()