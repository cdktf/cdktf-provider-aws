# `redshiftSnapshotScheduleAssociation` Submodule <a name="`redshiftSnapshotScheduleAssociation` Submodule" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftSnapshotScheduleAssociation <a name="RedshiftSnapshotScheduleAssociation" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_schedule_association aws_redshift_snapshot_schedule_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RedshiftSnapshotScheduleAssociation(Construct Scope, string Id, RedshiftSnapshotScheduleAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig">RedshiftSnapshotScheduleAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig">RedshiftSnapshotScheduleAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

RedshiftSnapshotScheduleAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

RedshiftSnapshotScheduleAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

RedshiftSnapshotScheduleAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.clusterIdentifierInput">ClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.scheduleIdentifierInput">ScheduleIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.scheduleIdentifier">ScheduleIdentifier</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ClusterIdentifierInput`<sup>Optional</sup> <a name="ClusterIdentifierInput" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.clusterIdentifierInput"></a>

```csharp
public string ClusterIdentifierInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ScheduleIdentifierInput`<sup>Optional</sup> <a name="ScheduleIdentifierInput" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.scheduleIdentifierInput"></a>

```csharp
public string ScheduleIdentifierInput { get; }
```

- *Type:* string

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.clusterIdentifier"></a>

```csharp
public string ClusterIdentifier { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ScheduleIdentifier`<sup>Required</sup> <a name="ScheduleIdentifier" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.scheduleIdentifier"></a>

```csharp
public string ScheduleIdentifier { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftSnapshotScheduleAssociationConfig <a name="RedshiftSnapshotScheduleAssociationConfig" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RedshiftSnapshotScheduleAssociationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterIdentifier,
    string ScheduleIdentifier,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_schedule_association#cluster_identifier RedshiftSnapshotScheduleAssociation#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig.property.scheduleIdentifier">ScheduleIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_schedule_association#schedule_identifier RedshiftSnapshotScheduleAssociation#schedule_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_schedule_association#id RedshiftSnapshotScheduleAssociation#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig.property.clusterIdentifier"></a>

```csharp
public string ClusterIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_schedule_association#cluster_identifier RedshiftSnapshotScheduleAssociation#cluster_identifier}.

---

##### `ScheduleIdentifier`<sup>Required</sup> <a name="ScheduleIdentifier" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig.property.scheduleIdentifier"></a>

```csharp
public string ScheduleIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_schedule_association#schedule_identifier RedshiftSnapshotScheduleAssociation#schedule_identifier}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_schedule_association#id RedshiftSnapshotScheduleAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



