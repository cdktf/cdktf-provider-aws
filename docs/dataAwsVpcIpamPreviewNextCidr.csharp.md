# `dataAwsVpcIpamPreviewNextCidr` Submodule <a name="`dataAwsVpcIpamPreviewNextCidr` Submodule" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsVpcIpamPreviewNextCidr <a name="DataAwsVpcIpamPreviewNextCidr" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr aws_vpc_ipam_preview_next_cidr}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsVpcIpamPreviewNextCidr(Construct Scope, string Id, DataAwsVpcIpamPreviewNextCidrConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig">DataAwsVpcIpamPreviewNextCidrConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig">DataAwsVpcIpamPreviewNextCidrConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.resetDisallowedCidrs">ResetDisallowedCidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.resetNetmaskLength">ResetNetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAwsVpcIpamPreviewNextCidrTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeouts">DataAwsVpcIpamPreviewNextCidrTimeouts</a>

---

##### `ResetDisallowedCidrs` <a name="ResetDisallowedCidrs" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.resetDisallowedCidrs"></a>

```csharp
private void ResetDisallowedCidrs()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNetmaskLength` <a name="ResetNetmaskLength" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.resetNetmaskLength"></a>

```csharp
private void ResetNetmaskLength()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsVpcIpamPreviewNextCidr.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsVpcIpamPreviewNextCidr.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsVpcIpamPreviewNextCidr.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference">DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.disallowedCidrsInput">DisallowedCidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.ipamPoolIdInput">IpamPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.netmaskLengthInput">NetmaskLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.disallowedCidrs">DisallowedCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.ipamPoolId">IpamPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.netmaskLength">NetmaskLength</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.timeouts"></a>

```csharp
public DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference">DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference</a>

---

##### `DisallowedCidrsInput`<sup>Optional</sup> <a name="DisallowedCidrsInput" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.disallowedCidrsInput"></a>

```csharp
public string[] DisallowedCidrsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpamPoolIdInput`<sup>Optional</sup> <a name="IpamPoolIdInput" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.ipamPoolIdInput"></a>

```csharp
public string IpamPoolIdInput { get; }
```

- *Type:* string

---

##### `NetmaskLengthInput`<sup>Optional</sup> <a name="NetmaskLengthInput" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.netmaskLengthInput"></a>

```csharp
public double NetmaskLengthInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DisallowedCidrs`<sup>Required</sup> <a name="DisallowedCidrs" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.disallowedCidrs"></a>

```csharp
public string[] DisallowedCidrs { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpamPoolId`<sup>Required</sup> <a name="IpamPoolId" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.ipamPoolId"></a>

```csharp
public string IpamPoolId { get; }
```

- *Type:* string

---

##### `NetmaskLength`<sup>Required</sup> <a name="NetmaskLength" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.netmaskLength"></a>

```csharp
public double NetmaskLength { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsVpcIpamPreviewNextCidrConfig <a name="DataAwsVpcIpamPreviewNextCidrConfig" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsVpcIpamPreviewNextCidrConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IpamPoolId,
    string[] DisallowedCidrs = null,
    string Id = null,
    double NetmaskLength = null,
    DataAwsVpcIpamPreviewNextCidrTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.ipamPoolId">IpamPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#ipam_pool_id DataAwsVpcIpamPreviewNextCidr#ipam_pool_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.disallowedCidrs">DisallowedCidrs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#disallowed_cidrs DataAwsVpcIpamPreviewNextCidr#disallowed_cidrs}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#id DataAwsVpcIpamPreviewNextCidr#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.netmaskLength">NetmaskLength</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#netmask_length DataAwsVpcIpamPreviewNextCidr#netmask_length}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeouts">DataAwsVpcIpamPreviewNextCidrTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IpamPoolId`<sup>Required</sup> <a name="IpamPoolId" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.ipamPoolId"></a>

```csharp
public string IpamPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#ipam_pool_id DataAwsVpcIpamPreviewNextCidr#ipam_pool_id}.

---

##### `DisallowedCidrs`<sup>Optional</sup> <a name="DisallowedCidrs" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.disallowedCidrs"></a>

```csharp
public string[] DisallowedCidrs { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#disallowed_cidrs DataAwsVpcIpamPreviewNextCidr#disallowed_cidrs}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#id DataAwsVpcIpamPreviewNextCidr#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NetmaskLength`<sup>Optional</sup> <a name="NetmaskLength" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.netmaskLength"></a>

```csharp
public double NetmaskLength { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#netmask_length DataAwsVpcIpamPreviewNextCidr#netmask_length}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.timeouts"></a>

```csharp
public DataAwsVpcIpamPreviewNextCidrTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeouts">DataAwsVpcIpamPreviewNextCidrTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#timeouts DataAwsVpcIpamPreviewNextCidr#timeouts}

---

### DataAwsVpcIpamPreviewNextCidrTimeouts <a name="DataAwsVpcIpamPreviewNextCidrTimeouts" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsVpcIpamPreviewNextCidrTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#read DataAwsVpcIpamPreviewNextCidr#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#read DataAwsVpcIpamPreviewNextCidr#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference <a name="DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



