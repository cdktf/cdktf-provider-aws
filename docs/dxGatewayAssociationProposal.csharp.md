# `dxGatewayAssociationProposal` Submodule <a name="`dxGatewayAssociationProposal` Submodule" id="@cdktf/provider-aws.dxGatewayAssociationProposal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DxGatewayAssociationProposal <a name="DxGatewayAssociationProposal" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal aws_dx_gateway_association_proposal}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DxGatewayAssociationProposal(Construct Scope, string Id, DxGatewayAssociationProposalConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig">DxGatewayAssociationProposalConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig">DxGatewayAssociationProposalConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.resetAllowedPrefixes">ResetAllowedPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAllowedPrefixes` <a name="ResetAllowedPrefixes" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.resetAllowedPrefixes"></a>

```csharp
private void ResetAllowedPrefixes()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DxGatewayAssociationProposal.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DxGatewayAssociationProposal.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DxGatewayAssociationProposal.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.associatedGatewayOwnerAccountId">AssociatedGatewayOwnerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.associatedGatewayType">AssociatedGatewayType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.allowedPrefixesInput">AllowedPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.associatedGatewayIdInput">AssociatedGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dxGatewayIdInput">DxGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dxGatewayOwnerAccountIdInput">DxGatewayOwnerAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.allowedPrefixes">AllowedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.associatedGatewayId">AssociatedGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dxGatewayId">DxGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dxGatewayOwnerAccountId">DxGatewayOwnerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AssociatedGatewayOwnerAccountId`<sup>Required</sup> <a name="AssociatedGatewayOwnerAccountId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.associatedGatewayOwnerAccountId"></a>

```csharp
public string AssociatedGatewayOwnerAccountId { get; }
```

- *Type:* string

---

##### `AssociatedGatewayType`<sup>Required</sup> <a name="AssociatedGatewayType" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.associatedGatewayType"></a>

```csharp
public string AssociatedGatewayType { get; }
```

- *Type:* string

---

##### `AllowedPrefixesInput`<sup>Optional</sup> <a name="AllowedPrefixesInput" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.allowedPrefixesInput"></a>

```csharp
public string[] AllowedPrefixesInput { get; }
```

- *Type:* string[]

---

##### `AssociatedGatewayIdInput`<sup>Optional</sup> <a name="AssociatedGatewayIdInput" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.associatedGatewayIdInput"></a>

```csharp
public string AssociatedGatewayIdInput { get; }
```

- *Type:* string

---

##### `DxGatewayIdInput`<sup>Optional</sup> <a name="DxGatewayIdInput" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dxGatewayIdInput"></a>

```csharp
public string DxGatewayIdInput { get; }
```

- *Type:* string

---

##### `DxGatewayOwnerAccountIdInput`<sup>Optional</sup> <a name="DxGatewayOwnerAccountIdInput" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dxGatewayOwnerAccountIdInput"></a>

```csharp
public string DxGatewayOwnerAccountIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `AllowedPrefixes`<sup>Required</sup> <a name="AllowedPrefixes" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.allowedPrefixes"></a>

```csharp
public string[] AllowedPrefixes { get; }
```

- *Type:* string[]

---

##### `AssociatedGatewayId`<sup>Required</sup> <a name="AssociatedGatewayId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.associatedGatewayId"></a>

```csharp
public string AssociatedGatewayId { get; }
```

- *Type:* string

---

##### `DxGatewayId`<sup>Required</sup> <a name="DxGatewayId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dxGatewayId"></a>

```csharp
public string DxGatewayId { get; }
```

- *Type:* string

---

##### `DxGatewayOwnerAccountId`<sup>Required</sup> <a name="DxGatewayOwnerAccountId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dxGatewayOwnerAccountId"></a>

```csharp
public string DxGatewayOwnerAccountId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DxGatewayAssociationProposalConfig <a name="DxGatewayAssociationProposalConfig" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DxGatewayAssociationProposalConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AssociatedGatewayId,
    string DxGatewayId,
    string DxGatewayOwnerAccountId,
    string[] AllowedPrefixes = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.associatedGatewayId">AssociatedGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#associated_gateway_id DxGatewayAssociationProposal#associated_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.dxGatewayId">DxGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#dx_gateway_id DxGatewayAssociationProposal#dx_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.dxGatewayOwnerAccountId">DxGatewayOwnerAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#dx_gateway_owner_account_id DxGatewayAssociationProposal#dx_gateway_owner_account_id}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.allowedPrefixes">AllowedPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#allowed_prefixes DxGatewayAssociationProposal#allowed_prefixes}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#id DxGatewayAssociationProposal#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AssociatedGatewayId`<sup>Required</sup> <a name="AssociatedGatewayId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.associatedGatewayId"></a>

```csharp
public string AssociatedGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#associated_gateway_id DxGatewayAssociationProposal#associated_gateway_id}.

---

##### `DxGatewayId`<sup>Required</sup> <a name="DxGatewayId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.dxGatewayId"></a>

```csharp
public string DxGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#dx_gateway_id DxGatewayAssociationProposal#dx_gateway_id}.

---

##### `DxGatewayOwnerAccountId`<sup>Required</sup> <a name="DxGatewayOwnerAccountId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.dxGatewayOwnerAccountId"></a>

```csharp
public string DxGatewayOwnerAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#dx_gateway_owner_account_id DxGatewayAssociationProposal#dx_gateway_owner_account_id}.

---

##### `AllowedPrefixes`<sup>Optional</sup> <a name="AllowedPrefixes" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.allowedPrefixes"></a>

```csharp
public string[] AllowedPrefixes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#allowed_prefixes DxGatewayAssociationProposal#allowed_prefixes}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#id DxGatewayAssociationProposal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



