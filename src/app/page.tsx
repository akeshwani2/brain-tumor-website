'use client'
import Image from "next/image";
import "./page.css";
import ImageScroll from './ImageScroll';
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-8">
      <header className="mb-8">
        <h1 className="text-2xl mb-1 title-page text-center sm:text-left">
          Brain Tumor Detection & Segmentation Using CNNs on MRI Scans
        </h1> 
        <p className="text-sm title-page text-center sm:text-left">Author: Arhaan Keshwani</p>
      </header>
      <main className="flex-grow flex flex-col lg:flex-row">
        <div className="w-full lg:w-2/3 pr-0 lg:pr-8 mb-8 lg:mb-0">
          <section className="max-w-2xl">
            <h2 className="text-xl mb-4 section-title">Overview</h2>
            <text>
            This project uses convolutional neural networks (CNNs) to detect and segment brain tumors. It aims to detect and segment brain 
            tumors in MRI (Magnetic Resonance Imaging) scans using state-of-the-art deep learning techniques.
            It employs a two-stage approach: first, a classification model detects the presence of tumors, 
            and then a segmentation model outlines the tumor regions in positive cases.
            </text>
          </section>
          <section className="max-w-2xl">
            <details className="mb-4">
            <summary className="text-xl mb-4 section-title pt-4 cursor-pointer">Key Features</summary>
            <ul className="list-disc pl-5 space-y-2 font-light">
              <li>Automated brain tumor detection in MRI scans</li>
              <li>Precise tumor segmentation for positive cases</li>
              <li>Custom data generator for efficient processing of medical imaging data</li>
              <li>Implementation of specialized loss functions for handling imbalanced datasets</li>
              <li>Integration of classification and segmentation models for comprehensive analysis</li>
            </ul>
            </details>
          </section>
          <section className="max-w-2xl">
            <details className="mb-4">
            <summary className="text-xl mb-4 section-title pt-4 cursor-pointer">Technical Details</summary>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="point-test">Programming Language:</span> Python</li>
              <li><span className="point-test">Deep Learning Framework:</span> TensorFlow and Keras</li>
              <li><span className="point-test">Image Processing Libraries:</span> OpenCV and scikit-image</li>
              <li><span className="point-test">Data Manipulation:</span> NumPy and Pandas</li>
              <li><span className="point-test">Data Visualization:</span> Matplotlib and Seaborn</li>
            </ul>
            </details>
          </section>
          <section className="max-w-2xl">
            <details className="mb-4">
            <summary className="text-xl mb-4 section-title pt-4 cursor-pointer">Project Structure</summary>
            <pre className="p-2 rounded-lg overflow-x-auto text-sm">
              <code className="font-thin text-blue-500">{`
brain-tumor-cnn/
│
├── data/
│   ├── data.csv          
│   └── data_mask.csv     
│
├── models/
│   ├── ResUNet-MRI.json
│   ├── ResUNet-model.json
│   └── resnet-50-MRI.json
│
├── notebooks/
│   └── test.ipynb        
│
├── src/
│   └── utilities.py      
│
├── .gitignore            
├── LICENSE               
├── README.md             
│
└── __pycache__/          
    `.trim()}
            </code>
          </pre>
          </details>
        </section>
        <section className="max-w-2xl">
          <details className="mb-4">
          <summary className="text-xl mb-4 section-title pt-4 cursor-pointer">Data Preparation</summary>
          <ul className="list-disc pl-5 space-y-2 font-light">
            <li>The project uses a custom DataGenerator class to efficiently load and preprocess MRI images</li>
            <li>Data augmentation techniques are applied to increase the diversity of the training set</li>
            <li>Images are resized to 256x256 pixels and normalized</li>
          </ul>
          </details>
        </section>
        <section className="max-w-2xl">
          <details className="mb-4">
            <summary className="text-xl mb-4 section-title pt-4 cursor-pointer">
              Model Architecture
            </summary>
            <ul className="list-disc pl-5 space-y-2 font-light mt-2">
              <li className="point-test">Classification Model: ResNet-50</li>
              <p className="pl-4"><span className="point-test">ResNet-50</span> is a specific architecture of Residual Networks (ResNet), which are deep convolutional neural networks designed to address the vanishing gradient problem in very deep networks.</p>
              <p className="pl-4">Key features of ResNet-50 include:</p>
              <p className="pl-8"> i. Depth: ResNet-50 has 49 layers, including 36 convolutional layers and 13 residual blocks.</p>
              <p className="pl-8"> ii. Residual Connections: ResNet-50 uses residual connections to help the network learn more complex features and avoid the vanishing gradient problem.</p>
              <p className="pl-8"> iii. Pre-trained on ImageNet: ResNet-50 was pre-trained on the ImageNet dataset, which contains over 14 million images and 1000 categories.</p>
              <p className="pl-8"> iv. Fine-tuning: ResNet-50 can be fine-tuned for specific tasks, such as tumor detection in medical images.</p>
              <p className="pl-4">Pre-trained on ImageNet and fine-tuned for tumor detection.</p>
              <p className="pl-4">The goal was to categorize medical images including MRI scans and X-rays into one of two cases:</p>
              <p className="pl-8">i. The tumor is present</p>
              <p className="pl-8">ii. The tumor is absent (normal)</p>
              <li className="point-test">Segmentation Model: ResUNet</li>
              <p className="pl-4"><span className="point-test">ResUNet</span> is a combination of ResNet and U-Net architectures, designed for image segmentation tasks.</p>
              <p className="pl-4">Key features of ResUNet include:</p>
              <p className="pl-8"> i. Combines residual learning from ResNet with the U-shaped architecture of U-Net.</p>
              <p className="pl-8"> ii. Encoder-decoder structure with skip connections</p>
              <p className="pl-8"> iii. Particularly effective for medical image segmentation</p>
              <p className="pl-8"> iv. Maintains high-resolution features throughout the network</p>
              <p className="pl-4">In this project, ResUNet is used for the segmentation task (outlining tumor regions)</p>
            </ul>
          </details>
        </section>
        <section className="max-w-2xl">
          <details className="mb-4">
            <summary className="text-xl mb-4 section-title pt-4 cursor-pointer">Training the model</summary>
            <ul className="list-disc pl-5 space-y-2 font-light mt-2">
              <li>The models were trained using a two-stage approach:</li>
              <p className="pl-4">i. The classification model is trained to detect the presence of tumors.</p>
              <p className="pl-4">ii. The segmentation model is trained on positive cases to outline tumor regions.</p>
              <li>Custom loss functions (Tversky and Focal Tversky) are implemented to handle class imbalance in segmentation tasks.</li>
            </ul>
          </details>
        </section>
        <section className="max-w-2xl">
          <details className="mb-4">
            <summary className="text-xl mb-4 section-title pt-4 cursor-pointer">Evaluation</summary>
            <ul className="list-disc pl-5 space-y-2 font-light mt-2">
              <p>i. Classification performance is evaluated using accuracy, precision, recall, and F1-score.</p>
              <p >ii. Segmentation performance is assessed using Dice coefficient and Intersection over Union (IoU).</p>
              <p >iii. A comprehensive evaluation pipeline combines both models to provide end-to-end tumor detection and segmentation.</p>
            </ul>
          </details>
        </section>
        <section className="max-w-2xl">
          <details className="mb-4">
            <summary className="text-xl mb-4 section-title pt-4 cursor-pointer">Plans for the future</summary>
            <ul className="list-disc pl-5 space-y-2 font-light mt-2">
              <p >i. Implement 3D convolutions to better utilize volumetric MRI data.</p>
              <p >ii. Explore ensemble methods for improved classification accuracy.</p>
              <p >iii. Investigate attention mechanisms for enhanced segmentation performance.</p>
              <p >iv. Develop a user-friendly web interface for easy model deployment.</p>
            </ul>
          </details>
        </section>
      </div>
      <div className="w-full lg:w-1/2">
        <section className="image-scroll h-[50vh] lg:h-full overflow-hidden">
        <h1 className="text-3xl mb-4 section-title">Results</h1>
        <ImageScroll />
        </section>
      </div>
      </main>
      <footer className="mt-5 flex justify-left">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://docs.google.com/document/d/1ZnOqoBX--tSGoFDoJ93XW3hpVt0krFvL7_lmujfNcQA/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={20}
            height={20}
          />
          Breast Cancer Prediction Model
        </a>
        <div className="pl-10">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/arhaan-keshwani/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* LinkedIn SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
          LinkedIn
        </a>
        </div>

        <div className="pl-10">
        <a
    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    href="https://github.com/akeshwani2"
    target="_blank"
    rel="noopener noreferrer"
  >
    {/* GitHub SVG icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
    GitHub
  </a>
  </div>
      </footer>
      <p>
      </p>    
    </div>
  );
}

