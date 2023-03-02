# `dataAwsRedshiftClusterCredentials` Submodule <a name="`dataAwsRedshiftClusterCredentials` Submodule" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRedshiftClusterCredentials <a name="DataAwsRedshiftClusterCredentials" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials aws_redshift_cluster_credentials}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsRedshiftClusterCredentials(Construct Scope, string Id, DataAwsRedshiftClusterCredentialsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig">DataAwsRedshiftClusterCredentialsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig">DataAwsRedshiftClusterCredentialsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetAutoCreate">ResetAutoCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetDbGroups">ResetDbGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetDbName">ResetDbName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetDurationSeconds">ResetDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAutoCreate` <a name="ResetAutoCreate" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetAutoCreate"></a>

```csharp
private void ResetAutoCreate()
```

##### `ResetDbGroups` <a name="ResetDbGroups" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetDbGroups"></a>

```csharp
private void ResetDbGroups()
```

##### `ResetDbName` <a name="ResetDbName" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetDbName"></a>

```csharp
private void ResetDbName()
```

##### `ResetDurationSeconds` <a name="ResetDurationSeconds" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetDurationSeconds"></a>

```csharp
private void ResetDurationSeconds()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsRedshiftClusterCredentials.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsRedshiftClusterCredentials.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsRedshiftClusterCredentials.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbPassword">DbPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.expiration">Expiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.autoCreateInput">AutoCreateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.clusterIdentifierInput">ClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbGroupsInput">DbGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbNameInput">DbNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbUserInput">DbUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.durationSecondsInput">DurationSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.autoCreate">AutoCreate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbGroups">DbGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbName">DbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbUser">DbUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.durationSeconds">DurationSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DbPassword`<sup>Required</sup> <a name="DbPassword" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbPassword"></a>

```csharp
public string DbPassword { get; }
```

- *Type:* string

---

##### `Expiration`<sup>Required</sup> <a name="Expiration" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.expiration"></a>

```csharp
public string Expiration { get; }
```

- *Type:* string

---

##### `AutoCreateInput`<sup>Optional</sup> <a name="AutoCreateInput" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.autoCreateInput"></a>

```csharp
public object AutoCreateInput { get; }
```

- *Type:* object

---

##### `ClusterIdentifierInput`<sup>Optional</sup> <a name="ClusterIdentifierInput" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.clusterIdentifierInput"></a>

```csharp
public string ClusterIdentifierInput { get; }
```

- *Type:* string

---

##### `DbGroupsInput`<sup>Optional</sup> <a name="DbGroupsInput" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbGroupsInput"></a>

```csharp
public string[] DbGroupsInput { get; }
```

- *Type:* string[]

---

##### `DbNameInput`<sup>Optional</sup> <a name="DbNameInput" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbNameInput"></a>

```csharp
public string DbNameInput { get; }
```

- *Type:* string

---

##### `DbUserInput`<sup>Optional</sup> <a name="DbUserInput" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbUserInput"></a>

```csharp
public string DbUserInput { get; }
```

- *Type:* string

---

##### `DurationSecondsInput`<sup>Optional</sup> <a name="DurationSecondsInput" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.durationSecondsInput"></a>

```csharp
public double DurationSecondsInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `AutoCreate`<sup>Required</sup> <a name="AutoCreate" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.autoCreate"></a>

```csharp
public object AutoCreate { get; }
```

- *Type:* object

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.clusterIdentifier"></a>

```csharp
public string ClusterIdentifier { get; }
```

- *Type:* string

---

##### `DbGroups`<sup>Required</sup> <a name="DbGroups" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbGroups"></a>

```csharp
public string[] DbGroups { get; }
```

- *Type:* string[]

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbName"></a>

```csharp
public string DbName { get; }
```

- *Type:* string

---

##### `DbUser`<sup>Required</sup> <a name="DbUser" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbUser"></a>

```csharp
public string DbUser { get; }
```

- *Type:* string

---

##### `DurationSeconds`<sup>Required</sup> <a name="DurationSeconds" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.durationSeconds"></a>

```csharp
public double DurationSeconds { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRedshiftClusterCredentialsConfig <a name="DataAwsRedshiftClusterCredentialsConfig" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsRedshiftClusterCredentialsConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterIdentifier,
    string DbUser,
    object AutoCreate = null,
    string[] DbGroups = null,
    string DbName = null,
    double DurationSeconds = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#cluster_identifier DataAwsRedshiftClusterCredentials#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.dbUser">DbUser</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#db_user DataAwsRedshiftClusterCredentials#db_user}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.autoCreate">AutoCreate</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#auto_create DataAwsRedshiftClusterCredentials#auto_create}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.dbGroups">DbGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#db_groups DataAwsRedshiftClusterCredentials#db_groups}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.dbName">DbName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#db_name DataAwsRedshiftClusterCredentials#db_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.durationSeconds">DurationSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#duration_seconds DataAwsRedshiftClusterCredentials#duration_seconds}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#id DataAwsRedshiftClusterCredentials#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.clusterIdentifier"></a>

```csharp
public string ClusterIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#cluster_identifier DataAwsRedshiftClusterCredentials#cluster_identifier}.

---

##### `DbUser`<sup>Required</sup> <a name="DbUser" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.dbUser"></a>

```csharp
public string DbUser { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#db_user DataAwsRedshiftClusterCredentials#db_user}.

---

##### `AutoCreate`<sup>Optional</sup> <a name="AutoCreate" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.autoCreate"></a>

```csharp
public object AutoCreate { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#auto_create DataAwsRedshiftClusterCredentials#auto_create}.

---

##### `DbGroups`<sup>Optional</sup> <a name="DbGroups" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.dbGroups"></a>

```csharp
public string[] DbGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#db_groups DataAwsRedshiftClusterCredentials#db_groups}.

---

##### `DbName`<sup>Optional</sup> <a name="DbName" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.dbName"></a>

```csharp
public string DbName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#db_name DataAwsRedshiftClusterCredentials#db_name}.

---

##### `DurationSeconds`<sup>Optional</sup> <a name="DurationSeconds" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.durationSeconds"></a>

```csharp
public double DurationSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#duration_seconds DataAwsRedshiftClusterCredentials#duration_seconds}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#id DataAwsRedshiftClusterCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



