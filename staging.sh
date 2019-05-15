rm -rf build/
npm run build

aws s3 sync --profile=vfor build/ s3://vfor.org --acl public-read
rm -rf build/
echo "Page deployed to: www.vfor.com"