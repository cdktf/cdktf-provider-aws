# `vpcIpamPoolCidrAllocation` Submodule <a name="`vpcIpamPoolCidrAllocation` Submodule" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcIpamPoolCidrAllocation <a name="VpcIpamPoolCidrAllocation" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr_allocation aws_vpc_ipam_pool_cidr_allocation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcIpamPoolCidrAllocation(Construct Scope, string Id, VpcIpamPoolCidrAllocationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig">VpcIpamPoolCidrAllocationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig">VpcIpamPoolCidrAllocationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.resetCidr">ResetCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.resetDisallowedCidrs">ResetDisallowedCidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.resetNetmaskLength">ResetNetmaskLength</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetCidr` <a name="ResetCidr" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.resetCidr"></a>

```csharp
private void ResetCidr()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisallowedCidrs` <a name="ResetDisallowedCidrs" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.resetDisallowedCidrs"></a>

```csharp
private void ResetDisallowedCidrs()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNetmaskLength` <a name="ResetNetmaskLength" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.resetNetmaskLength"></a>

```csharp
private void ResetNetmaskLength()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpcIpamPoolCidrAllocation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpcIpamPoolCidrAllocation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpcIpamPoolCidrAllocation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.ipamPoolAllocationId">IpamPoolAllocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.resourceOwner">ResourceOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.cidrInput">CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.disallowedCidrsInput">DisallowedCidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.ipamPoolIdInput">IpamPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.netmaskLengthInput">NetmaskLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.disallowedCidrs">DisallowedCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.ipamPoolId">IpamPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.netmaskLength">NetmaskLength</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `IpamPoolAllocationId`<sup>Required</sup> <a name="IpamPoolAllocationId" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.ipamPoolAllocationId"></a>

```csharp
public string IpamPoolAllocationId { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `ResourceOwner`<sup>Required</sup> <a name="ResourceOwner" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.resourceOwner"></a>

```csharp
public string ResourceOwner { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `CidrInput`<sup>Optional</sup> <a name="CidrInput" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.cidrInput"></a>

```csharp
public string CidrInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisallowedCidrsInput`<sup>Optional</sup> <a name="DisallowedCidrsInput" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.disallowedCidrsInput"></a>

```csharp
public string[] DisallowedCidrsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpamPoolIdInput`<sup>Optional</sup> <a name="IpamPoolIdInput" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.ipamPoolIdInput"></a>

```csharp
public string IpamPoolIdInput { get; }
```

- *Type:* string

---

##### `NetmaskLengthInput`<sup>Optional</sup> <a name="NetmaskLengthInput" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.netmaskLengthInput"></a>

```csharp
public double NetmaskLengthInput { get; }
```

- *Type:* double

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisallowedCidrs`<sup>Required</sup> <a name="DisallowedCidrs" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.disallowedCidrs"></a>

```csharp
public string[] DisallowedCidrs { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpamPoolId`<sup>Required</sup> <a name="IpamPoolId" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.ipamPoolId"></a>

```csharp
public string IpamPoolId { get; }
```

- *Type:* string

---

##### `NetmaskLength`<sup>Required</sup> <a name="NetmaskLength" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.netmaskLength"></a>

```csharp
public double NetmaskLength { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcIpamPoolCidrAllocationConfig <a name="VpcIpamPoolCidrAllocationConfig" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcIpamPoolCidrAllocationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IpamPoolId,
    string Cidr = null,
    string Description = null,
    string[] DisallowedCidrs = null,
    string Id = null,
    double NetmaskLength = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.ipamPoolId">IpamPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr_allocation#ipam_pool_id VpcIpamPoolCidrAllocation#ipam_pool_id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.cidr">Cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr_allocation#cidr VpcIpamPoolCidrAllocation#cidr}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr_allocation#description VpcIpamPoolCidrAllocation#description}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.disallowedCidrs">DisallowedCidrs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr_allocation#disallowed_cidrs VpcIpamPoolCidrAllocation#disallowed_cidrs}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr_allocation#id VpcIpamPoolCidrAllocation#id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.netmaskLength">NetmaskLength</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr_allocation#netmask_length VpcIpamPoolCidrAllocation#netmask_length}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IpamPoolId`<sup>Required</sup> <a name="IpamPoolId" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.ipamPoolId"></a>

```csharp
public string IpamPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr_allocation#ipam_pool_id VpcIpamPoolCidrAllocation#ipam_pool_id}.

---

##### `Cidr`<sup>Optional</sup> <a name="Cidr" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.cidr"></a>

```csharp
public string Cidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr_allocation#cidr VpcIpamPoolCidrAllocation#cidr}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr_allocation#description VpcIpamPoolCidrAllocation#description}.

---

##### `DisallowedCidrs`<sup>Optional</sup> <a name="DisallowedCidrs" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.disallowedCidrs"></a>

```csharp
public string[] DisallowedCidrs { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr_allocation#disallowed_cidrs VpcIpamPoolCidrAllocation#disallowed_cidrs}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr_allocation#id VpcIpamPoolCidrAllocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NetmaskLength`<sup>Optional</sup> <a name="NetmaskLength" id="@cdktf/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.netmaskLength"></a>

```csharp
public double NetmaskLength { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr_allocation#netmask_length VpcIpamPoolCidrAllocation#netmask_length}.

---



