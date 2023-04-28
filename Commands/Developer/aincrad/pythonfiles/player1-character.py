import json
import requests

with open("./././config.json",'r')as f:
    config = json.load(f)

token= config["playertoken1"]

with open('./././commands/aincrad/payloads/karakter.json','r')as a:
    data = json.load(a)

header = {'authorization': token}

r = requests.post("https://discord.com/api/v9/interactions",
                      json=data, headers=header)