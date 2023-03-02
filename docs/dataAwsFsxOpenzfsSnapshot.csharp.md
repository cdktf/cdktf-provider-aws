# `dataAwsFsxOpenzfsSnapshot` Submodule <a name="`dataAwsFsxOpenzfsSnapshot` Submodule" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsFsxOpenzfsSnapshot <a name="DataAwsFsxOpenzfsSnapshot" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot aws_fsx_openzfs_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsFsxOpenzfsSnapshot(Construct Scope, string Id, DataAwsFsxOpenzfsSnapshotConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig">DataAwsFsxOpenzfsSnapshotConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig">DataAwsFsxOpenzfsSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetMostRecent">ResetMostRecent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetSnapshotIds">ResetSnapshotIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMostRecent` <a name="ResetMostRecent" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetMostRecent"></a>

```csharp
private void ResetMostRecent()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetSnapshotIds` <a name="ResetSnapshotIds" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetSnapshotIds"></a>

```csharp
private void ResetSnapshotIds()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsFsxOpenzfsSnapshot.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsFsxOpenzfsSnapshot.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsFsxOpenzfsSnapshot.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList">DataAwsFsxOpenzfsSnapshotFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.snapshotId">SnapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.volumeId">VolumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.mostRecentInput">MostRecentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.snapshotIdsInput">SnapshotIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.mostRecent">MostRecent</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.snapshotIds">SnapshotIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.filter"></a>

```csharp
public DataAwsFsxOpenzfsSnapshotFilterList Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList">DataAwsFsxOpenzfsSnapshotFilterList</a>

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.snapshotId"></a>

```csharp
public string SnapshotId { get; }
```

- *Type:* string

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.volumeId"></a>

```csharp
public string VolumeId { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MostRecentInput`<sup>Optional</sup> <a name="MostRecentInput" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.mostRecentInput"></a>

```csharp
public object MostRecentInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SnapshotIdsInput`<sup>Optional</sup> <a name="SnapshotIdsInput" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.snapshotIdsInput"></a>

```csharp
public string[] SnapshotIdsInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MostRecent`<sup>Required</sup> <a name="MostRecent" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.mostRecent"></a>

```csharp
public object MostRecent { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SnapshotIds`<sup>Required</sup> <a name="SnapshotIds" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.snapshotIds"></a>

```csharp
public string[] SnapshotIds { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsFsxOpenzfsSnapshotConfig <a name="DataAwsFsxOpenzfsSnapshotConfig" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsFsxOpenzfsSnapshotConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Filter = null,
    string Id = null,
    object MostRecent = null,
    string Name = null,
    string[] SnapshotIds = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#id DataAwsFsxOpenzfsSnapshot#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.mostRecent">MostRecent</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#most_recent DataAwsFsxOpenzfsSnapshot#most_recent}. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#name DataAwsFsxOpenzfsSnapshot#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.snapshotIds">SnapshotIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#snapshot_ids DataAwsFsxOpenzfsSnapshot#snapshot_ids}. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#tags DataAwsFsxOpenzfsSnapshot#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#filter DataAwsFsxOpenzfsSnapshot#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#id DataAwsFsxOpenzfsSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MostRecent`<sup>Optional</sup> <a name="MostRecent" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.mostRecent"></a>

```csharp
public object MostRecent { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#most_recent DataAwsFsxOpenzfsSnapshot#most_recent}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#name DataAwsFsxOpenzfsSnapshot#name}.

---

##### `SnapshotIds`<sup>Optional</sup> <a name="SnapshotIds" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.snapshotIds"></a>

```csharp
public string[] SnapshotIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#snapshot_ids DataAwsFsxOpenzfsSnapshot#snapshot_ids}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#tags DataAwsFsxOpenzfsSnapshot#tags}.

---

### DataAwsFsxOpenzfsSnapshotFilter <a name="DataAwsFsxOpenzfsSnapshotFilter" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsFsxOpenzfsSnapshotFilter {
    string Name,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#name DataAwsFsxOpenzfsSnapshot#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#values DataAwsFsxOpenzfsSnapshot#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#name DataAwsFsxOpenzfsSnapshot#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#values DataAwsFsxOpenzfsSnapshot#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsFsxOpenzfsSnapshotFilterList <a name="DataAwsFsxOpenzfsSnapshotFilterList" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsFsxOpenzfsSnapshotFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.get"></a>

```csharp
private DataAwsFsxOpenzfsSnapshotFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsFsxOpenzfsSnapshotFilterOutputReference <a name="DataAwsFsxOpenzfsSnapshotFilterOutputReference" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsFsxOpenzfsSnapshotFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



