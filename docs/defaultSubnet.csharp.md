# `defaultSubnet` Submodule <a name="`defaultSubnet` Submodule" id="@cdktf/provider-aws.defaultSubnet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DefaultSubnet <a name="DefaultSubnet" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_subnet aws_default_subnet}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DefaultSubnet(Construct Scope, string Id, DefaultSubnetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig">DefaultSubnetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig">DefaultSubnetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetAssignIpv6AddressOnCreation">ResetAssignIpv6AddressOnCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetCustomerOwnedIpv4Pool">ResetCustomerOwnedIpv4Pool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetEnableDns64">ResetEnableDns64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetEnableResourceNameDnsAaaaRecordOnLaunch">ResetEnableResourceNameDnsAaaaRecordOnLaunch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetEnableResourceNameDnsARecordOnLaunch">ResetEnableResourceNameDnsARecordOnLaunch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetIpv6CidrBlock">ResetIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetIpv6Native">ResetIpv6Native</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetMapCustomerOwnedIpOnLaunch">ResetMapCustomerOwnedIpOnLaunch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetMapPublicIpOnLaunch">ResetMapPublicIpOnLaunch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetPrivateDnsHostnameTypeOnLaunch">ResetPrivateDnsHostnameTypeOnLaunch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.putTimeouts"></a>

```csharp
private void PutTimeouts(DefaultSubnetTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeouts">DefaultSubnetTimeouts</a>

---

##### `ResetAssignIpv6AddressOnCreation` <a name="ResetAssignIpv6AddressOnCreation" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetAssignIpv6AddressOnCreation"></a>

```csharp
private void ResetAssignIpv6AddressOnCreation()
```

##### `ResetCustomerOwnedIpv4Pool` <a name="ResetCustomerOwnedIpv4Pool" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetCustomerOwnedIpv4Pool"></a>

```csharp
private void ResetCustomerOwnedIpv4Pool()
```

##### `ResetEnableDns64` <a name="ResetEnableDns64" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetEnableDns64"></a>

```csharp
private void ResetEnableDns64()
```

##### `ResetEnableResourceNameDnsAaaaRecordOnLaunch` <a name="ResetEnableResourceNameDnsAaaaRecordOnLaunch" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetEnableResourceNameDnsAaaaRecordOnLaunch"></a>

```csharp
private void ResetEnableResourceNameDnsAaaaRecordOnLaunch()
```

##### `ResetEnableResourceNameDnsARecordOnLaunch` <a name="ResetEnableResourceNameDnsARecordOnLaunch" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetEnableResourceNameDnsARecordOnLaunch"></a>

```csharp
private void ResetEnableResourceNameDnsARecordOnLaunch()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetForceDestroy"></a>

```csharp
private void ResetForceDestroy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpv6CidrBlock` <a name="ResetIpv6CidrBlock" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetIpv6CidrBlock"></a>

```csharp
private void ResetIpv6CidrBlock()
```

##### `ResetIpv6Native` <a name="ResetIpv6Native" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetIpv6Native"></a>

```csharp
private void ResetIpv6Native()
```

##### `ResetMapCustomerOwnedIpOnLaunch` <a name="ResetMapCustomerOwnedIpOnLaunch" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetMapCustomerOwnedIpOnLaunch"></a>

```csharp
private void ResetMapCustomerOwnedIpOnLaunch()
```

##### `ResetMapPublicIpOnLaunch` <a name="ResetMapPublicIpOnLaunch" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetMapPublicIpOnLaunch"></a>

```csharp
private void ResetMapPublicIpOnLaunch()
```

##### `ResetPrivateDnsHostnameTypeOnLaunch` <a name="ResetPrivateDnsHostnameTypeOnLaunch" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetPrivateDnsHostnameTypeOnLaunch"></a>

```csharp
private void ResetPrivateDnsHostnameTypeOnLaunch()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DefaultSubnet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DefaultSubnet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DefaultSubnet.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.cidrBlock">CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.existingDefaultSubnet">ExistingDefaultSubnet</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.ipv6CidrBlockAssociationId">Ipv6CidrBlockAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.outpostArn">OutpostArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference">DefaultSubnetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.assignIpv6AddressOnCreationInput">AssignIpv6AddressOnCreationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.customerOwnedIpv4PoolInput">CustomerOwnedIpv4PoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.enableDns64Input">EnableDns64Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.enableResourceNameDnsAaaaRecordOnLaunchInput">EnableResourceNameDnsAaaaRecordOnLaunchInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.enableResourceNameDnsARecordOnLaunchInput">EnableResourceNameDnsARecordOnLaunchInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.ipv6CidrBlockInput">Ipv6CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.ipv6NativeInput">Ipv6NativeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.mapCustomerOwnedIpOnLaunchInput">MapCustomerOwnedIpOnLaunchInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.mapPublicIpOnLaunchInput">MapPublicIpOnLaunchInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.privateDnsHostnameTypeOnLaunchInput">PrivateDnsHostnameTypeOnLaunchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.assignIpv6AddressOnCreation">AssignIpv6AddressOnCreation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.customerOwnedIpv4Pool">CustomerOwnedIpv4Pool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.enableDns64">EnableDns64</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.enableResourceNameDnsAaaaRecordOnLaunch">EnableResourceNameDnsAaaaRecordOnLaunch</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.enableResourceNameDnsARecordOnLaunch">EnableResourceNameDnsARecordOnLaunch</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.forceDestroy">ForceDestroy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.ipv6CidrBlock">Ipv6CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.ipv6Native">Ipv6Native</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.mapCustomerOwnedIpOnLaunch">MapCustomerOwnedIpOnLaunch</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.mapPublicIpOnLaunch">MapPublicIpOnLaunch</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.privateDnsHostnameTypeOnLaunch">PrivateDnsHostnameTypeOnLaunch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AvailabilityZoneId`<sup>Required</sup> <a name="AvailabilityZoneId" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.availabilityZoneId"></a>

```csharp
public string AvailabilityZoneId { get; }
```

- *Type:* string

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.cidrBlock"></a>

```csharp
public string CidrBlock { get; }
```

- *Type:* string

---

##### `ExistingDefaultSubnet`<sup>Required</sup> <a name="ExistingDefaultSubnet" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.existingDefaultSubnet"></a>

```csharp
public IResolvable ExistingDefaultSubnet { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Ipv6CidrBlockAssociationId`<sup>Required</sup> <a name="Ipv6CidrBlockAssociationId" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.ipv6CidrBlockAssociationId"></a>

```csharp
public string Ipv6CidrBlockAssociationId { get; }
```

- *Type:* string

---

##### `OutpostArn`<sup>Required</sup> <a name="OutpostArn" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.outpostArn"></a>

```csharp
public string OutpostArn { get; }
```

- *Type:* string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.timeouts"></a>

```csharp
public DefaultSubnetTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference">DefaultSubnetTimeoutsOutputReference</a>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `AssignIpv6AddressOnCreationInput`<sup>Optional</sup> <a name="AssignIpv6AddressOnCreationInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.assignIpv6AddressOnCreationInput"></a>

```csharp
public object AssignIpv6AddressOnCreationInput { get; }
```

- *Type:* object

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.availabilityZoneInput"></a>

```csharp
public string AvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `CustomerOwnedIpv4PoolInput`<sup>Optional</sup> <a name="CustomerOwnedIpv4PoolInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.customerOwnedIpv4PoolInput"></a>

```csharp
public string CustomerOwnedIpv4PoolInput { get; }
```

- *Type:* string

---

##### `EnableDns64Input`<sup>Optional</sup> <a name="EnableDns64Input" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.enableDns64Input"></a>

```csharp
public object EnableDns64Input { get; }
```

- *Type:* object

---

##### `EnableResourceNameDnsAaaaRecordOnLaunchInput`<sup>Optional</sup> <a name="EnableResourceNameDnsAaaaRecordOnLaunchInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.enableResourceNameDnsAaaaRecordOnLaunchInput"></a>

```csharp
public object EnableResourceNameDnsAaaaRecordOnLaunchInput { get; }
```

- *Type:* object

---

##### `EnableResourceNameDnsARecordOnLaunchInput`<sup>Optional</sup> <a name="EnableResourceNameDnsARecordOnLaunchInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.enableResourceNameDnsARecordOnLaunchInput"></a>

```csharp
public object EnableResourceNameDnsARecordOnLaunchInput { get; }
```

- *Type:* object

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.forceDestroyInput"></a>

```csharp
public object ForceDestroyInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Ipv6CidrBlockInput`<sup>Optional</sup> <a name="Ipv6CidrBlockInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.ipv6CidrBlockInput"></a>

```csharp
public string Ipv6CidrBlockInput { get; }
```

- *Type:* string

---

##### `Ipv6NativeInput`<sup>Optional</sup> <a name="Ipv6NativeInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.ipv6NativeInput"></a>

```csharp
public object Ipv6NativeInput { get; }
```

- *Type:* object

---

##### `MapCustomerOwnedIpOnLaunchInput`<sup>Optional</sup> <a name="MapCustomerOwnedIpOnLaunchInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.mapCustomerOwnedIpOnLaunchInput"></a>

```csharp
public object MapCustomerOwnedIpOnLaunchInput { get; }
```

- *Type:* object

---

##### `MapPublicIpOnLaunchInput`<sup>Optional</sup> <a name="MapPublicIpOnLaunchInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.mapPublicIpOnLaunchInput"></a>

```csharp
public object MapPublicIpOnLaunchInput { get; }
```

- *Type:* object

---

##### `PrivateDnsHostnameTypeOnLaunchInput`<sup>Optional</sup> <a name="PrivateDnsHostnameTypeOnLaunchInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.privateDnsHostnameTypeOnLaunchInput"></a>

```csharp
public string PrivateDnsHostnameTypeOnLaunchInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AssignIpv6AddressOnCreation`<sup>Required</sup> <a name="AssignIpv6AddressOnCreation" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.assignIpv6AddressOnCreation"></a>

```csharp
public object AssignIpv6AddressOnCreation { get; }
```

- *Type:* object

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `CustomerOwnedIpv4Pool`<sup>Required</sup> <a name="CustomerOwnedIpv4Pool" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.customerOwnedIpv4Pool"></a>

```csharp
public string CustomerOwnedIpv4Pool { get; }
```

- *Type:* string

---

##### `EnableDns64`<sup>Required</sup> <a name="EnableDns64" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.enableDns64"></a>

```csharp
public object EnableDns64 { get; }
```

- *Type:* object

---

##### `EnableResourceNameDnsAaaaRecordOnLaunch`<sup>Required</sup> <a name="EnableResourceNameDnsAaaaRecordOnLaunch" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.enableResourceNameDnsAaaaRecordOnLaunch"></a>

```csharp
public object EnableResourceNameDnsAaaaRecordOnLaunch { get; }
```

- *Type:* object

---

##### `EnableResourceNameDnsARecordOnLaunch`<sup>Required</sup> <a name="EnableResourceNameDnsARecordOnLaunch" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.enableResourceNameDnsARecordOnLaunch"></a>

```csharp
public object EnableResourceNameDnsARecordOnLaunch { get; }
```

- *Type:* object

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.forceDestroy"></a>

```csharp
public object ForceDestroy { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Ipv6CidrBlock`<sup>Required</sup> <a name="Ipv6CidrBlock" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.ipv6CidrBlock"></a>

```csharp
public string Ipv6CidrBlock { get; }
```

- *Type:* string

---

##### `Ipv6Native`<sup>Required</sup> <a name="Ipv6Native" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.ipv6Native"></a>

```csharp
public object Ipv6Native { get; }
```

- *Type:* object

---

##### `MapCustomerOwnedIpOnLaunch`<sup>Required</sup> <a name="MapCustomerOwnedIpOnLaunch" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.mapCustomerOwnedIpOnLaunch"></a>

```csharp
public object MapCustomerOwnedIpOnLaunch { get; }
```

- *Type:* object

---

##### `MapPublicIpOnLaunch`<sup>Required</sup> <a name="MapPublicIpOnLaunch" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.mapPublicIpOnLaunch"></a>

```csharp
public object MapPublicIpOnLaunch { get; }
```

- *Type:* object

---

##### `PrivateDnsHostnameTypeOnLaunch`<sup>Required</sup> <a name="PrivateDnsHostnameTypeOnLaunch" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.privateDnsHostnameTypeOnLaunch"></a>

```csharp
public string PrivateDnsHostnameTypeOnLaunch { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DefaultSubnetConfig <a name="DefaultSubnetConfig" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DefaultSubnetConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AvailabilityZone,
    object AssignIpv6AddressOnCreation = null,
    string CustomerOwnedIpv4Pool = null,
    object EnableDns64 = null,
    object EnableResourceNameDnsAaaaRecordOnLaunch = null,
    object EnableResourceNameDnsARecordOnLaunch = null,
    object ForceDestroy = null,
    string Id = null,
    string Ipv6CidrBlock = null,
    object Ipv6Native = null,
    object MapCustomerOwnedIpOnLaunch = null,
    object MapPublicIpOnLaunch = null,
    string PrivateDnsHostnameTypeOnLaunch = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    DefaultSubnetTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#availability_zone DefaultSubnet#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.assignIpv6AddressOnCreation">AssignIpv6AddressOnCreation</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#assign_ipv6_address_on_creation DefaultSubnet#assign_ipv6_address_on_creation}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.customerOwnedIpv4Pool">CustomerOwnedIpv4Pool</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#customer_owned_ipv4_pool DefaultSubnet#customer_owned_ipv4_pool}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.enableDns64">EnableDns64</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#enable_dns64 DefaultSubnet#enable_dns64}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.enableResourceNameDnsAaaaRecordOnLaunch">EnableResourceNameDnsAaaaRecordOnLaunch</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#enable_resource_name_dns_aaaa_record_on_launch DefaultSubnet#enable_resource_name_dns_aaaa_record_on_launch}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.enableResourceNameDnsARecordOnLaunch">EnableResourceNameDnsARecordOnLaunch</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#enable_resource_name_dns_a_record_on_launch DefaultSubnet#enable_resource_name_dns_a_record_on_launch}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.forceDestroy">ForceDestroy</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#force_destroy DefaultSubnet#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#id DefaultSubnet#id}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.ipv6CidrBlock">Ipv6CidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#ipv6_cidr_block DefaultSubnet#ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.ipv6Native">Ipv6Native</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#ipv6_native DefaultSubnet#ipv6_native}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.mapCustomerOwnedIpOnLaunch">MapCustomerOwnedIpOnLaunch</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#map_customer_owned_ip_on_launch DefaultSubnet#map_customer_owned_ip_on_launch}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.mapPublicIpOnLaunch">MapPublicIpOnLaunch</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#map_public_ip_on_launch DefaultSubnet#map_public_ip_on_launch}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.privateDnsHostnameTypeOnLaunch">PrivateDnsHostnameTypeOnLaunch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#private_dns_hostname_type_on_launch DefaultSubnet#private_dns_hostname_type_on_launch}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#tags DefaultSubnet#tags}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#tags_all DefaultSubnet#tags_all}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeouts">DefaultSubnetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#availability_zone DefaultSubnet#availability_zone}.

---

##### `AssignIpv6AddressOnCreation`<sup>Optional</sup> <a name="AssignIpv6AddressOnCreation" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.assignIpv6AddressOnCreation"></a>

```csharp
public object AssignIpv6AddressOnCreation { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#assign_ipv6_address_on_creation DefaultSubnet#assign_ipv6_address_on_creation}.

---

##### `CustomerOwnedIpv4Pool`<sup>Optional</sup> <a name="CustomerOwnedIpv4Pool" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.customerOwnedIpv4Pool"></a>

```csharp
public string CustomerOwnedIpv4Pool { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#customer_owned_ipv4_pool DefaultSubnet#customer_owned_ipv4_pool}.

---

##### `EnableDns64`<sup>Optional</sup> <a name="EnableDns64" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.enableDns64"></a>

```csharp
public object EnableDns64 { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#enable_dns64 DefaultSubnet#enable_dns64}.

---

##### `EnableResourceNameDnsAaaaRecordOnLaunch`<sup>Optional</sup> <a name="EnableResourceNameDnsAaaaRecordOnLaunch" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.enableResourceNameDnsAaaaRecordOnLaunch"></a>

```csharp
public object EnableResourceNameDnsAaaaRecordOnLaunch { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#enable_resource_name_dns_aaaa_record_on_launch DefaultSubnet#enable_resource_name_dns_aaaa_record_on_launch}.

---

##### `EnableResourceNameDnsARecordOnLaunch`<sup>Optional</sup> <a name="EnableResourceNameDnsARecordOnLaunch" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.enableResourceNameDnsARecordOnLaunch"></a>

```csharp
public object EnableResourceNameDnsARecordOnLaunch { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#enable_resource_name_dns_a_record_on_launch DefaultSubnet#enable_resource_name_dns_a_record_on_launch}.

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.forceDestroy"></a>

```csharp
public object ForceDestroy { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#force_destroy DefaultSubnet#force_destroy}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#id DefaultSubnet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ipv6CidrBlock`<sup>Optional</sup> <a name="Ipv6CidrBlock" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.ipv6CidrBlock"></a>

```csharp
public string Ipv6CidrBlock { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#ipv6_cidr_block DefaultSubnet#ipv6_cidr_block}.

---

##### `Ipv6Native`<sup>Optional</sup> <a name="Ipv6Native" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.ipv6Native"></a>

```csharp
public object Ipv6Native { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#ipv6_native DefaultSubnet#ipv6_native}.

---

##### `MapCustomerOwnedIpOnLaunch`<sup>Optional</sup> <a name="MapCustomerOwnedIpOnLaunch" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.mapCustomerOwnedIpOnLaunch"></a>

```csharp
public object MapCustomerOwnedIpOnLaunch { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#map_customer_owned_ip_on_launch DefaultSubnet#map_customer_owned_ip_on_launch}.

---

##### `MapPublicIpOnLaunch`<sup>Optional</sup> <a name="MapPublicIpOnLaunch" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.mapPublicIpOnLaunch"></a>

```csharp
public object MapPublicIpOnLaunch { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#map_public_ip_on_launch DefaultSubnet#map_public_ip_on_launch}.

---

##### `PrivateDnsHostnameTypeOnLaunch`<sup>Optional</sup> <a name="PrivateDnsHostnameTypeOnLaunch" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.privateDnsHostnameTypeOnLaunch"></a>

```csharp
public string PrivateDnsHostnameTypeOnLaunch { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#private_dns_hostname_type_on_launch DefaultSubnet#private_dns_hostname_type_on_launch}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#tags DefaultSubnet#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#tags_all DefaultSubnet#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetConfig.property.timeouts"></a>

```csharp
public DefaultSubnetTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeouts">DefaultSubnetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#timeouts DefaultSubnet#timeouts}

---

### DefaultSubnetTimeouts <a name="DefaultSubnetTimeouts" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DefaultSubnetTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#create DefaultSubnet#create}. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#delete DefaultSubnet#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#create DefaultSubnet#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet#delete DefaultSubnet#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DefaultSubnetTimeoutsOutputReference <a name="DefaultSubnetTimeoutsOutputReference" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DefaultSubnetTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



