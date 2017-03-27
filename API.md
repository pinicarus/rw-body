# Functions

<dl>
<dt><a href="#Body">Body(name, type)</a> ⇒ <code>function</code></dt>
<dd><p>A factory for a ravenwood middleware to read bodies.</p>
</dd>
<dt><a href="#enter">enter(request)</a> ⇒ <code>Promise.&lt;ravenwood.DI.Value&gt;</code></dt>
<dd><p>Reads the body of an incoming request.</p>
</dd>
</dl>

<a name="Body"></a>

# Body(name, type) ⇒ <code>function</code>
A factory for a ravenwood middleware to read bodies.

**Kind**: global function  
**Returns**: <code>function</code> - - A ravenwood middleware class to read bodies.  
**Throws**:

- <code>TypeError</code> - Whenever the name is not a string.
- <code>TypeError</code> - Whenever the type is not a string.


| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | The name to register to body on the DI container with. |
| type | <code>String</code> | The middleware type in the target pipeline. |

<a name="enter"></a>

# enter(request) ⇒ <code>Promise.&lt;ravenwood.DI.Value&gt;</code>
Reads the body of an incoming request.

**Kind**: global function  
**Returns**: <code>Promise.&lt;ravenwood.DI.Value&gt;</code> - - The body wrapped for DI registering under the given name.  

| Param | Type | Description |
| --- | --- | --- |
| request | <code>ravenwood.Request</code> | The incoming request. |

