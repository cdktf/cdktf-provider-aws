# `redshiftserverlessCustomDomainAssociation` Submodule <a name="`redshiftserverlessCustomDomainAssociation` Submodule" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftserverlessCustomDomainAssociation <a name="RedshiftserverlessCustomDomainAssociation" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshiftserverless_custom_domain_association aws_redshiftserverless_custom_domain_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RedshiftserverlessCustomDomainAssociation(Construct Scope, string Id, RedshiftserverlessCustomDomainAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig">RedshiftserverlessCustomDomainAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig">RedshiftserverlessCustomDomainAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RedshiftserverlessCustomDomainAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

RedshiftserverlessCustomDomainAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

RedshiftserverlessCustomDomainAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

RedshiftserverlessCustomDomainAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

RedshiftserverlessCustomDomainAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a RedshiftserverlessCustomDomainAssociation resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RedshiftserverlessCustomDomainAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RedshiftserverlessCustomDomainAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshiftserverless_custom_domain_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the RedshiftserverlessCustomDomainAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.customDomainCertificateExpiryTime">CustomDomainCertificateExpiryTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.customDomainCertificateArnInput">CustomDomainCertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.customDomainNameInput">CustomDomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.workgroupNameInput">WorkgroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.customDomainCertificateArn">CustomDomainCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.customDomainName">CustomDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.workgroupName">WorkgroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CustomDomainCertificateExpiryTime`<sup>Required</sup> <a name="CustomDomainCertificateExpiryTime" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.customDomainCertificateExpiryTime"></a>

```csharp
public string CustomDomainCertificateExpiryTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `CustomDomainCertificateArnInput`<sup>Optional</sup> <a name="CustomDomainCertificateArnInput" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.customDomainCertificateArnInput"></a>

```csharp
public string CustomDomainCertificateArnInput { get; }
```

- *Type:* string

---

##### `CustomDomainNameInput`<sup>Optional</sup> <a name="CustomDomainNameInput" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.customDomainNameInput"></a>

```csharp
public string CustomDomainNameInput { get; }
```

- *Type:* string

---

##### `WorkgroupNameInput`<sup>Optional</sup> <a name="WorkgroupNameInput" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.workgroupNameInput"></a>

```csharp
public string WorkgroupNameInput { get; }
```

- *Type:* string

---

##### `CustomDomainCertificateArn`<sup>Required</sup> <a name="CustomDomainCertificateArn" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.customDomainCertificateArn"></a>

```csharp
public string CustomDomainCertificateArn { get; }
```

- *Type:* string

---

##### `CustomDomainName`<sup>Required</sup> <a name="CustomDomainName" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.customDomainName"></a>

```csharp
public string CustomDomainName { get; }
```

- *Type:* string

---

##### `WorkgroupName`<sup>Required</sup> <a name="WorkgroupName" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.workgroupName"></a>

```csharp
public string WorkgroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftserverlessCustomDomainAssociationConfig <a name="RedshiftserverlessCustomDomainAssociationConfig" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RedshiftserverlessCustomDomainAssociationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CustomDomainCertificateArn,
    string CustomDomainName,
    string WorkgroupName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig.property.customDomainCertificateArn">CustomDomainCertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshiftserverless_custom_domain_association#custom_domain_certificate_arn RedshiftserverlessCustomDomainAssociation#custom_domain_certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig.property.customDomainName">CustomDomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshiftserverless_custom_domain_association#custom_domain_name RedshiftserverlessCustomDomainAssociation#custom_domain_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig.property.workgroupName">WorkgroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshiftserverless_custom_domain_association#workgroup_name RedshiftserverlessCustomDomainAssociation#workgroup_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CustomDomainCertificateArn`<sup>Required</sup> <a name="CustomDomainCertificateArn" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig.property.customDomainCertificateArn"></a>

```csharp
public string CustomDomainCertificateArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshiftserverless_custom_domain_association#custom_domain_certificate_arn RedshiftserverlessCustomDomainAssociation#custom_domain_certificate_arn}.

---

##### `CustomDomainName`<sup>Required</sup> <a name="CustomDomainName" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig.property.customDomainName"></a>

```csharp
public string CustomDomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshiftserverless_custom_domain_association#custom_domain_name RedshiftserverlessCustomDomainAssociation#custom_domain_name}.

---

##### `WorkgroupName`<sup>Required</sup> <a name="WorkgroupName" id="@cdktf/provider-aws.redshiftserverlessCustomDomainAssociation.RedshiftserverlessCustomDomainAssociationConfig.property.workgroupName"></a>

```csharp
public string WorkgroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/redshiftserverless_custom_domain_association#workgroup_name RedshiftserverlessCustomDomainAssociation#workgroup_name}.

---



