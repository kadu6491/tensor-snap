from flask import *
from PyDictionary import PyDictionary
from translate import Translator
from textblob import TextBlob
import json

import numpy as np
from keras.preprocessing import image
from keras.applications import vgg19
import tensorflow as tf
import tensorflow_text as tf_text


app = Flask(__name__)

dictionary = PyDictionary()
translator = Translator(to_lang='es')
fr_trans = Translator(to_lang='fr')


def definition(word):
    return dictionary.meaning(word)


def img_classifier(imgURL):
    model = vgg19.VGG19(weights='imagenet')

    img = image.load_img(imgURL, target_size=(224, 224))

    x = image.img_to_array(img)
    x = np.expand_dims(x, axis=0)
    x = vgg19.preprocess_input(x)

    prediction = model.predict(x)
    prediction_classes = vgg19.decode_predictions(prediction, top=4)

    feat_name = []

    for id, name, lh in prediction_classes[0]:
        # print("Prediction: {} - {:2f}".format(name, lh))
        feat_name.append(name.replace('_', ' '))

    return feat_name


def img_translation(img_class, lang):
    img_trans = []

    for i in img_class:
        b = TextBlob(i)
        img_trans.append(str(b.translate(to=lang)))

    return img_trans


@app.route('/', methods=['GET'])
def home():
    return "Welcome to translation home"


@app.route('/api/img/', methods=['POST'])
def img_classification():
    data = request.get_json()
    img = data.get('imgURL')
    img_class = img_classifier(img)

    # spa_img_trans = img_translation(img_class, 'es')
    # fra_img_trans = img_translation(img_class, 'fr')
    spa_img_trans = ['lago', 'Gata', 'teléfono', 'árbol']
    fra_img_trans = ['Lac', 'Chatte', 'Téléphoner', 'Arbre']

    return jsonify({
        "classify": img_class,
        "spa_img_trans": spa_img_trans,
        "fra_img_trans": fra_img_trans,
    })


# def def_translation(df, lang):
#     word_def = {}
#
#     if df.keys() is None:
#         return 'none'
#
#     for i in df.keys():
#         b = TextBlob(i)
#         word_type = str(b.translate(to=lang))
#
#         word_def[word_type] = []
#
#         for x in df[i]:
#             bb = TextBlob(x)
#             word_des = str(bb.translate(to=lang))
#             word_def[word_type].append(word_des)
#
#     return word_def


@app.route('/api/word/', methods=['POST'])
def def_translations():
    data = request.get_json()
    words = data.get('word')
    define = definition(words)

    if define is None:
        return jsonify({'none': 'none'})
    else:
        # spa_def = def_translation(define, 'es')
        # fra_def = def_translation(define, 'fr')
        spa_def = ['lago', 'Gata', 'teléfono', 'árbol']
        fra_def = ['Lac', 'Chatte', 'Téléphoner', 'Arbre']
        return jsonify({
            "eng_def": define,
            "spa_def": spa_def,
            "fra_def": fra_def,
        })


@app.route('/api/<word>/', methods=['GET'])
def test_def(word):
    df = definition(word)
    # spa_def = def_translation(df, 'es')
    # fra_def = def_translation(df, 'fr')

    return jsonify({
        "eng_def": df,
        "spa_def": spa_def,
        "fra_def": fra_def,
    })


# @app.route('/api/', methods=['POST'])
# def word():
#     data = request.get_json()
#     im = data.get('imgURL')
#     img = img_classifier(im)
#
#     # define = definition(word)
#
#     spa_lang_translate = ['lago', 'Gata', 'teléfono', 'árbol']
#     fra_lang_translate = ['Lac', 'Chatte', 'Téléphoner', 'Arbre']
#
#     return jsonify({
#         "class": img,
#         "span_img": spa_lang_translate,
#         "fran_img": fra_lang_translate,
#     })


# @app.route('/api/definition/', methods=['POST'])
# def word_define():
#     data = request.get_json()
#     word = data.get('word')
#     define = definition(word)
#     print(define)
#
#     if define is None:
#         return "none"
#     else:
#         return define


if __name__ == '__main__':
    app.run(debug=True)

