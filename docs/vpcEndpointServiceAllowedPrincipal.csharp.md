# `vpcEndpointServiceAllowedPrincipal` Submodule <a name="`vpcEndpointServiceAllowedPrincipal` Submodule" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcEndpointServiceAllowedPrincipal <a name="VpcEndpointServiceAllowedPrincipal" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service_allowed_principal aws_vpc_endpoint_service_allowed_principal}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcEndpointServiceAllowedPrincipal(Construct Scope, string Id, VpcEndpointServiceAllowedPrincipalConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig">VpcEndpointServiceAllowedPrincipalConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig">VpcEndpointServiceAllowedPrincipalConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpcEndpointServiceAllowedPrincipal.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpcEndpointServiceAllowedPrincipal.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpcEndpointServiceAllowedPrincipal.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.principalArnInput">PrincipalArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.vpcEndpointServiceIdInput">VpcEndpointServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.principalArn">PrincipalArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.vpcEndpointServiceId">VpcEndpointServiceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PrincipalArnInput`<sup>Optional</sup> <a name="PrincipalArnInput" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.principalArnInput"></a>

```csharp
public string PrincipalArnInput { get; }
```

- *Type:* string

---

##### `VpcEndpointServiceIdInput`<sup>Optional</sup> <a name="VpcEndpointServiceIdInput" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.vpcEndpointServiceIdInput"></a>

```csharp
public string VpcEndpointServiceIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PrincipalArn`<sup>Required</sup> <a name="PrincipalArn" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.principalArn"></a>

```csharp
public string PrincipalArn { get; }
```

- *Type:* string

---

##### `VpcEndpointServiceId`<sup>Required</sup> <a name="VpcEndpointServiceId" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.vpcEndpointServiceId"></a>

```csharp
public string VpcEndpointServiceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipal.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcEndpointServiceAllowedPrincipalConfig <a name="VpcEndpointServiceAllowedPrincipalConfig" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcEndpointServiceAllowedPrincipalConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string PrincipalArn,
    string VpcEndpointServiceId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig.property.principalArn">PrincipalArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service_allowed_principal#principal_arn VpcEndpointServiceAllowedPrincipal#principal_arn}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig.property.vpcEndpointServiceId">VpcEndpointServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service_allowed_principal#vpc_endpoint_service_id VpcEndpointServiceAllowedPrincipal#vpc_endpoint_service_id}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service_allowed_principal#id VpcEndpointServiceAllowedPrincipal#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `PrincipalArn`<sup>Required</sup> <a name="PrincipalArn" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig.property.principalArn"></a>

```csharp
public string PrincipalArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service_allowed_principal#principal_arn VpcEndpointServiceAllowedPrincipal#principal_arn}.

---

##### `VpcEndpointServiceId`<sup>Required</sup> <a name="VpcEndpointServiceId" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig.property.vpcEndpointServiceId"></a>

```csharp
public string VpcEndpointServiceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service_allowed_principal#vpc_endpoint_service_id VpcEndpointServiceAllowedPrincipal#vpc_endpoint_service_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.vpcEndpointServiceAllowedPrincipal.VpcEndpointServiceAllowedPrincipalConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service_allowed_principal#id VpcEndpointServiceAllowedPrincipal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



