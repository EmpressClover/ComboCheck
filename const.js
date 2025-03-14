const characters = [
    { url: 'https://i.imgur.com/QGf2RXi.png', name: 'Uzumaki Naruto' },
    { url: 'https://i.imgur.com/TWShCf2.png', name: 'Haruno Sakura' },
    { url: 'https://i.imgur.com/qSvGnhb.png', name: 'Uchiha Sasuke' },
    { url: 'https://i.imgur.com/2RwMXy9.png', name: 'Inuzuka Kiba' },
    { url: 'https://i.imgur.com/XSgn9p9.png', name: 'Aburame Shino' },
    { url: 'https://i.imgur.com/4DPzmco.png', name: 'Hyuuga Hinata' },
    { url: 'https://i.imgur.com/K2zZmN5.png', name: 'Nara Shikamaru' },
    { url: 'https://i.imgur.com/NxOq035.png', name: 'Akimichi Chouji' },
    { url: 'https://i.imgur.com/mz92sNM.png', name: 'Yamanaka Ino' },
    { url: 'https://i.imgur.com/LUA3QK2.jpg', name: 'Rock Lee' },
    { url: 'https://i.imgur.com/dvfsGj0.png', name: 'Tenten' },
    { url: 'https://i.imgur.com/9CiN3WT.png', name: 'Hyuuga Neji' },
    { url: 'https://i.imgur.com/iEHOxAY.png', name: 'Gaara' },
    { url: 'https://i.imgur.com/xltwSom.png', name: 'Kankuro' },
    { url: 'https://i.imgur.com/kTLEaMP.png', name: 'Temari' },
    { url: 'https://i.imgur.com/gDSGgOc.jpg', name: 'Kinuta Dosu' },
    { url: 'https://i.imgur.com/omC0mq2.png', name: 'Tsuchi Kin' },
    { url: 'https://i.imgur.com/zCdcIJ8.png', name: 'Abumi Zaku' },
    { url: 'https://i.imgur.com/Jgctdrf.png', name: 'Young Kakashi' },
    { url: 'https://i.imgur.com/YwerQiX.png', name: 'Uchiha Obito' },
    { url: 'https://i.imgur.com/kJ3u53S.png', name: 'Nohara Rin' },
    { url: 'https://i.imgur.com/uE9xQEF.png', name: 'Hyuuga Hanabi' },
    { url: 'https://i.imgur.com/4yIYk5T.png', name: 'Drunken Lee' },
    { url: 'https://i.imgur.com/Q1xZmLs.png', name: 'Rehabilitated Gaara' },
    { url: 'https://i.imgur.com/XLe6m8K.png', name: 'Oboro' },
    { url: 'https://i.imgur.com/oZT2jom.png', name: 'Shigure' },
    { url: 'https://i.imgur.com/cnhCRXg.png', name: 'Akadou Yoroi' },
    { url: 'https://i.imgur.com/M8EPY4F.png', name: 'Tsurugi Misumi' },
    { url: 'https://i.imgur.com/a2vW3gO.png', name: 'Umino Iruka' },
    { url: 'https://i.imgur.com/56OlIhi.png', name: 'Mizuki' },
    { url: 'https://i.imgur.com/scBunO7.png', name: 'Jiroubou' },
    { url: 'https://i.imgur.com/ZSWwJiY.png', name: 'Kidoumaru' },
    { url: 'https://i.imgur.com/TLS8WDY.png', name: 'Tayuya' },
    { url: 'https://i.imgur.com/fXMOzMv.png', name: 'Sakon' },
    { url: 'https://i.imgur.com/qzCv58M.png', name: 'Kimimaro' },
    { url: 'https://i.imgur.com/q0YFcWg.png', name: 'Mitarashi Anko' },
    { url: 'https://i.imgur.com/CXtg9Cd.png', name: 'Gekko Hayate' },
    { url: 'https://i.imgur.com/V4ZPeu0.png', name: 'Shizune' },
    { url: 'https://i.imgur.com/896YA2V.png', name: 'Hatake Kakashi' },
    { url: 'https://i.imgur.com/QqBVNof.png', name: 'Yuhi Kurenai' },
    { url: 'https://i.imgur.com/N4ZFINr.png', name: 'Sarutobi Asuma' },
    { url: 'https://i.imgur.com/CvcZhpB.png', name: 'Maito Gai' },
    { url: 'https://i.imgur.com/e8s0PJc.png', name: 'Uzumaki Kushina' },
    { url: 'https://i.imgur.com/iM436J6.png', name: 'Namikaze Minato' },
    { url: 'https://i.imgur.com/w7aKkKK.jpeg', name: 'Baki' },
    { url: 'https://i.imgur.com/KEUfhff.png', name: 'Yakushi Kabuto' },
    { url: 'https://i.imgur.com/1IX3aVU.png', name: 'Tsunade' },
    { url: 'https://i.imgur.com/yHEmJKn.png', name: 'Jiraiya' },
    { url: 'https://i.imgur.com/7GSmlPA.png', name: 'Orochimaru' },
    { url: 'https://i.imgur.com/WrvpYYc.png', name: 'ET Senju Hashirama' },
    { url: 'https://i.imgur.com/Msz2KM4.png', name: 'ET Senju Tobirama' },
    { url: 'https://i.imgur.com/TwJVOxb.png', name: 'Sarutobi Hiruzen' },
    { url: 'https://i.imgur.com/IZXX3gO.png', name: 'Yondaime Minato' },
    { url: 'https://i.imgur.com/l3xMscq.png', name: 'Demon Brothers' },
    { url: 'https://i.imgur.com/EET1Thj.png', name: 'Haku' },
    { url: 'https://i.imgur.com/mmn0AaQ.png', name: 'Momochi Zabuza' },
    { url: 'https://i.imgur.com/b0A2WKo.png', name: 'Kyuubi Naruto' },
    { url: 'https://i.imgur.com/VuLZbnA.png', name: 'Cursed Seal Sasuke' },
    { url: 'https://i.imgur.com/jzgsSwP.png', name: 'Shukaku Gaara' },
    { url: 'https://i.imgur.com/9AlpaEw.png', name: 'Hoshigaki Kisame' },
    { url: 'https://i.imgur.com/DXGV0Uz.png', name: 'Uchiha Itachi' },
    { url: 'https://i.imgur.com/ADF8vjV.png', name: 'Uzumaki Naruto (S)' },
    { url: 'https://i.imgur.com/Yuy78WK.png', name: 'Sarutobi Konohamaru' },
    { url: 'https://i.imgur.com/CRFhkoe.png', name: 'Haruno Sakura (S)' },
    { url: 'https://i.imgur.com/jE7GWpw.png', name: 'Sai (S)' },
    { url: 'https://i.imgur.com/51PY7W7.png', name: 'Inuzuka Kiba (S)' },
    { url: 'https://i.imgur.com/nSB8GfM.png', name: 'Aburame Shino (S)' },
    { url: 'https://i.imgur.com/ktLOVee.png', name: 'Hyuuga Hinata (S)' },
    { url: 'https://i.imgur.com/ovBOxEa.png', name: 'Nara Shikamaru (S)' },
    { url: 'https://i.imgur.com/yOkMa5x.png', name: 'Akimichi Chouji (S)' },
    { url: 'https://i.imgur.com/x7BahTe.png', name: 'Yamanaka Ino (S)' },
    { url: 'https://i.imgur.com/SBgejs2.png', name: 'Rock Lee (S)' },
    { url: 'https://i.imgur.com/7OyNZMx.png', name: 'Tenten (S)' },
    { url: 'https://i.imgur.com/WKV0ISD.png', name: 'Hyuuga Neji (S)' },
    { url: 'https://i.imgur.com/lKc2rbD.png', name: 'Hatake Kakashi (S)' },
    { url: 'https://i.imgur.com/eJN2Bgx.png', name: 'Yamato' },
    { url: 'https://i.imgur.com/oMociaf.png', name: 'Maito Gai (S)' },
    { url: 'https://i.imgur.com/CYF606U.png', name: 'Sarutobi Asuma (S)' },
    { url: 'https://i.imgur.com/oFRUh7B.png', name: 'Izumo and Kotetsu' },
    { url: 'https://i.imgur.com/DSILjJ6.png', name: 'Yamashiro Aoba' },
    { url: 'https://i.imgur.com/0JSJteO.png', name: 'Inuzuka Tsume' },
    { url: 'https://i.imgur.com/T4mxP0u.png', name: 'Akimichi Chouza (S)' },
    { url: 'https://i.imgur.com/drKbi62.png', name: 'Nara Shikaku' },
    { url: 'https://i.imgur.com/D5wMgU4.png', name: 'Yamanaka Inoichi' },
    { url: 'https://i.imgur.com/OFImDHx.png', name: 'Hyuuga Hiashi' },
    { url: 'https://i.imgur.com/97cN9Tw.png', name: 'Aburame Torune' },
    { url: 'https://i.imgur.com/HJetP8q.png', name: 'Yamanaka Fu' },
    { url: 'https://i.imgur.com/sJsYMZg.png', name: 'Shimura Danzo' },
    { url: 'https://i.imgur.com/Einn96E.png', name: 'Chiyo (S)' },
    { url: 'https://i.imgur.com/BdvkPHM.png', name: 'Maki (S)' },
    { url: 'https://i.imgur.com/feBCfoH.png', name: 'Kazekage Gaara (S)' },
    { url: 'https://i.imgur.com/PgKQQQ8.png', name: 'Kankuro (S)' },
    { url: 'https://i.imgur.com/yVh5Bdx.png', name: 'Temari (S)' },
    { url: 'https://i.imgur.com/Qt3hKbT.png', name: 'Nii Yugito (S)' },
    { url: 'https://i.imgur.com/ySIq2yL.png', name: 'Utakata (S)' },
    { url: 'https://i.imgur.com/aoTWUJs.jpg', name: 'Four Tail Kyuubi Naruto (S)' },
    { url: 'https://i.imgur.com/G6Ahtev.png', name: 'Hachibi Bee (S)' },
    { url: 'https://i.imgur.com/nYnxYtf.png', name: 'Kitsuchi (S)' },
    { url: 'https://i.imgur.com/VklHLZj.png', name: 'Kurotsuchi (S)' },
    { url: 'https://i.imgur.com/3lesV67.png', name: 'Shee (S)' },
    { url: 'https://i.imgur.com/wnTBp6e.png', name: 'Dodai (S)' },
    { url: 'https://i.imgur.com/pHbQ1q0.png', name: 'Sennin Jiraiya (S)' },
    { url: 'https://i.imgur.com/Bl8706t.png', name: 'Hozuki Suigetsu (S)' },
    { url: 'https://i.imgur.com/mTEOQnf.png', name: 'Karin (S)' },
    { url: 'https://i.imgur.com/qHYmfPH.png', name: 'Cursed Seal Juugo (S)' },
    { url: 'https://i.imgur.com/68HdNdl.png', name: 'Mangekyou Sasuke (S)' },
    { url: 'https://i.imgur.com/QDSGUUF.png', name: 'Yakushi Kabuto (S)' },
    { url: 'https://i.imgur.com/gqw2wdW.png', name: 'Orochimaru (S)' },
    { url: 'https://i.imgur.com/26K2UEe.png', name: 'Fukasaku and Shima (S)' },
    { url: 'https://i.imgur.com/ZZcY2bV.png', name: 'Kisame Body Double (S)' },
    { url: 'https://i.imgur.com/fLt4tVT.png', name: 'Itachi Body Double (S)' },
    { url: 'https://i.imgur.com/Q96ZGlC.png', name: 'Deidara (S)' },
    { url: 'https://i.imgur.com/2hrLTIS.png', name: 'Sasori (S)' },
    { url: 'https://i.imgur.com/CB3SKeG.png', name: 'Kakuzu (S)' },
    { url: 'https://i.imgur.com/4GcLM4y.png', name: 'Konan (S)' },
    { url: 'https://i.imgur.com/0xzWYad.png', name: 'Naraka Path Pein (S)' },
    { url: 'https://i.imgur.com/mbtinTx.pngg', name: 'Human Path Pein (S)' },
    { url: 'https://i.imgur.com/8UuVWxM.png', name: 'White Zetsu (S)' },
    { url: 'https://i.imgur.com/ODK2rje.png', name: 'Tobi (S)' },
    { url: 'https://i.imgur.com/cZQJvJO.png', name: 'Edo Tensei Chiyo (S)' },
    { url: 'https://i.imgur.com/Nc5yHNo.png', name: 'Edo Tensei Kinkaku (S)' },
    { url: 'https://i.imgur.com/2cZvsZV.png', name: 'Edo Tensei Nagato (S)' },
    { url: 'https://i.imgur.com/QQsLHQG.png', name: 'Edo Tensei Deidara (S)' },
    { url: 'https://i.imgur.com/xMHxftC.png', name: 'Edo Tensei Sasori (S)' },
    { url: 'https://i.imgur.com/4xnZaUD.png', name: 'Edo Tensei Fukai (S)' },
    { url: 'https://i.imgur.com/4HKH3kY.png', name: 'Edo Tensei Toroi (S)' },
    { url: 'https://i.imgur.com/hi77YBF.png', name: 'Temujin' },
    { url: 'https://i.imgur.com/qVwWdfL.png', name: 'Hoshigaki Kisame (S)' },
    { url: 'https://i.imgur.com/4kc75ml.png', name: 'Preta Path Pein (S)' },
    { url: 'https://i.imgur.com/pZk2BvZ.png', name: 'Edo Tensei Zabuza (S)' },
    { url: 'https://i.imgur.com/WUiHko5.png', name: 'Edo Tensei Hizashi (S)' },
    { url: 'https://i.imgur.com/3Gcle0W.png', name: 'Edo Tensei Ginkaku (S)' },
    { url: 'https://i.imgur.com/XxemXi0.jpg', name: 'Tsunade (S)' },
    { url: 'https://i.imgur.com/Xj1cWkM.png', name: 'Akatsuki Orochimaru' },
    { url: 'https://i.imgur.com/T1Da57N.png', name: 'Hiruko Sasori (S)' },
    { url: 'https://i.imgur.com/0AXRr9A.png', name: 'Puppet Sasori (S)' },
    { url: 'https://i.imgur.com/zeZx3dZ.png', name: 'Hidan (S)' },
    { url: 'https://i.imgur.com/txNq276.png', name: 'Uchiha Itachi (S)' },
    { url: 'https://i.imgur.com/q1S9bJP.png', name: 'Susanoo Itachi (S)' },
    { url: 'https://i.imgur.com/E4rdF5t.png', name: 'Animal Path Pein (S)' },
    { url: 'https://i.imgur.com/6qV1cA1.png', name: 'Female Animal Path Pein (S)' },
    { url: 'https://i.imgur.com/HdcMfSz.png', name: 'Asura Path Pein (S)' },
    { url: 'https://i.imgur.com/2mMJQco.png', name: 'Deva Path Pein (S)' },
    { url: 'https://i.imgur.com/P08KAqB.png', name: 'Konan of the Rain (S)' },
    { url: 'https://i.imgur.com/TzAiUvc.png', name: 'Nagato (S)' },
    { url: 'https://i.imgur.com/OifxvAj.png', name: 'Black Zetsu (S)' },
    { url: 'https://i.imgur.com/EiQ9Aqn.png', name: 'Edo Tensei Jinin (S)' },
    { url: 'https://i.imgur.com/XYq6OuC.png', name: 'Edo Tensei Ameyuri (S)' },
    { url: 'https://i.imgur.com/lTy7NII.png', name: 'Edo Tensei Kuriarare (S)' },
    { url: 'https://i.imgur.com/oQudfoL.png', name: 'Edo Tensei Jinpachi (S)' },
    { url: 'https://i.imgur.com/YPoNuAl.png', name: 'Edo Tensei Fuguki (S)' },
    { url: 'https://imgur.com/1FhXxJS.png', name: 'Mangetsu' },
    { url: 'https://i.imgur.com/KEsUR4g.png', name: 'Edo Tensei Haku (S)' },
    { url: 'https://i.imgur.com/4zQxemJ.png', name: 'Darui (S)' },
    { url: 'https://i.imgur.com/oF1pW2o.png', name: 'Juugo (S)' },
    { url: 'https://i.imgur.com/NN39wlF.png', name: 'Ohnoki (S)' },
    { url: 'https://i.imgur.com/OFghOJT.png', name: 'Killer Bee (S)' },
    { url: 'https://i.imgur.com/obXfLQz.png', name: 'Uchiha Sasuke (S)' },
    { url: 'https://i.imgur.com/DzICLgH.png', name: 'Cursed Seal Sasuke (S)' },
    { url: 'https://i.imgur.com/PReJXjZ.png', name: 'Akatsuki Sasuke (S)' },
];