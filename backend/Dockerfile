FROM python:3.8-slim-buster

WORKDIR /app
# RUN apt update -y
COPY requirements.txt .
RUN pip3 install -r requirements.txt
#RUN pip install tensorflow
#RUN pip install tensorflow-text

COPY src/ /app
EXPOSE 5001
CMD ["python3", "app.py"]
