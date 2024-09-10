'use client'
import Image from "next/image";
import "./page.css";
import ImageScroll from './ImageScroll';
import Social from './Social';
import { useState } from 'react';

export default function Home() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex flex-col min-h-screen p-8">
      
      <header className="mb-8 flex flex-col sm:flex-row items-center sm:items-start">
        <div className="mr-0 sm:mr-4 mb-4 sm:mb-0">
          {!imgError ? (
            <Image
              src="/brain.jpg"
              alt="Brain Tumor MRI"
              width={110}
              height={110}
              className="rounded-full"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-[100px] h-[100px] bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
              Image not found
            </div>
          )}
        </div>
        <div>
          <h1 className="text-2xl mb-1 title-page text-center sm:text-left">
            Brain Tumor Detection & Segmentation Using CNNs on MRI Scans
          </h1> 
          <p className="text-sm title-page text-center sm:text-left">Author: Arhaan Keshwani</p>
          <div className="mt-4 flex justify-center sm:justify-start">
            <Social containerStyles="flex gap-4" iconStyles="w-10 h-10 border rounded-full border-accent flex justify-center items-center hover:bg-white hover:text-black shadow-[0_0_35px_rgba(0,0,300,0.9)]" />
          </div>
        </div>
      </header>
      <main className="flex-grow flex flex-col lg:flex-row">
        <div className="w-full lg:w-2/3 pr-0 lg:pr-8 mb-8 lg:mb-0">
          <section className="max-w-2xl pt-4">
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
            <summary className="text-xl mb-2 section-title pt-6 cursor-pointer">Key Features</summary>
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
            <summary className="text-xl mb-2 section-title pt-4 cursor-pointer">Technical Details</summary>
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
            <summary className="text-xl mb-2 section-title pt-4 cursor-pointer">Project Structure</summary>
            <pre className="p-2 rounded-lg overflow-x-auto text-md">
              <code className="font-thin text-blue-800">{`
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
          <summary className="text-xl mb-2 section-title pt-4 cursor-pointer">Data Preparation</summary>
          <ul className="list-disc pl-5 space-y-2 font-light">
            <li>The project uses a custom DataGenerator class to efficiently load and preprocess MRI images</li>
            <li>Data augmentation techniques are applied to increase the diversity of the training set</li>
            <li>Images are resized to 256x256 pixels and normalized</li>
          </ul>
          </details>
        </section>
        <section className="max-w-2xl">
          <details className="mb-4">
            <summary className="text-xl mb-2 section-title pt-4 cursor-pointer">
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
          <details className="mb-2">
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
          <details className="mb-2">
            <summary className="text-xl mb-4 section-title pt-4 cursor-pointer">Evaluation</summary>
            <ul className="list-disc pl-5 space-y-2 font-light mt-2">
              <p>i. Classification performance is evaluated using accuracy, precision, recall, and F1-score.</p>
              <p >ii. Segmentation performance is assessed using Dice coefficient and Intersection over Union (IoU).</p>
              <p >iii. A comprehensive evaluation pipeline combines both models to provide end-to-end tumor detection and segmentation.</p>
            </ul>
          </details>
        </section>
        <section className="max-w-2xl">
          <details className="mb-2">
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
        <section className="image-scroll h-[50vh] lg:h-full pt-4 overflow-hidden">
        <h1 className="text-2xl mb-4 section-title">Results</h1>
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
        

       
      </footer>
      <p>
      </p>    
    </div>
  );
}

