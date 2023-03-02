# `dataAwsElasticacheReplicationGroup` Submodule <a name="`dataAwsElasticacheReplicationGroup` Submodule" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsElasticacheReplicationGroup <a name="DataAwsElasticacheReplicationGroup" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/elasticache_replication_group aws_elasticache_replication_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsElasticacheReplicationGroup(Construct Scope, string Id, DataAwsElasticacheReplicationGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig">DataAwsElasticacheReplicationGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig">DataAwsElasticacheReplicationGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsElasticacheReplicationGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsElasticacheReplicationGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsElasticacheReplicationGroup.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.authTokenEnabled">AuthTokenEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.automaticFailoverEnabled">AutomaticFailoverEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.configurationEndpointAddress">ConfigurationEndpointAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.logDeliveryConfiguration">LogDeliveryConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList">DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.memberClusters">MemberClusters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.multiAzEnabled">MultiAzEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.nodeType">NodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.numberCacheClusters">NumberCacheClusters</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.numCacheClusters">NumCacheClusters</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.numNodeGroups">NumNodeGroups</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.primaryEndpointAddress">PrimaryEndpointAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.readerEndpointAddress">ReaderEndpointAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.replicasPerNodeGroup">ReplicasPerNodeGroup</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.replicationGroupDescription">ReplicationGroupDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.snapshotRetentionLimit">SnapshotRetentionLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.snapshotWindow">SnapshotWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.replicationGroupIdInput">ReplicationGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.replicationGroupId">ReplicationGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AuthTokenEnabled`<sup>Required</sup> <a name="AuthTokenEnabled" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.authTokenEnabled"></a>

```csharp
public IResolvable AuthTokenEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AutomaticFailoverEnabled`<sup>Required</sup> <a name="AutomaticFailoverEnabled" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.automaticFailoverEnabled"></a>

```csharp
public IResolvable AutomaticFailoverEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ConfigurationEndpointAddress`<sup>Required</sup> <a name="ConfigurationEndpointAddress" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.configurationEndpointAddress"></a>

```csharp
public string ConfigurationEndpointAddress { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `LogDeliveryConfiguration`<sup>Required</sup> <a name="LogDeliveryConfiguration" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.logDeliveryConfiguration"></a>

```csharp
public DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList LogDeliveryConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList">DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList</a>

---

##### `MemberClusters`<sup>Required</sup> <a name="MemberClusters" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.memberClusters"></a>

```csharp
public string[] MemberClusters { get; }
```

- *Type:* string[]

---

##### `MultiAzEnabled`<sup>Required</sup> <a name="MultiAzEnabled" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.multiAzEnabled"></a>

```csharp
public IResolvable MultiAzEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.nodeType"></a>

```csharp
public string NodeType { get; }
```

- *Type:* string

---

##### `NumberCacheClusters`<sup>Required</sup> <a name="NumberCacheClusters" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.numberCacheClusters"></a>

```csharp
public double NumberCacheClusters { get; }
```

- *Type:* double

---

##### `NumCacheClusters`<sup>Required</sup> <a name="NumCacheClusters" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.numCacheClusters"></a>

```csharp
public double NumCacheClusters { get; }
```

- *Type:* double

---

##### `NumNodeGroups`<sup>Required</sup> <a name="NumNodeGroups" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.numNodeGroups"></a>

```csharp
public double NumNodeGroups { get; }
```

- *Type:* double

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PrimaryEndpointAddress`<sup>Required</sup> <a name="PrimaryEndpointAddress" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.primaryEndpointAddress"></a>

```csharp
public string PrimaryEndpointAddress { get; }
```

- *Type:* string

---

##### `ReaderEndpointAddress`<sup>Required</sup> <a name="ReaderEndpointAddress" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.readerEndpointAddress"></a>

```csharp
public string ReaderEndpointAddress { get; }
```

- *Type:* string

---

##### `ReplicasPerNodeGroup`<sup>Required</sup> <a name="ReplicasPerNodeGroup" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.replicasPerNodeGroup"></a>

```csharp
public double ReplicasPerNodeGroup { get; }
```

- *Type:* double

---

##### `ReplicationGroupDescription`<sup>Required</sup> <a name="ReplicationGroupDescription" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.replicationGroupDescription"></a>

```csharp
public string ReplicationGroupDescription { get; }
```

- *Type:* string

---

##### `SnapshotRetentionLimit`<sup>Required</sup> <a name="SnapshotRetentionLimit" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.snapshotRetentionLimit"></a>

```csharp
public double SnapshotRetentionLimit { get; }
```

- *Type:* double

---

##### `SnapshotWindow`<sup>Required</sup> <a name="SnapshotWindow" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.snapshotWindow"></a>

```csharp
public string SnapshotWindow { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ReplicationGroupIdInput`<sup>Optional</sup> <a name="ReplicationGroupIdInput" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.replicationGroupIdInput"></a>

```csharp
public string ReplicationGroupIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ReplicationGroupId`<sup>Required</sup> <a name="ReplicationGroupId" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.replicationGroupId"></a>

```csharp
public string ReplicationGroupId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsElasticacheReplicationGroupConfig <a name="DataAwsElasticacheReplicationGroupConfig" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsElasticacheReplicationGroupConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ReplicationGroupId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.replicationGroupId">ReplicationGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_replication_group#replication_group_id DataAwsElasticacheReplicationGroup#replication_group_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_replication_group#id DataAwsElasticacheReplicationGroup#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ReplicationGroupId`<sup>Required</sup> <a name="ReplicationGroupId" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.replicationGroupId"></a>

```csharp
public string ReplicationGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_replication_group#replication_group_id DataAwsElasticacheReplicationGroup#replication_group_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_replication_group#id DataAwsElasticacheReplicationGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsElasticacheReplicationGroupLogDeliveryConfiguration <a name="DataAwsElasticacheReplicationGroupLogDeliveryConfiguration" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsElasticacheReplicationGroupLogDeliveryConfiguration {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList <a name="DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.get"></a>

```csharp
private DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference <a name="DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.destination">Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.destinationType">DestinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.logFormat">LogFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.logType">LogType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfiguration">DataAwsElasticacheReplicationGroupLogDeliveryConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.destination"></a>

```csharp
public string Destination { get; }
```

- *Type:* string

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.destinationType"></a>

```csharp
public string DestinationType { get; }
```

- *Type:* string

---

##### `LogFormat`<sup>Required</sup> <a name="LogFormat" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.logFormat"></a>

```csharp
public string LogFormat { get; }
```

- *Type:* string

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.logType"></a>

```csharp
public string LogType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsElasticacheReplicationGroupLogDeliveryConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfiguration">DataAwsElasticacheReplicationGroupLogDeliveryConfiguration</a>

---



