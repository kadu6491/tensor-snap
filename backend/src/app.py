from flask import *
from PyDictionary import PyDictionary
from translate import Translator

# import numpy as np
# from keras.preprocessing import image
# from keras.applications import vgg19


app = Flask(__name__);

dictionary = PyDictionary()
translator = Translator(to_lang='es')
fr_trans = Translator(to_lang='fr')


def definition(word):
    return dictionary.meaning(word)


# def img_classifier(imgs):
#     model = vgg19.VGG19(weights='imagenet')
#
#     img = image.load_img(f"../{imgs}", target_size=(224, 224))
#
#     x = image.img_to_array(img)
#     x = np.expand_dims(x, axis=0)
#     x = vgg19.preprocess_input(x)
#
#     prediction = model.predict(x)
#     prediction_classes = vgg19.decode_predictions(prediction, top=4)
#
#     feat_name = []
#
#     for id, name, lh in prediction_classes[0]:
#         # print("Prediction: {} - {:2f}".format(name, lh))
#         feat_name.append(name.replace('_', ' '))
#
#     return feat_name


@app.route('/', methods=['GET'])
def home():
    return "Welcome to translation home"


@app.route('/<word>/', methods=['GET'])
def translate(word):
    # img = img_classifier(word)
    w = word.split('.')[0]
    d = definition(w)
    s = translator.translate(w)
    f = fr_trans.translate(w)

    spa_key = []
    spa_def = []

    # s_d = translator.translate(d[0][0])
    print(spa_def)
    return render_template(
        'index.html',
        word=word.capitalize(),
        e=w.capitalize(),
        d=d,
        s=s.capitalize(),
        f=f.capitalize(),
        img=["Hi", "many"]
    )


if __name__ == '__main__':
    app.run(debug=True)

