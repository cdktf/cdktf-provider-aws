# `ebsSnapshotImport` Submodule <a name="`ebsSnapshotImport` Submodule" id="@cdktf/provider-aws.ebsSnapshotImport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EbsSnapshotImport <a name="EbsSnapshotImport" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import aws_ebs_snapshot_import}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EbsSnapshotImport(Construct Scope, string Id, EbsSnapshotImportConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig">EbsSnapshotImportConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig">EbsSnapshotImportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putClientData">PutClientData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putDiskContainer">PutDiskContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetClientData">ResetClientData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetEncrypted">ResetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetPermanentRestore">ResetPermanentRestore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetRoleName">ResetRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetStorageTier">ResetStorageTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetTemporaryRestoreDays">ResetTemporaryRestoreDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutClientData` <a name="PutClientData" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putClientData"></a>

```csharp
private void PutClientData(EbsSnapshotImportClientData Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putClientData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData">EbsSnapshotImportClientData</a>

---

##### `PutDiskContainer` <a name="PutDiskContainer" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putDiskContainer"></a>

```csharp
private void PutDiskContainer(EbsSnapshotImportDiskContainer Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putDiskContainer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer">EbsSnapshotImportDiskContainer</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putTimeouts"></a>

```csharp
private void PutTimeouts(EbsSnapshotImportTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts">EbsSnapshotImportTimeouts</a>

---

##### `ResetClientData` <a name="ResetClientData" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetClientData"></a>

```csharp
private void ResetClientData()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetEncrypted"></a>

```csharp
private void ResetEncrypted()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetPermanentRestore` <a name="ResetPermanentRestore" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetPermanentRestore"></a>

```csharp
private void ResetPermanentRestore()
```

##### `ResetRoleName` <a name="ResetRoleName" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetRoleName"></a>

```csharp
private void ResetRoleName()
```

##### `ResetStorageTier` <a name="ResetStorageTier" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetStorageTier"></a>

```csharp
private void ResetStorageTier()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTemporaryRestoreDays` <a name="ResetTemporaryRestoreDays" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetTemporaryRestoreDays"></a>

```csharp
private void ResetTemporaryRestoreDays()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EbsSnapshotImport.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EbsSnapshotImport.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EbsSnapshotImport.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.clientData">ClientData</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference">EbsSnapshotImportClientDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.dataEncryptionKeyId">DataEncryptionKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.diskContainer">DiskContainer</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference">EbsSnapshotImportDiskContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.outpostArn">OutpostArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.ownerAlias">OwnerAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference">EbsSnapshotImportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.volumeId">VolumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.volumeSize">VolumeSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.clientDataInput">ClientDataInput</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData">EbsSnapshotImportClientData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.diskContainerInput">DiskContainerInput</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer">EbsSnapshotImportDiskContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.encryptedInput">EncryptedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.permanentRestoreInput">PermanentRestoreInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.roleNameInput">RoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.storageTierInput">StorageTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.temporaryRestoreDaysInput">TemporaryRestoreDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.encrypted">Encrypted</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.permanentRestore">PermanentRestore</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.roleName">RoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.storageTier">StorageTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.temporaryRestoreDays">TemporaryRestoreDays</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ClientData`<sup>Required</sup> <a name="ClientData" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.clientData"></a>

```csharp
public EbsSnapshotImportClientDataOutputReference ClientData { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference">EbsSnapshotImportClientDataOutputReference</a>

---

##### `DataEncryptionKeyId`<sup>Required</sup> <a name="DataEncryptionKeyId" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.dataEncryptionKeyId"></a>

```csharp
public string DataEncryptionKeyId { get; }
```

- *Type:* string

---

##### `DiskContainer`<sup>Required</sup> <a name="DiskContainer" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.diskContainer"></a>

```csharp
public EbsSnapshotImportDiskContainerOutputReference DiskContainer { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference">EbsSnapshotImportDiskContainerOutputReference</a>

---

##### `OutpostArn`<sup>Required</sup> <a name="OutpostArn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.outpostArn"></a>

```csharp
public string OutpostArn { get; }
```

- *Type:* string

---

##### `OwnerAlias`<sup>Required</sup> <a name="OwnerAlias" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.ownerAlias"></a>

```csharp
public string OwnerAlias { get; }
```

- *Type:* string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.timeouts"></a>

```csharp
public EbsSnapshotImportTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference">EbsSnapshotImportTimeoutsOutputReference</a>

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.volumeId"></a>

```csharp
public string VolumeId { get; }
```

- *Type:* string

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.volumeSize"></a>

```csharp
public double VolumeSize { get; }
```

- *Type:* double

---

##### `ClientDataInput`<sup>Optional</sup> <a name="ClientDataInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.clientDataInput"></a>

```csharp
public EbsSnapshotImportClientData ClientDataInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData">EbsSnapshotImportClientData</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DiskContainerInput`<sup>Optional</sup> <a name="DiskContainerInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.diskContainerInput"></a>

```csharp
public EbsSnapshotImportDiskContainer DiskContainerInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer">EbsSnapshotImportDiskContainer</a>

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.encryptedInput"></a>

```csharp
public object EncryptedInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `PermanentRestoreInput`<sup>Optional</sup> <a name="PermanentRestoreInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.permanentRestoreInput"></a>

```csharp
public object PermanentRestoreInput { get; }
```

- *Type:* object

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.roleNameInput"></a>

```csharp
public string RoleNameInput { get; }
```

- *Type:* string

---

##### `StorageTierInput`<sup>Optional</sup> <a name="StorageTierInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.storageTierInput"></a>

```csharp
public string StorageTierInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TemporaryRestoreDaysInput`<sup>Optional</sup> <a name="TemporaryRestoreDaysInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.temporaryRestoreDaysInput"></a>

```csharp
public double TemporaryRestoreDaysInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.encrypted"></a>

```csharp
public object Encrypted { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `PermanentRestore`<sup>Required</sup> <a name="PermanentRestore" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.permanentRestore"></a>

```csharp
public object PermanentRestore { get; }
```

- *Type:* object

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.roleName"></a>

```csharp
public string RoleName { get; }
```

- *Type:* string

---

##### `StorageTier`<sup>Required</sup> <a name="StorageTier" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.storageTier"></a>

```csharp
public string StorageTier { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TemporaryRestoreDays`<sup>Required</sup> <a name="TemporaryRestoreDays" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.temporaryRestoreDays"></a>

```csharp
public double TemporaryRestoreDays { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EbsSnapshotImportClientData <a name="EbsSnapshotImportClientData" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EbsSnapshotImportClientData {
    string Comment = null,
    string UploadEnd = null,
    double UploadSize = null,
    string UploadStart = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#comment EbsSnapshotImport#comment}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData.property.uploadEnd">UploadEnd</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#upload_end EbsSnapshotImport#upload_end}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData.property.uploadSize">UploadSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#upload_size EbsSnapshotImport#upload_size}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData.property.uploadStart">UploadStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#upload_start EbsSnapshotImport#upload_start}. |

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#comment EbsSnapshotImport#comment}.

---

##### `UploadEnd`<sup>Optional</sup> <a name="UploadEnd" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData.property.uploadEnd"></a>

```csharp
public string UploadEnd { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#upload_end EbsSnapshotImport#upload_end}.

---

##### `UploadSize`<sup>Optional</sup> <a name="UploadSize" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData.property.uploadSize"></a>

```csharp
public double UploadSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#upload_size EbsSnapshotImport#upload_size}.

---

##### `UploadStart`<sup>Optional</sup> <a name="UploadStart" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData.property.uploadStart"></a>

```csharp
public string UploadStart { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#upload_start EbsSnapshotImport#upload_start}.

---

### EbsSnapshotImportConfig <a name="EbsSnapshotImportConfig" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EbsSnapshotImportConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    EbsSnapshotImportDiskContainer DiskContainer,
    EbsSnapshotImportClientData ClientData = null,
    string Description = null,
    object Encrypted = null,
    string Id = null,
    string KmsKeyId = null,
    object PermanentRestore = null,
    string RoleName = null,
    string StorageTier = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    double TemporaryRestoreDays = null,
    EbsSnapshotImportTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.diskContainer">DiskContainer</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer">EbsSnapshotImportDiskContainer</a></code> | disk_container block. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.clientData">ClientData</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData">EbsSnapshotImportClientData</a></code> | client_data block. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#description EbsSnapshotImport#description}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.encrypted">Encrypted</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#encrypted EbsSnapshotImport#encrypted}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#id EbsSnapshotImport#id}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#kms_key_id EbsSnapshotImport#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.permanentRestore">PermanentRestore</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#permanent_restore EbsSnapshotImport#permanent_restore}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.roleName">RoleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#role_name EbsSnapshotImport#role_name}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.storageTier">StorageTier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#storage_tier EbsSnapshotImport#storage_tier}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#tags EbsSnapshotImport#tags}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#tags_all EbsSnapshotImport#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.temporaryRestoreDays">TemporaryRestoreDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#temporary_restore_days EbsSnapshotImport#temporary_restore_days}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts">EbsSnapshotImportTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DiskContainer`<sup>Required</sup> <a name="DiskContainer" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.diskContainer"></a>

```csharp
public EbsSnapshotImportDiskContainer DiskContainer { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer">EbsSnapshotImportDiskContainer</a>

disk_container block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#disk_container EbsSnapshotImport#disk_container}

---

##### `ClientData`<sup>Optional</sup> <a name="ClientData" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.clientData"></a>

```csharp
public EbsSnapshotImportClientData ClientData { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData">EbsSnapshotImportClientData</a>

client_data block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#client_data EbsSnapshotImport#client_data}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#description EbsSnapshotImport#description}.

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.encrypted"></a>

```csharp
public object Encrypted { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#encrypted EbsSnapshotImport#encrypted}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#id EbsSnapshotImport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#kms_key_id EbsSnapshotImport#kms_key_id}.

---

##### `PermanentRestore`<sup>Optional</sup> <a name="PermanentRestore" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.permanentRestore"></a>

```csharp
public object PermanentRestore { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#permanent_restore EbsSnapshotImport#permanent_restore}.

---

##### `RoleName`<sup>Optional</sup> <a name="RoleName" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.roleName"></a>

```csharp
public string RoleName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#role_name EbsSnapshotImport#role_name}.

---

##### `StorageTier`<sup>Optional</sup> <a name="StorageTier" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.storageTier"></a>

```csharp
public string StorageTier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#storage_tier EbsSnapshotImport#storage_tier}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#tags EbsSnapshotImport#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#tags_all EbsSnapshotImport#tags_all}.

---

##### `TemporaryRestoreDays`<sup>Optional</sup> <a name="TemporaryRestoreDays" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.temporaryRestoreDays"></a>

```csharp
public double TemporaryRestoreDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#temporary_restore_days EbsSnapshotImport#temporary_restore_days}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.timeouts"></a>

```csharp
public EbsSnapshotImportTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts">EbsSnapshotImportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#timeouts EbsSnapshotImport#timeouts}

---

### EbsSnapshotImportDiskContainer <a name="EbsSnapshotImportDiskContainer" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EbsSnapshotImportDiskContainer {
    string Format,
    string Description = null,
    string Url = null,
    EbsSnapshotImportDiskContainerUserBucket UserBucket = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer.property.format">Format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#format EbsSnapshotImport#format}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#description EbsSnapshotImport#description}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#url EbsSnapshotImport#url}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer.property.userBucket">UserBucket</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket">EbsSnapshotImportDiskContainerUserBucket</a></code> | user_bucket block. |

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer.property.format"></a>

```csharp
public string Format { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#format EbsSnapshotImport#format}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#description EbsSnapshotImport#description}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#url EbsSnapshotImport#url}.

---

##### `UserBucket`<sup>Optional</sup> <a name="UserBucket" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer.property.userBucket"></a>

```csharp
public EbsSnapshotImportDiskContainerUserBucket UserBucket { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket">EbsSnapshotImportDiskContainerUserBucket</a>

user_bucket block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#user_bucket EbsSnapshotImport#user_bucket}

---

### EbsSnapshotImportDiskContainerUserBucket <a name="EbsSnapshotImportDiskContainerUserBucket" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EbsSnapshotImportDiskContainerUserBucket {
    string S3Bucket,
    string S3Key
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#s3_bucket EbsSnapshotImport#s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket.property.s3Key">S3Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#s3_key EbsSnapshotImport#s3_key}. |

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#s3_bucket EbsSnapshotImport#s3_bucket}.

---

##### `S3Key`<sup>Required</sup> <a name="S3Key" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket.property.s3Key"></a>

```csharp
public string S3Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#s3_key EbsSnapshotImport#s3_key}.

---

### EbsSnapshotImportTimeouts <a name="EbsSnapshotImportTimeouts" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EbsSnapshotImportTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#create EbsSnapshotImport#create}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#delete EbsSnapshotImport#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#create EbsSnapshotImport#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#delete EbsSnapshotImport#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### EbsSnapshotImportClientDataOutputReference <a name="EbsSnapshotImportClientDataOutputReference" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EbsSnapshotImportClientDataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resetUploadEnd">ResetUploadEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resetUploadSize">ResetUploadSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resetUploadStart">ResetUploadStart</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetUploadEnd` <a name="ResetUploadEnd" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resetUploadEnd"></a>

```csharp
private void ResetUploadEnd()
```

##### `ResetUploadSize` <a name="ResetUploadSize" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resetUploadSize"></a>

```csharp
private void ResetUploadSize()
```

##### `ResetUploadStart` <a name="ResetUploadStart" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resetUploadStart"></a>

```csharp
private void ResetUploadStart()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadEndInput">UploadEndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadSizeInput">UploadSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadStartInput">UploadStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadEnd">UploadEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadSize">UploadSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadStart">UploadStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData">EbsSnapshotImportClientData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `UploadEndInput`<sup>Optional</sup> <a name="UploadEndInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadEndInput"></a>

```csharp
public string UploadEndInput { get; }
```

- *Type:* string

---

##### `UploadSizeInput`<sup>Optional</sup> <a name="UploadSizeInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadSizeInput"></a>

```csharp
public double UploadSizeInput { get; }
```

- *Type:* double

---

##### `UploadStartInput`<sup>Optional</sup> <a name="UploadStartInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadStartInput"></a>

```csharp
public string UploadStartInput { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `UploadEnd`<sup>Required</sup> <a name="UploadEnd" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadEnd"></a>

```csharp
public string UploadEnd { get; }
```

- *Type:* string

---

##### `UploadSize`<sup>Required</sup> <a name="UploadSize" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadSize"></a>

```csharp
public double UploadSize { get; }
```

- *Type:* double

---

##### `UploadStart`<sup>Required</sup> <a name="UploadStart" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadStart"></a>

```csharp
public string UploadStart { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.internalValue"></a>

```csharp
public EbsSnapshotImportClientData InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData">EbsSnapshotImportClientData</a>

---


### EbsSnapshotImportDiskContainerOutputReference <a name="EbsSnapshotImportDiskContainerOutputReference" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EbsSnapshotImportDiskContainerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.putUserBucket">PutUserBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.resetUserBucket">ResetUserBucket</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutUserBucket` <a name="PutUserBucket" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.putUserBucket"></a>

```csharp
private void PutUserBucket(EbsSnapshotImportDiskContainerUserBucket Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.putUserBucket.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket">EbsSnapshotImportDiskContainerUserBucket</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```

##### `ResetUserBucket` <a name="ResetUserBucket" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.resetUserBucket"></a>

```csharp
private void ResetUserBucket()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.userBucket">UserBucket</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference">EbsSnapshotImportDiskContainerUserBucketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.formatInput">FormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.userBucketInput">UserBucketInput</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket">EbsSnapshotImportDiskContainerUserBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer">EbsSnapshotImportDiskContainer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UserBucket`<sup>Required</sup> <a name="UserBucket" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.userBucket"></a>

```csharp
public EbsSnapshotImportDiskContainerUserBucketOutputReference UserBucket { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference">EbsSnapshotImportDiskContainerUserBucketOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.formatInput"></a>

```csharp
public string FormatInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `UserBucketInput`<sup>Optional</sup> <a name="UserBucketInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.userBucketInput"></a>

```csharp
public EbsSnapshotImportDiskContainerUserBucket UserBucketInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket">EbsSnapshotImportDiskContainerUserBucket</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.internalValue"></a>

```csharp
public EbsSnapshotImportDiskContainer InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer">EbsSnapshotImportDiskContainer</a>

---


### EbsSnapshotImportDiskContainerUserBucketOutputReference <a name="EbsSnapshotImportDiskContainerUserBucketOutputReference" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EbsSnapshotImportDiskContainerUserBucketOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.s3BucketInput">S3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.s3KeyInput">S3KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.s3Key">S3Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket">EbsSnapshotImportDiskContainerUserBucket</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3BucketInput`<sup>Optional</sup> <a name="S3BucketInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.s3BucketInput"></a>

```csharp
public string S3BucketInput { get; }
```

- *Type:* string

---

##### `S3KeyInput`<sup>Optional</sup> <a name="S3KeyInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.s3KeyInput"></a>

```csharp
public string S3KeyInput { get; }
```

- *Type:* string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; }
```

- *Type:* string

---

##### `S3Key`<sup>Required</sup> <a name="S3Key" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.s3Key"></a>

```csharp
public string S3Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.internalValue"></a>

```csharp
public EbsSnapshotImportDiskContainerUserBucket InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket">EbsSnapshotImportDiskContainerUserBucket</a>

---


### EbsSnapshotImportTimeoutsOutputReference <a name="EbsSnapshotImportTimeoutsOutputReference" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EbsSnapshotImportTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



