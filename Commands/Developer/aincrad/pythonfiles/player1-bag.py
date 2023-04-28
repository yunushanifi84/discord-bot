import json
import requests

with open("././tokens.json",'r')as f:
    config = json.load(f)
token= config["player1"]

with open('././Commands/Developer/aincrad/payloads/canta.json','r')as a:
    data = json.load(a)

header = {'authorization': token}

r = requests.post("https://discord.com/api/v9/interactions",
                      json=data, headers=header)
