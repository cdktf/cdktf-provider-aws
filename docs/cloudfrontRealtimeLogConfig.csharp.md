# `cloudfrontRealtimeLogConfig` Submodule <a name="`cloudfrontRealtimeLogConfig` Submodule" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontRealtimeLogConfig <a name="CloudfrontRealtimeLogConfig" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudfront_realtime_log_config aws_cloudfront_realtime_log_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontRealtimeLogConfig(Construct Scope, string Id, CloudfrontRealtimeLogConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig">CloudfrontRealtimeLogConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig">CloudfrontRealtimeLogConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.putEndpoint">PutEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEndpoint` <a name="PutEndpoint" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.putEndpoint"></a>

```csharp
private void PutEndpoint(CloudfrontRealtimeLogConfigEndpoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.putEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpoint">CloudfrontRealtimeLogConfigEndpoint</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudfrontRealtimeLogConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudfrontRealtimeLogConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudfrontRealtimeLogConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudfrontRealtimeLogConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudfrontRealtimeLogConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CloudfrontRealtimeLogConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudfrontRealtimeLogConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudfrontRealtimeLogConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudfront_realtime_log_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CloudfrontRealtimeLogConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.endpoint">Endpoint</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference">CloudfrontRealtimeLogConfigEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.endpointInput">EndpointInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpoint">CloudfrontRealtimeLogConfigEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.fieldsInput">FieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.samplingRateInput">SamplingRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.fields">Fields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.samplingRate">SamplingRate</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.endpoint"></a>

```csharp
public CloudfrontRealtimeLogConfigEndpointOutputReference Endpoint { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference">CloudfrontRealtimeLogConfigEndpointOutputReference</a>

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.endpointInput"></a>

```csharp
public CloudfrontRealtimeLogConfigEndpoint EndpointInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpoint">CloudfrontRealtimeLogConfigEndpoint</a>

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.fieldsInput"></a>

```csharp
public string[] FieldsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SamplingRateInput`<sup>Optional</sup> <a name="SamplingRateInput" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.samplingRateInput"></a>

```csharp
public double SamplingRateInput { get; }
```

- *Type:* double

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.fields"></a>

```csharp
public string[] Fields { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SamplingRate`<sup>Required</sup> <a name="SamplingRate" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.samplingRate"></a>

```csharp
public double SamplingRate { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontRealtimeLogConfigConfig <a name="CloudfrontRealtimeLogConfigConfig" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontRealtimeLogConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    CloudfrontRealtimeLogConfigEndpoint Endpoint,
    string[] Fields,
    string Name,
    double SamplingRate,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.endpoint">Endpoint</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpoint">CloudfrontRealtimeLogConfigEndpoint</a></code> | endpoint block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.fields">Fields</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudfront_realtime_log_config#fields CloudfrontRealtimeLogConfig#fields}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudfront_realtime_log_config#name CloudfrontRealtimeLogConfig#name}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.samplingRate">SamplingRate</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudfront_realtime_log_config#sampling_rate CloudfrontRealtimeLogConfig#sampling_rate}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudfront_realtime_log_config#id CloudfrontRealtimeLogConfig#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.endpoint"></a>

```csharp
public CloudfrontRealtimeLogConfigEndpoint Endpoint { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpoint">CloudfrontRealtimeLogConfigEndpoint</a>

endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudfront_realtime_log_config#endpoint CloudfrontRealtimeLogConfig#endpoint}

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.fields"></a>

```csharp
public string[] Fields { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudfront_realtime_log_config#fields CloudfrontRealtimeLogConfig#fields}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudfront_realtime_log_config#name CloudfrontRealtimeLogConfig#name}.

---

##### `SamplingRate`<sup>Required</sup> <a name="SamplingRate" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.samplingRate"></a>

```csharp
public double SamplingRate { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudfront_realtime_log_config#sampling_rate CloudfrontRealtimeLogConfig#sampling_rate}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudfront_realtime_log_config#id CloudfrontRealtimeLogConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### CloudfrontRealtimeLogConfigEndpoint <a name="CloudfrontRealtimeLogConfigEndpoint" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontRealtimeLogConfigEndpoint {
    CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig KinesisStreamConfig,
    string StreamType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpoint.property.kinesisStreamConfig">KinesisStreamConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig">CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig</a></code> | kinesis_stream_config block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpoint.property.streamType">StreamType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudfront_realtime_log_config#stream_type CloudfrontRealtimeLogConfig#stream_type}. |

---

##### `KinesisStreamConfig`<sup>Required</sup> <a name="KinesisStreamConfig" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpoint.property.kinesisStreamConfig"></a>

```csharp
public CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig KinesisStreamConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig">CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig</a>

kinesis_stream_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudfront_realtime_log_config#kinesis_stream_config CloudfrontRealtimeLogConfig#kinesis_stream_config}

---

##### `StreamType`<sup>Required</sup> <a name="StreamType" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpoint.property.streamType"></a>

```csharp
public string StreamType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudfront_realtime_log_config#stream_type CloudfrontRealtimeLogConfig#stream_type}.

---

### CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig <a name="CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig {
    string RoleArn,
    string StreamArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudfront_realtime_log_config#role_arn CloudfrontRealtimeLogConfig#role_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig.property.streamArn">StreamArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudfront_realtime_log_config#stream_arn CloudfrontRealtimeLogConfig#stream_arn}. |

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudfront_realtime_log_config#role_arn CloudfrontRealtimeLogConfig#role_arn}.

---

##### `StreamArn`<sup>Required</sup> <a name="StreamArn" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig.property.streamArn"></a>

```csharp
public string StreamArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudfront_realtime_log_config#stream_arn CloudfrontRealtimeLogConfig#stream_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference <a name="CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.streamArnInput">StreamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.streamArn">StreamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig">CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `StreamArnInput`<sup>Optional</sup> <a name="StreamArnInput" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.streamArnInput"></a>

```csharp
public string StreamArnInput { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `StreamArn`<sup>Required</sup> <a name="StreamArn" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.streamArn"></a>

```csharp
public string StreamArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.internalValue"></a>

```csharp
public CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig">CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig</a>

---


### CloudfrontRealtimeLogConfigEndpointOutputReference <a name="CloudfrontRealtimeLogConfigEndpointOutputReference" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontRealtimeLogConfigEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.putKinesisStreamConfig">PutKinesisStreamConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutKinesisStreamConfig` <a name="PutKinesisStreamConfig" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.putKinesisStreamConfig"></a>

```csharp
private void PutKinesisStreamConfig(CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.putKinesisStreamConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig">CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.property.kinesisStreamConfig">KinesisStreamConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference">CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.property.kinesisStreamConfigInput">KinesisStreamConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig">CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.property.streamTypeInput">StreamTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.property.streamType">StreamType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpoint">CloudfrontRealtimeLogConfigEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KinesisStreamConfig`<sup>Required</sup> <a name="KinesisStreamConfig" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.property.kinesisStreamConfig"></a>

```csharp
public CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference KinesisStreamConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference">CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference</a>

---

##### `KinesisStreamConfigInput`<sup>Optional</sup> <a name="KinesisStreamConfigInput" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.property.kinesisStreamConfigInput"></a>

```csharp
public CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig KinesisStreamConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig">CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig</a>

---

##### `StreamTypeInput`<sup>Optional</sup> <a name="StreamTypeInput" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.property.streamTypeInput"></a>

```csharp
public string StreamTypeInput { get; }
```

- *Type:* string

---

##### `StreamType`<sup>Required</sup> <a name="StreamType" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.property.streamType"></a>

```csharp
public string StreamType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpointOutputReference.property.internalValue"></a>

```csharp
public CloudfrontRealtimeLogConfigEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndpoint">CloudfrontRealtimeLogConfigEndpoint</a>

---



