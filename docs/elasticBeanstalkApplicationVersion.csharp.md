# `elasticBeanstalkApplicationVersion` Submodule <a name="`elasticBeanstalkApplicationVersion` Submodule" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticBeanstalkApplicationVersion <a name="ElasticBeanstalkApplicationVersion" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elastic_beanstalk_application_version aws_elastic_beanstalk_application_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticBeanstalkApplicationVersion(Construct Scope, string Id, ElasticBeanstalkApplicationVersionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig">ElasticBeanstalkApplicationVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig">ElasticBeanstalkApplicationVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.resetForceDelete">ResetForceDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.resetProcess">ResetProcess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetForceDelete` <a name="ResetForceDelete" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.resetForceDelete"></a>

```csharp
private void ResetForceDelete()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProcess` <a name="ResetProcess" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.resetProcess"></a>

```csharp
private void ResetProcess()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ElasticBeanstalkApplicationVersion resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ElasticBeanstalkApplicationVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ElasticBeanstalkApplicationVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ElasticBeanstalkApplicationVersion.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ElasticBeanstalkApplicationVersion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ElasticBeanstalkApplicationVersion resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ElasticBeanstalkApplicationVersion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ElasticBeanstalkApplicationVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elastic_beanstalk_application_version#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ElasticBeanstalkApplicationVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.applicationInput">ApplicationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.forceDeleteInput">ForceDeleteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.processInput">ProcessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.application">Application</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.forceDelete">ForceDelete</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.process">Process</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ApplicationInput`<sup>Optional</sup> <a name="ApplicationInput" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.applicationInput"></a>

```csharp
public string ApplicationInput { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ForceDeleteInput`<sup>Optional</sup> <a name="ForceDeleteInput" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.forceDeleteInput"></a>

```csharp
public object ForceDeleteInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProcessInput`<sup>Optional</sup> <a name="ProcessInput" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.processInput"></a>

```csharp
public object ProcessInput { get; }
```

- *Type:* object

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Application`<sup>Required</sup> <a name="Application" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.application"></a>

```csharp
public string Application { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ForceDelete`<sup>Required</sup> <a name="ForceDelete" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.forceDelete"></a>

```csharp
public object ForceDelete { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Process`<sup>Required</sup> <a name="Process" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.process"></a>

```csharp
public object Process { get; }
```

- *Type:* object

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticBeanstalkApplicationVersionConfig <a name="ElasticBeanstalkApplicationVersionConfig" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticBeanstalkApplicationVersionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Application,
    string Bucket,
    string Key,
    string Name,
    string Description = null,
    object ForceDelete = null,
    string Id = null,
    object Process = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.application">Application</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elastic_beanstalk_application_version#application ElasticBeanstalkApplicationVersion#application}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elastic_beanstalk_application_version#bucket ElasticBeanstalkApplicationVersion#bucket}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elastic_beanstalk_application_version#key ElasticBeanstalkApplicationVersion#key}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elastic_beanstalk_application_version#name ElasticBeanstalkApplicationVersion#name}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elastic_beanstalk_application_version#description ElasticBeanstalkApplicationVersion#description}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.forceDelete">ForceDelete</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elastic_beanstalk_application_version#force_delete ElasticBeanstalkApplicationVersion#force_delete}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elastic_beanstalk_application_version#id ElasticBeanstalkApplicationVersion#id}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.process">Process</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elastic_beanstalk_application_version#process ElasticBeanstalkApplicationVersion#process}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elastic_beanstalk_application_version#tags ElasticBeanstalkApplicationVersion#tags}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elastic_beanstalk_application_version#tags_all ElasticBeanstalkApplicationVersion#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Application`<sup>Required</sup> <a name="Application" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.application"></a>

```csharp
public string Application { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elastic_beanstalk_application_version#application ElasticBeanstalkApplicationVersion#application}.

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elastic_beanstalk_application_version#bucket ElasticBeanstalkApplicationVersion#bucket}.

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elastic_beanstalk_application_version#key ElasticBeanstalkApplicationVersion#key}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elastic_beanstalk_application_version#name ElasticBeanstalkApplicationVersion#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elastic_beanstalk_application_version#description ElasticBeanstalkApplicationVersion#description}.

---

##### `ForceDelete`<sup>Optional</sup> <a name="ForceDelete" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.forceDelete"></a>

```csharp
public object ForceDelete { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elastic_beanstalk_application_version#force_delete ElasticBeanstalkApplicationVersion#force_delete}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elastic_beanstalk_application_version#id ElasticBeanstalkApplicationVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Process`<sup>Optional</sup> <a name="Process" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.process"></a>

```csharp
public object Process { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elastic_beanstalk_application_version#process ElasticBeanstalkApplicationVersion#process}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elastic_beanstalk_application_version#region ElasticBeanstalkApplicationVersion#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elastic_beanstalk_application_version#tags ElasticBeanstalkApplicationVersion#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/elastic_beanstalk_application_version#tags_all ElasticBeanstalkApplicationVersion#tags_all}.

---



