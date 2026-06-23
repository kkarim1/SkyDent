import streamlit as st
import streamlit.components.v1 as components
import os

# إعداد الصفحة
st.set_page_config(layout="wide", page_title="SkyDent")

# إخفاء عناصر ستريمليت الافتراضية
st.markdown("""
    <style>
    #MainMenu {visibility: hidden;}
    footer {visibility: hidden;}
    header {visibility: hidden;}
    body {margin: 0; padding: 0;}
    div[data-testid="stStaticComponentContainer"] {padding: 0;}
    </style>
""", unsafe_allow_html=True)

# قراءة وعرض ملف الـ HTML
if os.path.exists("index.html"):
    with open("index.html", "r", encoding="utf-8") as f:
        html_content = f.read()
    
    # عرض الموقع بطريقة تسمح بالتمرير وبأعلى كفاءة
    components.html(html_content, height=1500, scrolling=True)
else:
    st.error("ملف index.html غير موجود في المستودع الرئيسي!")