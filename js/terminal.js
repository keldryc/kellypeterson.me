
var external_links = [
  {title:'github',link:'https://github.com/keldryc'},
  {title:'bitbucket',link:'https://bitbucket.org/kellynn'},
  {title:'resume',link:'docs/PETERSON_RESUME.pdf'}, 
  {title:'last.fm',link:'https://last.fm/user/kamiepatuck'},
];

var table_style = "<table style='font-family: FreeMono, monospace; color: #aaa; font-size: 12px; line-height: 14px'>"

$(document).ready(function() {
  $('#term').terminal({
   
    ping: function() {
      this.echo('PING www.kellypeterson.me (127.0.0.1) 56 bytes of data.\n'
                +'64 bytes from www.kellypeterson.me: seq=0 ttl=128 time=0.001 ms\n\n'
                +'--- www.kellypeterson.me ping statistics ---\n'
                +'1 packets transmitted, 1 received, 0% packet loss\n'
                +'round-trip min/avg/max/mdev = 0.001/0.001/0.001/0.000 ms\n\n'
                +'hi delucks');
    },
    help: function() {
      this.echo("<br>"+table_style+"\
        <tr><td>help</td><td>Lists all possible commands</td></tr>\
        <tr><td>who</td><td>kelly peterson, that\'s who</td></tr>\
        <tr><td>ping</td><td>pong</td></tr>\
        <tr><td>ls</td><td>Displays external links'</td></tr>\
        <tr><td>cd</td><td>(use --help) Change directory (open links in new tab)</td></tr>\
        </table>",{'raw':'true'});
    },
    ls: function() {
      this.echo('use \'cd [DIRECTORY]\' to follow a link\n');
      var table = table_style;
      for (i=0; i < external_links.length; i++){
        table += "<tr><td>drwx--xr-x+</td><td>1</td><td>Kelly</td><td>usual</td><td>4096</td><td>Jun 8</td><td>21:28</td><td>"+external_links[i].title+"</td></tr>"
      }
      table +="</table>"; 
      this.echo(table,{'raw':'true'});
    },
    who: function() {
      this.echo('Hi! o/ I\'m Kelly. I am a software engineer and am loving it.\n\nThere are a few easter eggs to find on here. Maybe a few jokes strewn around. If you\'re lucky you\'ll find them.\n');
    },
    cd: function(dir) {
      if(dir == external_links[0].title){
        window.open(external_links[0].link,'_blank');
      }
      else if(dir == external_links[1].title){
        window.open(external_links[1].link,'_blank');
      }
      else if (dir == external_links[2].title){
        window.open(external_links[2].link,'_blank');
      }
      else if (dir == external_links[3].title){
        window.open(external_links[3].link,'_blank');
      }
      else {
        this.exec("ls");
      }
    },
  },{ 
    prompt:'> ', 
    name:'shell', 
    greetings:'Welcome! Feel free to navigate the site via this shell\ntype \'help\' for a list of commands' 
    });

  $('#toggle_term').click(function() {
    $('#term').slideToggle('fast');
    $('#toggle_term').toggleClass('fa-minus-square fa-plus-square');
  });

});

