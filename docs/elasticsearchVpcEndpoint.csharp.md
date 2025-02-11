# `elasticsearchVpcEndpoint` Submodule <a name="`elasticsearchVpcEndpoint` Submodule" id="@cdktf/provider-aws.elasticsearchVpcEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticsearchVpcEndpoint <a name="ElasticsearchVpcEndpoint" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/elasticsearch_vpc_endpoint aws_elasticsearch_vpc_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticsearchVpcEndpoint(Construct Scope, string Id, ElasticsearchVpcEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig">ElasticsearchVpcEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig">ElasticsearchVpcEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.putVpcOptions">PutVpcOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.putTimeouts"></a>

```csharp
private void PutTimeouts(ElasticsearchVpcEndpointTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts">ElasticsearchVpcEndpointTimeouts</a>

---

##### `PutVpcOptions` <a name="PutVpcOptions" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.putVpcOptions"></a>

```csharp
private void PutVpcOptions(ElasticsearchVpcEndpointVpcOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.putVpcOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions">ElasticsearchVpcEndpointVpcOptions</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ElasticsearchVpcEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ElasticsearchVpcEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ElasticsearchVpcEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ElasticsearchVpcEndpoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ElasticsearchVpcEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ElasticsearchVpcEndpoint resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ElasticsearchVpcEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ElasticsearchVpcEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/elasticsearch_vpc_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ElasticsearchVpcEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference">ElasticsearchVpcEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.vpcOptions">VpcOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference">ElasticsearchVpcEndpointVpcOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.domainArnInput">DomainArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.vpcOptionsInput">VpcOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions">ElasticsearchVpcEndpointVpcOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.domainArn">DomainArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.timeouts"></a>

```csharp
public ElasticsearchVpcEndpointTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference">ElasticsearchVpcEndpointTimeoutsOutputReference</a>

---

##### `VpcOptions`<sup>Required</sup> <a name="VpcOptions" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.vpcOptions"></a>

```csharp
public ElasticsearchVpcEndpointVpcOptionsOutputReference VpcOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference">ElasticsearchVpcEndpointVpcOptionsOutputReference</a>

---

##### `DomainArnInput`<sup>Optional</sup> <a name="DomainArnInput" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.domainArnInput"></a>

```csharp
public string DomainArnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VpcOptionsInput`<sup>Optional</sup> <a name="VpcOptionsInput" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.vpcOptionsInput"></a>

```csharp
public ElasticsearchVpcEndpointVpcOptions VpcOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions">ElasticsearchVpcEndpointVpcOptions</a>

---

##### `DomainArn`<sup>Required</sup> <a name="DomainArn" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.domainArn"></a>

```csharp
public string DomainArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticsearchVpcEndpointConfig <a name="ElasticsearchVpcEndpointConfig" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticsearchVpcEndpointConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DomainArn,
    ElasticsearchVpcEndpointVpcOptions VpcOptions,
    string Id = null,
    ElasticsearchVpcEndpointTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.domainArn">DomainArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/elasticsearch_vpc_endpoint#domain_arn ElasticsearchVpcEndpoint#domain_arn}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.vpcOptions">VpcOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions">ElasticsearchVpcEndpointVpcOptions</a></code> | vpc_options block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/elasticsearch_vpc_endpoint#id ElasticsearchVpcEndpoint#id}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts">ElasticsearchVpcEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DomainArn`<sup>Required</sup> <a name="DomainArn" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.domainArn"></a>

```csharp
public string DomainArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/elasticsearch_vpc_endpoint#domain_arn ElasticsearchVpcEndpoint#domain_arn}.

---

##### `VpcOptions`<sup>Required</sup> <a name="VpcOptions" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.vpcOptions"></a>

```csharp
public ElasticsearchVpcEndpointVpcOptions VpcOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions">ElasticsearchVpcEndpointVpcOptions</a>

vpc_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/elasticsearch_vpc_endpoint#vpc_options ElasticsearchVpcEndpoint#vpc_options}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/elasticsearch_vpc_endpoint#id ElasticsearchVpcEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.timeouts"></a>

```csharp
public ElasticsearchVpcEndpointTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts">ElasticsearchVpcEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/elasticsearch_vpc_endpoint#timeouts ElasticsearchVpcEndpoint#timeouts}

---

### ElasticsearchVpcEndpointTimeouts <a name="ElasticsearchVpcEndpointTimeouts" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticsearchVpcEndpointTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/elasticsearch_vpc_endpoint#create ElasticsearchVpcEndpoint#create}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/elasticsearch_vpc_endpoint#delete ElasticsearchVpcEndpoint#delete}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/elasticsearch_vpc_endpoint#update ElasticsearchVpcEndpoint#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/elasticsearch_vpc_endpoint#create ElasticsearchVpcEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/elasticsearch_vpc_endpoint#delete ElasticsearchVpcEndpoint#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/elasticsearch_vpc_endpoint#update ElasticsearchVpcEndpoint#update}.

---

### ElasticsearchVpcEndpointVpcOptions <a name="ElasticsearchVpcEndpointVpcOptions" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticsearchVpcEndpointVpcOptions {
    string[] SubnetIds,
    string[] SecurityGroupIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/elasticsearch_vpc_endpoint#subnet_ids ElasticsearchVpcEndpoint#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/elasticsearch_vpc_endpoint#security_group_ids ElasticsearchVpcEndpoint#security_group_ids}. |

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/elasticsearch_vpc_endpoint#subnet_ids ElasticsearchVpcEndpoint#subnet_ids}.

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/elasticsearch_vpc_endpoint#security_group_ids ElasticsearchVpcEndpoint#security_group_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticsearchVpcEndpointTimeoutsOutputReference <a name="ElasticsearchVpcEndpointTimeoutsOutputReference" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticsearchVpcEndpointTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElasticsearchVpcEndpointVpcOptionsOutputReference <a name="ElasticsearchVpcEndpointVpcOptionsOutputReference" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticsearchVpcEndpointVpcOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.availabilityZones">AvailabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions">ElasticsearchVpcEndpointVpcOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.availabilityZones"></a>

```csharp
public string[] AvailabilityZones { get; }
```

- *Type:* string[]

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.internalValue"></a>

```csharp
public ElasticsearchVpcEndpointVpcOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions">ElasticsearchVpcEndpointVpcOptions</a>

---



