# `dxGatewayAssociation` Submodule <a name="`dxGatewayAssociation` Submodule" id="@cdktf/provider-aws.dxGatewayAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DxGatewayAssociation <a name="DxGatewayAssociation" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association aws_dx_gateway_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DxGatewayAssociation(Construct Scope, string Id, DxGatewayAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig">DxGatewayAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig">DxGatewayAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.resetAllowedPrefixes">ResetAllowedPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.resetAssociatedGatewayId">ResetAssociatedGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.resetAssociatedGatewayOwnerAccountId">ResetAssociatedGatewayOwnerAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.resetProposalId">ResetProposalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.resetVpnGatewayId">ResetVpnGatewayId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.putTimeouts"></a>

```csharp
private void PutTimeouts(DxGatewayAssociationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeouts">DxGatewayAssociationTimeouts</a>

---

##### `ResetAllowedPrefixes` <a name="ResetAllowedPrefixes" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.resetAllowedPrefixes"></a>

```csharp
private void ResetAllowedPrefixes()
```

##### `ResetAssociatedGatewayId` <a name="ResetAssociatedGatewayId" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.resetAssociatedGatewayId"></a>

```csharp
private void ResetAssociatedGatewayId()
```

##### `ResetAssociatedGatewayOwnerAccountId` <a name="ResetAssociatedGatewayOwnerAccountId" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.resetAssociatedGatewayOwnerAccountId"></a>

```csharp
private void ResetAssociatedGatewayOwnerAccountId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProposalId` <a name="ResetProposalId" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.resetProposalId"></a>

```csharp
private void ResetProposalId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVpnGatewayId` <a name="ResetVpnGatewayId" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.resetVpnGatewayId"></a>

```csharp
private void ResetVpnGatewayId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DxGatewayAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DxGatewayAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DxGatewayAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.associatedGatewayType">AssociatedGatewayType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.dxGatewayAssociationId">DxGatewayAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.dxGatewayOwnerAccountId">DxGatewayOwnerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference">DxGatewayAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.allowedPrefixesInput">AllowedPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.associatedGatewayIdInput">AssociatedGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.associatedGatewayOwnerAccountIdInput">AssociatedGatewayOwnerAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.dxGatewayIdInput">DxGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.proposalIdInput">ProposalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.vpnGatewayIdInput">VpnGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.allowedPrefixes">AllowedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.associatedGatewayId">AssociatedGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.associatedGatewayOwnerAccountId">AssociatedGatewayOwnerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.dxGatewayId">DxGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.proposalId">ProposalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.vpnGatewayId">VpnGatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AssociatedGatewayType`<sup>Required</sup> <a name="AssociatedGatewayType" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.associatedGatewayType"></a>

```csharp
public string AssociatedGatewayType { get; }
```

- *Type:* string

---

##### `DxGatewayAssociationId`<sup>Required</sup> <a name="DxGatewayAssociationId" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.dxGatewayAssociationId"></a>

```csharp
public string DxGatewayAssociationId { get; }
```

- *Type:* string

---

##### `DxGatewayOwnerAccountId`<sup>Required</sup> <a name="DxGatewayOwnerAccountId" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.dxGatewayOwnerAccountId"></a>

```csharp
public string DxGatewayOwnerAccountId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.timeouts"></a>

```csharp
public DxGatewayAssociationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference">DxGatewayAssociationTimeoutsOutputReference</a>

---

##### `AllowedPrefixesInput`<sup>Optional</sup> <a name="AllowedPrefixesInput" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.allowedPrefixesInput"></a>

```csharp
public string[] AllowedPrefixesInput { get; }
```

- *Type:* string[]

---

##### `AssociatedGatewayIdInput`<sup>Optional</sup> <a name="AssociatedGatewayIdInput" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.associatedGatewayIdInput"></a>

```csharp
public string AssociatedGatewayIdInput { get; }
```

- *Type:* string

---

##### `AssociatedGatewayOwnerAccountIdInput`<sup>Optional</sup> <a name="AssociatedGatewayOwnerAccountIdInput" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.associatedGatewayOwnerAccountIdInput"></a>

```csharp
public string AssociatedGatewayOwnerAccountIdInput { get; }
```

- *Type:* string

---

##### `DxGatewayIdInput`<sup>Optional</sup> <a name="DxGatewayIdInput" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.dxGatewayIdInput"></a>

```csharp
public string DxGatewayIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProposalIdInput`<sup>Optional</sup> <a name="ProposalIdInput" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.proposalIdInput"></a>

```csharp
public string ProposalIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VpnGatewayIdInput`<sup>Optional</sup> <a name="VpnGatewayIdInput" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.vpnGatewayIdInput"></a>

```csharp
public string VpnGatewayIdInput { get; }
```

- *Type:* string

---

##### `AllowedPrefixes`<sup>Required</sup> <a name="AllowedPrefixes" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.allowedPrefixes"></a>

```csharp
public string[] AllowedPrefixes { get; }
```

- *Type:* string[]

---

##### `AssociatedGatewayId`<sup>Required</sup> <a name="AssociatedGatewayId" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.associatedGatewayId"></a>

```csharp
public string AssociatedGatewayId { get; }
```

- *Type:* string

---

##### `AssociatedGatewayOwnerAccountId`<sup>Required</sup> <a name="AssociatedGatewayOwnerAccountId" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.associatedGatewayOwnerAccountId"></a>

```csharp
public string AssociatedGatewayOwnerAccountId { get; }
```

- *Type:* string

---

##### `DxGatewayId`<sup>Required</sup> <a name="DxGatewayId" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.dxGatewayId"></a>

```csharp
public string DxGatewayId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProposalId`<sup>Required</sup> <a name="ProposalId" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.proposalId"></a>

```csharp
public string ProposalId { get; }
```

- *Type:* string

---

##### `VpnGatewayId`<sup>Required</sup> <a name="VpnGatewayId" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.vpnGatewayId"></a>

```csharp
public string VpnGatewayId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DxGatewayAssociationConfig <a name="DxGatewayAssociationConfig" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DxGatewayAssociationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DxGatewayId,
    string[] AllowedPrefixes = null,
    string AssociatedGatewayId = null,
    string AssociatedGatewayOwnerAccountId = null,
    string Id = null,
    string ProposalId = null,
    DxGatewayAssociationTimeouts Timeouts = null,
    string VpnGatewayId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.dxGatewayId">DxGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#dx_gateway_id DxGatewayAssociation#dx_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.allowedPrefixes">AllowedPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#allowed_prefixes DxGatewayAssociation#allowed_prefixes}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.associatedGatewayId">AssociatedGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#associated_gateway_id DxGatewayAssociation#associated_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.associatedGatewayOwnerAccountId">AssociatedGatewayOwnerAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#associated_gateway_owner_account_id DxGatewayAssociation#associated_gateway_owner_account_id}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#id DxGatewayAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.proposalId">ProposalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#proposal_id DxGatewayAssociation#proposal_id}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeouts">DxGatewayAssociationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.vpnGatewayId">VpnGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#vpn_gateway_id DxGatewayAssociation#vpn_gateway_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DxGatewayId`<sup>Required</sup> <a name="DxGatewayId" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.dxGatewayId"></a>

```csharp
public string DxGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#dx_gateway_id DxGatewayAssociation#dx_gateway_id}.

---

##### `AllowedPrefixes`<sup>Optional</sup> <a name="AllowedPrefixes" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.allowedPrefixes"></a>

```csharp
public string[] AllowedPrefixes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#allowed_prefixes DxGatewayAssociation#allowed_prefixes}.

---

##### `AssociatedGatewayId`<sup>Optional</sup> <a name="AssociatedGatewayId" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.associatedGatewayId"></a>

```csharp
public string AssociatedGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#associated_gateway_id DxGatewayAssociation#associated_gateway_id}.

---

##### `AssociatedGatewayOwnerAccountId`<sup>Optional</sup> <a name="AssociatedGatewayOwnerAccountId" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.associatedGatewayOwnerAccountId"></a>

```csharp
public string AssociatedGatewayOwnerAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#associated_gateway_owner_account_id DxGatewayAssociation#associated_gateway_owner_account_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#id DxGatewayAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProposalId`<sup>Optional</sup> <a name="ProposalId" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.proposalId"></a>

```csharp
public string ProposalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#proposal_id DxGatewayAssociation#proposal_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.timeouts"></a>

```csharp
public DxGatewayAssociationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeouts">DxGatewayAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#timeouts DxGatewayAssociation#timeouts}

---

##### `VpnGatewayId`<sup>Optional</sup> <a name="VpnGatewayId" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationConfig.property.vpnGatewayId"></a>

```csharp
public string VpnGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#vpn_gateway_id DxGatewayAssociation#vpn_gateway_id}.

---

### DxGatewayAssociationTimeouts <a name="DxGatewayAssociationTimeouts" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DxGatewayAssociationTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#create DxGatewayAssociation#create}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#delete DxGatewayAssociation#delete}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#update DxGatewayAssociation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#create DxGatewayAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#delete DxGatewayAssociation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association#update DxGatewayAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DxGatewayAssociationTimeoutsOutputReference <a name="DxGatewayAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DxGatewayAssociationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dxGatewayAssociation.DxGatewayAssociationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



