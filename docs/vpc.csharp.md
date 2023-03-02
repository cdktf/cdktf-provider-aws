# `vpc` Submodule <a name="`vpc` Submodule" id="@cdktf/provider-aws.vpc"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Vpc <a name="Vpc" id="@cdktf/provider-aws.vpc.Vpc"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc aws_vpc}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpc.Vpc.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Vpc(Construct Scope, string Id, VpcConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.vpc.VpcConfig">VpcConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpc.VpcConfig">VpcConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetAssignGeneratedIpv6CidrBlock">ResetAssignGeneratedIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetCidrBlock">ResetCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetEnableClassiclink">ResetEnableClassiclink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetEnableClassiclinkDnsSupport">ResetEnableClassiclinkDnsSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetEnableDnsHostnames">ResetEnableDnsHostnames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetEnableDnsSupport">ResetEnableDnsSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetEnableNetworkAddressUsageMetrics">ResetEnableNetworkAddressUsageMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetInstanceTenancy">ResetInstanceTenancy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetIpv4IpamPoolId">ResetIpv4IpamPoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetIpv4NetmaskLength">ResetIpv4NetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetIpv6CidrBlock">ResetIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetIpv6CidrBlockNetworkBorderGroup">ResetIpv6CidrBlockNetworkBorderGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetIpv6IpamPoolId">ResetIpv6IpamPoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetIpv6NetmaskLength">ResetIpv6NetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpc.Vpc.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.vpc.Vpc.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.vpc.Vpc.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.vpc.Vpc.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.vpc.Vpc.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.vpc.Vpc.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.vpc.Vpc.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.vpc.Vpc.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.vpc.Vpc.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpc.Vpc.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpc.Vpc.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpc.Vpc.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpc.Vpc.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpc.Vpc.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpc.Vpc.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpc.Vpc.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpc.Vpc.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpc.Vpc.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpc.Vpc.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpc.Vpc.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpc.Vpc.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpc.Vpc.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpc.Vpc.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpc.Vpc.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpc.Vpc.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpc.Vpc.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpc.Vpc.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpc.Vpc.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpc.Vpc.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAssignGeneratedIpv6CidrBlock` <a name="ResetAssignGeneratedIpv6CidrBlock" id="@cdktf/provider-aws.vpc.Vpc.resetAssignGeneratedIpv6CidrBlock"></a>

```csharp
private void ResetAssignGeneratedIpv6CidrBlock()
```

##### `ResetCidrBlock` <a name="ResetCidrBlock" id="@cdktf/provider-aws.vpc.Vpc.resetCidrBlock"></a>

```csharp
private void ResetCidrBlock()
```

##### `ResetEnableClassiclink` <a name="ResetEnableClassiclink" id="@cdktf/provider-aws.vpc.Vpc.resetEnableClassiclink"></a>

```csharp
private void ResetEnableClassiclink()
```

##### `ResetEnableClassiclinkDnsSupport` <a name="ResetEnableClassiclinkDnsSupport" id="@cdktf/provider-aws.vpc.Vpc.resetEnableClassiclinkDnsSupport"></a>

```csharp
private void ResetEnableClassiclinkDnsSupport()
```

##### `ResetEnableDnsHostnames` <a name="ResetEnableDnsHostnames" id="@cdktf/provider-aws.vpc.Vpc.resetEnableDnsHostnames"></a>

```csharp
private void ResetEnableDnsHostnames()
```

##### `ResetEnableDnsSupport` <a name="ResetEnableDnsSupport" id="@cdktf/provider-aws.vpc.Vpc.resetEnableDnsSupport"></a>

```csharp
private void ResetEnableDnsSupport()
```

##### `ResetEnableNetworkAddressUsageMetrics` <a name="ResetEnableNetworkAddressUsageMetrics" id="@cdktf/provider-aws.vpc.Vpc.resetEnableNetworkAddressUsageMetrics"></a>

```csharp
private void ResetEnableNetworkAddressUsageMetrics()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.vpc.Vpc.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstanceTenancy` <a name="ResetInstanceTenancy" id="@cdktf/provider-aws.vpc.Vpc.resetInstanceTenancy"></a>

```csharp
private void ResetInstanceTenancy()
```

##### `ResetIpv4IpamPoolId` <a name="ResetIpv4IpamPoolId" id="@cdktf/provider-aws.vpc.Vpc.resetIpv4IpamPoolId"></a>

```csharp
private void ResetIpv4IpamPoolId()
```

##### `ResetIpv4NetmaskLength` <a name="ResetIpv4NetmaskLength" id="@cdktf/provider-aws.vpc.Vpc.resetIpv4NetmaskLength"></a>

```csharp
private void ResetIpv4NetmaskLength()
```

##### `ResetIpv6CidrBlock` <a name="ResetIpv6CidrBlock" id="@cdktf/provider-aws.vpc.Vpc.resetIpv6CidrBlock"></a>

```csharp
private void ResetIpv6CidrBlock()
```

##### `ResetIpv6CidrBlockNetworkBorderGroup` <a name="ResetIpv6CidrBlockNetworkBorderGroup" id="@cdktf/provider-aws.vpc.Vpc.resetIpv6CidrBlockNetworkBorderGroup"></a>

```csharp
private void ResetIpv6CidrBlockNetworkBorderGroup()
```

##### `ResetIpv6IpamPoolId` <a name="ResetIpv6IpamPoolId" id="@cdktf/provider-aws.vpc.Vpc.resetIpv6IpamPoolId"></a>

```csharp
private void ResetIpv6IpamPoolId()
```

##### `ResetIpv6NetmaskLength` <a name="ResetIpv6NetmaskLength" id="@cdktf/provider-aws.vpc.Vpc.resetIpv6NetmaskLength"></a>

```csharp
private void ResetIpv6NetmaskLength()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.vpc.Vpc.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.vpc.Vpc.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.vpc.Vpc.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Vpc.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpc.Vpc.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.vpc.Vpc.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Vpc.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpc.Vpc.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.vpc.Vpc.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Vpc.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpc.Vpc.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.defaultNetworkAclId">DefaultNetworkAclId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.defaultRouteTableId">DefaultRouteTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.defaultSecurityGroupId">DefaultSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.dhcpOptionsId">DhcpOptionsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv6AssociationId">Ipv6AssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.mainRouteTableId">MainRouteTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.assignGeneratedIpv6CidrBlockInput">AssignGeneratedIpv6CidrBlockInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.cidrBlockInput">CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.enableClassiclinkDnsSupportInput">EnableClassiclinkDnsSupportInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.enableClassiclinkInput">EnableClassiclinkInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.enableDnsHostnamesInput">EnableDnsHostnamesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.enableDnsSupportInput">EnableDnsSupportInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.enableNetworkAddressUsageMetricsInput">EnableNetworkAddressUsageMetricsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.instanceTenancyInput">InstanceTenancyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv4IpamPoolIdInput">Ipv4IpamPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv4NetmaskLengthInput">Ipv4NetmaskLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv6CidrBlockInput">Ipv6CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv6CidrBlockNetworkBorderGroupInput">Ipv6CidrBlockNetworkBorderGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv6IpamPoolIdInput">Ipv6IpamPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv6NetmaskLengthInput">Ipv6NetmaskLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.assignGeneratedIpv6CidrBlock">AssignGeneratedIpv6CidrBlock</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.cidrBlock">CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.enableClassiclink">EnableClassiclink</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.enableClassiclinkDnsSupport">EnableClassiclinkDnsSupport</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.enableDnsHostnames">EnableDnsHostnames</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.enableDnsSupport">EnableDnsSupport</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.enableNetworkAddressUsageMetrics">EnableNetworkAddressUsageMetrics</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.instanceTenancy">InstanceTenancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv4IpamPoolId">Ipv4IpamPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv4NetmaskLength">Ipv4NetmaskLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv6CidrBlock">Ipv6CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv6CidrBlockNetworkBorderGroup">Ipv6CidrBlockNetworkBorderGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv6IpamPoolId">Ipv6IpamPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv6NetmaskLength">Ipv6NetmaskLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.vpc.Vpc.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.vpc.Vpc.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpc.Vpc.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.vpc.Vpc.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.vpc.Vpc.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.vpc.Vpc.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.vpc.Vpc.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpc.Vpc.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpc.Vpc.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpc.Vpc.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpc.Vpc.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpc.Vpc.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpc.Vpc.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpc.Vpc.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.vpc.Vpc.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DefaultNetworkAclId`<sup>Required</sup> <a name="DefaultNetworkAclId" id="@cdktf/provider-aws.vpc.Vpc.property.defaultNetworkAclId"></a>

```csharp
public string DefaultNetworkAclId { get; }
```

- *Type:* string

---

##### `DefaultRouteTableId`<sup>Required</sup> <a name="DefaultRouteTableId" id="@cdktf/provider-aws.vpc.Vpc.property.defaultRouteTableId"></a>

```csharp
public string DefaultRouteTableId { get; }
```

- *Type:* string

---

##### `DefaultSecurityGroupId`<sup>Required</sup> <a name="DefaultSecurityGroupId" id="@cdktf/provider-aws.vpc.Vpc.property.defaultSecurityGroupId"></a>

```csharp
public string DefaultSecurityGroupId { get; }
```

- *Type:* string

---

##### `DhcpOptionsId`<sup>Required</sup> <a name="DhcpOptionsId" id="@cdktf/provider-aws.vpc.Vpc.property.dhcpOptionsId"></a>

```csharp
public string DhcpOptionsId { get; }
```

- *Type:* string

---

##### `Ipv6AssociationId`<sup>Required</sup> <a name="Ipv6AssociationId" id="@cdktf/provider-aws.vpc.Vpc.property.ipv6AssociationId"></a>

```csharp
public string Ipv6AssociationId { get; }
```

- *Type:* string

---

##### `MainRouteTableId`<sup>Required</sup> <a name="MainRouteTableId" id="@cdktf/provider-aws.vpc.Vpc.property.mainRouteTableId"></a>

```csharp
public string MainRouteTableId { get; }
```

- *Type:* string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.vpc.Vpc.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `AssignGeneratedIpv6CidrBlockInput`<sup>Optional</sup> <a name="AssignGeneratedIpv6CidrBlockInput" id="@cdktf/provider-aws.vpc.Vpc.property.assignGeneratedIpv6CidrBlockInput"></a>

```csharp
public object AssignGeneratedIpv6CidrBlockInput { get; }
```

- *Type:* object

---

##### `CidrBlockInput`<sup>Optional</sup> <a name="CidrBlockInput" id="@cdktf/provider-aws.vpc.Vpc.property.cidrBlockInput"></a>

```csharp
public string CidrBlockInput { get; }
```

- *Type:* string

---

##### `EnableClassiclinkDnsSupportInput`<sup>Optional</sup> <a name="EnableClassiclinkDnsSupportInput" id="@cdktf/provider-aws.vpc.Vpc.property.enableClassiclinkDnsSupportInput"></a>

```csharp
public object EnableClassiclinkDnsSupportInput { get; }
```

- *Type:* object

---

##### `EnableClassiclinkInput`<sup>Optional</sup> <a name="EnableClassiclinkInput" id="@cdktf/provider-aws.vpc.Vpc.property.enableClassiclinkInput"></a>

```csharp
public object EnableClassiclinkInput { get; }
```

- *Type:* object

---

##### `EnableDnsHostnamesInput`<sup>Optional</sup> <a name="EnableDnsHostnamesInput" id="@cdktf/provider-aws.vpc.Vpc.property.enableDnsHostnamesInput"></a>

```csharp
public object EnableDnsHostnamesInput { get; }
```

- *Type:* object

---

##### `EnableDnsSupportInput`<sup>Optional</sup> <a name="EnableDnsSupportInput" id="@cdktf/provider-aws.vpc.Vpc.property.enableDnsSupportInput"></a>

```csharp
public object EnableDnsSupportInput { get; }
```

- *Type:* object

---

##### `EnableNetworkAddressUsageMetricsInput`<sup>Optional</sup> <a name="EnableNetworkAddressUsageMetricsInput" id="@cdktf/provider-aws.vpc.Vpc.property.enableNetworkAddressUsageMetricsInput"></a>

```csharp
public object EnableNetworkAddressUsageMetricsInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.vpc.Vpc.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceTenancyInput`<sup>Optional</sup> <a name="InstanceTenancyInput" id="@cdktf/provider-aws.vpc.Vpc.property.instanceTenancyInput"></a>

```csharp
public string InstanceTenancyInput { get; }
```

- *Type:* string

---

##### `Ipv4IpamPoolIdInput`<sup>Optional</sup> <a name="Ipv4IpamPoolIdInput" id="@cdktf/provider-aws.vpc.Vpc.property.ipv4IpamPoolIdInput"></a>

```csharp
public string Ipv4IpamPoolIdInput { get; }
```

- *Type:* string

---

##### `Ipv4NetmaskLengthInput`<sup>Optional</sup> <a name="Ipv4NetmaskLengthInput" id="@cdktf/provider-aws.vpc.Vpc.property.ipv4NetmaskLengthInput"></a>

```csharp
public double Ipv4NetmaskLengthInput { get; }
```

- *Type:* double

---

##### `Ipv6CidrBlockInput`<sup>Optional</sup> <a name="Ipv6CidrBlockInput" id="@cdktf/provider-aws.vpc.Vpc.property.ipv6CidrBlockInput"></a>

```csharp
public string Ipv6CidrBlockInput { get; }
```

- *Type:* string

---

##### `Ipv6CidrBlockNetworkBorderGroupInput`<sup>Optional</sup> <a name="Ipv6CidrBlockNetworkBorderGroupInput" id="@cdktf/provider-aws.vpc.Vpc.property.ipv6CidrBlockNetworkBorderGroupInput"></a>

```csharp
public string Ipv6CidrBlockNetworkBorderGroupInput { get; }
```

- *Type:* string

---

##### `Ipv6IpamPoolIdInput`<sup>Optional</sup> <a name="Ipv6IpamPoolIdInput" id="@cdktf/provider-aws.vpc.Vpc.property.ipv6IpamPoolIdInput"></a>

```csharp
public string Ipv6IpamPoolIdInput { get; }
```

- *Type:* string

---

##### `Ipv6NetmaskLengthInput`<sup>Optional</sup> <a name="Ipv6NetmaskLengthInput" id="@cdktf/provider-aws.vpc.Vpc.property.ipv6NetmaskLengthInput"></a>

```csharp
public double Ipv6NetmaskLengthInput { get; }
```

- *Type:* double

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.vpc.Vpc.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.vpc.Vpc.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AssignGeneratedIpv6CidrBlock`<sup>Required</sup> <a name="AssignGeneratedIpv6CidrBlock" id="@cdktf/provider-aws.vpc.Vpc.property.assignGeneratedIpv6CidrBlock"></a>

```csharp
public object AssignGeneratedIpv6CidrBlock { get; }
```

- *Type:* object

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="@cdktf/provider-aws.vpc.Vpc.property.cidrBlock"></a>

```csharp
public string CidrBlock { get; }
```

- *Type:* string

---

##### `EnableClassiclink`<sup>Required</sup> <a name="EnableClassiclink" id="@cdktf/provider-aws.vpc.Vpc.property.enableClassiclink"></a>

```csharp
public object EnableClassiclink { get; }
```

- *Type:* object

---

##### `EnableClassiclinkDnsSupport`<sup>Required</sup> <a name="EnableClassiclinkDnsSupport" id="@cdktf/provider-aws.vpc.Vpc.property.enableClassiclinkDnsSupport"></a>

```csharp
public object EnableClassiclinkDnsSupport { get; }
```

- *Type:* object

---

##### `EnableDnsHostnames`<sup>Required</sup> <a name="EnableDnsHostnames" id="@cdktf/provider-aws.vpc.Vpc.property.enableDnsHostnames"></a>

```csharp
public object EnableDnsHostnames { get; }
```

- *Type:* object

---

##### `EnableDnsSupport`<sup>Required</sup> <a name="EnableDnsSupport" id="@cdktf/provider-aws.vpc.Vpc.property.enableDnsSupport"></a>

```csharp
public object EnableDnsSupport { get; }
```

- *Type:* object

---

##### `EnableNetworkAddressUsageMetrics`<sup>Required</sup> <a name="EnableNetworkAddressUsageMetrics" id="@cdktf/provider-aws.vpc.Vpc.property.enableNetworkAddressUsageMetrics"></a>

```csharp
public object EnableNetworkAddressUsageMetrics { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpc.Vpc.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceTenancy`<sup>Required</sup> <a name="InstanceTenancy" id="@cdktf/provider-aws.vpc.Vpc.property.instanceTenancy"></a>

```csharp
public string InstanceTenancy { get; }
```

- *Type:* string

---

##### `Ipv4IpamPoolId`<sup>Required</sup> <a name="Ipv4IpamPoolId" id="@cdktf/provider-aws.vpc.Vpc.property.ipv4IpamPoolId"></a>

```csharp
public string Ipv4IpamPoolId { get; }
```

- *Type:* string

---

##### `Ipv4NetmaskLength`<sup>Required</sup> <a name="Ipv4NetmaskLength" id="@cdktf/provider-aws.vpc.Vpc.property.ipv4NetmaskLength"></a>

```csharp
public double Ipv4NetmaskLength { get; }
```

- *Type:* double

---

##### `Ipv6CidrBlock`<sup>Required</sup> <a name="Ipv6CidrBlock" id="@cdktf/provider-aws.vpc.Vpc.property.ipv6CidrBlock"></a>

```csharp
public string Ipv6CidrBlock { get; }
```

- *Type:* string

---

##### `Ipv6CidrBlockNetworkBorderGroup`<sup>Required</sup> <a name="Ipv6CidrBlockNetworkBorderGroup" id="@cdktf/provider-aws.vpc.Vpc.property.ipv6CidrBlockNetworkBorderGroup"></a>

```csharp
public string Ipv6CidrBlockNetworkBorderGroup { get; }
```

- *Type:* string

---

##### `Ipv6IpamPoolId`<sup>Required</sup> <a name="Ipv6IpamPoolId" id="@cdktf/provider-aws.vpc.Vpc.property.ipv6IpamPoolId"></a>

```csharp
public string Ipv6IpamPoolId { get; }
```

- *Type:* string

---

##### `Ipv6NetmaskLength`<sup>Required</sup> <a name="Ipv6NetmaskLength" id="@cdktf/provider-aws.vpc.Vpc.property.ipv6NetmaskLength"></a>

```csharp
public double Ipv6NetmaskLength { get; }
```

- *Type:* double

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.vpc.Vpc.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.vpc.Vpc.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.vpc.Vpc.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcConfig <a name="VpcConfig" id="@cdktf/provider-aws.vpc.VpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpc.VpcConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object AssignGeneratedIpv6CidrBlock = null,
    string CidrBlock = null,
    object EnableClassiclink = null,
    object EnableClassiclinkDnsSupport = null,
    object EnableDnsHostnames = null,
    object EnableDnsSupport = null,
    object EnableNetworkAddressUsageMetrics = null,
    string Id = null,
    string InstanceTenancy = null,
    string Ipv4IpamPoolId = null,
    double Ipv4NetmaskLength = null,
    string Ipv6CidrBlock = null,
    string Ipv6CidrBlockNetworkBorderGroup = null,
    string Ipv6IpamPoolId = null,
    double Ipv6NetmaskLength = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.assignGeneratedIpv6CidrBlock">AssignGeneratedIpv6CidrBlock</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#assign_generated_ipv6_cidr_block Vpc#assign_generated_ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.cidrBlock">CidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#cidr_block Vpc#cidr_block}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.enableClassiclink">EnableClassiclink</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_classiclink Vpc#enable_classiclink}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.enableClassiclinkDnsSupport">EnableClassiclinkDnsSupport</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_classiclink_dns_support Vpc#enable_classiclink_dns_support}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.enableDnsHostnames">EnableDnsHostnames</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_dns_hostnames Vpc#enable_dns_hostnames}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.enableDnsSupport">EnableDnsSupport</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_dns_support Vpc#enable_dns_support}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.enableNetworkAddressUsageMetrics">EnableNetworkAddressUsageMetrics</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_network_address_usage_metrics Vpc#enable_network_address_usage_metrics}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#id Vpc#id}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.instanceTenancy">InstanceTenancy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#instance_tenancy Vpc#instance_tenancy}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.ipv4IpamPoolId">Ipv4IpamPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv4_ipam_pool_id Vpc#ipv4_ipam_pool_id}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.ipv4NetmaskLength">Ipv4NetmaskLength</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv4_netmask_length Vpc#ipv4_netmask_length}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.ipv6CidrBlock">Ipv6CidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv6_cidr_block Vpc#ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.ipv6CidrBlockNetworkBorderGroup">Ipv6CidrBlockNetworkBorderGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv6_cidr_block_network_border_group Vpc#ipv6_cidr_block_network_border_group}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.ipv6IpamPoolId">Ipv6IpamPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv6_ipam_pool_id Vpc#ipv6_ipam_pool_id}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.ipv6NetmaskLength">Ipv6NetmaskLength</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv6_netmask_length Vpc#ipv6_netmask_length}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#tags Vpc#tags}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#tags_all Vpc#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpc.VpcConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpc.VpcConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpc.VpcConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpc.VpcConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpc.VpcConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpc.VpcConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpc.VpcConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AssignGeneratedIpv6CidrBlock`<sup>Optional</sup> <a name="AssignGeneratedIpv6CidrBlock" id="@cdktf/provider-aws.vpc.VpcConfig.property.assignGeneratedIpv6CidrBlock"></a>

```csharp
public object AssignGeneratedIpv6CidrBlock { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#assign_generated_ipv6_cidr_block Vpc#assign_generated_ipv6_cidr_block}.

---

##### `CidrBlock`<sup>Optional</sup> <a name="CidrBlock" id="@cdktf/provider-aws.vpc.VpcConfig.property.cidrBlock"></a>

```csharp
public string CidrBlock { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#cidr_block Vpc#cidr_block}.

---

##### `EnableClassiclink`<sup>Optional</sup> <a name="EnableClassiclink" id="@cdktf/provider-aws.vpc.VpcConfig.property.enableClassiclink"></a>

```csharp
public object EnableClassiclink { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_classiclink Vpc#enable_classiclink}.

---

##### `EnableClassiclinkDnsSupport`<sup>Optional</sup> <a name="EnableClassiclinkDnsSupport" id="@cdktf/provider-aws.vpc.VpcConfig.property.enableClassiclinkDnsSupport"></a>

```csharp
public object EnableClassiclinkDnsSupport { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_classiclink_dns_support Vpc#enable_classiclink_dns_support}.

---

##### `EnableDnsHostnames`<sup>Optional</sup> <a name="EnableDnsHostnames" id="@cdktf/provider-aws.vpc.VpcConfig.property.enableDnsHostnames"></a>

```csharp
public object EnableDnsHostnames { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_dns_hostnames Vpc#enable_dns_hostnames}.

---

##### `EnableDnsSupport`<sup>Optional</sup> <a name="EnableDnsSupport" id="@cdktf/provider-aws.vpc.VpcConfig.property.enableDnsSupport"></a>

```csharp
public object EnableDnsSupport { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_dns_support Vpc#enable_dns_support}.

---

##### `EnableNetworkAddressUsageMetrics`<sup>Optional</sup> <a name="EnableNetworkAddressUsageMetrics" id="@cdktf/provider-aws.vpc.VpcConfig.property.enableNetworkAddressUsageMetrics"></a>

```csharp
public object EnableNetworkAddressUsageMetrics { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_network_address_usage_metrics Vpc#enable_network_address_usage_metrics}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.vpc.VpcConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#id Vpc#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceTenancy`<sup>Optional</sup> <a name="InstanceTenancy" id="@cdktf/provider-aws.vpc.VpcConfig.property.instanceTenancy"></a>

```csharp
public string InstanceTenancy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#instance_tenancy Vpc#instance_tenancy}.

---

##### `Ipv4IpamPoolId`<sup>Optional</sup> <a name="Ipv4IpamPoolId" id="@cdktf/provider-aws.vpc.VpcConfig.property.ipv4IpamPoolId"></a>

```csharp
public string Ipv4IpamPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv4_ipam_pool_id Vpc#ipv4_ipam_pool_id}.

---

##### `Ipv4NetmaskLength`<sup>Optional</sup> <a name="Ipv4NetmaskLength" id="@cdktf/provider-aws.vpc.VpcConfig.property.ipv4NetmaskLength"></a>

```csharp
public double Ipv4NetmaskLength { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv4_netmask_length Vpc#ipv4_netmask_length}.

---

##### `Ipv6CidrBlock`<sup>Optional</sup> <a name="Ipv6CidrBlock" id="@cdktf/provider-aws.vpc.VpcConfig.property.ipv6CidrBlock"></a>

```csharp
public string Ipv6CidrBlock { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv6_cidr_block Vpc#ipv6_cidr_block}.

---

##### `Ipv6CidrBlockNetworkBorderGroup`<sup>Optional</sup> <a name="Ipv6CidrBlockNetworkBorderGroup" id="@cdktf/provider-aws.vpc.VpcConfig.property.ipv6CidrBlockNetworkBorderGroup"></a>

```csharp
public string Ipv6CidrBlockNetworkBorderGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv6_cidr_block_network_border_group Vpc#ipv6_cidr_block_network_border_group}.

---

##### `Ipv6IpamPoolId`<sup>Optional</sup> <a name="Ipv6IpamPoolId" id="@cdktf/provider-aws.vpc.VpcConfig.property.ipv6IpamPoolId"></a>

```csharp
public string Ipv6IpamPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv6_ipam_pool_id Vpc#ipv6_ipam_pool_id}.

---

##### `Ipv6NetmaskLength`<sup>Optional</sup> <a name="Ipv6NetmaskLength" id="@cdktf/provider-aws.vpc.VpcConfig.property.ipv6NetmaskLength"></a>

```csharp
public double Ipv6NetmaskLength { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv6_netmask_length Vpc#ipv6_netmask_length}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.vpc.VpcConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#tags Vpc#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.vpc.VpcConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#tags_all Vpc#tags_all}.

---



