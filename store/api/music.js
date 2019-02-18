import request from '~/plugins/axios'

// 列表
export function musicList() {
  return new Promise((resolve) => {
    resolve({
      data: {
        code: 1,
        result: {
          list: [
            {
              title: '月光变奏曲',
              url: 'https://api.bzqll.com/music/tencent/url?id=002GrJ771EmliH&key=579621905',
              image: 'https://y.gtimg.cn/music/photo_new/T001R300x300M000003EE01s4cpo9D.jpg',
              artist: '秦时明月',
              lyric: "WzAwOjAwOjAwXeatpOatjOabsuS4uuayoeacieWhq+ivjeeahOe6r+mfs+S5kO+8jOivt+aCqOaso+i1jw=="
            },
            {
              title: '幻音宝盒',
              url: 'https://api.bzqll.com/music/tencent/url?id=002WtCw213iFz7&key=579621905',
              image: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004YSRet2aqPan.jpg',
              artist: '相声瓦舍',
              lyric: "WzAwOjAwOjAwXeatpOatjOabsuS4uuayoeacieWhq+ivjeeahOe6r+mfs+S5kO+8jOivt+aCqOaso+i1jw=="
            },
            {
              title: '梦太晚',
              url: 'https://api.bzqll.com/music/tencent/url?id=00301vrC14cTmK&key=579621905',
              image: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004EFnnt2LcbjY.jpg',
              artist: '董真',
              lyric: "W3RpOuaipuWkquaZmu+8iOWKqOa8q+WJp+OAiuenpuaXtuaYjuaciOS5i+epuuWxsem4n+ivreOAi+eJh+Wwvuabsu+8iV0KW2FyOiDokaPotJ5dClthbDpdCltieTpdCltvZmZzZXQ6MF0KWzAwOjAwLjAwXeaipuWkquaZmiAo44CK56em5pe25piO5pyI5LmL56m65bGx6bif6K+t44CL5Yqo55S754mH5bC+5puyfOOAiuWkqeihjOS5neatjOOAi+WKqOeUu+esrDEw6ZuG54mH5bC+5puyKSAtIOiRo+ecnyAoY2MgRG9uZykKWzAwOjAyLjUxXeivje+8muiRo+i0ni/pq5jpnZkKWzAwOjA1LjAzXeabsu+8muiRo+i0ngpbMDA6MDcuNTRd57yW5puy77ya5YiY5rKbClswMDoxMC4wNl3nvKnmt7fvvJrlj7LmlocKWzAwOjEyLjU4XeiNieacqOaYj+m7hCDku7/kvZvmnq/ooYDmn5PkuobpnJwKWzAwOjIwLjAwXQpbMDA6MjAuNjFd5Ymp5oiR5a2k5Y2VClswMDoyMy40Ml0KWzAwOjI1LjU2XeiDjOW9seacquWkriDlpb3lg4/msZ/muZbpgqPkuYjplb8KWzAwOjMyLjY2XQpbMDA6MzMuNTJd5Ymp5oiR5LuT5oO2ClswMDozNi4zOF0KWzAwOjM4LjYwXeWGt+WGt+eahOaciOWFiSDlgZzmu57lnKjohLjkuIoKWzAwOjQzLjQ0XQpbMDA6NDQuODhd6K+35Li65oiR6ZqQ6JePIOa6ouWHuueahOazquiKsQpbMDA6NDkuODZdClswMDo1MS4zNF3po47mnaXlvpfnqoHnhLYg55WZ5LiA5Zyw5oKy5LykClswMDo1Ni4zNV0KWzAwOjU4LjMyXeWDj+eIseadpeWOu+S4jeWjsOS4jeWTjQpbMDE6MDIuODldClswMTowNC4wMV3miJHlpJrmg7Mg5oiR5aSa5oOzClswMTowNy4zNl3mlqnmlq3kvaDmt6Hmt6HnmoTlj5HpppkKWzAxOjEyLjA3XQpbMDE6MTIuNjJd5bim552A55y35oGL5ZKM6LSq5aaEClswMToxNS44N10KWzAxOjE3LjAzXeaipuWkquaZmiDoirHlpKrpppkKWzAxOjE5Ljg2XQpbMDE6MjAuNTZd5oSf6KeJ5L2g6Lez5Yqo55qE6IO46IabClswMToyNS42Nl3nl7TmoqbkuIDlnLoKWzAxOjI4LjkzXQpbMDE6NTkuOTRd6aOO6Zuo5ruC5rKxIOa3ueayoeaYqOaXpeeahOmXruWAmQpbMDI6MDcuNTdd5rKJ6buYIOa8guazigpbMDI6MTAuNTJdClswMjoxMi40NV3lsoHmnIjlqJHlqYYg5reh5ryg5LqG6LCB55qE5omn552AClswMjoxOS44M10KWzAyOjIxLjEzXeWuv+WRvSDpmr7ourIKWzAyOjIzLjU2XQpbMDI6MjUuNTdd5pu+57uP55qE5pyI5YWJIOWcqOWTquS4qui/nOaWuQpbMDI6MzAuNDhdClswMjozMS45N13osIHkuLrmiJHmk6blubIg5rqi5Ye655qE5rOq6IqxClswMjozNi41OF0KWzAyOjM4LjQyXemjjui/mOaYr+eqgeeEtiDnrJHmiJHlpKrnl7Tni4IKWzAyOjQzLjEwXQpbMDI6NDUuMzhd6YGX5b+YIOWRvOWVuOiAjOi/h+eahOauhwpbMDI6NDkuNzJdClswMjo1MS4xNV3miJHlpJrmg7Mg5oiR5aSa5oOzClswMjo1My44N10KWzAyOjU0LjQwXeaWqeaWreS9oOa3oea3oeeahOWPkemmmQpbMDI6NTguODFdClswMjo1OS41OV3luKbnnYDnnLfmgYvlkozotKrlpoQKWzAzOjAzLjAwXQpbMDM6MDQuMDJd5qKm5aSq5pmaIOiKseWkqummmQpbMDM6MDcuMjdd5oSf6KeJ5L2g6Lez5Yqo55qE6IO46IabClswMzoxMS44MV0KWzAzOjEyLjUxXeeXtOaipuS4gOWcugpbMDM6MTUuMTNdClswMzozMC40M13moqblpKrmmZog6Iqx5aSq6aaZClswMzozMi43M10KWzAzOjMzLjMxXeaEn+inieS9oOi3s+WKqOeahOiDuOiGmwpbMDM6MzguNDdd55e05qKm5LiA5Zy6"
            },
            {
              title: '心之逆鳞',
              url: 'https://api.bzqll.com/music/tencent/url?id=003Vqd0l1CVgxb&key=579621905',
              image: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004XcKTp3pzJJ7.jpg',
              artist: '魏小涵',
              lyric: "WzAwOjAwOjAwXeatpOatjOabsuS4uuayoeacieWhq+ivjeeahOe6r+mfs+S5kO+8jOivt+aCqOaso+i1jw=="
            },
            {
              title: '只要平凡 《我不是药神》电影主题曲',
              url: 'https://api.bzqll.com/music/tencent/url?id=003HHPxJ4638xA&key=579621905',
              image: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000K7srf1rZtOX.jpg',
              artist: '张杰 / 张碧晨',
              lyric: "W3RpOuWPquimgeW5s+WHoSAo44CK5oiR5LiN5piv6I2v56We44CL55S15b2x5Li76aKY5puyKV0KW2FyOuW8oOadsC/lvKDnoqfmmahdClthbDrlj6ropoHlubPlh6FdCltieTpdCltvZmZzZXQ6MF0KWzAwOjAwLjAwXeWPquimgeW5s+WHoSAo44CK5oiR5LiN5piv6I2v56We44CL55S15b2x5Li76aKY5puyKSAtIOW8oOadsCAoSmFzb24gWmhhbmcpL+W8oOeip+aZqApbMDA6MDEuNTld6K+N77ya5qC85qC8ClswMDowMy4xOV3mm7LvvJrpu4TotoUKWzAwOjA0Ljc5XeS5n+iuuOW+iOi/nOaIluaYr+aYqOWkqQpbMDA6MDguNzVd5Zyo6L+Z6YeM5oiW5Zyo5a+55bK4ClswMDoxMi45MV3plb/ot6/ovpfovaznprvlkIjmgrLmrKIKWzAwOjE2Ljk2XeS6uuiBmuWPiOS6uuaVowpbMDA6MjEuMTNd5pS+6L+H5a+56ZSZ5omN55+l562U5qGIClswMDoyNS4zMF3mtLvnnYDnmoTli4fmlaIKWzAwOjI5LjQ1XeayoeacieelnueahOWFieeOrwpbMDA6MzMuNTNd5L2g5oiR55Sf6ICM5bmz5YehClswMDozNy44Ml3lnKjlv4Pnoo7kuK3orqTmuIXpgZfmhr4KWzAwOjQxLjg4XeeUn+WRvea8q+mVv+S5n+efreaaggpbMDA6NDUuOTZd6Lez5Yqo5b+D6ISP6ZW/5Ye66Jek6JSTClswMDo1MC4wOV3mhL/kuLrpmanogIzmiJgKWzAwOjU0LjI2Xei3jOWFpeeBsOaal+WdoOWFpea3sea4igpbMDA6NTguMzld5rK+5ruh5rOl5Zyf55qE6IS4ClswMTowMi40MV3msqHmnInnpZ7nmoTlhYnnjq8KWzAxOjA2LjM3XeaPoee0p+aJi+S4reeahOW5s+WHoQpbMDE6MTAuNzVd5q2k5b+D5q2k55Sf5peg5oa+ClswMToxNC42NF3nlJ/lkb3nmoTngavlt7Lngrnnh4MKWzAxOjIxLjUyXeacieS4gOWkqeS5n+iuuOS8mui1sOi/nApbMDE6MjUuMjFd5Lmf6K646L+Y6IO95YaN55u46KeBClswMToyOS40MF3ml6DorrrlnKjkurrnvqTlnKjlpKnovrkKWzAxOjMzLjQ3XeiuqeaIkeWGjeeci+a4heS9oOeahOiEuApbMDE6MzcuNjdd5Lu75rOq5rC06ZO65ruh5LqG5Y+M55y8ClswMTo0MS42N13omb3ml6DoqIDms6rmu6HpnaIKWzAxOjQ1Ljg2XeS4jeimgeelnueahOWFieeOrwpbMDE6NDkuNzJd5Y+q6KaB5L2g55qE5bmz5YehClswMTo1My4wMV0KWzAxOjU0LjI4Xemfs+S5kOWItuS9nOS6uu+8mum7hOi2hQpbMDE6NTUuMDJd57yW5puy77ya6buE6LaFClswMTo1NS4xOF3lkInku5bvvJrpu4TotoUKWzAxOjU1LjM1XeWNleewp+euoe+8muWImOWzpApbMDE6NTUuNTRd5ZKM6Z+z57yW5YaZ77ya6buE6LaFClswMTo1Ni42NF3lkozpn7PmvJTllLHvvJrlvKDmnbAg5byg56Kn5pmoClswMTo1Ni45N13kurrlo7DlvZXpn7PluIjvvJrmsZ3mlofljZov5pyx546J5am3ClswMTo1Ny40MF3lvZXpn7Plt6XkvZzlrqTvvJpCSUcuSiBTdHVkaW8v6aaZ6JWJ6K6h5YiS5b2V6Z+z5qOaClswMTo1Ny45MF3mt7fpn7PluIjvvJrlkajlpKnmvogKWzAxOjU4LjEzXeavjeW4puW3peeoi+W4iO+8muWRqOWkqea+iApbMDE6NTguNDNd5q+N5bim5bel5L2c5a6k77yaVEMgRmFkZXJzClswMTo1OC44OF0KWzAyOjM5Ljg1XeWcqOW/g+eijuS4reiupOa4hemBl+aGvgpbMDI6NDMuOTVd55Sf5ZG95ryr6ZW/5Lmf55+t5pqCClswMjo0OC4wNl3ot7Pliqjlv4PohI/plb/lh7rol6TolJMKWzAyOjUyLjA5XeaEv+S4uumZqeiAjOaImApbMDI6NTYuMzFd6LeM5YWl54Gw5pqX5Z2g5YWl5rex5riKClswMzowMC40NV3msr7mu6Hms6XlnJ/nmoTohLgKWzAzOjA0LjUwXeayoeacieelnueahOWFieeOrwpbMDM6MDguMzhd5o+h57Sn5omL5Lit55qE5bmz5YehClswMzoxMi44Ml3mnInkuIDlpKnkuZ/orrjkvJrotbDov5wKWzAzOjE2LjkyXeS5n+iuuOi/mOiDveWGjeebuOingQpbMDM6MjEuMTNd5peg6K665Zyo5Lq6576k5Zyo5aSp6L65ClswMzoyNS4wMF3orqnmiJHlho3nnIvmuIXkvaDnmoTohLgKWzAzOjI5LjM4XeS7u+azquawtOmTuua7oeS6huWPjOecvApbMDM6MzMuMzFd6Jm95peg6KiA5rOq5ruh6Z2iClswMzozNy42MV3kuI3opoHnpZ7nmoTlhYnnjq8KWzAzOjQxLjQyXeWPquimgeS9oOeahOW5s+WHoQpbMDM6NDUuOTZd5q2k5b+D5q2k55Sf5peg5oa+ClswMzo0OS43NF3nlJ/lkb3nmoTngavlt7Lngrnnh4M="
            },
            {
              title: '身骑白马',
              url: 'https://api.bzqll.com/music/tencent/url?id=002Iw9C92SzTTA&key=579621905',
              image: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000017856g0HEoVo.jpg',
              artist: '周深',
              lyric: "W3RpOui6q+mqkeeZvemprCAoTGl2ZSldClthcjrmiJHlj6/kuI3mmK/ku4DkuYjlubrom77lrZBdClthbDrokpnpnaLllLHlsIbnjJznjJznjJwg56ysNuacn10KW2J5Ol0KW29mZnNldDowXQpbMDA6MDAuMTBd6Lqr6aqR55m96amsIChMaXZlKSAtIOWRqOa3sQpbMDA6MDAuMjBd6K+N77ya5b6Q5L2z6I65ClswMDowMC4zMF3mm7LvvJrlvpDkvbPojrkv6IuP6YCa6L6+ClswMDowMC40MF3nvJbmm7LvvJrmnajpmLMKWzAwOjAwLjUwXQpbMDA6MDIuMzBd6Z+z5LmQ5oC755uR77ya5qKB57+Y5p+PClswMDowMy40MV1QR03vvJrlrZTmvYfkuIAKWzAwOjA0LjU3XeWQieS7lu+8muiuuOW+t+ayu1RpZ2VIdWkv6buE5Luy6LSkClswMDowNi4wN11LZXlib2FyZO+8mui+vuaXpeS4uS/mnajpmLMKWzAwOjA2LjI2XUJhc3PvvJrnjovnrJHlhqwKWzAwOjA2LjM4XeaJk+WHu+S5kO+8muWImOaViOadvgpbMDA6MDYuNTVd6byT5omL77ya5b6Q5Y2P5LymTGF3cmVuY2UKWzAwOjA3LjMwXeWSjOWjsO+8muWImOiKsy/miIjplJAv5p+z6Z2ZL+avleingeaZnwpbMDA6MDguNDBd6JCo5YWL5pavL+mVv+esm++8mk1pbGVzIExpClswMDowOC42Ml3plb/lj7fvvJrosKLnh5XovokKWzAwOjA4Ljc3XeWwj+WPt++8mlRvYnkgTWFrClswMDowOC44OV3lvKbkuZDvvJrpnbPmtbfpn7PCruW8puS5kOWbogpbMDA6MDkuNTZdClswMDoxOS41M13miJHniLHosIEKWzAwOjIwLjMxXQpbMDA6MjAuOTNd6Leo5LiN6L+HClswMDoyMi4zOF0KWzAwOjIyLjk2XeS7juadpQpbMDA6MjMuODBd5Lmf5LiN6KeJ5b6X6ZSZClswMDoyNS44MV0KWzAwOjI2LjUyXeiHquS7peS4ugpbMDA6MjcuNzRdClswMDoyOC4zN13mipPnnYDnl5sKWzAwOjMwLjI1XeWwseiDvQpbMDA6MzEuMTFd5b6A5Zue5b+G6YeM6LqyClswMDozMy41MV3lgY/miafnm7jkv6HnnYAKWzAwOjM2LjIwXQpbMDA6MzcuMzZd5Y+X6K+F5ZKS55qE5rC05pm255CDClswMDo0MC4xMl0KWzAwOjQwLjk5XeWPr+iDvemYu+aMoeW/g+WKqOeahApbMDA6NDQuMThd55CG55SxClswMDo0NS4zNl0KWzAwOjQ4LjkzXeiAjOS9oOWNtOmdoOi/keS6hgpbMDA6NTIuMjFd6YC85oiR5Lus6KeG57q/5Lqk6ZSZClswMDo1NS42OV3ljp/lnLDkuI3liqgKWzAwOjU3LjA4XQpbMDA6NTcuNjld5oiW5ZCR5YmN6LWwClswMDo1OC44M10KWzAwOjU5LjQ1XeeqgeeEtuWcqOaEjwpbMDE6MDEuNDhd6L+Z5YiG6ZKfClswMTowMy4wOF3nnLzliY3pu4TmspkKWzAxOjA0LjI1XeW8pea8q+S6huetieWAmQpbMDE6MDYuNjRd6ICz6L655Lyg5p2lClswMTowNy45N13lrbHlvLHnmoTlkbzmlZEKWzAxOjA5LjkyXQpbMDE6MTAuNTBd6L+96LW26KaB5oiRClswMToxMi42Ml3niLHnmoTkuI3kv53nlZkKWzAxOjE1LjIwXQpbMDE6MTkuOTRd5oiR6Lqr6aqR55m96amsClswMToyMi45NF0KWzAxOjIzLjcyXei1sOS4ieWFswpbMDE6MjYuNDRdClswMToyNy4yMF3miJHmlLnmjaLntKDooaMKWzAxOjMwLjUwXQpbMDE6MzEuMTVd5Zue5Lit5Y6fClswMTozNC4zMl0KWzAxOjM1LjAyXeaUvuS4i+ilv+WHiQpbMDE6MzYuOTldClswMTozOC4xOF3ml6DkurrnrqEKWzAxOjQxLjYwXQpbMDE6NDIuMjFd5oiR5LiA5b+D5Y+q5oOzClswMTo0NS44NF3njovlrp3pko8KWzAxOjQ5LjU1XQpbMDI6MDQuNTVd5oiR6Lqr6aqR55m96amsClswMjowNy40NV0KWzAyOjA4LjA5Xei1sOS4ieWFswpbMDI6MDkuMzRdClswMjoxMS41MF3miJHmlLnmjaLntKDooaMKWzAyOjE0LjEwXQpbMDI6MTUuNTld5Zue5Lit5Y6fClswMjoxOC43Ml0KWzAyOjE5LjI2XeaUvuS4i+ilv+WHiQpbMDI6MjIuMDldClswMjoyMi43M13ml6DkurrnrqEKWzAyOjI1LjQyXQpbMDI6MjYuNDNd5oiR5LiA5b+D5Y+q5oOzClswMjoyOS4yMV0KWzAyOjMwLjg0XeeOi+WunemSjwpbMDI6MzMuMjFdClswMjozNS4zN13mu6HouqvkvKTnl5XntK/ntK8KWzAyOjM3LjY4XeS5n+adpeS4jeWPiueXmwpbMDI6MzkuODZdClswMjo0MC45NV3pgqPmmK/mjIflvJXmiJEKWzAyOjQyLjY3Xei1sOWQkeS9oOeahOa4healmuaEn+WPlwpbMDI6NDYuNjVdClswMjo1MC4wNF3kuI3nrqHljbHkuI3ljbHpmakKWzAyOjUxLjkwXemDveimgeaUvuS4i+S4gOWIh+i3n+S9oOi1sApbMDI6NTUuMjddClswMjo1NS44OF3lj6ropoHkuIDotbfmib/mi4UKWzAyOjU5LjYzXeWPquimgeS9oOS4jeaUvuaJiwpbMDM6MDMuMzZdClswMzowNS4zM13miJHouqvpqpHnmb3pqawKWzAzOjA3LjkzXQpbMDM6MDkuMTRd6LWw5LiJ5YWzClswMzoxMS42Nl0KWzAzOjEyLjM2XeaIkeaUueaNoue0oOihowpbMDM6MTUuODddClswMzoxNi4zN13lm57kuK3ljp8KWzAzOjE5LjY3XQpbMDM6MjAuMzFd5pS+5LiL6KW/5YeJClswMzoyMy4wOF0KWzAzOjIzLjYwXeaXoOS6uueuoQpbMDM6MjYuODJdClswMzoyNy40M13miJHkuIDlv4Plj6rmg7MKWzAzOjMwLjIyXQpbMDM6MzEuMDhd546L5a6d6ZKPClswMzozMy45NV0KWzAzOjM0Ljc0XeaIkei6q+mqkeeZvemprApbMDM6MzcuODJdClswMzozOC4zMl3otbDkuInlhbMKWzAzOjQwLjk2XQpbMDM6NDIuMDJd5oiR5pS55o2i57Sg6KGjClswMzo0My45M10KWzAzOjQ1Ljg3XeWbnuS4reWOnwpbMDM6NDguNDJdClswMzo1MC4xN13mlL7kuIvopb/lh4kKWzAzOjUyLjQ3XQpbMDM6NTMuMjFd5peg5Lq6566hClswMzo1NS45NV0KWzA0OjAwLjgyXeaIkeS4gOW/g+WPquaDswpbMDQ6MDIuNzddClswNDowNS43OV3njovlrp3pko8="
            },
            {
              title: '暗香',
              url: 'https://api.bzqll.com/music/tencent/url?id=001zlK5G3ckYSm&key=579621905',
              image: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002aVGdm48gt3F.jpg',
              artist: '于文文 / 周深',
              lyric: "W3RpOuaal+mmmV0KW2FyOuS6uumxvOWFrOS4uy/lrqvlu7fog4zljIXlrqJdClthbDrokpnpnaLllLHlsIbnjJznjJznjJznrKzkuInlraMg56ysN+acn10KW2J5Ol0KW29mZnNldDowXQpbMDA6MDAuMTBd5pqX6aaZIChMaXZlKSAtIOS6uumxvOWFrOS4uy/lkajmt7EKWzAwOjAwLjIwXeivje+8mumZiOa2mwpbMDA6MDAuMzBd5puy77ya5LiJ5a6dClswMDowMC40MF0KWzAwOjI3LjcwXee8luabsu+8mkpvaG5ueSBZaW0KWzAwOjI3LjcxXemfs+S5kOaAu+ebke+8mui+vuaXpeS4uQpbMDA6MjcuNzJd5LmQ6Zif5oC755uR77ya5p2o6ZizClswMDoyNy43M13plK7nm5jvvJrovr7ml6XkuLkv5Y+26ZyWClswMDoyNy43NF1QR03vvJrlj7bpnJYKWzAwOjI3Ljc1XeWQieS7lu+8muiuuOW+t+ayuy/olpvls7AKWzAwOjI3Ljc2Xei0neaWr++8mumfqemYswpbMDA6MjcuNzdd6byT77yaQ2hyaXMKWzAwOjI3Ljc4XeaJk+WHu+S5kO+8mkFuZGkKWzAwOjI3Ljc5XeWSjOWjsO+8muWImOiKsy/miIjplJAv5p+z6Z2ZL+abvuW1mApbMDA6MjcuODBd6JCo5YWL5pavL+mVv+esm++8mkNoYXJsaWUKWzAwOjI3LjgxXeWwj+WPt++8mlJheQpbMDA6MjcuODJd6ZW/5Y+377ya5pu55L6DClswMDoyNy44M13lvKbkuZDvvJrpnbPmtbfpn7PCruW8puS5kOWbogpbMDA6MjcuODRd5aOw5LmQ5oyH5a+877ya5YiY6IqzClswMDoyOC4zNl3lvZPoirHnk6PnprvlvIDoirHmnLUKWzAwOjMzLjYxXeaal+mmmeaui+eVmQpbMDA6NDEuOTld6aaZ5raI5Zyo6aOO6LW36Zuo5ZCOClswMDo0Ny4xMF3ml6DkurrmnaXll4UKWzAwOjU1Ljc2XeWmguaenOeIseWRiuivieaIkei1sOS4i+WOuwpbMDE6MDIuNzld5oiR5Lya5ou85Yiw54ix5bC95aS0ClswMTowOC44OV3lv4Poi6XlnKjngb/ng4LkuK3mrbvljrsKWzAxOjE1Ljk1XeeIseS8muWcqOeBsOeDrOmHjOmHjeeUnwpbMDE6MjMuMTJd6Zq+5b+Y57yg57u157uG6K+t5pe2ClswMToyNy45OF3nlKjkvaDnrJHlrrnkuLrmiJHnpa3lpaAKWzAxOjM2LjQ2XeiuqeW/g+WcqOeBv+eDguS4reatu+WOuwpbMDE6NDMuNDRd6K6p54ix5Zyo54Gw54Os6YeM6YeN55SfClswMTo1MC42M13ng4jngavng6fov4fpnZLojYnnl5UKWzAxOjU1LjM2Xeeci+eci+WPiOaYr+S4gOW5tOaYpemjjgpbMDI6MDQuNDNd5b2T6Iqx55Oj56a75byA6Iqx5py1ClswMjowOS40OF3mmpfpppnmrovnlZkKWzAyOjMxLjc2XeW9k+iKseeTo+emu+W8gOiKseactQpbMDI6MzYuOTFd5pqX6aaZ5q6L55WZClswMjo0NS41MV3pppnmtojlnKjpo47otbfpm6jlkI4KWzAyOjUwLjU1XeaXoOS6uuadpeWXhQpbMDI6NTkuMTBd5aaC5p6c54ix5ZGK6K+J5oiR6LWw5LiL5Y67ClswMzowNi4wM13miJHkvJrmi7zliLDniLHlsL3lpLQKWzAzOjEyLjUxXeW/g+iLpeWcqOeBv+eDguS4reatu+WOuwpbMDM6MTkuMzRd54ix5Lya5Zyo54Gw54Os6YeM6YeN55SfClswMzoyNi41M13pmr7lv5jnvKDnu7Xnu4bor63ml7YKWzAzOjMxLjI3XeeUqOS9oOeskeWuueS4uuaIkeelreWloApbMDM6MzkuODBd6K6p5b+D5Zyo54G/54OC5Lit5q275Y67ClswMzo0Ni43OV3orqnniLHlnKjngbDng6zph4zph43nlJ8KWzAzOjUzLjk3XeeDiOeBq+eDp+i/h+mdkuiNieeXlQpbMDM6NTguNzNd55yL55yL5Y+I5piv5LiA5bm05pil6aOOClswNDowNy42N13lvZPoirHnk6PnprvlvIDoirHmnLUKWzA0OjEyLjg5Xeaal+mmmeaui+eVmQ=="
            },
            {
              title: '往后余生',
              url: 'https://api.bzqll.com/music/tencent/url?id=0046NhnE3I6glK&key=579621905',
              image: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001xXVYZ3D3baj.jpg',
              artist: '马良 / 孙茜茹',
              lyric: "W3RpOuW+gOWQjuS9meeUn10KW2FyOumprOiJry/lrZnojJzojLldClthbDrlvoDlkI7kvZnnlJ9dCltieTpdCltvZmZzZXQ6MF0KWzAwOjAyLjM0XeW+gOWQjuS9meeUnyAtIOmprOiJry/lrZnojJzojLkKWzAwOjA0LjAxXeivje+8mumprOiJrwpbMDA6MDQuNTZd5puy77ya6ams6ImvClswMDowNS4wNF3nvJbmm7LvvJrliJjlh6TnkbYKWzAwOjA1Ljg3XeWQieS7lu+8muiSi+afvQpbMDA6MDYuNTdd5b2V6Z+z77ya5bCP6YeRQOWlveWQrOmfs+S5kApbMDA6MDcuODhd5re36Z+z77ya6JKL5p+9QOiKrOWTjeWutkZJTk4gTVVTSUMKWzAwOjA5LjUxXeWItuS9nFNUVURJT++8muiKrOWTjeWutkZJTk4gTVVTSUMKWzAwOjEwLjkwXeWItuS9nOS6uu+8muWImOWHpOeRtgpbMDA6MzQuNTJd5aWz77yaClswMDozNC44NF3lnKjmsqHpo47nmoTlnLDmlrnmib7lpKrpmLMKWzAwOjQxLjgzXeWcqOS9oOWGt+eahOWcsOaWueWBmuaalumYswpbMDA6NDguODFd5Lq65LqL57q357q3ClswMDo1MS4zMF3kvaDmgLvlpKrlpKnnnJ8KWzAwOjU1LjYyXeW+gOWQjueahOS9meeUnwpbMDA6NTcuNjBd5oiR5Y+q6KaB5L2gClswMTowMC40OV3nlLfvvJoKWzAxOjAwLjY3XeW+gOWQjuS9meeUnwpbMDE6MDMuODNd6aOO6Zuq5piv5L2gClswMTowNy4xOF3lubPmt6HmmK/kvaAKWzAxOjEwLjY2Xea4hei0q+S5n+aYr+S9oApbMDE6MTQuMTBd6I2j5Y2O5piv5L2gClswMToxNy40OV3lv4PlupXmuKnmn5TmmK/kvaAKWzAxOjIxLjUxXeebruWFieaJgOiHtApbMDE6MjMuOTdd5Lmf5piv5L2gClswMTo0NC45OF3nlLfvvJoKWzAxOjQ1LjI0XeaDs+W4puS9oOWOu+eci+aZtOepuuS4h+mHjApbMDE6NTIuMDRd5oOz5aSn5aOw5ZGK6K+J5L2g5oiR5Li65L2g552A6L+3ClswMTo1OS4xMV3lvoDkuovljIbljIYKWzAyOjAxLjQzXeS9oOaAu+S8muiiq+aEn+WKqApbMDI6MDUuNzZd5b6A5ZCO55qE5L2Z55SfClswMjowNy40NF3miJHlj6ropoHkvaAKWzAyOjEwLjY4XeWQiO+8mgpbMDI6MTAuODZd5b6A5ZCO5L2Z55SfClswMjoxNC4xNl3po47pm6rmmK/kvaAKWzAyOjE3LjUyXeaYpeWNjuaYr+S9oApbMDI6MjAuODRd5aSP6Zuo5Lmf5piv5L2gClswMjoyNC40OF3np4vpu4TmmK/kvaAKWzAyOjI3LjgwXeWbm+Wto+WGt+aaluaYr+S9oApbMDI6MzEuNTld55uu5YWJ5omA6Ie0ClswMjozNC4zOF3kuZ/mmK/kvaAKWzAzOjA1LjQ4XeWls++8mgpbMDM6MDUuNzhd5b6A5ZCO5L2Z55SfClswMzowOC45OF3po47pm6rmmK/kvaAKWzAzOjEyLjQ0XeW5s+a3oeaYr+S9oApbMDM6MTUuNzhd5riF6LSr5Lmf5piv5L2gClswMzoxOS4xMV3lkIjvvJoKWzAzOjE5LjM2XeiNo+WNjuaYr+S9oApbMDM6MjIuNjhd5b+D5bqV5rip5p+U5piv5L2gClswMzoyNi40OV3nm67lhYnmiYDoh7QKWzAzOjI4LjkzXeS5n+aYr+S9oA=="
            },
            {
              title: '新娘不是我 DJ',
              url: 'https://api.bzqll.com/music/tencent/url?id=003J5glO1GMUfl&key=579621905',
              image: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002kmNuK0IZ6WM.jpg',
              artist: '程响',
              lyric: "W3RpOuaWsOWomOS4jeaYr+aIkURKXQpbYXI656iL5ZONXQpbYWw65paw5aiY5LiN5piv5oiRREpdCltieTpdCltvZmZzZXQ6MF0KWzAwOjAwLjAwXeaWsOWomOS4jeaYr+aIkURKIC0g56iL5ZONClswMDoyOC4xMl3or43vvJrlkajlro/mtpsKWzAwOjU2LjI1Xeabsu+8muWRqOWuj+a2mwpbMDE6MjQuMzdd5aaC5p6c5LiN5piv5aW56ZKx5aSaIOS9oOS8muS4jeS8muadpeWotuaIkQpbMDE6MzEuOTdd5L2g5Li65L2V6Z2e6LWw5LiN5Y+vIOS4jeiDveeVmeS4i+adpemZquaIkQpbMDE6MzkuMTVdClswMTozOS43NF3kvaDlr7nmiJHmmK/nnJ/lv4PnmoQg5oq15LiN6L+H5ZCN5Yip55qE6K+x5oORClswMTo0Ny4yOF3kvaDpmr7pgZPkuI3mi4Xlv4PmiJEg5rKh5pyJ5L2g5LiN6IO95rS7ClswMTo1NC42MV3nlLfmnIvlj4vnu5PlqZrkuoYg5paw5aiY5Y205LiN5piv5oiRClswMTo1OC40NF3lsLHnrpfnnLzms6rlho3lpJog5Lmf5rKh5Lq65b+D55a85oiRClswMjowMi4yOV3miJHmg7PopoHnmoTkuI3lpJog5L2g55qE54ix5bCx5aSf5LqGClswMjowNi4xNl3ljYPkuIfliKvmgJXlhbvkuI3otbfmiJEKWzAyOjEwLjAwXeeUt+aci+WPi+e7k+WpmuS6hiDmlrDlqJjljbTkuI3mmK/miJEKWzAyOjEzLjc3XeaJgOacieS9oOaDs+imgeeahCDllK/ni6znvLrmiJHkuIDkuKoKWzAyOjE3LjY5XeacieaJi+acieiEmuaLvOaQjyDmgLvmg7PkuI3lirPogIzojrcKWzAyOjIxLjQ2XeayoeacieaIkeimgemSseW5suS7gOS5iApbMDI6MjUuNTFdClswMzoyNy40NV3kvaDlr7nmiJHmmK/nnJ/lv4PnmoQg5oq15LiN6L+H5ZCN5Yip55qE6K+x5oORClswMzozNC4yNV0KWzAzOjM0Ljc2XeS9oOmavumBk+S4jeaLheW/g+aIkSDmsqHmnInkvaDkuI3og73mtLsKWzAzOjQyLjE0XeeUt+aci+WPi+e7k+WpmuS6hiDmlrDlqJjljbTkuI3mmK/miJEKWzAzOjQ1Ljk0XeWwseeul+ecvOazquWGjeWkmiDkuZ/msqHkurrlv4PnlrzmiJEKWzAzOjQ5Ljc5XeaIkeaDs+imgeeahOS4jeWkmiDkvaDnmoTniLHlsLHlpJ/kuoYKWzAzOjUzLjYxXeWNg+S4h+WIq+aAleWFu+S4jei1t+aIkQpbMDM6NTcuMjhd55S35pyL5Y+L57uT5ama5LqGIOaWsOWomOWNtOS4jeaYr+aIkQpbMDQ6MDEuMjhd5omA5pyJ5L2g5oOz6KaB55qEIOWUr+eLrOe8uuaIkeS4gOS4qgpbMDQ6MDUuMjBd5pyJ5omL5pyJ6ISa5ou85pCPIOaAu+aDs+S4jeWKs+iAjOiOtwpbMDQ6MDkuMTNd5rKh5pyJ5oiR6KaB6ZKx5bmy5LuA5LmIClswNDoxMi43M10KWzA0OjI4LjM4XeeUt+aci+WPi+e7k+WpmuS6hiDmlrDlqJjljbTkuI3mmK/miJEKWzA0OjMxLjk5XeWwseeul+ecvOazquWGjeWkmiDkuZ/msqHkurrlv4PnlrzmiJEKWzA0OjM1Ljg3XeaIkeaDs+imgeeahOS4jeWkmiDkvaDnmoTniLHlsLHlpJ/kuoYKWzA0OjM5LjY5XeWNg+S4h+WIq+aAleWFu+S4jei1t+aIkQpbMDQ6NDMuNzdd55S35pyL5Y+L57uT5ama5LqGIOaWsOWomOWNtOS4jeaYr+aIkQpbMDQ6NDcuMzZd5omA5pyJ5L2g5oOz6KaB55qEIOWUr+eLrOe8uuaIkeS4gOS4qgpbMDQ6NTEuMjRd5pyJ5omL5pyJ6ISa5ou85pCPIOaAu+aDs+S4jeWKs+iAjOiOtwpbMDQ6NTUuMDJd5rKh5pyJ5oiR6KaB6ZKx5bmy5LuA5LmIClswNDo1OC44OV3mnInmiYvmnInohJrmi7zmkI8g5oC75oOz5LiN5Yqz6ICM6I63ClswNTowMi43MF3msqHmnInmiJHopoHpkrHlubLku4DkuYg="
            },
            {
              title: '瞎子',
              url: 'https://api.bzqll.com/music/tencent/url?id=003mAan70zUy5O&key=579621905',
              image: 'https://y.gtimg.cn/music/photo_new/T001R300x300M000004WROsW0OjNeD.jpg',
              artist: '尧十三',
              lyric: "W3RpOueejuWtkCDvvIjotLXlt57or53vvIldClthcjrnvZHnu5zmrYzmiYtdClthbDrlnKjnur/ng63mkJzvvIjljY7or63vvInns7vliJc4MF0KW2J5Ol0KW29mZnNldDowXQpbMDA6MDAuMDBd556O5a2QICjjgIrml6DlkI3kuYvovojjgIvnlLXlvbHmj5Lmm7J86LS15bee6K+dKSAtIOWwp+WNgeS4iQpbMDA6MTQuNDBd6K+N77ya5YaN556O5q+V5piOClswMDoyOC44MF3mm7LvvJrkurrpl7TlsI/miJEKWzAwOjQzLjIxXeeni+WkqeeahOidieWcqOWPqwpbMDA6NDYuNTFdClswMDo0OC42NF3miJHlnKjkuq3lrZDovrkKWzAwOjUxLjY5XQpbMDA6NTQuMTld5Yia5Yia5LiL6L+H6ZuoClswMDo1Ni4xOV3miJHpmr7lnKjku6zmiJHllp3kuI3lgJLphZIKWzAxOjAwLjA5XQpbMDE6MDMuMjdd5oiR5omO5a6e5Zie6IiN5LiN5b6XClswMTowNy4yNl0KWzAxOjA4LjQ1XeaWl+aYr+S7rOiIueWutuWWiuW/q+eCuei1sApbMDE6MTIuMTNdClswMToxNC4xMl3miJHmi4notbfkvaDlmJ7miYvnnIvkvaDnnLzms6rmt4zlh7rmnaUKWzAxOjIwLjU5XQpbMDE6MjMuNDVd5oiR5puw5ouJ5Z2f6K6y5LiN5Ye66K+d5p2lClswMTozMS4xM10KWzAxOjMzLjk5XeaIkemavuWcqOS7rOaIkeiusuS4jeWHuuivneadpQpbMDE6NDAuNTNdClswMTo0My4yMV3miJHopoHor7TotbDllr0KWzAxOjQ3LjQzXeS5i+WNg+mHjOeahOeDn+mbvuazoua1quWYngpbMDE6NTIuMjJdClswMTo1NC4yMl3llYrpu5Hlt7Tlt7TlmJ7lpKnlpb3lpKflk6YKWzAyOjAxLjQ3XQpbMDI6NDcuMThd5ouJ5Lus6K6y5piv6YKj5a625ZieClswMjo1MC42N10KWzAyOjUyLjI5Xeemu+WIq+aYr+acgOmavuWcqOWYngpbMDI6NTUuMTFdClswMjo1Ny40OV3mm7TlhbbooajorrLnjrDlnKjmmK/np4vlpKnlmJ4KWzAzOjA0LjE2XQpbMDM6MDYuNjZd5oiR5LiA5ZOI6YWS6YaS5p2l5oiR5Zyo5ZOq54K5ClswMzoxNS41Ml0KWzAzOjE3LjY1XeadqOafs+WYnuWyuOi+uemjjuWQueS4gOS4quWwj+aciOS6ruWYngpbMDM6MjMuNzRdClswMzoyNi45Ml3miJHkuIDmj5DopoHlhYvlpb3lpJrlubQKWzAzOjM2LjQwXQpbMDM6MzcuNDZd5ryC5Lqu55qE5bCP5aeR5aiY5Lqb5Zie6YO95LiN5Zyo5oiR6L656L655Za95ZieClswMzo0NC40MF0KWzAzOjQ2LjcxXeaWl+eul+S5i+aXpeWtkOS6m+WGjeWUseWuiemAuApbMDM6NTUuMDddClswMzo1Ny40M13miJHkuZ/mib7kuI3lgJLkurrmnaXorrLllr0="
            }
          ]
        }
      }
    });
  })
  // return request({
  //   url: `/music/list`,
  //   method: 'get'
  // })
}
