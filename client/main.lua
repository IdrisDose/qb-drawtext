local textIsVisible = false
local currentText = ""

local function HideText()
    if not textIsVisible then return end
    SendNUIMessage({
        action = 'HIDE_TEXT',
    })
    textIsVisible = false
    currentText = ""
end

local function DrawText(text, position)
    if textIsVisible and text == currentText then return end
    textIsVisible = true
    currentText = text

    if (not type(position) == "string") then position = "left" end

    SendNUIMessage({
        action = 'DRAW_TEXT',
        data = {
            text = text,
            position = position
        }
    })
end


local function ChangeText(text,position)
    if (not type(position) == "string") then position = "left" end

    SendNUIMessage({
        action = 'CHANGE_TEXT',
        data = {
            text = text,
            position = position
        }
    })
end

local function KeyPressed()
    if not textIsVisible then return end

    Citizen.CreateThread(function() -- Not sure if a thread is needed but why not eh?
        SendNUIMessage({
            action = 'KEY_PRESSED',
        })
        Wait(500)
        HideText()
    end)
end

RegisterNetEvent('qb-drawtext:client:DrawText', function(text, position)
    DrawText(text, position)
end)

RegisterNetEvent('qb-drawtext:client:ChangeText', function(text, position)
    ChangeText(text, position)
end)

RegisterNetEvent('qb-drawtext:client:HideText', function()
    HideText()
end)

RegisterNetEvent('qb-drawtext:client:KeyPressed', function()
    KeyPressed()
end)

exports('DrawText', DrawText)
exports('ChangeText', ChangeText)
exports('HideText', HideText)
exports('KeyPressed', KeyPressed)