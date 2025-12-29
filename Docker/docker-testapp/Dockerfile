# node on docker hub 



# docker defining is a creating a layering process 

# aour app uses nodejs images which again uses linux based images called debel 


# our app layers uses 
FROM node



# environmental variable configure
ENV MONGO_DB_USERNAME=delta_admin \
    MONGO_DB_PWD=delta_password


# make teh folder in container 
RUN mkdir -p delta/nodeapp

# copy all the files (".") in the /delta/nodeapp(created above)
COPY . /delta/nodeapp


# run the node app (node app.js more specifically node /delta/nodeapp/server.app)
CMD ["node", "/delta/nodeapp/server.js"]






















# mam uses this lines of the code for make us understand

FROM python:3.10-alpine
WORKDIR /code
ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0
RUN apk add --no-cache gcc musl-dev linux-headers
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
EXPOSE 5000
COPY . .
CMD ["flask", "run", "--debug"]