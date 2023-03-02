# `dmsReplicationTask` Submodule <a name="`dmsReplicationTask` Submodule" id="@cdktf/provider-aws.dmsReplicationTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsReplicationTask <a name="DmsReplicationTask" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task aws_dms_replication_task}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DmsReplicationTask(Construct Scope, string Id, DmsReplicationTaskConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig">DmsReplicationTaskConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig">DmsReplicationTaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetCdcStartPosition">ResetCdcStartPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetCdcStartTime">ResetCdcStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetReplicationTaskSettings">ResetReplicationTaskSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetStartReplicationTask">ResetStartReplicationTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetCdcStartPosition` <a name="ResetCdcStartPosition" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetCdcStartPosition"></a>

```csharp
private void ResetCdcStartPosition()
```

##### `ResetCdcStartTime` <a name="ResetCdcStartTime" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetCdcStartTime"></a>

```csharp
private void ResetCdcStartTime()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetReplicationTaskSettings` <a name="ResetReplicationTaskSettings" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetReplicationTaskSettings"></a>

```csharp
private void ResetReplicationTaskSettings()
```

##### `ResetStartReplicationTask` <a name="ResetStartReplicationTask" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetStartReplicationTask"></a>

```csharp
private void ResetStartReplicationTask()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DmsReplicationTask.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DmsReplicationTask.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DmsReplicationTask.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationTaskArn">ReplicationTaskArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.cdcStartPositionInput">CdcStartPositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.cdcStartTimeInput">CdcStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.migrationTypeInput">MigrationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationInstanceArnInput">ReplicationInstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationTaskIdInput">ReplicationTaskIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationTaskSettingsInput">ReplicationTaskSettingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.sourceEndpointArnInput">SourceEndpointArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.startReplicationTaskInput">StartReplicationTaskInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tableMappingsInput">TableMappingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.targetEndpointArnInput">TargetEndpointArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.cdcStartPosition">CdcStartPosition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.cdcStartTime">CdcStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.migrationType">MigrationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationInstanceArn">ReplicationInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationTaskId">ReplicationTaskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationTaskSettings">ReplicationTaskSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.sourceEndpointArn">SourceEndpointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.startReplicationTask">StartReplicationTask</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tableMappings">TableMappings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.targetEndpointArn">TargetEndpointArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ReplicationTaskArn`<sup>Required</sup> <a name="ReplicationTaskArn" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationTaskArn"></a>

```csharp
public string ReplicationTaskArn { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `CdcStartPositionInput`<sup>Optional</sup> <a name="CdcStartPositionInput" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.cdcStartPositionInput"></a>

```csharp
public string CdcStartPositionInput { get; }
```

- *Type:* string

---

##### `CdcStartTimeInput`<sup>Optional</sup> <a name="CdcStartTimeInput" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.cdcStartTimeInput"></a>

```csharp
public string CdcStartTimeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MigrationTypeInput`<sup>Optional</sup> <a name="MigrationTypeInput" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.migrationTypeInput"></a>

```csharp
public string MigrationTypeInput { get; }
```

- *Type:* string

---

##### `ReplicationInstanceArnInput`<sup>Optional</sup> <a name="ReplicationInstanceArnInput" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationInstanceArnInput"></a>

```csharp
public string ReplicationInstanceArnInput { get; }
```

- *Type:* string

---

##### `ReplicationTaskIdInput`<sup>Optional</sup> <a name="ReplicationTaskIdInput" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationTaskIdInput"></a>

```csharp
public string ReplicationTaskIdInput { get; }
```

- *Type:* string

---

##### `ReplicationTaskSettingsInput`<sup>Optional</sup> <a name="ReplicationTaskSettingsInput" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationTaskSettingsInput"></a>

```csharp
public string ReplicationTaskSettingsInput { get; }
```

- *Type:* string

---

##### `SourceEndpointArnInput`<sup>Optional</sup> <a name="SourceEndpointArnInput" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.sourceEndpointArnInput"></a>

```csharp
public string SourceEndpointArnInput { get; }
```

- *Type:* string

---

##### `StartReplicationTaskInput`<sup>Optional</sup> <a name="StartReplicationTaskInput" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.startReplicationTaskInput"></a>

```csharp
public object StartReplicationTaskInput { get; }
```

- *Type:* object

---

##### `TableMappingsInput`<sup>Optional</sup> <a name="TableMappingsInput" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tableMappingsInput"></a>

```csharp
public string TableMappingsInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TargetEndpointArnInput`<sup>Optional</sup> <a name="TargetEndpointArnInput" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.targetEndpointArnInput"></a>

```csharp
public string TargetEndpointArnInput { get; }
```

- *Type:* string

---

##### `CdcStartPosition`<sup>Required</sup> <a name="CdcStartPosition" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.cdcStartPosition"></a>

```csharp
public string CdcStartPosition { get; }
```

- *Type:* string

---

##### `CdcStartTime`<sup>Required</sup> <a name="CdcStartTime" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.cdcStartTime"></a>

```csharp
public string CdcStartTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MigrationType`<sup>Required</sup> <a name="MigrationType" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.migrationType"></a>

```csharp
public string MigrationType { get; }
```

- *Type:* string

---

##### `ReplicationInstanceArn`<sup>Required</sup> <a name="ReplicationInstanceArn" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationInstanceArn"></a>

```csharp
public string ReplicationInstanceArn { get; }
```

- *Type:* string

---

##### `ReplicationTaskId`<sup>Required</sup> <a name="ReplicationTaskId" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationTaskId"></a>

```csharp
public string ReplicationTaskId { get; }
```

- *Type:* string

---

##### `ReplicationTaskSettings`<sup>Required</sup> <a name="ReplicationTaskSettings" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationTaskSettings"></a>

```csharp
public string ReplicationTaskSettings { get; }
```

- *Type:* string

---

##### `SourceEndpointArn`<sup>Required</sup> <a name="SourceEndpointArn" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.sourceEndpointArn"></a>

```csharp
public string SourceEndpointArn { get; }
```

- *Type:* string

---

##### `StartReplicationTask`<sup>Required</sup> <a name="StartReplicationTask" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.startReplicationTask"></a>

```csharp
public object StartReplicationTask { get; }
```

- *Type:* object

---

##### `TableMappings`<sup>Required</sup> <a name="TableMappings" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tableMappings"></a>

```csharp
public string TableMappings { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TargetEndpointArn`<sup>Required</sup> <a name="TargetEndpointArn" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.targetEndpointArn"></a>

```csharp
public string TargetEndpointArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DmsReplicationTaskConfig <a name="DmsReplicationTaskConfig" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DmsReplicationTaskConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string MigrationType,
    string ReplicationInstanceArn,
    string ReplicationTaskId,
    string SourceEndpointArn,
    string TableMappings,
    string TargetEndpointArn,
    string CdcStartPosition = null,
    string CdcStartTime = null,
    string Id = null,
    string ReplicationTaskSettings = null,
    object StartReplicationTask = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.migrationType">MigrationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#migration_type DmsReplicationTask#migration_type}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.replicationInstanceArn">ReplicationInstanceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#replication_instance_arn DmsReplicationTask#replication_instance_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.replicationTaskId">ReplicationTaskId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#replication_task_id DmsReplicationTask#replication_task_id}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.sourceEndpointArn">SourceEndpointArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#source_endpoint_arn DmsReplicationTask#source_endpoint_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.tableMappings">TableMappings</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#table_mappings DmsReplicationTask#table_mappings}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.targetEndpointArn">TargetEndpointArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#target_endpoint_arn DmsReplicationTask#target_endpoint_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.cdcStartPosition">CdcStartPosition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#cdc_start_position DmsReplicationTask#cdc_start_position}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.cdcStartTime">CdcStartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#cdc_start_time DmsReplicationTask#cdc_start_time}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#id DmsReplicationTask#id}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.replicationTaskSettings">ReplicationTaskSettings</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#replication_task_settings DmsReplicationTask#replication_task_settings}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.startReplicationTask">StartReplicationTask</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#start_replication_task DmsReplicationTask#start_replication_task}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#tags DmsReplicationTask#tags}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#tags_all DmsReplicationTask#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `MigrationType`<sup>Required</sup> <a name="MigrationType" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.migrationType"></a>

```csharp
public string MigrationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#migration_type DmsReplicationTask#migration_type}.

---

##### `ReplicationInstanceArn`<sup>Required</sup> <a name="ReplicationInstanceArn" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.replicationInstanceArn"></a>

```csharp
public string ReplicationInstanceArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#replication_instance_arn DmsReplicationTask#replication_instance_arn}.

---

##### `ReplicationTaskId`<sup>Required</sup> <a name="ReplicationTaskId" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.replicationTaskId"></a>

```csharp
public string ReplicationTaskId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#replication_task_id DmsReplicationTask#replication_task_id}.

---

##### `SourceEndpointArn`<sup>Required</sup> <a name="SourceEndpointArn" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.sourceEndpointArn"></a>

```csharp
public string SourceEndpointArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#source_endpoint_arn DmsReplicationTask#source_endpoint_arn}.

---

##### `TableMappings`<sup>Required</sup> <a name="TableMappings" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.tableMappings"></a>

```csharp
public string TableMappings { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#table_mappings DmsReplicationTask#table_mappings}.

---

##### `TargetEndpointArn`<sup>Required</sup> <a name="TargetEndpointArn" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.targetEndpointArn"></a>

```csharp
public string TargetEndpointArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#target_endpoint_arn DmsReplicationTask#target_endpoint_arn}.

---

##### `CdcStartPosition`<sup>Optional</sup> <a name="CdcStartPosition" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.cdcStartPosition"></a>

```csharp
public string CdcStartPosition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#cdc_start_position DmsReplicationTask#cdc_start_position}.

---

##### `CdcStartTime`<sup>Optional</sup> <a name="CdcStartTime" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.cdcStartTime"></a>

```csharp
public string CdcStartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#cdc_start_time DmsReplicationTask#cdc_start_time}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#id DmsReplicationTask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ReplicationTaskSettings`<sup>Optional</sup> <a name="ReplicationTaskSettings" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.replicationTaskSettings"></a>

```csharp
public string ReplicationTaskSettings { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#replication_task_settings DmsReplicationTask#replication_task_settings}.

---

##### `StartReplicationTask`<sup>Optional</sup> <a name="StartReplicationTask" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.startReplicationTask"></a>

```csharp
public object StartReplicationTask { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#start_replication_task DmsReplicationTask#start_replication_task}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#tags DmsReplicationTask#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task#tags_all DmsReplicationTask#tags_all}.

---



