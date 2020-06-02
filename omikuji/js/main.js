'use strict';

{
    const btn = document.getElementById('btn');//id="btn"の要素の中身を取得する

    btn.addEventListener('click',() =>{//addEventListenerは特定の動作をすると毎回読み込まれるメソッド。この場合clickしたらメソッドが実行される。
        //const results = ['大吉','大吉','大吉','大吉','凶'];//大吉を多く出すためのやり方の一つ
        //btn.textContent = results[Math.floor(Math.random() * results.length)]//ランダムの数を表示。0～2の間。Math.floorで小数点以下切り捨て。];

        //確率で出す目を変えるやり方

        const n = Math.random();

        if(n < 0.05) {
            btn.textContent = '大吉';//5%
        }else if(n < 0.2) {
            btn.textContent = '中吉';//15%
        }else{
            btn.textContent = '凶';//80%
        }


        // const n = Math.floor(Math.random() * results.length)//ランダムの数を表示。0～2の間。Math.floorで小数点以下切り捨て。
        // btn.textContent = results[n];

        // switch (n) {//0～2の間で決められた数が出たら文字に変える
        //     case 0:
        //         btn.textContent = '大吉';
        //     break;

        //     case 1:
        //         btn.textContent = '中吉';
        //     break;

        //     case 2:
        //         btn.textContent = '凶';
        //     break;
        // }
    });
}

