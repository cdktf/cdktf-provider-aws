# `wafByteMatchSet` Submodule <a name="`wafByteMatchSet` Submodule" id="@cdktf/provider-aws.wafByteMatchSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafByteMatchSet <a name="WafByteMatchSet" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set aws_waf_byte_match_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WafByteMatchSet(Construct Scope, string Id, WafByteMatchSetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetConfig">WafByteMatchSetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetConfig">WafByteMatchSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.putByteMatchTuples">PutByteMatchTuples</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.resetByteMatchTuples">ResetByteMatchTuples</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutByteMatchTuples` <a name="PutByteMatchTuples" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.putByteMatchTuples"></a>

```csharp
private void PutByteMatchTuples(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.putByteMatchTuples.parameter.value"></a>

- *Type:* object

---

##### `ResetByteMatchTuples` <a name="ResetByteMatchTuples" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.resetByteMatchTuples"></a>

```csharp
private void ResetByteMatchTuples()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

WafByteMatchSet.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

WafByteMatchSet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

WafByteMatchSet.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.byteMatchTuples">ByteMatchTuples</a></code> | <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList">WafByteMatchSetByteMatchTuplesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.byteMatchTuplesInput">ByteMatchTuplesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ByteMatchTuples`<sup>Required</sup> <a name="ByteMatchTuples" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.byteMatchTuples"></a>

```csharp
public WafByteMatchSetByteMatchTuplesList ByteMatchTuples { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList">WafByteMatchSetByteMatchTuplesList</a>

---

##### `ByteMatchTuplesInput`<sup>Optional</sup> <a name="ByteMatchTuplesInput" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.byteMatchTuplesInput"></a>

```csharp
public object ByteMatchTuplesInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WafByteMatchSetByteMatchTuples <a name="WafByteMatchSetByteMatchTuples" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuples"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuples.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WafByteMatchSetByteMatchTuples {
    WafByteMatchSetByteMatchTuplesFieldToMatch FieldToMatch,
    string PositionalConstraint,
    string TextTransformation,
    string TargetString = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuples.property.fieldToMatch">FieldToMatch</a></code> | <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatch">WafByteMatchSetByteMatchTuplesFieldToMatch</a></code> | field_to_match block. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuples.property.positionalConstraint">PositionalConstraint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set#positional_constraint WafByteMatchSet#positional_constraint}. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuples.property.textTransformation">TextTransformation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set#text_transformation WafByteMatchSet#text_transformation}. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuples.property.targetString">TargetString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set#target_string WafByteMatchSet#target_string}. |

---

##### `FieldToMatch`<sup>Required</sup> <a name="FieldToMatch" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuples.property.fieldToMatch"></a>

```csharp
public WafByteMatchSetByteMatchTuplesFieldToMatch FieldToMatch { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatch">WafByteMatchSetByteMatchTuplesFieldToMatch</a>

field_to_match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set#field_to_match WafByteMatchSet#field_to_match}

---

##### `PositionalConstraint`<sup>Required</sup> <a name="PositionalConstraint" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuples.property.positionalConstraint"></a>

```csharp
public string PositionalConstraint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set#positional_constraint WafByteMatchSet#positional_constraint}.

---

##### `TextTransformation`<sup>Required</sup> <a name="TextTransformation" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuples.property.textTransformation"></a>

```csharp
public string TextTransformation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set#text_transformation WafByteMatchSet#text_transformation}.

---

##### `TargetString`<sup>Optional</sup> <a name="TargetString" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuples.property.targetString"></a>

```csharp
public string TargetString { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set#target_string WafByteMatchSet#target_string}.

---

### WafByteMatchSetByteMatchTuplesFieldToMatch <a name="WafByteMatchSetByteMatchTuplesFieldToMatch" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WafByteMatchSetByteMatchTuplesFieldToMatch {
    string Type,
    string Data = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatch.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set#type WafByteMatchSet#type}. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatch.property.data">Data</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set#data WafByteMatchSet#data}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatch.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set#type WafByteMatchSet#type}.

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatch.property.data"></a>

```csharp
public string Data { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set#data WafByteMatchSet#data}.

---

### WafByteMatchSetConfig <a name="WafByteMatchSetConfig" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WafByteMatchSetConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    object ByteMatchTuples = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set#name WafByteMatchSet#name}. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetConfig.property.byteMatchTuples">ByteMatchTuples</a></code> | <code>object</code> | byte_match_tuples block. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set#id WafByteMatchSet#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set#name WafByteMatchSet#name}.

---

##### `ByteMatchTuples`<sup>Optional</sup> <a name="ByteMatchTuples" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetConfig.property.byteMatchTuples"></a>

```csharp
public object ByteMatchTuples { get; set; }
```

- *Type:* object

byte_match_tuples block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set#byte_match_tuples WafByteMatchSet#byte_match_tuples}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set#id WafByteMatchSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference <a name="WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.resetData">ResetData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetData` <a name="ResetData" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.resetData"></a>

```csharp
private void ResetData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.dataInput">DataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.data">Data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatch">WafByteMatchSetByteMatchTuplesFieldToMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.dataInput"></a>

```csharp
public string DataInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.data"></a>

```csharp
public string Data { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference.property.internalValue"></a>

```csharp
public WafByteMatchSetByteMatchTuplesFieldToMatch InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatch">WafByteMatchSetByteMatchTuplesFieldToMatch</a>

---


### WafByteMatchSetByteMatchTuplesList <a name="WafByteMatchSetByteMatchTuplesList" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WafByteMatchSetByteMatchTuplesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList.get"></a>

```csharp
private WafByteMatchSetByteMatchTuplesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WafByteMatchSetByteMatchTuplesOutputReference <a name="WafByteMatchSetByteMatchTuplesOutputReference" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WafByteMatchSetByteMatchTuplesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.putFieldToMatch">PutFieldToMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.resetTargetString">ResetTargetString</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFieldToMatch` <a name="PutFieldToMatch" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.putFieldToMatch"></a>

```csharp
private void PutFieldToMatch(WafByteMatchSetByteMatchTuplesFieldToMatch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.putFieldToMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatch">WafByteMatchSetByteMatchTuplesFieldToMatch</a>

---

##### `ResetTargetString` <a name="ResetTargetString" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.resetTargetString"></a>

```csharp
private void ResetTargetString()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.property.fieldToMatch">FieldToMatch</a></code> | <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference">WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.property.fieldToMatchInput">FieldToMatchInput</a></code> | <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatch">WafByteMatchSetByteMatchTuplesFieldToMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.property.positionalConstraintInput">PositionalConstraintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.property.targetStringInput">TargetStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.property.textTransformationInput">TextTransformationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.property.positionalConstraint">PositionalConstraint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.property.targetString">TargetString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.property.textTransformation">TextTransformation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldToMatch`<sup>Required</sup> <a name="FieldToMatch" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.property.fieldToMatch"></a>

```csharp
public WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference FieldToMatch { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference">WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference</a>

---

##### `FieldToMatchInput`<sup>Optional</sup> <a name="FieldToMatchInput" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.property.fieldToMatchInput"></a>

```csharp
public WafByteMatchSetByteMatchTuplesFieldToMatch FieldToMatchInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesFieldToMatch">WafByteMatchSetByteMatchTuplesFieldToMatch</a>

---

##### `PositionalConstraintInput`<sup>Optional</sup> <a name="PositionalConstraintInput" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.property.positionalConstraintInput"></a>

```csharp
public string PositionalConstraintInput { get; }
```

- *Type:* string

---

##### `TargetStringInput`<sup>Optional</sup> <a name="TargetStringInput" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.property.targetStringInput"></a>

```csharp
public string TargetStringInput { get; }
```

- *Type:* string

---

##### `TextTransformationInput`<sup>Optional</sup> <a name="TextTransformationInput" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.property.textTransformationInput"></a>

```csharp
public string TextTransformationInput { get; }
```

- *Type:* string

---

##### `PositionalConstraint`<sup>Required</sup> <a name="PositionalConstraint" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.property.positionalConstraint"></a>

```csharp
public string PositionalConstraint { get; }
```

- *Type:* string

---

##### `TargetString`<sup>Required</sup> <a name="TargetString" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.property.targetString"></a>

```csharp
public string TargetString { get; }
```

- *Type:* string

---

##### `TextTransformation`<sup>Required</sup> <a name="TextTransformation" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.property.textTransformation"></a>

```csharp
public string TextTransformation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafByteMatchSet.WafByteMatchSetByteMatchTuplesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



