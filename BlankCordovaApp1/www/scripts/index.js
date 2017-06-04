
$(document).ready(function () {

    //メニューバー
    $('.menuBar').on('click', function () {
        var menu = $('.menu-lists').find('.menu-list');
        //メニューが開いている状態
        if (menu.hasClass('openMenu')) {
            menu.removeClass('openMenu');
            menu.slideUp();
        //メニューが閉じている状態
        } else {
            menu.addClass('openMenu');
            menu.slideDown();
        }
    });

    //家計簿画面に
    $('.menu-finance').click(function () {
        window.location.href = '#finance';
    });

    //冷蔵庫画面に
    $('.memu-refrige').click(function () {
        window.location.href = '#refrigerator';
    });

    //買い物スタートが押されたとき
    $('#start').on('click', function () {
        window.location.href = '#making-lists';
        $('#finance .menu-lists a').removeAttr('href').attr('href','#making-lists');
    });


    //単位の追加が押されたとき
    $('#adding-unit').click(function () {
        $('#adding-unit-page').fadeIn();
    });

    //単位追加
    $('#unit-adding').click(function () {
        var unit = $('#new-unit').val();

        if (unit == "") {
            $('#error-unit').text('入力してください');
        } else {
            $('#error-unit').text('');
            $('#number-selected').append('<option>' + unit + '</option>');
            $('#finance #finAddUnit').append('<option>' + unit + '</option>');
            $(this.form).find("input").val("");

            return false;

        }
    });

    //単位追加画面を閉じる
    $('#adding-unit-close').click(function () {
        $('#adding-unit-page').fadeOut();
    });

    //カテゴリー追加が押されたとき
    $('#adding-category').click(function () {
        $('#adding-category-page').fadeIn();
    });

    //カテゴリー追加
    $('#category-adding').click(function () {
        var neue =  $('#new-category').val();
        var length = $('#category option').length;
        var neun = length + 1;

        if (neue == "") {
            $('#error-category').text('カテゴリーが空欄です。');
        } else {
            //リスト追加ページ
            $('#error-category').text('');
            $('#adding-lists-page').append('<div><ul' + ' ' + 'class="' + neun + ' ' + 'category-title" >' + neue + '</ul ></div >');
            $('#category').append('<option' + ' ' + 'value="' + neun + '">' + neue + '</option>');
            //家計簿カテゴリーテンプレートへ
            $('#finance #fin-templete-category').append('<div><ul' + ' ' + 'class="' + neun + ' ' + 'category-title" >' + neue + '</ul ></div >');
            //家計簿追加画面へ
            $('#finance .finAdd-category #finAddCategory').append('<option' + ' ' + 'value="' + neun + '">' + neue + '</option>');
            $(this.form).find("input").val("");

            //買い物リストページ　買う買わないボタン付き
            $('#shopping-lists #shopping-lists-page').append('<div><ul' + ' ' + 'class="' + neun + ' ' + 'category-title" >' + neue + '</ul ></div >');


            //買うが押されたときの画面
            $('#buying-page #bought-lists-page').append('<div><ul' + ' ' + 'class="' + neun + ' ' + 'category-title" >' + neue + '</ul ></div >');


            //冷蔵庫に反映
            $('#refrigerator #refrigeratorLists').append('<div><ul' + ' ' + 'class="' + neun + ' ' + 'category-title" >' + neue + '</ul ></div >');


            return false;

        }
    });

    //カテゴリー追加画面閉じる
    $('#adding-category-close').click(function () {
        $('#adding-category-page').fadeOut();
    });

    //ジャンルの追加が押されたとき
    $('#adding-genre').on('click', function () {
        $('#adding-genre-page').fadeIn();
    });

    //追加が押されたとき
    $('#genre-adding').on('click', function () {
        var newGenre = $('#new-genre').val();
        var length = $('#genre option').length;
        var newNum = length + 1;

        if (newGenre == "") {
            $('.error-genre').text('ジャンルが入力されていません。');
        } else {
            $('.error-genre').text('');
            $('#genre').append('<option' + ' ' + 'value="j' + newNum + '">' + newGenre + '</option>');
            //家計簿追加画面に反映
            $('#finance .finAdd-page #finAddGenre').append('<option' + ' ' + 'value="j' + newNum + '">' + newGenre + '</option>');
            //家計簿テンプレートに追加
            $('#finance #fin-templete-genre').append('<div' + ' ' + 'class="j' + newNum + ' ' + 'fin-genre">' + newGenre + '<div' + ' ' + 'class="fin-j' + newNum + ' ' + 'jenreMoney' + '"><span' + ' ' + 'class="jenre-money">0</span>円' + '</div>' + '</div>');
            //月次ジャンルに追加
            $('#finance #Month').find('.monthDetails').append('<div' + ' ' + 'class="j' + newNum + ' ' + 'fin-genre">' + newGenre + '<div' + ' ' + 'class="fin-j' + newNum + ' ' + 'jenreMoney' + '"><span' + ' ' + 'class="jenre-money">0</span>円' + '</div>' + '</div>');
            $(this.form).find("input").val("");

            
            return false;
        }
    });

    //ジャンル追加の閉じるが押された場合
    $('#adding-genre-page-clode').on('click', function () {
        $('#adding-genre-page').fadeOut();
    });

    //リスト追加「submit」が押されたとき
    $('#adding').click(function () {
        var name = $('#name').val();
        var nummber = $('#nummber').val();
        var unit = $('#number-selected').val();
        var category = $('#category').val();
        //リストに対する固有番号
        var length = $('#adding-lists-page .' + category).find('li').length;
        //カテゴリー番号が1000の位、リストの番号が１の位
        var original = category * 1000 + length;
        //ジャンル
        var genre = $('#genre').val();

        if (length <= 1000) {
            if (name == "" || nummber == "") {
                $('#error-adding').text('記入漏れがあります');
            } else {
                //チェックボックスがチェックされていた場合(InRefrigeratorクラスをつける。)
                if ($('#making-lists #adding-list #check').prop('checked')){
                    //リスト追加ページに追加される
                    $('#making-lists #adding-lists-page').find('.' + category).fadeIn();
                    $('#error-adding').text('');
                    $('#adding-lists-page .' + category).append('<li' + ' ' + 'class="' + original + '">' + name + ' ' + nummber + unit + '</li>');
                    $(this.form).find("input").val("");

                    //買い物リスト、買うもの買わないものボタン付き(冷蔵庫行目印付き)
                    $('#shopping-lists  #shopping-lists-page').find('.' + category).fadeIn();
                    $('#shopping-lists  #shopping-lists-page .' + category).append('<li' + ' ' + 'class="point' + ' ' + original + '">' + '<div' + ' ' + 'id="kaufen"' + ' ' + 'class="noch">' + '<div' + ' ' + 'id="kaufen-buttom"' + ' ' + 'class="kau">' + '買う' + '</div>' + '</div>' + '<span' + ' ' + 'class="namae">' + name + '</span>' + '  ' + '<span' + ' ' + 'class="kazu">' + nummber + '</span>' + '<span' + ' ' + 'class="tani">' + unit + '</span>' + '<span' + ' ' + 'class="art">' + category + '</span>' + '<span' + ' ' + 'class="sorte">' + genre + '</span>' + ' ' + '<span' + ' ' + 'class="much">' + '</span>' + '<span' + ' ' + 'class="en">' + '円' + '</span>' + '<span' + ' ' + 'class="In-Out-Refrigerator' +  ' ' + 'InRefrigerator"></span>' + '</li>');

                    

                    return false;

                } else {//チェックボックスがチェックされていない場合(特になし。)
                    //リスト追加ページに追加される
                    $('#making-lists #adding-lists-page').find('.' + category).fadeIn();
                    $('#error-adding').text('');
                    $('#adding-lists-page .' + category).append('<li' + ' ' + 'class="' + original + '">' + name + ' ' + nummber + unit + '</li>');
                    $(this.form).find("input").val("");

                    //買い物リスト、買うもの買わないものボタン付き
                    $('#shopping-lists  #shopping-lists-page').find('.' + category).fadeIn();
                    $('#shopping-lists  #shopping-lists-page .' + category).append('<li' + ' ' + 'class="point' + ' ' + original + '">' + '<div' + ' ' + 'id="kaufen"' + ' ' + 'class="noch">' + '<div' + ' ' + 'id="kaufen- buttom"' + ' ' + 'class="kau">' + '買う' + '</div>' + '</div>' + '<span' + ' ' + 'class="namae">' + name + '</span>' + '  ' + '<span' + ' ' + 'class="kazu">' + nummber + '</span>' + '<span' + ' ' + 'class="tani">' + unit + '</span>' + '<span' + ' ' + 'class="art">' + category + '</span>' + '<span' + ' ' + 'class="sorte">' + genre + '</span>' + ' ' + '<span' + ' ' + 'class="much">' + '</span>' + '<span' + ' ' + 'class="en">' + '円' + '</span>' + '<span' + ' ' + 'class="In-Out-Refrigerator">' + '</span>' + '</li>');


                    

                    return false;
                }
                
            }
        } else {
            $('#error-adding').text('上限です。')
        }
    });

    //完了が押されたとき
    $('#go-shopping').on('click', function () {
        window.location.href = '#shopping-lists';
        $('#finance .menu-lists a').removeAttr('href').attr('href', '#shopping-lists');
        
    });


    //追加が押されたとき
    $('.back-adding').on('click', function () {
        window.location.href = '#making-lists';
        $('#finance .menu-lists a').removeAttr('href').attr('href', '#making-lists');
    });

    //買うが押された場合
    $('#shopping-lists #shopping-lists-page').on('click','.kau', function () {

        var namae = $(this).parents('.point').find('.namae').text();
        var kazu = $(this).parents('.point').find('.kazu').text();
        var tani = $(this).parents('.point').find('.tani').text();
        var art = $(this).parents('.point').find('.art').text();
        var bango = $(this).parents('.point').attr('class').split(' ')[1];

        window.location.href = '#buying-page';
        $('#buying-page #goodsName').val(namae);
        $('#buying-page #goodsNumbers').val(kazu);
        $('#buying-page #goodsUnit').text(tani);
        $('#buying-page .art').text(art);
        $('#buying-page .id').text(bango);
        $(this).parents('.point').find('.noch').addClass('now');
        $('#finance .menu-lists a').removeAttr('href').attr('href', '#buying-page');
    });

    //戻るが押された場合
    $('#zruck').on('click', function () {
        window.location.href = '#shopping-lists';
        $('#finance .menu-lists a').removeAttr('href').attr('href', '#shopping-lists');
        $('#shopping-lists .point').each(function () {
            if ($(this).find('#zruckKaufen').hasClass('gekauft')) {
                $.noop();
            } else {
                $(this).find('.noch').removeClass('now');
            }
        });
    });

    // 値段を入力して買うボタンが押された場合
    $('#thanks-buying').on('click', function () {

        var goodsName = $('#goodsName').val();
        //priceは入力された金額
        var geld = $('#price').val();
        var price = parseInt(geld,10);
        var goodsNumbers = $('#goodsNumbers').val();
        var goodsUnit = $('#goodsUnit').text();
        var category = $('#buying-page .art').text();
        //計算
        var amounts = $('#shopping-lists #amounts').text();
        //amountは合計金額
        var amount = parseInt(amounts,10);
        var inkAmount = String(amount + price);
        var ohneAmount = price * 1.08;
        var cutAmount = Math.floor(ohneAmount);
        var showamount = String(cutAmount);
        var result = String(cutAmount + amount);
        //besonderは固有番号
        var besonder = $('#buying-page .id').text();
        

        
        if ($('#switch').prop('checked')) {
            if (goodsName == "" || geld == "" || goodsNumbers == "") {
                $('#error-buying').text('記入漏れがあります');
            } else {
                $('#error-buying').text('');
                $('#buying-page #bought-lists-page').find('.' + category).fadeIn();
                $('#buying-page #bought-lists-page .' + category).append('<li' + ' ' + 'class="' + besonder + '">' + goodsName + '  ' + goodsNumbers + goodsUnit + '  ' + '<span' + ' ' + 'class="barGeld">' + geld + '</span>' + '円' + '</li>');
                $('.now').html('<div' + ' ' + 'id="zruckKaufen"' + ' ' + 'class="gekauft"' + '>購入済み</div>');
                //名前の反映
                $('#shopping-lists #shopping-lists-page .' + besonder).find('.namae').text(goodsName);
                //金額の反映
                $('#shopping-lists #shopping-lists-page .' + besonder).find('.much').text(geld);
                //個数の反映
                $('#shopping-lists #shopping-lists-page .' + besonder).find('.kazu').text(goodsNumbers);
                $('#shopping-lists #shopping-lists-page .' + besonder).find('.en').fadeIn();
                $('#shopping-lists #amounts').text(inkAmount);
                $(this.form).find('#price').val('');
                window.location.href = '#shopping-lists';
                $('#finance .menu-lists a').removeAttr('href').attr('href', '#shopping-lists');
            }
        } else {
            if (goodsName == "" || geld == "" || goodsNumbers == "") {
                $('#error-buying').text('記入漏れがあります');
            } else {
                $('#error-buying').text('');
                $('#buying-page #bought-lists-page').find('.' + category).fadeIn();
                $('#buying-page #bought-lists-page .' + category).append('<li' + ' ' + 'class="' + besonder + '">' + goodsName + '  ' + goodsNumbers + goodsUnit + '  ' + '<span' + ' ' + 'class="barGeld">' + showamount + '</span>' + '円' + '</li>');
                $('#shopping-lists #amounts').text(result);
                $('.now').html('<div' + ' ' + 'id="zruckKaufen"' + ' ' + 'class="gekauft"' + '>購入済み</div>');
                //名前の反映
                $('#shopping-lists #shopping-lists-page .' + besonder).find('.namae').text(goodsName);
                //金額の反映
                $('#shopping-lists #shopping-lists-page .' + besonder).find('.much').text(showamount);
                //個数の反映
                $('#shopping-lists #shopping-lists-page .' + besonder).find('.kazu').text(goodsNumbers);
                $('#shopping-lists #shopping-lists-page .' + besonder).find('.en').fadeIn();
                $(this.form).find('#price').val('');
                window.location.href = '#shopping-lists';
                $('#finance .menu-lists a').removeAttr('href').attr('href', '#shopping-lists');
            }
        }
    });

    //買い物リスト削除機能
    $('.deleteDiv').on('click','#delete-buttom', function () {

        if ($('#delete-buttom').hasClass('active')) {
            //削除中にボタンを押す（activeあり）
            $('#delete-buttom').text('リストから削除');
            $('#delete-buttom').removeClass('active');
            $('.point').each(function () {
                //nowを持っているかどうか
                if ($(this).find('.noch').hasClass('now')) {
                    $.noop();
                } else {
                    $(this).find('.noch').html('<div' + ' ' + 'id="kaufen-buttom"' + ' ' + 'class="kau">買う</div>');
                }
            });
        } else {
            //買い物中にボタンを押す(activeなし)
            $('#delete-buttom').text('戻る');
            $('#delete-buttom').addClass('active');
            $('.point').each(function () {
                //nowを持っているかどうか
                if ($(this).find('.noch').hasClass('now')) {
                    $.noop();
                } else {
                    $(this).find('.noch').html('<div' + ' ' + 'class="delete">削除</div>');
                }
            });
        }

    });

    //リストから削除機能
    $('#shopping-lists #shopping-lists-page').on('click', '.delete', function () {
        var className = $(this).parents('.point').attr('class').split(' ')[1];

        if (!confirm('本当に削除しますか？')) {
            return false;
        } else {
            //ジャンルの中のリストの個数を取得
            var jenreListNum = $(this).parents('.category-title').find('li').length;
            //ジャンルの中のリストが削除するもの1つしかなかったとき。ジャンルも非表示。番号定義し直しとかはしない。
            if (jenreListNum == 1) {
                $(this).parents('.category-title').fadeOut();
                //ボタン付きリストから削除
                $(this).parents('.point').remove();
                //買い物リストから削除
                $('#making-lists #adding-lists-page').find('.' + className).remove();
                //削除した後に追加すると番号が被るので定義し直し
                //買い物リスト番号定義し直し
                $('#making-lists #adding-lists-page li').each(function () {
                    var getNumber = $(this).attr('class');
                    var fixedNumber = getNumber - 1;
                    $(this).removeAttr('class').addClass(fixedNumber);
                });
                //ボタン付きリスト番号定義し直し
                $('#shopping-lists #shopping-lists-page li').each(function () {
                    var bekommen = $(this).attr('class').split(' ')[1];
                    var neueNummer = bekommen - 1;
                    $(this).removeAttr('class').addClass('point' + ' ' + neueNummer);
                });

            } else {//1まだほかにも残っていた場合
                
                //ボタン付きリストから削除
                $(this).parents('.point').remove();
                //買い物リストから削除
                $('#making-lists #adding-lists-page').find('.' + className).remove();
                //削除した後に追加すると番号が被るので定義し直し
                //買い物リスト番号定義し直し
                $('#making-lists #adding-lists-page li').each(function () {
                    var getNumber = $(this).attr('class');
                    var fixedNumber = getNumber - 1;
                    $(this).removeAttr('class').addClass(fixedNumber);
                });
                //ボタン付きリスト番号定義し直し
                $('#shopping-lists #shopping-lists-page li').each(function () {
                    var bekommen = $(this).attr('class').split(' ')[1];
                    var neueNummer = bekommen - 1;
                    $(this).removeAttr('class').addClass('point' + ' ' + neueNummer);
                });
            }
        }
    });

    //購入済みをやっぱり買わない
    $('#shopping-lists #shopping-lists-page').on('click', '.gekauft', function () {
        var goodNumber = $(this).parents('.point').attr('class').split(' ')[1];
        var barGeld = $('#buying-page #bought-lists-page').find('.' + goodNumber).find('.barGeld').text();
        var okane = parseInt(barGeld, 10);
        var goukei = $('#shopping-lists #amounts').text();
        var changeGou = parseInt(goukei, 10);
        var fixedMoney = String(changeGou - barGeld);

        if (!confirm('商品を戻しますか？')) {
            return false;
        } else {
            $(this).parents('.point').find('.noch').removeClass('now');
            $(this).parents('.point').find('.noch').html('<div' + ' ' + 'id="kaufen-buttom"' + ' ' + 'class="kau">買う</div>');
            $('#shopping-lists #shopping-lists-page .' + goodNumber).find('.much').text('');
            $('#shopping-lists #shopping-lists-page .' + goodNumber).find('.en').fadeOut();
            $('#buying-page #bought-lists-page').find('.' + goodNumber).remove();
            $('#shopping-lists #amounts').text(fixedMoney);
        }
    });

    //終了が押されたとき
    $('.finiSho').on('click', '#finish-shopping', function () {
        if (!confirm('買い物を終了してよろしいですか？商品の追加などはできなくなります。')) {
            return false;
        } else {
            $('#shopping-lists .now').html('<div' + ' ' + 'id="changeKaufen"' + ' ' + 'class="chaKauft"' + '>編集</div>');
            $('.finiSho').html('<div' + ' ' + 'id="ende"' + ' ' + 'class="owari">買い物完了</div>');
            $('.back-adding').fadeOut();
            $('#shopping-lists #shopping-lists-page').find('.kau').fadeOut();
            $('.deleteDiv').find('#delete-buttom').fadeOut();
        }
    });

    //編集が押されたとき
    $('#shopping-lists .category-title').on('click', '.chaKauft', function () {
        var oriNumner = $(this).parents('.point').attr('class').split(' ')[1];
        var fixName = $(this).parents('.point').find('.namae').text();
        var fixNumbers = $(this).parents('.point').find('.kazu').text();
        var fixPrice = $(this).parents('.point').find('.much').text();
        var fixUnit = $(this).parents('.point').find('.tani').text();
        var fixArt = $(this).parents('.point').find('.art').text();
        var fixSorte = $(this).parents('.point').find('.sorte').text();

        $('#fixList').slideDown();
        $('#fixName').val(fixName);
        $('#fixPrice').val(fixPrice);
        $('#fixNumbers').val(fixNumbers);
        $('#fixUnit').text(fixUnit);

        $('.fixArt').text(fixArt);
        $('.fixId').text(oriNumner);
        $('.janru').text(fixSorte);
        $('.oldNum').text(fixPrice);
    });

    //戻るが押されたとき
    $('#cancelChange').on('click', function () {
        $('#fixList').slideUp();
    });

    //変更が押されたとき
    $('#fixBuying').on('click', function () {
        var fixId = $('.fixId').text();
        var fixName = $('#fixName').val();
        var fixPrice = $('#fixPrice').val();
        var fixNumbers = $('#fixNumbers').val();
        var fixUnit = $('#fixUnit').text();
        var category = $('.fixArt').text();
        var genre = $('.janru').text();
        var Amount = $('#amounts').text();
        var chaAm = parseInt(Amount, 10);
        var oldPrice = $('.oldNum').text();
        var oldPriCha = parseInt(oldPrice, 10);
        var fixPriNum = parseInt(fixPrice, 10);
        var fixAm = chaAm - oldPriCha + fixPriNum;
        var finishAm = String(fixAm);

        //名前の変更
        $('#shopping-lists-page ').find('.' + fixId).find('.namae').text(fixName);
        //数の変更
        $('#shopping-lists-page ').find('.' + fixId).find('.kazu').text(fixNumbers);
        //金額の変更
        $('#shopping-lists-page ').find('.' + fixId).find('.much').text(fixPrice);
        $('#amounts').text(finishAm);
        $('#fixList').slideUp();

        return false;
    });

    //買い物完了が押されたとき
    $('#shopping-lists .finiSho').on('click','.owari', function () {
        //日付
        var jetzt = new Date();
        var y = jetzt.getFullYear();
        var m = jetzt.getMonth() + 1;
        var beforeM = jetzt.getMonth();
        var d = jetzt.getDate();
        var mm = ("0" + m).slice(-2);
        var beforemm = ("0" + beforeM).slice(-2);
        var dd = ("0" + d).slice(-2);
        var h = jetzt.getHours();
        var mi = jetzt.getMinutes();
        var s = jetzt.getSeconds();
        //ジャンルの取得
        var genre = $('#finance #fin-templete-genre').html();
        //カテゴリーの取得
        var category = $('#finance #fin-templete-category').html();
        //前の家計簿の報告した月を取得。
        var lastReport = $('#finance #finMain').last('.today-fin').find('.tuki').text();
        


        $('.menu-lists .menu-list').find('a').attr('href', '#shopping-start');

        
        if (lastReport == mm) {

            $("#finance #finMain").append('<div' + ' ' + 'class="today-fin' + ' ' + y + m + d + h + mi + s + '"><div' + ' ' + 'class="date">' + y + "/" + '<span' + ' ' + 'class="tuki">' + mm + '</span>' + "/" + dd + '</div></div>');
            //ジャンルを一度設定
            $('#finance .' + y + m + d + h + mi + s).append(genre);
            //そのうえで一つ一つのジャンルにカテゴリーを入れていく
            $('#finance .' + y + m + d + h + mi + s + ' ' + '.fin-genre').each(function () {
                $(this).append(category);
            });


            var $nowFor = $('#shopping-lists .now');
            for (var i = 0; i < $nowFor.length; i++) {
                //冷蔵庫に入れるマークあり
                if ($nowFor.eq(i).parents('.point').find('.In-Out-Refrigerator').hasClass('InRefrigerator')) {

                    var finName = $nowFor.eq(i).parents('.point').find('.namae').text();
                    var finNum = $nowFor.eq(i).parents('.point').find('.kazu').text();
                    var finUnit = $nowFor.eq(i).parents('.point').find('.tani').text();
                    //カテゴリー
                    var finArt = $nowFor.eq(i).parents('.point').find('.art').text();
                    //ジャンル
                    var finSorte = $nowFor.eq(i).parents('.point').find('.sorte').text();
                    var finPrice = $nowFor.eq(i).parents('.point').find('.much').text();
                    var finRealPrice = parseInt(finPrice, 10);


                    //ここで家計簿にある所属カテゴリーのリストの数をカウント
                    var cateLength = $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + finSorte + ' ' + '.' + finArt).find('li').length;
                    //固有番号の作成
                    var koyuNum = String(y) + String(m) + String(d) + String(h) + String(mi) + String(s) + String(cateLength);

                    //家計簿追加
                    if ($('#finance #finMain.' + y + m + d + h + mi + s + ' ' + '.' + finSorte).hasClass('jao')) {
                        if ($('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + finSorte + ' ' + '.' + finArt).hasClass('cao')) {
                            $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + finSorte + ' ' + '.' + finArt).append('<li' + ' ' + 'class="point' + ' ' + koyuNum + '">' + '<span' + ' ' + 'class="fin-change-buttom">' + '</span>' + '<span' + ' ' + 'class="fina-name">' + finName + '</span>' + '  ' + '<span' + ' ' + 'class="fina-num">' + finNum + '</span>' + '<span' + ' ' + 'class="fina-unit">' + finUnit + '</span>' + ' ' + '<span' + ' ' + 'class="fina-pri">' + finPrice + '</span>' + '円' + '</li>');
                        } else {//ジャンルはあるけどカテゴリーがない
                            $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + finSorte + ' ' + '.' + finArt).fadeIn().addClass('cao');
                            $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + finSorte + ' ' + '.' + finArt).append('<li' + ' ' + 'class="point' + ' ' + koyuNum + '">' + '<span' + ' ' + 'class="fin-change-buttom">' + '</span>' + '<span' + ' ' + 'class="fina-name">' + finName + '</span>' + '  ' + '<span' + ' ' + 'class="fina-num">' + finNum + '</span>' + '<span' + ' ' + 'class="fina-unit">' + finUnit + '</span>' + ' ' + '<span' + ' ' + 'class="fina-pri">' + finPrice + '</span>' + '円' + '</li>');
                        }
                    } else {//ジャンルがない（＝カテゴリーももちろんない）
                        $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + finSorte).fadeIn().addClass('jao');
                        $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + finSorte + ' ' + '.' + finArt).fadeIn().addClass('cao');
                        $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + finSorte + ' ' + '.' + finArt).append('<li' + ' ' + 'class="point' + ' ' + koyuNum + '">' + '<span' + ' ' + 'class="fin-change-buttom">' + '</span>' + '<span' + ' ' + 'class="fina-name">' + finName + '</span>' + '  ' + '<span' + ' ' + 'class="fina-num">' + finNum + '</span>' + '<span' + ' ' + 'class="fina-unit">' + finUnit + '</span>' + ' ' + '<span' + ' ' + 'class="fina-pri">' + finPrice + '</span>' + '円' + '</li>');
                    }
                    

                    //冷蔵庫に追加
                    $('#refrigerator #refrigeratorLists .' + finArt).fadeIn();
                    $('#refrigerator #refrigeratorLists .' + finArt).append('<li' + ' ' + 'class="point"><span' + ' ' + 'class="use-buttom' + ' ' + koyuNum + '"></span><span' + ' ' + 'class="ref-good-name">' + finName + '</span>' + ' ' + '<span' + ' ' + 'class="ref-good-num">' + finNum + '</span><span' + ' ' + 'class="ref-good-unit">' + finUnit + '</span></li>');


                    window.location.href = '#finance';

                    //ジャンルのお金取得(追加した項目のジャンルから)
                    var jenreMoney = $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + finSorte).find('.jenre-money').text();
                    var jenreRealMoney = parseInt(jenreMoney, 10);
                    var jenreAmount = finRealPrice + jenreRealMoney;
                    var jenreResult = String(jenreAmount);
                    //ジャンルの横に合計表示
                    $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + finSorte).find('.jenre-money').text(jenreResult);



                } else {//冷蔵庫に入れるマークなし
                    var finName = $nowFor.eq(i).parents('.point').find('.namae').text();
                    var finNum = $nowFor.eq(i).parents('.point').find('.kazu').text();
                    var finUnit = $nowFor.eq(i).parents('.point').find('.tani').text();
                    //カテゴリー
                    var finArt = $nowFor.eq(i).parents('.point').find('.art').text();
                    //ジャンル
                    var finSorte = $nowFor.eq(i).parents('.point').find('.sorte').text();
                    var finPrice = $nowFor.eq(i).parents('.point').find('.much').text();
                    var finRealPrice = parseInt(finPrice, 10);


                    //ここで家計簿にある所属カテゴリーのリストの数をカウント
                    var cateLength = $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + finSorte + ' ' + '.' + finArt).find('li').length;
                    //固有番号の作成
                    var koyuNum = String(y) + String(m) + String(d) + String(h) + String(mi) + String(s) + String(cateLength);


                    //家計簿追加
                    if ($('#finance #finMain.' + y + m + d + h + mi + s + ' ' + '.' + finSorte).hasClass('jao')) {
                        if ($('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + finSorte + ' ' + '.' + finArt).hasClass('cao')) {
                            $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + finSorte + ' ' + '.' + finArt).append('<li' + ' ' + 'class="point' + ' ' + koyuNum + '">' + '<span' + ' ' + 'class="fin-change-buttom">' + '</span>' + '<span' + ' ' + 'class="fina-name">' + finName + '</span>' + '  ' + '<span' + ' ' + 'class="fina-num">' + finNum + '</span>' + '<span' + ' ' + 'class="fina-unit">' + finUnit + '</span>' + ' ' + '<span' + ' ' + 'class="fina-pri">' + finPrice + '</span>' + '円' + '</li>');
                        } else {//ジャンルはあるけどカテゴリーがない
                            $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + finSorte + ' ' + '.' + finArt).fadeIn().addClass('cao');
                            $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + finSorte + ' ' + '.' + finArt).append('<li' + ' ' + 'class="point' + ' ' + koyuNum + '">' + '<span' + ' ' + 'class="fin-change-buttom">' + '</span>' + '<span' + ' ' + 'class="fina-name">' + finName + '</span>' + '  ' + '<span' + ' ' + 'class="fina-num">' + finNum + '</span>' + '<span' + ' ' + 'class="fina-unit">' + finUnit + '</span>' + ' ' + '<span' + ' ' + 'class="fina-pri">' + finPrice + '</span>' + '円' + '</li>');
                        }
                    } else {//ジャンルがない（＝カテゴリーももちろんない）
                        $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + finSorte).fadeIn().addClass('jao');
                        $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + finSorte + ' ' + '.' + finArt).fadeIn().addClass('cao');
                        $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + finSorte + ' ' + '.' + finArt).append('<li' + ' ' + 'class="point' + ' ' + koyuNum + '">' + '<span' + ' ' + 'class="fin-change-buttom">' + '</span>' + '<span' + ' ' + 'class="fina-name">' + finName + '</span>' + '  ' + '<span' + ' ' + 'class="fina-num">' + finNum + '</span>' + '<span' + ' ' + 'class="fina-unit">' + finUnit + '</span>' + ' ' + '<span' + ' ' + 'class="fina-pri">' + finPrice + '</span>' + '円' + '</li>');
                    }

                    window.location.href = '#finance';

                    //ジャンルのお金取得(追加した項目のジャンルから)
                    var jenreMoney = $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + finSorte).find('.jenre-money').text();
                    var jenreRealMoney = parseInt(jenreMoney, 10);
                    var jenreAmount = finRealPrice + jenreRealMoney;
                    var jenreResult = String(jenreAmount);
                    //ジャンルの横に合計表示
                    $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + finSorte).find('.jenre-money').text(jenreResult);

                }

            }


            //今月の合計金額表示
            var $aFor = $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.fin-genre');
            for (var i = 0; i < $aFor.length; i++) {
                //ジャンルの番号取得
                var finArt = $aFor.eq(i).attr('class').split(' ')[0];
                //各ジャンルの合計金額取得(日次)
                var janruAmount = $aFor.eq(i).find('.jenre-money').text();
                var NumJanruAmount = parseInt(janruAmount, 10);
                //合計金額取得
                var allAmount = $('#finance .MonthAmount').text();
                var NumAllAmount = parseInt(allAmount, 10);
                //合計計算（全体合計）
                var resultAmount = NumJanruAmount + NumAllAmount;
                //各ジャンルの合計金額取得(月次)
                var monthJenre = $('#finance #Month .month-Details .fin-' + finArt).find('.jenre-money').text();
                var NumMonthJenre = parseInt(monthJenre, 10);
                //合計計算（月次）
                var AllMonthJenre = NumMonthJenre + NumJanruAmount;

                //日次に反映
                $('#finance .MonthAmount').text(String(resultAmount));
                //月次に反映
                $('#finance #Month .month-Details .fin-' + finArt).find('.jenre-money').text(String(AllMonthJenre));


            }

        } else {//月が替わったとき
            //年月を累計に表示
            $('#finance #beforeFinance').append('<div' + ' ' + 'class="comulative' + ' ' + y + beforemm + '">' + y + "/" + beforemm + ' ' + '<span' + ' ' + 'class="monSum">' + '</span>' + '円' + '</div>');
            //累計にジャンルの設定
            $('#finance #beforeFinance .' + y + beforemm).append(genre);
            //累計に追加したそれぞれのジャンルにカテゴリーの追加
            $('#finance #beforeFinance .' + y + beforemm + ' ' + '.fin-genre').each(function () {
                $(this).append(category);
            });
            //それぞれのリストを所属カテゴリーに分類
            $('#finance #finMain .today-fin').each(function () {
                $(this).find('.fin-genre').each(function () { 
                    $(this).find('.category-title').each(function () {
                        $(this).find('.point').each(function () { 
                            //それぞれのジャンル取得
                            var eachGenre = $(this).parents('.fin-genre').attr('class').split(' ')[0];
                            //それぞれのカテゴリー取得
                            var eachCategory = $(this).parents('.category-title').attr('class').split(' ')[0];
                            //それぞれのリスト取得
                            var eachList = $(this).html();

                            $('#finance #beforeFinance .' + y + beforemm + ' ' + '.' + eachGenre + ' ' + '.' + eachCategory).append('<li>' + eachList + '</li>');
                        });
                    });
                });
            });

            //今月
            //今月の（先月）合計金額取得
            var befMonAmo = $('#finance #Month').find('.MonthAmount').text();
            $('#finance #beforeFinance .' + y + beforemm + ' ' + '.monSum').text(befMonAmo);
            //今月の各ジャンルの合計金額を取得
            $('#finance #Month .month-Details').find('.fin-genre').each(function () {
                var befJenAmo = $(this).find('.jenre-money').text();
                //ジャンル番号取得
                var befJenNum = $(this).attr('class').split(' ')[0];
                $('#finance #beforeFinance .' + y + beforemm + ' ' + '.' + befJenNum).find('.jenre-money').text(befJenAmo);
            });
            //今月空に
            $('#finance #Month .month-Details').empty().append(genre);
            //今月の値段空に
            $('#finance #Month .MonthAmount').text('0');
            //詳細空に
            $('#finance #finMain').empty().append('<div>買いすぎはないですか？</div>');


            //今までと同じ
            $("#finance #finMain").append('<div' + ' ' + 'class="today-fin' + ' ' + y + m + d + h + mi + s + '"><div' + ' ' + 'class="date">' + y + "/" + '<span' + ' ' + 'class="tuki">' + mm + '</span>' + "/" + dd + '</div></div>');
            //ジャンルを一度設定
            $('#finance .' + y + m + d + h + mi + s).append(genre);
            //そのうえで一つ一つのジャンルにカテゴリーを入れていく
            $('#finance .' + y + m + d + h + mi + s + ' ' + '.fin-genre').each(function () {
                $(this).append(category);
            });

            var $nowFor = $('#shopping-lists .now');
            for (var i = 0; i < $nowFor.length;i++){
                //冷蔵庫に入れるマークあり
                if ($nowFor.eq(i).parents('.point').find('.In-Out-Refrigerator').hasClass('InRefrigerator')) {

                    var finName = $nowFor.eq(i).parents('.point').find('.namae').text();
                    var finNum = $nowFor.eq(i).parents('.point').find('.kazu').text();
                    var finUnit = $nowFor.eq(i).parents('.point').find('.tani').text();
                    //カテゴリー
                    var finArt = $nowFor.eq(i).parents('.point').find('.art').text();
                    //ジャンル
                    var finSorte = $nowFor.eq(i).parents('.point').find('.sorte').text();
                    var finPrice = $nowFor.eq(i).parents('.point').find('.much').text();
                    var finRealPrice = parseInt(finPrice, 10);


                    //ここで家計簿にある所属カテゴリーのリストの数をカウント
                    var cateLength = $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + finSorte + ' ' + '.' + finArt).find('li').length;
                    //固有番号の作成
                    var koyuNum = String(y) + String(m) + String(d) + String(h) + String(mi) + String(s) + String(cateLength);


                    //家計簿追加
                    if ($('#finance #finMain.' + y + m + d + h + mi + s + ' ' + '.' + finSorte).hasClass('jao')) {
                        if ($('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + finSorte + ' ' + '.' + finArt).hasClass('cao')) {
                            $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + finSorte + ' ' + '.' + finArt).append('<li' + ' ' + 'class="point' + ' ' + koyuNum + '">' + '<span' + ' ' + 'class="fin-change-buttom">' + '</span>' + '<span' + ' ' + 'class="fina-name">' + finName + '</span>' + '  ' + '<span' + ' ' + 'class="fina-num">' + finNum + '</span>' + '<span' + ' ' + 'class="fina-unit">' + finUnit + '</span>' + ' ' + '<span' + ' ' + 'class="fina-pri">' + finPrice + '</span>' + '円' + '</li>');
                        } else {//ジャンルはあるけどカテゴリーがない
                            $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + finSorte + ' ' + '.' + finArt).fadeIn().addClass('cao');
                            $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + finSorte + ' ' + '.' + finArt).append('<li' + ' ' + 'class="point' + ' ' + koyuNum + '">' + '<span' + ' ' + 'class="fin-change-buttom">' + '</span>' + '<span' + ' ' + 'class="fina-name">' + finName + '</span>' + '  ' + '<span' + ' ' + 'class="fina-num">' + finNum + '</span>' + '<span' + ' ' + 'class="fina-unit">' + finUnit + '</span>' + ' ' + '<span' + ' ' + 'class="fina-pri">' + finPrice + '</span>' + '円' + '</li>');
                        }
                    } else {//ジャンルがない（＝カテゴリーももちろんない）
                        $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + finSorte).fadeIn().addClass('jao');
                        $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + finSorte + ' ' + '.' + finArt).fadeIn().addClass('cao');
                        $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + finSorte + ' ' + '.' + finArt).append('<li' + ' ' + 'class="point' + ' ' + koyuNum + '">' + '<span' + ' ' + 'class="fin-change-buttom">' + '</span>' + '<span' + ' ' + 'class="fina-name">' + finName + '</span>' + '  ' + '<span' + ' ' + 'class="fina-num">' + finNum + '</span>' + '<span' + ' ' + 'class="fina-unit">' + finUnit + '</span>' + ' ' + '<span' + ' ' + 'class="fina-pri">' + finPrice + '</span>' + '円' + '</li>');
                    }

                    //冷蔵庫に追加
                    $('#refrigerator #refrigeratorLists .' + finArt).fadeIn();
                    $('#refrigerator #refrigeratorLists .' + finArt).append('<li' + ' ' + 'class="point"><span' + ' ' + 'class="use-buttom' + ' ' + koyuNum + '"></span><span' + ' ' + 'class="ref-good-name">' + finName + '</span>' + ' ' + '<span' + ' ' + 'class="ref-good-num">' + finNum + '</span><span' + ' ' + 'class="ref-good-unit">' + finUnit + '</span></li>');

                    
                    window.location.href = '#finance';

                    //ジャンルのお金取得(追加した項目のジャンルから)
                    var jenreMoney = $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + finSorte).find('.jenre-money').text();
                    var jenreRealMoney = parseInt(jenreMoney, 10);
                    var jenreAmount = finRealPrice + jenreRealMoney;
                    var jenreResult = String(jenreAmount);
                    //ジャンルの横に合計表示
                    $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + finSorte).find('.jenre-money').text(jenreResult);



                } else {//冷蔵庫に入れるマークなし
                    var finName = $nowFor.eq(i).parents('.point').find('.namae').text();
                    var finNum = $nowFor.eq(i).parents('.point').find('.kazu').text();
                    var finUnit = $nowFor.eq(i).parents('.point').find('.tani').text();
                    //カテゴリー
                    var finArt = $nowFor.eq(i).parents('.point').find('.art').text();
                    //ジャンル
                    var finSorte = $nowFor.eq(i).parents('.point').find('.sorte').text();
                    var finPrice = $nowFor.eq(i).parents('.point').find('.much').text();
                    var finRealPrice = parseInt(finPrice, 10);


                    //ここで家計簿にある所属カテゴリーのリストの数をカウント
                    var cateLength = $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + finSorte + ' ' + '.' + finArt).find('li').length;
                    //固有番号の作成
                    var koyuNum = String(y) + String(m) + String(d) + String(h) + String(mi) + String(s) + String(cateLength);


                    //家計簿追加
                    if ($('#finance #finMain.' + y + m + d + h + mi + s + ' ' + '.' + finSorte).hasClass('jao')) {
                        if ($('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + finSorte + ' ' + '.' + finArt).hasClass('cao')) {
                            $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + finSorte + ' ' + '.' + finArt).append('<li' + ' ' + 'class="point' + ' ' + koyuNum + '">' + '<span' + ' ' + 'class="fin-change-buttom">' + '</span>' + '<span' + ' ' + 'class="fina-name">' + finName + '</span>' + '  ' + '<span' + ' ' + 'class="fina-num">' + finNum + '</span>' + '<span' + ' ' + 'class="fina-unit">' + finUnit + '</span>' + ' ' + '<span' + ' ' + 'class="fina-pri">' + finPrice + '</span>' + '円' + '</li>');
                        } else {//ジャンルはあるけどカテゴリーがない
                            $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + finSorte + ' ' + '.' + finArt).fadeIn().addClass('cao');
                            $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + finSorte + ' ' + '.' + finArt).append('<li' + ' ' + 'class="point' + ' ' + koyuNum + '">' + '<span' + ' ' + 'class="fin-change-buttom">' + '</span>' + '<span' + ' ' + 'class="fina-name">' + finName + '</span>' + '  ' + '<span' + ' ' + 'class="fina-num">' + finNum + '</span>' + '<span' + ' ' + 'class="fina-unit">' + finUnit + '</span>' + ' ' + '<span' + ' ' + 'class="fina-pri">' + finPrice + '</span>' + '円' + '</li>');
                        }
                    } else {//ジャンルがない（＝カテゴリーももちろんない）
                        $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + finSorte).fadeIn().addClass('jao');
                        $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + finSorte + ' ' + '.' + finArt).fadeIn().addClass('cao');
                        $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + finSorte + ' ' + '.' + finArt).append('<li' + ' ' + 'class="point' + ' ' + koyuNum + '">' + '<span' + ' ' + 'class="fin-change-buttom">' + '</span>' + '<span' + ' ' + 'class="fina-name">' + finName + '</span>' + '  ' + '<span' + ' ' + 'class="fina-num">' + finNum + '</span>' + '<span' + ' ' + 'class="fina-unit">' + finUnit + '</span>' + ' ' + '<span' + ' ' + 'class="fina-pri">' + finPrice + '</span>' + '円' + '</li>');
                    }

                    window.location.href = '#finance';

                    //ジャンルのお金取得(追加した項目のジャンルから)
                    var jenreMoney = $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + finSorte).find('.jenre-money').text();
                    var jenreRealMoney = parseInt(jenreMoney, 10);
                    var jenreAmount = finRealPrice + jenreRealMoney;
                    var jenreResult = String(jenreAmount);
                    //ジャンルの横に合計表示
                    $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + finSorte).find('.jenre-money').text(jenreResult);

                }
                
            }

            //今月の合計金額表示
            var $aFor = $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.fin-genre');
            for (var i = 0; i < $aFor.length;i++){
                //ジャンルの番号取得
                var finArt = $aFor.eq(i).attr('class').split(' ')[0];
                //各ジャンルの合計金額取得(日次)
                var janruAmount = $aFor.eq(i).find('.jenre-money').text();
                var NumJanruAmount = parseInt(janruAmount, 10);
                //合計金額取得
                var allAmount = $('#finance .MonthAmount').text();
                var NumAllAmount = parseInt(allAmount, 10);
                //合計計算（全体合計）
                var resultAmount = NumJanruAmount + NumAllAmount;
                //各ジャンルの合計金額取得(月次)
                var monthJenre = $('#finance #Month .month-Details .fin-' + finArt).find('.jenre-money').text();
                var NumMonthJenre = parseInt(monthJenre, 10);
                //合計計算（月次）
                var AllMonthJenre = NumMonthJenre + NumJanruAmount;

                //日次に反映
                $('#finance .MonthAmount').text(String(resultAmount));
                //月次に反映
                $('#finance #Month .month-Details .fin-' + finArt).find('.jenre-money').text(String(AllMonthJenre));

               
            }
        }
        //初期化
        //買い物中の画面の「kau」クラスの個数
        var kauNum = $('#shopping-lists #shopping-lists-page').find('.kau').length;
        //まだ買い物リストが残っていた時
        if (kauNum != '0') {
            //買ったものは削除
            $('#shopping-lists .now').parents('.point').remove();
            //買うボタンが押されたときの画面
            $('#buying-page #bought-lists-page').empty().append('<div>買ったものリスト(金額は税込み表示)</div>').append(category);
            //買い物中の画面の買い物完了を元に戻す
            $('#shopping-lists .finiSho').html('<div' + ' ' + 'id="finish-shopping">終了</div>');
            //買い物中の画面の追加ボタンを元に戻す
            $('#shopping-lists .back-adding').fadeIn();
            //買い物中の画面の合計金額初期化
            $('#shopping-lists #amounts').text('0');
            //買うボタンもとに戻す
            $('#shopping-lists #shopping-lists-page').find('.kau').fadeIn();
            //削除ボタン基に戻す
            $('.deleteDiv').find('#delete-buttom').fadeIn();


        } else {//「kau」クラスがゼロの時

            //買い物リストを作るページ
            $('#making-lists #adding-lists-page').empty().append(category);
            //買い物中の画面
            $('#shopping-lists #shopping-lists-page').empty().append('<div>買うものリスト</div>').append(category);
            //買うボタンが押されたときの画面
            $('#buying-page #bought-lists-page').empty().append('<div>買ったものリスト(金額は税込み表示)</div>').append(category);
            //買い物中の画面の買い物完了を元に戻す
            $('#shopping-lists .finiSho').html('<div' + ' ' + 'id="finish-shopping">終了</div>');
            //買い物中の画面の追加ボタンを元に戻す
            $('#shopping-lists .back-adding').fadeIn();
            //買い物中の画面の合計金額初期化
            $('#shopping-lists #amounts').text('0');
        }
    });


    //家計簿画面
            //今月が押されたとき（その月のジャンルごとの詳細表示））
            $('#finance #monthDeteil').on('click', function () {

                //月次詳細が開いている状態で押される（open-detailsあり）
                if ($('#monthDeteil').hasClass('open-details')) {
                    $(this).removeClass('open-details');
                    $(this).text('今月');
                    $('.month-Details').fadeOut();
                    $('.month-Details .fin-genre').fadeOut();
                } else {
                    $(this).addClass('open-details');
                    $(this).text('閉じる');
                    $('.month-Details').fadeIn();
                    $('.month-Details .fin-genre').fadeIn();
                }

            });

            //累計の年月が押されたとき
            $('#finance #beforeFinance').on('click', '.comulative', function () {
                //開いている状態で押されたとき（openComulativeあり）
                if ($(this).hasClass('openComulative')) {
                    $(this).removeClass('openComulative');
                    $(this).find('.fin-genre').fadeOut();
                } else {
                    $(this).addClass('openComulative');
                    $(this).find('.fin-genre').fadeIn();
                }
            });

            //累計のジャンルが押されたとき
            $('#finance #beforeFinance').on('click', '.fin-genre', function () {
                //開いている状態で押されたとき（openCateあり）
                if ($(this).hasClass('openCate')) {
                    $(this).removeClass('openCate');
                    $(this).find('.category-title').fadeOut();
                } else {
                    $(this).addClass('openCate');
                    $(this).find('.category-title').fadeIn();
                }
            });


            //追加が押されたとき
            $('#finAddButtom').on('click', function () {
                $('.finAdd-page').slideDown();
            });

            //戻るが押されたとき
            $('#finAddBack').on('click', function () {
                $('.finAdd-page').slideUp();
            });

            //追加実行
            $('#finance #finAdd #finAddForm').on('click', '#finAddButton', function () {
                var lastReport = $('#finance #finMain').last('.today-fin').find('.tuki').text();

                //日付
                var jetzt = new Date();
                var y = jetzt.getFullYear();
                var m = jetzt.getMonth() + 1;
                var beforeM = jetzt.getMonth();
                var d = jetzt.getDate();
                var mm = ("0" + m).slice(-2);
                var beforemm = ("0" + beforeM).slice(-2);
                var dd = ("0" + d).slice(-2);
                var h = jetzt.getHours();
                var mi = jetzt.getMinutes();
                var s = jetzt.getSeconds();
                //名前の取得
                var NewFinName = $('#finance #finAdd #finAddForm #finAddName').val();
                //値段の取得
                var NewFinPrice = $('#finance #finAdd #finAddForm #finAddPrice').val();
                var NumNewFinPrice = parseInt(NewFinPrice, 10);
                //個数の取得
                var NewFinNum = $('#finance #finAdd #finAddForm #finAddNummber').val();
                //単位の取得
                var NewFinUnit = $('#finance #finAdd #finAddForm #finAddUnit').val();
                //カテゴリーの取得
                var NewFinCategory = $('#finance #finAdd #finAddForm #finAddCategory').val();
                //ジャンルの取得
                var NewFinJenre = $('#finance #finAdd #finAddForm #finAddGenre').val();
                //ジャンルテンプレートの取得
                var genre = $('#finance #fin-templete-genre').html();
                //カテゴリーテンプレートの取得
                var category = $('#finance #fin-templete-category').html();



                //家計簿リストに反映
                if (lastReport == mm) {
                    $("#finance #finMain").append('<div' + ' ' + 'class="today-fin' + ' ' + y + m + d + h + mi + s + '"><div' + ' ' + 'class="date">' + y + "/" + '<span' + ' ' + 'class="tuki">' + mm + '</span>' + "/" + dd + '</div></div>');
                    //ジャンルを一度設定
                    $('#finance .' + y + m + d + h + mi + s).append(genre);
                    //そのうえで一つ一つのジャンルにカテゴリーを入れていく
                    $('#finance .' + y + m + d + h + mi + s + ' ' + '.fin-genre').each(function () {
                        $(this).append(category);
                    });

                    //ここで家計簿にある所属カテゴリーのリストの数をカウント
                    var cateLength = $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + NewFinJenre + ' ' + '.' + NewFinCategory).find('li').length;
                    //固有番号の作成
                    var koyuNum = String(y) + String(m) + String(d) + String(h) + String(mi) + String(s) + String(cateLength);


                    //家計簿追加
                    if ($('#finance #finMain.' + y + m + d + h + mi + s + ' ' + '.' + NewFinJenre).hasClass('jao')) {
                        if ($('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + NewFinJenre + ' ' + '.' + NewFinCategory).hasClass('cao')) {
                            $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + NewFinJenre + ' ' + '.' + NewFinCategory).append('<li' + ' ' + 'class="point' + ' ' + koyuNum + '">' + '<span' + ' ' + 'class="fin-change-buttom">' + '</span>' + '<span' + ' ' + 'class="fina-name">' + NewFinName + '</span>' + '  ' + '<span' + ' ' + 'class="fina-num">' + NewFinNum + '</span>' + '<span' + ' ' + 'class="fina-unit">' + NewFinUnit + '</span>' + ' ' + '<span' + ' ' + 'class="fina-pri">' + NewFinPrice + '</span>' + '円' + '</li>');
                        } else {//ジャンルはあるけどカテゴリーがない
                            $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + NewFinJenre + ' ' + '.' + NewFinCategory).fadeIn().addClass('cao');
                            $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + NewFinJenre + ' ' + '.' + NewFinCategory).append('<li' + ' ' + 'class="point' + ' ' + koyuNum + '">' + '<span' + ' ' + 'class="fin-change-buttom">' + '</span>' + '<span' + ' ' + 'class="fina-name">' + NewFinName + '</span>' + '  ' + '<span' + ' ' + 'class="fina-num">' + NewFinNum + '</span>' + '<span' + ' ' + 'class="fina-unit">' + NewFinUnit + '</span>' + ' ' + '<span' + ' ' + 'class="fina-pri">' + NewFinPrice + '</span>' + '円' + '</li>');
                        }
                    } else {//ジャンルがない（＝カテゴリーももちろんない）
                        $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + NewFinJenre).fadeIn().addClass('jao');
                        $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + NewFinJenre + ' ' + '.' + NewFinCategory).fadeIn().addClass('cao');
                        $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + NewFinJenre + ' ' + '.' + NewFinCategory).append('<li' + ' ' + 'class="point' + ' ' + koyuNum + '">' + '<span' + ' ' + 'class="fin-change-buttom">' + '</span>' + '<span' + ' ' + 'class="fina-name">' + NewFinName + '</span>' + '  ' + '<span' + ' ' + 'class="fina-num">' + NewFinNum + '</span>' + '<span' + ' ' + 'class="fina-unit">' + NewFinUnit + '</span>' + ' ' + '<span' + ' ' + 'class="fina-pri">' + NewFinPrice + '</span>' + '円' + '</li>');
                    }

                    //冷蔵庫に追加
                    if ($('#finance .fin-footer #finAddForm #finCheck').prop('checked')) {
                        $('#refrigerator #refrigeratorLists .' + NewFinCategory).fadeIn();
                        $('#refrigerator #refrigeratorLists .' + NewFinCategory).append('<li' + ' ' + 'class="point"><span' + ' ' + 'class="use-buttom' + ' ' + koyuNum + '"></span><span' + ' ' + 'class="ref-good-name">' + NewFinName + '</span>' + ' ' + '<span' + ' ' + 'class="ref-good-num">' + NewFinNum + '</span><span' + ' ' + 'class="ref-good-unit">' + NewFinUnit + '</span></li>');
                    } else {
                        $.noop();
                    }

                    
                    //ジャンルの横に合計表示
                    $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + NewFinJenre).find('.jenre-money').text(NewFinPrice);

                    
                    //今月の合計金額表示
                    var $konngetugoukei = $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + NewFinJenre)
                    //各ジャンルの合計金額取得(日次)
                    var janruAmount = $konngetugoukei.find('.jenre-money').text();
                    var NumJanruAmount = parseInt(janruAmount, 10);
                    //合計金額取得
                    var allAmount = $('#finance .MonthAmount').text();
                    var NumAllAmount = parseInt(allAmount, 10);
                    //合計計算（全体合計）
                    var resultAmount = NumJanruAmount + NumAllAmount;
                    //各ジャンルの合計金額取得(月次)
                    var monthJenre = $('#finance #Month .month-Details .fin-' + NewFinJenre).find('.jenre-money').text();
                    var NumMonthJenre = parseInt(monthJenre, 10);
                    //合計計算（月次）
                    var AllMonthJenre = NumMonthJenre + NumJanruAmount;

                        //全体合計に反映
                        $('#finance .MonthAmount').text(String(resultAmount));
                        //月次に反映
                        $('#finance #Month .month-Details .fin-' + NewFinJenre).find('.jenre-money').text(String(AllMonthJenre));

                        $('.finAdd-page').slideUp();

                } else {//月変わる
                    //年月を累計に表示
                    $('#finance #beforeFinance').append('<div' + ' ' + 'class="comulative' + ' ' + y + beforemm + '">' + y + "/" + beforemm + ' ' + '<span' + ' ' + 'class="monSum">' + '</span>' + '円' + '</div>');
                    //累計にジャンルの設定
                    $('#finance #beforeFinance .' + y + beforemm).append(genre);
                    //累計に追加したそれぞれのジャンルにカテゴリーの追加
                    $('#finance #beforeFinance .' + y + beforemm + ' ' + '.fin-genre').each(function () {
                        $(this).append(category);
                    });

                    //それぞれのリストを所属カテゴリーに分類
                    $('#finance #finMain .today-fin').each(function () {
                        $(this).find('.fin-genre').each(function () {
                            $(this).find('.category-title').each(function () {
                                $(this).find('.point').each(function () {
                                    //それぞれのジャンル取得
                                    var eachGenre = $(this).parents('.fin-genre').attr('class').split(' ')[0];
                                    //それぞれのカテゴリー取得
                                    var eachCategory = $(this).parents('.category-title').attr('class').split(' ')[0];
                                    //それぞれのリスト取得
                                    var eachList = $(this).html();

                                    $('#finance #beforeFinance .' + y + beforemm + ' ' + '.' + eachGenre + ' ' + '.' + eachCategory).append('<li>' + eachList + '</li>');
                                });
                            });
                        });
                    });

                    //今月
                    //今月の（先月）合計金額取得
                    var befMonAmo = $('#finance #Month').find('.MonthAmount').text();
                    $('#finance #beforeFinance .' + y + beforemm + ' ' + '.monSum').text(befMonAmo);
                    //今月の各ジャンルの合計金額を取得
                    $('#finance #Month .month-Details').find('.fin-genre').each(function () {
                        var befJenAmo = $(this).find('.jenre-money').text();
                        //ジャンル番号取得
                        var befJenNum = $(this).attr('class').split(' ')[0];
                        $('#finance #beforeFinance .' + y + beforemm + ' ' + '.' + befJenNum).find('.jenre-money').text(befJenAmo);
                    });
                    //今月空に
                    $('#finance #Month .month-Details').empty().append(genre);
                    //今月の値段空に
                    $('#finance #Month .MonthAmount').text('0');
                    //詳細空に
                    $('#finance #finMain').empty().append('<div>買いすぎはないですか？</div>');


                    //同じ
                    $("#finance #finMain").append('<div' + ' ' + 'class="today-fin' + ' ' + y + m + d + h + mi + s + '"><div' + ' ' + 'class="date">' + y + "/" + '<span' + ' ' + 'class="tuki">' + mm + '</span>' + "/" + dd + '</div></div>');
                    //ジャンルを一度設定
                    $('#finance .' + y + m + d + h + mi + s).append(genre);
                    //そのうえで一つ一つのジャンルにカテゴリーを入れていく
                    $('#finance .' + y + m + d + h + mi + s + ' ' + '.fin-genre').each(function () {
                        $(this).append(category);
                    });

                    //家計簿追加
                    if ($('#finance #finMain.' + y + m + d + h + mi + s + ' ' + '.' + NewFinJenre).hasClass('jao')) {
                        if ($('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + NewFinJenre + ' ' + '.' + NewFinCategory).hasClass('cao')) {
                            $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + NewFinJenre + ' ' + '.' + NewFinCategory).append('<li' + ' ' + 'class="point' + ' ' + koyuNum + '">' + '<span' + ' ' + 'class="fin-change-buttom">' + '</span>' + '<span' + ' ' + 'class="fina-name">' + NewFinName + '</span>' + '  ' + '<span' + ' ' + 'class="fina-num">' + NewFinNum + '</span>' + '<span' + ' ' + 'class="fina-unit">' + NewFinUnit + '</span>' + ' ' + '<span' + ' ' + 'class="fina-pri">' + NewFinPrice + '</span>' + '円' + '</li>');
                        } else {//ジャンルはあるけどカテゴリーがない
                            $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + NewFinJenre + ' ' + '.' + NewFinCategory).fadeIn().addClass('cao');
                            $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + NewFinJenre + ' ' + '.' + NewFinCategory).append('<li' + ' ' + 'class="point' + ' ' + koyuNum + '">' + '<span' + ' ' + 'class="fin-change-buttom">' + '</span>' + '<span' + ' ' + 'class="fina-name">' + NewFinName + '</span>' + '  ' + '<span' + ' ' + 'class="fina-num">' + NewFinNum + '</span>' + '<span' + ' ' + 'class="fina-unit">' + NewFinUnit + '</span>' + ' ' + '<span' + ' ' + 'class="fina-pri">' + NewFinPrice + '</span>' + '円' + '</li>');
                        }
                    } else {//ジャンルがない（＝カテゴリーももちろんない）
                        $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + NewFinJenre).fadeIn().addClass('jao');
                        $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + NewFinJenre + ' ' + '.' + NewFinCategory).fadeIn().addClass('cao');
                        $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + NewFinJenre + ' ' + '.' + NewFinCategory).append('<li' + ' ' + 'class="point' + ' ' + koyuNum + '">' + '<span' + ' ' + 'class="fin-change-buttom">' + '</span>' + '<span' + ' ' + 'class="fina-name">' + NewFinName + '</span>' + '  ' + '<span' + ' ' + 'class="fina-num">' + NewFinNum + '</span>' + '<span' + ' ' + 'class="fina-unit">' + NewFinUnit + '</span>' + ' ' + '<span' + ' ' + 'class="fina-pri">' + NewFinPrice + '</span>' + '円' + '</li>');
                    }
                    //冷蔵庫に追加
                    if ($('#finance .fin-footer #finAddForm #finCheck').prop('checked')) {
                        //ここで家計簿にある所属カテゴリーのリストの数をカウント
                        var cateLength = $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + NewFinJenre + ' ' + '.' + NewFinCategory).find('li').length;
                        //固有番号の作成
                        var koyuNum = String(y) + String(m) + String(d) + String(h) + String(mi) + String(s) + String(cateLength);
                        //冷蔵庫に追加
                        $('#refrigerator #refrigeratorLists .' + NewFinCategory).fadeIn();
                        $('#refrigerator #refrigeratorLists .' + NewFinCategory).append('<li' + ' ' + 'class="point"><span' + ' ' + 'class="use-buttom' + ' ' + koyuNum +'"></span><span' + ' ' + 'class="ref-good-name">' + NewFinName + '</span>' + ' ' + '<span' + ' ' + 'class="ref-good-num">' + NewFinNum + '</span><span' + ' ' + 'class="ref-good-unit">' + NewFinUnit + '</span></li>');
                    } else {
                        $.noop();
                    }


                    //ジャンルのお金取得
                    var jenreMoney = $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + NewFinJenre).find('.jenre-money').text();
                    var jenreRealMoney = parseInt(jenreMoney, 10);
                    var jenreAmount = NumNewFinPrice + jenreRealMoney;
                    var jenreResult = String(jenreAmount);
                    //ジャンルの横に合計表示
                    $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + NewFinJenre).find('.jenre-money').text(jenreResult);


                    //今月の合計金額表示
                    var $konngetugoukei = $('#finance #finMain .' + y + m + d + h + mi + s + ' ' + '.' + NewFinJenre)
                    //各ジャンルの合計金額取得(日次)
                    var janruAmount = $konngetugoukei.find('.jenre-money').text();
                    var NumJanruAmount = parseInt(janruAmount, 10);
                    //合計金額取得
                    var allAmount = $('#finance .MonthAmount').text();
                    var NumAllAmount = parseInt(allAmount, 10);
                    //合計計算（全体合計）
                    var resultAmount = NumJanruAmount + NumAllAmount;
                    //各ジャンルの合計金額取得(月次)
                    var monthJenre = $('#finance #Month .month-Details .fin-' + NewFinJenre).find('.jenre-money').text();
                    var NumMonthJenre = parseInt(monthJenre, 10);
                    //合計計算（月次）
                    var AllMonthJenre = NumMonthJenre + NumJanruAmount;

                    //全体合計に反映
                    $('#finance .MonthAmount').text(String(resultAmount));
                    //月次に反映
                    $('#finance #Month .month-Details .fin-' + NewFinJenre).find('.jenre-money').text(String(AllMonthJenre));



                    $('.finAdd-page').slideUp();
                }

                //初期化
                $(this.form).find("input").val("");

            });

            //累計が押されたとき
            $('#before').on('click', function () {
                if ($(this).hasClass('before-open')) {
                    $('#beforeFinance').fadeOut();
                    $(this).removeClass('before-open');
                } else{
                    $('#beforeFinance').fadeIn();
                    $(this).addClass('before-open');
                }
            });

            //削除が押されたとき
            $('#finance #finDelete').on('click', function () {
                //削除機能がオンの時
                if ($(this).hasClass('on-delete')) {
                    $(this).removeClass('on-delete');
                    $('#finance #finMain .fin-change-buttom').html('');
                    $(this).text('削除');
                } else {//削除機能オフの時
                    $(this).addClass('on-delete');
                    $('#finance #finMain .fin-change-buttom').html('<div' + ' ' + 'class="fin-delete-buttom">' + '削除' + '</span>');
                    $(this).text('戻る');
                }
            });

            //削除ボタンが押されたとき
            $('#finance #finMain').on('click', '.fin-delete-buttom', function () {
                if (!confirm('削除してよろしいですか。')) {
                    return false;
                } else {
                    //固有番号取得
                    var oriNum = $(this).parents('.point').attr('class').split(' ')[1];
                    //その日の時間取得
                    var thisTime = $(this).parents('.today-fin').attr('class').split(' ')[1];
                    
                    //ジャンル取得
                    var thisJenre = $(this).parents('.fin-genre').attr('class').split(' ')[0];
                    
                    //カテゴリー取得
                    var thisCategory = $(this).parents('.category-title').attr('class').split(' ')[0];
                    
                    //削除項目の金額取得
                    var thisGeld = $(this).parents('.point').find('.fina-pri').text();
                    var NumThisGeld = parseInt(thisGeld, 10);
                    //対象項目のジャンルの合計金額表示
                    var thisGenreMoney = $(this).parents('.fin-genre').find('.jenre-money').text();
                    var NumthisGenreMoney = parseInt(thisGenreMoney, 10);
                    //合計金額表示
                    var allMonth = $('#finance #Month .MonthAmount').text();
                    var NumAllMonth = parseInt(allMonth, 10);
                    //月次のジャンル金額取得
                    var thisMonthGenreMoney = $('#finance #Month .fin-' + thisJenre).find('.jenre-money').text();
                    var NumThisMonthGenreMoney = parseInt(thisMonthGenreMoney, 10);

                    //ジャンル合計修正
                    var fixGenreAmount = NumthisGenreMoney - NumThisGeld;
                    //全体合計修正
                    var fixAllAmount = NumAllMonth - NumThisGeld;
                    //月次のジャンル修正
                    var fixMonthGenreAmount = NumThisMonthGenreMoney - NumThisGeld;


                    //ジャンル合計に反映
                    $(this).parents('.fin-genre').find('.jenre-money').text(String(fixGenreAmount));
                    //全体合計に反映
                    $('#finance #Month .MonthAmount').text(String(fixAllAmount));
                    //月次のジャンルに反映
                    $('#finance #Month .fin-' + thisJenre).find('.jenre-money').text(String(fixMonthGenreAmount));

                    //冷蔵庫のものも削除(あったら)
                    if ($('#refrigerator #refrigeratorLists').find('.' + oriNum).length) {
                        $('#refrigerator #refrigeratorLists').find('.' + oriNum).parents('.point').remove();
                    } else {
                        $.noop();
                    }

                    //項目を削除
                    

                    //その日の時間のリスト取得
                    var thisTimeKistNum = $(this).parents('.today-fin').find('li').length;
                    //ジャンルの中のリストの個数を取得
                    var thisJenreListNum = $(this).parents('.fin-genre').find('li').length;
                    //カテゴリーの中のリストの個数を取得
                    var thisCategoryListNum = $(this).parents('.category-title').find('li').length;

                    //その時間のリストの個数が1であるかどうか
                    if (String(thisTimeKistNum) == "1") {
                        $(this).parents('.today-fin').remove();
                    } else {
                        //削除される項目のジャンルの中のリストの個数が１であるかどうか
                        if (String(thisJenreListNum) == "1") {
                            $(this).parents('.fin-genre').remove();
                        } else {
                            //削除される項目のカテゴリーのリストの個数が1であるかどうか
                            if (String(thisCategoryListNum) == "1") {
                                $(this).parents('.category-title').remove();
                            } else {
                                $(this).parents('.point').remove();
                            }
                        }
                    }


                    
                }
            });

            //編集ボタンが押されたとき
            $('#finance #finEdit').on('click', function () {
                if ($(this).hasClass('on-edit')) {
                    $(this).removeClass('on-edit');
                    $('#finance #finMain .fin-change-buttom').html('');
                    $(this).text('編集');
                } else {
                    $(this).addClass('on-edit');
                    $('#finance #finMain .fin-change-buttom').html('<div' + ' ' + 'class="fin-edit-buttom">' + '編集' + '</span>');
                    $(this).text('戻る');
                }
            });

            //各項目の編集ボタンが押されたとき
            $('#finance #finMain').on('click', '.fin-edit-buttom', function () {
                //changingをつける
                $(this).addClass('changing');
                //名前を持っていく
                var beforeName = $(this).parents('.point').find('.fina-name').text();
                $('#finance #finEditPage #finEditForm #finEditFormName').val(beforeName);
                //個数を持っていく
                var beforeNum = $(this).parents('.point').find('.fina-num').text();
                $('#finance #finEditPage #finEditForm #finEditFormNum').text(beforeNum);
                //単位を持っていく
                var beforeUnit = $(this).parents('.point').find('.fina-unit').text();
                $('#finance #finEditPage #finEditForm #finEditFormUnit').text(beforeUnit);
                //金額を持っていく
                var beforeMoney = $(this).parents('.point').find('.fina-pri').text();
                $('#finance #finEditPage #finEditForm #finEditFormGeld').val(beforeMoney);
                $('#finance #finEditPage #beforeGeldMoney').text(beforeMoney);
                //固有番号を持っていく
                var oriNUmbar = $(this).parents('.point').attr('class').split(' ')[1];
                $('#finance #finEditPage #changeOruNumber').text(oriNUmbar);

                $('#finance #finEditPage').fadeIn();
            });

            //戻るボタンが押されたとき
            $('#finance #finEditPage #finEditBack').on('click', function () {
                $('#finance #finEditPage').fadeOut();
            });

            //編集ホームの変更ボタンが押されたとき
            $('#finance #finEditPage #finEditForm').on('click', '#finEditFormButtom', function () {
                //固有番号を取得
                var oriNUmbar = $('#finance #finEditPage #changeOruNumber').text();
                //名前を取得
                var afterName = $('#finance #finEditPage #finEditForm #finEditFormName').val();
                //数を取得
                var afterNum = $('#finance #finEditPage #finEditForm #finEditFormNum').text();
                //金額を取得
                var beforeGeld = $('#finance #finEditPage #beforeGeldMoney').text();
                var afterGeld = $('#finance #finEditPage #finEditForm #finEditFormGeld').val();
                var NumBeforeGeld = parseInt(beforeGeld, 10);
                var NumAfterGeld = parseInt(afterGeld, 10);
                //ジャンル取得
                var jeje = $('#finance #finMain .changing').parents('.point').attr('class').split(' ')[1];

                var $carryOn = $('#finance #finMain').find('.changing').parents('.point');

                //名前の反映
                $carryOn.find('.fina-name').text(afterName);
                //数の反映
                $carryOn.find('.fina-num').text(afterNum);
                //金額の反映
                $carryOn.find('.fina-pri').text(afterGeld);

                

                //金額変更を反映
                //対象項目のジャンルの合計金額表示
                var thisGenreMoney = $('#finance #finMain .changing').parents('.fin-genre').find('.jenre-money').text();
                var NumthisGenreMoney = parseInt(thisGenreMoney, 10);
                //合計金額表示
                var allMonth = $('#finance #Month .MonthAmount').text();
                var NumAllMonth = parseInt(allMonth, 10);
                //月次のジャンル金額取得
                var thisMonthGenreMoney = $('#finance #Month .fin-' + jeje).find('.jenre-money').text();
                var NumThisMonthGenreMoney = parseInt(thisMonthGenreMoney, 10);

                //ジャンル合計修正
                var fixGenreAmount = NumthisGenreMoney - NumBeforeGeld + NumAfterGeld;
                //全体合計修正
                var fixAllAmount = NumAllMonth - NumBeforeGeld + NumAfterGeld;
                //月次のジャンル修正
                var fixMonthGenreAmount = NumThisMonthGenreMoney - NumBeforeGeld + NumAfterGeld;

                //ジャンル合計に反映
                $('#finance #finMain .changing').parents('.fin-genre').find('.jenre-money').text(String(fixGenreAmount));
                //全体合計に反映
                $('#finance #Month .MonthAmount').text(String(fixAllAmount));
                //月次のジャンルに反映
                $('#finance #Month .fin-' + jeje).find('.jenre-money').text(String(fixMonthGenreAmount));


                //冷蔵庫に反映
                if ($('#refrigerator #refrigeratorLists').find('.' + oriNUmbar).length) {
                    //名前のみの変更
                    $('#refrigerator #refrigeratorLists').find('.' + oriNUmbar).parents('.point').find('.ref-good-name').text(afterName);
                } else {
                    $.noop();
                }


                //changingを取る
                $carryOn.find('.fin-edit-buttom').removeClass('changing');


                //画面閉じる
                $('#finance #finEditPage').fadeOut();

                return false;


            });


    //冷蔵庫画面

            //使うが押されたとき
            $('#refrigerator .use-buttom-squere').on('click', '.benutzen', function () {
                //使うが表示されている状態で押されたとき(open-useあり)
                if ($(this).hasClass('open-use')) {
                    $(this).removeClass('open-use');
                    $(this).text('使う');
                    $('#refrigerator .use-buttom').html('');
                } else {//使うが表示されていないとき
                    $(this).addClass('open-use');
                    $(this).text('戻る');
                    $('#refrigerator #refrigeratorLists .use-buttom').html('<div' + ' ' + 'class="using">使う</div>');
                }
            });


            //使う機能の実行
            $('#refrigerator').on('click', '.using', function () {
                $('#refrigerator #carryOnUse').fadeIn();
                //名前を移行
                var useName = $(this).parents('.point').find('.ref-good-name').text();
                $('#refrigerator #carryOnUse #usingForm #usingFormName').text(useName);
                //量を移行
                var useNum = $(this).parents('.point').find('.ref-good-num').text();
                $('#refrigerator #carryOnUse #usingForm #usingFormNum').val(useNum);
                $('#refrigerator #carryOnUse #beforeUseNum').text(useNum);
                //単位を移行
                var useUnit = $(this).parents('.point').find('.ref-good-unit').text();
                $('#refrigerator #carryOnUse #usingForm #usingFormUnit').text(useUnit);

                //目印
                $(this).addClass('carring-on');

            });

            //使うページ戻る
            $('#refrigerator #cancelUse').on('click', function () {
                $('#refrigerator #carryOnUse').fadeOut();
                $('#refrigerator .#refrigeratorLists').find('.carring-on').removeClass('carring-on');
            });

            //量を入力して使うが押されたとき
            $('#refrigerator #carryOnUse #usingForm #usingFormButtom').on('click', function () {
                //入力前の量の取得
                var beforeUseNum = $('#refrigerator #carryOnUse #beforeUseNum').text();
                var NbeforeUseNum = parseInt(beforeUseNum, 10);
                //入力した量の取得
                var afterUseNum = $('#refrigerator #carryOnUse #usingForm #usingFormNum').val();
                var NafterUseNum = parseInt(afterUseNum, 10);
                //入力前の量ー入力値（＋になる時）
                var resultNum = NbeforeUseNum - NafterUseNum;
                

                //入力値＝冷蔵庫にある量
                if (beforeUseNum == afterUseNum) {
                    $('#refrigerator #error-using').text('');
                    $('#refrigerator #refrigeratorLists').find('.carring-on').parents('.point').remove();
                    $('#refrigerator #refrigeratorLists').find('.carring-on').removeClass('carring-on');
                    $('#refrigerator #carryOnUse').fadeOut();
                } else if (beforeUseNum > afterUseNum) {//冷蔵庫にある量＞入力値
                    $('#refrigerator #error-using').text('');
                    $('#refrigerator #refrigeratorLists').find('.carring-on').parents('.point').find('.ref-good-num').text(String(resultNum));
                    $('#refrigerator #refrigeratorLists').find('.carring-on').removeClass('carring-on');
                    $('#refrigerator #carryOnUse').fadeOut();
                } else {
                    $('#refrigerator #error-using').text('値が冷蔵庫にある量を超えています');
                }

                
                

                return false;
            });

            //削除が押されたとき
            $('#refrigerator .delete-buttom-squere').on('click', '.use-delete', function () {
                //削除が表示されている状態で押されたとき(open-deleteあり)
                if ($(this).hasClass('open-delete')) {
                    $(this).removeClass('open-delete');
                    $(this).text('削除');
                    $('#refrigerator .use-buttom').html('');
                } else {//使うが表示されていないとき
                    $(this).addClass('open-delete');
                    $(this).text('戻る');
                    $('#refrigerator .use-buttom').html('<div' + ' ' + 'class="deleting">削除</div>');
                }
            });

            //削除実行
            $('#refrigerator').on('click', '.deleting', function () { 
                //目印
                $(this).addClass('now-deleting');
                 if (!confirm('削除していいですか？')) {
                   return false;
                 } else {
                     $('#refrigerator #refrigeratorLists').find('.now-deleting').parents('.point').remove();

                 }
            });

            //追加が押されたとき
            $('#refrigerator #refAdd').on('click', function () {
                $('#refAddPage').fadeIn();
            });

            //戻るが押されたとき
            $('#refrigerator #refAddPage #cancelRefAdd').on('click', function () {
                $('#refAddPage').fadeOut();
            });

            //追加実行
            $('#refrigerator #refAddPage #refAddForm #refAddFormButtom').on('click', function () {
                //名前取得
                var newRefName = $('#refrigerator #refAddPage #refAddForm #refAddFormName').val();
                //数取得
                var newRefNum = $('#refrigerator #refAddPage #refAddForm #refAddFormNum').val();
                //単位取得
                var newRefUnit = $('#refrigerator #refAddPage #refAddForm #refAddFormUnit').val();
                //カテゴリー取得
                var newRefCategory = $('#refrigerator #refAddPage #refAddForm #refAddFormCategory').val();

                //空欄がないか
                if (newRefName == "" || newRefNum == "") {
                    $('#refrigerator #refAddPage #error-refAdd').text('未入力欄があります。');
                    $.noop();
                } else {
                    $('#refrigerator #refAddPage #error-refAdd').text('');
                    $('#refrigerator #refrigeratorLists .' + newRefCategory).fadeIn();
                    $('#refrigerator #refrigeratorLists .' + newRefCategory).append('<li' + ' ' + 'class="point"><span' + ' ' + 'class="use-buttom">' + '</span>' + '<span' + ' ' + 'class="ref-good-name">' + newRefName + '</span>' + ' ' + '<span' + ' ' + 'class="ref-good-num">' + newRefNum + '</span><span' + ' ' + 'class="ref-good-unit">' + newRefUnit + '</span></li>')
                    $('#refAddPage').fadeOut();
                }

                //初期化
                $(this.form).find("input").val("");

                return false;
            });
});