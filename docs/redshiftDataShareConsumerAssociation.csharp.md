# `redshiftDataShareConsumerAssociation` Submodule <a name="`redshiftDataShareConsumerAssociation` Submodule" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftDataShareConsumerAssociation <a name="RedshiftDataShareConsumerAssociation" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/redshift_data_share_consumer_association aws_redshift_data_share_consumer_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RedshiftDataShareConsumerAssociation(Construct Scope, string Id, RedshiftDataShareConsumerAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig">RedshiftDataShareConsumerAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig">RedshiftDataShareConsumerAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetAllowWrites">ResetAllowWrites</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetAssociateEntireAccount">ResetAssociateEntireAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetConsumerArn">ResetConsumerArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetConsumerRegion">ResetConsumerRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowWrites` <a name="ResetAllowWrites" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetAllowWrites"></a>

```csharp
private void ResetAllowWrites()
```

##### `ResetAssociateEntireAccount` <a name="ResetAssociateEntireAccount" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetAssociateEntireAccount"></a>

```csharp
private void ResetAssociateEntireAccount()
```

##### `ResetConsumerArn` <a name="ResetConsumerArn" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetConsumerArn"></a>

```csharp
private void ResetConsumerArn()
```

##### `ResetConsumerRegion` <a name="ResetConsumerRegion" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetConsumerRegion"></a>

```csharp
private void ResetConsumerRegion()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RedshiftDataShareConsumerAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

RedshiftDataShareConsumerAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

RedshiftDataShareConsumerAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

RedshiftDataShareConsumerAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

RedshiftDataShareConsumerAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a RedshiftDataShareConsumerAssociation resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RedshiftDataShareConsumerAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RedshiftDataShareConsumerAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/redshift_data_share_consumer_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the RedshiftDataShareConsumerAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.managedBy">ManagedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.producerArn">ProducerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.allowWritesInput">AllowWritesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.associateEntireAccountInput">AssociateEntireAccountInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.consumerArnInput">ConsumerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.consumerRegionInput">ConsumerRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.dataShareArnInput">DataShareArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.allowWrites">AllowWrites</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.associateEntireAccount">AssociateEntireAccount</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.consumerArn">ConsumerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.consumerRegion">ConsumerRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.dataShareArn">DataShareArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagedBy`<sup>Required</sup> <a name="ManagedBy" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.managedBy"></a>

```csharp
public string ManagedBy { get; }
```

- *Type:* string

---

##### `ProducerArn`<sup>Required</sup> <a name="ProducerArn" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.producerArn"></a>

```csharp
public string ProducerArn { get; }
```

- *Type:* string

---

##### `AllowWritesInput`<sup>Optional</sup> <a name="AllowWritesInput" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.allowWritesInput"></a>

```csharp
public object AllowWritesInput { get; }
```

- *Type:* object

---

##### `AssociateEntireAccountInput`<sup>Optional</sup> <a name="AssociateEntireAccountInput" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.associateEntireAccountInput"></a>

```csharp
public object AssociateEntireAccountInput { get; }
```

- *Type:* object

---

##### `ConsumerArnInput`<sup>Optional</sup> <a name="ConsumerArnInput" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.consumerArnInput"></a>

```csharp
public string ConsumerArnInput { get; }
```

- *Type:* string

---

##### `ConsumerRegionInput`<sup>Optional</sup> <a name="ConsumerRegionInput" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.consumerRegionInput"></a>

```csharp
public string ConsumerRegionInput { get; }
```

- *Type:* string

---

##### `DataShareArnInput`<sup>Optional</sup> <a name="DataShareArnInput" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.dataShareArnInput"></a>

```csharp
public string DataShareArnInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `AllowWrites`<sup>Required</sup> <a name="AllowWrites" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.allowWrites"></a>

```csharp
public object AllowWrites { get; }
```

- *Type:* object

---

##### `AssociateEntireAccount`<sup>Required</sup> <a name="AssociateEntireAccount" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.associateEntireAccount"></a>

```csharp
public object AssociateEntireAccount { get; }
```

- *Type:* object

---

##### `ConsumerArn`<sup>Required</sup> <a name="ConsumerArn" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.consumerArn"></a>

```csharp
public string ConsumerArn { get; }
```

- *Type:* string

---

##### `ConsumerRegion`<sup>Required</sup> <a name="ConsumerRegion" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.consumerRegion"></a>

```csharp
public string ConsumerRegion { get; }
```

- *Type:* string

---

##### `DataShareArn`<sup>Required</sup> <a name="DataShareArn" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.dataShareArn"></a>

```csharp
public string DataShareArn { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftDataShareConsumerAssociationConfig <a name="RedshiftDataShareConsumerAssociationConfig" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RedshiftDataShareConsumerAssociationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DataShareArn,
    object AllowWrites = null,
    object AssociateEntireAccount = null,
    string ConsumerArn = null,
    string ConsumerRegion = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.dataShareArn">DataShareArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/redshift_data_share_consumer_association#data_share_arn RedshiftDataShareConsumerAssociation#data_share_arn}. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.allowWrites">AllowWrites</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/redshift_data_share_consumer_association#allow_writes RedshiftDataShareConsumerAssociation#allow_writes}. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.associateEntireAccount">AssociateEntireAccount</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/redshift_data_share_consumer_association#associate_entire_account RedshiftDataShareConsumerAssociation#associate_entire_account}. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.consumerArn">ConsumerArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/redshift_data_share_consumer_association#consumer_arn RedshiftDataShareConsumerAssociation#consumer_arn}. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.consumerRegion">ConsumerRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/redshift_data_share_consumer_association#consumer_region RedshiftDataShareConsumerAssociation#consumer_region}. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DataShareArn`<sup>Required</sup> <a name="DataShareArn" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.dataShareArn"></a>

```csharp
public string DataShareArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/redshift_data_share_consumer_association#data_share_arn RedshiftDataShareConsumerAssociation#data_share_arn}.

---

##### `AllowWrites`<sup>Optional</sup> <a name="AllowWrites" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.allowWrites"></a>

```csharp
public object AllowWrites { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/redshift_data_share_consumer_association#allow_writes RedshiftDataShareConsumerAssociation#allow_writes}.

---

##### `AssociateEntireAccount`<sup>Optional</sup> <a name="AssociateEntireAccount" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.associateEntireAccount"></a>

```csharp
public object AssociateEntireAccount { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/redshift_data_share_consumer_association#associate_entire_account RedshiftDataShareConsumerAssociation#associate_entire_account}.

---

##### `ConsumerArn`<sup>Optional</sup> <a name="ConsumerArn" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.consumerArn"></a>

```csharp
public string ConsumerArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/redshift_data_share_consumer_association#consumer_arn RedshiftDataShareConsumerAssociation#consumer_arn}.

---

##### `ConsumerRegion`<sup>Optional</sup> <a name="ConsumerRegion" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.consumerRegion"></a>

```csharp
public string ConsumerRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/redshift_data_share_consumer_association#consumer_region RedshiftDataShareConsumerAssociation#consumer_region}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/redshift_data_share_consumer_association#region RedshiftDataShareConsumerAssociation#region}

---



