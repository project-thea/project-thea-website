yarn run build #

#cp ... dit/
#
cp privacy-policy.html dist/
mkdir -p dist/assets 
cp src/assets/* dist/assets/
git add ./*
cd dist && git add ./* -f
git commit -m "Update website" -n
git checkout master # you can avoid this line if you are in master...
git subtree split --prefix dist -b gh-pages # create a local gh-pages branch containing the splitted output folder
git push -f origin gh-pages:gh-pages # force the push of the gh-pages branch to the remote gh-pages branch at origin
git branch -D gh-pages # delete the local gh-pages because you will need it: ref


#https://raw.githubusercontent.com/project-thea/project-thea-website/master/src/assets/THEA-DCT-Poster.pdf
#CNAME https://project-thea.org/


