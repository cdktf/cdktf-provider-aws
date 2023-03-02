# `ecrReplicationConfiguration` Submodule <a name="`ecrReplicationConfiguration` Submodule" id="@cdktf/provider-aws.ecrReplicationConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcrReplicationConfiguration <a name="EcrReplicationConfiguration" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration aws_ecr_replication_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcrReplicationConfiguration(Construct Scope, string Id, EcrReplicationConfigurationConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig">EcrReplicationConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig">EcrReplicationConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.putReplicationConfiguration">PutReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.resetReplicationConfiguration">ResetReplicationConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutReplicationConfiguration` <a name="PutReplicationConfiguration" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.putReplicationConfiguration"></a>

```csharp
private void PutReplicationConfiguration(EcrReplicationConfigurationReplicationConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.putReplicationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration">EcrReplicationConfigurationReplicationConfiguration</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetReplicationConfiguration` <a name="ResetReplicationConfiguration" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.resetReplicationConfiguration"></a>

```csharp
private void ResetReplicationConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EcrReplicationConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EcrReplicationConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EcrReplicationConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.registryId">RegistryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.replicationConfiguration">ReplicationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference">EcrReplicationConfigurationReplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.replicationConfigurationInput">ReplicationConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration">EcrReplicationConfigurationReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `RegistryId`<sup>Required</sup> <a name="RegistryId" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.registryId"></a>

```csharp
public string RegistryId { get; }
```

- *Type:* string

---

##### `ReplicationConfiguration`<sup>Required</sup> <a name="ReplicationConfiguration" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.replicationConfiguration"></a>

```csharp
public EcrReplicationConfigurationReplicationConfigurationOutputReference ReplicationConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference">EcrReplicationConfigurationReplicationConfigurationOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ReplicationConfigurationInput`<sup>Optional</sup> <a name="ReplicationConfigurationInput" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.replicationConfigurationInput"></a>

```csharp
public EcrReplicationConfigurationReplicationConfiguration ReplicationConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration">EcrReplicationConfigurationReplicationConfiguration</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EcrReplicationConfigurationConfig <a name="EcrReplicationConfigurationConfig" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcrReplicationConfigurationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null,
    EcrReplicationConfigurationReplicationConfiguration ReplicationConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#id EcrReplicationConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.replicationConfiguration">ReplicationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration">EcrReplicationConfigurationReplicationConfiguration</a></code> | replication_configuration block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#id EcrReplicationConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ReplicationConfiguration`<sup>Optional</sup> <a name="ReplicationConfiguration" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.replicationConfiguration"></a>

```csharp
public EcrReplicationConfigurationReplicationConfiguration ReplicationConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration">EcrReplicationConfigurationReplicationConfiguration</a>

replication_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#replication_configuration EcrReplicationConfiguration#replication_configuration}

---

### EcrReplicationConfigurationReplicationConfiguration <a name="EcrReplicationConfigurationReplicationConfiguration" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcrReplicationConfigurationReplicationConfiguration {
    object Rule
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration.property.rule">Rule</a></code> | <code>object</code> | rule block. |

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration.property.rule"></a>

```csharp
public object Rule { get; set; }
```

- *Type:* object

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#rule EcrReplicationConfiguration#rule}

---

### EcrReplicationConfigurationReplicationConfigurationRule <a name="EcrReplicationConfigurationReplicationConfigurationRule" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcrReplicationConfigurationReplicationConfigurationRule {
    object Destination,
    object RepositoryFilter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule.property.destination">Destination</a></code> | <code>object</code> | destination block. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule.property.repositoryFilter">RepositoryFilter</a></code> | <code>object</code> | repository_filter block. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule.property.destination"></a>

```csharp
public object Destination { get; set; }
```

- *Type:* object

destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#destination EcrReplicationConfiguration#destination}

---

##### `RepositoryFilter`<sup>Optional</sup> <a name="RepositoryFilter" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule.property.repositoryFilter"></a>

```csharp
public object RepositoryFilter { get; set; }
```

- *Type:* object

repository_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#repository_filter EcrReplicationConfiguration#repository_filter}

---

### EcrReplicationConfigurationReplicationConfigurationRuleDestination <a name="EcrReplicationConfigurationReplicationConfigurationRuleDestination" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcrReplicationConfigurationReplicationConfigurationRuleDestination {
    string Region,
    string RegistryId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#region EcrReplicationConfiguration#region}. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination.property.registryId">RegistryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#registry_id EcrReplicationConfiguration#registry_id}. |

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#region EcrReplicationConfiguration#region}.

---

##### `RegistryId`<sup>Required</sup> <a name="RegistryId" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination.property.registryId"></a>

```csharp
public string RegistryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#registry_id EcrReplicationConfiguration#registry_id}.

---

### EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter <a name="EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter {
    string Filter,
    string FilterType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter.property.filter">Filter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#filter EcrReplicationConfiguration#filter}. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter.property.filterType">FilterType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#filter_type EcrReplicationConfiguration#filter_type}. |

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#filter EcrReplicationConfiguration#filter}.

---

##### `FilterType`<sup>Required</sup> <a name="FilterType" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter.property.filterType"></a>

```csharp
public string FilterType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#filter_type EcrReplicationConfiguration#filter_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### EcrReplicationConfigurationReplicationConfigurationOutputReference <a name="EcrReplicationConfigurationReplicationConfigurationOutputReference" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcrReplicationConfigurationReplicationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.putRule">PutRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRule` <a name="PutRule" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.putRule"></a>

```csharp
private void PutRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.putRule.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList">EcrReplicationConfigurationReplicationConfigurationRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.ruleInput">RuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration">EcrReplicationConfigurationReplicationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.rule"></a>

```csharp
public EcrReplicationConfigurationReplicationConfigurationRuleList Rule { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList">EcrReplicationConfigurationReplicationConfigurationRuleList</a>

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.ruleInput"></a>

```csharp
public object RuleInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.internalValue"></a>

```csharp
public EcrReplicationConfigurationReplicationConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration">EcrReplicationConfigurationReplicationConfiguration</a>

---


### EcrReplicationConfigurationReplicationConfigurationRuleDestinationList <a name="EcrReplicationConfigurationReplicationConfigurationRuleDestinationList" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcrReplicationConfigurationReplicationConfigurationRuleDestinationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.get"></a>

```csharp
private EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference <a name="EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.registryIdInput">RegistryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.registryId">RegistryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RegistryIdInput`<sup>Optional</sup> <a name="RegistryIdInput" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.registryIdInput"></a>

```csharp
public string RegistryIdInput { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RegistryId`<sup>Required</sup> <a name="RegistryId" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.registryId"></a>

```csharp
public string RegistryId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EcrReplicationConfigurationReplicationConfigurationRuleList <a name="EcrReplicationConfigurationReplicationConfigurationRuleList" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcrReplicationConfigurationReplicationConfigurationRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.get"></a>

```csharp
private EcrReplicationConfigurationReplicationConfigurationRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EcrReplicationConfigurationReplicationConfigurationRuleOutputReference <a name="EcrReplicationConfigurationReplicationConfigurationRuleOutputReference" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcrReplicationConfigurationReplicationConfigurationRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.putDestination">PutDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.putRepositoryFilter">PutRepositoryFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.resetRepositoryFilter">ResetRepositoryFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestination` <a name="PutDestination" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.putDestination"></a>

```csharp
private void PutDestination(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.putDestination.parameter.value"></a>

- *Type:* object

---

##### `PutRepositoryFilter` <a name="PutRepositoryFilter" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.putRepositoryFilter"></a>

```csharp
private void PutRepositoryFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.putRepositoryFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetRepositoryFilter` <a name="ResetRepositoryFilter" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.resetRepositoryFilter"></a>

```csharp
private void ResetRepositoryFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.destination">Destination</a></code> | <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList">EcrReplicationConfigurationReplicationConfigurationRuleDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.repositoryFilter">RepositoryFilter</a></code> | <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList">EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.destinationInput">DestinationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.repositoryFilterInput">RepositoryFilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.destination"></a>

```csharp
public EcrReplicationConfigurationReplicationConfigurationRuleDestinationList Destination { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList">EcrReplicationConfigurationReplicationConfigurationRuleDestinationList</a>

---

##### `RepositoryFilter`<sup>Required</sup> <a name="RepositoryFilter" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.repositoryFilter"></a>

```csharp
public EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList RepositoryFilter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList">EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList</a>

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.destinationInput"></a>

```csharp
public object DestinationInput { get; }
```

- *Type:* object

---

##### `RepositoryFilterInput`<sup>Optional</sup> <a name="RepositoryFilterInput" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.repositoryFilterInput"></a>

```csharp
public object RepositoryFilterInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList <a name="EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.get"></a>

```csharp
private EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference <a name="EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.filterTypeInput">FilterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.filterType">FilterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `FilterTypeInput`<sup>Optional</sup> <a name="FilterTypeInput" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.filterTypeInput"></a>

```csharp
public string FilterTypeInput { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `FilterType`<sup>Required</sup> <a name="FilterType" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.filterType"></a>

```csharp
public string FilterType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



