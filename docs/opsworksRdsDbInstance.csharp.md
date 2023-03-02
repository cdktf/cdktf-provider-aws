# `opsworksRdsDbInstance` Submodule <a name="`opsworksRdsDbInstance` Submodule" id="@cdktf/provider-aws.opsworksRdsDbInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsworksRdsDbInstance <a name="OpsworksRdsDbInstance" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rds_db_instance aws_opsworks_rds_db_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksRdsDbInstance(Construct Scope, string Id, OpsworksRdsDbInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstanceConfig">OpsworksRdsDbInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstanceConfig">OpsworksRdsDbInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OpsworksRdsDbInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OpsworksRdsDbInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OpsworksRdsDbInstance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.dbPasswordInput">DbPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.dbUserInput">DbUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.rdsDbInstanceArnInput">RdsDbInstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.stackIdInput">StackIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.dbPassword">DbPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.dbUser">DbUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.rdsDbInstanceArn">RdsDbInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.stackId">StackId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DbPasswordInput`<sup>Optional</sup> <a name="DbPasswordInput" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.dbPasswordInput"></a>

```csharp
public string DbPasswordInput { get; }
```

- *Type:* string

---

##### `DbUserInput`<sup>Optional</sup> <a name="DbUserInput" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.dbUserInput"></a>

```csharp
public string DbUserInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RdsDbInstanceArnInput`<sup>Optional</sup> <a name="RdsDbInstanceArnInput" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.rdsDbInstanceArnInput"></a>

```csharp
public string RdsDbInstanceArnInput { get; }
```

- *Type:* string

---

##### `StackIdInput`<sup>Optional</sup> <a name="StackIdInput" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.stackIdInput"></a>

```csharp
public string StackIdInput { get; }
```

- *Type:* string

---

##### `DbPassword`<sup>Required</sup> <a name="DbPassword" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.dbPassword"></a>

```csharp
public string DbPassword { get; }
```

- *Type:* string

---

##### `DbUser`<sup>Required</sup> <a name="DbUser" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.dbUser"></a>

```csharp
public string DbUser { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RdsDbInstanceArn`<sup>Required</sup> <a name="RdsDbInstanceArn" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.rdsDbInstanceArn"></a>

```csharp
public string RdsDbInstanceArn { get; }
```

- *Type:* string

---

##### `StackId`<sup>Required</sup> <a name="StackId" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.stackId"></a>

```csharp
public string StackId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpsworksRdsDbInstanceConfig <a name="OpsworksRdsDbInstanceConfig" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksRdsDbInstanceConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DbPassword,
    string DbUser,
    string RdsDbInstanceArn,
    string StackId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstanceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstanceConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstanceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstanceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstanceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstanceConfig.property.dbPassword">DbPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rds_db_instance#db_password OpsworksRdsDbInstance#db_password}. |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstanceConfig.property.dbUser">DbUser</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rds_db_instance#db_user OpsworksRdsDbInstance#db_user}. |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstanceConfig.property.rdsDbInstanceArn">RdsDbInstanceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rds_db_instance#rds_db_instance_arn OpsworksRdsDbInstance#rds_db_instance_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstanceConfig.property.stackId">StackId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rds_db_instance#stack_id OpsworksRdsDbInstance#stack_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rds_db_instance#id OpsworksRdsDbInstance#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstanceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstanceConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstanceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DbPassword`<sup>Required</sup> <a name="DbPassword" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstanceConfig.property.dbPassword"></a>

```csharp
public string DbPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rds_db_instance#db_password OpsworksRdsDbInstance#db_password}.

---

##### `DbUser`<sup>Required</sup> <a name="DbUser" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstanceConfig.property.dbUser"></a>

```csharp
public string DbUser { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rds_db_instance#db_user OpsworksRdsDbInstance#db_user}.

---

##### `RdsDbInstanceArn`<sup>Required</sup> <a name="RdsDbInstanceArn" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstanceConfig.property.rdsDbInstanceArn"></a>

```csharp
public string RdsDbInstanceArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rds_db_instance#rds_db_instance_arn OpsworksRdsDbInstance#rds_db_instance_arn}.

---

##### `StackId`<sup>Required</sup> <a name="StackId" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstanceConfig.property.stackId"></a>

```csharp
public string StackId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rds_db_instance#stack_id OpsworksRdsDbInstance#stack_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.opsworksRdsDbInstance.OpsworksRdsDbInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rds_db_instance#id OpsworksRdsDbInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



