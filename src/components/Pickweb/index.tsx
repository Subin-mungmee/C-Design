import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Picweb1 from '../Img/Pickweb1.png';
import Picweb2 from '../Img/Pickweb2.jpg';
import Picweb3 from '../Img/Pickweb3.jpg';



type Template = {
  id: number;
  name: string;
  category: string;
  image: string;
  previewUrl: string; // เพิ่ม field สำหรับลิงก์ตัวอย่าง
};

const templates: Template[] = [
  {
    id: 1,
    name: 'เว็บสายมู ดูดวง',
    category: 'Sale Page',
    image: Picweb1.src,
    previewUrl: 'https://lambent-paletas-0dcdd0.netlify.app/',
  },
  {
    id: 2,
    name: 'เว็บแบบหน้าเดียว',
    category: 'One Page',
    image: Picweb2.src,
    previewUrl: 'https://mgproratchpruke.com/',
  },
  {
    id: 3,
    name: 'เว็บแนวบริษัท',
    category: 'CORPORATE WEBSITE',
    image: Picweb3.src,
    previewUrl: 'https://adsawinplug.com',
  },
];

const TemplateSelector: React.FC = () => {
  const handleSelect = (template: Template) => {
    alert(`Selected Template: ${template.name}`);
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">เลือก Website Template ของคุณ</h2>
      <div className="row">
        {templates.map((template) => (
          <div className="col-md-4 mb-4" key={template.id}>
            <div className="card h-100 shadow-sm">
              {/* รูปภาพมีลิงก์ไปยัง previewUrl */}
              <a href={template.previewUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={template.image}
                  className="card-img-top"
                  alt={template.name}
                  style={{ cursor: 'pointer' }}
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">{template.name}</h5>
                <p className="card-text text-muted">{template.category}</p>
                <div className="d-flex justify-content-between">
                  <a
                    href={template.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary"
                  >
                    ดูตัวอย่าง
                  </a>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleSelect(template)}
                  >
                    เลือก
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;
