# `dataAwsAuditmanagerFramework` Submodule <a name="`dataAwsAuditmanagerFramework` Submodule" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAuditmanagerFramework <a name="DataAwsAuditmanagerFramework" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_framework aws_auditmanager_framework}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAuditmanagerFramework(Construct Scope, string Id, DataAwsAuditmanagerFrameworkConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig">DataAwsAuditmanagerFrameworkConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig">DataAwsAuditmanagerFrameworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.putControlSets">PutControlSets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.resetControlSets">ResetControlSets</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutControlSets` <a name="PutControlSets" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.putControlSets"></a>

```csharp
private void PutControlSets(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.putControlSets.parameter.value"></a>

- *Type:* object

---

##### `ResetControlSets` <a name="ResetControlSets" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.resetControlSets"></a>

```csharp
private void ResetControlSets()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsAuditmanagerFramework.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsAuditmanagerFramework.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsAuditmanagerFramework.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.complianceType">ComplianceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.controlSets">ControlSets</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList">DataAwsAuditmanagerFrameworkControlSetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.tags">Tags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.controlSetsInput">ControlSetsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.frameworkTypeInput">FrameworkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.frameworkType">FrameworkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ComplianceType`<sup>Required</sup> <a name="ComplianceType" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.complianceType"></a>

```csharp
public string ComplianceType { get; }
```

- *Type:* string

---

##### `ControlSets`<sup>Required</sup> <a name="ControlSets" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.controlSets"></a>

```csharp
public DataAwsAuditmanagerFrameworkControlSetsList ControlSets { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList">DataAwsAuditmanagerFrameworkControlSetsList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `ControlSetsInput`<sup>Optional</sup> <a name="ControlSetsInput" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.controlSetsInput"></a>

```csharp
public object ControlSetsInput { get; }
```

- *Type:* object

---

##### `FrameworkTypeInput`<sup>Optional</sup> <a name="FrameworkTypeInput" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.frameworkTypeInput"></a>

```csharp
public string FrameworkTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `FrameworkType`<sup>Required</sup> <a name="FrameworkType" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.frameworkType"></a>

```csharp
public string FrameworkType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAuditmanagerFrameworkConfig <a name="DataAwsAuditmanagerFrameworkConfig" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAuditmanagerFrameworkConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string FrameworkType,
    string Name,
    object ControlSets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.frameworkType">FrameworkType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_framework#framework_type DataAwsAuditmanagerFramework#framework_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_framework#name DataAwsAuditmanagerFramework#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.controlSets">ControlSets</a></code> | <code>object</code> | control_sets block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `FrameworkType`<sup>Required</sup> <a name="FrameworkType" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.frameworkType"></a>

```csharp
public string FrameworkType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_framework#framework_type DataAwsAuditmanagerFramework#framework_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_framework#name DataAwsAuditmanagerFramework#name}.

---

##### `ControlSets`<sup>Optional</sup> <a name="ControlSets" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.controlSets"></a>

```csharp
public object ControlSets { get; set; }
```

- *Type:* object

control_sets block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_framework#control_sets DataAwsAuditmanagerFramework#control_sets}

---

### DataAwsAuditmanagerFrameworkControlSets <a name="DataAwsAuditmanagerFrameworkControlSets" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAuditmanagerFrameworkControlSets {
    object Controls = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets.property.controls">Controls</a></code> | <code>object</code> | controls block. |

---

##### `Controls`<sup>Optional</sup> <a name="Controls" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets.property.controls"></a>

```csharp
public object Controls { get; set; }
```

- *Type:* object

controls block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_framework#controls DataAwsAuditmanagerFramework#controls}

---

### DataAwsAuditmanagerFrameworkControlSetsControls <a name="DataAwsAuditmanagerFrameworkControlSetsControls" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControls.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAuditmanagerFrameworkControlSetsControls {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsAuditmanagerFrameworkControlSetsControlsList <a name="DataAwsAuditmanagerFrameworkControlSetsControlsList" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAuditmanagerFrameworkControlSetsControlsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.get"></a>

```csharp
private DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference <a name="DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsAuditmanagerFrameworkControlSetsList <a name="DataAwsAuditmanagerFrameworkControlSetsList" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAuditmanagerFrameworkControlSetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.get"></a>

```csharp
private DataAwsAuditmanagerFrameworkControlSetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsAuditmanagerFrameworkControlSetsOutputReference <a name="DataAwsAuditmanagerFrameworkControlSetsOutputReference" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsAuditmanagerFrameworkControlSetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.putControls">PutControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.resetControls">ResetControls</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutControls` <a name="PutControls" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.putControls"></a>

```csharp
private void PutControls(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.putControls.parameter.value"></a>

- *Type:* object

---

##### `ResetControls` <a name="ResetControls" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.resetControls"></a>

```csharp
private void ResetControls()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.controls">Controls</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList">DataAwsAuditmanagerFrameworkControlSetsControlsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.controlsInput">ControlsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Controls`<sup>Required</sup> <a name="Controls" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.controls"></a>

```csharp
public DataAwsAuditmanagerFrameworkControlSetsControlsList Controls { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList">DataAwsAuditmanagerFrameworkControlSetsControlsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ControlsInput`<sup>Optional</sup> <a name="ControlsInput" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.controlsInput"></a>

```csharp
public object ControlsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



