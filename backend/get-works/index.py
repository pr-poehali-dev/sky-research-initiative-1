import json
import os
import psycopg2

def handler(event: dict, context) -> dict:
    """Получить список всех работ участников."""
    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Max-Age': '86400'}, 'body': ''}

    schema = os.environ['MAIN_DB_SCHEMA']
    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()
    cur.execute(f"SELECT id, title, description, image_url FROM {schema}.works ORDER BY id ASC")
    rows = cur.fetchall()
    cur.close()
    conn.close()

    works = [{'id': r[0], 'title': r[1], 'description': r[2], 'image_url': r[3]} for r in rows]

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'works': works})
    }
