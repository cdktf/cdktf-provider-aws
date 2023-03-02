# `dataAwsEc2LocalGatewayVirtualInterfaceGroups` Submodule <a name="`dataAwsEc2LocalGatewayVirtualInterfaceGroups` Submodule" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2LocalGatewayVirtualInterfaceGroups <a name="DataAwsEc2LocalGatewayVirtualInterfaceGroups" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups aws_ec2_local_gateway_virtual_interface_groups}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2LocalGatewayVirtualInterfaceGroups(Construct Scope, string Id, DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig">DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig">DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.putFilter.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsEc2LocalGatewayVirtualInterfaceGroups.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsEc2LocalGatewayVirtualInterfaceGroups.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsEc2LocalGatewayVirtualInterfaceGroups.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList">DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.ids">Ids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.localGatewayVirtualInterfaceIds">LocalGatewayVirtualInterfaceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference">DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.filter"></a>

```csharp
public DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList">DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList</a>

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.ids"></a>

```csharp
public string[] Ids { get; }
```

- *Type:* string[]

---

##### `LocalGatewayVirtualInterfaceIds`<sup>Required</sup> <a name="LocalGatewayVirtualInterfaceIds" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.localGatewayVirtualInterfaceIds"></a>

```csharp
public string[] LocalGatewayVirtualInterfaceIds { get; }
```

- *Type:* string[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.timeouts"></a>

```csharp
public DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference">DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig <a name="DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Filter = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups#id DataAwsEc2LocalGatewayVirtualInterfaceGroups#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups#tags DataAwsEc2LocalGatewayVirtualInterfaceGroups#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups#filter DataAwsEc2LocalGatewayVirtualInterfaceGroups#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups#id DataAwsEc2LocalGatewayVirtualInterfaceGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups#tags DataAwsEc2LocalGatewayVirtualInterfaceGroups#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig.property.timeouts"></a>

```csharp
public DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups#timeouts DataAwsEc2LocalGatewayVirtualInterfaceGroups#timeouts}

---

### DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter <a name="DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter {
    string Name,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups#name DataAwsEc2LocalGatewayVirtualInterfaceGroups#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups#values DataAwsEc2LocalGatewayVirtualInterfaceGroups#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups#name DataAwsEc2LocalGatewayVirtualInterfaceGroups#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups#values DataAwsEc2LocalGatewayVirtualInterfaceGroups#values}.

---

### DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts <a name="DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups#read DataAwsEc2LocalGatewayVirtualInterfaceGroups#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups#read DataAwsEc2LocalGatewayVirtualInterfaceGroups#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList <a name="DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList.get"></a>

```csharp
private DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference <a name="DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference <a name="DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



