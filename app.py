from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html', favicon_emoji='💖', title="Happy Birthday")

@app.route('/message')
def message():
    return render_template('message.html', favicon_emoji='💌', title="A Letter For You")

@app.route('/gallery')
def gallery():
    return render_template('gallery.html', favicon_emoji='📸', title="Our Memories")

@app.route('/surprise')
def surprise():
    return render_template('surprise.html', favicon_emoji='🎁', title="Your Surprise")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))

