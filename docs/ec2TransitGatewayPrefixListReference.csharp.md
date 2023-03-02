# `ec2TransitGatewayPrefixListReference` Submodule <a name="`ec2TransitGatewayPrefixListReference` Submodule" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayPrefixListReference <a name="Ec2TransitGatewayPrefixListReference" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference aws_ec2_transit_gateway_prefix_list_reference}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Ec2TransitGatewayPrefixListReference(Construct Scope, string Id, Ec2TransitGatewayPrefixListReferenceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig">Ec2TransitGatewayPrefixListReferenceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig">Ec2TransitGatewayPrefixListReferenceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.resetBlackhole">ResetBlackhole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.resetTransitGatewayAttachmentId">ResetTransitGatewayAttachmentId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetBlackhole` <a name="ResetBlackhole" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.resetBlackhole"></a>

```csharp
private void ResetBlackhole()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTransitGatewayAttachmentId` <a name="ResetTransitGatewayAttachmentId" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.resetTransitGatewayAttachmentId"></a>

```csharp
private void ResetTransitGatewayAttachmentId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Ec2TransitGatewayPrefixListReference.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Ec2TransitGatewayPrefixListReference.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Ec2TransitGatewayPrefixListReference.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.prefixListOwnerId">PrefixListOwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.blackholeInput">BlackholeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.prefixListIdInput">PrefixListIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.transitGatewayAttachmentIdInput">TransitGatewayAttachmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.transitGatewayRouteTableIdInput">TransitGatewayRouteTableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.blackhole">Blackhole</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.prefixListId">PrefixListId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.transitGatewayAttachmentId">TransitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.transitGatewayRouteTableId">TransitGatewayRouteTableId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `PrefixListOwnerId`<sup>Required</sup> <a name="PrefixListOwnerId" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.prefixListOwnerId"></a>

```csharp
public string PrefixListOwnerId { get; }
```

- *Type:* string

---

##### `BlackholeInput`<sup>Optional</sup> <a name="BlackholeInput" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.blackholeInput"></a>

```csharp
public object BlackholeInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PrefixListIdInput`<sup>Optional</sup> <a name="PrefixListIdInput" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.prefixListIdInput"></a>

```csharp
public string PrefixListIdInput { get; }
```

- *Type:* string

---

##### `TransitGatewayAttachmentIdInput`<sup>Optional</sup> <a name="TransitGatewayAttachmentIdInput" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.transitGatewayAttachmentIdInput"></a>

```csharp
public string TransitGatewayAttachmentIdInput { get; }
```

- *Type:* string

---

##### `TransitGatewayRouteTableIdInput`<sup>Optional</sup> <a name="TransitGatewayRouteTableIdInput" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.transitGatewayRouteTableIdInput"></a>

```csharp
public string TransitGatewayRouteTableIdInput { get; }
```

- *Type:* string

---

##### `Blackhole`<sup>Required</sup> <a name="Blackhole" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.blackhole"></a>

```csharp
public object Blackhole { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PrefixListId`<sup>Required</sup> <a name="PrefixListId" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.prefixListId"></a>

```csharp
public string PrefixListId { get; }
```

- *Type:* string

---

##### `TransitGatewayAttachmentId`<sup>Required</sup> <a name="TransitGatewayAttachmentId" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.transitGatewayAttachmentId"></a>

```csharp
public string TransitGatewayAttachmentId { get; }
```

- *Type:* string

---

##### `TransitGatewayRouteTableId`<sup>Required</sup> <a name="TransitGatewayRouteTableId" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.transitGatewayRouteTableId"></a>

```csharp
public string TransitGatewayRouteTableId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayPrefixListReferenceConfig <a name="Ec2TransitGatewayPrefixListReferenceConfig" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Ec2TransitGatewayPrefixListReferenceConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string PrefixListId,
    string TransitGatewayRouteTableId,
    object Blackhole = null,
    string Id = null,
    string TransitGatewayAttachmentId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.prefixListId">PrefixListId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#prefix_list_id Ec2TransitGatewayPrefixListReference#prefix_list_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.transitGatewayRouteTableId">TransitGatewayRouteTableId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#transit_gateway_route_table_id Ec2TransitGatewayPrefixListReference#transit_gateway_route_table_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.blackhole">Blackhole</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#blackhole Ec2TransitGatewayPrefixListReference#blackhole}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#id Ec2TransitGatewayPrefixListReference#id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.transitGatewayAttachmentId">TransitGatewayAttachmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#transit_gateway_attachment_id Ec2TransitGatewayPrefixListReference#transit_gateway_attachment_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `PrefixListId`<sup>Required</sup> <a name="PrefixListId" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.prefixListId"></a>

```csharp
public string PrefixListId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#prefix_list_id Ec2TransitGatewayPrefixListReference#prefix_list_id}.

---

##### `TransitGatewayRouteTableId`<sup>Required</sup> <a name="TransitGatewayRouteTableId" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.transitGatewayRouteTableId"></a>

```csharp
public string TransitGatewayRouteTableId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#transit_gateway_route_table_id Ec2TransitGatewayPrefixListReference#transit_gateway_route_table_id}.

---

##### `Blackhole`<sup>Optional</sup> <a name="Blackhole" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.blackhole"></a>

```csharp
public object Blackhole { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#blackhole Ec2TransitGatewayPrefixListReference#blackhole}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#id Ec2TransitGatewayPrefixListReference#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TransitGatewayAttachmentId`<sup>Optional</sup> <a name="TransitGatewayAttachmentId" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.transitGatewayAttachmentId"></a>

```csharp
public string TransitGatewayAttachmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#transit_gateway_attachment_id Ec2TransitGatewayPrefixListReference#transit_gateway_attachment_id}.

---



