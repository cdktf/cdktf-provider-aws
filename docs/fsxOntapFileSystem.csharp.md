# `fsxOntapFileSystem` Submodule <a name="`fsxOntapFileSystem` Submodule" id="@cdktf/provider-aws.fsxOntapFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FsxOntapFileSystem <a name="FsxOntapFileSystem" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system aws_fsx_ontap_file_system}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxOntapFileSystem(Construct Scope, string Id, FsxOntapFileSystemConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig">FsxOntapFileSystemConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig">FsxOntapFileSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.putDiskIopsConfiguration">PutDiskIopsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetAutomaticBackupRetentionDays">ResetAutomaticBackupRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetDailyAutomaticBackupStartTime">ResetDailyAutomaticBackupStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetDiskIopsConfiguration">ResetDiskIopsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetEndpointIpAddressRange">ResetEndpointIpAddressRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetFsxAdminPassword">ResetFsxAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetRouteTableIds">ResetRouteTableIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetStorageCapacity">ResetStorageCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetStorageType">ResetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetWeeklyMaintenanceStartTime">ResetWeeklyMaintenanceStartTime</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutDiskIopsConfiguration` <a name="PutDiskIopsConfiguration" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.putDiskIopsConfiguration"></a>

```csharp
private void PutDiskIopsConfiguration(FsxOntapFileSystemDiskIopsConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.putDiskIopsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfiguration">FsxOntapFileSystemDiskIopsConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.putTimeouts"></a>

```csharp
private void PutTimeouts(FsxOntapFileSystemTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeouts">FsxOntapFileSystemTimeouts</a>

---

##### `ResetAutomaticBackupRetentionDays` <a name="ResetAutomaticBackupRetentionDays" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetAutomaticBackupRetentionDays"></a>

```csharp
private void ResetAutomaticBackupRetentionDays()
```

##### `ResetDailyAutomaticBackupStartTime` <a name="ResetDailyAutomaticBackupStartTime" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetDailyAutomaticBackupStartTime"></a>

```csharp
private void ResetDailyAutomaticBackupStartTime()
```

##### `ResetDiskIopsConfiguration` <a name="ResetDiskIopsConfiguration" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetDiskIopsConfiguration"></a>

```csharp
private void ResetDiskIopsConfiguration()
```

##### `ResetEndpointIpAddressRange` <a name="ResetEndpointIpAddressRange" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetEndpointIpAddressRange"></a>

```csharp
private void ResetEndpointIpAddressRange()
```

##### `ResetFsxAdminPassword` <a name="ResetFsxAdminPassword" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetFsxAdminPassword"></a>

```csharp
private void ResetFsxAdminPassword()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetRouteTableIds` <a name="ResetRouteTableIds" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetRouteTableIds"></a>

```csharp
private void ResetRouteTableIds()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetStorageCapacity` <a name="ResetStorageCapacity" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetStorageCapacity"></a>

```csharp
private void ResetStorageCapacity()
```

##### `ResetStorageType` <a name="ResetStorageType" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetStorageType"></a>

```csharp
private void ResetStorageType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWeeklyMaintenanceStartTime` <a name="ResetWeeklyMaintenanceStartTime" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.resetWeeklyMaintenanceStartTime"></a>

```csharp
private void ResetWeeklyMaintenanceStartTime()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

FsxOntapFileSystem.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

FsxOntapFileSystem.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

FsxOntapFileSystem.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.diskIopsConfiguration">DiskIopsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference">FsxOntapFileSystemDiskIopsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.dnsName">DnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.endpoints">Endpoints</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList">FsxOntapFileSystemEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.networkInterfaceIds">NetworkInterfaceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference">FsxOntapFileSystemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.automaticBackupRetentionDaysInput">AutomaticBackupRetentionDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.dailyAutomaticBackupStartTimeInput">DailyAutomaticBackupStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.deploymentTypeInput">DeploymentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.diskIopsConfigurationInput">DiskIopsConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfiguration">FsxOntapFileSystemDiskIopsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.endpointIpAddressRangeInput">EndpointIpAddressRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.fsxAdminPasswordInput">FsxAdminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.preferredSubnetIdInput">PreferredSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.routeTableIdsInput">RouteTableIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.storageCapacityInput">StorageCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.storageTypeInput">StorageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.throughputCapacityInput">ThroughputCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.weeklyMaintenanceStartTimeInput">WeeklyMaintenanceStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.automaticBackupRetentionDays">AutomaticBackupRetentionDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.dailyAutomaticBackupStartTime">DailyAutomaticBackupStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.deploymentType">DeploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.endpointIpAddressRange">EndpointIpAddressRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.fsxAdminPassword">FsxAdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.preferredSubnetId">PreferredSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.routeTableIds">RouteTableIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.storageCapacity">StorageCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.storageType">StorageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.throughputCapacity">ThroughputCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.weeklyMaintenanceStartTime">WeeklyMaintenanceStartTime</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DiskIopsConfiguration`<sup>Required</sup> <a name="DiskIopsConfiguration" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.diskIopsConfiguration"></a>

```csharp
public FsxOntapFileSystemDiskIopsConfigurationOutputReference DiskIopsConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference">FsxOntapFileSystemDiskIopsConfigurationOutputReference</a>

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.dnsName"></a>

```csharp
public string DnsName { get; }
```

- *Type:* string

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.endpoints"></a>

```csharp
public FsxOntapFileSystemEndpointsList Endpoints { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList">FsxOntapFileSystemEndpointsList</a>

---

##### `NetworkInterfaceIds`<sup>Required</sup> <a name="NetworkInterfaceIds" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.networkInterfaceIds"></a>

```csharp
public string[] NetworkInterfaceIds { get; }
```

- *Type:* string[]

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.timeouts"></a>

```csharp
public FsxOntapFileSystemTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference">FsxOntapFileSystemTimeoutsOutputReference</a>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `AutomaticBackupRetentionDaysInput`<sup>Optional</sup> <a name="AutomaticBackupRetentionDaysInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.automaticBackupRetentionDaysInput"></a>

```csharp
public double AutomaticBackupRetentionDaysInput { get; }
```

- *Type:* double

---

##### `DailyAutomaticBackupStartTimeInput`<sup>Optional</sup> <a name="DailyAutomaticBackupStartTimeInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.dailyAutomaticBackupStartTimeInput"></a>

```csharp
public string DailyAutomaticBackupStartTimeInput { get; }
```

- *Type:* string

---

##### `DeploymentTypeInput`<sup>Optional</sup> <a name="DeploymentTypeInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.deploymentTypeInput"></a>

```csharp
public string DeploymentTypeInput { get; }
```

- *Type:* string

---

##### `DiskIopsConfigurationInput`<sup>Optional</sup> <a name="DiskIopsConfigurationInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.diskIopsConfigurationInput"></a>

```csharp
public FsxOntapFileSystemDiskIopsConfiguration DiskIopsConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfiguration">FsxOntapFileSystemDiskIopsConfiguration</a>

---

##### `EndpointIpAddressRangeInput`<sup>Optional</sup> <a name="EndpointIpAddressRangeInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.endpointIpAddressRangeInput"></a>

```csharp
public string EndpointIpAddressRangeInput { get; }
```

- *Type:* string

---

##### `FsxAdminPasswordInput`<sup>Optional</sup> <a name="FsxAdminPasswordInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.fsxAdminPasswordInput"></a>

```csharp
public string FsxAdminPasswordInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `PreferredSubnetIdInput`<sup>Optional</sup> <a name="PreferredSubnetIdInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.preferredSubnetIdInput"></a>

```csharp
public string PreferredSubnetIdInput { get; }
```

- *Type:* string

---

##### `RouteTableIdsInput`<sup>Optional</sup> <a name="RouteTableIdsInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.routeTableIdsInput"></a>

```csharp
public string[] RouteTableIdsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `StorageCapacityInput`<sup>Optional</sup> <a name="StorageCapacityInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.storageCapacityInput"></a>

```csharp
public double StorageCapacityInput { get; }
```

- *Type:* double

---

##### `StorageTypeInput`<sup>Optional</sup> <a name="StorageTypeInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.storageTypeInput"></a>

```csharp
public string StorageTypeInput { get; }
```

- *Type:* string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ThroughputCapacityInput`<sup>Optional</sup> <a name="ThroughputCapacityInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.throughputCapacityInput"></a>

```csharp
public double ThroughputCapacityInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WeeklyMaintenanceStartTimeInput`<sup>Optional</sup> <a name="WeeklyMaintenanceStartTimeInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.weeklyMaintenanceStartTimeInput"></a>

```csharp
public string WeeklyMaintenanceStartTimeInput { get; }
```

- *Type:* string

---

##### `AutomaticBackupRetentionDays`<sup>Required</sup> <a name="AutomaticBackupRetentionDays" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.automaticBackupRetentionDays"></a>

```csharp
public double AutomaticBackupRetentionDays { get; }
```

- *Type:* double

---

##### `DailyAutomaticBackupStartTime`<sup>Required</sup> <a name="DailyAutomaticBackupStartTime" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.dailyAutomaticBackupStartTime"></a>

```csharp
public string DailyAutomaticBackupStartTime { get; }
```

- *Type:* string

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.deploymentType"></a>

```csharp
public string DeploymentType { get; }
```

- *Type:* string

---

##### `EndpointIpAddressRange`<sup>Required</sup> <a name="EndpointIpAddressRange" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.endpointIpAddressRange"></a>

```csharp
public string EndpointIpAddressRange { get; }
```

- *Type:* string

---

##### `FsxAdminPassword`<sup>Required</sup> <a name="FsxAdminPassword" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.fsxAdminPassword"></a>

```csharp
public string FsxAdminPassword { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `PreferredSubnetId`<sup>Required</sup> <a name="PreferredSubnetId" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.preferredSubnetId"></a>

```csharp
public string PreferredSubnetId { get; }
```

- *Type:* string

---

##### `RouteTableIds`<sup>Required</sup> <a name="RouteTableIds" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.routeTableIds"></a>

```csharp
public string[] RouteTableIds { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `StorageCapacity`<sup>Required</sup> <a name="StorageCapacity" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.storageCapacity"></a>

```csharp
public double StorageCapacity { get; }
```

- *Type:* double

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.storageType"></a>

```csharp
public string StorageType { get; }
```

- *Type:* string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ThroughputCapacity`<sup>Required</sup> <a name="ThroughputCapacity" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.throughputCapacity"></a>

```csharp
public double ThroughputCapacity { get; }
```

- *Type:* double

---

##### `WeeklyMaintenanceStartTime`<sup>Required</sup> <a name="WeeklyMaintenanceStartTime" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.weeklyMaintenanceStartTime"></a>

```csharp
public string WeeklyMaintenanceStartTime { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystem.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FsxOntapFileSystemConfig <a name="FsxOntapFileSystemConfig" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxOntapFileSystemConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DeploymentType,
    string PreferredSubnetId,
    string[] SubnetIds,
    double ThroughputCapacity,
    double AutomaticBackupRetentionDays = null,
    string DailyAutomaticBackupStartTime = null,
    FsxOntapFileSystemDiskIopsConfiguration DiskIopsConfiguration = null,
    string EndpointIpAddressRange = null,
    string FsxAdminPassword = null,
    string Id = null,
    string KmsKeyId = null,
    string[] RouteTableIds = null,
    string[] SecurityGroupIds = null,
    double StorageCapacity = null,
    string StorageType = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    FsxOntapFileSystemTimeouts Timeouts = null,
    string WeeklyMaintenanceStartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.deploymentType">DeploymentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#deployment_type FsxOntapFileSystem#deployment_type}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.preferredSubnetId">PreferredSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#preferred_subnet_id FsxOntapFileSystem#preferred_subnet_id}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#subnet_ids FsxOntapFileSystem#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.throughputCapacity">ThroughputCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#throughput_capacity FsxOntapFileSystem#throughput_capacity}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.automaticBackupRetentionDays">AutomaticBackupRetentionDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#automatic_backup_retention_days FsxOntapFileSystem#automatic_backup_retention_days}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.dailyAutomaticBackupStartTime">DailyAutomaticBackupStartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#daily_automatic_backup_start_time FsxOntapFileSystem#daily_automatic_backup_start_time}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.diskIopsConfiguration">DiskIopsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfiguration">FsxOntapFileSystemDiskIopsConfiguration</a></code> | disk_iops_configuration block. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.endpointIpAddressRange">EndpointIpAddressRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#endpoint_ip_address_range FsxOntapFileSystem#endpoint_ip_address_range}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.fsxAdminPassword">FsxAdminPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#fsx_admin_password FsxOntapFileSystem#fsx_admin_password}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#id FsxOntapFileSystem#id}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#kms_key_id FsxOntapFileSystem#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.routeTableIds">RouteTableIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#route_table_ids FsxOntapFileSystem#route_table_ids}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#security_group_ids FsxOntapFileSystem#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.storageCapacity">StorageCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#storage_capacity FsxOntapFileSystem#storage_capacity}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.storageType">StorageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#storage_type FsxOntapFileSystem#storage_type}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#tags FsxOntapFileSystem#tags}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#tags_all FsxOntapFileSystem#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeouts">FsxOntapFileSystemTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.weeklyMaintenanceStartTime">WeeklyMaintenanceStartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#weekly_maintenance_start_time FsxOntapFileSystem#weekly_maintenance_start_time}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.deploymentType"></a>

```csharp
public string DeploymentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#deployment_type FsxOntapFileSystem#deployment_type}.

---

##### `PreferredSubnetId`<sup>Required</sup> <a name="PreferredSubnetId" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.preferredSubnetId"></a>

```csharp
public string PreferredSubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#preferred_subnet_id FsxOntapFileSystem#preferred_subnet_id}.

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#subnet_ids FsxOntapFileSystem#subnet_ids}.

---

##### `ThroughputCapacity`<sup>Required</sup> <a name="ThroughputCapacity" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.throughputCapacity"></a>

```csharp
public double ThroughputCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#throughput_capacity FsxOntapFileSystem#throughput_capacity}.

---

##### `AutomaticBackupRetentionDays`<sup>Optional</sup> <a name="AutomaticBackupRetentionDays" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.automaticBackupRetentionDays"></a>

```csharp
public double AutomaticBackupRetentionDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#automatic_backup_retention_days FsxOntapFileSystem#automatic_backup_retention_days}.

---

##### `DailyAutomaticBackupStartTime`<sup>Optional</sup> <a name="DailyAutomaticBackupStartTime" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.dailyAutomaticBackupStartTime"></a>

```csharp
public string DailyAutomaticBackupStartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#daily_automatic_backup_start_time FsxOntapFileSystem#daily_automatic_backup_start_time}.

---

##### `DiskIopsConfiguration`<sup>Optional</sup> <a name="DiskIopsConfiguration" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.diskIopsConfiguration"></a>

```csharp
public FsxOntapFileSystemDiskIopsConfiguration DiskIopsConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfiguration">FsxOntapFileSystemDiskIopsConfiguration</a>

disk_iops_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#disk_iops_configuration FsxOntapFileSystem#disk_iops_configuration}

---

##### `EndpointIpAddressRange`<sup>Optional</sup> <a name="EndpointIpAddressRange" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.endpointIpAddressRange"></a>

```csharp
public string EndpointIpAddressRange { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#endpoint_ip_address_range FsxOntapFileSystem#endpoint_ip_address_range}.

---

##### `FsxAdminPassword`<sup>Optional</sup> <a name="FsxAdminPassword" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.fsxAdminPassword"></a>

```csharp
public string FsxAdminPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#fsx_admin_password FsxOntapFileSystem#fsx_admin_password}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#id FsxOntapFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#kms_key_id FsxOntapFileSystem#kms_key_id}.

---

##### `RouteTableIds`<sup>Optional</sup> <a name="RouteTableIds" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.routeTableIds"></a>

```csharp
public string[] RouteTableIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#route_table_ids FsxOntapFileSystem#route_table_ids}.

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#security_group_ids FsxOntapFileSystem#security_group_ids}.

---

##### `StorageCapacity`<sup>Optional</sup> <a name="StorageCapacity" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.storageCapacity"></a>

```csharp
public double StorageCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#storage_capacity FsxOntapFileSystem#storage_capacity}.

---

##### `StorageType`<sup>Optional</sup> <a name="StorageType" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.storageType"></a>

```csharp
public string StorageType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#storage_type FsxOntapFileSystem#storage_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#tags FsxOntapFileSystem#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#tags_all FsxOntapFileSystem#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.timeouts"></a>

```csharp
public FsxOntapFileSystemTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeouts">FsxOntapFileSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#timeouts FsxOntapFileSystem#timeouts}

---

##### `WeeklyMaintenanceStartTime`<sup>Optional</sup> <a name="WeeklyMaintenanceStartTime" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.weeklyMaintenanceStartTime"></a>

```csharp
public string WeeklyMaintenanceStartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#weekly_maintenance_start_time FsxOntapFileSystem#weekly_maintenance_start_time}.

---

### FsxOntapFileSystemDiskIopsConfiguration <a name="FsxOntapFileSystemDiskIopsConfiguration" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxOntapFileSystemDiskIopsConfiguration {
    double Iops = null,
    string Mode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfiguration.property.iops">Iops</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#iops FsxOntapFileSystem#iops}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfiguration.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#mode FsxOntapFileSystem#mode}. |

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfiguration.property.iops"></a>

```csharp
public double Iops { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#iops FsxOntapFileSystem#iops}.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfiguration.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#mode FsxOntapFileSystem#mode}.

---

### FsxOntapFileSystemEndpoints <a name="FsxOntapFileSystemEndpoints" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxOntapFileSystemEndpoints {

};
```


### FsxOntapFileSystemEndpointsIntercluster <a name="FsxOntapFileSystemEndpointsIntercluster" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsIntercluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsIntercluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxOntapFileSystemEndpointsIntercluster {

};
```


### FsxOntapFileSystemEndpointsManagement <a name="FsxOntapFileSystemEndpointsManagement" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxOntapFileSystemEndpointsManagement {

};
```


### FsxOntapFileSystemTimeouts <a name="FsxOntapFileSystemTimeouts" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxOntapFileSystemTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#create FsxOntapFileSystem#create}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#delete FsxOntapFileSystem#delete}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#update FsxOntapFileSystem#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#create FsxOntapFileSystem#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#delete FsxOntapFileSystem#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system#update FsxOntapFileSystem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FsxOntapFileSystemDiskIopsConfigurationOutputReference <a name="FsxOntapFileSystemDiskIopsConfigurationOutputReference" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxOntapFileSystemDiskIopsConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.resetIops"></a>

```csharp
private void ResetIops()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.property.iopsInput">IopsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.property.iops">Iops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfiguration">FsxOntapFileSystemDiskIopsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.property.iopsInput"></a>

```csharp
public double IopsInput { get; }
```

- *Type:* double

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.property.iops"></a>

```csharp
public double Iops { get; }
```

- *Type:* double

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.property.internalValue"></a>

```csharp
public FsxOntapFileSystemDiskIopsConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfiguration">FsxOntapFileSystemDiskIopsConfiguration</a>

---


### FsxOntapFileSystemEndpointsInterclusterList <a name="FsxOntapFileSystemEndpointsInterclusterList" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxOntapFileSystemEndpointsInterclusterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.get"></a>

```csharp
private FsxOntapFileSystemEndpointsInterclusterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### FsxOntapFileSystemEndpointsInterclusterOutputReference <a name="FsxOntapFileSystemEndpointsInterclusterOutputReference" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxOntapFileSystemEndpointsInterclusterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.property.dnsName">DnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsIntercluster">FsxOntapFileSystemEndpointsIntercluster</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.property.dnsName"></a>

```csharp
public string DnsName { get; }
```

- *Type:* string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.property.ipAddresses"></a>

```csharp
public string[] IpAddresses { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.property.internalValue"></a>

```csharp
public FsxOntapFileSystemEndpointsIntercluster InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsIntercluster">FsxOntapFileSystemEndpointsIntercluster</a>

---


### FsxOntapFileSystemEndpointsList <a name="FsxOntapFileSystemEndpointsList" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxOntapFileSystemEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.get"></a>

```csharp
private FsxOntapFileSystemEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### FsxOntapFileSystemEndpointsManagementList <a name="FsxOntapFileSystemEndpointsManagementList" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxOntapFileSystemEndpointsManagementList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.get"></a>

```csharp
private FsxOntapFileSystemEndpointsManagementOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### FsxOntapFileSystemEndpointsManagementOutputReference <a name="FsxOntapFileSystemEndpointsManagementOutputReference" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxOntapFileSystemEndpointsManagementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.property.dnsName">DnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagement">FsxOntapFileSystemEndpointsManagement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.property.dnsName"></a>

```csharp
public string DnsName { get; }
```

- *Type:* string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.property.ipAddresses"></a>

```csharp
public string[] IpAddresses { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.property.internalValue"></a>

```csharp
public FsxOntapFileSystemEndpointsManagement InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagement">FsxOntapFileSystemEndpointsManagement</a>

---


### FsxOntapFileSystemEndpointsOutputReference <a name="FsxOntapFileSystemEndpointsOutputReference" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxOntapFileSystemEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.property.intercluster">Intercluster</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList">FsxOntapFileSystemEndpointsInterclusterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.property.management">Management</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList">FsxOntapFileSystemEndpointsManagementList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpoints">FsxOntapFileSystemEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Intercluster`<sup>Required</sup> <a name="Intercluster" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.property.intercluster"></a>

```csharp
public FsxOntapFileSystemEndpointsInterclusterList Intercluster { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList">FsxOntapFileSystemEndpointsInterclusterList</a>

---

##### `Management`<sup>Required</sup> <a name="Management" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.property.management"></a>

```csharp
public FsxOntapFileSystemEndpointsManagementList Management { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList">FsxOntapFileSystemEndpointsManagementList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.property.internalValue"></a>

```csharp
public FsxOntapFileSystemEndpoints InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemEndpoints">FsxOntapFileSystemEndpoints</a>

---


### FsxOntapFileSystemTimeoutsOutputReference <a name="FsxOntapFileSystemTimeoutsOutputReference" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxOntapFileSystemTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



