import cv2
import numpy as np

def cartoonize_image(image_path):
    img = cv2.imread(image_path)
    img = cv2.resize(img, (800, 600))
    
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    gray = cv2.medianBlur(gray, 5)
    
    # Possible issue: Too aggressive values for adaptiveThreshold
    edges = cv2.adaptiveThreshold(
        gray,
        255,  # use 255 instead of 200 to make edges more visible
        cv2.ADAPTIVE_THRESH_MEAN_C,
        cv2.THRESH_BINARY,
        9,    # block size should be odd and > 1
        10    # tweak constant for smoother edge detection
    )
    
    # Fine-tuned bilateral filter
    color = cv2.bilateralFilter(img, 9, 250, 250)
    
    # Combine edges with color
    cartoon = cv2.bitwise_and(color, color, mask=edges)
    
    # Save and show output
    cv2.imwrite("cartoon_output.jpg", cartoon)
    cv2.imshow("Cartoonized Image", cartoon)
    cv2.waitKey(0)
    cv2.destroyAllWindows()

# Correct path with proper escaping (you already did it right!)
cartoonize_image("C:\\Users\\SankarKarunakaran\\Pictures\\coorg\\IMG_8788.JPG")

