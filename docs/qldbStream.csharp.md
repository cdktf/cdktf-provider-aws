# `qldbStream` Submodule <a name="`qldbStream` Submodule" id="@cdktf/provider-aws.qldbStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QldbStream <a name="QldbStream" id="@cdktf/provider-aws.qldbStream.QldbStream"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/qldb_stream aws_qldb_stream}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.qldbStream.QldbStream.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QldbStream(Construct Scope, string Id, QldbStreamConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamConfig">QldbStreamConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.qldbStream.QldbStream.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.qldbStream.QldbStream.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.qldbStream.QldbStream.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.qldbStream.QldbStreamConfig">QldbStreamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.putKinesisConfiguration">PutKinesisConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.resetExclusiveEndTime">ResetExclusiveEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.qldbStream.QldbStream.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.qldbStream.QldbStream.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.qldbStream.QldbStream.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.qldbStream.QldbStream.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.qldbStream.QldbStream.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.qldbStream.QldbStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.qldbStream.QldbStream.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.qldbStream.QldbStream.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.qldbStream.QldbStream.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.qldbStream.QldbStream.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.qldbStream.QldbStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.qldbStream.QldbStream.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.qldbStream.QldbStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.qldbStream.QldbStream.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.qldbStream.QldbStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.qldbStream.QldbStream.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.qldbStream.QldbStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.qldbStream.QldbStream.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.qldbStream.QldbStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.qldbStream.QldbStream.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.qldbStream.QldbStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.qldbStream.QldbStream.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.qldbStream.QldbStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.qldbStream.QldbStream.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.qldbStream.QldbStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.qldbStream.QldbStream.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.qldbStream.QldbStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.qldbStream.QldbStream.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.qldbStream.QldbStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutKinesisConfiguration` <a name="PutKinesisConfiguration" id="@cdktf/provider-aws.qldbStream.QldbStream.putKinesisConfiguration"></a>

```csharp
private void PutKinesisConfiguration(QldbStreamKinesisConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.qldbStream.QldbStream.putKinesisConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfiguration">QldbStreamKinesisConfiguration</a>

---

##### `ResetExclusiveEndTime` <a name="ResetExclusiveEndTime" id="@cdktf/provider-aws.qldbStream.QldbStream.resetExclusiveEndTime"></a>

```csharp
private void ResetExclusiveEndTime()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.qldbStream.QldbStream.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.qldbStream.QldbStream.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.qldbStream.QldbStream.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.qldbStream.QldbStream.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

QldbStream.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.qldbStream.QldbStream.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.qldbStream.QldbStream.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

QldbStream.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.qldbStream.QldbStream.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.qldbStream.QldbStream.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

QldbStream.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.qldbStream.QldbStream.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.kinesisConfiguration">KinesisConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference">QldbStreamKinesisConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.exclusiveEndTimeInput">ExclusiveEndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.inclusiveStartTimeInput">InclusiveStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.kinesisConfigurationInput">KinesisConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfiguration">QldbStreamKinesisConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.ledgerNameInput">LedgerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.streamNameInput">StreamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.exclusiveEndTime">ExclusiveEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.inclusiveStartTime">InclusiveStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.ledgerName">LedgerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.streamName">StreamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.qldbStream.QldbStream.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.qldbStream.QldbStream.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.qldbStream.QldbStream.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.qldbStream.QldbStream.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.qldbStream.QldbStream.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.qldbStream.QldbStream.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.qldbStream.QldbStream.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.qldbStream.QldbStream.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.qldbStream.QldbStream.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.qldbStream.QldbStream.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.qldbStream.QldbStream.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.qldbStream.QldbStream.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.qldbStream.QldbStream.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.qldbStream.QldbStream.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.qldbStream.QldbStream.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `KinesisConfiguration`<sup>Required</sup> <a name="KinesisConfiguration" id="@cdktf/provider-aws.qldbStream.QldbStream.property.kinesisConfiguration"></a>

```csharp
public QldbStreamKinesisConfigurationOutputReference KinesisConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference">QldbStreamKinesisConfigurationOutputReference</a>

---

##### `ExclusiveEndTimeInput`<sup>Optional</sup> <a name="ExclusiveEndTimeInput" id="@cdktf/provider-aws.qldbStream.QldbStream.property.exclusiveEndTimeInput"></a>

```csharp
public string ExclusiveEndTimeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.qldbStream.QldbStream.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InclusiveStartTimeInput`<sup>Optional</sup> <a name="InclusiveStartTimeInput" id="@cdktf/provider-aws.qldbStream.QldbStream.property.inclusiveStartTimeInput"></a>

```csharp
public string InclusiveStartTimeInput { get; }
```

- *Type:* string

---

##### `KinesisConfigurationInput`<sup>Optional</sup> <a name="KinesisConfigurationInput" id="@cdktf/provider-aws.qldbStream.QldbStream.property.kinesisConfigurationInput"></a>

```csharp
public QldbStreamKinesisConfiguration KinesisConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfiguration">QldbStreamKinesisConfiguration</a>

---

##### `LedgerNameInput`<sup>Optional</sup> <a name="LedgerNameInput" id="@cdktf/provider-aws.qldbStream.QldbStream.property.ledgerNameInput"></a>

```csharp
public string LedgerNameInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.qldbStream.QldbStream.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `StreamNameInput`<sup>Optional</sup> <a name="StreamNameInput" id="@cdktf/provider-aws.qldbStream.QldbStream.property.streamNameInput"></a>

```csharp
public string StreamNameInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.qldbStream.QldbStream.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.qldbStream.QldbStream.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ExclusiveEndTime`<sup>Required</sup> <a name="ExclusiveEndTime" id="@cdktf/provider-aws.qldbStream.QldbStream.property.exclusiveEndTime"></a>

```csharp
public string ExclusiveEndTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.qldbStream.QldbStream.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InclusiveStartTime`<sup>Required</sup> <a name="InclusiveStartTime" id="@cdktf/provider-aws.qldbStream.QldbStream.property.inclusiveStartTime"></a>

```csharp
public string InclusiveStartTime { get; }
```

- *Type:* string

---

##### `LedgerName`<sup>Required</sup> <a name="LedgerName" id="@cdktf/provider-aws.qldbStream.QldbStream.property.ledgerName"></a>

```csharp
public string LedgerName { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.qldbStream.QldbStream.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="@cdktf/provider-aws.qldbStream.QldbStream.property.streamName"></a>

```csharp
public string StreamName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.qldbStream.QldbStream.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.qldbStream.QldbStream.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStream.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.qldbStream.QldbStream.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QldbStreamConfig <a name="QldbStreamConfig" id="@cdktf/provider-aws.qldbStream.QldbStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.qldbStream.QldbStreamConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QldbStreamConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string InclusiveStartTime,
    QldbStreamKinesisConfiguration KinesisConfiguration,
    string LedgerName,
    string RoleArn,
    string StreamName,
    string ExclusiveEndTime = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.inclusiveStartTime">InclusiveStartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/qldb_stream#inclusive_start_time QldbStream#inclusive_start_time}. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.kinesisConfiguration">KinesisConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfiguration">QldbStreamKinesisConfiguration</a></code> | kinesis_configuration block. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.ledgerName">LedgerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/qldb_stream#ledger_name QldbStream#ledger_name}. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/qldb_stream#role_arn QldbStream#role_arn}. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.streamName">StreamName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/qldb_stream#stream_name QldbStream#stream_name}. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.exclusiveEndTime">ExclusiveEndTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/qldb_stream#exclusive_end_time QldbStream#exclusive_end_time}. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/qldb_stream#id QldbStream#id}. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/qldb_stream#tags QldbStream#tags}. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/qldb_stream#tags_all QldbStream#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `InclusiveStartTime`<sup>Required</sup> <a name="InclusiveStartTime" id="@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.inclusiveStartTime"></a>

```csharp
public string InclusiveStartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/qldb_stream#inclusive_start_time QldbStream#inclusive_start_time}.

---

##### `KinesisConfiguration`<sup>Required</sup> <a name="KinesisConfiguration" id="@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.kinesisConfiguration"></a>

```csharp
public QldbStreamKinesisConfiguration KinesisConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfiguration">QldbStreamKinesisConfiguration</a>

kinesis_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/qldb_stream#kinesis_configuration QldbStream#kinesis_configuration}

---

##### `LedgerName`<sup>Required</sup> <a name="LedgerName" id="@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.ledgerName"></a>

```csharp
public string LedgerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/qldb_stream#ledger_name QldbStream#ledger_name}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/qldb_stream#role_arn QldbStream#role_arn}.

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.streamName"></a>

```csharp
public string StreamName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/qldb_stream#stream_name QldbStream#stream_name}.

---

##### `ExclusiveEndTime`<sup>Optional</sup> <a name="ExclusiveEndTime" id="@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.exclusiveEndTime"></a>

```csharp
public string ExclusiveEndTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/qldb_stream#exclusive_end_time QldbStream#exclusive_end_time}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/qldb_stream#id QldbStream#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/qldb_stream#tags QldbStream#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.qldbStream.QldbStreamConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/qldb_stream#tags_all QldbStream#tags_all}.

---

### QldbStreamKinesisConfiguration <a name="QldbStreamKinesisConfiguration" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QldbStreamKinesisConfiguration {
    string StreamArn,
    object AggregationEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfiguration.property.streamArn">StreamArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/qldb_stream#stream_arn QldbStream#stream_arn}. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfiguration.property.aggregationEnabled">AggregationEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/qldb_stream#aggregation_enabled QldbStream#aggregation_enabled}. |

---

##### `StreamArn`<sup>Required</sup> <a name="StreamArn" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfiguration.property.streamArn"></a>

```csharp
public string StreamArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/qldb_stream#stream_arn QldbStream#stream_arn}.

---

##### `AggregationEnabled`<sup>Optional</sup> <a name="AggregationEnabled" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfiguration.property.aggregationEnabled"></a>

```csharp
public object AggregationEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/qldb_stream#aggregation_enabled QldbStream#aggregation_enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### QldbStreamKinesisConfigurationOutputReference <a name="QldbStreamKinesisConfigurationOutputReference" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QldbStreamKinesisConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.resetAggregationEnabled">ResetAggregationEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAggregationEnabled` <a name="ResetAggregationEnabled" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.resetAggregationEnabled"></a>

```csharp
private void ResetAggregationEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.property.aggregationEnabledInput">AggregationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.property.streamArnInput">StreamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.property.aggregationEnabled">AggregationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.property.streamArn">StreamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfiguration">QldbStreamKinesisConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AggregationEnabledInput`<sup>Optional</sup> <a name="AggregationEnabledInput" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.property.aggregationEnabledInput"></a>

```csharp
public object AggregationEnabledInput { get; }
```

- *Type:* object

---

##### `StreamArnInput`<sup>Optional</sup> <a name="StreamArnInput" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.property.streamArnInput"></a>

```csharp
public string StreamArnInput { get; }
```

- *Type:* string

---

##### `AggregationEnabled`<sup>Required</sup> <a name="AggregationEnabled" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.property.aggregationEnabled"></a>

```csharp
public object AggregationEnabled { get; }
```

- *Type:* object

---

##### `StreamArn`<sup>Required</sup> <a name="StreamArn" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.property.streamArn"></a>

```csharp
public string StreamArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfigurationOutputReference.property.internalValue"></a>

```csharp
public QldbStreamKinesisConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.qldbStream.QldbStreamKinesisConfiguration">QldbStreamKinesisConfiguration</a>

---



