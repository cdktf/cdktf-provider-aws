# `elasticacheServerlessCache` Submodule <a name="`elasticacheServerlessCache` Submodule" id="@cdktf/provider-aws.elasticacheServerlessCache"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticacheServerlessCache <a name="ElasticacheServerlessCache" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/elasticache_serverless_cache aws_elasticache_serverless_cache}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticacheServerlessCache(Construct Scope, string Id, ElasticacheServerlessCacheConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig">ElasticacheServerlessCacheConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig">ElasticacheServerlessCacheConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.putCacheUsageLimits">PutCacheUsageLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetCacheUsageLimits">ResetCacheUsageLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetDailySnapshotTime">ResetDailySnapshotTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetMajorEngineVersion">ResetMajorEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetSnapshotArnsToRestore">ResetSnapshotArnsToRestore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetSnapshotRetentionLimit">ResetSnapshotRetentionLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetUserGroupId">ResetUserGroupId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCacheUsageLimits` <a name="PutCacheUsageLimits" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.putCacheUsageLimits"></a>

```csharp
private void PutCacheUsageLimits(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.putCacheUsageLimits.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.putTimeouts"></a>

```csharp
private void PutTimeouts(ElasticacheServerlessCacheTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts">ElasticacheServerlessCacheTimeouts</a>

---

##### `ResetCacheUsageLimits` <a name="ResetCacheUsageLimits" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetCacheUsageLimits"></a>

```csharp
private void ResetCacheUsageLimits()
```

##### `ResetDailySnapshotTime` <a name="ResetDailySnapshotTime" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetDailySnapshotTime"></a>

```csharp
private void ResetDailySnapshotTime()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetMajorEngineVersion` <a name="ResetMajorEngineVersion" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetMajorEngineVersion"></a>

```csharp
private void ResetMajorEngineVersion()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSnapshotArnsToRestore` <a name="ResetSnapshotArnsToRestore" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetSnapshotArnsToRestore"></a>

```csharp
private void ResetSnapshotArnsToRestore()
```

##### `ResetSnapshotRetentionLimit` <a name="ResetSnapshotRetentionLimit" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetSnapshotRetentionLimit"></a>

```csharp
private void ResetSnapshotRetentionLimit()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetSubnetIds"></a>

```csharp
private void ResetSubnetIds()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUserGroupId` <a name="ResetUserGroupId" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetUserGroupId"></a>

```csharp
private void ResetUserGroupId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ElasticacheServerlessCache resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ElasticacheServerlessCache.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ElasticacheServerlessCache.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ElasticacheServerlessCache.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ElasticacheServerlessCache.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ElasticacheServerlessCache resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ElasticacheServerlessCache to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ElasticacheServerlessCache that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/elasticache_serverless_cache#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ElasticacheServerlessCache to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.cacheUsageLimits">CacheUsageLimits</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList">ElasticacheServerlessCacheCacheUsageLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.endpoint">Endpoint</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList">ElasticacheServerlessCacheEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.fullEngineVersion">FullEngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.readerEndpoint">ReaderEndpoint</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList">ElasticacheServerlessCacheReaderEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.tagsAll">TagsAll</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference">ElasticacheServerlessCacheTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.cacheUsageLimitsInput">CacheUsageLimitsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.dailySnapshotTimeInput">DailySnapshotTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.engineInput">EngineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.majorEngineVersionInput">MajorEngineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.snapshotArnsToRestoreInput">SnapshotArnsToRestoreInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.snapshotRetentionLimitInput">SnapshotRetentionLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.userGroupIdInput">UserGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.dailySnapshotTime">DailySnapshotTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.engine">Engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.majorEngineVersion">MajorEngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.snapshotArnsToRestore">SnapshotArnsToRestore</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.snapshotRetentionLimit">SnapshotRetentionLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.userGroupId">UserGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CacheUsageLimits`<sup>Required</sup> <a name="CacheUsageLimits" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.cacheUsageLimits"></a>

```csharp
public ElasticacheServerlessCacheCacheUsageLimitsList CacheUsageLimits { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList">ElasticacheServerlessCacheCacheUsageLimitsList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.endpoint"></a>

```csharp
public ElasticacheServerlessCacheEndpointList Endpoint { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList">ElasticacheServerlessCacheEndpointList</a>

---

##### `FullEngineVersion`<sup>Required</sup> <a name="FullEngineVersion" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.fullEngineVersion"></a>

```csharp
public string FullEngineVersion { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ReaderEndpoint`<sup>Required</sup> <a name="ReaderEndpoint" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.readerEndpoint"></a>

```csharp
public ElasticacheServerlessCacheReaderEndpointList ReaderEndpoint { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList">ElasticacheServerlessCacheReaderEndpointList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.timeouts"></a>

```csharp
public ElasticacheServerlessCacheTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference">ElasticacheServerlessCacheTimeoutsOutputReference</a>

---

##### `CacheUsageLimitsInput`<sup>Optional</sup> <a name="CacheUsageLimitsInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.cacheUsageLimitsInput"></a>

```csharp
public object CacheUsageLimitsInput { get; }
```

- *Type:* object

---

##### `DailySnapshotTimeInput`<sup>Optional</sup> <a name="DailySnapshotTimeInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.dailySnapshotTimeInput"></a>

```csharp
public string DailySnapshotTimeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.engineInput"></a>

```csharp
public string EngineInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `MajorEngineVersionInput`<sup>Optional</sup> <a name="MajorEngineVersionInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.majorEngineVersionInput"></a>

```csharp
public string MajorEngineVersionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SnapshotArnsToRestoreInput`<sup>Optional</sup> <a name="SnapshotArnsToRestoreInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.snapshotArnsToRestoreInput"></a>

```csharp
public string[] SnapshotArnsToRestoreInput { get; }
```

- *Type:* string[]

---

##### `SnapshotRetentionLimitInput`<sup>Optional</sup> <a name="SnapshotRetentionLimitInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.snapshotRetentionLimitInput"></a>

```csharp
public double SnapshotRetentionLimitInput { get; }
```

- *Type:* double

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UserGroupIdInput`<sup>Optional</sup> <a name="UserGroupIdInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.userGroupIdInput"></a>

```csharp
public string UserGroupIdInput { get; }
```

- *Type:* string

---

##### `DailySnapshotTime`<sup>Required</sup> <a name="DailySnapshotTime" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.dailySnapshotTime"></a>

```csharp
public string DailySnapshotTime { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.engine"></a>

```csharp
public string Engine { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `MajorEngineVersion`<sup>Required</sup> <a name="MajorEngineVersion" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.majorEngineVersion"></a>

```csharp
public string MajorEngineVersion { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SnapshotArnsToRestore`<sup>Required</sup> <a name="SnapshotArnsToRestore" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.snapshotArnsToRestore"></a>

```csharp
public string[] SnapshotArnsToRestore { get; }
```

- *Type:* string[]

---

##### `SnapshotRetentionLimit`<sup>Required</sup> <a name="SnapshotRetentionLimit" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.snapshotRetentionLimit"></a>

```csharp
public double SnapshotRetentionLimit { get; }
```

- *Type:* double

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UserGroupId`<sup>Required</sup> <a name="UserGroupId" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.userGroupId"></a>

```csharp
public string UserGroupId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticacheServerlessCacheCacheUsageLimits <a name="ElasticacheServerlessCacheCacheUsageLimits" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticacheServerlessCacheCacheUsageLimits {
    object DataStorage = null,
    object EcpuPerSecond = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits.property.dataStorage">DataStorage</a></code> | <code>object</code> | data_storage block. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits.property.ecpuPerSecond">EcpuPerSecond</a></code> | <code>object</code> | ecpu_per_second block. |

---

##### `DataStorage`<sup>Optional</sup> <a name="DataStorage" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits.property.dataStorage"></a>

```csharp
public object DataStorage { get; set; }
```

- *Type:* object

data_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/elasticache_serverless_cache#data_storage ElasticacheServerlessCache#data_storage}

---

##### `EcpuPerSecond`<sup>Optional</sup> <a name="EcpuPerSecond" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits.property.ecpuPerSecond"></a>

```csharp
public object EcpuPerSecond { get; set; }
```

- *Type:* object

ecpu_per_second block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/elasticache_serverless_cache#ecpu_per_second ElasticacheServerlessCache#ecpu_per_second}

---

### ElasticacheServerlessCacheCacheUsageLimitsDataStorage <a name="ElasticacheServerlessCacheCacheUsageLimitsDataStorage" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticacheServerlessCacheCacheUsageLimitsDataStorage {
    string Unit,
    double Maximum = null,
    double Minimum = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage.property.unit">Unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/elasticache_serverless_cache#unit ElasticacheServerlessCache#unit}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage.property.maximum">Maximum</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/elasticache_serverless_cache#maximum ElasticacheServerlessCache#maximum}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage.property.minimum">Minimum</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/elasticache_serverless_cache#minimum ElasticacheServerlessCache#minimum}. |

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/elasticache_serverless_cache#unit ElasticacheServerlessCache#unit}.

---

##### `Maximum`<sup>Optional</sup> <a name="Maximum" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage.property.maximum"></a>

```csharp
public double Maximum { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/elasticache_serverless_cache#maximum ElasticacheServerlessCache#maximum}.

---

##### `Minimum`<sup>Optional</sup> <a name="Minimum" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage.property.minimum"></a>

```csharp
public double Minimum { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/elasticache_serverless_cache#minimum ElasticacheServerlessCache#minimum}.

---

### ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond <a name="ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond {
    double Maximum = null,
    double Minimum = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond.property.maximum">Maximum</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/elasticache_serverless_cache#maximum ElasticacheServerlessCache#maximum}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond.property.minimum">Minimum</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/elasticache_serverless_cache#minimum ElasticacheServerlessCache#minimum}. |

---

##### `Maximum`<sup>Optional</sup> <a name="Maximum" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond.property.maximum"></a>

```csharp
public double Maximum { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/elasticache_serverless_cache#maximum ElasticacheServerlessCache#maximum}.

---

##### `Minimum`<sup>Optional</sup> <a name="Minimum" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond.property.minimum"></a>

```csharp
public double Minimum { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/elasticache_serverless_cache#minimum ElasticacheServerlessCache#minimum}.

---

### ElasticacheServerlessCacheConfig <a name="ElasticacheServerlessCacheConfig" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticacheServerlessCacheConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Engine,
    string Name,
    object CacheUsageLimits = null,
    string DailySnapshotTime = null,
    string Description = null,
    string KmsKeyId = null,
    string MajorEngineVersion = null,
    string[] SecurityGroupIds = null,
    string[] SnapshotArnsToRestore = null,
    double SnapshotRetentionLimit = null,
    string[] SubnetIds = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    ElasticacheServerlessCacheTimeouts Timeouts = null,
    string UserGroupId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.engine">Engine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/elasticache_serverless_cache#engine ElasticacheServerlessCache#engine}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/elasticache_serverless_cache#name ElasticacheServerlessCache#name}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.cacheUsageLimits">CacheUsageLimits</a></code> | <code>object</code> | cache_usage_limits block. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.dailySnapshotTime">DailySnapshotTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/elasticache_serverless_cache#daily_snapshot_time ElasticacheServerlessCache#daily_snapshot_time}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/elasticache_serverless_cache#description ElasticacheServerlessCache#description}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/elasticache_serverless_cache#kms_key_id ElasticacheServerlessCache#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.majorEngineVersion">MajorEngineVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/elasticache_serverless_cache#major_engine_version ElasticacheServerlessCache#major_engine_version}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/elasticache_serverless_cache#security_group_ids ElasticacheServerlessCache#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.snapshotArnsToRestore">SnapshotArnsToRestore</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/elasticache_serverless_cache#snapshot_arns_to_restore ElasticacheServerlessCache#snapshot_arns_to_restore}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.snapshotRetentionLimit">SnapshotRetentionLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/elasticache_serverless_cache#snapshot_retention_limit ElasticacheServerlessCache#snapshot_retention_limit}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/elasticache_serverless_cache#subnet_ids ElasticacheServerlessCache#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/elasticache_serverless_cache#tags ElasticacheServerlessCache#tags}. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts">ElasticacheServerlessCacheTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.userGroupId">UserGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/elasticache_serverless_cache#user_group_id ElasticacheServerlessCache#user_group_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.engine"></a>

```csharp
public string Engine { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/elasticache_serverless_cache#engine ElasticacheServerlessCache#engine}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/elasticache_serverless_cache#name ElasticacheServerlessCache#name}.

---

##### `CacheUsageLimits`<sup>Optional</sup> <a name="CacheUsageLimits" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.cacheUsageLimits"></a>

```csharp
public object CacheUsageLimits { get; set; }
```

- *Type:* object

cache_usage_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/elasticache_serverless_cache#cache_usage_limits ElasticacheServerlessCache#cache_usage_limits}

---

##### `DailySnapshotTime`<sup>Optional</sup> <a name="DailySnapshotTime" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.dailySnapshotTime"></a>

```csharp
public string DailySnapshotTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/elasticache_serverless_cache#daily_snapshot_time ElasticacheServerlessCache#daily_snapshot_time}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/elasticache_serverless_cache#description ElasticacheServerlessCache#description}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/elasticache_serverless_cache#kms_key_id ElasticacheServerlessCache#kms_key_id}.

---

##### `MajorEngineVersion`<sup>Optional</sup> <a name="MajorEngineVersion" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.majorEngineVersion"></a>

```csharp
public string MajorEngineVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/elasticache_serverless_cache#major_engine_version ElasticacheServerlessCache#major_engine_version}.

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/elasticache_serverless_cache#security_group_ids ElasticacheServerlessCache#security_group_ids}.

---

##### `SnapshotArnsToRestore`<sup>Optional</sup> <a name="SnapshotArnsToRestore" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.snapshotArnsToRestore"></a>

```csharp
public string[] SnapshotArnsToRestore { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/elasticache_serverless_cache#snapshot_arns_to_restore ElasticacheServerlessCache#snapshot_arns_to_restore}.

---

##### `SnapshotRetentionLimit`<sup>Optional</sup> <a name="SnapshotRetentionLimit" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.snapshotRetentionLimit"></a>

```csharp
public double SnapshotRetentionLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/elasticache_serverless_cache#snapshot_retention_limit ElasticacheServerlessCache#snapshot_retention_limit}.

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/elasticache_serverless_cache#subnet_ids ElasticacheServerlessCache#subnet_ids}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/elasticache_serverless_cache#tags ElasticacheServerlessCache#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.timeouts"></a>

```csharp
public ElasticacheServerlessCacheTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts">ElasticacheServerlessCacheTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/elasticache_serverless_cache#timeouts ElasticacheServerlessCache#timeouts}

---

##### `UserGroupId`<sup>Optional</sup> <a name="UserGroupId" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.userGroupId"></a>

```csharp
public string UserGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/elasticache_serverless_cache#user_group_id ElasticacheServerlessCache#user_group_id}.

---

### ElasticacheServerlessCacheEndpoint <a name="ElasticacheServerlessCacheEndpoint" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticacheServerlessCacheEndpoint {

};
```


### ElasticacheServerlessCacheReaderEndpoint <a name="ElasticacheServerlessCacheReaderEndpoint" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticacheServerlessCacheReaderEndpoint {

};
```


### ElasticacheServerlessCacheTimeouts <a name="ElasticacheServerlessCacheTimeouts" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticacheServerlessCacheTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/elasticache_serverless_cache#create ElasticacheServerlessCache#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/elasticache_serverless_cache#delete ElasticacheServerlessCache#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/elasticache_serverless_cache#update ElasticacheServerlessCache#update}

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticacheServerlessCacheCacheUsageLimitsDataStorageList <a name="ElasticacheServerlessCacheCacheUsageLimitsDataStorageList" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticacheServerlessCacheCacheUsageLimitsDataStorageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.get"></a>

```csharp
private ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference <a name="ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.resetMaximum">ResetMaximum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.resetMinimum">ResetMinimum</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaximum` <a name="ResetMaximum" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.resetMaximum"></a>

```csharp
private void ResetMaximum()
```

##### `ResetMinimum` <a name="ResetMinimum" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.resetMinimum"></a>

```csharp
private void ResetMinimum()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.maximumInput">MaximumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.minimumInput">MinimumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.maximum">Maximum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.minimum">Minimum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaximumInput`<sup>Optional</sup> <a name="MaximumInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.maximumInput"></a>

```csharp
public double MaximumInput { get; }
```

- *Type:* double

---

##### `MinimumInput`<sup>Optional</sup> <a name="MinimumInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.minimumInput"></a>

```csharp
public double MinimumInput { get; }
```

- *Type:* double

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `Maximum`<sup>Required</sup> <a name="Maximum" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.maximum"></a>

```csharp
public double Maximum { get; }
```

- *Type:* double

---

##### `Minimum`<sup>Required</sup> <a name="Minimum" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.minimum"></a>

```csharp
public double Minimum { get; }
```

- *Type:* double

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList <a name="ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.get"></a>

```csharp
private ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference <a name="ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.resetMaximum">ResetMaximum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.resetMinimum">ResetMinimum</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaximum` <a name="ResetMaximum" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.resetMaximum"></a>

```csharp
private void ResetMaximum()
```

##### `ResetMinimum` <a name="ResetMinimum" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.resetMinimum"></a>

```csharp
private void ResetMinimum()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.maximumInput">MaximumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.minimumInput">MinimumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.maximum">Maximum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.minimum">Minimum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaximumInput`<sup>Optional</sup> <a name="MaximumInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.maximumInput"></a>

```csharp
public double MaximumInput { get; }
```

- *Type:* double

---

##### `MinimumInput`<sup>Optional</sup> <a name="MinimumInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.minimumInput"></a>

```csharp
public double MinimumInput { get; }
```

- *Type:* double

---

##### `Maximum`<sup>Required</sup> <a name="Maximum" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.maximum"></a>

```csharp
public double Maximum { get; }
```

- *Type:* double

---

##### `Minimum`<sup>Required</sup> <a name="Minimum" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.minimum"></a>

```csharp
public double Minimum { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElasticacheServerlessCacheCacheUsageLimitsList <a name="ElasticacheServerlessCacheCacheUsageLimitsList" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticacheServerlessCacheCacheUsageLimitsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.get"></a>

```csharp
private ElasticacheServerlessCacheCacheUsageLimitsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElasticacheServerlessCacheCacheUsageLimitsOutputReference <a name="ElasticacheServerlessCacheCacheUsageLimitsOutputReference" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticacheServerlessCacheCacheUsageLimitsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.putDataStorage">PutDataStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.putEcpuPerSecond">PutEcpuPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.resetDataStorage">ResetDataStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.resetEcpuPerSecond">ResetEcpuPerSecond</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataStorage` <a name="PutDataStorage" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.putDataStorage"></a>

```csharp
private void PutDataStorage(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.putDataStorage.parameter.value"></a>

- *Type:* object

---

##### `PutEcpuPerSecond` <a name="PutEcpuPerSecond" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.putEcpuPerSecond"></a>

```csharp
private void PutEcpuPerSecond(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.putEcpuPerSecond.parameter.value"></a>

- *Type:* object

---

##### `ResetDataStorage` <a name="ResetDataStorage" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.resetDataStorage"></a>

```csharp
private void ResetDataStorage()
```

##### `ResetEcpuPerSecond` <a name="ResetEcpuPerSecond" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.resetEcpuPerSecond"></a>

```csharp
private void ResetEcpuPerSecond()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.dataStorage">DataStorage</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList">ElasticacheServerlessCacheCacheUsageLimitsDataStorageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.ecpuPerSecond">EcpuPerSecond</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList">ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.dataStorageInput">DataStorageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.ecpuPerSecondInput">EcpuPerSecondInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataStorage`<sup>Required</sup> <a name="DataStorage" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.dataStorage"></a>

```csharp
public ElasticacheServerlessCacheCacheUsageLimitsDataStorageList DataStorage { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList">ElasticacheServerlessCacheCacheUsageLimitsDataStorageList</a>

---

##### `EcpuPerSecond`<sup>Required</sup> <a name="EcpuPerSecond" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.ecpuPerSecond"></a>

```csharp
public ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList EcpuPerSecond { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList">ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList</a>

---

##### `DataStorageInput`<sup>Optional</sup> <a name="DataStorageInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.dataStorageInput"></a>

```csharp
public object DataStorageInput { get; }
```

- *Type:* object

---

##### `EcpuPerSecondInput`<sup>Optional</sup> <a name="EcpuPerSecondInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.ecpuPerSecondInput"></a>

```csharp
public object EcpuPerSecondInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElasticacheServerlessCacheEndpointList <a name="ElasticacheServerlessCacheEndpointList" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticacheServerlessCacheEndpointList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.get"></a>

```csharp
private ElasticacheServerlessCacheEndpointOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ElasticacheServerlessCacheEndpointOutputReference <a name="ElasticacheServerlessCacheEndpointOutputReference" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticacheServerlessCacheEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpoint">ElasticacheServerlessCacheEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.internalValue"></a>

```csharp
public ElasticacheServerlessCacheEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpoint">ElasticacheServerlessCacheEndpoint</a>

---


### ElasticacheServerlessCacheReaderEndpointList <a name="ElasticacheServerlessCacheReaderEndpointList" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticacheServerlessCacheReaderEndpointList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.get"></a>

```csharp
private ElasticacheServerlessCacheReaderEndpointOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ElasticacheServerlessCacheReaderEndpointOutputReference <a name="ElasticacheServerlessCacheReaderEndpointOutputReference" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticacheServerlessCacheReaderEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpoint">ElasticacheServerlessCacheReaderEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.internalValue"></a>

```csharp
public ElasticacheServerlessCacheReaderEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpoint">ElasticacheServerlessCacheReaderEndpoint</a>

---


### ElasticacheServerlessCacheTimeoutsOutputReference <a name="ElasticacheServerlessCacheTimeoutsOutputReference" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticacheServerlessCacheTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



