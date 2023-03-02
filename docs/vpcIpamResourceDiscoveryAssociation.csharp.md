# `vpcIpamResourceDiscoveryAssociation` Submodule <a name="`vpcIpamResourceDiscoveryAssociation` Submodule" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcIpamResourceDiscoveryAssociation <a name="VpcIpamResourceDiscoveryAssociation" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association aws_vpc_ipam_resource_discovery_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcIpamResourceDiscoveryAssociation(Construct Scope, string Id, VpcIpamResourceDiscoveryAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig">VpcIpamResourceDiscoveryAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig">VpcIpamResourceDiscoveryAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.putTimeouts"></a>

```csharp
private void PutTimeouts(VpcIpamResourceDiscoveryAssociationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeouts">VpcIpamResourceDiscoveryAssociationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpcIpamResourceDiscoveryAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpcIpamResourceDiscoveryAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpcIpamResourceDiscoveryAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.ipamArn">IpamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.ipamRegion">IpamRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.isDefault">IsDefault</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference">VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.ipamIdInput">IpamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.ipamResourceDiscoveryIdInput">IpamResourceDiscoveryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.ipamId">IpamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.ipamResourceDiscoveryId">IpamResourceDiscoveryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `IpamArn`<sup>Required</sup> <a name="IpamArn" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.ipamArn"></a>

```csharp
public string IpamArn { get; }
```

- *Type:* string

---

##### `IpamRegion`<sup>Required</sup> <a name="IpamRegion" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.ipamRegion"></a>

```csharp
public string IpamRegion { get; }
```

- *Type:* string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.isDefault"></a>

```csharp
public IResolvable IsDefault { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.timeouts"></a>

```csharp
public VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference">VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpamIdInput`<sup>Optional</sup> <a name="IpamIdInput" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.ipamIdInput"></a>

```csharp
public string IpamIdInput { get; }
```

- *Type:* string

---

##### `IpamResourceDiscoveryIdInput`<sup>Optional</sup> <a name="IpamResourceDiscoveryIdInput" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.ipamResourceDiscoveryIdInput"></a>

```csharp
public string IpamResourceDiscoveryIdInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpamId`<sup>Required</sup> <a name="IpamId" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.ipamId"></a>

```csharp
public string IpamId { get; }
```

- *Type:* string

---

##### `IpamResourceDiscoveryId`<sup>Required</sup> <a name="IpamResourceDiscoveryId" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.ipamResourceDiscoveryId"></a>

```csharp
public string IpamResourceDiscoveryId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcIpamResourceDiscoveryAssociationConfig <a name="VpcIpamResourceDiscoveryAssociationConfig" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcIpamResourceDiscoveryAssociationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IpamId,
    string IpamResourceDiscoveryId,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    VpcIpamResourceDiscoveryAssociationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.ipamId">IpamId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#ipam_id VpcIpamResourceDiscoveryAssociation#ipam_id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.ipamResourceDiscoveryId">IpamResourceDiscoveryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#ipam_resource_discovery_id VpcIpamResourceDiscoveryAssociation#ipam_resource_discovery_id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#id VpcIpamResourceDiscoveryAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#tags VpcIpamResourceDiscoveryAssociation#tags}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#tags_all VpcIpamResourceDiscoveryAssociation#tags_all}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeouts">VpcIpamResourceDiscoveryAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IpamId`<sup>Required</sup> <a name="IpamId" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.ipamId"></a>

```csharp
public string IpamId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#ipam_id VpcIpamResourceDiscoveryAssociation#ipam_id}.

---

##### `IpamResourceDiscoveryId`<sup>Required</sup> <a name="IpamResourceDiscoveryId" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.ipamResourceDiscoveryId"></a>

```csharp
public string IpamResourceDiscoveryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#ipam_resource_discovery_id VpcIpamResourceDiscoveryAssociation#ipam_resource_discovery_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#id VpcIpamResourceDiscoveryAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#tags VpcIpamResourceDiscoveryAssociation#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#tags_all VpcIpamResourceDiscoveryAssociation#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.timeouts"></a>

```csharp
public VpcIpamResourceDiscoveryAssociationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeouts">VpcIpamResourceDiscoveryAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#timeouts VpcIpamResourceDiscoveryAssociation#timeouts}

---

### VpcIpamResourceDiscoveryAssociationTimeouts <a name="VpcIpamResourceDiscoveryAssociationTimeouts" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcIpamResourceDiscoveryAssociationTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#create VpcIpamResourceDiscoveryAssociation#create}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#delete VpcIpamResourceDiscoveryAssociation#delete}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#update VpcIpamResourceDiscoveryAssociation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#create VpcIpamResourceDiscoveryAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#delete VpcIpamResourceDiscoveryAssociation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#update VpcIpamResourceDiscoveryAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference <a name="VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



