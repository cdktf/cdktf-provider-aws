# `amiFromInstance` Submodule <a name="`amiFromInstance` Submodule" id="@cdktf/provider-aws.amiFromInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AmiFromInstance <a name="AmiFromInstance" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance aws_ami_from_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AmiFromInstance(Construct Scope, string Id, AmiFromInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig">AmiFromInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig">AmiFromInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.putEbsBlockDevice">PutEbsBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.putEphemeralBlockDevice">PutEphemeralBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.resetDeprecationTime">ResetDeprecationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.resetEbsBlockDevice">ResetEbsBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.resetEphemeralBlockDevice">ResetEphemeralBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.resetSnapshotWithoutReboot">ResetSnapshotWithoutReboot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutEbsBlockDevice` <a name="PutEbsBlockDevice" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.putEbsBlockDevice"></a>

```csharp
private void PutEbsBlockDevice(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.putEbsBlockDevice.parameter.value"></a>

- *Type:* object

---

##### `PutEphemeralBlockDevice` <a name="PutEphemeralBlockDevice" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.putEphemeralBlockDevice"></a>

```csharp
private void PutEphemeralBlockDevice(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.putEphemeralBlockDevice.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.putTimeouts"></a>

```csharp
private void PutTimeouts(AmiFromInstanceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeouts">AmiFromInstanceTimeouts</a>

---

##### `ResetDeprecationTime` <a name="ResetDeprecationTime" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.resetDeprecationTime"></a>

```csharp
private void ResetDeprecationTime()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEbsBlockDevice` <a name="ResetEbsBlockDevice" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.resetEbsBlockDevice"></a>

```csharp
private void ResetEbsBlockDevice()
```

##### `ResetEphemeralBlockDevice` <a name="ResetEphemeralBlockDevice" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.resetEphemeralBlockDevice"></a>

```csharp
private void ResetEphemeralBlockDevice()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSnapshotWithoutReboot` <a name="ResetSnapshotWithoutReboot" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.resetSnapshotWithoutReboot"></a>

```csharp
private void ResetSnapshotWithoutReboot()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AmiFromInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AmiFromInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AmiFromInstance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.architecture">Architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.bootMode">BootMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.ebsBlockDevice">EbsBlockDevice</a></code> | <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList">AmiFromInstanceEbsBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.enaSupport">EnaSupport</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.ephemeralBlockDevice">EphemeralBlockDevice</a></code> | <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList">AmiFromInstanceEphemeralBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.hypervisor">Hypervisor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.imageLocation">ImageLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.imageOwnerAlias">ImageOwnerAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.imageType">ImageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.imdsSupport">ImdsSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.kernelId">KernelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.manageEbsSnapshots">ManageEbsSnapshots</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.platform">Platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.platformDetails">PlatformDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.public">Public</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.ramdiskId">RamdiskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.rootDeviceName">RootDeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.rootSnapshotId">RootSnapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.sriovNetSupport">SriovNetSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference">AmiFromInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.tpmSupport">TpmSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.usageOperation">UsageOperation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.virtualizationType">VirtualizationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.deprecationTimeInput">DeprecationTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.ebsBlockDeviceInput">EbsBlockDeviceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.ephemeralBlockDeviceInput">EphemeralBlockDeviceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.snapshotWithoutRebootInput">SnapshotWithoutRebootInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.sourceInstanceIdInput">SourceInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.deprecationTime">DeprecationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.snapshotWithoutReboot">SnapshotWithoutReboot</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.sourceInstanceId">SourceInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.architecture"></a>

```csharp
public string Architecture { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `BootMode`<sup>Required</sup> <a name="BootMode" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.bootMode"></a>

```csharp
public string BootMode { get; }
```

- *Type:* string

---

##### `EbsBlockDevice`<sup>Required</sup> <a name="EbsBlockDevice" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.ebsBlockDevice"></a>

```csharp
public AmiFromInstanceEbsBlockDeviceList EbsBlockDevice { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList">AmiFromInstanceEbsBlockDeviceList</a>

---

##### `EnaSupport`<sup>Required</sup> <a name="EnaSupport" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.enaSupport"></a>

```csharp
public IResolvable EnaSupport { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EphemeralBlockDevice`<sup>Required</sup> <a name="EphemeralBlockDevice" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.ephemeralBlockDevice"></a>

```csharp
public AmiFromInstanceEphemeralBlockDeviceList EphemeralBlockDevice { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList">AmiFromInstanceEphemeralBlockDeviceList</a>

---

##### `Hypervisor`<sup>Required</sup> <a name="Hypervisor" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.hypervisor"></a>

```csharp
public string Hypervisor { get; }
```

- *Type:* string

---

##### `ImageLocation`<sup>Required</sup> <a name="ImageLocation" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.imageLocation"></a>

```csharp
public string ImageLocation { get; }
```

- *Type:* string

---

##### `ImageOwnerAlias`<sup>Required</sup> <a name="ImageOwnerAlias" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.imageOwnerAlias"></a>

```csharp
public string ImageOwnerAlias { get; }
```

- *Type:* string

---

##### `ImageType`<sup>Required</sup> <a name="ImageType" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.imageType"></a>

```csharp
public string ImageType { get; }
```

- *Type:* string

---

##### `ImdsSupport`<sup>Required</sup> <a name="ImdsSupport" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.imdsSupport"></a>

```csharp
public string ImdsSupport { get; }
```

- *Type:* string

---

##### `KernelId`<sup>Required</sup> <a name="KernelId" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.kernelId"></a>

```csharp
public string KernelId { get; }
```

- *Type:* string

---

##### `ManageEbsSnapshots`<sup>Required</sup> <a name="ManageEbsSnapshots" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.manageEbsSnapshots"></a>

```csharp
public IResolvable ManageEbsSnapshots { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.platform"></a>

```csharp
public string Platform { get; }
```

- *Type:* string

---

##### `PlatformDetails`<sup>Required</sup> <a name="PlatformDetails" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.platformDetails"></a>

```csharp
public string PlatformDetails { get; }
```

- *Type:* string

---

##### `Public`<sup>Required</sup> <a name="Public" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.public"></a>

```csharp
public IResolvable Public { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `RamdiskId`<sup>Required</sup> <a name="RamdiskId" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.ramdiskId"></a>

```csharp
public string RamdiskId { get; }
```

- *Type:* string

---

##### `RootDeviceName`<sup>Required</sup> <a name="RootDeviceName" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.rootDeviceName"></a>

```csharp
public string RootDeviceName { get; }
```

- *Type:* string

---

##### `RootSnapshotId`<sup>Required</sup> <a name="RootSnapshotId" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.rootSnapshotId"></a>

```csharp
public string RootSnapshotId { get; }
```

- *Type:* string

---

##### `SriovNetSupport`<sup>Required</sup> <a name="SriovNetSupport" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.sriovNetSupport"></a>

```csharp
public string SriovNetSupport { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.timeouts"></a>

```csharp
public AmiFromInstanceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference">AmiFromInstanceTimeoutsOutputReference</a>

---

##### `TpmSupport`<sup>Required</sup> <a name="TpmSupport" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.tpmSupport"></a>

```csharp
public string TpmSupport { get; }
```

- *Type:* string

---

##### `UsageOperation`<sup>Required</sup> <a name="UsageOperation" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.usageOperation"></a>

```csharp
public string UsageOperation { get; }
```

- *Type:* string

---

##### `VirtualizationType`<sup>Required</sup> <a name="VirtualizationType" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.virtualizationType"></a>

```csharp
public string VirtualizationType { get; }
```

- *Type:* string

---

##### `DeprecationTimeInput`<sup>Optional</sup> <a name="DeprecationTimeInput" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.deprecationTimeInput"></a>

```csharp
public string DeprecationTimeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EbsBlockDeviceInput`<sup>Optional</sup> <a name="EbsBlockDeviceInput" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.ebsBlockDeviceInput"></a>

```csharp
public object EbsBlockDeviceInput { get; }
```

- *Type:* object

---

##### `EphemeralBlockDeviceInput`<sup>Optional</sup> <a name="EphemeralBlockDeviceInput" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.ephemeralBlockDeviceInput"></a>

```csharp
public object EphemeralBlockDeviceInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SnapshotWithoutRebootInput`<sup>Optional</sup> <a name="SnapshotWithoutRebootInput" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.snapshotWithoutRebootInput"></a>

```csharp
public object SnapshotWithoutRebootInput { get; }
```

- *Type:* object

---

##### `SourceInstanceIdInput`<sup>Optional</sup> <a name="SourceInstanceIdInput" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.sourceInstanceIdInput"></a>

```csharp
public string SourceInstanceIdInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DeprecationTime`<sup>Required</sup> <a name="DeprecationTime" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.deprecationTime"></a>

```csharp
public string DeprecationTime { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SnapshotWithoutReboot`<sup>Required</sup> <a name="SnapshotWithoutReboot" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.snapshotWithoutReboot"></a>

```csharp
public object SnapshotWithoutReboot { get; }
```

- *Type:* object

---

##### `SourceInstanceId`<sup>Required</sup> <a name="SourceInstanceId" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.sourceInstanceId"></a>

```csharp
public string SourceInstanceId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AmiFromInstanceConfig <a name="AmiFromInstanceConfig" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AmiFromInstanceConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string SourceInstanceId,
    string DeprecationTime = null,
    string Description = null,
    object EbsBlockDevice = null,
    object EphemeralBlockDevice = null,
    string Id = null,
    object SnapshotWithoutReboot = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    AmiFromInstanceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#name AmiFromInstance#name}. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.sourceInstanceId">SourceInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#source_instance_id AmiFromInstance#source_instance_id}. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.deprecationTime">DeprecationTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#deprecation_time AmiFromInstance#deprecation_time}. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#description AmiFromInstance#description}. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.ebsBlockDevice">EbsBlockDevice</a></code> | <code>object</code> | ebs_block_device block. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.ephemeralBlockDevice">EphemeralBlockDevice</a></code> | <code>object</code> | ephemeral_block_device block. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#id AmiFromInstance#id}. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.snapshotWithoutReboot">SnapshotWithoutReboot</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#snapshot_without_reboot AmiFromInstance#snapshot_without_reboot}. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#tags AmiFromInstance#tags}. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#tags_all AmiFromInstance#tags_all}. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeouts">AmiFromInstanceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#name AmiFromInstance#name}.

---

##### `SourceInstanceId`<sup>Required</sup> <a name="SourceInstanceId" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.sourceInstanceId"></a>

```csharp
public string SourceInstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#source_instance_id AmiFromInstance#source_instance_id}.

---

##### `DeprecationTime`<sup>Optional</sup> <a name="DeprecationTime" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.deprecationTime"></a>

```csharp
public string DeprecationTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#deprecation_time AmiFromInstance#deprecation_time}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#description AmiFromInstance#description}.

---

##### `EbsBlockDevice`<sup>Optional</sup> <a name="EbsBlockDevice" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.ebsBlockDevice"></a>

```csharp
public object EbsBlockDevice { get; set; }
```

- *Type:* object

ebs_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#ebs_block_device AmiFromInstance#ebs_block_device}

---

##### `EphemeralBlockDevice`<sup>Optional</sup> <a name="EphemeralBlockDevice" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.ephemeralBlockDevice"></a>

```csharp
public object EphemeralBlockDevice { get; set; }
```

- *Type:* object

ephemeral_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#ephemeral_block_device AmiFromInstance#ephemeral_block_device}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#id AmiFromInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SnapshotWithoutReboot`<sup>Optional</sup> <a name="SnapshotWithoutReboot" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.snapshotWithoutReboot"></a>

```csharp
public object SnapshotWithoutReboot { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#snapshot_without_reboot AmiFromInstance#snapshot_without_reboot}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#tags AmiFromInstance#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#tags_all AmiFromInstance#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.timeouts"></a>

```csharp
public AmiFromInstanceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeouts">AmiFromInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#timeouts AmiFromInstance#timeouts}

---

### AmiFromInstanceEbsBlockDevice <a name="AmiFromInstanceEbsBlockDevice" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDevice.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AmiFromInstanceEbsBlockDevice {

};
```


### AmiFromInstanceEphemeralBlockDevice <a name="AmiFromInstanceEphemeralBlockDevice" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDevice.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AmiFromInstanceEphemeralBlockDevice {

};
```


### AmiFromInstanceTimeouts <a name="AmiFromInstanceTimeouts" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AmiFromInstanceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#create AmiFromInstance#create}. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#delete AmiFromInstance#delete}. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#update AmiFromInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#create AmiFromInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#delete AmiFromInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#update AmiFromInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AmiFromInstanceEbsBlockDeviceList <a name="AmiFromInstanceEbsBlockDeviceList" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AmiFromInstanceEbsBlockDeviceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList.get"></a>

```csharp
private AmiFromInstanceEbsBlockDeviceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AmiFromInstanceEbsBlockDeviceOutputReference <a name="AmiFromInstanceEbsBlockDeviceOutputReference" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AmiFromInstanceEbsBlockDeviceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.deviceName">DeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.encrypted">Encrypted</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.iops">Iops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.outpostArn">OutpostArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.snapshotId">SnapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.throughput">Throughput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.volumeSize">VolumeSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.volumeType">VolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteOnTermination`<sup>Required</sup> <a name="DeleteOnTermination" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.deleteOnTermination"></a>

```csharp
public IResolvable DeleteOnTermination { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.deviceName"></a>

```csharp
public string DeviceName { get; }
```

- *Type:* string

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.encrypted"></a>

```csharp
public IResolvable Encrypted { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.iops"></a>

```csharp
public double Iops { get; }
```

- *Type:* double

---

##### `OutpostArn`<sup>Required</sup> <a name="OutpostArn" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.outpostArn"></a>

```csharp
public string OutpostArn { get; }
```

- *Type:* string

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.snapshotId"></a>

```csharp
public string SnapshotId { get; }
```

- *Type:* string

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.throughput"></a>

```csharp
public double Throughput { get; }
```

- *Type:* double

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.volumeSize"></a>

```csharp
public double VolumeSize { get; }
```

- *Type:* double

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.volumeType"></a>

```csharp
public string VolumeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AmiFromInstanceEphemeralBlockDeviceList <a name="AmiFromInstanceEphemeralBlockDeviceList" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AmiFromInstanceEphemeralBlockDeviceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList.get"></a>

```csharp
private AmiFromInstanceEphemeralBlockDeviceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AmiFromInstanceEphemeralBlockDeviceOutputReference <a name="AmiFromInstanceEphemeralBlockDeviceOutputReference" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AmiFromInstanceEphemeralBlockDeviceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.property.deviceName">DeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.property.virtualName">VirtualName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.property.deviceName"></a>

```csharp
public string DeviceName { get; }
```

- *Type:* string

---

##### `VirtualName`<sup>Required</sup> <a name="VirtualName" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.property.virtualName"></a>

```csharp
public string VirtualName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AmiFromInstanceTimeoutsOutputReference <a name="AmiFromInstanceTimeoutsOutputReference" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AmiFromInstanceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



