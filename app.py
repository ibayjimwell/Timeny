import os
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from datetime import date


# Initialize Flask
app = Flask(__name__, static_folder='frontend/dist', static_url_path='')
CORS(app)


# Average life expectancy of human
human_average_life_expectancy = 72


# Functions
def convert_timestamp_to_date(timestamp):
    # Convert timestamp to datetime if not already
    if isinstance(timestamp, (int, float)):
       # Convert milliseconds to seconds
        if timestamp > 1e12:  # likely in milliseconds
            timestamp = timestamp / 1000
        return date.fromtimestamp(timestamp)
    elif isinstance(timestamp, date):
        return timestamp
    else:
        raise ValueError("Invalid timestamp format")

def get_birthday_string(birthday_object: date):
    # Returning a formated string date
    return birthday_object.strftime('%B, %d, %Y')

# Calculating the age base on birthday and current date
def get_age(birthday_object: date):
    birthday = birthday_object
    date_today = date.today()

    age = date_today.year - birthday.year
    month_difference = (date_today.month - birthday.month)

    if month_difference < 0 or (month_difference == 0 and date_today.day < birthday.day):
        age = age - 1

    return age

# Calculating the days util next birthday base on current date
def days_util_next_birthday(birthday_object: date):
    birthday = birthday_object
    date_today = date.today()
    current_year = date_today.year

    next_birthday = date(current_year, birthday.month, birthday.day)
    # If the birthday is already passed this year
    if date_today > next_birthday:
        next_birthday = date(current_year + 1, birthday.month, birthday.day)

    # Calculate the days util next birthday
    time_util_birthday = next_birthday - date_today
    return time_util_birthday.days

def is_leap_year(birthday_object: date):
    year = birthday_object.year
    # Calculate if the year is leap year
    return (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)

# Get the zodiac sign of a date
def get_zodiac_sign(birthday_object: date):
    from zodiac_sign import get_zodiac_sign
    return get_zodiac_sign(birthday_object)

# Get the chinese zodiac sign of a year
def get_chinese_zodiac_sign(birthday_object: date):
    zodiac = [
        "Monkey", "Rooster", "Dog", "Pig", "Rat", "Ox",
        "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat"
        ]
    birth_year = birthday_object.year

    return zodiac[birth_year % 12]

def get_life_remaining_years(birthday_object: date):
    age = get_age(birthday_object)
    remaining_years = human_average_life_expectancy - age

    # Make sure the remaining years is not negative
    if remaining_years < 0:
        remaining_years = 0

    return remaining_years

# Get the remaining life in percentage
def get_life_remaining_percentage(birthday_object: date):
    remaining_years = get_life_remaining_years(birthday_object)
    return round((remaining_years / human_average_life_expectancy) * 100, 2)

def get_life_remaining_months(birthday_object: date):
    birthday = birthday_object
    date_today = date.today()
    age = get_age(birthday)

    human_average_life_expectancy_months = human_average_life_expectancy * 12
    years_live_in_months = age * 12
    months_difference = date_today.month - birthday.month
    additional_months = 12 + months_difference if months_difference < 0 else months_difference
    total_months_live = years_live_in_months + additional_months

    remaining_months = human_average_life_expectancy_months - total_months_live

    # Ensuring the remaining months is not negative
    if remaining_months < 0:
        remaining_months = 0

    return remaining_months
    
# Get the remaining life in days
def get_life_remaining_days(birthday_object: date):
    birthday = birthday_object
    today = date.today()

    # Total days lived
    total_days_lived = (today - birthday).days

    # Average life expectancy in days (including leap years roughly)
    average_life_expectancy_days = int(human_average_life_expectancy * 365.25)

    # Remaining days
    remaining_days = average_life_expectancy_days - total_days_lived

    return max(remaining_days, 0)

# Get total days since birth
def get_days_since_birth(birthday_object: date):
    birthday = birthday_object
    today = date.today()

    return (today - birthday).days

# Get total months since birth
def get_months_since_birth(birthday_object: date):
    birthday = birthday_object
    today = date.today()

    years_difference = today.year - birthday.year
    months_difference = today.month - birthday.month
    days_adjustment = 0 if today.day >= birthday.day else -1

    return ( years_difference * 12 ) + ( months_difference + days_adjustment )

# Root route
@app.route('/api/')
def index():
    name = request.args.get('name')
    birthday = int(request.args.get('birthday'))
    birthday_object = convert_timestamp_to_date(birthday)

    data = {
        'Name': name,
        'Birthday':  get_birthday_string(birthday_object),
        'Today': date.today().strftime('%B, %d, %Y'),
        'Age': get_age(birthday_object),
        'Next Birthday in Days': days_util_next_birthday(birthday_object),
        'Leap Year Birthday': 'Yes' if is_leap_year(birthday_object) else 'No',
        'Zodiac Sign': get_zodiac_sign(birthday_object),
        'Chinese Zodiac Sign': get_chinese_zodiac_sign(birthday_object),
        'Remaining Life': get_life_remaining_percentage(birthday_object),
        'Remaining Years': get_life_remaining_years(birthday_object),
        'Remaining Months': get_life_remaining_months(birthday_object),
        'Remaining Days': get_life_remaining_days(birthday_object),
        'Days Since Birth': get_days_since_birth(birthday_object),
        'Months Since Birth': get_months_since_birth(birthday_object),
    }
    return jsonify(data)
    

# Catch-all route to serve frontend files 
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_static(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        # Return index.html for all other routes (e.g., for client-side routing like in Vue/React)
        return send_from_directory(app.static_folder, 'index.html')


if __name__ == "__main__":
    app.run(debug=True)

