# `efsFileSystem` Submodule <a name="`efsFileSystem` Submodule" id="@cdktf/provider-aws.efsFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EfsFileSystem <a name="EfsFileSystem" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system aws_efs_file_system}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EfsFileSystem(Construct Scope, string Id, EfsFileSystemConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig">EfsFileSystemConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig">EfsFileSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.putLifecyclePolicy">PutLifecyclePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetAvailabilityZoneName">ResetAvailabilityZoneName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetCreationToken">ResetCreationToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetEncrypted">ResetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetLifecyclePolicy">ResetLifecyclePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetPerformanceMode">ResetPerformanceMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetProvisionedThroughputInMibps">ResetProvisionedThroughputInMibps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetThroughputMode">ResetThroughputMode</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutLifecyclePolicy` <a name="PutLifecyclePolicy" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.putLifecyclePolicy"></a>

```csharp
private void PutLifecyclePolicy(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.putLifecyclePolicy.parameter.value"></a>

- *Type:* object

---

##### `ResetAvailabilityZoneName` <a name="ResetAvailabilityZoneName" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetAvailabilityZoneName"></a>

```csharp
private void ResetAvailabilityZoneName()
```

##### `ResetCreationToken` <a name="ResetCreationToken" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetCreationToken"></a>

```csharp
private void ResetCreationToken()
```

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetEncrypted"></a>

```csharp
private void ResetEncrypted()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetLifecyclePolicy` <a name="ResetLifecyclePolicy" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetLifecyclePolicy"></a>

```csharp
private void ResetLifecyclePolicy()
```

##### `ResetPerformanceMode` <a name="ResetPerformanceMode" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetPerformanceMode"></a>

```csharp
private void ResetPerformanceMode()
```

##### `ResetProvisionedThroughputInMibps` <a name="ResetProvisionedThroughputInMibps" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetProvisionedThroughputInMibps"></a>

```csharp
private void ResetProvisionedThroughputInMibps()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetThroughputMode` <a name="ResetThroughputMode" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetThroughputMode"></a>

```csharp
private void ResetThroughputMode()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EfsFileSystem.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EfsFileSystem.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EfsFileSystem.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.dnsName">DnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.lifecyclePolicy">LifecyclePolicy</a></code> | <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList">EfsFileSystemLifecyclePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.numberOfMountTargets">NumberOfMountTargets</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.sizeInBytes">SizeInBytes</a></code> | <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList">EfsFileSystemSizeInBytesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.availabilityZoneNameInput">AvailabilityZoneNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.creationTokenInput">CreationTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.encryptedInput">EncryptedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.lifecyclePolicyInput">LifecyclePolicyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.performanceModeInput">PerformanceModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.provisionedThroughputInMibpsInput">ProvisionedThroughputInMibpsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.throughputModeInput">ThroughputModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.availabilityZoneName">AvailabilityZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.creationToken">CreationToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.encrypted">Encrypted</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.performanceMode">PerformanceMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.provisionedThroughputInMibps">ProvisionedThroughputInMibps</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.throughputMode">ThroughputMode</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AvailabilityZoneId`<sup>Required</sup> <a name="AvailabilityZoneId" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.availabilityZoneId"></a>

```csharp
public string AvailabilityZoneId { get; }
```

- *Type:* string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.dnsName"></a>

```csharp
public string DnsName { get; }
```

- *Type:* string

---

##### `LifecyclePolicy`<sup>Required</sup> <a name="LifecyclePolicy" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.lifecyclePolicy"></a>

```csharp
public EfsFileSystemLifecyclePolicyList LifecyclePolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList">EfsFileSystemLifecyclePolicyList</a>

---

##### `NumberOfMountTargets`<sup>Required</sup> <a name="NumberOfMountTargets" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.numberOfMountTargets"></a>

```csharp
public double NumberOfMountTargets { get; }
```

- *Type:* double

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `SizeInBytes`<sup>Required</sup> <a name="SizeInBytes" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.sizeInBytes"></a>

```csharp
public EfsFileSystemSizeInBytesList SizeInBytes { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList">EfsFileSystemSizeInBytesList</a>

---

##### `AvailabilityZoneNameInput`<sup>Optional</sup> <a name="AvailabilityZoneNameInput" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.availabilityZoneNameInput"></a>

```csharp
public string AvailabilityZoneNameInput { get; }
```

- *Type:* string

---

##### `CreationTokenInput`<sup>Optional</sup> <a name="CreationTokenInput" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.creationTokenInput"></a>

```csharp
public string CreationTokenInput { get; }
```

- *Type:* string

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.encryptedInput"></a>

```csharp
public object EncryptedInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `LifecyclePolicyInput`<sup>Optional</sup> <a name="LifecyclePolicyInput" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.lifecyclePolicyInput"></a>

```csharp
public object LifecyclePolicyInput { get; }
```

- *Type:* object

---

##### `PerformanceModeInput`<sup>Optional</sup> <a name="PerformanceModeInput" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.performanceModeInput"></a>

```csharp
public string PerformanceModeInput { get; }
```

- *Type:* string

---

##### `ProvisionedThroughputInMibpsInput`<sup>Optional</sup> <a name="ProvisionedThroughputInMibpsInput" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.provisionedThroughputInMibpsInput"></a>

```csharp
public double ProvisionedThroughputInMibpsInput { get; }
```

- *Type:* double

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ThroughputModeInput`<sup>Optional</sup> <a name="ThroughputModeInput" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.throughputModeInput"></a>

```csharp
public string ThroughputModeInput { get; }
```

- *Type:* string

---

##### `AvailabilityZoneName`<sup>Required</sup> <a name="AvailabilityZoneName" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.availabilityZoneName"></a>

```csharp
public string AvailabilityZoneName { get; }
```

- *Type:* string

---

##### `CreationToken`<sup>Required</sup> <a name="CreationToken" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.creationToken"></a>

```csharp
public string CreationToken { get; }
```

- *Type:* string

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.encrypted"></a>

```csharp
public object Encrypted { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `PerformanceMode`<sup>Required</sup> <a name="PerformanceMode" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.performanceMode"></a>

```csharp
public string PerformanceMode { get; }
```

- *Type:* string

---

##### `ProvisionedThroughputInMibps`<sup>Required</sup> <a name="ProvisionedThroughputInMibps" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.provisionedThroughputInMibps"></a>

```csharp
public double ProvisionedThroughputInMibps { get; }
```

- *Type:* double

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ThroughputMode`<sup>Required</sup> <a name="ThroughputMode" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.throughputMode"></a>

```csharp
public string ThroughputMode { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EfsFileSystemConfig <a name="EfsFileSystemConfig" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EfsFileSystemConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AvailabilityZoneName = null,
    string CreationToken = null,
    object Encrypted = null,
    string Id = null,
    string KmsKeyId = null,
    object LifecyclePolicy = null,
    string PerformanceMode = null,
    double ProvisionedThroughputInMibps = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    string ThroughputMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.availabilityZoneName">AvailabilityZoneName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#availability_zone_name EfsFileSystem#availability_zone_name}. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.creationToken">CreationToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#creation_token EfsFileSystem#creation_token}. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.encrypted">Encrypted</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#encrypted EfsFileSystem#encrypted}. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#id EfsFileSystem#id}. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#kms_key_id EfsFileSystem#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.lifecyclePolicy">LifecyclePolicy</a></code> | <code>object</code> | lifecycle_policy block. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.performanceMode">PerformanceMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#performance_mode EfsFileSystem#performance_mode}. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.provisionedThroughputInMibps">ProvisionedThroughputInMibps</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#provisioned_throughput_in_mibps EfsFileSystem#provisioned_throughput_in_mibps}. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#tags EfsFileSystem#tags}. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#tags_all EfsFileSystem#tags_all}. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.throughputMode">ThroughputMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#throughput_mode EfsFileSystem#throughput_mode}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AvailabilityZoneName`<sup>Optional</sup> <a name="AvailabilityZoneName" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.availabilityZoneName"></a>

```csharp
public string AvailabilityZoneName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#availability_zone_name EfsFileSystem#availability_zone_name}.

---

##### `CreationToken`<sup>Optional</sup> <a name="CreationToken" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.creationToken"></a>

```csharp
public string CreationToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#creation_token EfsFileSystem#creation_token}.

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.encrypted"></a>

```csharp
public object Encrypted { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#encrypted EfsFileSystem#encrypted}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#id EfsFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#kms_key_id EfsFileSystem#kms_key_id}.

---

##### `LifecyclePolicy`<sup>Optional</sup> <a name="LifecyclePolicy" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.lifecyclePolicy"></a>

```csharp
public object LifecyclePolicy { get; set; }
```

- *Type:* object

lifecycle_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#lifecycle_policy EfsFileSystem#lifecycle_policy}

---

##### `PerformanceMode`<sup>Optional</sup> <a name="PerformanceMode" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.performanceMode"></a>

```csharp
public string PerformanceMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#performance_mode EfsFileSystem#performance_mode}.

---

##### `ProvisionedThroughputInMibps`<sup>Optional</sup> <a name="ProvisionedThroughputInMibps" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.provisionedThroughputInMibps"></a>

```csharp
public double ProvisionedThroughputInMibps { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#provisioned_throughput_in_mibps EfsFileSystem#provisioned_throughput_in_mibps}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#tags EfsFileSystem#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#tags_all EfsFileSystem#tags_all}.

---

##### `ThroughputMode`<sup>Optional</sup> <a name="ThroughputMode" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.throughputMode"></a>

```csharp
public string ThroughputMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#throughput_mode EfsFileSystem#throughput_mode}.

---

### EfsFileSystemLifecyclePolicy <a name="EfsFileSystemLifecyclePolicy" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EfsFileSystemLifecyclePolicy {
    string TransitionToIa = null,
    string TransitionToPrimaryStorageClass = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicy.property.transitionToIa">TransitionToIa</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#transition_to_ia EfsFileSystem#transition_to_ia}. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicy.property.transitionToPrimaryStorageClass">TransitionToPrimaryStorageClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#transition_to_primary_storage_class EfsFileSystem#transition_to_primary_storage_class}. |

---

##### `TransitionToIa`<sup>Optional</sup> <a name="TransitionToIa" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicy.property.transitionToIa"></a>

```csharp
public string TransitionToIa { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#transition_to_ia EfsFileSystem#transition_to_ia}.

---

##### `TransitionToPrimaryStorageClass`<sup>Optional</sup> <a name="TransitionToPrimaryStorageClass" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicy.property.transitionToPrimaryStorageClass"></a>

```csharp
public string TransitionToPrimaryStorageClass { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#transition_to_primary_storage_class EfsFileSystem#transition_to_primary_storage_class}.

---

### EfsFileSystemSizeInBytes <a name="EfsFileSystemSizeInBytes" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EfsFileSystemSizeInBytes {

};
```


## Classes <a name="Classes" id="Classes"></a>

### EfsFileSystemLifecyclePolicyList <a name="EfsFileSystemLifecyclePolicyList" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EfsFileSystemLifecyclePolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.get"></a>

```csharp
private EfsFileSystemLifecyclePolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EfsFileSystemLifecyclePolicyOutputReference <a name="EfsFileSystemLifecyclePolicyOutputReference" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EfsFileSystemLifecyclePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.resetTransitionToIa">ResetTransitionToIa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.resetTransitionToPrimaryStorageClass">ResetTransitionToPrimaryStorageClass</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTransitionToIa` <a name="ResetTransitionToIa" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.resetTransitionToIa"></a>

```csharp
private void ResetTransitionToIa()
```

##### `ResetTransitionToPrimaryStorageClass` <a name="ResetTransitionToPrimaryStorageClass" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.resetTransitionToPrimaryStorageClass"></a>

```csharp
private void ResetTransitionToPrimaryStorageClass()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.transitionToIaInput">TransitionToIaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.transitionToPrimaryStorageClassInput">TransitionToPrimaryStorageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.transitionToIa">TransitionToIa</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.transitionToPrimaryStorageClass">TransitionToPrimaryStorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TransitionToIaInput`<sup>Optional</sup> <a name="TransitionToIaInput" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.transitionToIaInput"></a>

```csharp
public string TransitionToIaInput { get; }
```

- *Type:* string

---

##### `TransitionToPrimaryStorageClassInput`<sup>Optional</sup> <a name="TransitionToPrimaryStorageClassInput" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.transitionToPrimaryStorageClassInput"></a>

```csharp
public string TransitionToPrimaryStorageClassInput { get; }
```

- *Type:* string

---

##### `TransitionToIa`<sup>Required</sup> <a name="TransitionToIa" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.transitionToIa"></a>

```csharp
public string TransitionToIa { get; }
```

- *Type:* string

---

##### `TransitionToPrimaryStorageClass`<sup>Required</sup> <a name="TransitionToPrimaryStorageClass" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.transitionToPrimaryStorageClass"></a>

```csharp
public string TransitionToPrimaryStorageClass { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EfsFileSystemSizeInBytesList <a name="EfsFileSystemSizeInBytesList" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EfsFileSystemSizeInBytesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.get"></a>

```csharp
private EfsFileSystemSizeInBytesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### EfsFileSystemSizeInBytesOutputReference <a name="EfsFileSystemSizeInBytesOutputReference" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EfsFileSystemSizeInBytesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.valueInIa">ValueInIa</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.valueInStandard">ValueInStandard</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytes">EfsFileSystemSizeInBytes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `ValueInIa`<sup>Required</sup> <a name="ValueInIa" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.valueInIa"></a>

```csharp
public double ValueInIa { get; }
```

- *Type:* double

---

##### `ValueInStandard`<sup>Required</sup> <a name="ValueInStandard" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.valueInStandard"></a>

```csharp
public double ValueInStandard { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.internalValue"></a>

```csharp
public EfsFileSystemSizeInBytes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytes">EfsFileSystemSizeInBytes</a>

---



