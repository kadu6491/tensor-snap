# import numpy as np
# import tensorflow as tf
# import tensorflow_text as tf_text
# from keras.preprocessing import image
# from keras.applications import vgg19
#
# model = vgg19.VGG19(weights='imagenet')
#
# img = image.load_img("../rose1.jpeg", target_size=(224, 224))
#
# x = image.img_to_array(img)
#
# x = np.expand_dims(x, axis=0)
#
# x = vgg19.preprocess_input(x)
#
# prediction = model.predict(x)
#
# prediction_classes = vgg19.decode_predictions(prediction, top=9)
#
# for id, name, lh in prediction_classes[0]:
#     print("Prediction: {} - {:2f}".format(name, lh))

# three_input_text = tf.constant([
#      # 'Esta es mi vida.',
#     'This is my life.',
#     # '¿Todavía están en casa?',
#     'Are they still home?',
#     # 'Tratar de descubrir.',
#     'Try to find out.',
# ])
#
# reloaded = tf.saved_model.load('../models/translator')
#
# result = reloaded.tf_translate(three_input_text)
# for tr in result['text']:
#   print(tr.numpy().decode())

# print()