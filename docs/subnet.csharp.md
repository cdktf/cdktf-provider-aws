# `subnet` Submodule <a name="`subnet` Submodule" id="@cdktf/provider-aws.subnet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Subnet <a name="Subnet" id="@cdktf/provider-aws.subnet.Subnet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/subnet aws_subnet}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.subnet.Subnet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Subnet(Construct Scope, string Id, SubnetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig">SubnetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.subnet.SubnetConfig">SubnetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetAssignIpv6AddressOnCreation">ResetAssignIpv6AddressOnCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetAvailabilityZoneId">ResetAvailabilityZoneId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetCidrBlock">ResetCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetCustomerOwnedIpv4Pool">ResetCustomerOwnedIpv4Pool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetEnableDns64">ResetEnableDns64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetEnableResourceNameDnsAaaaRecordOnLaunch">ResetEnableResourceNameDnsAaaaRecordOnLaunch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetEnableResourceNameDnsARecordOnLaunch">ResetEnableResourceNameDnsARecordOnLaunch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetIpv6CidrBlock">ResetIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetIpv6Native">ResetIpv6Native</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetMapCustomerOwnedIpOnLaunch">ResetMapCustomerOwnedIpOnLaunch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetMapPublicIpOnLaunch">ResetMapPublicIpOnLaunch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetOutpostArn">ResetOutpostArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetPrivateDnsHostnameTypeOnLaunch">ResetPrivateDnsHostnameTypeOnLaunch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.subnet.Subnet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.subnet.Subnet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.subnet.Subnet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.subnet.Subnet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.subnet.Subnet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.subnet.Subnet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.subnet.Subnet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.subnet.Subnet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.subnet.Subnet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.subnet.Subnet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.subnet.Subnet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.subnet.Subnet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.subnet.Subnet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.subnet.Subnet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.subnet.Subnet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.subnet.Subnet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.subnet.Subnet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.subnet.Subnet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.subnet.Subnet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.subnet.Subnet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.subnet.Subnet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.subnet.Subnet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.subnet.Subnet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.subnet.Subnet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.subnet.Subnet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.subnet.Subnet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.subnet.Subnet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.subnet.Subnet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.subnet.Subnet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.subnet.Subnet.putTimeouts"></a>

```csharp
private void PutTimeouts(SubnetTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.subnet.Subnet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.subnet.SubnetTimeouts">SubnetTimeouts</a>

---

##### `ResetAssignIpv6AddressOnCreation` <a name="ResetAssignIpv6AddressOnCreation" id="@cdktf/provider-aws.subnet.Subnet.resetAssignIpv6AddressOnCreation"></a>

```csharp
private void ResetAssignIpv6AddressOnCreation()
```

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktf/provider-aws.subnet.Subnet.resetAvailabilityZone"></a>

```csharp
private void ResetAvailabilityZone()
```

##### `ResetAvailabilityZoneId` <a name="ResetAvailabilityZoneId" id="@cdktf/provider-aws.subnet.Subnet.resetAvailabilityZoneId"></a>

```csharp
private void ResetAvailabilityZoneId()
```

##### `ResetCidrBlock` <a name="ResetCidrBlock" id="@cdktf/provider-aws.subnet.Subnet.resetCidrBlock"></a>

```csharp
private void ResetCidrBlock()
```

##### `ResetCustomerOwnedIpv4Pool` <a name="ResetCustomerOwnedIpv4Pool" id="@cdktf/provider-aws.subnet.Subnet.resetCustomerOwnedIpv4Pool"></a>

```csharp
private void ResetCustomerOwnedIpv4Pool()
```

##### `ResetEnableDns64` <a name="ResetEnableDns64" id="@cdktf/provider-aws.subnet.Subnet.resetEnableDns64"></a>

```csharp
private void ResetEnableDns64()
```

##### `ResetEnableResourceNameDnsAaaaRecordOnLaunch` <a name="ResetEnableResourceNameDnsAaaaRecordOnLaunch" id="@cdktf/provider-aws.subnet.Subnet.resetEnableResourceNameDnsAaaaRecordOnLaunch"></a>

```csharp
private void ResetEnableResourceNameDnsAaaaRecordOnLaunch()
```

##### `ResetEnableResourceNameDnsARecordOnLaunch` <a name="ResetEnableResourceNameDnsARecordOnLaunch" id="@cdktf/provider-aws.subnet.Subnet.resetEnableResourceNameDnsARecordOnLaunch"></a>

```csharp
private void ResetEnableResourceNameDnsARecordOnLaunch()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.subnet.Subnet.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpv6CidrBlock` <a name="ResetIpv6CidrBlock" id="@cdktf/provider-aws.subnet.Subnet.resetIpv6CidrBlock"></a>

```csharp
private void ResetIpv6CidrBlock()
```

##### `ResetIpv6Native` <a name="ResetIpv6Native" id="@cdktf/provider-aws.subnet.Subnet.resetIpv6Native"></a>

```csharp
private void ResetIpv6Native()
```

##### `ResetMapCustomerOwnedIpOnLaunch` <a name="ResetMapCustomerOwnedIpOnLaunch" id="@cdktf/provider-aws.subnet.Subnet.resetMapCustomerOwnedIpOnLaunch"></a>

```csharp
private void ResetMapCustomerOwnedIpOnLaunch()
```

##### `ResetMapPublicIpOnLaunch` <a name="ResetMapPublicIpOnLaunch" id="@cdktf/provider-aws.subnet.Subnet.resetMapPublicIpOnLaunch"></a>

```csharp
private void ResetMapPublicIpOnLaunch()
```

##### `ResetOutpostArn` <a name="ResetOutpostArn" id="@cdktf/provider-aws.subnet.Subnet.resetOutpostArn"></a>

```csharp
private void ResetOutpostArn()
```

##### `ResetPrivateDnsHostnameTypeOnLaunch` <a name="ResetPrivateDnsHostnameTypeOnLaunch" id="@cdktf/provider-aws.subnet.Subnet.resetPrivateDnsHostnameTypeOnLaunch"></a>

```csharp
private void ResetPrivateDnsHostnameTypeOnLaunch()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.subnet.Subnet.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.subnet.Subnet.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.subnet.Subnet.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.subnet.Subnet.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Subnet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.subnet.Subnet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.subnet.Subnet.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Subnet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.subnet.Subnet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.subnet.Subnet.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Subnet.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.subnet.Subnet.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.ipv6CidrBlockAssociationId">Ipv6CidrBlockAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference">SubnetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.assignIpv6AddressOnCreationInput">AssignIpv6AddressOnCreationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.availabilityZoneIdInput">AvailabilityZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.cidrBlockInput">CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.customerOwnedIpv4PoolInput">CustomerOwnedIpv4PoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.enableDns64Input">EnableDns64Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.enableResourceNameDnsAaaaRecordOnLaunchInput">EnableResourceNameDnsAaaaRecordOnLaunchInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.enableResourceNameDnsARecordOnLaunchInput">EnableResourceNameDnsARecordOnLaunchInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.ipv6CidrBlockInput">Ipv6CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.ipv6NativeInput">Ipv6NativeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.mapCustomerOwnedIpOnLaunchInput">MapCustomerOwnedIpOnLaunchInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.mapPublicIpOnLaunchInput">MapPublicIpOnLaunchInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.outpostArnInput">OutpostArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.privateDnsHostnameTypeOnLaunchInput">PrivateDnsHostnameTypeOnLaunchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.assignIpv6AddressOnCreation">AssignIpv6AddressOnCreation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.cidrBlock">CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.customerOwnedIpv4Pool">CustomerOwnedIpv4Pool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.enableDns64">EnableDns64</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.enableResourceNameDnsAaaaRecordOnLaunch">EnableResourceNameDnsAaaaRecordOnLaunch</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.enableResourceNameDnsARecordOnLaunch">EnableResourceNameDnsARecordOnLaunch</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.ipv6CidrBlock">Ipv6CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.ipv6Native">Ipv6Native</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.mapCustomerOwnedIpOnLaunch">MapCustomerOwnedIpOnLaunch</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.mapPublicIpOnLaunch">MapPublicIpOnLaunch</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.outpostArn">OutpostArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.privateDnsHostnameTypeOnLaunch">PrivateDnsHostnameTypeOnLaunch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.subnet.Subnet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.subnet.Subnet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.subnet.Subnet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.subnet.Subnet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.subnet.Subnet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.subnet.Subnet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.subnet.Subnet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.subnet.Subnet.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.subnet.Subnet.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.subnet.Subnet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.subnet.Subnet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.subnet.Subnet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.subnet.Subnet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.subnet.Subnet.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.subnet.Subnet.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Ipv6CidrBlockAssociationId`<sup>Required</sup> <a name="Ipv6CidrBlockAssociationId" id="@cdktf/provider-aws.subnet.Subnet.property.ipv6CidrBlockAssociationId"></a>

```csharp
public string Ipv6CidrBlockAssociationId { get; }
```

- *Type:* string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.subnet.Subnet.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.subnet.Subnet.property.timeouts"></a>

```csharp
public SubnetTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference">SubnetTimeoutsOutputReference</a>

---

##### `AssignIpv6AddressOnCreationInput`<sup>Optional</sup> <a name="AssignIpv6AddressOnCreationInput" id="@cdktf/provider-aws.subnet.Subnet.property.assignIpv6AddressOnCreationInput"></a>

```csharp
public object AssignIpv6AddressOnCreationInput { get; }
```

- *Type:* object

---

##### `AvailabilityZoneIdInput`<sup>Optional</sup> <a name="AvailabilityZoneIdInput" id="@cdktf/provider-aws.subnet.Subnet.property.availabilityZoneIdInput"></a>

```csharp
public string AvailabilityZoneIdInput { get; }
```

- *Type:* string

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-aws.subnet.Subnet.property.availabilityZoneInput"></a>

```csharp
public string AvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `CidrBlockInput`<sup>Optional</sup> <a name="CidrBlockInput" id="@cdktf/provider-aws.subnet.Subnet.property.cidrBlockInput"></a>

```csharp
public string CidrBlockInput { get; }
```

- *Type:* string

---

##### `CustomerOwnedIpv4PoolInput`<sup>Optional</sup> <a name="CustomerOwnedIpv4PoolInput" id="@cdktf/provider-aws.subnet.Subnet.property.customerOwnedIpv4PoolInput"></a>

```csharp
public string CustomerOwnedIpv4PoolInput { get; }
```

- *Type:* string

---

##### `EnableDns64Input`<sup>Optional</sup> <a name="EnableDns64Input" id="@cdktf/provider-aws.subnet.Subnet.property.enableDns64Input"></a>

```csharp
public object EnableDns64Input { get; }
```

- *Type:* object

---

##### `EnableResourceNameDnsAaaaRecordOnLaunchInput`<sup>Optional</sup> <a name="EnableResourceNameDnsAaaaRecordOnLaunchInput" id="@cdktf/provider-aws.subnet.Subnet.property.enableResourceNameDnsAaaaRecordOnLaunchInput"></a>

```csharp
public object EnableResourceNameDnsAaaaRecordOnLaunchInput { get; }
```

- *Type:* object

---

##### `EnableResourceNameDnsARecordOnLaunchInput`<sup>Optional</sup> <a name="EnableResourceNameDnsARecordOnLaunchInput" id="@cdktf/provider-aws.subnet.Subnet.property.enableResourceNameDnsARecordOnLaunchInput"></a>

```csharp
public object EnableResourceNameDnsARecordOnLaunchInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.subnet.Subnet.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Ipv6CidrBlockInput`<sup>Optional</sup> <a name="Ipv6CidrBlockInput" id="@cdktf/provider-aws.subnet.Subnet.property.ipv6CidrBlockInput"></a>

```csharp
public string Ipv6CidrBlockInput { get; }
```

- *Type:* string

---

##### `Ipv6NativeInput`<sup>Optional</sup> <a name="Ipv6NativeInput" id="@cdktf/provider-aws.subnet.Subnet.property.ipv6NativeInput"></a>

```csharp
public object Ipv6NativeInput { get; }
```

- *Type:* object

---

##### `MapCustomerOwnedIpOnLaunchInput`<sup>Optional</sup> <a name="MapCustomerOwnedIpOnLaunchInput" id="@cdktf/provider-aws.subnet.Subnet.property.mapCustomerOwnedIpOnLaunchInput"></a>

```csharp
public object MapCustomerOwnedIpOnLaunchInput { get; }
```

- *Type:* object

---

##### `MapPublicIpOnLaunchInput`<sup>Optional</sup> <a name="MapPublicIpOnLaunchInput" id="@cdktf/provider-aws.subnet.Subnet.property.mapPublicIpOnLaunchInput"></a>

```csharp
public object MapPublicIpOnLaunchInput { get; }
```

- *Type:* object

---

##### `OutpostArnInput`<sup>Optional</sup> <a name="OutpostArnInput" id="@cdktf/provider-aws.subnet.Subnet.property.outpostArnInput"></a>

```csharp
public string OutpostArnInput { get; }
```

- *Type:* string

---

##### `PrivateDnsHostnameTypeOnLaunchInput`<sup>Optional</sup> <a name="PrivateDnsHostnameTypeOnLaunchInput" id="@cdktf/provider-aws.subnet.Subnet.property.privateDnsHostnameTypeOnLaunchInput"></a>

```csharp
public string PrivateDnsHostnameTypeOnLaunchInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.subnet.Subnet.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.subnet.Subnet.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.subnet.Subnet.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-aws.subnet.Subnet.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `AssignIpv6AddressOnCreation`<sup>Required</sup> <a name="AssignIpv6AddressOnCreation" id="@cdktf/provider-aws.subnet.Subnet.property.assignIpv6AddressOnCreation"></a>

```csharp
public object AssignIpv6AddressOnCreation { get; }
```

- *Type:* object

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.subnet.Subnet.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `AvailabilityZoneId`<sup>Required</sup> <a name="AvailabilityZoneId" id="@cdktf/provider-aws.subnet.Subnet.property.availabilityZoneId"></a>

```csharp
public string AvailabilityZoneId { get; }
```

- *Type:* string

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="@cdktf/provider-aws.subnet.Subnet.property.cidrBlock"></a>

```csharp
public string CidrBlock { get; }
```

- *Type:* string

---

##### `CustomerOwnedIpv4Pool`<sup>Required</sup> <a name="CustomerOwnedIpv4Pool" id="@cdktf/provider-aws.subnet.Subnet.property.customerOwnedIpv4Pool"></a>

```csharp
public string CustomerOwnedIpv4Pool { get; }
```

- *Type:* string

---

##### `EnableDns64`<sup>Required</sup> <a name="EnableDns64" id="@cdktf/provider-aws.subnet.Subnet.property.enableDns64"></a>

```csharp
public object EnableDns64 { get; }
```

- *Type:* object

---

##### `EnableResourceNameDnsAaaaRecordOnLaunch`<sup>Required</sup> <a name="EnableResourceNameDnsAaaaRecordOnLaunch" id="@cdktf/provider-aws.subnet.Subnet.property.enableResourceNameDnsAaaaRecordOnLaunch"></a>

```csharp
public object EnableResourceNameDnsAaaaRecordOnLaunch { get; }
```

- *Type:* object

---

##### `EnableResourceNameDnsARecordOnLaunch`<sup>Required</sup> <a name="EnableResourceNameDnsARecordOnLaunch" id="@cdktf/provider-aws.subnet.Subnet.property.enableResourceNameDnsARecordOnLaunch"></a>

```csharp
public object EnableResourceNameDnsARecordOnLaunch { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.subnet.Subnet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Ipv6CidrBlock`<sup>Required</sup> <a name="Ipv6CidrBlock" id="@cdktf/provider-aws.subnet.Subnet.property.ipv6CidrBlock"></a>

```csharp
public string Ipv6CidrBlock { get; }
```

- *Type:* string

---

##### `Ipv6Native`<sup>Required</sup> <a name="Ipv6Native" id="@cdktf/provider-aws.subnet.Subnet.property.ipv6Native"></a>

```csharp
public object Ipv6Native { get; }
```

- *Type:* object

---

##### `MapCustomerOwnedIpOnLaunch`<sup>Required</sup> <a name="MapCustomerOwnedIpOnLaunch" id="@cdktf/provider-aws.subnet.Subnet.property.mapCustomerOwnedIpOnLaunch"></a>

```csharp
public object MapCustomerOwnedIpOnLaunch { get; }
```

- *Type:* object

---

##### `MapPublicIpOnLaunch`<sup>Required</sup> <a name="MapPublicIpOnLaunch" id="@cdktf/provider-aws.subnet.Subnet.property.mapPublicIpOnLaunch"></a>

```csharp
public object MapPublicIpOnLaunch { get; }
```

- *Type:* object

---

##### `OutpostArn`<sup>Required</sup> <a name="OutpostArn" id="@cdktf/provider-aws.subnet.Subnet.property.outpostArn"></a>

```csharp
public string OutpostArn { get; }
```

- *Type:* string

---

##### `PrivateDnsHostnameTypeOnLaunch`<sup>Required</sup> <a name="PrivateDnsHostnameTypeOnLaunch" id="@cdktf/provider-aws.subnet.Subnet.property.privateDnsHostnameTypeOnLaunch"></a>

```csharp
public string PrivateDnsHostnameTypeOnLaunch { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.subnet.Subnet.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.subnet.Subnet.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.subnet.Subnet.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.subnet.Subnet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SubnetConfig <a name="SubnetConfig" id="@cdktf/provider-aws.subnet.SubnetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.subnet.SubnetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SubnetConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string VpcId,
    object AssignIpv6AddressOnCreation = null,
    string AvailabilityZone = null,
    string AvailabilityZoneId = null,
    string CidrBlock = null,
    string CustomerOwnedIpv4Pool = null,
    object EnableDns64 = null,
    object EnableResourceNameDnsAaaaRecordOnLaunch = null,
    object EnableResourceNameDnsARecordOnLaunch = null,
    string Id = null,
    string Ipv6CidrBlock = null,
    object Ipv6Native = null,
    object MapCustomerOwnedIpOnLaunch = null,
    object MapPublicIpOnLaunch = null,
    string OutpostArn = null,
    string PrivateDnsHostnameTypeOnLaunch = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    SubnetTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#vpc_id Subnet#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.assignIpv6AddressOnCreation">AssignIpv6AddressOnCreation</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#assign_ipv6_address_on_creation Subnet#assign_ipv6_address_on_creation}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#availability_zone Subnet#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#availability_zone_id Subnet#availability_zone_id}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.cidrBlock">CidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#cidr_block Subnet#cidr_block}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.customerOwnedIpv4Pool">CustomerOwnedIpv4Pool</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#customer_owned_ipv4_pool Subnet#customer_owned_ipv4_pool}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.enableDns64">EnableDns64</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#enable_dns64 Subnet#enable_dns64}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.enableResourceNameDnsAaaaRecordOnLaunch">EnableResourceNameDnsAaaaRecordOnLaunch</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#enable_resource_name_dns_aaaa_record_on_launch Subnet#enable_resource_name_dns_aaaa_record_on_launch}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.enableResourceNameDnsARecordOnLaunch">EnableResourceNameDnsARecordOnLaunch</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#enable_resource_name_dns_a_record_on_launch Subnet#enable_resource_name_dns_a_record_on_launch}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#id Subnet#id}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.ipv6CidrBlock">Ipv6CidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#ipv6_cidr_block Subnet#ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.ipv6Native">Ipv6Native</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#ipv6_native Subnet#ipv6_native}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.mapCustomerOwnedIpOnLaunch">MapCustomerOwnedIpOnLaunch</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#map_customer_owned_ip_on_launch Subnet#map_customer_owned_ip_on_launch}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.mapPublicIpOnLaunch">MapPublicIpOnLaunch</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#map_public_ip_on_launch Subnet#map_public_ip_on_launch}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.outpostArn">OutpostArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#outpost_arn Subnet#outpost_arn}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.privateDnsHostnameTypeOnLaunch">PrivateDnsHostnameTypeOnLaunch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#private_dns_hostname_type_on_launch Subnet#private_dns_hostname_type_on_launch}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#tags Subnet#tags}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#tags_all Subnet#tags_all}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeouts">SubnetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.subnet.SubnetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.subnet.SubnetConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.subnet.SubnetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.subnet.SubnetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.subnet.SubnetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.subnet.SubnetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.subnet.SubnetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.subnet.SubnetConfig.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#vpc_id Subnet#vpc_id}.

---

##### `AssignIpv6AddressOnCreation`<sup>Optional</sup> <a name="AssignIpv6AddressOnCreation" id="@cdktf/provider-aws.subnet.SubnetConfig.property.assignIpv6AddressOnCreation"></a>

```csharp
public object AssignIpv6AddressOnCreation { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#assign_ipv6_address_on_creation Subnet#assign_ipv6_address_on_creation}.

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.subnet.SubnetConfig.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#availability_zone Subnet#availability_zone}.

---

##### `AvailabilityZoneId`<sup>Optional</sup> <a name="AvailabilityZoneId" id="@cdktf/provider-aws.subnet.SubnetConfig.property.availabilityZoneId"></a>

```csharp
public string AvailabilityZoneId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#availability_zone_id Subnet#availability_zone_id}.

---

##### `CidrBlock`<sup>Optional</sup> <a name="CidrBlock" id="@cdktf/provider-aws.subnet.SubnetConfig.property.cidrBlock"></a>

```csharp
public string CidrBlock { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#cidr_block Subnet#cidr_block}.

---

##### `CustomerOwnedIpv4Pool`<sup>Optional</sup> <a name="CustomerOwnedIpv4Pool" id="@cdktf/provider-aws.subnet.SubnetConfig.property.customerOwnedIpv4Pool"></a>

```csharp
public string CustomerOwnedIpv4Pool { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#customer_owned_ipv4_pool Subnet#customer_owned_ipv4_pool}.

---

##### `EnableDns64`<sup>Optional</sup> <a name="EnableDns64" id="@cdktf/provider-aws.subnet.SubnetConfig.property.enableDns64"></a>

```csharp
public object EnableDns64 { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#enable_dns64 Subnet#enable_dns64}.

---

##### `EnableResourceNameDnsAaaaRecordOnLaunch`<sup>Optional</sup> <a name="EnableResourceNameDnsAaaaRecordOnLaunch" id="@cdktf/provider-aws.subnet.SubnetConfig.property.enableResourceNameDnsAaaaRecordOnLaunch"></a>

```csharp
public object EnableResourceNameDnsAaaaRecordOnLaunch { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#enable_resource_name_dns_aaaa_record_on_launch Subnet#enable_resource_name_dns_aaaa_record_on_launch}.

---

##### `EnableResourceNameDnsARecordOnLaunch`<sup>Optional</sup> <a name="EnableResourceNameDnsARecordOnLaunch" id="@cdktf/provider-aws.subnet.SubnetConfig.property.enableResourceNameDnsARecordOnLaunch"></a>

```csharp
public object EnableResourceNameDnsARecordOnLaunch { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#enable_resource_name_dns_a_record_on_launch Subnet#enable_resource_name_dns_a_record_on_launch}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.subnet.SubnetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#id Subnet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ipv6CidrBlock`<sup>Optional</sup> <a name="Ipv6CidrBlock" id="@cdktf/provider-aws.subnet.SubnetConfig.property.ipv6CidrBlock"></a>

```csharp
public string Ipv6CidrBlock { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#ipv6_cidr_block Subnet#ipv6_cidr_block}.

---

##### `Ipv6Native`<sup>Optional</sup> <a name="Ipv6Native" id="@cdktf/provider-aws.subnet.SubnetConfig.property.ipv6Native"></a>

```csharp
public object Ipv6Native { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#ipv6_native Subnet#ipv6_native}.

---

##### `MapCustomerOwnedIpOnLaunch`<sup>Optional</sup> <a name="MapCustomerOwnedIpOnLaunch" id="@cdktf/provider-aws.subnet.SubnetConfig.property.mapCustomerOwnedIpOnLaunch"></a>

```csharp
public object MapCustomerOwnedIpOnLaunch { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#map_customer_owned_ip_on_launch Subnet#map_customer_owned_ip_on_launch}.

---

##### `MapPublicIpOnLaunch`<sup>Optional</sup> <a name="MapPublicIpOnLaunch" id="@cdktf/provider-aws.subnet.SubnetConfig.property.mapPublicIpOnLaunch"></a>

```csharp
public object MapPublicIpOnLaunch { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#map_public_ip_on_launch Subnet#map_public_ip_on_launch}.

---

##### `OutpostArn`<sup>Optional</sup> <a name="OutpostArn" id="@cdktf/provider-aws.subnet.SubnetConfig.property.outpostArn"></a>

```csharp
public string OutpostArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#outpost_arn Subnet#outpost_arn}.

---

##### `PrivateDnsHostnameTypeOnLaunch`<sup>Optional</sup> <a name="PrivateDnsHostnameTypeOnLaunch" id="@cdktf/provider-aws.subnet.SubnetConfig.property.privateDnsHostnameTypeOnLaunch"></a>

```csharp
public string PrivateDnsHostnameTypeOnLaunch { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#private_dns_hostname_type_on_launch Subnet#private_dns_hostname_type_on_launch}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.subnet.SubnetConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#tags Subnet#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.subnet.SubnetConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#tags_all Subnet#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.subnet.SubnetConfig.property.timeouts"></a>

```csharp
public SubnetTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.subnet.SubnetTimeouts">SubnetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#timeouts Subnet#timeouts}

---

### SubnetTimeouts <a name="SubnetTimeouts" id="@cdktf/provider-aws.subnet.SubnetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.subnet.SubnetTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SubnetTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#create Subnet#create}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#delete Subnet#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.subnet.SubnetTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#create Subnet#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.subnet.SubnetTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#delete Subnet#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### SubnetTimeoutsOutputReference <a name="SubnetTimeoutsOutputReference" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SubnetTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



