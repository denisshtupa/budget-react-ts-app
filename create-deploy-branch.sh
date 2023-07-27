#!/bin/bash

echo "------------------Checking if 'gh-pages' branch exists------------------"
git remote -v
git branch

echo "------------------Creating 'gh-pages' branch------------------"
git checkout -b gh-pages

echo "------------------Pulling origin------------------"
git pull origin gh-pages

echo "------------------Pushing 'gh-pages' branch to remote repository------------------"
git push origin gh-pages
