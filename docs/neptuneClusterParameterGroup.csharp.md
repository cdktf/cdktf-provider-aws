# `neptuneClusterParameterGroup` Submodule <a name="`neptuneClusterParameterGroup` Submodule" id="@cdktf/provider-aws.neptuneClusterParameterGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NeptuneClusterParameterGroup <a name="NeptuneClusterParameterGroup" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group aws_neptune_cluster_parameter_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NeptuneClusterParameterGroup(Construct Scope, string Id, NeptuneClusterParameterGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupConfig">NeptuneClusterParameterGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupConfig">NeptuneClusterParameterGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.putParameter">PutParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.resetNamePrefix">ResetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.resetParameter">ResetParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutParameter` <a name="PutParameter" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.putParameter"></a>

```csharp
private void PutParameter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.putParameter.parameter.value"></a>

- *Type:* object

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.resetNamePrefix"></a>

```csharp
private void ResetNamePrefix()
```

##### `ResetParameter` <a name="ResetParameter" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.resetParameter"></a>

```csharp
private void ResetParameter()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

NeptuneClusterParameterGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

NeptuneClusterParameterGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

NeptuneClusterParameterGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.parameter">Parameter</a></code> | <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterList">NeptuneClusterParameterGroupParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.familyInput">FamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.namePrefixInput">NamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.parameterInput">ParameterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.family">Family</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.namePrefix">NamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.parameter"></a>

```csharp
public NeptuneClusterParameterGroupParameterList Parameter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterList">NeptuneClusterParameterGroupParameterList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FamilyInput`<sup>Optional</sup> <a name="FamilyInput" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.familyInput"></a>

```csharp
public string FamilyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.namePrefixInput"></a>

```csharp
public string NamePrefixInput { get; }
```

- *Type:* string

---

##### `ParameterInput`<sup>Optional</sup> <a name="ParameterInput" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.parameterInput"></a>

```csharp
public object ParameterInput { get; }
```

- *Type:* object

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.family"></a>

```csharp
public string Family { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.namePrefix"></a>

```csharp
public string NamePrefix { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NeptuneClusterParameterGroupConfig <a name="NeptuneClusterParameterGroupConfig" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NeptuneClusterParameterGroupConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Family,
    string Description = null,
    string Id = null,
    string Name = null,
    string NamePrefix = null,
    object Parameter = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupConfig.property.family">Family</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group#family NeptuneClusterParameterGroup#family}. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group#description NeptuneClusterParameterGroup#description}. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group#id NeptuneClusterParameterGroup#id}. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group#name NeptuneClusterParameterGroup#name}. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupConfig.property.namePrefix">NamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group#name_prefix NeptuneClusterParameterGroup#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupConfig.property.parameter">Parameter</a></code> | <code>object</code> | parameter block. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group#tags NeptuneClusterParameterGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group#tags_all NeptuneClusterParameterGroup#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupConfig.property.family"></a>

```csharp
public string Family { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group#family NeptuneClusterParameterGroup#family}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group#description NeptuneClusterParameterGroup#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group#id NeptuneClusterParameterGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group#name NeptuneClusterParameterGroup#name}.

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupConfig.property.namePrefix"></a>

```csharp
public string NamePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group#name_prefix NeptuneClusterParameterGroup#name_prefix}.

---

##### `Parameter`<sup>Optional</sup> <a name="Parameter" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupConfig.property.parameter"></a>

```csharp
public object Parameter { get; set; }
```

- *Type:* object

parameter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group#parameter NeptuneClusterParameterGroup#parameter}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group#tags NeptuneClusterParameterGroup#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group#tags_all NeptuneClusterParameterGroup#tags_all}.

---

### NeptuneClusterParameterGroupParameter <a name="NeptuneClusterParameterGroupParameter" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NeptuneClusterParameterGroupParameter {
    string Name,
    string Value,
    string ApplyMethod = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group#name NeptuneClusterParameterGroup#name}. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameter.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group#value NeptuneClusterParameterGroup#value}. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameter.property.applyMethod">ApplyMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group#apply_method NeptuneClusterParameterGroup#apply_method}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group#name NeptuneClusterParameterGroup#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameter.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group#value NeptuneClusterParameterGroup#value}.

---

##### `ApplyMethod`<sup>Optional</sup> <a name="ApplyMethod" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameter.property.applyMethod"></a>

```csharp
public string ApplyMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group#apply_method NeptuneClusterParameterGroup#apply_method}.

---

## Classes <a name="Classes" id="Classes"></a>

### NeptuneClusterParameterGroupParameterList <a name="NeptuneClusterParameterGroupParameterList" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NeptuneClusterParameterGroupParameterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterList.get"></a>

```csharp
private NeptuneClusterParameterGroupParameterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NeptuneClusterParameterGroupParameterOutputReference <a name="NeptuneClusterParameterGroupParameterOutputReference" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NeptuneClusterParameterGroupParameterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.resetApplyMethod">ResetApplyMethod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApplyMethod` <a name="ResetApplyMethod" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.resetApplyMethod"></a>

```csharp
private void ResetApplyMethod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.property.applyMethodInput">ApplyMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.property.applyMethod">ApplyMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplyMethodInput`<sup>Optional</sup> <a name="ApplyMethodInput" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.property.applyMethodInput"></a>

```csharp
public string ApplyMethodInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `ApplyMethod`<sup>Required</sup> <a name="ApplyMethod" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.property.applyMethod"></a>

```csharp
public string ApplyMethod { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.neptuneClusterParameterGroup.NeptuneClusterParameterGroupParameterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



