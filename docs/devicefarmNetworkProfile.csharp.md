# `devicefarmNetworkProfile` Submodule <a name="`devicefarmNetworkProfile` Submodule" id="@cdktf/provider-aws.devicefarmNetworkProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevicefarmNetworkProfile <a name="DevicefarmNetworkProfile" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile aws_devicefarm_network_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DevicefarmNetworkProfile(Construct Scope, string Id, DevicefarmNetworkProfileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig">DevicefarmNetworkProfileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig">DevicefarmNetworkProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDownlinkBandwidthBits">ResetDownlinkBandwidthBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDownlinkDelayMs">ResetDownlinkDelayMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDownlinkJitterMs">ResetDownlinkJitterMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDownlinkLossPercent">ResetDownlinkLossPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetUplinkBandwidthBits">ResetUplinkBandwidthBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetUplinkDelayMs">ResetUplinkDelayMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetUplinkJitterMs">ResetUplinkJitterMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetUplinkLossPercent">ResetUplinkLossPercent</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDownlinkBandwidthBits` <a name="ResetDownlinkBandwidthBits" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDownlinkBandwidthBits"></a>

```csharp
private void ResetDownlinkBandwidthBits()
```

##### `ResetDownlinkDelayMs` <a name="ResetDownlinkDelayMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDownlinkDelayMs"></a>

```csharp
private void ResetDownlinkDelayMs()
```

##### `ResetDownlinkJitterMs` <a name="ResetDownlinkJitterMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDownlinkJitterMs"></a>

```csharp
private void ResetDownlinkJitterMs()
```

##### `ResetDownlinkLossPercent` <a name="ResetDownlinkLossPercent" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDownlinkLossPercent"></a>

```csharp
private void ResetDownlinkLossPercent()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetUplinkBandwidthBits` <a name="ResetUplinkBandwidthBits" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetUplinkBandwidthBits"></a>

```csharp
private void ResetUplinkBandwidthBits()
```

##### `ResetUplinkDelayMs` <a name="ResetUplinkDelayMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetUplinkDelayMs"></a>

```csharp
private void ResetUplinkDelayMs()
```

##### `ResetUplinkJitterMs` <a name="ResetUplinkJitterMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetUplinkJitterMs"></a>

```csharp
private void ResetUplinkJitterMs()
```

##### `ResetUplinkLossPercent` <a name="ResetUplinkLossPercent" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetUplinkLossPercent"></a>

```csharp
private void ResetUplinkLossPercent()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DevicefarmNetworkProfile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DevicefarmNetworkProfile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DevicefarmNetworkProfile.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkBandwidthBitsInput">DownlinkBandwidthBitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkDelayMsInput">DownlinkDelayMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkJitterMsInput">DownlinkJitterMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkLossPercentInput">DownlinkLossPercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.projectArnInput">ProjectArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkBandwidthBitsInput">UplinkBandwidthBitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkDelayMsInput">UplinkDelayMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkJitterMsInput">UplinkJitterMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkLossPercentInput">UplinkLossPercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkBandwidthBits">DownlinkBandwidthBits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkDelayMs">DownlinkDelayMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkJitterMs">DownlinkJitterMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkLossPercent">DownlinkLossPercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.projectArn">ProjectArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkBandwidthBits">UplinkBandwidthBits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkDelayMs">UplinkDelayMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkJitterMs">UplinkJitterMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkLossPercent">UplinkLossPercent</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DownlinkBandwidthBitsInput`<sup>Optional</sup> <a name="DownlinkBandwidthBitsInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkBandwidthBitsInput"></a>

```csharp
public double DownlinkBandwidthBitsInput { get; }
```

- *Type:* double

---

##### `DownlinkDelayMsInput`<sup>Optional</sup> <a name="DownlinkDelayMsInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkDelayMsInput"></a>

```csharp
public double DownlinkDelayMsInput { get; }
```

- *Type:* double

---

##### `DownlinkJitterMsInput`<sup>Optional</sup> <a name="DownlinkJitterMsInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkJitterMsInput"></a>

```csharp
public double DownlinkJitterMsInput { get; }
```

- *Type:* double

---

##### `DownlinkLossPercentInput`<sup>Optional</sup> <a name="DownlinkLossPercentInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkLossPercentInput"></a>

```csharp
public double DownlinkLossPercentInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectArnInput`<sup>Optional</sup> <a name="ProjectArnInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.projectArnInput"></a>

```csharp
public string ProjectArnInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UplinkBandwidthBitsInput`<sup>Optional</sup> <a name="UplinkBandwidthBitsInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkBandwidthBitsInput"></a>

```csharp
public double UplinkBandwidthBitsInput { get; }
```

- *Type:* double

---

##### `UplinkDelayMsInput`<sup>Optional</sup> <a name="UplinkDelayMsInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkDelayMsInput"></a>

```csharp
public double UplinkDelayMsInput { get; }
```

- *Type:* double

---

##### `UplinkJitterMsInput`<sup>Optional</sup> <a name="UplinkJitterMsInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkJitterMsInput"></a>

```csharp
public double UplinkJitterMsInput { get; }
```

- *Type:* double

---

##### `UplinkLossPercentInput`<sup>Optional</sup> <a name="UplinkLossPercentInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkLossPercentInput"></a>

```csharp
public double UplinkLossPercentInput { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DownlinkBandwidthBits`<sup>Required</sup> <a name="DownlinkBandwidthBits" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkBandwidthBits"></a>

```csharp
public double DownlinkBandwidthBits { get; }
```

- *Type:* double

---

##### `DownlinkDelayMs`<sup>Required</sup> <a name="DownlinkDelayMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkDelayMs"></a>

```csharp
public double DownlinkDelayMs { get; }
```

- *Type:* double

---

##### `DownlinkJitterMs`<sup>Required</sup> <a name="DownlinkJitterMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkJitterMs"></a>

```csharp
public double DownlinkJitterMs { get; }
```

- *Type:* double

---

##### `DownlinkLossPercent`<sup>Required</sup> <a name="DownlinkLossPercent" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkLossPercent"></a>

```csharp
public double DownlinkLossPercent { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProjectArn`<sup>Required</sup> <a name="ProjectArn" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.projectArn"></a>

```csharp
public string ProjectArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UplinkBandwidthBits`<sup>Required</sup> <a name="UplinkBandwidthBits" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkBandwidthBits"></a>

```csharp
public double UplinkBandwidthBits { get; }
```

- *Type:* double

---

##### `UplinkDelayMs`<sup>Required</sup> <a name="UplinkDelayMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkDelayMs"></a>

```csharp
public double UplinkDelayMs { get; }
```

- *Type:* double

---

##### `UplinkJitterMs`<sup>Required</sup> <a name="UplinkJitterMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkJitterMs"></a>

```csharp
public double UplinkJitterMs { get; }
```

- *Type:* double

---

##### `UplinkLossPercent`<sup>Required</sup> <a name="UplinkLossPercent" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkLossPercent"></a>

```csharp
public double UplinkLossPercent { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DevicefarmNetworkProfileConfig <a name="DevicefarmNetworkProfileConfig" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DevicefarmNetworkProfileConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string ProjectArn,
    string Description = null,
    double DownlinkBandwidthBits = null,
    double DownlinkDelayMs = null,
    double DownlinkJitterMs = null,
    double DownlinkLossPercent = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    string Type = null,
    double UplinkBandwidthBits = null,
    double UplinkDelayMs = null,
    double UplinkJitterMs = null,
    double UplinkLossPercent = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#name DevicefarmNetworkProfile#name}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.projectArn">ProjectArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#project_arn DevicefarmNetworkProfile#project_arn}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#description DevicefarmNetworkProfile#description}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.downlinkBandwidthBits">DownlinkBandwidthBits</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_bandwidth_bits DevicefarmNetworkProfile#downlink_bandwidth_bits}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.downlinkDelayMs">DownlinkDelayMs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_delay_ms DevicefarmNetworkProfile#downlink_delay_ms}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.downlinkJitterMs">DownlinkJitterMs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_jitter_ms DevicefarmNetworkProfile#downlink_jitter_ms}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.downlinkLossPercent">DownlinkLossPercent</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_loss_percent DevicefarmNetworkProfile#downlink_loss_percent}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#id DevicefarmNetworkProfile#id}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#tags DevicefarmNetworkProfile#tags}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#tags_all DevicefarmNetworkProfile#tags_all}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#type DevicefarmNetworkProfile#type}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.uplinkBandwidthBits">UplinkBandwidthBits</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_bandwidth_bits DevicefarmNetworkProfile#uplink_bandwidth_bits}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.uplinkDelayMs">UplinkDelayMs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_delay_ms DevicefarmNetworkProfile#uplink_delay_ms}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.uplinkJitterMs">UplinkJitterMs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_jitter_ms DevicefarmNetworkProfile#uplink_jitter_ms}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.uplinkLossPercent">UplinkLossPercent</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_loss_percent DevicefarmNetworkProfile#uplink_loss_percent}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#name DevicefarmNetworkProfile#name}.

---

##### `ProjectArn`<sup>Required</sup> <a name="ProjectArn" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.projectArn"></a>

```csharp
public string ProjectArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#project_arn DevicefarmNetworkProfile#project_arn}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#description DevicefarmNetworkProfile#description}.

---

##### `DownlinkBandwidthBits`<sup>Optional</sup> <a name="DownlinkBandwidthBits" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.downlinkBandwidthBits"></a>

```csharp
public double DownlinkBandwidthBits { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_bandwidth_bits DevicefarmNetworkProfile#downlink_bandwidth_bits}.

---

##### `DownlinkDelayMs`<sup>Optional</sup> <a name="DownlinkDelayMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.downlinkDelayMs"></a>

```csharp
public double DownlinkDelayMs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_delay_ms DevicefarmNetworkProfile#downlink_delay_ms}.

---

##### `DownlinkJitterMs`<sup>Optional</sup> <a name="DownlinkJitterMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.downlinkJitterMs"></a>

```csharp
public double DownlinkJitterMs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_jitter_ms DevicefarmNetworkProfile#downlink_jitter_ms}.

---

##### `DownlinkLossPercent`<sup>Optional</sup> <a name="DownlinkLossPercent" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.downlinkLossPercent"></a>

```csharp
public double DownlinkLossPercent { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_loss_percent DevicefarmNetworkProfile#downlink_loss_percent}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#id DevicefarmNetworkProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#tags DevicefarmNetworkProfile#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#tags_all DevicefarmNetworkProfile#tags_all}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#type DevicefarmNetworkProfile#type}.

---

##### `UplinkBandwidthBits`<sup>Optional</sup> <a name="UplinkBandwidthBits" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.uplinkBandwidthBits"></a>

```csharp
public double UplinkBandwidthBits { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_bandwidth_bits DevicefarmNetworkProfile#uplink_bandwidth_bits}.

---

##### `UplinkDelayMs`<sup>Optional</sup> <a name="UplinkDelayMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.uplinkDelayMs"></a>

```csharp
public double UplinkDelayMs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_delay_ms DevicefarmNetworkProfile#uplink_delay_ms}.

---

##### `UplinkJitterMs`<sup>Optional</sup> <a name="UplinkJitterMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.uplinkJitterMs"></a>

```csharp
public double UplinkJitterMs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_jitter_ms DevicefarmNetworkProfile#uplink_jitter_ms}.

---

##### `UplinkLossPercent`<sup>Optional</sup> <a name="UplinkLossPercent" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.uplinkLossPercent"></a>

```csharp
public double UplinkLossPercent { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_loss_percent DevicefarmNetworkProfile#uplink_loss_percent}.

---



