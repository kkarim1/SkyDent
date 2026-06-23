import streamlit as st
import streamlit.components.v1 as components
import os

# إعداد الصفحة لتأخذ العرض الكامل للشاشة وبدون حواف بيضاء مزعجة
st.set_page_config(layout="wide", page_title="SkyDent")

# كود لإخفاء شريط ستريمليت العلوي والسفلي لتظهر الصفحة كأنها موقع مستقل تماماً
st.markdown("""
    <style>
    #MainMenu {visibility: hidden;}
    footer {visibility: hidden;}
    header {visibility: hidden;}
    body {margin: 0; padding: 0;}
    iframe {border: none;}
    </style>
""", unsafe_style=True)

# دالة لقراءة ملف الـ HTML الأساسي
def load_html():
    if os.path.exists("index.html"):
        with open("index.html", "r", encoding="utf-8") as f:
            return f.read()
    return "<h3>ملف index.html غير موجود في المجلد الرئيسي!</h3>"

# عرض الموقع بالكامل داخل التنسيق الصحيح
html_content = load_html()
components.html(html_content, height=1200, scrolling=True)