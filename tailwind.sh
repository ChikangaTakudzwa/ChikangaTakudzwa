echo "....................."
echo "....................."
echo "Installing Tailwind"
echo "....................."
echo "....................."
npm install -D tailwindcss

npm i daisyui

echo "....................."
echo "....................."
echo "Installing Flowbite"
echo "....................."
echo "....................."
npm install flowbite

echo "....................."
echo "....................."
echo "Installing TW Elements"
echo "....................."
echo "....................."
npm install tw-elements

echo "....................."
echo "....................."
echo "Running Tailwind init"
echo "....................."
echo "....................."
npx tailwindcss init

echo "....................."
echo "....................."
echo "Watching tailwind css"
echo "....................."
echo "....................."

npx tailwindcss -i ./src/assets/input.css -o ./src/assets/output.css --watch
