# `networkInterface` Submodule <a name="`networkInterface` Submodule" id="@cdktf/provider-aws.networkInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkInterface <a name="NetworkInterface" id="@cdktf/provider-aws.networkInterface.NetworkInterface"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/network_interface aws_network_interface}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkInterface(Construct Scope, string Id, NetworkInterfaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig">NetworkInterfaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig">NetworkInterfaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.putAttachment">PutAttachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetAttachment">ResetAttachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetInterfaceType">ResetInterfaceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv4PrefixCount">ResetIpv4PrefixCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv4Prefixes">ResetIpv4Prefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv6AddressCount">ResetIpv6AddressCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv6Addresses">ResetIpv6Addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv6AddressList">ResetIpv6AddressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv6AddressListEnabled">ResetIpv6AddressListEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv6PrefixCount">ResetIpv6PrefixCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv6Prefixes">ResetIpv6Prefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetPrivateIp">ResetPrivateIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetPrivateIpList">ResetPrivateIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetPrivateIpListEnabled">ResetPrivateIpListEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetPrivateIps">ResetPrivateIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetPrivateIpsCount">ResetPrivateIpsCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetSourceDestCheck">ResetSourceDestCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkInterface.NetworkInterface.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.networkInterface.NetworkInterface.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.networkInterface.NetworkInterface.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.networkInterface.NetworkInterface.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.networkInterface.NetworkInterface.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.networkInterface.NetworkInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.networkInterface.NetworkInterface.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.networkInterface.NetworkInterface.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAttachment` <a name="PutAttachment" id="@cdktf/provider-aws.networkInterface.NetworkInterface.putAttachment"></a>

```csharp
private void PutAttachment(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.networkInterface.NetworkInterface.putAttachment.parameter.value"></a>

- *Type:* object

---

##### `ResetAttachment` <a name="ResetAttachment" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetAttachment"></a>

```csharp
private void ResetAttachment()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInterfaceType` <a name="ResetInterfaceType" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetInterfaceType"></a>

```csharp
private void ResetInterfaceType()
```

##### `ResetIpv4PrefixCount` <a name="ResetIpv4PrefixCount" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv4PrefixCount"></a>

```csharp
private void ResetIpv4PrefixCount()
```

##### `ResetIpv4Prefixes` <a name="ResetIpv4Prefixes" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv4Prefixes"></a>

```csharp
private void ResetIpv4Prefixes()
```

##### `ResetIpv6AddressCount` <a name="ResetIpv6AddressCount" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv6AddressCount"></a>

```csharp
private void ResetIpv6AddressCount()
```

##### `ResetIpv6Addresses` <a name="ResetIpv6Addresses" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv6Addresses"></a>

```csharp
private void ResetIpv6Addresses()
```

##### `ResetIpv6AddressList` <a name="ResetIpv6AddressList" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv6AddressList"></a>

```csharp
private void ResetIpv6AddressList()
```

##### `ResetIpv6AddressListEnabled` <a name="ResetIpv6AddressListEnabled" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv6AddressListEnabled"></a>

```csharp
private void ResetIpv6AddressListEnabled()
```

##### `ResetIpv6PrefixCount` <a name="ResetIpv6PrefixCount" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv6PrefixCount"></a>

```csharp
private void ResetIpv6PrefixCount()
```

##### `ResetIpv6Prefixes` <a name="ResetIpv6Prefixes" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv6Prefixes"></a>

```csharp
private void ResetIpv6Prefixes()
```

##### `ResetPrivateIp` <a name="ResetPrivateIp" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetPrivateIp"></a>

```csharp
private void ResetPrivateIp()
```

##### `ResetPrivateIpList` <a name="ResetPrivateIpList" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetPrivateIpList"></a>

```csharp
private void ResetPrivateIpList()
```

##### `ResetPrivateIpListEnabled` <a name="ResetPrivateIpListEnabled" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetPrivateIpListEnabled"></a>

```csharp
private void ResetPrivateIpListEnabled()
```

##### `ResetPrivateIps` <a name="ResetPrivateIps" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetPrivateIps"></a>

```csharp
private void ResetPrivateIps()
```

##### `ResetPrivateIpsCount` <a name="ResetPrivateIpsCount" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetPrivateIpsCount"></a>

```csharp
private void ResetPrivateIpsCount()
```

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetSecurityGroups"></a>

```csharp
private void ResetSecurityGroups()
```

##### `ResetSourceDestCheck` <a name="ResetSourceDestCheck" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetSourceDestCheck"></a>

```csharp
private void ResetSourceDestCheck()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.networkInterface.NetworkInterface.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

NetworkInterface.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.networkInterface.NetworkInterface.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.networkInterface.NetworkInterface.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

NetworkInterface.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.networkInterface.NetworkInterface.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.networkInterface.NetworkInterface.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

NetworkInterface.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.networkInterface.NetworkInterface.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.attachment">Attachment</a></code> | <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList">NetworkInterfaceAttachmentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.macAddress">MacAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.outpostArn">OutpostArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateDnsName">PrivateDnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.attachmentInput">AttachmentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.interfaceTypeInput">InterfaceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv4PrefixCountInput">Ipv4PrefixCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv4PrefixesInput">Ipv4PrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressCountInput">Ipv6AddressCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressesInput">Ipv6AddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressListEnabledInput">Ipv6AddressListEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressListInput">Ipv6AddressListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6PrefixCountInput">Ipv6PrefixCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6PrefixesInput">Ipv6PrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpInput">PrivateIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpListEnabledInput">PrivateIpListEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpListInput">PrivateIpListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpsCountInput">PrivateIpsCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpsInput">PrivateIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.sourceDestCheckInput">SourceDestCheckInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.interfaceType">InterfaceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv4PrefixCount">Ipv4PrefixCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv4Prefixes">Ipv4Prefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressCount">Ipv6AddressCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6Addresses">Ipv6Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressList">Ipv6AddressList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressListEnabled">Ipv6AddressListEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6PrefixCount">Ipv6PrefixCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6Prefixes">Ipv6Prefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIp">PrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpList">PrivateIpList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpListEnabled">PrivateIpListEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIps">PrivateIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpsCount">PrivateIpsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.sourceDestCheck">SourceDestCheck</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Attachment`<sup>Required</sup> <a name="Attachment" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.attachment"></a>

```csharp
public NetworkInterfaceAttachmentList Attachment { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList">NetworkInterfaceAttachmentList</a>

---

##### `MacAddress`<sup>Required</sup> <a name="MacAddress" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.macAddress"></a>

```csharp
public string MacAddress { get; }
```

- *Type:* string

---

##### `OutpostArn`<sup>Required</sup> <a name="OutpostArn" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.outpostArn"></a>

```csharp
public string OutpostArn { get; }
```

- *Type:* string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `PrivateDnsName`<sup>Required</sup> <a name="PrivateDnsName" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateDnsName"></a>

```csharp
public string PrivateDnsName { get; }
```

- *Type:* string

---

##### `AttachmentInput`<sup>Optional</sup> <a name="AttachmentInput" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.attachmentInput"></a>

```csharp
public object AttachmentInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InterfaceTypeInput`<sup>Optional</sup> <a name="InterfaceTypeInput" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.interfaceTypeInput"></a>

```csharp
public string InterfaceTypeInput { get; }
```

- *Type:* string

---

##### `Ipv4PrefixCountInput`<sup>Optional</sup> <a name="Ipv4PrefixCountInput" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv4PrefixCountInput"></a>

```csharp
public double Ipv4PrefixCountInput { get; }
```

- *Type:* double

---

##### `Ipv4PrefixesInput`<sup>Optional</sup> <a name="Ipv4PrefixesInput" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv4PrefixesInput"></a>

```csharp
public string[] Ipv4PrefixesInput { get; }
```

- *Type:* string[]

---

##### `Ipv6AddressCountInput`<sup>Optional</sup> <a name="Ipv6AddressCountInput" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressCountInput"></a>

```csharp
public double Ipv6AddressCountInput { get; }
```

- *Type:* double

---

##### `Ipv6AddressesInput`<sup>Optional</sup> <a name="Ipv6AddressesInput" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressesInput"></a>

```csharp
public string[] Ipv6AddressesInput { get; }
```

- *Type:* string[]

---

##### `Ipv6AddressListEnabledInput`<sup>Optional</sup> <a name="Ipv6AddressListEnabledInput" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressListEnabledInput"></a>

```csharp
public object Ipv6AddressListEnabledInput { get; }
```

- *Type:* object

---

##### `Ipv6AddressListInput`<sup>Optional</sup> <a name="Ipv6AddressListInput" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressListInput"></a>

```csharp
public string[] Ipv6AddressListInput { get; }
```

- *Type:* string[]

---

##### `Ipv6PrefixCountInput`<sup>Optional</sup> <a name="Ipv6PrefixCountInput" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6PrefixCountInput"></a>

```csharp
public double Ipv6PrefixCountInput { get; }
```

- *Type:* double

---

##### `Ipv6PrefixesInput`<sup>Optional</sup> <a name="Ipv6PrefixesInput" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6PrefixesInput"></a>

```csharp
public string[] Ipv6PrefixesInput { get; }
```

- *Type:* string[]

---

##### `PrivateIpInput`<sup>Optional</sup> <a name="PrivateIpInput" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpInput"></a>

```csharp
public string PrivateIpInput { get; }
```

- *Type:* string

---

##### `PrivateIpListEnabledInput`<sup>Optional</sup> <a name="PrivateIpListEnabledInput" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpListEnabledInput"></a>

```csharp
public object PrivateIpListEnabledInput { get; }
```

- *Type:* object

---

##### `PrivateIpListInput`<sup>Optional</sup> <a name="PrivateIpListInput" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpListInput"></a>

```csharp
public string[] PrivateIpListInput { get; }
```

- *Type:* string[]

---

##### `PrivateIpsCountInput`<sup>Optional</sup> <a name="PrivateIpsCountInput" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpsCountInput"></a>

```csharp
public double PrivateIpsCountInput { get; }
```

- *Type:* double

---

##### `PrivateIpsInput`<sup>Optional</sup> <a name="PrivateIpsInput" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpsInput"></a>

```csharp
public string[] PrivateIpsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.securityGroupsInput"></a>

```csharp
public string[] SecurityGroupsInput { get; }
```

- *Type:* string[]

---

##### `SourceDestCheckInput`<sup>Optional</sup> <a name="SourceDestCheckInput" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.sourceDestCheckInput"></a>

```csharp
public object SourceDestCheckInput { get; }
```

- *Type:* object

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InterfaceType`<sup>Required</sup> <a name="InterfaceType" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.interfaceType"></a>

```csharp
public string InterfaceType { get; }
```

- *Type:* string

---

##### `Ipv4PrefixCount`<sup>Required</sup> <a name="Ipv4PrefixCount" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv4PrefixCount"></a>

```csharp
public double Ipv4PrefixCount { get; }
```

- *Type:* double

---

##### `Ipv4Prefixes`<sup>Required</sup> <a name="Ipv4Prefixes" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv4Prefixes"></a>

```csharp
public string[] Ipv4Prefixes { get; }
```

- *Type:* string[]

---

##### `Ipv6AddressCount`<sup>Required</sup> <a name="Ipv6AddressCount" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressCount"></a>

```csharp
public double Ipv6AddressCount { get; }
```

- *Type:* double

---

##### `Ipv6Addresses`<sup>Required</sup> <a name="Ipv6Addresses" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6Addresses"></a>

```csharp
public string[] Ipv6Addresses { get; }
```

- *Type:* string[]

---

##### `Ipv6AddressList`<sup>Required</sup> <a name="Ipv6AddressList" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressList"></a>

```csharp
public string[] Ipv6AddressList { get; }
```

- *Type:* string[]

---

##### `Ipv6AddressListEnabled`<sup>Required</sup> <a name="Ipv6AddressListEnabled" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressListEnabled"></a>

```csharp
public object Ipv6AddressListEnabled { get; }
```

- *Type:* object

---

##### `Ipv6PrefixCount`<sup>Required</sup> <a name="Ipv6PrefixCount" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6PrefixCount"></a>

```csharp
public double Ipv6PrefixCount { get; }
```

- *Type:* double

---

##### `Ipv6Prefixes`<sup>Required</sup> <a name="Ipv6Prefixes" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6Prefixes"></a>

```csharp
public string[] Ipv6Prefixes { get; }
```

- *Type:* string[]

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIp"></a>

```csharp
public string PrivateIp { get; }
```

- *Type:* string

---

##### `PrivateIpList`<sup>Required</sup> <a name="PrivateIpList" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpList"></a>

```csharp
public string[] PrivateIpList { get; }
```

- *Type:* string[]

---

##### `PrivateIpListEnabled`<sup>Required</sup> <a name="PrivateIpListEnabled" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpListEnabled"></a>

```csharp
public object PrivateIpListEnabled { get; }
```

- *Type:* object

---

##### `PrivateIps`<sup>Required</sup> <a name="PrivateIps" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIps"></a>

```csharp
public string[] PrivateIps { get; }
```

- *Type:* string[]

---

##### `PrivateIpsCount`<sup>Required</sup> <a name="PrivateIpsCount" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpsCount"></a>

```csharp
public double PrivateIpsCount { get; }
```

- *Type:* double

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; }
```

- *Type:* string[]

---

##### `SourceDestCheck`<sup>Required</sup> <a name="SourceDestCheck" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.sourceDestCheck"></a>

```csharp
public object SourceDestCheck { get; }
```

- *Type:* object

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkInterfaceAttachment <a name="NetworkInterfaceAttachment" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkInterfaceAttachment {
    double DeviceIndex,
    string Instance
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachment.property.deviceIndex">DeviceIndex</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#device_index NetworkInterface#device_index}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachment.property.instance">Instance</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#instance NetworkInterface#instance}. |

---

##### `DeviceIndex`<sup>Required</sup> <a name="DeviceIndex" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachment.property.deviceIndex"></a>

```csharp
public double DeviceIndex { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#device_index NetworkInterface#device_index}.

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachment.property.instance"></a>

```csharp
public string Instance { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#instance NetworkInterface#instance}.

---

### NetworkInterfaceConfig <a name="NetworkInterfaceConfig" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkInterfaceConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string SubnetId,
    object Attachment = null,
    string Description = null,
    string Id = null,
    string InterfaceType = null,
    double Ipv4PrefixCount = null,
    string[] Ipv4Prefixes = null,
    double Ipv6AddressCount = null,
    string[] Ipv6Addresses = null,
    string[] Ipv6AddressList = null,
    object Ipv6AddressListEnabled = null,
    double Ipv6PrefixCount = null,
    string[] Ipv6Prefixes = null,
    string PrivateIp = null,
    string[] PrivateIpList = null,
    object PrivateIpListEnabled = null,
    string[] PrivateIps = null,
    double PrivateIpsCount = null,
    string[] SecurityGroups = null,
    object SourceDestCheck = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#subnet_id NetworkInterface#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.attachment">Attachment</a></code> | <code>object</code> | attachment block. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#description NetworkInterface#description}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#id NetworkInterface#id}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.interfaceType">InterfaceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#interface_type NetworkInterface#interface_type}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv4PrefixCount">Ipv4PrefixCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv4_prefix_count NetworkInterface#ipv4_prefix_count}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv4Prefixes">Ipv4Prefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv4_prefixes NetworkInterface#ipv4_prefixes}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6AddressCount">Ipv6AddressCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_address_count NetworkInterface#ipv6_address_count}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6Addresses">Ipv6Addresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_addresses NetworkInterface#ipv6_addresses}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6AddressList">Ipv6AddressList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_address_list NetworkInterface#ipv6_address_list}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6AddressListEnabled">Ipv6AddressListEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_address_list_enabled NetworkInterface#ipv6_address_list_enabled}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6PrefixCount">Ipv6PrefixCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_prefix_count NetworkInterface#ipv6_prefix_count}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6Prefixes">Ipv6Prefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_prefixes NetworkInterface#ipv6_prefixes}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIp">PrivateIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#private_ip NetworkInterface#private_ip}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIpList">PrivateIpList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#private_ip_list NetworkInterface#private_ip_list}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIpListEnabled">PrivateIpListEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#private_ip_list_enabled NetworkInterface#private_ip_list_enabled}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIps">PrivateIps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#private_ips NetworkInterface#private_ips}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIpsCount">PrivateIpsCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#private_ips_count NetworkInterface#private_ips_count}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#security_groups NetworkInterface#security_groups}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.sourceDestCheck">SourceDestCheck</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#source_dest_check NetworkInterface#source_dest_check}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#tags NetworkInterface#tags}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#tags_all NetworkInterface#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#subnet_id NetworkInterface#subnet_id}.

---

##### `Attachment`<sup>Optional</sup> <a name="Attachment" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.attachment"></a>

```csharp
public object Attachment { get; set; }
```

- *Type:* object

attachment block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#attachment NetworkInterface#attachment}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#description NetworkInterface#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#id NetworkInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InterfaceType`<sup>Optional</sup> <a name="InterfaceType" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.interfaceType"></a>

```csharp
public string InterfaceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#interface_type NetworkInterface#interface_type}.

---

##### `Ipv4PrefixCount`<sup>Optional</sup> <a name="Ipv4PrefixCount" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv4PrefixCount"></a>

```csharp
public double Ipv4PrefixCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv4_prefix_count NetworkInterface#ipv4_prefix_count}.

---

##### `Ipv4Prefixes`<sup>Optional</sup> <a name="Ipv4Prefixes" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv4Prefixes"></a>

```csharp
public string[] Ipv4Prefixes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv4_prefixes NetworkInterface#ipv4_prefixes}.

---

##### `Ipv6AddressCount`<sup>Optional</sup> <a name="Ipv6AddressCount" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6AddressCount"></a>

```csharp
public double Ipv6AddressCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_address_count NetworkInterface#ipv6_address_count}.

---

##### `Ipv6Addresses`<sup>Optional</sup> <a name="Ipv6Addresses" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6Addresses"></a>

```csharp
public string[] Ipv6Addresses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_addresses NetworkInterface#ipv6_addresses}.

---

##### `Ipv6AddressList`<sup>Optional</sup> <a name="Ipv6AddressList" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6AddressList"></a>

```csharp
public string[] Ipv6AddressList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_address_list NetworkInterface#ipv6_address_list}.

---

##### `Ipv6AddressListEnabled`<sup>Optional</sup> <a name="Ipv6AddressListEnabled" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6AddressListEnabled"></a>

```csharp
public object Ipv6AddressListEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_address_list_enabled NetworkInterface#ipv6_address_list_enabled}.

---

##### `Ipv6PrefixCount`<sup>Optional</sup> <a name="Ipv6PrefixCount" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6PrefixCount"></a>

```csharp
public double Ipv6PrefixCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_prefix_count NetworkInterface#ipv6_prefix_count}.

---

##### `Ipv6Prefixes`<sup>Optional</sup> <a name="Ipv6Prefixes" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6Prefixes"></a>

```csharp
public string[] Ipv6Prefixes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_prefixes NetworkInterface#ipv6_prefixes}.

---

##### `PrivateIp`<sup>Optional</sup> <a name="PrivateIp" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIp"></a>

```csharp
public string PrivateIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#private_ip NetworkInterface#private_ip}.

---

##### `PrivateIpList`<sup>Optional</sup> <a name="PrivateIpList" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIpList"></a>

```csharp
public string[] PrivateIpList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#private_ip_list NetworkInterface#private_ip_list}.

---

##### `PrivateIpListEnabled`<sup>Optional</sup> <a name="PrivateIpListEnabled" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIpListEnabled"></a>

```csharp
public object PrivateIpListEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#private_ip_list_enabled NetworkInterface#private_ip_list_enabled}.

---

##### `PrivateIps`<sup>Optional</sup> <a name="PrivateIps" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIps"></a>

```csharp
public string[] PrivateIps { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#private_ips NetworkInterface#private_ips}.

---

##### `PrivateIpsCount`<sup>Optional</sup> <a name="PrivateIpsCount" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIpsCount"></a>

```csharp
public double PrivateIpsCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#private_ips_count NetworkInterface#private_ips_count}.

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#security_groups NetworkInterface#security_groups}.

---

##### `SourceDestCheck`<sup>Optional</sup> <a name="SourceDestCheck" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.sourceDestCheck"></a>

```csharp
public object SourceDestCheck { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#source_dest_check NetworkInterface#source_dest_check}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#tags NetworkInterface#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#tags_all NetworkInterface#tags_all}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkInterfaceAttachmentList <a name="NetworkInterfaceAttachmentList" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkInterfaceAttachmentList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.get"></a>

```csharp
private NetworkInterfaceAttachmentOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NetworkInterfaceAttachmentOutputReference <a name="NetworkInterfaceAttachmentOutputReference" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkInterfaceAttachmentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.attachmentId">AttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.deviceIndexInput">DeviceIndexInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.instanceInput">InstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.deviceIndex">DeviceIndex</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.instance">Instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttachmentId`<sup>Required</sup> <a name="AttachmentId" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.attachmentId"></a>

```csharp
public string AttachmentId { get; }
```

- *Type:* string

---

##### `DeviceIndexInput`<sup>Optional</sup> <a name="DeviceIndexInput" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.deviceIndexInput"></a>

```csharp
public double DeviceIndexInput { get; }
```

- *Type:* double

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.instanceInput"></a>

```csharp
public string InstanceInput { get; }
```

- *Type:* string

---

##### `DeviceIndex`<sup>Required</sup> <a name="DeviceIndex" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.deviceIndex"></a>

```csharp
public double DeviceIndex { get; }
```

- *Type:* double

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.instance"></a>

```csharp
public string Instance { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



