import json
import os
import base64
import uuid
import boto3
import psycopg2

def handler(event: dict, context) -> dict:
    """Загрузить работу участника: картинка + название + описание."""
    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Max-Age': '86400'}, 'body': ''}

    body = json.loads(event.get('body') or '{}')
    title = body.get('title', '').strip()
    description = body.get('description', '').strip()
    image_data = body.get('image', '')
    image_mime = body.get('mime', 'image/jpeg')

    if not image_data:
        return {'statusCode': 400, 'headers': {'Access-Control-Allow-Origin': '*'}, 'body': json.dumps({'error': 'Изображение обязательно'})}

    # Decode base64
    if ',' in image_data:
        image_data = image_data.split(',', 1)[1]
    image_bytes = base64.b64decode(image_data)

    ext = image_mime.split('/')[-1].replace('jpeg', 'jpg')
    key = f'works/{uuid.uuid4()}.{ext}'

    s3 = boto3.client(
        's3',
        endpoint_url='https://bucket.poehali.dev',
        aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'],
        aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY'],
    )
    s3.put_object(Bucket='files', Key=key, Body=image_bytes, ContentType=image_mime)
    image_url = f"https://cdn.poehali.dev/projects/{os.environ['AWS_ACCESS_KEY_ID']}/files/{key}"

    schema = os.environ['MAIN_DB_SCHEMA']
    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()
    cur.execute(
        f"INSERT INTO {schema}.works (title, description, image_url) VALUES ('{title.replace(chr(39), chr(39)*2)}', '{description.replace(chr(39), chr(39)*2)}', '{image_url}') RETURNING id"
    )
    work_id = cur.fetchone()[0]
    conn.commit()
    cur.close()
    conn.close()

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'id': work_id, 'image_url': image_url})
    }
