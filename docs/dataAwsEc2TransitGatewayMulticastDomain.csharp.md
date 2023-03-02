# `dataAwsEc2TransitGatewayMulticastDomain` Submodule <a name="`dataAwsEc2TransitGatewayMulticastDomain` Submodule" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2TransitGatewayMulticastDomain <a name="DataAwsEc2TransitGatewayMulticastDomain" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain aws_ec2_transit_gateway_multicast_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2TransitGatewayMulticastDomain(Construct Scope, string Id, DataAwsEc2TransitGatewayMulticastDomainConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig">DataAwsEc2TransitGatewayMulticastDomainConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig">DataAwsEc2TransitGatewayMulticastDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.resetTransitGatewayMulticastDomainId">ResetTransitGatewayMulticastDomainId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.putFilter.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAwsEc2TransitGatewayMulticastDomainTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeouts">DataAwsEc2TransitGatewayMulticastDomainTimeouts</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTransitGatewayMulticastDomainId` <a name="ResetTransitGatewayMulticastDomainId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.resetTransitGatewayMulticastDomainId"></a>

```csharp
private void ResetTransitGatewayMulticastDomainId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsEc2TransitGatewayMulticastDomain.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsEc2TransitGatewayMulticastDomain.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsEc2TransitGatewayMulticastDomain.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.associations">Associations</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList">DataAwsEc2TransitGatewayMulticastDomainAssociationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.autoAcceptSharedAssociations">AutoAcceptSharedAssociations</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList">DataAwsEc2TransitGatewayMulticastDomainFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.igmpv2Support">Igmpv2Support</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.members">Members</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList">DataAwsEc2TransitGatewayMulticastDomainMembersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.sources">Sources</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList">DataAwsEc2TransitGatewayMulticastDomainSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.staticSourcesSupport">StaticSourcesSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference">DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.transitGatewayAttachmentId">TransitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.transitGatewayId">TransitGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.transitGatewayMulticastDomainIdInput">TransitGatewayMulticastDomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.transitGatewayMulticastDomainId">TransitGatewayMulticastDomainId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Associations`<sup>Required</sup> <a name="Associations" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.associations"></a>

```csharp
public DataAwsEc2TransitGatewayMulticastDomainAssociationsList Associations { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList">DataAwsEc2TransitGatewayMulticastDomainAssociationsList</a>

---

##### `AutoAcceptSharedAssociations`<sup>Required</sup> <a name="AutoAcceptSharedAssociations" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.autoAcceptSharedAssociations"></a>

```csharp
public string AutoAcceptSharedAssociations { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.filter"></a>

```csharp
public DataAwsEc2TransitGatewayMulticastDomainFilterList Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList">DataAwsEc2TransitGatewayMulticastDomainFilterList</a>

---

##### `Igmpv2Support`<sup>Required</sup> <a name="Igmpv2Support" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.igmpv2Support"></a>

```csharp
public string Igmpv2Support { get; }
```

- *Type:* string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.members"></a>

```csharp
public DataAwsEc2TransitGatewayMulticastDomainMembersList Members { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList">DataAwsEc2TransitGatewayMulticastDomainMembersList</a>

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.sources"></a>

```csharp
public DataAwsEc2TransitGatewayMulticastDomainSourcesList Sources { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList">DataAwsEc2TransitGatewayMulticastDomainSourcesList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StaticSourcesSupport`<sup>Required</sup> <a name="StaticSourcesSupport" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.staticSourcesSupport"></a>

```csharp
public string StaticSourcesSupport { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.timeouts"></a>

```csharp
public DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference">DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference</a>

---

##### `TransitGatewayAttachmentId`<sup>Required</sup> <a name="TransitGatewayAttachmentId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.transitGatewayAttachmentId"></a>

```csharp
public string TransitGatewayAttachmentId { get; }
```

- *Type:* string

---

##### `TransitGatewayId`<sup>Required</sup> <a name="TransitGatewayId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.transitGatewayId"></a>

```csharp
public string TransitGatewayId { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TransitGatewayMulticastDomainIdInput`<sup>Optional</sup> <a name="TransitGatewayMulticastDomainIdInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.transitGatewayMulticastDomainIdInput"></a>

```csharp
public string TransitGatewayMulticastDomainIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TransitGatewayMulticastDomainId`<sup>Required</sup> <a name="TransitGatewayMulticastDomainId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.transitGatewayMulticastDomainId"></a>

```csharp
public string TransitGatewayMulticastDomainId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomain.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2TransitGatewayMulticastDomainAssociations <a name="DataAwsEc2TransitGatewayMulticastDomainAssociations" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2TransitGatewayMulticastDomainAssociations {

};
```


### DataAwsEc2TransitGatewayMulticastDomainConfig <a name="DataAwsEc2TransitGatewayMulticastDomainConfig" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2TransitGatewayMulticastDomainConfig {
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
    DataAwsEc2TransitGatewayMulticastDomainTimeouts Timeouts = null,
    string TransitGatewayMulticastDomainId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#id DataAwsEc2TransitGatewayMulticastDomain#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#tags DataAwsEc2TransitGatewayMulticastDomain#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeouts">DataAwsEc2TransitGatewayMulticastDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.transitGatewayMulticastDomainId">TransitGatewayMulticastDomainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#transit_gateway_multicast_domain_id DataAwsEc2TransitGatewayMulticastDomain#transit_gateway_multicast_domain_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#filter DataAwsEc2TransitGatewayMulticastDomain#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#id DataAwsEc2TransitGatewayMulticastDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#tags DataAwsEc2TransitGatewayMulticastDomain#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.timeouts"></a>

```csharp
public DataAwsEc2TransitGatewayMulticastDomainTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeouts">DataAwsEc2TransitGatewayMulticastDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#timeouts DataAwsEc2TransitGatewayMulticastDomain#timeouts}

---

##### `TransitGatewayMulticastDomainId`<sup>Optional</sup> <a name="TransitGatewayMulticastDomainId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainConfig.property.transitGatewayMulticastDomainId"></a>

```csharp
public string TransitGatewayMulticastDomainId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#transit_gateway_multicast_domain_id DataAwsEc2TransitGatewayMulticastDomain#transit_gateway_multicast_domain_id}.

---

### DataAwsEc2TransitGatewayMulticastDomainFilter <a name="DataAwsEc2TransitGatewayMulticastDomainFilter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2TransitGatewayMulticastDomainFilter {
    string Name,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#name DataAwsEc2TransitGatewayMulticastDomain#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#values DataAwsEc2TransitGatewayMulticastDomain#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#name DataAwsEc2TransitGatewayMulticastDomain#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#values DataAwsEc2TransitGatewayMulticastDomain#values}.

---

### DataAwsEc2TransitGatewayMulticastDomainMembers <a name="DataAwsEc2TransitGatewayMulticastDomainMembers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2TransitGatewayMulticastDomainMembers {

};
```


### DataAwsEc2TransitGatewayMulticastDomainSources <a name="DataAwsEc2TransitGatewayMulticastDomainSources" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2TransitGatewayMulticastDomainSources {

};
```


### DataAwsEc2TransitGatewayMulticastDomainTimeouts <a name="DataAwsEc2TransitGatewayMulticastDomainTimeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2TransitGatewayMulticastDomainTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#read DataAwsEc2TransitGatewayMulticastDomain#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_multicast_domain#read DataAwsEc2TransitGatewayMulticastDomain#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2TransitGatewayMulticastDomainAssociationsList <a name="DataAwsEc2TransitGatewayMulticastDomainAssociationsList" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2TransitGatewayMulticastDomainAssociationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.get"></a>

```csharp
private DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference <a name="DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.property.transitGatewayAttachmentId">TransitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociations">DataAwsEc2TransitGatewayMulticastDomainAssociations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `TransitGatewayAttachmentId`<sup>Required</sup> <a name="TransitGatewayAttachmentId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.property.transitGatewayAttachmentId"></a>

```csharp
public string TransitGatewayAttachmentId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociationsOutputReference.property.internalValue"></a>

```csharp
public DataAwsEc2TransitGatewayMulticastDomainAssociations InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainAssociations">DataAwsEc2TransitGatewayMulticastDomainAssociations</a>

---


### DataAwsEc2TransitGatewayMulticastDomainFilterList <a name="DataAwsEc2TransitGatewayMulticastDomainFilterList" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2TransitGatewayMulticastDomainFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.get"></a>

```csharp
private DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference <a name="DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsEc2TransitGatewayMulticastDomainMembersList <a name="DataAwsEc2TransitGatewayMulticastDomainMembersList" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2TransitGatewayMulticastDomainMembersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.get"></a>

```csharp
private DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference <a name="DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.property.groupIpAddress">GroupIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembers">DataAwsEc2TransitGatewayMulticastDomainMembers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupIpAddress`<sup>Required</sup> <a name="GroupIpAddress" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.property.groupIpAddress"></a>

```csharp
public string GroupIpAddress { get; }
```

- *Type:* string

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.property.networkInterfaceId"></a>

```csharp
public string NetworkInterfaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembersOutputReference.property.internalValue"></a>

```csharp
public DataAwsEc2TransitGatewayMulticastDomainMembers InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainMembers">DataAwsEc2TransitGatewayMulticastDomainMembers</a>

---


### DataAwsEc2TransitGatewayMulticastDomainSourcesList <a name="DataAwsEc2TransitGatewayMulticastDomainSourcesList" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2TransitGatewayMulticastDomainSourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.get"></a>

```csharp
private DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference <a name="DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.property.groupIpAddress">GroupIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSources">DataAwsEc2TransitGatewayMulticastDomainSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupIpAddress`<sup>Required</sup> <a name="GroupIpAddress" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.property.groupIpAddress"></a>

```csharp
public string GroupIpAddress { get; }
```

- *Type:* string

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.property.networkInterfaceId"></a>

```csharp
public string NetworkInterfaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSourcesOutputReference.property.internalValue"></a>

```csharp
public DataAwsEc2TransitGatewayMulticastDomainSources InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainSources">DataAwsEc2TransitGatewayMulticastDomainSources</a>

---


### DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference <a name="DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayMulticastDomain.DataAwsEc2TransitGatewayMulticastDomainTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



