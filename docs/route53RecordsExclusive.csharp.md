# `route53RecordsExclusive` Submodule <a name="`route53RecordsExclusive` Submodule" id="@cdktf/provider-aws.route53RecordsExclusive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53RecordsExclusive <a name="Route53RecordsExclusive" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive aws_route53_records_exclusive}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53RecordsExclusive(Construct Scope, string Id, Route53RecordsExclusiveConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig">Route53RecordsExclusiveConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig">Route53RecordsExclusiveConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.putResourceRecordSet">PutResourceRecordSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.resetResourceRecordSet">ResetResourceRecordSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutResourceRecordSet` <a name="PutResourceRecordSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.putResourceRecordSet"></a>

```csharp
private void PutResourceRecordSet(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.putResourceRecordSet.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.putTimeouts"></a>

```csharp
private void PutTimeouts(Route53RecordsExclusiveTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeouts">Route53RecordsExclusiveTimeouts</a>

---

##### `ResetResourceRecordSet` <a name="ResetResourceRecordSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.resetResourceRecordSet"></a>

```csharp
private void ResetResourceRecordSet()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Route53RecordsExclusive resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Route53RecordsExclusive.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Route53RecordsExclusive.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Route53RecordsExclusive.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Route53RecordsExclusive.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Route53RecordsExclusive resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53RecordsExclusive to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53RecordsExclusive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Route53RecordsExclusive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.resourceRecordSet">ResourceRecordSet</a></code> | <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList">Route53RecordsExclusiveResourceRecordSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference">Route53RecordsExclusiveTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.resourceRecordSetInput">ResourceRecordSetInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ResourceRecordSet`<sup>Required</sup> <a name="ResourceRecordSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.resourceRecordSet"></a>

```csharp
public Route53RecordsExclusiveResourceRecordSetList ResourceRecordSet { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList">Route53RecordsExclusiveResourceRecordSetList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.timeouts"></a>

```csharp
public Route53RecordsExclusiveTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference">Route53RecordsExclusiveTimeoutsOutputReference</a>

---

##### `ResourceRecordSetInput`<sup>Optional</sup> <a name="ResourceRecordSetInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.resourceRecordSetInput"></a>

```csharp
public object ResourceRecordSetInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53RecordsExclusiveConfig <a name="Route53RecordsExclusiveConfig" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53RecordsExclusiveConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ZoneId,
    object ResourceRecordSet = null,
    Route53RecordsExclusiveTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#zone_id Route53RecordsExclusive#zone_id}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.resourceRecordSet">ResourceRecordSet</a></code> | <code>object</code> | resource_record_set block. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeouts">Route53RecordsExclusiveTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#zone_id Route53RecordsExclusive#zone_id}.

---

##### `ResourceRecordSet`<sup>Optional</sup> <a name="ResourceRecordSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.resourceRecordSet"></a>

```csharp
public object ResourceRecordSet { get; set; }
```

- *Type:* object

resource_record_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#resource_record_set Route53RecordsExclusive#resource_record_set}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.timeouts"></a>

```csharp
public Route53RecordsExclusiveTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeouts">Route53RecordsExclusiveTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#timeouts Route53RecordsExclusive#timeouts}

---

### Route53RecordsExclusiveResourceRecordSet <a name="Route53RecordsExclusiveResourceRecordSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53RecordsExclusiveResourceRecordSet {
    string Name,
    object AliasTarget = null,
    object CidrRoutingConfig = null,
    string Failover = null,
    object Geolocation = null,
    object GeoproximityLocation = null,
    string HealthCheckId = null,
    object MultiValueAnswer = null,
    string Region = null,
    object ResourceRecords = null,
    string SetIdentifier = null,
    string TrafficPolicyInstanceId = null,
    double Ttl = null,
    string Type = null,
    double Weight = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#name Route53RecordsExclusive#name}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.aliasTarget">AliasTarget</a></code> | <code>object</code> | alias_target block. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.cidrRoutingConfig">CidrRoutingConfig</a></code> | <code>object</code> | cidr_routing_config block. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.failover">Failover</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#failover Route53RecordsExclusive#failover}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.geolocation">Geolocation</a></code> | <code>object</code> | geolocation block. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.geoproximityLocation">GeoproximityLocation</a></code> | <code>object</code> | geoproximity_location block. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.healthCheckId">HealthCheckId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#health_check_id Route53RecordsExclusive#health_check_id}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.multiValueAnswer">MultiValueAnswer</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#multi_value_answer Route53RecordsExclusive#multi_value_answer}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#region Route53RecordsExclusive#region}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.resourceRecords">ResourceRecords</a></code> | <code>object</code> | resource_records block. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.setIdentifier">SetIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#set_identifier Route53RecordsExclusive#set_identifier}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.trafficPolicyInstanceId">TrafficPolicyInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#traffic_policy_instance_id Route53RecordsExclusive#traffic_policy_instance_id}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.ttl">Ttl</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#ttl Route53RecordsExclusive#ttl}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#type Route53RecordsExclusive#type}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.weight">Weight</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#weight Route53RecordsExclusive#weight}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#name Route53RecordsExclusive#name}.

---

##### `AliasTarget`<sup>Optional</sup> <a name="AliasTarget" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.aliasTarget"></a>

```csharp
public object AliasTarget { get; set; }
```

- *Type:* object

alias_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#alias_target Route53RecordsExclusive#alias_target}

---

##### `CidrRoutingConfig`<sup>Optional</sup> <a name="CidrRoutingConfig" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.cidrRoutingConfig"></a>

```csharp
public object CidrRoutingConfig { get; set; }
```

- *Type:* object

cidr_routing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#cidr_routing_config Route53RecordsExclusive#cidr_routing_config}

---

##### `Failover`<sup>Optional</sup> <a name="Failover" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.failover"></a>

```csharp
public string Failover { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#failover Route53RecordsExclusive#failover}.

---

##### `Geolocation`<sup>Optional</sup> <a name="Geolocation" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.geolocation"></a>

```csharp
public object Geolocation { get; set; }
```

- *Type:* object

geolocation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#geolocation Route53RecordsExclusive#geolocation}

---

##### `GeoproximityLocation`<sup>Optional</sup> <a name="GeoproximityLocation" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.geoproximityLocation"></a>

```csharp
public object GeoproximityLocation { get; set; }
```

- *Type:* object

geoproximity_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#geoproximity_location Route53RecordsExclusive#geoproximity_location}

---

##### `HealthCheckId`<sup>Optional</sup> <a name="HealthCheckId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.healthCheckId"></a>

```csharp
public string HealthCheckId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#health_check_id Route53RecordsExclusive#health_check_id}.

---

##### `MultiValueAnswer`<sup>Optional</sup> <a name="MultiValueAnswer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.multiValueAnswer"></a>

```csharp
public object MultiValueAnswer { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#multi_value_answer Route53RecordsExclusive#multi_value_answer}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#region Route53RecordsExclusive#region}.

---

##### `ResourceRecords`<sup>Optional</sup> <a name="ResourceRecords" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.resourceRecords"></a>

```csharp
public object ResourceRecords { get; set; }
```

- *Type:* object

resource_records block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#resource_records Route53RecordsExclusive#resource_records}

---

##### `SetIdentifier`<sup>Optional</sup> <a name="SetIdentifier" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.setIdentifier"></a>

```csharp
public string SetIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#set_identifier Route53RecordsExclusive#set_identifier}.

---

##### `TrafficPolicyInstanceId`<sup>Optional</sup> <a name="TrafficPolicyInstanceId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.trafficPolicyInstanceId"></a>

```csharp
public string TrafficPolicyInstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#traffic_policy_instance_id Route53RecordsExclusive#traffic_policy_instance_id}.

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.ttl"></a>

```csharp
public double Ttl { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#ttl Route53RecordsExclusive#ttl}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#type Route53RecordsExclusive#type}.

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#weight Route53RecordsExclusive#weight}.

---

### Route53RecordsExclusiveResourceRecordSetAliasTarget <a name="Route53RecordsExclusiveResourceRecordSetAliasTarget" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53RecordsExclusiveResourceRecordSetAliasTarget {
    string DnsName,
    object EvaluateTargetHealth,
    string HostedZoneId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget.property.dnsName">DnsName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#dns_name Route53RecordsExclusive#dns_name}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget.property.evaluateTargetHealth">EvaluateTargetHealth</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#evaluate_target_health Route53RecordsExclusive#evaluate_target_health}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget.property.hostedZoneId">HostedZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#hosted_zone_id Route53RecordsExclusive#hosted_zone_id}. |

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget.property.dnsName"></a>

```csharp
public string DnsName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#dns_name Route53RecordsExclusive#dns_name}.

---

##### `EvaluateTargetHealth`<sup>Required</sup> <a name="EvaluateTargetHealth" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget.property.evaluateTargetHealth"></a>

```csharp
public object EvaluateTargetHealth { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#evaluate_target_health Route53RecordsExclusive#evaluate_target_health}.

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget.property.hostedZoneId"></a>

```csharp
public string HostedZoneId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#hosted_zone_id Route53RecordsExclusive#hosted_zone_id}.

---

### Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig <a name="Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig {
    string CollectionId,
    string LocationName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig.property.collectionId">CollectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#collection_id Route53RecordsExclusive#collection_id}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig.property.locationName">LocationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#location_name Route53RecordsExclusive#location_name}. |

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig.property.collectionId"></a>

```csharp
public string CollectionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#collection_id Route53RecordsExclusive#collection_id}.

---

##### `LocationName`<sup>Required</sup> <a name="LocationName" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig.property.locationName"></a>

```csharp
public string LocationName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#location_name Route53RecordsExclusive#location_name}.

---

### Route53RecordsExclusiveResourceRecordSetGeolocation <a name="Route53RecordsExclusiveResourceRecordSetGeolocation" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53RecordsExclusiveResourceRecordSetGeolocation {
    string ContinentCode = null,
    string CountryCode = null,
    string SubdivisionCode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation.property.continentCode">ContinentCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#continent_code Route53RecordsExclusive#continent_code}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation.property.countryCode">CountryCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#country_code Route53RecordsExclusive#country_code}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation.property.subdivisionCode">SubdivisionCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#subdivision_code Route53RecordsExclusive#subdivision_code}. |

---

##### `ContinentCode`<sup>Optional</sup> <a name="ContinentCode" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation.property.continentCode"></a>

```csharp
public string ContinentCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#continent_code Route53RecordsExclusive#continent_code}.

---

##### `CountryCode`<sup>Optional</sup> <a name="CountryCode" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation.property.countryCode"></a>

```csharp
public string CountryCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#country_code Route53RecordsExclusive#country_code}.

---

##### `SubdivisionCode`<sup>Optional</sup> <a name="SubdivisionCode" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation.property.subdivisionCode"></a>

```csharp
public string SubdivisionCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#subdivision_code Route53RecordsExclusive#subdivision_code}.

---

### Route53RecordsExclusiveResourceRecordSetGeoproximityLocation <a name="Route53RecordsExclusiveResourceRecordSetGeoproximityLocation" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53RecordsExclusiveResourceRecordSetGeoproximityLocation {
    string AwsRegion = null,
    double Bias = null,
    object Coordinates = null,
    string LocalZoneGroup = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation.property.awsRegion">AwsRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#aws_region Route53RecordsExclusive#aws_region}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation.property.bias">Bias</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#bias Route53RecordsExclusive#bias}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation.property.coordinates">Coordinates</a></code> | <code>object</code> | coordinates block. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation.property.localZoneGroup">LocalZoneGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#local_zone_group Route53RecordsExclusive#local_zone_group}. |

---

##### `AwsRegion`<sup>Optional</sup> <a name="AwsRegion" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation.property.awsRegion"></a>

```csharp
public string AwsRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#aws_region Route53RecordsExclusive#aws_region}.

---

##### `Bias`<sup>Optional</sup> <a name="Bias" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation.property.bias"></a>

```csharp
public double Bias { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#bias Route53RecordsExclusive#bias}.

---

##### `Coordinates`<sup>Optional</sup> <a name="Coordinates" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation.property.coordinates"></a>

```csharp
public object Coordinates { get; set; }
```

- *Type:* object

coordinates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#coordinates Route53RecordsExclusive#coordinates}

---

##### `LocalZoneGroup`<sup>Optional</sup> <a name="LocalZoneGroup" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation.property.localZoneGroup"></a>

```csharp
public string LocalZoneGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#local_zone_group Route53RecordsExclusive#local_zone_group}.

---

### Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates <a name="Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates {
    string Latitude,
    string Longitude
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates.property.latitude">Latitude</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#latitude Route53RecordsExclusive#latitude}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates.property.longitude">Longitude</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#longitude Route53RecordsExclusive#longitude}. |

---

##### `Latitude`<sup>Required</sup> <a name="Latitude" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates.property.latitude"></a>

```csharp
public string Latitude { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#latitude Route53RecordsExclusive#latitude}.

---

##### `Longitude`<sup>Required</sup> <a name="Longitude" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates.property.longitude"></a>

```csharp
public string Longitude { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#longitude Route53RecordsExclusive#longitude}.

---

### Route53RecordsExclusiveResourceRecordSetResourceRecords <a name="Route53RecordsExclusiveResourceRecordSetResourceRecords" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecords.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53RecordsExclusiveResourceRecordSetResourceRecords {
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecords.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#value Route53RecordsExclusive#value}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecords.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#value Route53RecordsExclusive#value}.

---

### Route53RecordsExclusiveTimeouts <a name="Route53RecordsExclusiveTimeouts" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53RecordsExclusiveTimeouts {
    string Create = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#create Route53RecordsExclusive#create}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/route53_records_exclusive#update Route53RecordsExclusive#update}

---

## Classes <a name="Classes" id="Classes"></a>

### Route53RecordsExclusiveResourceRecordSetAliasTargetList <a name="Route53RecordsExclusiveResourceRecordSetAliasTargetList" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53RecordsExclusiveResourceRecordSetAliasTargetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.get"></a>

```csharp
private Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference <a name="Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.dnsNameInput">DnsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.evaluateTargetHealthInput">EvaluateTargetHealthInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.hostedZoneIdInput">HostedZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.dnsName">DnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.evaluateTargetHealth">EvaluateTargetHealth</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.hostedZoneId">HostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsNameInput`<sup>Optional</sup> <a name="DnsNameInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.dnsNameInput"></a>

```csharp
public string DnsNameInput { get; }
```

- *Type:* string

---

##### `EvaluateTargetHealthInput`<sup>Optional</sup> <a name="EvaluateTargetHealthInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.evaluateTargetHealthInput"></a>

```csharp
public object EvaluateTargetHealthInput { get; }
```

- *Type:* object

---

##### `HostedZoneIdInput`<sup>Optional</sup> <a name="HostedZoneIdInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.hostedZoneIdInput"></a>

```csharp
public string HostedZoneIdInput { get; }
```

- *Type:* string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.dnsName"></a>

```csharp
public string DnsName { get; }
```

- *Type:* string

---

##### `EvaluateTargetHealth`<sup>Required</sup> <a name="EvaluateTargetHealth" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.evaluateTargetHealth"></a>

```csharp
public object EvaluateTargetHealth { get; }
```

- *Type:* object

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.hostedZoneId"></a>

```csharp
public string HostedZoneId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList <a name="Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.get"></a>

```csharp
private Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference <a name="Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.collectionIdInput">CollectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.locationNameInput">LocationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.collectionId">CollectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.locationName">LocationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CollectionIdInput`<sup>Optional</sup> <a name="CollectionIdInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.collectionIdInput"></a>

```csharp
public string CollectionIdInput { get; }
```

- *Type:* string

---

##### `LocationNameInput`<sup>Optional</sup> <a name="LocationNameInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.locationNameInput"></a>

```csharp
public string LocationNameInput { get; }
```

- *Type:* string

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.collectionId"></a>

```csharp
public string CollectionId { get; }
```

- *Type:* string

---

##### `LocationName`<sup>Required</sup> <a name="LocationName" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.locationName"></a>

```csharp
public string LocationName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Route53RecordsExclusiveResourceRecordSetGeolocationList <a name="Route53RecordsExclusiveResourceRecordSetGeolocationList" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53RecordsExclusiveResourceRecordSetGeolocationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.get"></a>

```csharp
private Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference <a name="Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.resetContinentCode">ResetContinentCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.resetCountryCode">ResetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.resetSubdivisionCode">ResetSubdivisionCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContinentCode` <a name="ResetContinentCode" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.resetContinentCode"></a>

```csharp
private void ResetContinentCode()
```

##### `ResetCountryCode` <a name="ResetCountryCode" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.resetCountryCode"></a>

```csharp
private void ResetCountryCode()
```

##### `ResetSubdivisionCode` <a name="ResetSubdivisionCode" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.resetSubdivisionCode"></a>

```csharp
private void ResetSubdivisionCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.continentCodeInput">ContinentCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.countryCodeInput">CountryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.subdivisionCodeInput">SubdivisionCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.continentCode">ContinentCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.countryCode">CountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.subdivisionCode">SubdivisionCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContinentCodeInput`<sup>Optional</sup> <a name="ContinentCodeInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.continentCodeInput"></a>

```csharp
public string ContinentCodeInput { get; }
```

- *Type:* string

---

##### `CountryCodeInput`<sup>Optional</sup> <a name="CountryCodeInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.countryCodeInput"></a>

```csharp
public string CountryCodeInput { get; }
```

- *Type:* string

---

##### `SubdivisionCodeInput`<sup>Optional</sup> <a name="SubdivisionCodeInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.subdivisionCodeInput"></a>

```csharp
public string SubdivisionCodeInput { get; }
```

- *Type:* string

---

##### `ContinentCode`<sup>Required</sup> <a name="ContinentCode" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.continentCode"></a>

```csharp
public string ContinentCode { get; }
```

- *Type:* string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.countryCode"></a>

```csharp
public string CountryCode { get; }
```

- *Type:* string

---

##### `SubdivisionCode`<sup>Required</sup> <a name="SubdivisionCode" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.subdivisionCode"></a>

```csharp
public string SubdivisionCode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList <a name="Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.get"></a>

```csharp
private Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference <a name="Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.latitudeInput">LatitudeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.longitudeInput">LongitudeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.latitude">Latitude</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.longitude">Longitude</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LatitudeInput`<sup>Optional</sup> <a name="LatitudeInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.latitudeInput"></a>

```csharp
public string LatitudeInput { get; }
```

- *Type:* string

---

##### `LongitudeInput`<sup>Optional</sup> <a name="LongitudeInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.longitudeInput"></a>

```csharp
public string LongitudeInput { get; }
```

- *Type:* string

---

##### `Latitude`<sup>Required</sup> <a name="Latitude" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.latitude"></a>

```csharp
public string Latitude { get; }
```

- *Type:* string

---

##### `Longitude`<sup>Required</sup> <a name="Longitude" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.longitude"></a>

```csharp
public string Longitude { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList <a name="Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.get"></a>

```csharp
private Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference <a name="Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.putCoordinates">PutCoordinates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.resetAwsRegion">ResetAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.resetBias">ResetBias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.resetCoordinates">ResetCoordinates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.resetLocalZoneGroup">ResetLocalZoneGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCoordinates` <a name="PutCoordinates" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.putCoordinates"></a>

```csharp
private void PutCoordinates(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.putCoordinates.parameter.value"></a>

- *Type:* object

---

##### `ResetAwsRegion` <a name="ResetAwsRegion" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.resetAwsRegion"></a>

```csharp
private void ResetAwsRegion()
```

##### `ResetBias` <a name="ResetBias" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.resetBias"></a>

```csharp
private void ResetBias()
```

##### `ResetCoordinates` <a name="ResetCoordinates" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.resetCoordinates"></a>

```csharp
private void ResetCoordinates()
```

##### `ResetLocalZoneGroup` <a name="ResetLocalZoneGroup" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.resetLocalZoneGroup"></a>

```csharp
private void ResetLocalZoneGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.coordinates">Coordinates</a></code> | <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList">Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.awsRegionInput">AwsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.biasInput">BiasInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.coordinatesInput">CoordinatesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.localZoneGroupInput">LocalZoneGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.awsRegion">AwsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.bias">Bias</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.localZoneGroup">LocalZoneGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Coordinates`<sup>Required</sup> <a name="Coordinates" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.coordinates"></a>

```csharp
public Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList Coordinates { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList">Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList</a>

---

##### `AwsRegionInput`<sup>Optional</sup> <a name="AwsRegionInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.awsRegionInput"></a>

```csharp
public string AwsRegionInput { get; }
```

- *Type:* string

---

##### `BiasInput`<sup>Optional</sup> <a name="BiasInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.biasInput"></a>

```csharp
public double BiasInput { get; }
```

- *Type:* double

---

##### `CoordinatesInput`<sup>Optional</sup> <a name="CoordinatesInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.coordinatesInput"></a>

```csharp
public object CoordinatesInput { get; }
```

- *Type:* object

---

##### `LocalZoneGroupInput`<sup>Optional</sup> <a name="LocalZoneGroupInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.localZoneGroupInput"></a>

```csharp
public string LocalZoneGroupInput { get; }
```

- *Type:* string

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.awsRegion"></a>

```csharp
public string AwsRegion { get; }
```

- *Type:* string

---

##### `Bias`<sup>Required</sup> <a name="Bias" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.bias"></a>

```csharp
public double Bias { get; }
```

- *Type:* double

---

##### `LocalZoneGroup`<sup>Required</sup> <a name="LocalZoneGroup" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.localZoneGroup"></a>

```csharp
public string LocalZoneGroup { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Route53RecordsExclusiveResourceRecordSetList <a name="Route53RecordsExclusiveResourceRecordSetList" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53RecordsExclusiveResourceRecordSetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.get"></a>

```csharp
private Route53RecordsExclusiveResourceRecordSetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Route53RecordsExclusiveResourceRecordSetOutputReference <a name="Route53RecordsExclusiveResourceRecordSetOutputReference" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53RecordsExclusiveResourceRecordSetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putAliasTarget">PutAliasTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putCidrRoutingConfig">PutCidrRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putGeolocation">PutGeolocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putGeoproximityLocation">PutGeoproximityLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putResourceRecords">PutResourceRecords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetAliasTarget">ResetAliasTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetCidrRoutingConfig">ResetCidrRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetFailover">ResetFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetGeolocation">ResetGeolocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetGeoproximityLocation">ResetGeoproximityLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetHealthCheckId">ResetHealthCheckId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetMultiValueAnswer">ResetMultiValueAnswer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetResourceRecords">ResetResourceRecords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetSetIdentifier">ResetSetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetTrafficPolicyInstanceId">ResetTrafficPolicyInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetTtl">ResetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAliasTarget` <a name="PutAliasTarget" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putAliasTarget"></a>

```csharp
private void PutAliasTarget(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putAliasTarget.parameter.value"></a>

- *Type:* object

---

##### `PutCidrRoutingConfig` <a name="PutCidrRoutingConfig" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putCidrRoutingConfig"></a>

```csharp
private void PutCidrRoutingConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putCidrRoutingConfig.parameter.value"></a>

- *Type:* object

---

##### `PutGeolocation` <a name="PutGeolocation" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putGeolocation"></a>

```csharp
private void PutGeolocation(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putGeolocation.parameter.value"></a>

- *Type:* object

---

##### `PutGeoproximityLocation` <a name="PutGeoproximityLocation" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putGeoproximityLocation"></a>

```csharp
private void PutGeoproximityLocation(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putGeoproximityLocation.parameter.value"></a>

- *Type:* object

---

##### `PutResourceRecords` <a name="PutResourceRecords" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putResourceRecords"></a>

```csharp
private void PutResourceRecords(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putResourceRecords.parameter.value"></a>

- *Type:* object

---

##### `ResetAliasTarget` <a name="ResetAliasTarget" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetAliasTarget"></a>

```csharp
private void ResetAliasTarget()
```

##### `ResetCidrRoutingConfig` <a name="ResetCidrRoutingConfig" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetCidrRoutingConfig"></a>

```csharp
private void ResetCidrRoutingConfig()
```

##### `ResetFailover` <a name="ResetFailover" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetFailover"></a>

```csharp
private void ResetFailover()
```

##### `ResetGeolocation` <a name="ResetGeolocation" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetGeolocation"></a>

```csharp
private void ResetGeolocation()
```

##### `ResetGeoproximityLocation` <a name="ResetGeoproximityLocation" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetGeoproximityLocation"></a>

```csharp
private void ResetGeoproximityLocation()
```

##### `ResetHealthCheckId` <a name="ResetHealthCheckId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetHealthCheckId"></a>

```csharp
private void ResetHealthCheckId()
```

##### `ResetMultiValueAnswer` <a name="ResetMultiValueAnswer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetMultiValueAnswer"></a>

```csharp
private void ResetMultiValueAnswer()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetResourceRecords` <a name="ResetResourceRecords" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetResourceRecords"></a>

```csharp
private void ResetResourceRecords()
```

##### `ResetSetIdentifier` <a name="ResetSetIdentifier" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetSetIdentifier"></a>

```csharp
private void ResetSetIdentifier()
```

##### `ResetTrafficPolicyInstanceId` <a name="ResetTrafficPolicyInstanceId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetTrafficPolicyInstanceId"></a>

```csharp
private void ResetTrafficPolicyInstanceId()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetTtl"></a>

```csharp
private void ResetTtl()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetWeight"></a>

```csharp
private void ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.aliasTarget">AliasTarget</a></code> | <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList">Route53RecordsExclusiveResourceRecordSetAliasTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.cidrRoutingConfig">CidrRoutingConfig</a></code> | <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList">Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.geolocation">Geolocation</a></code> | <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList">Route53RecordsExclusiveResourceRecordSetGeolocationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.geoproximityLocation">GeoproximityLocation</a></code> | <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList">Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.resourceRecords">ResourceRecords</a></code> | <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList">Route53RecordsExclusiveResourceRecordSetResourceRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.aliasTargetInput">AliasTargetInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.cidrRoutingConfigInput">CidrRoutingConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.failoverInput">FailoverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.geolocationInput">GeolocationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.geoproximityLocationInput">GeoproximityLocationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.healthCheckIdInput">HealthCheckIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.multiValueAnswerInput">MultiValueAnswerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.resourceRecordsInput">ResourceRecordsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.setIdentifierInput">SetIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.trafficPolicyInstanceIdInput">TrafficPolicyInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.ttlInput">TtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.failover">Failover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.healthCheckId">HealthCheckId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.multiValueAnswer">MultiValueAnswer</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.setIdentifier">SetIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.trafficPolicyInstanceId">TrafficPolicyInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.ttl">Ttl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AliasTarget`<sup>Required</sup> <a name="AliasTarget" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.aliasTarget"></a>

```csharp
public Route53RecordsExclusiveResourceRecordSetAliasTargetList AliasTarget { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList">Route53RecordsExclusiveResourceRecordSetAliasTargetList</a>

---

##### `CidrRoutingConfig`<sup>Required</sup> <a name="CidrRoutingConfig" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.cidrRoutingConfig"></a>

```csharp
public Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList CidrRoutingConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList">Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList</a>

---

##### `Geolocation`<sup>Required</sup> <a name="Geolocation" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.geolocation"></a>

```csharp
public Route53RecordsExclusiveResourceRecordSetGeolocationList Geolocation { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList">Route53RecordsExclusiveResourceRecordSetGeolocationList</a>

---

##### `GeoproximityLocation`<sup>Required</sup> <a name="GeoproximityLocation" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.geoproximityLocation"></a>

```csharp
public Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList GeoproximityLocation { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList">Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList</a>

---

##### `ResourceRecords`<sup>Required</sup> <a name="ResourceRecords" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.resourceRecords"></a>

```csharp
public Route53RecordsExclusiveResourceRecordSetResourceRecordsList ResourceRecords { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList">Route53RecordsExclusiveResourceRecordSetResourceRecordsList</a>

---

##### `AliasTargetInput`<sup>Optional</sup> <a name="AliasTargetInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.aliasTargetInput"></a>

```csharp
public object AliasTargetInput { get; }
```

- *Type:* object

---

##### `CidrRoutingConfigInput`<sup>Optional</sup> <a name="CidrRoutingConfigInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.cidrRoutingConfigInput"></a>

```csharp
public object CidrRoutingConfigInput { get; }
```

- *Type:* object

---

##### `FailoverInput`<sup>Optional</sup> <a name="FailoverInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.failoverInput"></a>

```csharp
public string FailoverInput { get; }
```

- *Type:* string

---

##### `GeolocationInput`<sup>Optional</sup> <a name="GeolocationInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.geolocationInput"></a>

```csharp
public object GeolocationInput { get; }
```

- *Type:* object

---

##### `GeoproximityLocationInput`<sup>Optional</sup> <a name="GeoproximityLocationInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.geoproximityLocationInput"></a>

```csharp
public object GeoproximityLocationInput { get; }
```

- *Type:* object

---

##### `HealthCheckIdInput`<sup>Optional</sup> <a name="HealthCheckIdInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.healthCheckIdInput"></a>

```csharp
public string HealthCheckIdInput { get; }
```

- *Type:* string

---

##### `MultiValueAnswerInput`<sup>Optional</sup> <a name="MultiValueAnswerInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.multiValueAnswerInput"></a>

```csharp
public object MultiValueAnswerInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ResourceRecordsInput`<sup>Optional</sup> <a name="ResourceRecordsInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.resourceRecordsInput"></a>

```csharp
public object ResourceRecordsInput { get; }
```

- *Type:* object

---

##### `SetIdentifierInput`<sup>Optional</sup> <a name="SetIdentifierInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.setIdentifierInput"></a>

```csharp
public string SetIdentifierInput { get; }
```

- *Type:* string

---

##### `TrafficPolicyInstanceIdInput`<sup>Optional</sup> <a name="TrafficPolicyInstanceIdInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.trafficPolicyInstanceIdInput"></a>

```csharp
public string TrafficPolicyInstanceIdInput { get; }
```

- *Type:* string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.ttlInput"></a>

```csharp
public double TtlInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `Failover`<sup>Required</sup> <a name="Failover" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.failover"></a>

```csharp
public string Failover { get; }
```

- *Type:* string

---

##### `HealthCheckId`<sup>Required</sup> <a name="HealthCheckId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.healthCheckId"></a>

```csharp
public string HealthCheckId { get; }
```

- *Type:* string

---

##### `MultiValueAnswer`<sup>Required</sup> <a name="MultiValueAnswer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.multiValueAnswer"></a>

```csharp
public object MultiValueAnswer { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SetIdentifier`<sup>Required</sup> <a name="SetIdentifier" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.setIdentifier"></a>

```csharp
public string SetIdentifier { get; }
```

- *Type:* string

---

##### `TrafficPolicyInstanceId`<sup>Required</sup> <a name="TrafficPolicyInstanceId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.trafficPolicyInstanceId"></a>

```csharp
public string TrafficPolicyInstanceId { get; }
```

- *Type:* string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.ttl"></a>

```csharp
public double Ttl { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Route53RecordsExclusiveResourceRecordSetResourceRecordsList <a name="Route53RecordsExclusiveResourceRecordSetResourceRecordsList" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53RecordsExclusiveResourceRecordSetResourceRecordsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.get"></a>

```csharp
private Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference <a name="Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Route53RecordsExclusiveTimeoutsOutputReference <a name="Route53RecordsExclusiveTimeoutsOutputReference" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53RecordsExclusiveTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



