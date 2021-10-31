# qb-drawtext

A NUI DrawText with a few different config options

## How to use

This can be triggered from the server or client. A more advanced example is posted below.
|Function or Event | Description |
|--|--|
| `exports['qb-drawtext']:DrawText('message','position')` | This is a client export that will draw a message at the specified position (listed below) |
| `exports['qb-drawtext']:HideText()` | This will hide the text display |
| `exports['qb-drawtext']:KeyPressed()` | This is useful if you want to change the background and hide the text on keypress (if not handled correctly users will have to renter the zone to display) |
| `TriggerClientEvent('qb-drawtext:client:DrawText', message, position)` | The same as the export but as an event |
| `TriggerClientEvent('qb-drawtext:client:HideText')` | The same as the export but as an event |
| `TriggerClientEvent('qb-drawtext:client:KeyPressed')` | The same as the export but as an event |

## License

    qb-drawtext
    Copyright (C) 2021 IdrisDose

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>