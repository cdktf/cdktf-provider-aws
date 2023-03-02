# `ec2TransitGatewayRouteTablePropagation` Submodule <a name="`ec2TransitGatewayRouteTablePropagation` Submodule" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayRouteTablePropagation <a name="Ec2TransitGatewayRouteTablePropagation" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route_table_propagation aws_ec2_transit_gateway_route_table_propagation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Ec2TransitGatewayRouteTablePropagation(Construct Scope, string Id, Ec2TransitGatewayRouteTablePropagationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagationConfig">Ec2TransitGatewayRouteTablePropagationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagationConfig">Ec2TransitGatewayRouteTablePropagationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Ec2TransitGatewayRouteTablePropagation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Ec2TransitGatewayRouteTablePropagation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Ec2TransitGatewayRouteTablePropagation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.property.transitGatewayAttachmentIdInput">TransitGatewayAttachmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.property.transitGatewayRouteTableIdInput">TransitGatewayRouteTableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.property.transitGatewayAttachmentId">TransitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.property.transitGatewayRouteTableId">TransitGatewayRouteTableId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TransitGatewayAttachmentIdInput`<sup>Optional</sup> <a name="TransitGatewayAttachmentIdInput" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.property.transitGatewayAttachmentIdInput"></a>

```csharp
public string TransitGatewayAttachmentIdInput { get; }
```

- *Type:* string

---

##### `TransitGatewayRouteTableIdInput`<sup>Optional</sup> <a name="TransitGatewayRouteTableIdInput" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.property.transitGatewayRouteTableIdInput"></a>

```csharp
public string TransitGatewayRouteTableIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TransitGatewayAttachmentId`<sup>Required</sup> <a name="TransitGatewayAttachmentId" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.property.transitGatewayAttachmentId"></a>

```csharp
public string TransitGatewayAttachmentId { get; }
```

- *Type:* string

---

##### `TransitGatewayRouteTableId`<sup>Required</sup> <a name="TransitGatewayRouteTableId" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.property.transitGatewayRouteTableId"></a>

```csharp
public string TransitGatewayRouteTableId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayRouteTablePropagationConfig <a name="Ec2TransitGatewayRouteTablePropagationConfig" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Ec2TransitGatewayRouteTablePropagationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string TransitGatewayAttachmentId,
    string TransitGatewayRouteTableId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagationConfig.property.transitGatewayAttachmentId">TransitGatewayAttachmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route_table_propagation#transit_gateway_attachment_id Ec2TransitGatewayRouteTablePropagation#transit_gateway_attachment_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagationConfig.property.transitGatewayRouteTableId">TransitGatewayRouteTableId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route_table_propagation#transit_gateway_route_table_id Ec2TransitGatewayRouteTablePropagation#transit_gateway_route_table_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route_table_propagation#id Ec2TransitGatewayRouteTablePropagation#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `TransitGatewayAttachmentId`<sup>Required</sup> <a name="TransitGatewayAttachmentId" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagationConfig.property.transitGatewayAttachmentId"></a>

```csharp
public string TransitGatewayAttachmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route_table_propagation#transit_gateway_attachment_id Ec2TransitGatewayRouteTablePropagation#transit_gateway_attachment_id}.

---

##### `TransitGatewayRouteTableId`<sup>Required</sup> <a name="TransitGatewayRouteTableId" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagationConfig.property.transitGatewayRouteTableId"></a>

```csharp
public string TransitGatewayRouteTableId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route_table_propagation#transit_gateway_route_table_id Ec2TransitGatewayRouteTablePropagation#transit_gateway_route_table_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ec2TransitGatewayRouteTablePropagation.Ec2TransitGatewayRouteTablePropagationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route_table_propagation#id Ec2TransitGatewayRouteTablePropagation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



