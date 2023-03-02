# `elasticacheGlobalReplicationGroup` Submodule <a name="`elasticacheGlobalReplicationGroup` Submodule" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticacheGlobalReplicationGroup <a name="ElasticacheGlobalReplicationGroup" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group aws_elasticache_global_replication_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticacheGlobalReplicationGroup(Construct Scope, string Id, ElasticacheGlobalReplicationGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig">ElasticacheGlobalReplicationGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig">ElasticacheGlobalReplicationGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetAutomaticFailoverEnabled">ResetAutomaticFailoverEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetCacheNodeType">ResetCacheNodeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetEngineVersion">ResetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetGlobalReplicationGroupDescription">ResetGlobalReplicationGroupDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetNumNodeGroups">ResetNumNodeGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetParameterGroupName">ResetParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.putTimeouts"></a>

```csharp
private void PutTimeouts(ElasticacheGlobalReplicationGroupTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts">ElasticacheGlobalReplicationGroupTimeouts</a>

---

##### `ResetAutomaticFailoverEnabled` <a name="ResetAutomaticFailoverEnabled" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetAutomaticFailoverEnabled"></a>

```csharp
private void ResetAutomaticFailoverEnabled()
```

##### `ResetCacheNodeType` <a name="ResetCacheNodeType" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetCacheNodeType"></a>

```csharp
private void ResetCacheNodeType()
```

##### `ResetEngineVersion` <a name="ResetEngineVersion" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetEngineVersion"></a>

```csharp
private void ResetEngineVersion()
```

##### `ResetGlobalReplicationGroupDescription` <a name="ResetGlobalReplicationGroupDescription" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetGlobalReplicationGroupDescription"></a>

```csharp
private void ResetGlobalReplicationGroupDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNumNodeGroups` <a name="ResetNumNodeGroups" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetNumNodeGroups"></a>

```csharp
private void ResetNumNodeGroups()
```

##### `ResetParameterGroupName` <a name="ResetParameterGroupName" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetParameterGroupName"></a>

```csharp
private void ResetParameterGroupName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ElasticacheGlobalReplicationGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ElasticacheGlobalReplicationGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ElasticacheGlobalReplicationGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.atRestEncryptionEnabled">AtRestEncryptionEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.authTokenEnabled">AuthTokenEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.clusterEnabled">ClusterEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engine">Engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engineVersionActual">EngineVersionActual</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalNodeGroups">GlobalNodeGroups</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList">ElasticacheGlobalReplicationGroupGlobalNodeGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupId">GlobalReplicationGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference">ElasticacheGlobalReplicationGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.transitEncryptionEnabled">TransitEncryptionEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.automaticFailoverEnabledInput">AutomaticFailoverEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cacheNodeTypeInput">CacheNodeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engineVersionInput">EngineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupDescriptionInput">GlobalReplicationGroupDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupIdSuffixInput">GlobalReplicationGroupIdSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.numNodeGroupsInput">NumNodeGroupsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.parameterGroupNameInput">ParameterGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.primaryReplicationGroupIdInput">PrimaryReplicationGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.automaticFailoverEnabled">AutomaticFailoverEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cacheNodeType">CacheNodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engineVersion">EngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupDescription">GlobalReplicationGroupDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupIdSuffix">GlobalReplicationGroupIdSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.numNodeGroups">NumNodeGroups</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.parameterGroupName">ParameterGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.primaryReplicationGroupId">PrimaryReplicationGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AtRestEncryptionEnabled`<sup>Required</sup> <a name="AtRestEncryptionEnabled" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.atRestEncryptionEnabled"></a>

```csharp
public IResolvable AtRestEncryptionEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AuthTokenEnabled`<sup>Required</sup> <a name="AuthTokenEnabled" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.authTokenEnabled"></a>

```csharp
public IResolvable AuthTokenEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ClusterEnabled`<sup>Required</sup> <a name="ClusterEnabled" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.clusterEnabled"></a>

```csharp
public IResolvable ClusterEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engine"></a>

```csharp
public string Engine { get; }
```

- *Type:* string

---

##### `EngineVersionActual`<sup>Required</sup> <a name="EngineVersionActual" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engineVersionActual"></a>

```csharp
public string EngineVersionActual { get; }
```

- *Type:* string

---

##### `GlobalNodeGroups`<sup>Required</sup> <a name="GlobalNodeGroups" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalNodeGroups"></a>

```csharp
public ElasticacheGlobalReplicationGroupGlobalNodeGroupsList GlobalNodeGroups { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList">ElasticacheGlobalReplicationGroupGlobalNodeGroupsList</a>

---

##### `GlobalReplicationGroupId`<sup>Required</sup> <a name="GlobalReplicationGroupId" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupId"></a>

```csharp
public string GlobalReplicationGroupId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.timeouts"></a>

```csharp
public ElasticacheGlobalReplicationGroupTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference">ElasticacheGlobalReplicationGroupTimeoutsOutputReference</a>

---

##### `TransitEncryptionEnabled`<sup>Required</sup> <a name="TransitEncryptionEnabled" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.transitEncryptionEnabled"></a>

```csharp
public IResolvable TransitEncryptionEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AutomaticFailoverEnabledInput`<sup>Optional</sup> <a name="AutomaticFailoverEnabledInput" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.automaticFailoverEnabledInput"></a>

```csharp
public object AutomaticFailoverEnabledInput { get; }
```

- *Type:* object

---

##### `CacheNodeTypeInput`<sup>Optional</sup> <a name="CacheNodeTypeInput" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cacheNodeTypeInput"></a>

```csharp
public string CacheNodeTypeInput { get; }
```

- *Type:* string

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engineVersionInput"></a>

```csharp
public string EngineVersionInput { get; }
```

- *Type:* string

---

##### `GlobalReplicationGroupDescriptionInput`<sup>Optional</sup> <a name="GlobalReplicationGroupDescriptionInput" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupDescriptionInput"></a>

```csharp
public string GlobalReplicationGroupDescriptionInput { get; }
```

- *Type:* string

---

##### `GlobalReplicationGroupIdSuffixInput`<sup>Optional</sup> <a name="GlobalReplicationGroupIdSuffixInput" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupIdSuffixInput"></a>

```csharp
public string GlobalReplicationGroupIdSuffixInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NumNodeGroupsInput`<sup>Optional</sup> <a name="NumNodeGroupsInput" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.numNodeGroupsInput"></a>

```csharp
public double NumNodeGroupsInput { get; }
```

- *Type:* double

---

##### `ParameterGroupNameInput`<sup>Optional</sup> <a name="ParameterGroupNameInput" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.parameterGroupNameInput"></a>

```csharp
public string ParameterGroupNameInput { get; }
```

- *Type:* string

---

##### `PrimaryReplicationGroupIdInput`<sup>Optional</sup> <a name="PrimaryReplicationGroupIdInput" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.primaryReplicationGroupIdInput"></a>

```csharp
public string PrimaryReplicationGroupIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AutomaticFailoverEnabled`<sup>Required</sup> <a name="AutomaticFailoverEnabled" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.automaticFailoverEnabled"></a>

```csharp
public object AutomaticFailoverEnabled { get; }
```

- *Type:* object

---

##### `CacheNodeType`<sup>Required</sup> <a name="CacheNodeType" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cacheNodeType"></a>

```csharp
public string CacheNodeType { get; }
```

- *Type:* string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engineVersion"></a>

```csharp
public string EngineVersion { get; }
```

- *Type:* string

---

##### `GlobalReplicationGroupDescription`<sup>Required</sup> <a name="GlobalReplicationGroupDescription" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupDescription"></a>

```csharp
public string GlobalReplicationGroupDescription { get; }
```

- *Type:* string

---

##### `GlobalReplicationGroupIdSuffix`<sup>Required</sup> <a name="GlobalReplicationGroupIdSuffix" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupIdSuffix"></a>

```csharp
public string GlobalReplicationGroupIdSuffix { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NumNodeGroups`<sup>Required</sup> <a name="NumNodeGroups" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.numNodeGroups"></a>

```csharp
public double NumNodeGroups { get; }
```

- *Type:* double

---

##### `ParameterGroupName`<sup>Required</sup> <a name="ParameterGroupName" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.parameterGroupName"></a>

```csharp
public string ParameterGroupName { get; }
```

- *Type:* string

---

##### `PrimaryReplicationGroupId`<sup>Required</sup> <a name="PrimaryReplicationGroupId" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.primaryReplicationGroupId"></a>

```csharp
public string PrimaryReplicationGroupId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticacheGlobalReplicationGroupConfig <a name="ElasticacheGlobalReplicationGroupConfig" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticacheGlobalReplicationGroupConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string GlobalReplicationGroupIdSuffix,
    string PrimaryReplicationGroupId,
    object AutomaticFailoverEnabled = null,
    string CacheNodeType = null,
    string EngineVersion = null,
    string GlobalReplicationGroupDescription = null,
    string Id = null,
    double NumNodeGroups = null,
    string ParameterGroupName = null,
    ElasticacheGlobalReplicationGroupTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.globalReplicationGroupIdSuffix">GlobalReplicationGroupIdSuffix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#global_replication_group_id_suffix ElasticacheGlobalReplicationGroup#global_replication_group_id_suffix}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.primaryReplicationGroupId">PrimaryReplicationGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#primary_replication_group_id ElasticacheGlobalReplicationGroup#primary_replication_group_id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.automaticFailoverEnabled">AutomaticFailoverEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#automatic_failover_enabled ElasticacheGlobalReplicationGroup#automatic_failover_enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.cacheNodeType">CacheNodeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#cache_node_type ElasticacheGlobalReplicationGroup#cache_node_type}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.engineVersion">EngineVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#engine_version ElasticacheGlobalReplicationGroup#engine_version}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.globalReplicationGroupDescription">GlobalReplicationGroupDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#global_replication_group_description ElasticacheGlobalReplicationGroup#global_replication_group_description}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#id ElasticacheGlobalReplicationGroup#id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.numNodeGroups">NumNodeGroups</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#num_node_groups ElasticacheGlobalReplicationGroup#num_node_groups}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.parameterGroupName">ParameterGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#parameter_group_name ElasticacheGlobalReplicationGroup#parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts">ElasticacheGlobalReplicationGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `GlobalReplicationGroupIdSuffix`<sup>Required</sup> <a name="GlobalReplicationGroupIdSuffix" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.globalReplicationGroupIdSuffix"></a>

```csharp
public string GlobalReplicationGroupIdSuffix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#global_replication_group_id_suffix ElasticacheGlobalReplicationGroup#global_replication_group_id_suffix}.

---

##### `PrimaryReplicationGroupId`<sup>Required</sup> <a name="PrimaryReplicationGroupId" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.primaryReplicationGroupId"></a>

```csharp
public string PrimaryReplicationGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#primary_replication_group_id ElasticacheGlobalReplicationGroup#primary_replication_group_id}.

---

##### `AutomaticFailoverEnabled`<sup>Optional</sup> <a name="AutomaticFailoverEnabled" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.automaticFailoverEnabled"></a>

```csharp
public object AutomaticFailoverEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#automatic_failover_enabled ElasticacheGlobalReplicationGroup#automatic_failover_enabled}.

---

##### `CacheNodeType`<sup>Optional</sup> <a name="CacheNodeType" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.cacheNodeType"></a>

```csharp
public string CacheNodeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#cache_node_type ElasticacheGlobalReplicationGroup#cache_node_type}.

---

##### `EngineVersion`<sup>Optional</sup> <a name="EngineVersion" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.engineVersion"></a>

```csharp
public string EngineVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#engine_version ElasticacheGlobalReplicationGroup#engine_version}.

---

##### `GlobalReplicationGroupDescription`<sup>Optional</sup> <a name="GlobalReplicationGroupDescription" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.globalReplicationGroupDescription"></a>

```csharp
public string GlobalReplicationGroupDescription { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#global_replication_group_description ElasticacheGlobalReplicationGroup#global_replication_group_description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#id ElasticacheGlobalReplicationGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NumNodeGroups`<sup>Optional</sup> <a name="NumNodeGroups" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.numNodeGroups"></a>

```csharp
public double NumNodeGroups { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#num_node_groups ElasticacheGlobalReplicationGroup#num_node_groups}.

---

##### `ParameterGroupName`<sup>Optional</sup> <a name="ParameterGroupName" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.parameterGroupName"></a>

```csharp
public string ParameterGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#parameter_group_name ElasticacheGlobalReplicationGroup#parameter_group_name}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.timeouts"></a>

```csharp
public ElasticacheGlobalReplicationGroupTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts">ElasticacheGlobalReplicationGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#timeouts ElasticacheGlobalReplicationGroup#timeouts}

---

### ElasticacheGlobalReplicationGroupGlobalNodeGroups <a name="ElasticacheGlobalReplicationGroupGlobalNodeGroups" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticacheGlobalReplicationGroupGlobalNodeGroups {

};
```


### ElasticacheGlobalReplicationGroupTimeouts <a name="ElasticacheGlobalReplicationGroupTimeouts" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticacheGlobalReplicationGroupTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#create ElasticacheGlobalReplicationGroup#create}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#delete ElasticacheGlobalReplicationGroup#delete}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#update ElasticacheGlobalReplicationGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#create ElasticacheGlobalReplicationGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#delete ElasticacheGlobalReplicationGroup#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#update ElasticacheGlobalReplicationGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticacheGlobalReplicationGroupGlobalNodeGroupsList <a name="ElasticacheGlobalReplicationGroupGlobalNodeGroupsList" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticacheGlobalReplicationGroupGlobalNodeGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.get"></a>

```csharp
private ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference <a name="ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.property.globalNodeGroupId">GlobalNodeGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.property.slots">Slots</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroups">ElasticacheGlobalReplicationGroupGlobalNodeGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GlobalNodeGroupId`<sup>Required</sup> <a name="GlobalNodeGroupId" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.property.globalNodeGroupId"></a>

```csharp
public string GlobalNodeGroupId { get; }
```

- *Type:* string

---

##### `Slots`<sup>Required</sup> <a name="Slots" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.property.slots"></a>

```csharp
public string Slots { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.property.internalValue"></a>

```csharp
public ElasticacheGlobalReplicationGroupGlobalNodeGroups InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroups">ElasticacheGlobalReplicationGroupGlobalNodeGroups</a>

---


### ElasticacheGlobalReplicationGroupTimeoutsOutputReference <a name="ElasticacheGlobalReplicationGroupTimeoutsOutputReference" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticacheGlobalReplicationGroupTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



