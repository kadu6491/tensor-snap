FROM python:3.8-alpine

WORKDIR /app
# RUN apt update -y
COPY requirements.txt .
RUN pip install -r requirements.txt
RUN pip install tensorflow
RUN pip install tensorflow-text

COPY src/ /app
EXPOSE 5000
CMD ["python3", "app.py"]
