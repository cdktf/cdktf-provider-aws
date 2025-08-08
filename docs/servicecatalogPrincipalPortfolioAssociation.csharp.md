# `servicecatalogPrincipalPortfolioAssociation` Submodule <a name="`servicecatalogPrincipalPortfolioAssociation` Submodule" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogPrincipalPortfolioAssociation <a name="ServicecatalogPrincipalPortfolioAssociation" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/servicecatalog_principal_portfolio_association aws_servicecatalog_principal_portfolio_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ServicecatalogPrincipalPortfolioAssociation(Construct Scope, string Id, ServicecatalogPrincipalPortfolioAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationConfig">ServicecatalogPrincipalPortfolioAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationConfig">ServicecatalogPrincipalPortfolioAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.resetAcceptLanguage">ResetAcceptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.resetPrincipalType">ResetPrincipalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.putTimeouts"></a>

```csharp
private void PutTimeouts(ServicecatalogPrincipalPortfolioAssociationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeouts">ServicecatalogPrincipalPortfolioAssociationTimeouts</a>

---

##### `ResetAcceptLanguage` <a name="ResetAcceptLanguage" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.resetAcceptLanguage"></a>

```csharp
private void ResetAcceptLanguage()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPrincipalType` <a name="ResetPrincipalType" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.resetPrincipalType"></a>

```csharp
private void ResetPrincipalType()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ServicecatalogPrincipalPortfolioAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ServicecatalogPrincipalPortfolioAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ServicecatalogPrincipalPortfolioAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ServicecatalogPrincipalPortfolioAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ServicecatalogPrincipalPortfolioAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ServicecatalogPrincipalPortfolioAssociation resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicecatalogPrincipalPortfolioAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicecatalogPrincipalPortfolioAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/servicecatalog_principal_portfolio_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ServicecatalogPrincipalPortfolioAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference">ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.acceptLanguageInput">AcceptLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.portfolioIdInput">PortfolioIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.principalArnInput">PrincipalArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.principalTypeInput">PrincipalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.acceptLanguage">AcceptLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.portfolioId">PortfolioId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.principalArn">PrincipalArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.principalType">PrincipalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.timeouts"></a>

```csharp
public ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference">ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference</a>

---

##### `AcceptLanguageInput`<sup>Optional</sup> <a name="AcceptLanguageInput" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.acceptLanguageInput"></a>

```csharp
public string AcceptLanguageInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PortfolioIdInput`<sup>Optional</sup> <a name="PortfolioIdInput" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.portfolioIdInput"></a>

```csharp
public string PortfolioIdInput { get; }
```

- *Type:* string

---

##### `PrincipalArnInput`<sup>Optional</sup> <a name="PrincipalArnInput" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.principalArnInput"></a>

```csharp
public string PrincipalArnInput { get; }
```

- *Type:* string

---

##### `PrincipalTypeInput`<sup>Optional</sup> <a name="PrincipalTypeInput" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.principalTypeInput"></a>

```csharp
public string PrincipalTypeInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AcceptLanguage`<sup>Required</sup> <a name="AcceptLanguage" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.acceptLanguage"></a>

```csharp
public string AcceptLanguage { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PortfolioId`<sup>Required</sup> <a name="PortfolioId" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.portfolioId"></a>

```csharp
public string PortfolioId { get; }
```

- *Type:* string

---

##### `PrincipalArn`<sup>Required</sup> <a name="PrincipalArn" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.principalArn"></a>

```csharp
public string PrincipalArn { get; }
```

- *Type:* string

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.principalType"></a>

```csharp
public string PrincipalType { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogPrincipalPortfolioAssociationConfig <a name="ServicecatalogPrincipalPortfolioAssociationConfig" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ServicecatalogPrincipalPortfolioAssociationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string PortfolioId,
    string PrincipalArn,
    string AcceptLanguage = null,
    string Id = null,
    string PrincipalType = null,
    string Region = null,
    ServicecatalogPrincipalPortfolioAssociationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationConfig.property.portfolioId">PortfolioId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/servicecatalog_principal_portfolio_association#portfolio_id ServicecatalogPrincipalPortfolioAssociation#portfolio_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationConfig.property.principalArn">PrincipalArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/servicecatalog_principal_portfolio_association#principal_arn ServicecatalogPrincipalPortfolioAssociation#principal_arn}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationConfig.property.acceptLanguage">AcceptLanguage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/servicecatalog_principal_portfolio_association#accept_language ServicecatalogPrincipalPortfolioAssociation#accept_language}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/servicecatalog_principal_portfolio_association#id ServicecatalogPrincipalPortfolioAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationConfig.property.principalType">PrincipalType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/servicecatalog_principal_portfolio_association#principal_type ServicecatalogPrincipalPortfolioAssociation#principal_type}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeouts">ServicecatalogPrincipalPortfolioAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `PortfolioId`<sup>Required</sup> <a name="PortfolioId" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationConfig.property.portfolioId"></a>

```csharp
public string PortfolioId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/servicecatalog_principal_portfolio_association#portfolio_id ServicecatalogPrincipalPortfolioAssociation#portfolio_id}.

---

##### `PrincipalArn`<sup>Required</sup> <a name="PrincipalArn" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationConfig.property.principalArn"></a>

```csharp
public string PrincipalArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/servicecatalog_principal_portfolio_association#principal_arn ServicecatalogPrincipalPortfolioAssociation#principal_arn}.

---

##### `AcceptLanguage`<sup>Optional</sup> <a name="AcceptLanguage" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationConfig.property.acceptLanguage"></a>

```csharp
public string AcceptLanguage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/servicecatalog_principal_portfolio_association#accept_language ServicecatalogPrincipalPortfolioAssociation#accept_language}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/servicecatalog_principal_portfolio_association#id ServicecatalogPrincipalPortfolioAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrincipalType`<sup>Optional</sup> <a name="PrincipalType" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationConfig.property.principalType"></a>

```csharp
public string PrincipalType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/servicecatalog_principal_portfolio_association#principal_type ServicecatalogPrincipalPortfolioAssociation#principal_type}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/servicecatalog_principal_portfolio_association#region ServicecatalogPrincipalPortfolioAssociation#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationConfig.property.timeouts"></a>

```csharp
public ServicecatalogPrincipalPortfolioAssociationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeouts">ServicecatalogPrincipalPortfolioAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/servicecatalog_principal_portfolio_association#timeouts ServicecatalogPrincipalPortfolioAssociation#timeouts}

---

### ServicecatalogPrincipalPortfolioAssociationTimeouts <a name="ServicecatalogPrincipalPortfolioAssociationTimeouts" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ServicecatalogPrincipalPortfolioAssociationTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/servicecatalog_principal_portfolio_association#create ServicecatalogPrincipalPortfolioAssociation#create}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/servicecatalog_principal_portfolio_association#delete ServicecatalogPrincipalPortfolioAssociation#delete}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/servicecatalog_principal_portfolio_association#read ServicecatalogPrincipalPortfolioAssociation#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/servicecatalog_principal_portfolio_association#create ServicecatalogPrincipalPortfolioAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/servicecatalog_principal_portfolio_association#delete ServicecatalogPrincipalPortfolioAssociation#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/servicecatalog_principal_portfolio_association#read ServicecatalogPrincipalPortfolioAssociation#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference <a name="ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.servicecatalogPrincipalPortfolioAssociation.ServicecatalogPrincipalPortfolioAssociationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



