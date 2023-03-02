# `dataAwsConnectInstanceStorageConfig` Submodule <a name="`dataAwsConnectInstanceStorageConfig` Submodule" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsConnectInstanceStorageConfig <a name="DataAwsConnectInstanceStorageConfig" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/connect_instance_storage_config aws_connect_instance_storage_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsConnectInstanceStorageConfig(Construct Scope, string Id, DataAwsConnectInstanceStorageConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigConfig">DataAwsConnectInstanceStorageConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigConfig">DataAwsConnectInstanceStorageConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsConnectInstanceStorageConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsConnectInstanceStorageConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsConnectInstanceStorageConfig.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.property.storageConfig">StorageConfig</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigList">DataAwsConnectInstanceStorageConfigStorageConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.property.associationIdInput">AssociationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.property.associationId">AssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `StorageConfig`<sup>Required</sup> <a name="StorageConfig" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.property.storageConfig"></a>

```csharp
public DataAwsConnectInstanceStorageConfigStorageConfigList StorageConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigList">DataAwsConnectInstanceStorageConfigStorageConfigList</a>

---

##### `AssociationIdInput`<sup>Optional</sup> <a name="AssociationIdInput" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.property.associationIdInput"></a>

```csharp
public string AssociationIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `AssociationId`<sup>Required</sup> <a name="AssociationId" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.property.associationId"></a>

```csharp
public string AssociationId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsConnectInstanceStorageConfigConfig <a name="DataAwsConnectInstanceStorageConfigConfig" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsConnectInstanceStorageConfigConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AssociationId,
    string InstanceId,
    string ResourceType,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigConfig.property.associationId">AssociationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_instance_storage_config#association_id DataAwsConnectInstanceStorageConfig#association_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigConfig.property.instanceId">InstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_instance_storage_config#instance_id DataAwsConnectInstanceStorageConfig#instance_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigConfig.property.resourceType">ResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_instance_storage_config#resource_type DataAwsConnectInstanceStorageConfig#resource_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_instance_storage_config#id DataAwsConnectInstanceStorageConfig#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AssociationId`<sup>Required</sup> <a name="AssociationId" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigConfig.property.associationId"></a>

```csharp
public string AssociationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_instance_storage_config#association_id DataAwsConnectInstanceStorageConfig#association_id}.

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigConfig.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_instance_storage_config#instance_id DataAwsConnectInstanceStorageConfig#instance_id}.

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigConfig.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_instance_storage_config#resource_type DataAwsConnectInstanceStorageConfig#resource_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_instance_storage_config#id DataAwsConnectInstanceStorageConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsConnectInstanceStorageConfigStorageConfig <a name="DataAwsConnectInstanceStorageConfigStorageConfig" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsConnectInstanceStorageConfigStorageConfig {

};
```


### DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig <a name="DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig {

};
```


### DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfig <a name="DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfig" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfig {

};
```


### DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig <a name="DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig {

};
```


### DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig <a name="DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig {

};
```


### DataAwsConnectInstanceStorageConfigStorageConfigS3Config <a name="DataAwsConnectInstanceStorageConfigStorageConfigS3Config" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsConnectInstanceStorageConfigStorageConfigS3Config {

};
```


### DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig <a name="DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigList <a name="DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigList" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigList.get"></a>

```csharp
private DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference <a name="DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.property.firehoseArn">FirehoseArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig">DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FirehoseArn`<sup>Required</sup> <a name="FirehoseArn" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.property.firehoseArn"></a>

```csharp
public string FirehoseArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig">DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig</a>

---


### DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigList <a name="DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigList" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigList.get"></a>

```csharp
private DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference <a name="DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.property.streamArn">StreamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfig">DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StreamArn`<sup>Required</sup> <a name="StreamArn" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.property.streamArn"></a>

```csharp
public string StreamArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfig">DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfig</a>

---


### DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigList <a name="DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigList" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigList.get"></a>

```csharp
private DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference <a name="DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.encryptionType">EncryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig">DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.encryptionType"></a>

```csharp
public string EncryptionType { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig">DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig</a>

---


### DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigList <a name="DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigList" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigList.get"></a>

```csharp
private DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference <a name="DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigList">DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.retentionPeriodHours">RetentionPeriodHours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig">DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionConfig`<sup>Required</sup> <a name="EncryptionConfig" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.encryptionConfig"></a>

```csharp
public DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigList EncryptionConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigList">DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigList</a>

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `RetentionPeriodHours`<sup>Required</sup> <a name="RetentionPeriodHours" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.retentionPeriodHours"></a>

```csharp
public double RetentionPeriodHours { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig">DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig</a>

---


### DataAwsConnectInstanceStorageConfigStorageConfigList <a name="DataAwsConnectInstanceStorageConfigStorageConfigList" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsConnectInstanceStorageConfigStorageConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigList.get"></a>

```csharp
private DataAwsConnectInstanceStorageConfigStorageConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsConnectInstanceStorageConfigStorageConfigOutputReference <a name="DataAwsConnectInstanceStorageConfigStorageConfigOutputReference" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsConnectInstanceStorageConfigStorageConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.property.kinesisFirehoseConfig">KinesisFirehoseConfig</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigList">DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.property.kinesisStreamConfig">KinesisStreamConfig</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigList">DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.property.kinesisVideoStreamConfig">KinesisVideoStreamConfig</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigList">DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.property.s3Config">S3Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigList">DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.property.storageType">StorageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfig">DataAwsConnectInstanceStorageConfigStorageConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KinesisFirehoseConfig`<sup>Required</sup> <a name="KinesisFirehoseConfig" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.property.kinesisFirehoseConfig"></a>

```csharp
public DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigList KinesisFirehoseConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigList">DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigList</a>

---

##### `KinesisStreamConfig`<sup>Required</sup> <a name="KinesisStreamConfig" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.property.kinesisStreamConfig"></a>

```csharp
public DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigList KinesisStreamConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigList">DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigList</a>

---

##### `KinesisVideoStreamConfig`<sup>Required</sup> <a name="KinesisVideoStreamConfig" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.property.kinesisVideoStreamConfig"></a>

```csharp
public DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigList KinesisVideoStreamConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigList">DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigList</a>

---

##### `S3Config`<sup>Required</sup> <a name="S3Config" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.property.s3Config"></a>

```csharp
public DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigList S3Config { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigList">DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigList</a>

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.property.storageType"></a>

```csharp
public string StorageType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsConnectInstanceStorageConfigStorageConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfig">DataAwsConnectInstanceStorageConfigStorageConfig</a>

---


### DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigList <a name="DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigList" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigList.get"></a>

```csharp
private DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference <a name="DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.property.encryptionType">EncryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig">DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.property.encryptionType"></a>

```csharp
public string EncryptionType { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig">DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig</a>

---


### DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigList <a name="DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigList" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigList.get"></a>

```csharp
private DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference <a name="DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.bucketPrefix">BucketPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigList">DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3Config">DataAwsConnectInstanceStorageConfigStorageConfigS3Config</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `BucketPrefix`<sup>Required</sup> <a name="BucketPrefix" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.bucketPrefix"></a>

```csharp
public string BucketPrefix { get; }
```

- *Type:* string

---

##### `EncryptionConfig`<sup>Required</sup> <a name="EncryptionConfig" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.encryptionConfig"></a>

```csharp
public DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigList EncryptionConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigList">DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsConnectInstanceStorageConfigStorageConfigS3Config InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectInstanceStorageConfig.DataAwsConnectInstanceStorageConfigStorageConfigS3Config">DataAwsConnectInstanceStorageConfigStorageConfigS3Config</a>

---



