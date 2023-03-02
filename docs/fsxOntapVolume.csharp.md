# `fsxOntapVolume` Submodule <a name="`fsxOntapVolume` Submodule" id="@cdktf/provider-aws.fsxOntapVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FsxOntapVolume <a name="FsxOntapVolume" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume aws_fsx_ontap_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxOntapVolume(Construct Scope, string Id, FsxOntapVolumeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig">FsxOntapVolumeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig">FsxOntapVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.putTieringPolicy">PutTieringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetSecurityStyle">ResetSecurityStyle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetTieringPolicy">ResetTieringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTieringPolicy` <a name="PutTieringPolicy" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.putTieringPolicy"></a>

```csharp
private void PutTieringPolicy(FsxOntapVolumeTieringPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.putTieringPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy">FsxOntapVolumeTieringPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.putTimeouts"></a>

```csharp
private void PutTimeouts(FsxOntapVolumeTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts">FsxOntapVolumeTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSecurityStyle` <a name="ResetSecurityStyle" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetSecurityStyle"></a>

```csharp
private void ResetSecurityStyle()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTieringPolicy` <a name="ResetTieringPolicy" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetTieringPolicy"></a>

```csharp
private void ResetTieringPolicy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetVolumeType"></a>

```csharp
private void ResetVolumeType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

FsxOntapVolume.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

FsxOntapVolume.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

FsxOntapVolume.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.fileSystemId">FileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.flexcacheEndpointType">FlexcacheEndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.ontapVolumeType">OntapVolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tieringPolicy">TieringPolicy</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference">FsxOntapVolumeTieringPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference">FsxOntapVolumeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.junctionPathInput">JunctionPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.securityStyleInput">SecurityStyleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.sizeInMegabytesInput">SizeInMegabytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.storageEfficiencyEnabledInput">StorageEfficiencyEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.storageVirtualMachineIdInput">StorageVirtualMachineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tieringPolicyInput">TieringPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy">FsxOntapVolumeTieringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.junctionPath">JunctionPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.securityStyle">SecurityStyle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.sizeInMegabytes">SizeInMegabytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.storageEfficiencyEnabled">StorageEfficiencyEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.storageVirtualMachineId">StorageVirtualMachineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.volumeType">VolumeType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.fileSystemId"></a>

```csharp
public string FileSystemId { get; }
```

- *Type:* string

---

##### `FlexcacheEndpointType`<sup>Required</sup> <a name="FlexcacheEndpointType" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.flexcacheEndpointType"></a>

```csharp
public string FlexcacheEndpointType { get; }
```

- *Type:* string

---

##### `OntapVolumeType`<sup>Required</sup> <a name="OntapVolumeType" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.ontapVolumeType"></a>

```csharp
public string OntapVolumeType { get; }
```

- *Type:* string

---

##### `TieringPolicy`<sup>Required</sup> <a name="TieringPolicy" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tieringPolicy"></a>

```csharp
public FsxOntapVolumeTieringPolicyOutputReference TieringPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference">FsxOntapVolumeTieringPolicyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.timeouts"></a>

```csharp
public FsxOntapVolumeTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference">FsxOntapVolumeTimeoutsOutputReference</a>

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `JunctionPathInput`<sup>Optional</sup> <a name="JunctionPathInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.junctionPathInput"></a>

```csharp
public string JunctionPathInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SecurityStyleInput`<sup>Optional</sup> <a name="SecurityStyleInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.securityStyleInput"></a>

```csharp
public string SecurityStyleInput { get; }
```

- *Type:* string

---

##### `SizeInMegabytesInput`<sup>Optional</sup> <a name="SizeInMegabytesInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.sizeInMegabytesInput"></a>

```csharp
public double SizeInMegabytesInput { get; }
```

- *Type:* double

---

##### `StorageEfficiencyEnabledInput`<sup>Optional</sup> <a name="StorageEfficiencyEnabledInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.storageEfficiencyEnabledInput"></a>

```csharp
public object StorageEfficiencyEnabledInput { get; }
```

- *Type:* object

---

##### `StorageVirtualMachineIdInput`<sup>Optional</sup> <a name="StorageVirtualMachineIdInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.storageVirtualMachineIdInput"></a>

```csharp
public string StorageVirtualMachineIdInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TieringPolicyInput`<sup>Optional</sup> <a name="TieringPolicyInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tieringPolicyInput"></a>

```csharp
public FsxOntapVolumeTieringPolicy TieringPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy">FsxOntapVolumeTieringPolicy</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.volumeTypeInput"></a>

```csharp
public string VolumeTypeInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `JunctionPath`<sup>Required</sup> <a name="JunctionPath" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.junctionPath"></a>

```csharp
public string JunctionPath { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SecurityStyle`<sup>Required</sup> <a name="SecurityStyle" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.securityStyle"></a>

```csharp
public string SecurityStyle { get; }
```

- *Type:* string

---

##### `SizeInMegabytes`<sup>Required</sup> <a name="SizeInMegabytes" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.sizeInMegabytes"></a>

```csharp
public double SizeInMegabytes { get; }
```

- *Type:* double

---

##### `StorageEfficiencyEnabled`<sup>Required</sup> <a name="StorageEfficiencyEnabled" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.storageEfficiencyEnabled"></a>

```csharp
public object StorageEfficiencyEnabled { get; }
```

- *Type:* object

---

##### `StorageVirtualMachineId`<sup>Required</sup> <a name="StorageVirtualMachineId" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.storageVirtualMachineId"></a>

```csharp
public string StorageVirtualMachineId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.volumeType"></a>

```csharp
public string VolumeType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FsxOntapVolumeConfig <a name="FsxOntapVolumeConfig" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxOntapVolumeConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string JunctionPath,
    string Name,
    double SizeInMegabytes,
    object StorageEfficiencyEnabled,
    string StorageVirtualMachineId,
    string Id = null,
    string SecurityStyle = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    FsxOntapVolumeTieringPolicy TieringPolicy = null,
    FsxOntapVolumeTimeouts Timeouts = null,
    string VolumeType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.junctionPath">JunctionPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#junction_path FsxOntapVolume#junction_path}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#name FsxOntapVolume#name}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.sizeInMegabytes">SizeInMegabytes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#size_in_megabytes FsxOntapVolume#size_in_megabytes}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.storageEfficiencyEnabled">StorageEfficiencyEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#storage_efficiency_enabled FsxOntapVolume#storage_efficiency_enabled}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.storageVirtualMachineId">StorageVirtualMachineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#storage_virtual_machine_id FsxOntapVolume#storage_virtual_machine_id}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#id FsxOntapVolume#id}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.securityStyle">SecurityStyle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#security_style FsxOntapVolume#security_style}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#tags FsxOntapVolume#tags}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#tags_all FsxOntapVolume#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.tieringPolicy">TieringPolicy</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy">FsxOntapVolumeTieringPolicy</a></code> | tiering_policy block. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts">FsxOntapVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.volumeType">VolumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#volume_type FsxOntapVolume#volume_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `JunctionPath`<sup>Required</sup> <a name="JunctionPath" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.junctionPath"></a>

```csharp
public string JunctionPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#junction_path FsxOntapVolume#junction_path}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#name FsxOntapVolume#name}.

---

##### `SizeInMegabytes`<sup>Required</sup> <a name="SizeInMegabytes" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.sizeInMegabytes"></a>

```csharp
public double SizeInMegabytes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#size_in_megabytes FsxOntapVolume#size_in_megabytes}.

---

##### `StorageEfficiencyEnabled`<sup>Required</sup> <a name="StorageEfficiencyEnabled" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.storageEfficiencyEnabled"></a>

```csharp
public object StorageEfficiencyEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#storage_efficiency_enabled FsxOntapVolume#storage_efficiency_enabled}.

---

##### `StorageVirtualMachineId`<sup>Required</sup> <a name="StorageVirtualMachineId" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.storageVirtualMachineId"></a>

```csharp
public string StorageVirtualMachineId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#storage_virtual_machine_id FsxOntapVolume#storage_virtual_machine_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#id FsxOntapVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SecurityStyle`<sup>Optional</sup> <a name="SecurityStyle" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.securityStyle"></a>

```csharp
public string SecurityStyle { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#security_style FsxOntapVolume#security_style}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#tags FsxOntapVolume#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#tags_all FsxOntapVolume#tags_all}.

---

##### `TieringPolicy`<sup>Optional</sup> <a name="TieringPolicy" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.tieringPolicy"></a>

```csharp
public FsxOntapVolumeTieringPolicy TieringPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy">FsxOntapVolumeTieringPolicy</a>

tiering_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#tiering_policy FsxOntapVolume#tiering_policy}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.timeouts"></a>

```csharp
public FsxOntapVolumeTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts">FsxOntapVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#timeouts FsxOntapVolume#timeouts}

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.volumeType"></a>

```csharp
public string VolumeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#volume_type FsxOntapVolume#volume_type}.

---

### FsxOntapVolumeTieringPolicy <a name="FsxOntapVolumeTieringPolicy" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxOntapVolumeTieringPolicy {
    double CoolingPeriod = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy.property.coolingPeriod">CoolingPeriod</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#cooling_period FsxOntapVolume#cooling_period}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#name FsxOntapVolume#name}. |

---

##### `CoolingPeriod`<sup>Optional</sup> <a name="CoolingPeriod" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy.property.coolingPeriod"></a>

```csharp
public double CoolingPeriod { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#cooling_period FsxOntapVolume#cooling_period}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#name FsxOntapVolume#name}.

---

### FsxOntapVolumeTimeouts <a name="FsxOntapVolumeTimeouts" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxOntapVolumeTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#create FsxOntapVolume#create}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#delete FsxOntapVolume#delete}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#update FsxOntapVolume#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#create FsxOntapVolume#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#delete FsxOntapVolume#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume#update FsxOntapVolume#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FsxOntapVolumeTieringPolicyOutputReference <a name="FsxOntapVolumeTieringPolicyOutputReference" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxOntapVolumeTieringPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.resetCoolingPeriod">ResetCoolingPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCoolingPeriod` <a name="ResetCoolingPeriod" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.resetCoolingPeriod"></a>

```csharp
private void ResetCoolingPeriod()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.coolingPeriodInput">CoolingPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.coolingPeriod">CoolingPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy">FsxOntapVolumeTieringPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CoolingPeriodInput`<sup>Optional</sup> <a name="CoolingPeriodInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.coolingPeriodInput"></a>

```csharp
public double CoolingPeriodInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `CoolingPeriod`<sup>Required</sup> <a name="CoolingPeriod" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.coolingPeriod"></a>

```csharp
public double CoolingPeriod { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.internalValue"></a>

```csharp
public FsxOntapVolumeTieringPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy">FsxOntapVolumeTieringPolicy</a>

---


### FsxOntapVolumeTimeoutsOutputReference <a name="FsxOntapVolumeTimeoutsOutputReference" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxOntapVolumeTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



