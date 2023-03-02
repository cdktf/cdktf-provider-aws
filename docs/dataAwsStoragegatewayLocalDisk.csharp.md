# `dataAwsStoragegatewayLocalDisk` Submodule <a name="`dataAwsStoragegatewayLocalDisk` Submodule" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsStoragegatewayLocalDisk <a name="DataAwsStoragegatewayLocalDisk" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk aws_storagegateway_local_disk}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsStoragegatewayLocalDisk(Construct Scope, string Id, DataAwsStoragegatewayLocalDiskConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig">DataAwsStoragegatewayLocalDiskConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig">DataAwsStoragegatewayLocalDiskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.resetDiskNode">ResetDiskNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.resetDiskPath">ResetDiskPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDiskNode` <a name="ResetDiskNode" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.resetDiskNode"></a>

```csharp
private void ResetDiskNode()
```

##### `ResetDiskPath` <a name="ResetDiskPath" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.resetDiskPath"></a>

```csharp
private void ResetDiskPath()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsStoragegatewayLocalDisk.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsStoragegatewayLocalDisk.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsStoragegatewayLocalDisk.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.diskId">DiskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.diskNodeInput">DiskNodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.diskPathInput">DiskPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.gatewayArnInput">GatewayArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.diskNode">DiskNode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.diskPath">DiskPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.gatewayArn">GatewayArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DiskId`<sup>Required</sup> <a name="DiskId" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.diskId"></a>

```csharp
public string DiskId { get; }
```

- *Type:* string

---

##### `DiskNodeInput`<sup>Optional</sup> <a name="DiskNodeInput" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.diskNodeInput"></a>

```csharp
public string DiskNodeInput { get; }
```

- *Type:* string

---

##### `DiskPathInput`<sup>Optional</sup> <a name="DiskPathInput" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.diskPathInput"></a>

```csharp
public string DiskPathInput { get; }
```

- *Type:* string

---

##### `GatewayArnInput`<sup>Optional</sup> <a name="GatewayArnInput" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.gatewayArnInput"></a>

```csharp
public string GatewayArnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `DiskNode`<sup>Required</sup> <a name="DiskNode" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.diskNode"></a>

```csharp
public string DiskNode { get; }
```

- *Type:* string

---

##### `DiskPath`<sup>Required</sup> <a name="DiskPath" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.diskPath"></a>

```csharp
public string DiskPath { get; }
```

- *Type:* string

---

##### `GatewayArn`<sup>Required</sup> <a name="GatewayArn" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.gatewayArn"></a>

```csharp
public string GatewayArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsStoragegatewayLocalDiskConfig <a name="DataAwsStoragegatewayLocalDiskConfig" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsStoragegatewayLocalDiskConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string GatewayArn,
    string DiskNode = null,
    string DiskPath = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.gatewayArn">GatewayArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk#gateway_arn DataAwsStoragegatewayLocalDisk#gateway_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.diskNode">DiskNode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk#disk_node DataAwsStoragegatewayLocalDisk#disk_node}. |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.diskPath">DiskPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk#disk_path DataAwsStoragegatewayLocalDisk#disk_path}. |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk#id DataAwsStoragegatewayLocalDisk#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `GatewayArn`<sup>Required</sup> <a name="GatewayArn" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.gatewayArn"></a>

```csharp
public string GatewayArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk#gateway_arn DataAwsStoragegatewayLocalDisk#gateway_arn}.

---

##### `DiskNode`<sup>Optional</sup> <a name="DiskNode" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.diskNode"></a>

```csharp
public string DiskNode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk#disk_node DataAwsStoragegatewayLocalDisk#disk_node}.

---

##### `DiskPath`<sup>Optional</sup> <a name="DiskPath" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.diskPath"></a>

```csharp
public string DiskPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk#disk_path DataAwsStoragegatewayLocalDisk#disk_path}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk#id DataAwsStoragegatewayLocalDisk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



