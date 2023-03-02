# `macie2FindingsFilter` Submodule <a name="`macie2FindingsFilter` Submodule" id="@cdktf/provider-aws.macie2FindingsFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Macie2FindingsFilter <a name="Macie2FindingsFilter" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter aws_macie2_findings_filter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Macie2FindingsFilter(Construct Scope, string Id, Macie2FindingsFilterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig">Macie2FindingsFilterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig">Macie2FindingsFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.putFindingCriteria">PutFindingCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetNamePrefix">ResetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetPosition">ResetPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFindingCriteria` <a name="PutFindingCriteria" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.putFindingCriteria"></a>

```csharp
private void PutFindingCriteria(Macie2FindingsFilterFindingCriteria Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.putFindingCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteria">Macie2FindingsFilterFindingCriteria</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetNamePrefix"></a>

```csharp
private void ResetNamePrefix()
```

##### `ResetPosition` <a name="ResetPosition" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetPosition"></a>

```csharp
private void ResetPosition()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Macie2FindingsFilter.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Macie2FindingsFilter.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Macie2FindingsFilter.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.findingCriteria">FindingCriteria</a></code> | <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference">Macie2FindingsFilterFindingCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.findingCriteriaInput">FindingCriteriaInput</a></code> | <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteria">Macie2FindingsFilterFindingCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.namePrefixInput">NamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.positionInput">PositionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.namePrefix">NamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.position">Position</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `FindingCriteria`<sup>Required</sup> <a name="FindingCriteria" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.findingCriteria"></a>

```csharp
public Macie2FindingsFilterFindingCriteriaOutputReference FindingCriteria { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference">Macie2FindingsFilterFindingCriteriaOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FindingCriteriaInput`<sup>Optional</sup> <a name="FindingCriteriaInput" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.findingCriteriaInput"></a>

```csharp
public Macie2FindingsFilterFindingCriteria FindingCriteriaInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteria">Macie2FindingsFilterFindingCriteria</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.namePrefixInput"></a>

```csharp
public string NamePrefixInput { get; }
```

- *Type:* string

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.positionInput"></a>

```csharp
public double PositionInput { get; }
```

- *Type:* double

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.namePrefix"></a>

```csharp
public string NamePrefix { get; }
```

- *Type:* string

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.position"></a>

```csharp
public double Position { get; }
```

- *Type:* double

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Macie2FindingsFilterConfig <a name="Macie2FindingsFilterConfig" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Macie2FindingsFilterConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Action,
    Macie2FindingsFilterFindingCriteria FindingCriteria,
    string Description = null,
    string Id = null,
    string Name = null,
    string NamePrefix = null,
    double Position = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#action Macie2FindingsFilter#action}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.findingCriteria">FindingCriteria</a></code> | <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteria">Macie2FindingsFilterFindingCriteria</a></code> | finding_criteria block. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#description Macie2FindingsFilter#description}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#id Macie2FindingsFilter#id}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#name Macie2FindingsFilter#name}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.namePrefix">NamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#name_prefix Macie2FindingsFilter#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.position">Position</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#position Macie2FindingsFilter#position}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#tags Macie2FindingsFilter#tags}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#tags_all Macie2FindingsFilter#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#action Macie2FindingsFilter#action}.

---

##### `FindingCriteria`<sup>Required</sup> <a name="FindingCriteria" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.findingCriteria"></a>

```csharp
public Macie2FindingsFilterFindingCriteria FindingCriteria { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteria">Macie2FindingsFilterFindingCriteria</a>

finding_criteria block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#finding_criteria Macie2FindingsFilter#finding_criteria}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#description Macie2FindingsFilter#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#id Macie2FindingsFilter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#name Macie2FindingsFilter#name}.

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.namePrefix"></a>

```csharp
public string NamePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#name_prefix Macie2FindingsFilter#name_prefix}.

---

##### `Position`<sup>Optional</sup> <a name="Position" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.position"></a>

```csharp
public double Position { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#position Macie2FindingsFilter#position}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#tags Macie2FindingsFilter#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#tags_all Macie2FindingsFilter#tags_all}.

---

### Macie2FindingsFilterFindingCriteria <a name="Macie2FindingsFilterFindingCriteria" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteria.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Macie2FindingsFilterFindingCriteria {
    object Criterion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteria.property.criterion">Criterion</a></code> | <code>object</code> | criterion block. |

---

##### `Criterion`<sup>Optional</sup> <a name="Criterion" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteria.property.criterion"></a>

```csharp
public object Criterion { get; set; }
```

- *Type:* object

criterion block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#criterion Macie2FindingsFilter#criterion}

---

### Macie2FindingsFilterFindingCriteriaCriterion <a name="Macie2FindingsFilterFindingCriteriaCriterion" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Macie2FindingsFilterFindingCriteriaCriterion {
    string Field,
    string[] Eq = null,
    string[] EqExactMatch = null,
    string Gt = null,
    string Gte = null,
    string Lt = null,
    string Lte = null,
    string[] Neq = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.field">Field</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#field Macie2FindingsFilter#field}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.eq">Eq</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#eq Macie2FindingsFilter#eq}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.eqExactMatch">EqExactMatch</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#eq_exact_match Macie2FindingsFilter#eq_exact_match}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.gt">Gt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#gt Macie2FindingsFilter#gt}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.gte">Gte</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#gte Macie2FindingsFilter#gte}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.lt">Lt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#lt Macie2FindingsFilter#lt}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.lte">Lte</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#lte Macie2FindingsFilter#lte}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.neq">Neq</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#neq Macie2FindingsFilter#neq}. |

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.field"></a>

```csharp
public string Field { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#field Macie2FindingsFilter#field}.

---

##### `Eq`<sup>Optional</sup> <a name="Eq" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.eq"></a>

```csharp
public string[] Eq { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#eq Macie2FindingsFilter#eq}.

---

##### `EqExactMatch`<sup>Optional</sup> <a name="EqExactMatch" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.eqExactMatch"></a>

```csharp
public string[] EqExactMatch { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#eq_exact_match Macie2FindingsFilter#eq_exact_match}.

---

##### `Gt`<sup>Optional</sup> <a name="Gt" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.gt"></a>

```csharp
public string Gt { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#gt Macie2FindingsFilter#gt}.

---

##### `Gte`<sup>Optional</sup> <a name="Gte" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.gte"></a>

```csharp
public string Gte { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#gte Macie2FindingsFilter#gte}.

---

##### `Lt`<sup>Optional</sup> <a name="Lt" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.lt"></a>

```csharp
public string Lt { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#lt Macie2FindingsFilter#lt}.

---

##### `Lte`<sup>Optional</sup> <a name="Lte" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.lte"></a>

```csharp
public string Lte { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#lte Macie2FindingsFilter#lte}.

---

##### `Neq`<sup>Optional</sup> <a name="Neq" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.neq"></a>

```csharp
public string[] Neq { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#neq Macie2FindingsFilter#neq}.

---

## Classes <a name="Classes" id="Classes"></a>

### Macie2FindingsFilterFindingCriteriaCriterionList <a name="Macie2FindingsFilterFindingCriteriaCriterionList" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Macie2FindingsFilterFindingCriteriaCriterionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.get"></a>

```csharp
private Macie2FindingsFilterFindingCriteriaCriterionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Macie2FindingsFilterFindingCriteriaCriterionOutputReference <a name="Macie2FindingsFilterFindingCriteriaCriterionOutputReference" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Macie2FindingsFilterFindingCriteriaCriterionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resetEq">ResetEq</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resetEqExactMatch">ResetEqExactMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resetGt">ResetGt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resetGte">ResetGte</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resetLt">ResetLt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resetLte">ResetLte</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resetNeq">ResetNeq</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEq` <a name="ResetEq" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resetEq"></a>

```csharp
private void ResetEq()
```

##### `ResetEqExactMatch` <a name="ResetEqExactMatch" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resetEqExactMatch"></a>

```csharp
private void ResetEqExactMatch()
```

##### `ResetGt` <a name="ResetGt" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resetGt"></a>

```csharp
private void ResetGt()
```

##### `ResetGte` <a name="ResetGte" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resetGte"></a>

```csharp
private void ResetGte()
```

##### `ResetLt` <a name="ResetLt" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resetLt"></a>

```csharp
private void ResetLt()
```

##### `ResetLte` <a name="ResetLte" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resetLte"></a>

```csharp
private void ResetLte()
```

##### `ResetNeq` <a name="ResetNeq" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resetNeq"></a>

```csharp
private void ResetNeq()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.eqExactMatchInput">EqExactMatchInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.eqInput">EqInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.fieldInput">FieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.gteInput">GteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.gtInput">GtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.lteInput">LteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.ltInput">LtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.neqInput">NeqInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.eq">Eq</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.eqExactMatch">EqExactMatch</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.field">Field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.gt">Gt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.gte">Gte</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.lt">Lt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.lte">Lte</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.neq">Neq</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EqExactMatchInput`<sup>Optional</sup> <a name="EqExactMatchInput" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.eqExactMatchInput"></a>

```csharp
public string[] EqExactMatchInput { get; }
```

- *Type:* string[]

---

##### `EqInput`<sup>Optional</sup> <a name="EqInput" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.eqInput"></a>

```csharp
public string[] EqInput { get; }
```

- *Type:* string[]

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.fieldInput"></a>

```csharp
public string FieldInput { get; }
```

- *Type:* string

---

##### `GteInput`<sup>Optional</sup> <a name="GteInput" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.gteInput"></a>

```csharp
public string GteInput { get; }
```

- *Type:* string

---

##### `GtInput`<sup>Optional</sup> <a name="GtInput" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.gtInput"></a>

```csharp
public string GtInput { get; }
```

- *Type:* string

---

##### `LteInput`<sup>Optional</sup> <a name="LteInput" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.lteInput"></a>

```csharp
public string LteInput { get; }
```

- *Type:* string

---

##### `LtInput`<sup>Optional</sup> <a name="LtInput" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.ltInput"></a>

```csharp
public string LtInput { get; }
```

- *Type:* string

---

##### `NeqInput`<sup>Optional</sup> <a name="NeqInput" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.neqInput"></a>

```csharp
public string[] NeqInput { get; }
```

- *Type:* string[]

---

##### `Eq`<sup>Required</sup> <a name="Eq" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.eq"></a>

```csharp
public string[] Eq { get; }
```

- *Type:* string[]

---

##### `EqExactMatch`<sup>Required</sup> <a name="EqExactMatch" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.eqExactMatch"></a>

```csharp
public string[] EqExactMatch { get; }
```

- *Type:* string[]

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.field"></a>

```csharp
public string Field { get; }
```

- *Type:* string

---

##### `Gt`<sup>Required</sup> <a name="Gt" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.gt"></a>

```csharp
public string Gt { get; }
```

- *Type:* string

---

##### `Gte`<sup>Required</sup> <a name="Gte" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.gte"></a>

```csharp
public string Gte { get; }
```

- *Type:* string

---

##### `Lt`<sup>Required</sup> <a name="Lt" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.lt"></a>

```csharp
public string Lt { get; }
```

- *Type:* string

---

##### `Lte`<sup>Required</sup> <a name="Lte" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.lte"></a>

```csharp
public string Lte { get; }
```

- *Type:* string

---

##### `Neq`<sup>Required</sup> <a name="Neq" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.neq"></a>

```csharp
public string[] Neq { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Macie2FindingsFilterFindingCriteriaOutputReference <a name="Macie2FindingsFilterFindingCriteriaOutputReference" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Macie2FindingsFilterFindingCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.putCriterion">PutCriterion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.resetCriterion">ResetCriterion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCriterion` <a name="PutCriterion" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.putCriterion"></a>

```csharp
private void PutCriterion(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.putCriterion.parameter.value"></a>

- *Type:* object

---

##### `ResetCriterion` <a name="ResetCriterion" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.resetCriterion"></a>

```csharp
private void ResetCriterion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.property.criterion">Criterion</a></code> | <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList">Macie2FindingsFilterFindingCriteriaCriterionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.property.criterionInput">CriterionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteria">Macie2FindingsFilterFindingCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Criterion`<sup>Required</sup> <a name="Criterion" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.property.criterion"></a>

```csharp
public Macie2FindingsFilterFindingCriteriaCriterionList Criterion { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList">Macie2FindingsFilterFindingCriteriaCriterionList</a>

---

##### `CriterionInput`<sup>Optional</sup> <a name="CriterionInput" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.property.criterionInput"></a>

```csharp
public object CriterionInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.property.internalValue"></a>

```csharp
public Macie2FindingsFilterFindingCriteria InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteria">Macie2FindingsFilterFindingCriteria</a>

---



