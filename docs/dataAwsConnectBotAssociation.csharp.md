# `dataAwsConnectBotAssociation` Submodule <a name="`dataAwsConnectBotAssociation` Submodule" id="@cdktf/provider-aws.dataAwsConnectBotAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsConnectBotAssociation <a name="DataAwsConnectBotAssociation" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/connect_bot_association aws_connect_bot_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsConnectBotAssociation(Construct Scope, string Id, DataAwsConnectBotAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig">DataAwsConnectBotAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig">DataAwsConnectBotAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.putLexBot">PutLexBot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutLexBot` <a name="PutLexBot" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.putLexBot"></a>

```csharp
private void PutLexBot(DataAwsConnectBotAssociationLexBot Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.putLexBot.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBot">DataAwsConnectBotAssociationLexBot</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsConnectBotAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsConnectBotAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsConnectBotAssociation.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.lexBot">LexBot</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference">DataAwsConnectBotAssociationLexBotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.lexBotInput">LexBotInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBot">DataAwsConnectBotAssociationLexBot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `LexBot`<sup>Required</sup> <a name="LexBot" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.lexBot"></a>

```csharp
public DataAwsConnectBotAssociationLexBotOutputReference LexBot { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference">DataAwsConnectBotAssociationLexBotOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `LexBotInput`<sup>Optional</sup> <a name="LexBotInput" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.lexBotInput"></a>

```csharp
public DataAwsConnectBotAssociationLexBot LexBotInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBot">DataAwsConnectBotAssociationLexBot</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsConnectBotAssociationConfig <a name="DataAwsConnectBotAssociationConfig" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsConnectBotAssociationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string InstanceId,
    DataAwsConnectBotAssociationLexBot LexBot,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig.property.instanceId">InstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_bot_association#instance_id DataAwsConnectBotAssociation#instance_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig.property.lexBot">LexBot</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBot">DataAwsConnectBotAssociationLexBot</a></code> | lex_bot block. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_bot_association#id DataAwsConnectBotAssociation#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_bot_association#instance_id DataAwsConnectBotAssociation#instance_id}.

---

##### `LexBot`<sup>Required</sup> <a name="LexBot" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig.property.lexBot"></a>

```csharp
public DataAwsConnectBotAssociationLexBot LexBot { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBot">DataAwsConnectBotAssociationLexBot</a>

lex_bot block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_bot_association#lex_bot DataAwsConnectBotAssociation#lex_bot}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_bot_association#id DataAwsConnectBotAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsConnectBotAssociationLexBot <a name="DataAwsConnectBotAssociationLexBot" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBot.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsConnectBotAssociationLexBot {
    string Name,
    string LexRegion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBot.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_bot_association#name DataAwsConnectBotAssociation#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBot.property.lexRegion">LexRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_bot_association#lex_region DataAwsConnectBotAssociation#lex_region}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBot.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_bot_association#name DataAwsConnectBotAssociation#name}.

---

##### `LexRegion`<sup>Optional</sup> <a name="LexRegion" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBot.property.lexRegion"></a>

```csharp
public string LexRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_bot_association#lex_region DataAwsConnectBotAssociation#lex_region}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsConnectBotAssociationLexBotOutputReference <a name="DataAwsConnectBotAssociationLexBotOutputReference" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsConnectBotAssociationLexBotOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.resetLexRegion">ResetLexRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLexRegion` <a name="ResetLexRegion" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.resetLexRegion"></a>

```csharp
private void ResetLexRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.property.lexRegionInput">LexRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.property.lexRegion">LexRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBot">DataAwsConnectBotAssociationLexBot</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LexRegionInput`<sup>Optional</sup> <a name="LexRegionInput" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.property.lexRegionInput"></a>

```csharp
public string LexRegionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `LexRegion`<sup>Required</sup> <a name="LexRegion" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.property.lexRegion"></a>

```csharp
public string LexRegion { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.property.internalValue"></a>

```csharp
public DataAwsConnectBotAssociationLexBot InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBot">DataAwsConnectBotAssociationLexBot</a>

---



