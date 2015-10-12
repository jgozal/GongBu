import os
import httplib2
from BeautifulSoup import BeautifulSoup, SoupStrainer

http = httplib2.Http()
status, response = http.request('http://www.lynda.com/Regular-Expressions-tutorials/Using-Regular-Expressions/85870-2.html') #URL from the site you'd like to scrape

for link in BeautifulSoup(response, parseOnlyThese=SoupStrainer('a')):
    if link.has_key('href'):
        if 'http://www.lynda.com/Regular-Expressions-tutorials/' in link['href']: #Parse only the links that contain the key URL to your specific tutorial
            l = link['href']
            #print link['href']
            os.system("youtube-dl --cookies cookies.txt " + l)