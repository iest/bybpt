#!/usr/bin/env bash
grunt && rsync -avz dist/ beyourbestpersonaltraining.co.uk:/srv/www/beyourbest/
