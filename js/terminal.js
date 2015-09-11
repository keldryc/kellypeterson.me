
var external_links = [
  {title:'github',link:'https://github.com/keldryc'},
  {title:'bitbucket',link:'https://bitbucket.org/kellynn'},
  {title:'resume',link:'docs/PETERSON_RESUME.pdf'}, 
  {title:'HOME/SPAC',link:''}
];

var project_desc = [
  {title:'PROF/current',where:'',when:'current',desc:'Network software in C++'},
  {title:'PROF/COG',where:'Cornerstone Operations Group',when:'2014',desc:'Web App development primarily in ColdFusion, JavaScript, SQL'},
  {title:'HOME/SPAC',where:'Family art project :]',when:'Oct 2014',desc:'Web dev in Python using Flask, and Sqlite.'},
  {title:'ACAD',where:'University of Delaware',when:'2011-2015',desc:'GitHub and BitBucket host school assignments for Compiler Design and Senior Design.'}
]


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
        <tr><td>grep</td><td>(use --help) View technical info on a project</td></tr>\
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
    grep: function(proj) {
      var header = '<tr><th style=\'width:70px\'>TAG</th><th style=\'width:80px\'>COMPANY</th><th style=\'width:70px\'>WHEN</th><th>DESCRIPTION</th></tr>'; 
      switch(topic){
        case project_desc[0].title:
          var table = table_style + header;
          table += '<tr><td style=\'width:70px\'>'+project_desc[0].title+'</td><td style=\'width:80px\'>'+project_desc[0].where+'</td><td style=\'width:70px\'>'+project_desc[0].when+'</td><td>'+project_desc[0].desc+'</tr></table>';
          this.echo(table,{'raw':'true'});
          break;
        case project_desc[1].title:
          var table = table_style + header;
          table += '<tr><td style=\'width:70px\'>'+project_desc[1].title+'</td><td style=\'width:80px\'>'+project_desc[1].where+'</td><td style=\'width:70px\'>'+project_desc[1].when+'</td><td>'+project_desc[1].desc+'</tr></table>';
          this.echo(table,{'raw':'true'});
          break;
        case project_desc[2].title:
          var table = table_style + header;
          table += '<tr><td style=\'width:70px\'>'+project_desc[2].title+'</td><td style=\'width:80px\'>'+project_desc[2].where+'</td><td style=\'width:70px\'>'+project_desc[2].when+'</td><td>'+project_desc[2].desc+'</tr></table>';
          this.echo(table,{'raw':'true'});
          break;
        case project_desc[3].title:
          var table = table_style + header;
          table += '<tr><td style=\'width:70px\'>'+project_desc[3].title+'</td><td style=\'width:80px\'>'+project_desc[3].where+'</td><td style=\'width:70px\'>'+project_desc[3].when+'</td><td>'+project_desc[3].desc+'</tr></table>';
          this.echo(table,{'raw':'true'});
          break;
        case 'all':
          var table = table_style + header;
          for (i=0; i < project_desc.length; i++){
            table += '<tr><td>'+project_desc[i].title+'</td><td>'+project_desc[i].where+'</td><td>'+project_desc[i].when+'</td><td>'+project_desc[i].desc+'</tr>';
          }
          this.echo(table+'</table>',{'raw':'true'});
          break;
        default:
          this.echo('view project details with \'cat [PROJECT]\' of a project below\n');
          for(i=0; i < project_desc.length; i++){
            this.echo(project_desc[i].title);
          }
          this.echo('\n');
      }
    }
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

