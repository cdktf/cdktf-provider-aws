# `dataAwsVpcIpamPoolCidrs` Submodule <a name="`dataAwsVpcIpamPoolCidrs` Submodule" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsVpcIpamPoolCidrs <a name="DataAwsVpcIpamPoolCidrs" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool_cidrs aws_vpc_ipam_pool_cidrs}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsVpcIpamPoolCidrs(Construct Scope, string Id, DataAwsVpcIpamPoolCidrsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig">DataAwsVpcIpamPoolCidrsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig">DataAwsVpcIpamPoolCidrsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.putFilter.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAwsVpcIpamPoolCidrsTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeouts">DataAwsVpcIpamPoolCidrsTimeouts</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsVpcIpamPoolCidrs.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsVpcIpamPoolCidrs.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsVpcIpamPoolCidrs.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList">DataAwsVpcIpamPoolCidrsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.ipamPoolCidrs">IpamPoolCidrs</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList">DataAwsVpcIpamPoolCidrsIpamPoolCidrsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference">DataAwsVpcIpamPoolCidrsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.ipamPoolIdInput">IpamPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.ipamPoolId">IpamPoolId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.filter"></a>

```csharp
public DataAwsVpcIpamPoolCidrsFilterList Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList">DataAwsVpcIpamPoolCidrsFilterList</a>

---

##### `IpamPoolCidrs`<sup>Required</sup> <a name="IpamPoolCidrs" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.ipamPoolCidrs"></a>

```csharp
public DataAwsVpcIpamPoolCidrsIpamPoolCidrsList IpamPoolCidrs { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList">DataAwsVpcIpamPoolCidrsIpamPoolCidrsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.timeouts"></a>

```csharp
public DataAwsVpcIpamPoolCidrsTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference">DataAwsVpcIpamPoolCidrsTimeoutsOutputReference</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpamPoolIdInput`<sup>Optional</sup> <a name="IpamPoolIdInput" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.ipamPoolIdInput"></a>

```csharp
public string IpamPoolIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpamPoolId`<sup>Required</sup> <a name="IpamPoolId" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.ipamPoolId"></a>

```csharp
public string IpamPoolId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsVpcIpamPoolCidrsConfig <a name="DataAwsVpcIpamPoolCidrsConfig" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsVpcIpamPoolCidrsConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IpamPoolId,
    object Filter = null,
    string Id = null,
    DataAwsVpcIpamPoolCidrsTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.ipamPoolId">IpamPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool_cidrs#ipam_pool_id DataAwsVpcIpamPoolCidrs#ipam_pool_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool_cidrs#id DataAwsVpcIpamPoolCidrs#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeouts">DataAwsVpcIpamPoolCidrsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IpamPoolId`<sup>Required</sup> <a name="IpamPoolId" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.ipamPoolId"></a>

```csharp
public string IpamPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool_cidrs#ipam_pool_id DataAwsVpcIpamPoolCidrs#ipam_pool_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool_cidrs#filter DataAwsVpcIpamPoolCidrs#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool_cidrs#id DataAwsVpcIpamPoolCidrs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.timeouts"></a>

```csharp
public DataAwsVpcIpamPoolCidrsTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeouts">DataAwsVpcIpamPoolCidrsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool_cidrs#timeouts DataAwsVpcIpamPoolCidrs#timeouts}

---

### DataAwsVpcIpamPoolCidrsFilter <a name="DataAwsVpcIpamPoolCidrsFilter" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsVpcIpamPoolCidrsFilter {
    string Name,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool_cidrs#name DataAwsVpcIpamPoolCidrs#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool_cidrs#values DataAwsVpcIpamPoolCidrs#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool_cidrs#name DataAwsVpcIpamPoolCidrs#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool_cidrs#values DataAwsVpcIpamPoolCidrs#values}.

---

### DataAwsVpcIpamPoolCidrsIpamPoolCidrs <a name="DataAwsVpcIpamPoolCidrsIpamPoolCidrs" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsVpcIpamPoolCidrsIpamPoolCidrs {

};
```


### DataAwsVpcIpamPoolCidrsTimeouts <a name="DataAwsVpcIpamPoolCidrsTimeouts" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsVpcIpamPoolCidrsTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool_cidrs#read DataAwsVpcIpamPoolCidrs#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool_cidrs#read DataAwsVpcIpamPoolCidrs#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsVpcIpamPoolCidrsFilterList <a name="DataAwsVpcIpamPoolCidrsFilterList" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsVpcIpamPoolCidrsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.get"></a>

```csharp
private DataAwsVpcIpamPoolCidrsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsVpcIpamPoolCidrsFilterOutputReference <a name="DataAwsVpcIpamPoolCidrsFilterOutputReference" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsVpcIpamPoolCidrsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsVpcIpamPoolCidrsIpamPoolCidrsList <a name="DataAwsVpcIpamPoolCidrsIpamPoolCidrsList" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsVpcIpamPoolCidrsIpamPoolCidrsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.get"></a>

```csharp
private DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference <a name="DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrs">DataAwsVpcIpamPoolCidrsIpamPoolCidrs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.property.internalValue"></a>

```csharp
public DataAwsVpcIpamPoolCidrsIpamPoolCidrs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrs">DataAwsVpcIpamPoolCidrsIpamPoolCidrs</a>

---


### DataAwsVpcIpamPoolCidrsTimeoutsOutputReference <a name="DataAwsVpcIpamPoolCidrsTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsVpcIpamPoolCidrsTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



