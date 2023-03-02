# `dataAwsDbClusterSnapshot` Submodule <a name="`dataAwsDbClusterSnapshot` Submodule" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsDbClusterSnapshot <a name="DataAwsDbClusterSnapshot" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot aws_db_cluster_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDbClusterSnapshot(Construct Scope, string Id, DataAwsDbClusterSnapshotConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig">DataAwsDbClusterSnapshotConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig">DataAwsDbClusterSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.resetDbClusterIdentifier">ResetDbClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.resetDbClusterSnapshotIdentifier">ResetDbClusterSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.resetIncludePublic">ResetIncludePublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.resetIncludeShared">ResetIncludeShared</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.resetMostRecent">ResetMostRecent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.resetSnapshotType">ResetSnapshotType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDbClusterIdentifier` <a name="ResetDbClusterIdentifier" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.resetDbClusterIdentifier"></a>

```csharp
private void ResetDbClusterIdentifier()
```

##### `ResetDbClusterSnapshotIdentifier` <a name="ResetDbClusterSnapshotIdentifier" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.resetDbClusterSnapshotIdentifier"></a>

```csharp
private void ResetDbClusterSnapshotIdentifier()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIncludePublic` <a name="ResetIncludePublic" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.resetIncludePublic"></a>

```csharp
private void ResetIncludePublic()
```

##### `ResetIncludeShared` <a name="ResetIncludeShared" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.resetIncludeShared"></a>

```csharp
private void ResetIncludeShared()
```

##### `ResetMostRecent` <a name="ResetMostRecent" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.resetMostRecent"></a>

```csharp
private void ResetMostRecent()
```

##### `ResetSnapshotType` <a name="ResetSnapshotType" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.resetSnapshotType"></a>

```csharp
private void ResetSnapshotType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsDbClusterSnapshot.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsDbClusterSnapshot.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsDbClusterSnapshot.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.allocatedStorage">AllocatedStorage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.availabilityZones">AvailabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.dbClusterSnapshotArn">DbClusterSnapshotArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.engine">Engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.engineVersion">EngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.licenseModel">LicenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.snapshotCreateTime">SnapshotCreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.sourceDbClusterSnapshotArn">SourceDbClusterSnapshotArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.storageEncrypted">StorageEncrypted</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.dbClusterIdentifierInput">DbClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.dbClusterSnapshotIdentifierInput">DbClusterSnapshotIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.includePublicInput">IncludePublicInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.includeSharedInput">IncludeSharedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.mostRecentInput">MostRecentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.snapshotTypeInput">SnapshotTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.dbClusterIdentifier">DbClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.dbClusterSnapshotIdentifier">DbClusterSnapshotIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.includePublic">IncludePublic</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.includeShared">IncludeShared</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.mostRecent">MostRecent</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.snapshotType">SnapshotType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AllocatedStorage`<sup>Required</sup> <a name="AllocatedStorage" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.allocatedStorage"></a>

```csharp
public double AllocatedStorage { get; }
```

- *Type:* double

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.availabilityZones"></a>

```csharp
public string[] AvailabilityZones { get; }
```

- *Type:* string[]

---

##### `DbClusterSnapshotArn`<sup>Required</sup> <a name="DbClusterSnapshotArn" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.dbClusterSnapshotArn"></a>

```csharp
public string DbClusterSnapshotArn { get; }
```

- *Type:* string

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.engine"></a>

```csharp
public string Engine { get; }
```

- *Type:* string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.engineVersion"></a>

```csharp
public string EngineVersion { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.licenseModel"></a>

```csharp
public string LicenseModel { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `SnapshotCreateTime`<sup>Required</sup> <a name="SnapshotCreateTime" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.snapshotCreateTime"></a>

```csharp
public string SnapshotCreateTime { get; }
```

- *Type:* string

---

##### `SourceDbClusterSnapshotArn`<sup>Required</sup> <a name="SourceDbClusterSnapshotArn" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.sourceDbClusterSnapshotArn"></a>

```csharp
public string SourceDbClusterSnapshotArn { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StorageEncrypted`<sup>Required</sup> <a name="StorageEncrypted" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.storageEncrypted"></a>

```csharp
public IResolvable StorageEncrypted { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `DbClusterIdentifierInput`<sup>Optional</sup> <a name="DbClusterIdentifierInput" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.dbClusterIdentifierInput"></a>

```csharp
public string DbClusterIdentifierInput { get; }
```

- *Type:* string

---

##### `DbClusterSnapshotIdentifierInput`<sup>Optional</sup> <a name="DbClusterSnapshotIdentifierInput" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.dbClusterSnapshotIdentifierInput"></a>

```csharp
public string DbClusterSnapshotIdentifierInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludePublicInput`<sup>Optional</sup> <a name="IncludePublicInput" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.includePublicInput"></a>

```csharp
public object IncludePublicInput { get; }
```

- *Type:* object

---

##### `IncludeSharedInput`<sup>Optional</sup> <a name="IncludeSharedInput" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.includeSharedInput"></a>

```csharp
public object IncludeSharedInput { get; }
```

- *Type:* object

---

##### `MostRecentInput`<sup>Optional</sup> <a name="MostRecentInput" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.mostRecentInput"></a>

```csharp
public object MostRecentInput { get; }
```

- *Type:* object

---

##### `SnapshotTypeInput`<sup>Optional</sup> <a name="SnapshotTypeInput" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.snapshotTypeInput"></a>

```csharp
public string SnapshotTypeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DbClusterIdentifier`<sup>Required</sup> <a name="DbClusterIdentifier" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.dbClusterIdentifier"></a>

```csharp
public string DbClusterIdentifier { get; }
```

- *Type:* string

---

##### `DbClusterSnapshotIdentifier`<sup>Required</sup> <a name="DbClusterSnapshotIdentifier" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.dbClusterSnapshotIdentifier"></a>

```csharp
public string DbClusterSnapshotIdentifier { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IncludePublic`<sup>Required</sup> <a name="IncludePublic" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.includePublic"></a>

```csharp
public object IncludePublic { get; }
```

- *Type:* object

---

##### `IncludeShared`<sup>Required</sup> <a name="IncludeShared" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.includeShared"></a>

```csharp
public object IncludeShared { get; }
```

- *Type:* object

---

##### `MostRecent`<sup>Required</sup> <a name="MostRecent" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.mostRecent"></a>

```csharp
public object MostRecent { get; }
```

- *Type:* object

---

##### `SnapshotType`<sup>Required</sup> <a name="SnapshotType" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.snapshotType"></a>

```csharp
public string SnapshotType { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsDbClusterSnapshotConfig <a name="DataAwsDbClusterSnapshotConfig" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDbClusterSnapshotConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DbClusterIdentifier = null,
    string DbClusterSnapshotIdentifier = null,
    string Id = null,
    object IncludePublic = null,
    object IncludeShared = null,
    object MostRecent = null,
    string SnapshotType = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.dbClusterIdentifier">DbClusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#db_cluster_identifier DataAwsDbClusterSnapshot#db_cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.dbClusterSnapshotIdentifier">DbClusterSnapshotIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#db_cluster_snapshot_identifier DataAwsDbClusterSnapshot#db_cluster_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#id DataAwsDbClusterSnapshot#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.includePublic">IncludePublic</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#include_public DataAwsDbClusterSnapshot#include_public}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.includeShared">IncludeShared</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#include_shared DataAwsDbClusterSnapshot#include_shared}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.mostRecent">MostRecent</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#most_recent DataAwsDbClusterSnapshot#most_recent}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.snapshotType">SnapshotType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#snapshot_type DataAwsDbClusterSnapshot#snapshot_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#tags DataAwsDbClusterSnapshot#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DbClusterIdentifier`<sup>Optional</sup> <a name="DbClusterIdentifier" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.dbClusterIdentifier"></a>

```csharp
public string DbClusterIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#db_cluster_identifier DataAwsDbClusterSnapshot#db_cluster_identifier}.

---

##### `DbClusterSnapshotIdentifier`<sup>Optional</sup> <a name="DbClusterSnapshotIdentifier" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.dbClusterSnapshotIdentifier"></a>

```csharp
public string DbClusterSnapshotIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#db_cluster_snapshot_identifier DataAwsDbClusterSnapshot#db_cluster_snapshot_identifier}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#id DataAwsDbClusterSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludePublic`<sup>Optional</sup> <a name="IncludePublic" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.includePublic"></a>

```csharp
public object IncludePublic { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#include_public DataAwsDbClusterSnapshot#include_public}.

---

##### `IncludeShared`<sup>Optional</sup> <a name="IncludeShared" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.includeShared"></a>

```csharp
public object IncludeShared { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#include_shared DataAwsDbClusterSnapshot#include_shared}.

---

##### `MostRecent`<sup>Optional</sup> <a name="MostRecent" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.mostRecent"></a>

```csharp
public object MostRecent { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#most_recent DataAwsDbClusterSnapshot#most_recent}.

---

##### `SnapshotType`<sup>Optional</sup> <a name="SnapshotType" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.snapshotType"></a>

```csharp
public string SnapshotType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#snapshot_type DataAwsDbClusterSnapshot#snapshot_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#tags DataAwsDbClusterSnapshot#tags}.

---



